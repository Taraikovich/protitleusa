new Swiper('.hero-swiper', {
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.btn-nav-next',
        prevEl: '.btn-nav-prev',
    },
})

new Swiper('.swiper-serve', {
    spaceBetween: 20,
    slidesPerView: 1,
    grid: {
        fill: 'row',
        rows: 2,
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    },
    pagination: {
        el: '.serve-pagination',
    },
    navigation: {
        nextEl: '.serve-next',
        prevEl: '.serve-prev',
    },
})

new Swiper('.swiper-testimonials', {
    spaceBetween: 10,
    slidesPerView: 1,
    grid: {
        fill: 'row',
        rows: 4
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            },
        },
        1024: {
            slidesPerView: 'auto',
            grid: {
                fill: 'row',
                rows: 1
            },
        }
    },
    pagination: {
        el: '.testimonials-pagination',
    },
    navigation: {
        nextEl: '.testimonials-next',
        prevEl: '.testimonials-prev',
    },
})

new Swiper('.swiper-offer', {
    spaceBetween: 10,
    slidesPerView: 1,
    grid: {
        fill: 'row',
        rows: 4
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
            grid: {
                fill: 'row',
                rows: 2
            },
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 20,
            grid: {
                fill: 'row',
                rows: 2
            },
        }
    },
    pagination: {
        el: '.offer-pagination',
    },
    navigation: {
        nextEl: '.offer-next',
        prevEl: '.offer-prev',
    },
})

function showProducts() {
    const products = document.querySelectorAll('.products .col');
    const showBtn = document.querySelector('.btn-show');
    const btnText = showBtn.innerHTML;
    let isShow = false;

    const currentPageWidth = document.documentElement.clientWidth;

    function toggleShow(itemIndex) {
        products.forEach((product, index) => {
            if (index > itemIndex) product.classList.toggle('d-none')
        })

        showBtn.addEventListener('click', () => {
            isShow = !isShow;

            if (isShow) {
                products.forEach(product => {
                    product.classList.remove('d-none');
                })
                showBtn.innerHTML = "Hide"
            } else {
                products.forEach((product, index) => {
                    if (index > itemIndex) product.classList.toggle('d-none')
                })
                showBtn.innerHTML = btnText
            }
        })
    }

    if (currentPageWidth < 768) {
        toggleShow(2);
    } else if (currentPageWidth >= 768 && currentPageWidth < 1024) {
        toggleShow(3);
    } else {
        toggleShow(5);
    }
}

showProducts()

function showNews() {
    const showBtns = document.querySelectorAll('.btn-news');
    const texts = document.querySelectorAll('.news-item-text');

    showBtns.forEach((btn, i) => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            texts[i].classList.toggle('show-news');
        });
    })
}

showNews()

function mapHover() {
    const stateBorders = document.querySelectorAll('path[data-state-border]');
    const stateLabels = document.querySelectorAll('path[data-state-name]');

    stateBorders.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const stateName = item.getAttribute('data-state-border');
            const stateLabel = Array.from(stateLabels).find(
                (item) => item.getAttribute('data-state-name') === stateName
            );
            item.setAttribute('fill-opacity', '1');
            if (stateLabel) stateLabel.setAttribute('fill', '#FEFFFD');
        });

        item.addEventListener('mouseleave', () => {
            const stateName = item.getAttribute('data-state-border');
            const stateLabel = Array.from(stateLabels).find(
                (item) => item.getAttribute('data-state-name') === stateName
            );
            item.setAttribute('fill-opacity', '0.03');
            if (stateLabel) stateLabel.setAttribute('fill', '#AA0E17');
        });
    });

    stateLabels.forEach((item) => {
        item.addEventListener('mouseenter', () => {
            const stateName = item.getAttribute('data-state-name');
            const stateBorder = Array.from(stateBorders).find(
                (item) => item.getAttribute('data-state-border') === stateName
            );
            item.setAttribute('fill', '#FEFFFD');
            stateBorder.setAttribute('fill-opacity', '1');
        });

        item.addEventListener('mouseleave', () => {
            const stateName = item.getAttribute('data-state-name');
            const stateBorder = Array.from(stateBorders).find(
                (item) => item.getAttribute('data-state-border') === stateName
            );
            item.setAttribute('fill', '#AA0E17');
            stateBorder.setAttribute('fill-opacity', '0.03');
        });
    });
}

mapHover()

function textShow() {
    const text = document.querySelector('.text-content');
    const gradient = document.querySelector('.gradient-text');
    const btn = document.querySelector('.btn-more');

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        text.classList.toggle('show-text');
        gradient.classList.toggle('hide-gradient');
        btn.textContent = btn.textContent === 'close' ? 'read more' : 'close';
    })
}

textShow();