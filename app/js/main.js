
$(function () {
  

  

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
  });


  const setupFilterFunctionality = (filterSelector, contentSelector, activeClass = 'active', hiddenClass = 'hidden') => {
    const filterButtons = document.querySelectorAll(filterSelector);
    const contentItems = document.querySelectorAll(contentSelector);

    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');

        contentItems.forEach(item => {
          if (filter === 'all' || item.classList.contains(filter.replace('.', ''))) {
            item.classList.remove(hiddenClass);
          } else {
            item.classList.add(hiddenClass);
          }
        });

        filterButtons.forEach(btn => btn.classList.remove(activeClass));
        button.classList.add(activeClass);
      });
    });
  };

  setupFilterFunctionality('.product-top__filter-btn', '.product-top__content-item');
  setupFilterFunctionality('.design__filter-btn', '.design__content-item');
});
