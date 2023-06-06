import React, { useEffect, useState } from 'react';

function ProductFilterAndSearch() {
  const products = {
    data: [
      {
        productName: "Hp Laptop",
        category: "Laptops",
        price: "65,000",
        image: "https://www.reliancedigital.in/medias/HP-6Q121PA-ACJ-High-End-Laptops-492850685-i-1-1200Wx1200H-300Wx300H?context=bWFzdGVyfGltYWdlc3w3MDM5N3xpbWFnZS9qcGVnfGltYWdlcy9oZTkvaGEwLzk4NjAzODc5MzAxNDIuanBnfGQzZGMyOTY1OGVkNTI0MjUwMmYzNTFkODgyMTIyYTRjYThlZDM3M2M1ZDAzNDlkMGNlZjM2OTE3ZjdjNzYxMmU",
      },
      {
        productName: "Mi Smartphone-11 Ultra",
        category: "Android-Phones",
        price: "49,000",
        image: "https://i02.appmifile.com/362_operator_in/23/04/2021/b23987f4a6605e2f4be4562bd0149fd8!800x800!85.png",
      },
      {
        productName: "Sporty SmartWatch",
        category: "Watch",
        price: "4999",
        image: "https://m.media-amazon.com/images/I/610OiiTm9PL._SX425_.jpg",
      },
      {
        productName: "Apple macbook",
        category: "Laptops",
        price: "1,99,999",
        image: "https://unblast.com/wp-content/uploads/2023/01/Surface-Laptop-Studio-Mockup.jpg",
      },
      {
        productName: "Apple - Iphone 14 pro",
        category: "Iphones",
        price: "1,19,999",
        image: "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/iphone-14-pro-model-unselect-gallery-2-202209_GEO_EMEA?wid=5120&hei=2880&fmt=p-jpg&qlt=80&.v=1660753617539",
      },
      {
        productName: "Samsung Galaxy Z Flip3 5G",
        category: "Android-Phones",
        price: "1,09,999",
        image: "https://images.samsung.com/in/smartphones/galaxy-z-flip3-5g/buy/zflip3_carousel_foldunfoldcombo_cream_mo.jpg",
      },
      {
        productName: "Apple - Iphone 11 pro",
        category: "Iphones",
        price: "79,999",
        image: "https://s3b.cashify.in/gpro/uploads/2021/07/10173217/Apple-iPhone-11.jpg",
      },
      {
        productName: "Vivo Y77 5G",
        category: "Android-Phones",
        price: "49,999",
        image: "https://static.theprint.in/wp-content/uploads/2022/08/vivo_mobile20220803140215-e1682767995262.jpg",
      },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchInput, setSearchInput] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    filterProducts(selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const filtered = products.data.filter(product =>
      product.productName.toLowerCase().includes(searchInput.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchInput]);

  const filterProducts = (value) => {
    setSelectedCategory(value);
    const elements = document.querySelectorAll('.card');
    elements.forEach((element) => {
      if (value === 'all' || element.classList.contains(value)) {
        element.classList.remove('hide');
      } else {
        element.classList.add('hide');
      }
    });
  };

  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check" />
        <div className="nav-header">
          <div className="nav-title">Product page</div>
        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>
        <div className="nav-links">
          <a href="#" target="_blank">
            HOME
          </a>
          <a href="#" target="_blank">
            SERVICES
          </a>
          <a href="#" target="_blank">
            FEATURES
          </a>
          <a href="#" target="_blank">
            ABOUT US
          </a>
          <a href="#" target="_blank">
            CONTACT US
          </a>
        </div>
      </div>
      <div className="wrapper">
        <div id="search-container">
          <input
            type="search"
            id="search-input"
            placeholder="Enter product name"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button id="search" onClick={() => filterProducts(selectedCategory)}>
            Search
          </button>
        </div>
        <div id="buttons">
          <button
            className={`button-value${selectedCategory === 'all' ? ' active' : ''}`}
            onClick={() => filterProducts('all')}
          >
            All
          </button>
          <button
            className={`button-value${selectedCategory === 'Laptops' ? ' active' : ''}`}
            onClick={() => filterProducts('Laptops')}
          >
            Laptops
          </button>
          <button
            className={`button-value${selectedCategory === 'Iphones' ? ' active' : ''}`}
            onClick={() => filterProducts('Iphones')}
          >
            Iphones
          </button>
          <button
            className={`button-value${selectedCategory === 'Android-Phones' ? ' active' : ''}`}
            onClick={() => filterProducts('Android-Phones')}
          >
            Android-Phones
          </button>
          <button
            className={`button-value${selectedCategory === 'Watch' ? ' active' : ''}`}
            onClick={() => filterProducts('Watch')}
          >
            Watch
          </button>
        </div>
        <div id="products">
          {filteredProducts.map((product, index) => (
            <div key={index} className={`card ${product.category}`}>
              <div className="image-container">
                <img src={product.image} alt={product.productName} />
              </div>
              <div className="container">
                <h5 className="product-name">{product.productName.toUpperCase()}</h5>
                <h6>Rs. {product.price}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductFilterAndSearch;
