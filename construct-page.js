// UNDER CONSTRUCTION

// This is a test using include for HTML5.
// Check it out here: http://www.html5rocks.com/en/tutorials/webcomponents/imports/

// TODO Make with fetch or XMLHttpRequest for cross-browser?

document.addEventListener('load', function() {
  var links = document.getElementsByTagName("link");
  for (var l = 0; l < links.length; l++) {
    if (links[l].rel === "import") {
      console.log(links[l].title, links[l].import);
    }
  }
});
