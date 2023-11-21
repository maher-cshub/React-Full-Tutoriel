import React from "react";
import Rating from "@mui/material/Rating";

function ProductCard({ product }) {
  return (
    <div className="w-full p-4 lg:w-1/4 md:w-1/2">
      <a className="relative block overflow-hidden rounded h-[250px]">
        <img
          alt="ecommerce"
          className="block object-contain w-full h-full"
          src={product.image}
        />
      </a>
      <div className="mt-4">
        <h3 className="inline mb-1 text-xs tracking-widest text-gray-500 title-font">
          {product.category}
        </h3>
        <div className="flex justify-center float-right">
          <Rating
            name="half-rating-read"
            defaultValue={product.rating.rate}
            precision={0.1}
            readOnly
          />
          <span>{product.rating.rate}/5</span>
        </div>
        <h2 className="text-lg font-medium text-gray-900 title-font">
          {product.title}
        </h2>
        <p className="mt-1">${product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
