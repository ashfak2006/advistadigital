// Initialize ScrollReveal
const sr = ScrollReveal();

// Apply animation to all elements with the "box" class
sr.reveal('.box', {
    duration: 1500, // animation duration in milliseconds
    origin: 'bottom', // animation start point
    distance: '50px', // how far the element moves
    opacity: 0,     // end opacity
    delay: 200,       // delay before animation starts
    reset: false       // replays animation on scroll
});

sr.reveal('.cbox', {
    duration: 1500, 
    origin: 'left', 
    distance: '50px', 
    opacity: 0,     
    delay: 200,       
    reset: false      
});

sr.reveal('.cbox1', {
    duration: 1500, 
    origin: 'right', 
    distance: '50px',  
    opacity: 0,    
    delay: 200,       
    reset: false       
});
