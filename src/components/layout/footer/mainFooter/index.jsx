import React from "react";
import Container from "../../../common/containerClass";

//Images
import phonecall from "../../../../assets/home/icons/phonecall.png";
import send from "../../../../assets/home/icons/send.png";
import email from "../../../../assets/home/icons/email.png";
import { Link } from "react-router-dom";




const MainFooter = () => {

  const shop = [
    {
      id: "1",
      title: "Shoulder Bag",
    },

    {
      id: "2",
      title: "Backpack",
    },

    {
      id: "3",
      title: "Tote Bag",
    },
    {
      id: "4",
      title: "Hand Bag",
    },
    {
      id: "5",
      title: "Evening bags",
    },
    {
      id: "6",
      title: "Purse",
    },
  ];

  const company = [
    {
      id: "1",
      title: "About us",
    },

    {
      id: "2",
      title: "Contact",
    },

    {
      id: "3",
      title: "Terms of Use",
    },
    {
      id: "4",
      title: "Customer service",
    },
  ];

    const help = [
      {
        id: "1",
        title: "FAQ",
      },

      {
        id: "2",
        title: "Delivery",
      },

      {
        id: "3",
        title: "Cancellation of the order",
      },
      {
        id: "4",
        title: "Don't go back",
      },
    ];



  return (
    <div className="pt-[14] pb-20 bg-[#F7F7F9]">
      <Container>
        <div className="flex flex-row pt-[51px] justify-between">
          {/* Left side */}
          <div className="flex flex-col">
            <h1 className="text-[16px] text-[#212121BF] w-[326px]">
              The wise man therefore always holds selectionThe wise man
              therefore always rejects pleasures to secure other greater
            </h1>

            <div className="flex flex-row gap-[2px] mt-10 mb-6">
              <div className="w-[22px] h-[22px]">
                <img src={email} alt="email" />
              </div>
              <h3 className="text-[16px] font-normal text-[#212121BF]">
                Snobella@gmail.com
              </h3>
            </div>

            <div className="flex flex-row gap-[2px] mb-14">
              <div className="w-[22px] h-[22px]">
                <img src={phonecall} alt="email" />
              </div>
              <h3 className="text-[16px] font-normal text-[#212121BF]">
                +748 383 23 14
              </h3>
            </div>

            <div className="flex flex-row gap-[2px] border border-[#171717] px-4 py-[10px] w-[179px] rounded-[8px]">
              <div className="w-[22px] h-[22px]">
                <img src={send} alt="email" />
              </div>
              <h3 className="text-[16px] font-normal text-[#212121BF]">
                Send message
              </h3>
            </div>
          </div>

          {/* Right side */}
          <div className="flex flex-row gap-[104px] ">
            <div className="flex flex-col">
              <h2 className="text-[16px] text-[#212121] font-bold mb-5">
                Shop
              </h2>
              <ul className="flex flex-col gap-5 text-[16px] font-normal text-[#212121BF]">
                {shop &&
                  shop.map((element) => (
                    <Link>
                      <li key={element.id}>{element.title}</li>
                    </Link>
                  ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h2 className="text-[16px] text-[#212121] font-bold mb-5">
                Company
              </h2>
              <ul className="flex flex-col gap-5 text-[16px] font-normal text-[#212121BF]">
                {company &&
                  company.map((element) => (
                    <Link>
                      <li key={element.id}>{element.title}</li>
                    </Link>
                  ))}
              </ul>
            </div>

            <div className="flex flex-col">
              <h2 className="text-[16px] text-[#212121] font-bold mb-5">
                Help
              </h2>
              <ul className="flex flex-col gap-5 text-[16px] font-normal text-[#212121BF]">
                {help &&
                  help.map((element) => (
                    <Link>
                      <li key={element.id}>{element.title}</li>
                    </Link>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MainFooter;
