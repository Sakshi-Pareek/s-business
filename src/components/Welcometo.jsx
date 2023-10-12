import React from 'react'
import logoImg from "../assets/images/png/logo_img.png"

const Welcometo = () => {
  return (
    <div>
          <div className="bg_color bg_img">
            <h2 className="ff_poppine fw_700 fs_36 text-center pt-5 mb-3 pb-2">WELCOME TO</h2>
            <div className="text-center"><img src={logoImg} alt="logo_img"
                    className="w-100  mw-806 overflow-hidden"/></div>

        </div>
    </div>
  )
}

export default Welcometo