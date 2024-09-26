import React from 'react'
import Container from '../../../common/containerClass'

// Images

import logo from "../../../../assets/home/icons/logo.png"
import facebook from "../../../../assets/home/icons/facebook.png";
import instagram from "../../../../assets/home/icons/instagram.png";
import whatsapp from "../../../../assets/home/icons/whatsapp.png";

const SubFooter = () => {
  return (
    <div>
      <Container>
        <div className="flex flex-row justify-between py-[22px]">
          <div className="w-[206px] h-[27px]">
            <img src={logo} alt="logo" />
          </div>

          <div className='flex flex-row gap-8'>
            <div className="w-5 h-5">
              <img src={instagram} alt="instagram" />
            </div>

            <div className="w-5 h-5">
              <img src={facebook} alt="facebook" />
            </div>

            <div className="w-5 h-5">
              <img src={whatsapp} alt="whatsapp" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default SubFooter
