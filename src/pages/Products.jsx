import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// import all products
import { allProducts } from "../data/allProducts";
// import Link Componet from react router dom
import { Link } from "react-router-dom";
// import all icons
import allIcons from "../data/icons";

function Products() {
  const [productSort, setProductSort] = useState("inexpensive");
  const [productArray, setProductArray] = useState(allProducts);

  // filter product item by their price
  const filterHandler = () => {
    const copyArray = [...productArray];
    if (productSort === "inexpensive")
      setProductArray(copyArray.sort((a, b) => a.price - b.price));
    else setProductArray(copyArray.sort((a, b) => b.price - a.price));
  };

  useEffect(() => {
    filterHandler();
  }, [productSort]);

  return (
    <>
      {/* HEADER-SECTION */}
      <Header />

      {/* PRODUCTS-SECTION */}
      <div className="product-section p-5 mt-40 mb-10">
        <div className="container">
          {/* FILTER-SETION */}
          <ul className="bg-white shadow-lg rounded-lg flex flex-col md:flex-row md:items-center dark:bg-zinc-900 p-3 gap-3">
            <li className="flex-align-center p-3 gap-2 justify-center md:justify-start">
              <span className="text-sm text-zinc-600 dark:text-zinc-300 cursor-pointer">
                Sorted By
              </span>
              {allIcons.sortIcon}
            </li>
            <li
              onClick={() => setProductSort("inexpensive")}
              className={` dark:text-zinc-300 rounded-lg p-3 text-sm lg:px-4 cursor-pointer ${
                productSort === "inexpensive"
                  ? "bg-primary hover:bg-primary hover:dark:bg-primary text-white"
                  : "hover:bg-gray-100 hover:dark:bg-black text-zinc-600"
              }`}
            >
              Inexpensive
            </li>
            <li
              onClick={() => setProductSort("expensive")}
              className={`dark:text-zinc-300 rounded-lg p-3 text-sm lg:px-4 cursor-pointer ${
                productSort === "expensive"
                  ? "bg-primary hover:bg-primary hover:dark:bg-primary text-white"
                  : "hover:bg-gray-100 hover:dark:bg-black text-zinc-600"
              }`}
            >
              Expensive
            </li>
          </ul>

          {/* ALL-PRODUCT-BOX */}
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 my-5">
            {productArray.map((product) => (
              <Link to={`/products/${product.id}`}>
                <li className="relative flex flex-col p-[15px] gap-2 rounded-xl shadow bg-white dark:bg-zinc-900">
                  <div className="grid-center">
                    <img
                      src={product.img}
                      className="w-28 mx-auto h-auto sm:w-32 md:w-48 lg:w-auto md:mx-0"
                      alt="product-img"
                    />
                  </div>
                  <p className="cursor-pointer text-wrap text-zinc-700 dark:text-white text-xs sm:text-sm">
                    {product.name}
                  </p>
                  <span className="text-primary text-sm">${product.price}</span>

                  {/* colors */}
                  <div className="flex-align-center space-x-1 my-1">
                    {product.colors.map((color) => (
                      <span
                        className={`inline-block w-5 h-5 shadow-md rounded-full ${
                          color === "black"
                            ? "bg-black"
                            : color === "white"
                            ? "bg-white"
                            : "bg-[#808080]"
                        }`}
                      ></span>
                    ))}
                  </div>
                  {/* size */}
                  <div className="flex-align-center space-x-0.5 my-1">
                    {product.size.map((size) => (
                      <span
                        className={`grid-center p-2 uppercase shadow-md text-xs sm:text-sm rounded-full bg-white dark:bg-mainDark dark:text-white`}
                      >
                        {size}
                      </span>
                    ))}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Products;
