// Var
const imgDetails = document.getElementsByClassName('image__detail-item');
const imgShow = document.getElementsByClassName('show');

const arrowLeft = document.getElementById('arrow__left');
const arrowRight = document.getElementById('arrow__right');

const tabs = document.querySelectorAll('.tab-item');
const panes = document.querySelectorAll('.tab-pane');
const tabActive = document.querySelector('.tab-item.active');
const line = document.querySelector('.tabs .line');

// Handle Show Image
for (var i = 0; i < imgDetails.length; i++) {
    imgDetails[i].addEventListener('click', function (e) {
        if (imgShow.length > 0) {
            imgShow[0].classList.remove('show');
        }

        this.classList.add('show');
        document.getElementById('thumb').src = this.childNodes[1].src;
    });
}

// Handle Click Arrow Left/Right
arrowLeft.addEventListener('click', function (e) {
    document.getElementById('image__detail-list').scrollLeft -= 140;
});

arrowRight.addEventListener('click', function (e) {
    document.getElementById('image__detail-list').scrollLeft += 140;
});

// Handle Tab Active
tabs.forEach((tab, index) => {
    const pane = panes[index];

    line.style.left = tabActive.offsetLeft + 'px';
    line.style.width = tabActive.offsetWidth + 'px';

    tab.onclick = function (e) {
        document.querySelector('.tab-item.active').classList.remove('active');
        document.querySelector('.tab-pane.active').classList.remove('active');

        line.style.left = this.offsetLeft + 'px';
        line.style.width = this.offsetWidth + 'px';

        this.classList.add('active');
        pane.classList.add('active');
    };
});

// Handle Slick Slider Product Similar
$(document).ready(function () {
    $('.similar__list').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinity: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        draggable: false,
        dots: true,
    });
});
