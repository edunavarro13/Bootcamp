function repeatStringNumTimes(str, num) {
    // repeat after me
    let str2 = "";
    for (let i = 0; i < num; i++) {
        str2 += str;
    }
    return str2;
}

repeatStringNumTimes("abc", 3);