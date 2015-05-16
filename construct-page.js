// UNDER CONSTRUCTION

// More testing 0_0

fetch('/footer.html').then(function(response) {
  return response.text();
}).then(function(body) {
  document.body.appendChild(body);
});
