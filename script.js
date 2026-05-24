function filterSelection(categories) {
    const items = document.querySelectorAll('.product-card');

    items.forEach(item => {
        const cat = item.getAttribute('data-category');
        const matches = (categories === 'all' || categories === cat);
        item.style.display = matches ? "flex" : "none";
    });
}