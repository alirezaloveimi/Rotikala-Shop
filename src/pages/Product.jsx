import { useState, useContext } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
// imort all products
import { allProducts } from "../data/allProducts";
// import icons
import allIcons from "../data/icons";
// import some componet and functions form react-router-dom
import { Navigate, useLocation, useParams } from "react-router-dom";
// basket context
import { BasketContext } from "../Contexts/BasketContext";
// import React-Toastify
import { Bounce, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Product() {
  // get param form url
  const param = useParams().productId;
  // check if url has product ic
  const selectedProduct = allProducts.find((product) => product.id == param);
  // basket array and there function for change
  const { basket, setBasket } = useContext(BasketContext);

  // states for product size / color
  const [color, setColor] = useState(selectedProduct?.colors[0]);
  const [size, setSize] = useState(selectedProduct?.size[0]);

  // witch page we are now
  const currentPageRoute = useLocation().pathname.split("/");

  // function to add new Product To Basket
  const addNewProductToBasket = () => {
    // create an object for new basket product
    const newBasketProduct = {
      ...selectedProduct,
      size,
      color,
      textProductId: `${selectedProduct.name}/${color}/${size}`,
    };

    const copyBasket = [...basket];

    // find if the selected product is Available is our basket
    const isProductAvailable = copyBasket.find(
      (basketItem) =>
        basketItem.textProductId === newBasketProduct.textProductId
    );

    // add new product to basket or puls count
    if (isProductAvailable) {
      isProductAvailable.count += 1;
      setBasket(copyBasket);

      // show Massage That Product Added
      toast.success("The Product Count Plused by 1", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "bg-white dark:bg-mainDark text-black dark:text-white text-xs sm:text-sm",
        transition: Bounce,
      });
    } else {
      // add new product to basket
      setBasket((prev) => [...prev, newBasketProduct]);

      // show Massage That Product Added
      toast.success("New Product Added To Basket", {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "bg-white dark:bg-mainDark text-black dark:text-white text-xs sm:text-sm",
        transition: Bounce,
      });
    }

    // set color and size to default value
    setColor(selectedProduct.colors[0]);
    setSize(selectedProduct.size[0]);
  };

  // custom close button for toast
  const CustomCloseButton = () => (
    <button className="hidden md:block">{allIcons.closeToastIcon}</button>
  );

  return selectedProduct ? (
    <>
      {/* HEADER-COMPONET */}
      <Header />

      {/* PRODUCT-INFO */}
      <div className="product-info pt-40 pb-10">
        <div className="container">
          {/* CURRENT-ROUTE */}
          <ul className="curent-route-menu flex flex-col md:inline-flex md:flex-row rounded-xl bg-white dark:bg-zinc-900 gap-3 px-4 py-5 mb-6 shadow-md">
            {currentPageRoute.map((route, index) => (
              <li
                key={index + 1}
                className="text-primary flex-align-center gap-2 text-sm md:gap-3"
              >
                <span>
                  {route === ""
                    ? "Home"
                    : !isNaN(route)
                    ? selectedProduct.name
                    : route.charAt(0).toUpperCase() + route.slice(1)}
                </span>
                {index !== currentPageRoute.length - 1 && <span>{">"}</span>}
              </li>
            ))}
          </ul>

          {/* MAIN-PRODUCT-INFO */}
          <div className="product-info-content rounded-xl bg-white dark:bg-zinc-900 shadow-md flex flex-col lg:flex-row">
            {/* PRODUCT-INFO-LEFR-SIDE */}
            <div className="product-info-content-left-side flex flex-col p-4 lg:flex-1">
              {/* PRODUCT-IOCNS */}
              <div className="flex-align-center">
                <div className="grid-center mr-4">{allIcons.compassIcon}</div>
                <div className="grid-center mr-4">{allIcons.heartIcon}</div>
                <div className="grid-center mr-4">
                  {allIcons.stackshareIcon}
                </div>
              </div>
              {/* PRODUCT-IMAGE */}
              <div className="product-info-img">
                <img
                  src={selectedProduct.img}
                  className="w-full h-[400px] object-contain -scale-x-100 lg:h-auto lg:object-cover"
                />
              </div>
            </div>

            {/* PRODUCT-INFO-RIGHT-SIDE */}
            <div className="product-info-content-right-side flex flex-col p-4 lg:flex-[4]">
              <h2 className="text-zinc-700 dark:text-white text-xl font-normal">
                {selectedProduct.name}
              </h2>
              <span className="text-sm text-primary mt-2">
                Product Code : #6457
              </span>

              {/* PRODUCT-MORE-INFOS */}
              <div className="flex flex-col lg:flex-row lg:flex-1">
                <div className="mt-3 border-t border-gray-100 dark:border-white/5">
                  {/* color picker box */}
                  <div className="color-picker-box">
                    <h3 className="my-2 dark:text-white text-zinc-700 text-lg">
                      Pick A Color
                    </h3>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-1 mt-3 dark:text-white">
                      {selectedProduct.colors.map((productcolor) => (
                        <div
                          onClick={() => setColor(productcolor)}
                          className={`flex-align-center cursor-pointer rounded-full border-2 border-gray-100 py-2 px-3 mr-2 shadow ${
                            color === productcolor
                              ? "border-primary dark:border-primary hover:border-primary dark:hover:border-primary"
                              : "hover:border-gray-200 dark:border-white/5 dark:hover:border-white/10"
                          }`}
                        >
                          <span
                            className={`h-5 w-5 rounded-full border-2 border-gray-200 shadow mr-3 dark:border-white/30 ${
                              productcolor === "black"
                                ? "bg-black"
                                : productcolor === "gray"
                                ? "bg-[#808080]"
                                : "bg-white"
                            }`}
                          ></span>
                          {productcolor.charAt(0).toUpperCase() +
                            productcolor.slice(1)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* size box */}
                  <div className="size-box">
                    <h3 className="my-2 dark:text-white text-zinc-700 text-lg">
                      Choes Size
                    </h3>
                    <div className="flex flex-col gap-3 md:flex-row md:items-center md:gap-1 mt-3 dark:text-white">
                      {selectedProduct.size.map((productSize) => (
                        <div
                          onClick={() => setSize(productSize)}
                          className={`cursor-pointer rounded-full border-2 p-2.5 text-center md:text-left mr-2 shadow uppercase ${
                            size === productSize
                              ? "border-primary dark:border-primary hover:border-primary dark:hover:border-primary"
                              : "hover:border-gray-200 dark:border-white/5 dark:hover:border-white/10"
                          }`}
                        >
                          {productSize}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* PRODUT-PAY-BOX */}
                <div className="product-pay-box my-6 lg:m-0 lg:ml-10 lg:flex lg:flex-col lg:justify-end">
                  {/* ALERT-BOX */}
                  <div className="py-4 px-3 rounded-xl text-xs sm:text-sm flex-align-center gap-2 text-primary bg-emerald-500/10 dark:bg-emerald-400/5 gap-x-2">
                    {allIcons.check}
                    Guarantee of physical health and authenticity of goods
                  </div>
                  <h4 className="text-primary my-5 text-base sm:text-lg md:text-2xl">
                    ${selectedProduct.price}
                  </h4>
                  <button
                    onClick={addNewProductToBasket}
                    className="w-full p-4 rounded-xl bg-primary hover:bg-emerald-700 text-white text-sm"
                    type="button"
                  >
                    Add To Card
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        pauseOnHover
        theme="light"
        transition:Bounce
        closeButton={CustomCloseButton}
      />
    </>
  ) : (
    <Navigate to={"/home"} />
  );
}

export default Product;
