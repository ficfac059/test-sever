window.addEventListener("scroll", function () {
  var header = document.querySelector("#header");
  if (window.scrollY > 30) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }

  var backToTopBtn = document.querySelector("#backToTopBtn");
  if (window.scrollY > 500) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
});

function scrollTop() {
  var backToTopBtn = document.querySelector("#backToTopBtn");
  if (window.scrollY > 500) {
    backToTopBtn.classList.remove("hidden");
  } else {
    backToTopBtn.classList.add("hidden");
  }
}

document.addEventListener("DOMContentLoaded", function () {
  scrollTop();
  window.addEventListener("scroll", scrollTop);

  document
    .querySelector("#backToTopBtn")
    .addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });

  const sidebar = document.getElementById("sidemenu");
  const toggleButton = document.getElementById("menu-right");
  toggleButton.addEventListener("click", () => {
    sidebar.classList.add("sidebar-open");
    sidebar.classList.remove("hidden");
    sidebar.classList.remove("sidebar-close");
    document.body.style.overflow = "hidden";
  });
  const closeButton = document.getElementById("menu-close-side");
  closeButton.addEventListener("click", () => {
    sidebar.classList.remove("sidebar-open");
    sidebar.classList.add("sidebar-close");
    sidebar.classList.add("hidden");
    document.body.style.overflow = "";
  });
});


$(document).ready(function() {
	var $btns = $('.personnel-tabs').click(function() {
	  if (this.id == 'all') {
	    $('#parent > div').fadeIn(450);
	  } else {
	    var $el = $('.' + this.id).fadeIn(450);
	    $('#parent > div').not($el).hide();
	  }
	  $btns.removeClass('active btn-active');
	  $(this).addClass('active btn-active');
	})
});
