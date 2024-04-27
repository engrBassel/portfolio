import Navbar from "./Navbar";
import GoTop from "../0-global/GoTop";

function Footer() {
  return (
    <footer id="footer">
      <div className="container">
        <Navbar />
        <p>
          Copyright &#169; {new Date().getFullYear()} Bassel Mostafa. All Rights
          Reserved
        </p>
      </div>
      <GoTop />
    </footer>
  );
}

export default Footer;
