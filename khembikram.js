var typed = new Typed(".auto-type", {
  strings: ["FreeLancer", "Software Developer", "Cricket Lover"],
  typeSpeed: 150,
  backSpeed: 150,
  loop: true,
});

function showHam() {
  var x = document.getElementById("nav_menu1");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

$(document).ready(function () {
  $("a").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();
      var hash = this.hash;
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
