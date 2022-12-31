// 1. Find the navbar
const navBar = document.querySelector('.menu_list');

// 2. Run when navbar is clicked
navBar.addEventListener('click', ()=>{
  
  // 3. Find the checked button
  const navButton = document.querySelector('.menu_btn');
  
  // 4. Change the hamburger to not checked to close the menu
  navButton.checked = false;
})