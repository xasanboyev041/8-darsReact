import React from "react";

const LikedProducts = ({ likedProducts, onUnlike }) => {
  return (
    <div className="liked-products">
      <h2>Liked Products</h2>
      {likedProducts.map((product) => (
        <div key={product.id} className="liked-product">
          <img src={product.thumbnail} alt={product.title} />
          <h3>{product.title}</h3>
          <button onClick={() => onUnlike(product.id)}>Unlike</button>
        </div>
      ))}
    </div>
  );
};

export default LikedProducts;
