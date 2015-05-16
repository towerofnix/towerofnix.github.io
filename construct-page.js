// UNDER CONSTRUCTION

// More testing 0_0

var domParser = new window.DOMParser();

fetch('/footer.html').then(function(response) {
  return response.text();
}).then(function(body) {
  var bodyDOM = new domParser.parseFromString(body, "text/html");
  document.body.appendChild(bodyDOM);
});
