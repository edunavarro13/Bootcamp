function getShortMessages(messages) {
    // SOLUTION GOES HERE
    var result = [];
    result = messages.filter(function (elemento) {
        return elemento.length < 50;
    });
    return result;
  }

  module.exports = getShortMessages