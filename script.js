document.addEventListener('DOMContentLoaded', ()=> {
    const section = document.querySelectorAll('section');
    const toggleBtn = document.querySelector('.nav-toggle');
    const navList = document.querySelector('nav ul');

    const handleActiveNav = ()=> {
//         let scrollCurrentPos = window.pageYOffset;

//         section.forEach((section) => {
//             const sectionHeight = section.offsetHeight;
//             const sectionTop = section.offsetTop - 56;
//             const sectionId = section.getAttribute('id');

//             if ( scrollCurrentPos=>sectionTop && scrollCurrentPos<=sectionTop+sectionHeight ) {
//                 document.querySelector('nav ul a[href*=' + sectionId + ']').classList.add('active');
//             } else {
//                 document.querySelector('nav ul a[href*=' + sectionId + ']').classList.remove('active');
//             }
//         });
    };

    const handleToggleNav = ()=> {
        toggleBtn.classList.toggle('active');
        navList.classList.toggle('active');
    };

    window.addEventListener('scroll', handleActiveNav);
    toggleBtn.addEventListener('click', handleToggleNav);
});