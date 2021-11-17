function slider() {
  const slides = document.querySelectorAll('.slide');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');
  let currentSlide = 0;
  const maxSlide = slides.length;

  function createDotes() {
    slides.forEach(function(_, idx) {
      dotContainer.insertAdjacentHTML('beforeend',
      `<button class="dots__dot" data-slide="${idx}"></button>`);
    });
  };

  function activeDot(slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };

  function goToSlide(slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  function nextSlide () {
    if(currentSlide === maxSlide - 1) {
      currentSlide = 0;
    }
    else {
      currentSlide++;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  function prevSlide () {
    if(currentSlide === 0) {
      currentSlide = maxSlide - 1;
    }
    else {
      currentSlide--;
    }
    goToSlide(currentSlide);
    activeDot(currentSlide);
  };

  const init = function() {
    goToSlide(0);
    createDotes();
    activeDot(0);
  };
  init();

  //Event handlers
  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function(e) {
    if(e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  dotContainer.addEventListener('click', function(e) {
    if(e.target.classList.contains('dots__dot')) {
      const {slide} = e.target.dataset;
      goToSlide(slide);
      activeDot(slide);
    }
  })
};
slider();