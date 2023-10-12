import React from "react";
import cartoonImg from "../assets/images/png/cartoon_img.png";

const Popularised = () => {
  return (
    <div className="bg-color">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="mw_591 mt-3">
              <h3 className="ff_poppine fw_700 fs_48 mb-3">
                It was popularised
              </h3>
              <p className="ff_poppine fw_400 fs_18 mb-5">
                Have you heard? We’re hiring! We have 3,333 working positions to
                fill on the Solana blockchain. Once all positions are filled
                it’s crucial to stay on your toes because the corporate penguins
                are coming! Any penguins caught chilling on the floor when
                corporate arrives will be immediately fired and swept away! This
                makes SFFB a deflationary collection until we reach a maximum
                staff of 1,666 mcnoots in total.
              </p>
              <button className="ff_roboto fw_500 fs_20 fc_white more_btn mb-4">
                DISCOVER MORE
              </button>
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div>
              <img src={cartoonImg} alt="cartoon_img" className="w-100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popularised;
