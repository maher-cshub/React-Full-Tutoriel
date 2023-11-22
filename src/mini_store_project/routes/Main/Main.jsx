import { forwardRef, useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard/ProductCard";

const Main = forwardRef(({}, headerRef) => {
  const api_url = "https://fakestoreapi.com";
  const [ProductList, setProductList] = useState([]);
  const [SearchInput, setSearchInput] = useState("");

  const filteredProducts = (productList, input) => {
    return productList.filter((product) => {
      return product.title.toLowerCase().includes(input); //|| product.description.toLowerCase().includes(input)
    });
  };
  const showProducts = (input = { SearchInput }) => {
    const ProductTemp = filteredProducts(ProductList, input);
    return ProductTemp.map((product, key) => {
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
    const handleChange = (e) => {
      const target = e.currentTarget;
      console.log(target.value);
      setSearchInput(target.value);
    };
    getProducts();
    const search_input = headerRef.current.querySelectorAll(".search_input");

    search_input.forEach((input) => {
      input.addEventListener("keyup", handleChange);
    });
  }, []);

  return (
    <section className="text-gray-600 body-font bg-gray-00">
      <div className="container px-5 py-24 mx-auto">
        <span className="m-6 text-lg text-blue-600">Products List</span>
        <div className="flex flex-wrap m-4">{showProducts(SearchInput)}</div>
      </div>
    </section>
  );
});

export default Main;
