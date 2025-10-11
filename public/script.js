document.addEventListener("DOMContentLoaded", function () {
    // Animate hero and about images
    const heroImg = document.querySelector(".profile-img");
    const aboutImg = document.querySelector(".profile-img-a");

    setTimeout(() => {
        if (heroImg) heroImg.classList.add("animate");
        if (aboutImg) aboutImg.classList.add("animate");
    }, 300); // slight delay for smoother entrance

    // Page turn buttons
    const pageTurnBtn = document.querySelectorAll('.nextprev-btn');
    pageTurnBtn.forEach((el, index) => {
        el.onclick = () => {
            const pageTurnId = el.getAttribute('data-page');
            const pageTurn = document.getElementById(pageTurnId);
            if (!pageTurn) return; // safety check

            if (pageTurn.classList.contains('turn')) {
                pageTurn.classList.remove('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 2 - index;
                }, 500);
            } else {
                pageTurn.classList.add('turn');
                setTimeout(() => {
                    pageTurn.style.zIndex = 2 + index;
                }, 500);
            }
        }
    });

    // Contact me button
    const pages = document.querySelectorAll('.book-page.page-right');
    const contactMeBtn = document.querySelector('.btn.contact-me');
    if (contactMeBtn) {
        contactMeBtn.onclick = () => {
            pages.forEach((page, index) => {
                setTimeout(() => {
                    page.classList.add('turn');
                    setTimeout(() => {
                        page.style.zIndex = 20 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        }
    }

    // Reverse index function
    let totalPages = pages.length;
    let pageNumber = 0;
    function reverseIndex() {
        pageNumber--;
        if (pageNumber < 0) {
            pageNumber = totalPages - 1;
        }
    }

    // Back profile button
    const backProfileBtn = document.querySelector('.back-profile');
    if (backProfileBtn) {
        backProfileBtn.onclick = () => {
            pages.forEach((_, index) => {
                setTimeout(() => {
                    reverseIndex();
                    pages[pageNumber].classList.remove('turn');

                    setTimeout(() => {
                        reverseIndex();
                        pages[pageNumber].style.zIndex = 10 + index;
                    }, 500);
                }, (index + 1) * 200 + 100);
            });
        }
    }

    // Opening animation (cover right animation)
    const coverRight = document.querySelector('.cover.cover-right');
    if (coverRight) {
        setTimeout(() => {
            coverRight.classList.add('turn');
        }, 2100);

        setTimeout(() => {
            coverRight.style.zIndex = -1;
        }, 2800);
    }

    // Initial page reset animation
    pages.forEach((_, index) => {
        setTimeout(() => {
            reverseIndex();
            pages[pageNumber].classList.remove('turn');

            setTimeout(() => {
                reverseIndex();
                pages[pageNumber].style.zIndex = 10 + index;
            }, 500);
        }, (index + 1) * 200 + 2100);
    });
});
