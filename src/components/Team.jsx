import React from "react";
import team1 from "../assets/images/png/team_img1.png";
import team2 from "../assets/images/png/team_img2.png";
import team3 from "../assets/images/png/team_img3.png";
import team4 from "../assets/images/png/team_img4.png";

const Team = () => {
  return (
    <div className="bg-color py-5 py-sm-3">
      <div className="container">
        <h5 className="ff_poppine fw_700 fs_48 text-center mb-4 pb-3">Team</h5>
        <div className="row text-center">
          <div className="col-12 col-md-6 col-lg-3 ">
            <img src={team1} alt="team_img1" className="w-100 mb-3 me-2" />
            <h1 className="ff_poppine fw_700 fs-24">Jhone Doe</h1>
            <p className="ff_poppine fw_400 fs-18">Manager</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <img src={team2} alt="team_img2" className="w-100 mb-3 me-2" />
            <h1 className="ff_poppine fw_700 fs-24">Jhone Doe</h1>
            <p className="ff_poppine fw_400 fs-18">Manager</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <img src={team3} alt="team_img3" className="w-100 mb-3 me-2" />
            <h1 className="ff_poppine fw_700 fs-24">Jhone Doe</h1>
            <p className="ff_poppine fw_400 fs-18">Manager</p>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <img src={team4} alt="team_img4" className="w-100 mb-3 me-2" />
            <h1 className="ff_poppine fw_700 fs-24">Jhone Doe</h1>
            <p className="ff_poppine fw_400 fs-18">Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
