// Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap';

// Font Awesome
import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'

// Styles
import './styles/css/style.css'

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });

        document.querySelectorAll('.navbar-nav a').forEach(item => {
            item.classList.remove('active')
        })

        e.target.classList.add('active')
    });
});

document.addEventListener('scroll', e => {
    const navbar = document.querySelector('.navbar')
    if (window.pageYOffset > navbar.offsetTop) {
        navbar.classList.add("sticky-header");
        navbar.classList.remove("navbar-dark")
        navbar.classList.add("navbar-light");
      } else {
        navbar.classList.remove("sticky-header");
        navbar.classList.add("navbar-dark")
        navbar.classList.remove("navbar-light");
      }
})

document.querySelector('#form-send').addEventListener('click', e => {
    e.preventDefault()

    const name = document.getElementById('name')
    const phone = document.getElementById('phone')

    if (!phone.value.trim()) {
        phone.style.border = '1px solid red'
        return
    }

    fetch('/send.php', {
        method: 'POST',
        body: JSON.stringify({name: name.value, phone: phone.value})
    })

})