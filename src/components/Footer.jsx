import allIcons from "../data/icons";


function Footer() {
  const goToTopHandler = () => {
    window.scrollTo(0, 0);
  };


  return (
    <footer className="footer relative border-t border-gray-100 bg-white dark:border-white/5 dark:bg-zinc-900">
      <div className="absolute left-1/2 -top-3 -translate-x-1/2">
        {allIcons.footerIcon}
      </div>
      <div className="container">
        <div className="py-8 flex flex-col items-center gap-5 lg:flex-row lg:justify-between">
          <button
            onClick={goToTopHandler}
            type="button"
            className="flex-align-center gap-x-2 rounded-lg border border-gray-200 p-2 text-sm text-zinc-700 hover:bg-gray-200/20 dark:border-white/5 dark:text-white dark:hover:bg-white/5"
          >
            Go To Up
            {allIcons.footerGoToTopIcon}
          </button>
          <div className="flex-align-center flex-col gap-2 text-sm text-zinc-500 dark:text-zinc-300 lg:flex-row-reverse lg:gap-0">
            <span className="px-5 lg:border-l border-x-gray-200 dark:border-white/100">
              021-11223344
            </span>
            <span className="text-xs sm:text-sm lg:pr-3">
              We answer you 24 hours a day, 7 days a week
            </span>
          </div>
        </div>

        <div className="flex-align-center flex-col bg-gray-100 dark:bg-mainDark py-4 px-6 gap-6 rounded-2xl lg:flex-row lg:justify-between">
          <div className="order-3 flex-align-center gap-5 text-zinc-700 dark:text-white text-lg md:text-xl lg:order-1">
            {allIcons.instagramIcon}
            {allIcons.facebookIcon}
            {allIcons.youtubeIcon}
          </div>

          <div className="w-full order-2 relative lg:w-[520px]">
            <input
              type="text"
              placeholder="Your Email"
              className="w-full py-[10px] px-4 border-none outline-none bg-white dark:bg-zinc-900 text-zinc-600  placeholder:text-xs sm:placeholder:text-sm placeholder:text-zinc-500 focus:outline-none focus:ring-0 dark:text-zinc-300 placeholder:dark:text-zinc-400 rounded-lg"
            />
            <button
              type="button"
              className="absolute bg-primary text-sm py-2 px-4 right-0 rounded-lg text-white hover:bg-emerald-700 top-1/2 -translate-y-1/2"
            >
              Send
            </button>
          </div>

          <span className="order-1 text-xs sm:text-sm text-zinc-500 dark:text-zinc-300 lg:order-3">
            Find out about the latest discounts
          </span>
        </div>

        <div className="flex-align-center justify-around py-8 lg:gap-0 lg:w-2/5 lg:justify-between">
          <div className="flex-align-center flex-col gap-3 lg:items-start">
            <h4 className="text-lg text-zinc-700 dark:text-white">Rotikala</h4>
            <ul className="flex-align-center flex-col gap-5 lg:items-start">
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Return terms
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Purchase guide
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Terms and Conditions
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Why Rotikala ?
              </li>
            </ul>
          </div>
          <div className="flex-align-center flex-col gap-3 lg:items-start">
            <h4 className="text-lg text-zinc-700 dark:text-white">
              Easy access
            </h4>
            <ul className="flex-align-center flex-col gap-5 lg:items-start">
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Track orders
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                contact us
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                Frequently Asked
              </li>
              <li className="text-zinc-700 dark:text-white text-sm cursor-pointer hover:text-primary dark:hover:text-primary">
                about us
              </li>
            </ul>
          </div>
        </div>

        <div className="py-4 text-center text-zinc-500 dark:text-zinc-300">
          Created With 🖤 By Alireza
        </div>
      </div>
    </footer>
  );
}

export default Footer;
