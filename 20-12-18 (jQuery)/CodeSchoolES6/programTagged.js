let username = process.argv[2];
let comment = process.argv[3];

username = username.replace(/&/g, "&amp;");
username = username.replace(/'/g, "&apos;");
username = username.replace(/"/g, "&quot;");
username = username.replace(/</g, "&lt;");
username = username.replace(/>/g, "&gt;");

comment = comment.replace(/&/g, "&amp;");
comment = comment.replace(/'/g, "&apos;");
comment = comment.replace(/"/g, "&quot;");
comment = comment.replace(/</g, "&lt;");
comment = comment.replace(/>/g, "&gt;");


console.log(`<b>${username} says</b>: "${comment}"`);