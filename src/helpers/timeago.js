import TimeAgo from 'javascript-time-ago'

// English.
import en from 'javascript-time-ago/locale/en'

TimeAgo.addDefaultLocale(en)

const formatTime = (date) => {
    // Create formatter (English).
    const timeAgo = new TimeAgo('en-US')

    return timeAgo.format(new Date(date))
}

export default formatTime;