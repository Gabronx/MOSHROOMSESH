document.addEventListener('DOMContentLoaded', () => {
    const lookbookItems = document.querySelectorAll('.lookbook-item');
    lookbookItems.forEach(item => {
        item.addEventListener('click', () => {
            console.log(`${item.querySelector('.text').textContent} clicked`);
        });
    });
});
