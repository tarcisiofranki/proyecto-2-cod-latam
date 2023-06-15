
const menuItems = document.querySelectorAll('#menu');
menuItems.forEach(function(item) {
    item.addEventListener('click',function(e) {
        const currentItem = document.querySelector('a.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
    });
    
});