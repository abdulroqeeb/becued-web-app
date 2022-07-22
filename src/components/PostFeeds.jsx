import React, { useEffect, useState } from "react";
import axios from '../helpers/axios';
import timeago from '../helpers/timeago';
import truncate from '../helpers/truncate';
import MyLoader from '../components/MyLoader';
import { useNavigate } from "react-router-dom"

import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import CardOverflow from '@mui/joy/CardOverflow';
import Link from '@mui/joy/Link';
import IconButton from '@mui/joy/IconButton';
import Input from '@mui/joy/Input';
import Typography from '@mui/joy/Typography';
import MoreHoriz from '@mui/icons-material/MoreHoriz';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentOutlined from '@mui/icons-material/ModeCommentOutlined';
import SendOutlined from '@mui/icons-material/SendOutlined';
import Face from '@mui/icons-material/Face';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

import Badge from '@mui/material/Badge'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';



const FEEDS_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/feeds' : 'https://api-v2-staging.becued.com/api/v2/feeds'}`;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function PostFeeds() {

    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {

        async function fetchFeeds() {
            try {
                const response = await axios.get(FEEDS_URL, headers);

                setItems(response.data.data);
                setStatus(true);
            } catch (error) {
                console.log(error);
            }
        }

        fetchFeeds();

    }, []);




    return (
        <>
            {status ? items.map((item) => {

                return <div className="card mb-3" key={item.feeds._id} style={{ cursor: 'pointer' }} onClick={() => navigate("/feeds", { state: item.feeds._id })}>
                    {mainComment(item)}
                </div>;
                
            }) : <MyLoader />}


        </>
    );

}


function mainComment(item) {

    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 300,
                background: '#150829',
                '--Card-radius': (theme) => theme.vars.radius.xs,
            }}

            key={item.feeds._id}
        >
            <Box sx={{ display: 'flex', alignItems: 'center', pb: 1.5, gap: 1 }}>
                <Box
                    sx={{
                        position: 'relative',

                        '&:before': {
                            content: '""',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            m: '-2px',
                            borderRadius: '50%',

                        },
                    }}
                >


                    <Avatar
                        size="lg"
                        src={item.userInfo.avatar}
                        sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                    />
                </Box>

                <List sx={{ color: 'white' }}>
                    <ListItem >
                        <ListItemText primary={item.userInfo.stageName || item.userInfo.fullname} secondary={new Date(item.feeds.created_at).toDateString()} sx={{ color: 'white' }} />
                    </ListItem>
                </List>

                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto', color: 'white' }}>
                    <MoreHoriz />
                </IconButton>
            </Box>

            {item.feeds.thumbnail !== '' ? <CardOverflow>
                <AspectRatio>
                    <img src={item.feeds.thumbnail} alt="feedFile" />
                </AspectRatio>
            </CardOverflow> : ''}


            <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1, color: 'white' }}>
                <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>

                {
                        item.feeds.likes > 0 ? <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#f960f9' }}>
                            <Badge badgeContent={item.feeds.likes} >
                                <FavoriteIcon />
                            </Badge>
                        </IconButton> : <IconButton variant="plain" color="neutral" size="sm">
                            <Badge badgeContent={item.feeds.likes} >
                                    <FavoriteBorder />
                            </Badge>
                        </IconButton>
                }


                {
                        item.feeds.comments > 0 ? <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#f960f9' }}>
                            <Badge badgeContent={item.feeds.comments}>
                                <ModeCommentOutlined />
                            </Badge>
                        </IconButton> : <IconButton variant="plain" color="neutral" size="sm">
                            <Badge badgeContent={item.feeds.comments}>
                                <ModeCommentOutlined />
                            </Badge>
                        </IconButton>
                }


                {
                        item.feeds.shares > 0 ? <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#f960f9' }}>
                            <Badge badgeContent={item.feeds.shares}>
                                <SendOutlined />
                            </Badge>
                        </IconButton> : <IconButton variant="plain" color="neutral" size="sm">
                            <Badge badgeContent={item.feeds.shares}>
                                <SendOutlined />
                            </Badge>
                        </IconButton>
                }
                    
                    
                    
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mx: 'auto' }}>
                    {[...Array(5)].map((_, index) => (
                        <Box
                            key={index}
                            sx={{
                                borderRadius: '50%',
                                width: `max(${6 - index}px, 3px)`,
                                height: `max(${6 - index}px, 3px)`,
                                bgcolor: index === 0 ? 'primary.solidBg' : 'background.level3',
                            }}
                        />
                    ))}
                </Box>

            </Box>
            <Link
                component="button"
                underline="none"
                fontSize="sm"
                fontWeight="lg"
                textColor="text.primary"
                sx={{ color: '#fff' }}
            >
                {item.feeds.likes} Likes
            </Link>
            <Typography fontSize="sm" sx={{ color: '#fff' }}>

                {item.feeds.description}
            </Typography>

            <Link
                component="button"
                underline="none"
                fontSize="10px"
                sx={{ color: '#5f5b66', my: 0.5 }}
            >
                {timeago.formatTime(item.feeds.created_at).toUpperCase()}
            </Link>

        </Card>);
}


export default PostFeeds;