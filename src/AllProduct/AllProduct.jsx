import React, { useEffect, useState } from "react";
import "./AllProduct.css";
import { useCart } from "../Cart/CartContext";
export default function ProductList() {
  const [products, setProducts] = useState({ product: [], bestproduct: [] });

  const { addToCart } = useCart();

  // Fetch products from the API
  // useEffect(() => {
  //   fetch("http://localhost:3000/product")
  //     .then((response) => {
  //       if (response.ok) {
  //         return response.json();
  //       }
  //       throw new Error("Unable to fetch products.");
  //     })

  //     .then((data) => {
  //       setProducts(data); // Set `product` array

  //     })
  //     .catch(() => alert("Unable to get the data"));
  // }, []);
  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3000/product").then((response) => {
        if (!response.ok) throw new Error("Unable to fetch products.");
        return response.json();
      }),
      fetch("http://localhost:3000/bestproduct").then((response) => {
        if (!response.ok) throw new Error("Unable to fetch best products.");
        return response.json();
      }),
    ])
      .then(([productData, bestProductData]) => {
        setProducts({ product: productData, bestproduct: bestProductData });
      })
      .catch(() => alert("Unable to get the data"));
  }, []);

  // Click-and-drag scrolling logic
  useEffect(() => {
    const scrollContainer = document.querySelector(".product-grid");

    let isDragging = false;
    let startX;
    let scrollLeft;

    const startDragging = (e) => {
      isDragging = true;
      scrollContainer.classList.add("dragging");
      startX = e.pageX || e.touches[0].pageX; // Support for touch devices
      scrollLeft = scrollContainer.scrollLeft;
    };

    const stopDragging = () => {
      isDragging = false;
      scrollContainer.classList.remove("dragging");
    };

    const handleDragging = (e) => {
      if (!isDragging) return;
      e.preventDefault();
      const x = e.pageX || e.touches[0].pageX; // Support for touch devices
      const walk = (x - startX) * 1.5; // Adjust scrolling speed
      scrollContainer.scrollLeft = scrollLeft - walk;
    };

    scrollContainer.addEventListener("mousedown", startDragging);
    scrollContainer.addEventListener("mousemove", handleDragging);
    scrollContainer.addEventListener("mouseup", stopDragging);
    scrollContainer.addEventListener("mouseleave", stopDragging);
    scrollContainer.addEventListener("touchstart", startDragging);
    scrollContainer.addEventListener("touchmove", handleDragging);
    scrollContainer.addEventListener("touchend", stopDragging);

    return () => {
      scrollContainer.removeEventListener("mousedown", startDragging);
      scrollContainer.removeEventListener("mousemove", handleDragging);
      scrollContainer.removeEventListener("mouseup", stopDragging);
      scrollContainer.removeEventListener("mouseleave", stopDragging);
      scrollContainer.removeEventListener("touchstart", startDragging);
      scrollContainer.removeEventListener("touchmove", handleDragging);
      scrollContainer.removeEventListener("touchend", stopDragging);
    };
  }, []);

  return (
    <>
      <div className="product-list-container">
        <h1 className="title">trending Product</h1>
        <div className="product-grid">
          {products.product.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <img
                  src={`http://localhost:3000${product.image}`}
                  alt={product.name}
                  width="100"
                />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <div className="product-sizes">
                  {/* <span>S</span>
                <span>M</span>
                <span>L</span> */}
                </div>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>

      <div className="product-list-container">
        <h1 className="title">Best Sell Product</h1>
        <div className="product-grid">
          {products.bestproduct.map((product) => (
            <div className="product-card" key={product.id}>
              <div className="product-info">
                <img
                  src={`http://localhost:3000${product.image}`}
                  alt={product.name}
                  width="100"
                />
                <h2 className="product-name">{product.name}</h2>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
                <div className="product-sizes">
                  {/* <span>S</span>
                <span>M</span>
                <span>L</span> */}
                </div>
              </div>
              <button
                className="add-to-cart-btn"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
