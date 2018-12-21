let username = "JackOfAllTrades";
// 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end. --> \d*$
// 2) Username letters can be lowercase and uppercase. --> /i
// 3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters. --> ^[a-z]{2,}
let userCheck = /^[a-z]{2,}\d*$/i; // Change this line
let result = userCheck.test(username);