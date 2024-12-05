$(function(){

  
const filterButtons = document.querySelectorAll('.product-top__filter-btn');
const contentItems = document.querySelectorAll('.product-top__content-item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.getAttribute('data-filter'); 

    contentItems.forEach(item => {
      if (filter === 'all' || item.classList.contains(filter.replace('.', ''))) {
        item.classList.remove('hidden'); 
      } else {
        item.classList.add('hidden'); 
      }
    });

    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

  
  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
  });

});