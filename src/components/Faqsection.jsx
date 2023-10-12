import React from "react";
import FooterLogo from "../assets/images/png/footer_logo.png";
import logo1 from '../assets/images/png/logo1.svg'
import logo2 from '../assets/images/png/logo2.svg'

const Faqsection = () => {
  return (
    <div className="bg_color py-5">
      <div className="container">
        <h2 className=" ff_poppine fw_700 fs_48 text-center mb-4">FAQ</h2>
        <div
          className="accordion accordion-flush mb-5"
          id="accordionFlushExample"
        >
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
              >
                <span className="ff_poppine fw_600 fs_18">
                  Amet vel eget nisi, sed ut massa turpis sodales nunc.
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff_poppine fw_400 fs_18 fc_gray bg-yellow">
                Enim scelerisque quisque egestas velit, eget tempus, arcu
                pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus
                nulla tincidunt egestas..
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
              >
                <span className="ff_poppine fw_600 fs_18">
                  Amet vel eget nisi, sed ut massa turpis sodales nunc.
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff_poppine fw_400 fs_18 fc_gray bg-yellow">
                Enim scelerisque quisque egestas velit, eget tempus, arcu
                pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus
                nulla tincidunt egestas.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
              >
                <span className="ff_poppine fw_600 fs_18">
                  Amet vel eget nisi, sed ut massa turpis sodales nunc.
                </span>
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff_poppine fw_400 fs_18 fc_gray bg-yellow">
                Enim scelerisque quisque egestas velit, eget tempus, arcu
                pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus
                nulla tincidunt egestas.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefour"
                aria-expanded="false"
                aria-controls="flush-collapsefour"
              >
                <span className="ff_poppine fw_600 fs_18">
                  Amet vel eget nisi, sed ut massa turpis sodales nunc.
                </span>
              </button>
            </h2>
            <div
              id="flush-collapsefour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff_poppine fw_400 fs_18 fc_gray bg-yellow">
                Enim scelerisque quisque egestas velit, eget tempus, arcu
                pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus
                nulla tincidunt egestas.
              </div>
            </div>
          </div>
          <div className="accordion-item mb-2">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapsefive"
                aria-expanded="false"
                aria-controls="flush-collapsefive"
              >
                <span className="ff_poppine fw_600 fs_18">
                  Amet vel eget nisi, sed ut massa turpis sodales nunc.
                </span>
              </button>
            </h2>
            <div
              id="flush-collapsefive"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body ff_poppine fw_400 fs_18 fc_gray bg-yellow">
                Enim scelerisque quisque egestas velit, eget tempus, arcu
                pulvinar in. Quis sed at sodales aliquam. Amet fermentum, lectus
                nulla tincidunt egestas.{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mb-4">
          <img
            src={FooterLogo}
            alt="footer_logo"
            className="w-100 mw_524 pt-4"
          />
        </div>
        <div className="d-flex align-items-center justify-content-center mb-5 ">
          <a href="#">
            <img
              src={logo1}
              alt="logo1"
              className="w-100 mw_72 me-5"
            />
          </a>
          <a href="#">
            <img
              src={logo2}
              alt="logo2"
              className="w-100 mw_72"
            />
          </a>
        </div>
        <p className="ff_poppine fw_400 fs_18 fc_gray text-center pt-3">
          @Copyright 2021
        </p>
      </div>
    </div>
  );
};

export default Faqsection;
