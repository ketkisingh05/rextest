function redirectToPricingPage() {
    window.location.href = "https://portal.rexempiremusic.com/signup";
  }
  function redirectToLogInPage() {
    window.location.href = "Https://portal.rexempiremusic.com";
  }
  const form = document.forms['g-sheet'];
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const scriptURL = "https://script.google.com/macros/s/AKfycbzIfj_xdC8iVIyoV-3rRI8lWJcfdzz2A89BoC5GPxcWw4cwLxHRSAkacgzQqWJ5PcKP3Q/exec";
    fetch(scriptURL, { method: 'POST', body: new FormData(form), mode: "no-cors"})
      .then(response => alert("Thanks for subscribing to our newsletter!"))
      .catch(error => console.error('Error!', error.message));
  });
}
var currentPageUrl = window.location.href;
var navLinks = document.querySelectorAll('.navbar-list a');
for (var i = 0; i < navLinks.length; i++) {
  var link = navLinks[i];
  if (link.href === currentPageUrl) {
    link.classList.add('active');
  }
}

