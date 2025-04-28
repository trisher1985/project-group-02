export default function initializeProjects() {
  document.addEventListener('DOMContentLoaded', () => {
    const listElement = document.querySelector('.list-projects');
    const loadMore = document.querySelector('.load-btn');
    const allElements = [...listElement.querySelectorAll('.item-projects')];

    let page = 3;
    const perPage = 3;

    const showElements = () => {
      allElements.forEach(item => item.classList.remove('last-chld'));

      for (let i = 0; i < allElements.length; i++) {
        allElements[i].style.display = i < page ? 'block' : 'none';

        if (i === page - 1 && allElements[i].style.display === 'block') {
          allElements[i].classList.add('last-chld');
        }
      }
      loadMore.style.display = page >= allElements.length ? 'none' : 'block';
    };

    const smoothScroll = () => {
      const firstVisibleItem = document.querySelector(
        ".item-projects[style='display: block;']"
      );
      if (firstVisibleItem) {
        const { height } = firstVisibleItem.getBoundingClientRect();
        window.scrollBy({
          left: 0,
          top: height,
          behavior: 'smooth',
        });
      }
    };

    loadMore.addEventListener('click', () => {
      page += perPage;
      showElements();
      smoothScroll();
    });

    showElements();
  });
}
