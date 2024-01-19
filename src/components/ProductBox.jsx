import ProductSlideItem from "./ProductSlideItem";
// import all icons
import allIcons from "../data/icons";
// import swiper for slider
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";

function ProductBox({ title, allProducts }) {
  const allProductsArray =
    title === "Special Offer" ? allProducts : allProducts.reverse();
  return (
    // PRODUCT-box
    <div className="product-box my-6">
      {/* PRODUCT-BOX-HEADER */}
      <div className="product-box-header flex-center-between">
        <h4 className="text-zinc-700 font-medium dark:text-white text-lg md:text-2xl">
          {title}
        </h4>
        <span className="text-primary flex-align-center gap-x-2">
          See All
          {allIcons.arrowForwardTab}
        </span>
      </div>

      {/* PRODUCT-BOX-SLIDER */}
      <div className="product-box-slider mt-3">
        <Swiper
          className="h-auto"
          slidesPerView={2}
          spaceBetween={10}
          freeMode={true}
          modules={[FreeMode, Navigation]}
          breakpoints={{
            0: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            786: {
              slidesPerView: 4,
            },
            1024: {
              slidesPerView: 5,
            },
            1280: {
              slidesPerView: 6,
            },
          }}
        >
          {allProductsArray.map((product) => (
            <SwiperSlide className="" key={product.id}>
              <ProductSlideItem {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default ProductBox;
