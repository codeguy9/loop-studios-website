const toggleBtn = document.querySelector('.toggle-btn');
const sideMenu = document.querySelector('.side-menu');
const closeBtn = document.querySelector('.close-btn');

toggleBtn.addEventListener('click', () => {
    sideMenu.classList.toggle('open-side-links');    
    closeBtn.addEventListener('click', () => {
        sideMenu.classList.remove('open-side-links');
    })
})

