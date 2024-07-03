import React, { useEffect, useState } from "react";
import ProductCard from "./components/ProductCard";
import LikedProducts from "./components/LikedProducts";
import "./App.css";

const App = () => {
  const [products, setProducts] = useState([]);
  const [likedProducts, setLikedProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  const handleLike = (product) => {
    setLikedProducts((prev) => [...prev, product]);
  };

  const handleUnlike = (productId) => {
    setLikedProducts((prev) => prev.filter((p) => p.id !== productId));
  };

  return (
    <div className="app-container">
      <div className="products-container">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onLike={handleLike}
            onUnlike={handleUnlike}
            isLiked={likedProducts.some((p) => p.id === product.id)}
          />
        ))}
      </div>
      <LikedProducts likedProducts={likedProducts} onUnlike={handleUnlike} />
    </div>
  );
};

export default App;
