import ProductBox from "../components/ProductBox";
// import all icons
import allIcons from "../data/icons";
// import all products
import { allProducts } from "../data/allProducts";
// import swiper for slider
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Home() {
  // array of img
  const imgArray = [
    { imageId: 1, imageSrc: "/images/main-slider-1.jpg" },
    { imageId: 2, imageSrc: "/images/main-slider-2.jpg" },
    { imageId: 3, imageSrc: "/images/main-slider-3.jpg" },
  ];

  // array of categorys
  const categorysType = [
    { id: 1, name: "Men's Bag", img: "/images/c6.jpg" },
    { id: 2, name: "Men's Sport Shoe", img: "/images/c3.jpg" },
    { id: 3, name: "Men's Socks", img: "/images/c1.jpg" },
    { id: 4, name: "Women's Bag", img: "/images/c5.jpg" },
    { id: 5, name: "Women's Sport Shoe", img: "/images/c4.jpg" },
    { id: 6, name: "Women's Socks", img: "/images/c2.jpg" },
  ];

  return (
    <>
      {/* HEADER-COMPONET */}
      <Header />

      <div className="container mt-40">
        {/* HERO-SECTION */}
        <div className="hero">
          <div className="flex flex-col-reverse gap-4 lg:flex-row">
            {/* HERO-LEFT-SIDE */}
            <div className="hero-left-side flex items-center gap-4 lg:w-[30%] lg:flex-col-reverse">
              <div className="h-full">
                <img
                  className="w-full h-full rounded-lg shadow-lg"
                  src="/images/main-bot.gif"
                />
              </div>
              <div className="h-full">
                <img
                  className="w-full h-full rounded-lg shadow-lg"
                  src="/images/main-banner-top.jpg"
                />
              </div>
            </div>

            {/* HERO-RIGHT-SIDE */}
            <div className="hero-right-side rounded-lg shadow-lg overflow-hidden lg:w-[70%]">
              <Swiper
                className="h-full"
                grabCursor={true}
                autoplay={{
                  delay: 3000,
                }}
                navigation={{
                  prevEl: ".prev",
                  nextEl: ".next",
                }}
                loop={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                modules={[Pagination, Navigation, Autoplay]}
              >
                {imgArray.map((img) => (
                  <SwiperSlide key={img.imageId} className="h-full">
                    <img
                      src={img.imageSrc}
                      alt="slider-img"
                      className="h-full"
                    />
                  </SwiperSlide>
                ))}
                <button className="prev text-white">{allIcons.heroPrev}</button>
                <button className="next text-white">{allIcons.heroNext}</button>
              </Swiper>
            </div>
          </div>
        </div>

        {/* HOME-MAIN-CONTENT */}
        <div className="relative py-14">
          {/* HOME-BLUR-BOX */}
          <div className="home-blur-box fixed w-[200px] h-[200px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-500/50 dark:bg-emerald-400/50 blur-[120px] rounded-full -z-10 hidden lg:block"></div>

          {/* SPECIAL-OFFER-BOX */}
          <ProductBox allProducts={allProducts} title={"Special Offer"} />

          {/* SPECIAL-OFFER-BOX */}
          <ProductBox allProducts={allProducts} title={"Latest Products"} />

          {/* CATEGORY-BANNERS-SECTION */}
          <div className="my-3 flex flex-col gap-4 lg:flex-row lg:items-center">
            <div className="rounded-[13px] overflow-hidden">
              <img
                src="/images/category-left.jpg"
                className="w-full h-auto"
                alt=""
              />
            </div>
            <div className="rounded-[13px] overflow-hidden">
              <img
                src="/images/category-right.jpg"
                className="w-full h-auto"
                alt=""
              />
            </div>
          </div>

          {/* CATEGORY-SECTION */}
          <div className="py-10 flex-center-center flex-wrap gap-8 lg:justify-between">
            {categorysType.map((cat) => (
              <div key={cat.id} className="space-y-3 cursor-pointer">
                <img
                  src={cat.img}
                  className="w-28 h-28 rounded-full mx-auto"
                  alt="category-img"
                />
                <p className="text-center text-zinc-700 text-sm md:text-base dark:text-white">
                  {cat.name}
                </p>
              </div>
            ))}
          </div>

          {/* BLOG-SECTION */}
          <div className="blog-section py-10">
            {/* BLOG-HEADER-SECTION */}
            <div className="flex-center-between">
              <h4 className="text-zinc-700 font-medium dark:text-white text-lg md:text-2xl">
                Readable Articles
              </h4>
              <span className="text-primary flex-align-center gap-x-2">
                See All
                {allIcons.arrowForwardTab}
              </span>
            </div>

            {/* BLOG-CONTENT-SECTION */}
            <div className="my-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <div className="w-full rounded-xl bg-white dark:bg-zinc-900 p-3 shadow-md">
                <img
                  src="/images/blog1.jpg"
                  className="rounded-xl rounded-bl-3xl"
                  alt="blog-image"
                />
                <p className="my-3 text-zinc-700 dark:text-white text-xs sm:text-sm md:text-base">
                  Advantages and disadvantages of the s21 phone
                </p>
                <span className="text-primary text-sm">2023/09/24</span>
              </div>
              <div className="w-full rounded-xl bg-white dark:bg-zinc-900 p-3 shadow-md">
                <img
                  src="/images/blog1.jpg"
                  className="rounded-xl rounded-bl-3xl"
                  alt="blog-image"
                />
                <p className="my-3 text-zinc-700 dark:text-white text-xs sm:text-sm md:text-base">
                  Advantages and disadvantages of the s21 phone
                </p>
                <span className="text-primary text-sm">2023/09/24</span>
              </div>
              <div className="w-full rounded-xl bg-white dark:bg-zinc-900 p-3 shadow-md">
                <img
                  src="/images/blog1.jpg"
                  className="rounded-xl rounded-bl-3xl"
                  alt="blog-image"
                />
                <p className="my-3 text-zinc-700 dark:text-white text-xs sm:text-sm md:text-base">
                  Advantages and disadvantages of the s21 phone
                </p>
                <span className="text-primary text-xs md:text-sm">
                  2023/09/24
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Home;
