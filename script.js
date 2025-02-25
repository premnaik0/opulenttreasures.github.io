document.addEventListener('DOMContentLoaded', () => {
    const productCatalog = [
        { name: 'Platinum Bracelet', price: '$400', image: 'images/platinum-bracelet.jpg', description: 'A stunning platinum bracelet that adds elegance to any outfit.' },
        { name: 'Emerald Pendant', price: '$250', image: 'images/emerald-pendant.jpg', description: 'A beautiful emerald pendant that shines with sophistication.' },
        { name: 'Ruby Brooch', price: '$350', image: 'images/ruby-brooch.jpg', description: 'A classic ruby brooch that is perfect for special occasions.' },
        { name: 'Sapphire Ring', price: '$450', image: 'images/sapphire-ring.jpg', description: 'An exquisite sapphire ring that captures attention.' },
        { name: 'Pearl Necklace', price: '$300', image: 'images/pearl-necklace.jpg', description: 'A timeless pearl necklace that never goes out of style.' },
        { name: 'Opal Earrings', price: '$220', image: 'images/opal-earrings.jpg', description: 'Stunning opal earrings that add a pop of color to your look.' },
        { name: 'Gold Cufflinks', price: '$180', image: 'images/gold-cufflinks.jpg', description: 'Elegant gold cufflinks for the modern gentleman.' },
        { name: 'Diamond Tennis Bracelet', price: '$800', image: 'images/diamond-tennis-bracelet.jpg', description: 'A luxurious diamond tennis bracelet that sparkles with every movement.' },
        { name: 'Vintage Silver Ring', price: '$120', image: 'images/vintage-silver-ring.jpg', description: 'A unique vintage silver ring with intricate designs.' },
        { name: 'Amethyst Necklace', price: '$275', image: 'images/amethyst-necklace.jpg', description: 'A stunning amethyst necklace that radiates beauty.' }
    ];

    const productCatalogContainer = document.getElementById('product-catalog');

    // Display Product Catalog
    productCatalog.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product-item';
        productDiv.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="product-image">
            <h4>${item.name}</h4>
            <p>${item.price}</p>
            <p>${item.description}</p>
        `;
        productCatalogContainer.appendChild(productDiv);
    });
});
