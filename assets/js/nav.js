// 'use strict';

// nav.js
var navArrow = document.querySelector('.mobile-dropdown');

navArrow.onclick = function() {
    var navItems = document.querySelectorAll('nav ul li');

    navArrow.classList.toggle('js-ease-arrow');

    for(var i=0; i<navItems.length; i++) {
        if(i === 0) {
            navItems[i].classList.toggle('js-divider');
        }
        navItems[i].classList.toggle('js-nav-visible');
    }
};

// post.js
var isMobileSafari = /(iPhone|iPod|iPad).*version.*mobile.*safari/i;

if(isMobileSafari.test(navigator.userAgent)) {
    document.querySelector('main.post header').classList.add('js-mobile-safari-fix');
}
