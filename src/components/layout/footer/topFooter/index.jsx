import React from "react";

// Images
import logoSnobella from "../../../../assets/home/images/Snobella.png";
import searchIcon from "../../../../assets/home/icons/search.png";
import Container from "../../../common/containerClass";

const TopFooter = () => {
  return (
    <div className="bg-[#F7F7F9] mt-[128px] ">
      <Container>
        <div className="pt-[39px] pb-[80px] ">
          <div className="flex flex-row items-center justify-between">
            <div className="w-[156px] h-[40px]">
              <img src={logoSnobella} alt="logoSnobella" />
            </div>

            <div className="flex flex-row pl-4 pr-3 py-[15px] bg-[#F7F9FC] rounded-[8px] w-[504px] justify-between border border-[#9E9E9E59]">
              <div>
                <input
                  type="text"
                  placeholder="Search all product"
                  className="bg-[#F7F9FC] w-full outline-none"
                />
              </div>
              <div className="w-6 h-6">
                <img src={searchIcon} alt="searchIcon" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <div className="border border-[#27314226]"></div>
    </div>
  );
};

export default TopFooter;
