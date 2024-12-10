
$(function () {
  

  $('.top-slider__items').slick({
    dots: true,
    arrows: false,
    fade: true,
  });


  $(document).ready(function() {
    $('.popup-youtube').magnificPopup({
      type: 'iframe',
      iframe: {
        patterns: {
          youtube: {
            index: 'youtube.com/',
            id: 'v=',
            src: 'https://www.youtube.com/embed/%id%?autohide=1'
          }
        }
      }
    });
  
    // Перевірка чи працює Magnific Popup
    $('.popup-youtube').on('click', function(event) {
      event.preventDefault(); 
      event.stopPropagation(); 
      $(this).magnificPopup('open');
    });
  });

  
  $('.popup-youtube').on('click', function(event) {
    event.preventDefault(); 
    event.stopPropagation(); 

    
    $(this).magnificPopup('open');
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
