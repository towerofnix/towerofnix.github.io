// 100% swaggy way to make a page
// Who needs PHP?

var import = function(url, insertLoc, mode, query) {
  var request = new XMLHttpRequest();
  
  request.onreadystatechange = function(response) {
    var DONE = this.DONE || 4;
    if (this.readyState === DONE) {
      var elementsToAddTo = document.querySelectorAll(insertLoc);
      for (var i = 0; i < elementsToAddTo.length; i++) {
        elementsToAddTo.appendChild(
          new DOMParser().parseFromString(response, "text/html")
        );
      }
    }
  };
  
  request.open(mode || 'GET', url, true);
  request.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  request.send(query);
};

window.onload = function() {
  import("footer.html", "body");
};
