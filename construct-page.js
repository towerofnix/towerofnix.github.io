// UNDER CONSTRUCTION

// More testing 0_0

fetch('/footer.html').then(function(response) {
  return response.text();
}).then(function(body) {
  var bodyDOM = window.DOMParser(body);
  document.body.appendChild(bodyDOM);
});
