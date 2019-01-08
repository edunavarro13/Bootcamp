function truncateString(str, num) {
    // Clear out that junk in your trunk
    if (str.length > num) {
        let str2 = str.slice(0, num) + "...";
        return str2;
    } else {
        return str;
    }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);