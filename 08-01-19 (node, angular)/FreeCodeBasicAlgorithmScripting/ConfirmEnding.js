function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    let final = str.slice(str.length - target.length);
    // -- Falcor
    return final === target;
}

confirmEnding("Bastian", "n");