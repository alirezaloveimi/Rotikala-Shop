import Header from "./Header";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

function NotFound() {
  // use navigate react-router-dom hook
  const navigate = useNavigate();

  return (
    <>
      <Header headerStatic={true} />

      {/* 404 PAGE CONTENT */}
      <div className="grid-center min-h-[100vh]">
        <img src="/images/notfound.svg" alt="" />
        <h1 className="text-black dark:text-white my-6">Page Not Found</h1>
        <button
          onClick={() => navigate("/home")}
          className="p-3 w-fit mx-auto bg-primary text-white text-sm rounded-lg hover:bg-emerald-600"
        >
          Go To Home Page
        </button>
      </div>

      <Footer />
    </>
  );
}

export default NotFound;
