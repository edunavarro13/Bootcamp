function getShortMessages(messages) {
    //console.log(messages);
    // SOLUTION GOES HERE
    var result = [];
    result = messages.filter(function (elemento) {
        return elemento.message.length < 50;
    }).map(function (elemento) {
        return elemento.message;
    });
    return result;
  }

  module.exports = getShortMessages;