const list = document.querySelector('.reviews-list');
const container = document.querySelector('.reviews-swiper');
const errorInfoMessage = document.querySelector('.js-notify');

async function getReviews() {
  try {
    const res = await axios.get(
      'https://portfolio-js.b.goit.study/api/reviews'
    );
    return res.data;
  } catch (err) {
    return err;
  }
}

function renderReview({ avatar_url, author, review }) {
  return `<li class="reviews-item swiper-slide">
              <div class="swiper-slide-inner swiper-slide-transform">
                <p class="reviews-item-text">
                  ${review}
                </p>
                <div class="reviews-item-head">
                  <img class="reviews-item-img" src="${avatar_url}" alt="${author} photo" width="48" height="48" loading="lazy" />
                  <h3 class="reviews-item-title">${author}</h3>
                </div>
              </div>
          </li>`;
}

function renderReviews(reviewsArr) {
  return reviewsArr.map(renderReview).join('');
}

document.addEventListener('DOMContentLoaded', handleReviews);

async function handleReviews() {
  try {
    const review = await getReviews();
    const markup = renderReviews(review);
    list.insertAdjacentHTML('beforeend', markup);
    errorInfoMessage.classList.add('hide');
  } catch (error) {
    errorInfoMessage.classList.remove('hide');
  }
}

const swiper = new Swiper(container, {
  direction: 'horizontal',
  slidesPerView: 1,
  speed: 400,
  spaceBetween: 32,
  navigation: {
    nextEl: '.reviews-next-btn',
    prevEl: '.reviews-prev-btn',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1280: {
      slidesPerView: 2,
    },
  },
});
