import { AiFillTwitterCircle } from "react-icons/ai";
import { FaGithubSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="section-container">
      <footer className="footer xl:px-0 py-10 text-base-content">
        <aside>
          <img src="/logo.png" alt="logo" />
          <p className="my-5 md:w-40">
            Savor the artistry where every dish is a culinary masterpiece
          </p>
        </aside>
        <nav>
          <header className="footer-title">Useful links</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Events</a>
          <a className="link link-hover">Blogs</a>
          <a className="link link-hover">FAQ</a>
        </nav>
        <nav>
          <header className="footer-title">Main Menu</header>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Offers</a>
          <a className="link link-hover">Menus</a>
          <a className="link link-hover">Reservation</a>
        </nav>
        <nav>
          <header className="footer-title">Contact Us</header>
          <a className="link link-hover">ajaysonere786@gmail.com</a>
          <a className="link link-hover">+91 9977449230</a>
          <a className="link link-hover">Social Media </a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
