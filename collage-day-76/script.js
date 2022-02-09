const rellax = new Rellax('.rellax');

const motionMediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

// if the user prefers reduced motion, disable parallax
if (motionMediaQuery.matches) rellax.destroy();