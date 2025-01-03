function myFunction() {
  var x = document.getElementById("myDIV");
  var isMobile = window.matchMedia("(max-width: 800px)").matches; // Check if screen width is <= 800px
  var menu = window.getElementById("menu-icon");
  if (isMobile) {
    // Only toggle when screen width is <= 800px
    if (window.getComputedStyle(x).display === "none") {
      x.style.display = "flex"; // Show the menu
    } else {
      x.style.display = "none"; // Hide the menu
    }
  }
}
