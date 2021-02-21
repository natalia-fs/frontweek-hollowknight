document.addEventListener('DOMContentLoaded', () => {
  let tl = new TimelineMax();
  tl.fromTo('.bg-loader', 1,
    { width: '100%' },
    { width: '0%', delay: 3, ease: Expo.easeInOut }
  )
  .fromTo('.bg-video', 2,
    {width: '0%', opacity: 0},
    {width: '100%', opacity: 1, ease: Expo.easeInOut}, '-=2'
  )
  .fromTo('.logo', 0.7,
    {opacity: 0},
    {opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.nav-list', 0.7,
    {y: -60, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.nav-social', 0.7,
    {y: -60, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  
  .fromTo('.item-1', 0.7,
    {opacity: 0},
    {opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.item-2', 0.7,
    {opacity: 0},
    {opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.buttons', 0.7,
    {y: -20, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.item-3', 0.7,
    {y: -60, opacity: 0},
    {y: 0, opacity: 1, ease: Expo.easeInOut}, '-=0.5'
  )
  .fromTo('.item-4', 3,
    {y: -360, opacity: 0},
    {y: 0, opacity: 1, ease: Bounce.ease}, '-=1.3'
  )


  particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
  });
})