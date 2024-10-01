import React, { useState } from 'react'
import Container from "../../common/containerClass/index"

import { useDispatch } from 'react-redux';

// React icons
import { IoChevronDown, IoChevronUp } from "react-icons/io5";

import { sortHandle, highToLowSort } from '../../../store/slices/filter.slice';


const Heading = ({count}) => {

const [isOpen, setIsOpen] = useState(false)

const toggleDown = () => {
  setIsOpen(!isOpen)
}

const dispatch = useDispatch()


  return (
    <div>
      <Container>
        <div className="flex flex-row justify-between">
          <h1 className="text-[40px] font-medium text-[#212121] font-rubik">
            Shoulder bags
          </h1>

          <div className="flex flex-row gap-7 items-center mt-[38px]">
            <p className="text-[16px] text-[#212121E5]">{count} result</p>

            <div className="w-[140px] relative">
              <button
                onClick={toggleDown}
                className="border border-[#D0D0D0] rounded-[8px] w-full py-[6px] pl-[19px] pr-[13px] 
            flex justify-between items-center drop-shadow"
              >
                <h2 className="text-[16px] text-[#212121E5]">Sort</h2>
                {isOpen ? <IoChevronDown /> : <IoChevronUp />}
              </button>

              {isOpen && (
                <div className="absolute top-[calc(100%_+_5px)] z-20 drop-shadow overflow-hidden">
                  <button
                    className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                  >
                    Featured
                  </button>

                  <button
                    className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                  >
                    Discount
                  </button>

                  <button
                    className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                  >
                    Best-seller
                  </button>

                  <button
                    onClick={() => {
                      dispatch(highToLowSort());
                    }}
                    className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                  >
                    High-to-low
                  </button>

                  <button
                    onClick={() => {
                      dispatch(sortHandle());
                    }}
                    className="flex justify-between items-center py-[6px] pl-[19px] 
                pr-[13px] bg-white cursor-pointer w-[140px]"
                  >
                    Low-to-high
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Heading