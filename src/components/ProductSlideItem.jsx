import { useRef } from "react";
// import Link Componet for go to product page
import { Link } from "react-router-dom";

function ProductSlideItem(props) {
  //  product box ref
  const productBox = useRef(null);

  // function for calc the mouse x && y for behind product box line
  const mouseMoveHandler = (e) => {
    let x =
      e.pageX - Math.floor(productBox.current.getBoundingClientRect().left);
    let y =
      e.clientY - Math.floor(productBox.current.getBoundingClientRect().top);
    productBox.current.style.setProperty("--x", x + "px");
    productBox.current.style.setProperty("--y", y + "px");
  };

  return (
    // product-slide-item
    <div
      onMouseMove={mouseMoveHandler}
      ref={productBox}
      className="product-slide-item w-full overflow-hidden relative rounded-xl p-0.5"
    >
      <div className="relative flex flex-col p-[15px] gap-2 rounded-xl shadow bg-white dark:bg-zinc-900">
        <div className="grid-center">
          <img
            src={props.img}
            className="w-32 mx-auto h-auto sm:w-48 md:w-auto md:mx-0"
            alt="product-img"
          />
        </div>
        <p className="cursor-pointer text-wrap text-zinc-700 dark:text-white text-xs sm::text-sm md:text-base">
          {props.name}
        </p>
        <span className="text-primary text-sm">${props.price}</span>
        <button className="px-5 py-2 rounded-lg my-2 bg-primary text-white text-xs sm:text-sm hover:bg-emerald-700">
          <Link to={`/products/${props.id}`}>Show Infos</Link>
        </button>
      </div>
    </div>
  );
}

export default ProductSlideItem;
