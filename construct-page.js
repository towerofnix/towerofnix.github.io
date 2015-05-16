// UNDER CONSTRUCTION

// This is a test using include for HTML5.
// Check it out here: http://www.html5rocks.com/en/tutorials/webcomponents/imports/

// TODO Make with fetch or XMLHttpRequest for cross-browser?

document.setTimeout(function() {
  var links = document.getElementsByTagName("link");
  for (var l = 0; l < links.length; l++) {
    if (links[l].rel === "import") {
      var targetElement = document.querySelector(links[l].title);
      targetElement.appendChild(links[l].import);
    }
  }
}, 1000);
