import React from 'react'

const Roadmap = () => {
  return (
    <div className="bg_color back_ground_img py-5">
        <h6 className="ff_poppine fw_700 fs_48 text-center mb-5 pb-4">ROADMAP 1.0</h6>
        <div className="my_container mb-5">
            <div className="timeline">
                <div className="timeline_container left">
                    <div className="content">
                        <div className="bg_white border-radius">
                            <ul>
                                <li className="ff_poppine fw_700 fs_24">Q4 <span>2021</span>
                                </li>
                                <li className="ff_poppine fw_400 fs_24">1. qLaunch SFFB </li>
                                <li className="ff_poppine fw_400 fs_24">2. SELL OUT</li>
                                <li className="ff_poppine fw_400 fs_24">3. Apply for secondary marketplace listings
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="timeline_container right">
                    <div className="content">
                        <div className="bg_white border-radius">
                            <ul>
                                <li className="ff_poppine fw_700 fs_24">Q1 <span>2022</span></li>
                                <li className="ff_poppine fw_400 fs_24">1. Charity Giveaway</li>
                                <li className="ff_poppine fw_400 fs_24">2. Launch Adopt-A-Penguin Program</li>
                                <li className="ff_poppine fw_400 fs_24">3. Secure Partnerships</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="timeline_container left">
                <div className="content">
                    <div className="bg_white border-radius">
                        <ul>
                            <li className="ff_poppine fw_700 fs_24">Q2 <span>2022</span></li>
                            <li className="ff_poppine fw_400 fs_24">1. SFFB Merch Release</li>
                            <li className="ff_poppine fw_400 fs_24">2. Stay tune for Roadmap 2.0</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Roadmap