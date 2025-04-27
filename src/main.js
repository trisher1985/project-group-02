$(document).ready(function() {
  const list = $('.reviews-list');
  const container = $('.swiper-container');
  async function getReviews() {
    try {
      const res = await axios.get(
        'https://portfolio-js.b.goit.study/api/reviews'
      );
      console.log(res);
      return res.data;
    } catch (err) {
      return err;
    }
  }
  async function handleReviews() {
    try {
      const review = await getReviews();
      const markup = renderReviews(review);
      $('.swiper-wrapper').append(markup);
      $('.reviews-buttons').removeClass('hide');
      const swiper = new Swiper('.swiper-container', {
        loop: false,
        slideToClickedSlide: true,
        keyboard: {
          enabled: true,
          onlyInViewport: false,
        },
        nextButton: '.reviews-next-btn',
        prevButton: '.reviews-prev-btn',
        slidesPerView: 'auto',
        paginationClickable: true,
        spaceBetween: 60,
        observer: true,
        observeParents: true,
        breakpoints: {
          1028: {
            slidesPerView: 1,
            spaceBetween: 30
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 10
          }
        }
      });
      $('.js-notify').addClass('hide');
    } catch (error) {
      alert('Unable to load reviews');
      $('.js-notify').removeClass('hide');
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
  handleReviews();
});
