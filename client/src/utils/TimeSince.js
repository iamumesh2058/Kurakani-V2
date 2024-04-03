const timeSince = (createdAt) => {
    const currentTime = new Date();
    const difference = currentTime - createdAt;

    // Convert milliseconds to seconds, minutes, hours, days, etc.
    const seconds = Math.floor(difference / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    // Determine the appropriate unit (seconds, minutes, hours, days)
    let timeSinceString;
    if (days > 0) {
        timeSinceString = `${days} day(s) ago`;
    } else if (hours > 0) {
        timeSinceString = `${hours} hour(s) ago`;
    } else if (minutes > 0) {
        timeSinceString = `${minutes} minute(s) ago`;
    } else {
        timeSinceString = `${seconds} second(s) ago`;
    }
    return timeSinceString;
}

export default timeSince;