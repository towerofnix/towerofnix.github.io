// UNDER CONSTRUCTION

// More testing 0_0

var domParser = new window.DOMParser();

var require = function(targetFile, query, insert) {
  fetch(targetFile).then(function(response) {
    return response.text();
  }).then(function(body) {
    var bodyDOM = domParser.parseFromString(body, "text/html").querySelector(query);
    for (var i = 0; i < bodyDOM.children.length; i++) {
      document.querySelector(insert).appendChild(bodyDOM.children[i]);
    }
  });
};

require("/includes/header.html", "head", "head");
require("/includes/footer.html", "body", "body");
