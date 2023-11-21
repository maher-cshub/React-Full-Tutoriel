import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

function Main() {
  const api_url = "https://fakestoreapi.com";
  const [ProductList, setProductList] = useState([]);

  const showProducts = () => {
    return ProductList.map((product, key) => {
      console.log(product);
      return <ProductCard key={key} product={product}></ProductCard>;
    });
  };
  //get all products
  const getProducts = async () => {
    const result = await fetch(`${api_url}/products`);
    const products = await result.json();
    setProductList(products);
  };

  //on mount
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gray-00">
      <div className="container px-5 py-24 mx-auto">
        <span className="m-6 text-lg text-blue-600">Products List</span>
        <div className="flex flex-wrap m-4">{showProducts()}</div>
      </div>
    </section>
  );
}

export default Main;
