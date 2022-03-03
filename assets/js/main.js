const navLinks = document.querySelectorAll('.nav-item')
const menuToggle = document.getElementById('navbarSupportedContent')
const bsCollapse = new bootstrap.Collapse(menuToggle)
navLinks.forEach((l) => {
    l.addEventListener('click', () => { bsCollapse.toggle() })
})


// Back to top button
$(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back_to_top').fadeIn('slow');
    } else {
      $('.back_to_top').fadeOut('slow');
    }
  });

  $('.back_to_top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

