import React from "react";
import phone from "../../../../assets/home/icons/phone.png";

import Container from "../../../common/containerClass";
import { Link } from "react-router-dom";

const SubHeader = () => {
  return (
    <div className="bg-[#007878]">
      <Container>
        <div className="py-3 flex flex-row justify-between">
          <div className="flex flex-row gap-3 items-center">
            <div>
              <button className="w-6 h-6">
                <img src={phone} alt="phone" className="" />
              </button>
            </div>
            <p className="text-[14px] text-[#FFFFFFE5]">+748 383 23 14</p>
          </div>

          <div>
            <ul className="flex flex-row text-[14px] text-[#FFFFFFBF] font-bold">
              <Link>
                <li>Terms of Use</li>
              </Link>
              <div className="border border-[#FFFFFFBF] h-5 mx-4"></div>
              <Link>
                <li>FAQ</li>
              </Link>
              <div className="border border-[#FFFFFFBF] h-5 mx-4"></div>
              <Link>
                <li>Customer service</li>
              </Link>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default SubHeader;
