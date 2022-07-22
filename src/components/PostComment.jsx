import React, { useEffect, useState } from "react";
import axios from '../helpers/axios';
import timeago from '../helpers/timeago';
import truncate from '../helpers/truncate';
import MyLoader from '../components/MyLoader';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { useLocation } from "react-router-dom"
import Header from "./includes/Header";
import MyDetails from "./MyDetails";
import CategoryList from "./CategoryList";
import LatestCelebs from "./LatestCelebs";
import WhoToFollow from "./WhoToFollow";

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
import AttachFileIcon from '@mui/icons-material/AttachFile';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';

import Badge from '@mui/material/Badge'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ImageIcon from '@mui/icons-material/Image';
import WorkIcon from '@mui/icons-material/Work';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';

let FEEDS_URL;

const headers = {
    'Authorization': `Bearer ${localStorage.token}`
}

function PostRealComment() {

    const { state } = useLocation();
    
    FEEDS_URL = `${process.env.NODE_ENV === 'development' ? 'http://localhost:8000/api/v2/feeds/'+ state : 'https://api-v2-staging.becued.com/api/v2/feeds/'+ state}`;

    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
    const [open, setOpen] = useState(false);
    const [items, setItems] = useState([]);
    const [status, setStatus] = useState(false);
    

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


    const handleComment = (e) => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    };



    return (
        <>
            {status ? <div>

                {mainComment(items)}

        <h5 className="text-white mt-3 mb-3">Comments</h5>
                

        { items.comments.length > 0 ?
            items.comments.map(comment => {
                return thisPostComment(comment)
            }) :
                    <p className="text-white">No comments here</p>
        }

                </div>

         : <MyLoader />}

            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Use Google's location service?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Let Google help apps determine location. This means sending anonymous
                        location data to Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Disagree
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Agree
                    </Button>
                </DialogActions>

            </Dialog>
        </>
    );

}


function mainComment(item){


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

            <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex', color: '#5f5b66' }}>
                <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                    <AttachFileIcon />
                </IconButton>
                <Input
                    variant="plain"
                    size="md"
                    placeholder="Add a comment…"
                    sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px', color: '#fff !important' }}
                />
                <Link underline="none" role="button" sx={{ color: '#fa6be6 !important' }}>
                    Post
                </Link>
            </CardOverflow>
            
        </Card>);
}

function thisPostComment(comment) {
    console.log(comment);
    return (
        <Card
            variant="outlined"
            sx={{
                minWidth: 300,
                background: '#150829',
                '--Card-radius': (theme) => theme.vars.radius.xs,
            }}
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
                        src={comment.commentUserInfo.avatar}
                        sx={{ p: 0.5, border: '2px solid', borderColor: 'background.body' }}
                    />
                </Box>

                <List sx={{ color: 'white' }}>
                    <ListItem >
                        <ListItemText primary={comment.commentUserInfo.stageName || comment.commentUserInfo.fullname} secondary={new Date(comment.feedComments.created_at).toDateString()} sx={{ color: 'white' }} />
                    </ListItem>
                </List>

                <IconButton variant="plain" color="neutral" size="sm" sx={{ ml: 'auto', color: 'white' }}>
                    <MoreHoriz />
                </IconButton>
            </Box>

            {comment.feedComments.thumbnail !== '' ? <CardOverflow>
                <AspectRatio>
                    <img src={comment.feedComments.thumbnail} alt="feedFile" />
                </AspectRatio>
            </CardOverflow> : ''}

            
            <Box sx={{ display: 'flex', alignItems: 'center', mx: -1, my: 1, color: 'white' }}>
                <Box sx={{ width: 0, display: 'flex', gap: 0.5 }}>
                    

                    {
                        comment.feedComments.likes > 0 ? <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#f960f9' }}>
                            <Badge badgeContent={comment.feedComments.likes} >
                                <FavoriteIcon />
                            </Badge>
                        </IconButton> : <IconButton variant="plain" color="neutral" size="sm">
                            <Badge badgeContent={comment.feedComments.likes} >
                                <FavoriteBorder />
                            </Badge>
                        </IconButton>
                    }


                    {
                        comment.feedComments.comments > 0 ? <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#f960f9' }}>
                            <Badge badgeContent={comment.feedComments.comments}>
                                <ModeCommentOutlined />
                            </Badge>
                        </IconButton> : <IconButton variant="plain" color="neutral" size="sm">
                            <Badge badgeContent={comment.feedComments.comments}>
                                <ModeCommentOutlined />
                            </Badge>
                        </IconButton>
                    }


                    {
                        comment.feedComments.shares > 0 ? <IconButton variant="plain" color="neutral" size="sm" sx={{ color: '#f960f9' }}>
                            <Badge badgeContent={comment.feedComments.shares}>
                                <SendOutlined />
                            </Badge>
                        </IconButton> : <IconButton variant="plain" color="neutral" size="sm">
                            <Badge badgeContent={comment.feedComments.shares}>
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
                {comment.feedComments.likes} Likes
            </Link>
            <Typography fontSize="sm" sx={{ color: '#fff' }}>
                
                {comment.feedComments.comment}
            </Typography>
            
            <Link
                component="button"
                underline="none"
                fontSize="10px"
                sx={{ color: '#5f5b66', my: 0.5 }}
            >
                {timeago.formatTime(comment.feedComments.created_at).toUpperCase()}
            </Link>
            <CardOverflow sx={{ p: 'var(--Card-padding)', display: 'flex', color: '#5f5b66' }}>
                <IconButton size="sm" variant="plain" color="neutral" sx={{ ml: -1 }}>
                    <AttachFileIcon />
                </IconButton>
                <Input
                    variant="plain"
                    size="md"
                    placeholder="Add a comment…"
                    sx={{ flexGrow: 1, mr: 1, '--Input-focusedThickness': '0px', color: '#fff !important' }}
                />
                <Link underline="none" role="button" sx={{ color: '#fa6be6 !important' }}>
                    Post
                </Link>
            </CardOverflow>
        </Card>);
    
}


function PostComment() {
    return <div>

        <Header />

        <div className="container mt-5 mb-5" style={{ paddingTop: '50px' }}>
            <div className="row">
                <div className="col-md-3 disp-large">
                    <MyDetails />

                    <CategoryList />

                </div>
                <div className="col-md-6">
                    <PostRealComment />
                </div>
                <div className="col-md-3">
                    <LatestCelebs />
                    <WhoToFollow />
                </div>
            </div>
        </div>
    </div>
}


export default PostComment;