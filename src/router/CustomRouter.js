// router/CustomRouter.jsx
import Index from "../pages/Index.jsx";
import About from "../pages/about/About.jsx";
import Contact from "../pages/contact/Contact.jsx";
import NotFound from "../pages/notfound/NotFound.jsx"; // 404 sayfası

const CustomRouter = [
  { path: "/", element: <Index /> },
  { path: "/about", element: <About /> },
  { path: "/contact", element: <Contact /> },
  { path: "*", element: <NotFound /> }, // 404 sayfası
];

export default CustomRouter;
