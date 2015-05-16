// UNDER CONSTRUCTION

// More testing 0_0

var domParser = new window.DOMParser();

var require = function(targetFile, query, insert) {
  fetch(targetFile).then(function(response) {
    return response.text();
  }).then(function(body) {
    var bodyDOM = domParser.parseFromString(body, "text/html").querySelector(query);
    document.querySelector(insert).appendChild(bodyDOM);
  });
};

require("/includes/header.html", "head", "head");
require("/includes/footer.html", "body", "body");
