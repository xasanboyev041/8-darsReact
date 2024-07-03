import React from "react";

const ProductCard = ({ product, onLike, onUnlike, isLiked }) => {
  return (
    <div className="product-card">
      <img src={product.thumbnail} alt={product.title} />
      <h2>{product.title}</h2>
      <p>{product.description}</p>
      <button
        className={isLiked ? "liked" : ""}
        onClick={() => (isLiked ? onUnlike(product.id) : onLike(product))}
      >
        {isLiked ? "Unlike" : "Like"}
      </button>
    </div>
  );
};

export default ProductCard;
