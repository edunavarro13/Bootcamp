function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        // SOLUTION GOES HERE
        var result = [];
        result = submittedUsers.filter(function (elemento) {
            return goodUsers.includes(elemento);
        });
        return result.length === submittedUsers.length;
    };
}

module.exports = checkUsersValid;

`Tambien se puede usar con every y some

return function allUsersValid(submittedUsers) {
    return submittedUsers.every(function(submittedUser) {
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id
      })
    })
  }`