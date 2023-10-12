import React from "react";
import heroImg from "../assets/images/png/hero_img.png";
import footerlogo from "../assets/images/png/footer_logo.png";

const Headersection = () => {
  function showNav() {
    document.body.classList.toggle("overflow-hidden");
  }
  return (
    <div>
      <header>
        <nav className="bg_color">
          <div className="container py-3">
            <div className="d-flex align-items-center justify-content-between">
              <a href="#">
                <img
                  src={footerlogo}
                  alt="page_logo"
                  className="w-100 max-width-50"
                />
              </a>
              <input type="checkbox" id="menu_box" onClick={showNav} hidden />
              <label
                htmlFor="menu_box"
                className="checkbtn d-flex align-items-center z-1"
              >
                <span className="line"></span>
                <span className="line"></span>
                <span className="line"></span>
              </label>
              <ul className="d-flex align-items-center ff_poppine fw_400 fs_18 small_screen mb-0">
                <li>
                  <a href="#" className="text-decoration-none fc_black me-4">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none fc_black me-4">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none fc_black me-4">
                    Tokenomics
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none fc_black me-4">
                    Roadmap
                  </a>
                </li>
                <li>
                  <a href="#" className="text-decoration-none fc_black me-4">
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-decoration-none connect_btn fc_black d-inline-block"
                  >
                    Connect Wallet
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div>
          <img src={heroImg} alt="hero_img" className="w-100" />
        </div>
      </header>
    </div>
  );
};

export default Headersection;
