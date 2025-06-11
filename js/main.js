// Preloader
window.addEventListener('load', function () {
    document.querySelector('.lds-ellipsis').style.display = 'none';

    setTimeout(() => {
        document.querySelector('.preloader').style.display = 'none';
    }, 333);
});

// Header Sticky
window.addEventListener('scroll', function () {
    let stickytop = document.querySelector('#header.sticky-top .bg-transparent');
    let stickytopslide = document.querySelector('#header.sticky-top-slide');

    if (window.scrollY > 1) {
        stickytop.classList.add('sticky-on-top');
        stickytop.querySelector('.logo img').src = stickytop.querySelector('.logo img').dataset.stickyLogo;
    } else {
        stickytop.classList.remove('sticky-on-top');
        stickytop.querySelector('.logo img').src = stickytop.querySelector('.logo img').dataset.defaultLogo;
    }

    if (window.scrollY > 180) {
        stickytopslide.querySelector('.primary-menu').classList.add('sticky-on');
        stickytopslide.querySelector('.logo img').src = stickytopslide.querySelector('.logo img').dataset.stickyLogo;
    } else {
        stickytopslide.querySelector('.primary-menu').classList.remove('sticky-on');
        stickytopslide.querySelector('.logo img').src = stickytopslide.querySelector('.logo img').dataset.defaultLogo;
    }
});

// Sections Scroll
if (document.body.classList.contains('side-header')) {
    document.querySelectorAll('.smooth-scroll').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let sectionTo = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: sectionTo.offsetTop,
                behavior: 'smooth',
            });
        });
    });
} else {
    document.querySelectorAll('.smooth-scroll').forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            let sectionTo = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: sectionTo.offsetTop - 50,
                behavior: 'smooth',
            });
        });
    });
}

// Mobile Menu
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    this.classList.toggle('show');
});

// Navbar Links - Close Menu on Click
document.querySelectorAll('.navbar-nav a').forEach((link) => {
    link.addEventListener('click', function () {
        document.querySelector('.navbar-collapse').classList.remove('show');
        document.querySelector('.navbar-toggler').classList.remove('show');
    });
});

// Overlay Menu & Side Open Menu - Prevent Default Behavior
document.querySelectorAll('.navbar-side-open .collapse, .navbar-overlay .collapse').forEach((element) => {
    element.addEventListener('show.bs.collapse', function (e) {
        e.preventDefault();
    });

    element.addEventListener('hide.bs.collapse', function (e) {
        e.preventDefault();
    });
});

// Toggle Collapse for Overlay & Side Open Menu
document.querySelectorAll(".navbar-side-open [data-bs-toggle='collapse'], .navbar-overlay [data-bs-toggle='collapse']").forEach((toggle) => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.dataset.bsTarget).classList.toggle('show');
    });
});

/*------------------------------------
    Isotope Portfolio Filter JavaScript
-------------------------------------- */
// window.addEventListener('load', function () {
//     document.querySelectorAll('.portfolio-filter').forEach(function (element) {
//         imagesLoaded(element, function () {
//             var rtlVal = document.documentElement.getAttribute('dir') !== 'rtl';

//             var iso = new Isotope(element, {
//                 layoutMode: 'masonry',
//                 originLeft: rtlVal,
//             });

//             document.querySelectorAll('.portfolio-menu a').forEach(function (link) {
//                 link.addEventListener('click', function (e) {
//                     e.preventDefault();

//                     // Remove active class from all
//                     document.querySelectorAll('.portfolio-menu a').forEach(function (el) {
//                         el.classList.remove('active');
//                     });

//                     // Add active to clicked
//                     link.classList.add('active');

//                     // Filter portfolio
//                     var filterValue = link.getAttribute('data-filter');
//                     iso.arrange({ filter: filterValue });
//                 });
//             });
//         });
//     });
// });

/*------------------------------------
    Typed
-------------------------------------- */
const elements = document.querySelectorAll('.typed');

elements.forEach(function (el) {
    new Typed(el, {
        stringsElement: document.querySelector('.typed-strings'),
        loop: true,
        typeSpeed: 100,
        backSpeed: 50,
        backDelay: 1500,
    });
});

/*------------------------
	tooltips
-------------------------- */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
});

// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //
// -------------------------------------------------------------------------------- //

// JSON Data
const data = {
    projects: [
        {
            id: 1,
            title: 'Infinitude',
            description: 'Here I used HTML, CSS and Bootstrap.',
            image: '/images/infinitude.png',
            link: 'https://mfrrayhan.github.io/mfr-infinitude/',
            category: ['html', 'css', 'bootstrap'],
        },
        {
            id: 2,
            title: 'AgrowFarm',
            description: 'Here I used HTML, CSS, Bootstrap and Jquery.',
            image: '/images/agrowfarm.png',
            link: 'https://mfrrayhan.github.io/agrowfarm/',
            category: ['html', 'css', 'bootstrap', 'jquery'],
        },
        {
            id: 3,
            title: 'AVO',
            description: 'Here I used HTML, CSS, Bootstrap, jQuery and JavaScript.',
            image: '/images/avo.png',
            link: 'https://mfrrayhan.github.io/avo/',
            category: ['html', 'css', 'javascript', 'bootstrap', 'jquery'],
        },
        {
            id: 4,
            title: 'UIPortfolio',
            description: 'Here I used HTML, CSS, Bootstrap, jQuery and JavaScript.',
            image: '/images/uiportfolio.png',
            link: 'https://mfrrayhan.github.io/uiportfolio/',
            category: ['html', 'css', 'javascript', 'bootstrap', 'jquery'],
        },
        {
            id: 5,
            title: 'Lesson - Tailwind CSS',
            description: 'Here I used HTML, CSS and Tailwind.',
            image: '/images/lesson.png',
            link: 'https://mfrrayhan.github.io/lesson-tailwind/',
            category: ['html', 'css', 'tailwind', 'javascript'],
        },
        {
            id: 6,
            title: 'Lesson - CSS3',
            description: 'Here I used HTML and CSS.',
            image: '/images/lesson-css3.png',
            link: 'https://mfrrayhan.github.io/lesson-css3/',
            category: ['html', 'css', 'javascript'],
        },
        {
            id: 7,
            title: 'RRF Exam',
            description: 'Here I used HTML, CSS and Tailwind.',
            image: '/images/rrf-exam.png',
            link: 'https://mfrrayhan.github.io/RRF-Challenge-09/',
            category: ['html', 'css', 'tailwind', 'javascript'],
        },
    ],
};

const container = document.getElementById('project-grid');

// Helper function to get natural image height
function getImageHeight(src) {
    return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img.naturalHeight);
    });
}

// Load Projects
(async function loadProjects() {
    for (const project of data.projects) {
        const div = document.createElement('div');
        const classes = project.category.map((cat) => cat.toLowerCase()).join(' ');
        div.className = `col-md-3 mb-4 project-item ${classes}`;

        div.innerHTML = `
            <div class="single-project-box rounded">
                <a href="${project.link}" target="_blank">
                    <div class="image-wrapper"></div>
                </a>
                <div class="project-content">
                    <a href="${project.link}" target="_blank"><h5 class="text-white">${project.title}</h5></a>
                    <a href="${project.link}" target="_blank" class="custom-green-btn text-capitalize">Visit Website</a>
                </div>
            </div>
        `;

        container.appendChild(div);

        // Set background image for the wrapper
        const wrapper = div.querySelector('.image-wrapper');
        wrapper.style.backgroundImage = `url('${project.image}')`;

        // Get natural height of image for scroll effect
        const naturalHeight = await getImageHeight(project.image);
        wrapper.dataset.naturalHeight = naturalHeight;
    }

    // Init Isotope after projects are loaded
    const iso = new Isotope('#project-grid', {
        itemSelector: '.project-item',
        layoutMode: 'fitRows',
    });

    // Filter Buttons
    document.querySelectorAll('.filter-btn').forEach((btn) => {
        btn.addEventListener('click', function () {
            document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');
            iso.arrange({ filter: filterValue });
        });
    });

    // Scroll on Hover effect on entire project-item
    document.querySelectorAll('.project-item').forEach((item) => {
        const wrapper = item.querySelector('.image-wrapper');

        item.addEventListener('mouseenter', () => {
            wrapper.style.backgroundPosition = 'bottom center';
        });

        item.addEventListener('mouseleave', () => {
            wrapper.style.backgroundPosition = 'top center';
        });
    });
})();
