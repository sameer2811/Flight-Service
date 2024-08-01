function compareTime(laterTime, earlierTime) {
    laterTime = new Date(laterTime).getTime() / 1000;
    earlierTime = new Date(earlierTime).getTime() / 1000;
    if (laterTime <= earlierTime) {
        return false;
    }
    return true;
}
module.exports = compareTime;