import React, { useEffect, useRef, useState } from 'react';
import SingleCategory from '../singleCategory';
import Container from '../../common/containerClass';
import Slider from 'react-slick';


import chevronleft from "../../../assets/home/icons/chevronleft.png"

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const sliderRef = useRef(null);

    const fetchCategories = async () => {
      const response = await fetch("http://localhost:3000/categories");
      const data = await response.json();
      setCategories(data);
    };
   
    useEffect(() => {
        fetchCategories()
    }, [])

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 }},
      { breakpoint: 600, settings: { slidesToShow: 1 }},
    ],
  };

  // Function to slide to the last category
//   const slideToLast = () => {
//     if (sliderRef.current) {
//       sliderRef.current.slickGoTo(categories.length - 1);
//     }
//   };

  // Function to start sliding (to the right)
  const startSliding = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <Container>
      <div className="flex justify-between items-center mb-4 relative ">
        {/* <button onClick={slideToLast}>Slide to Last Category</button> */}
        {categories.length > 4 && (

          <button onClick={startSliding} className="ml-4 absolute top-[100px] right-0 z-10">
            <div className='border border-[#EBEBEB] rounded-full w-8 h-8'>
             <img src={chevronleft} alt="chevronleft" />
            </div>
            </button>
        )}
      </div>
      <Slider ref={sliderRef} {...settings}>
        {categories.map((category, index) => (
          <SingleCategory key={index} category={category} />
        ))}
      </Slider>
    </Container>
  );
};

export default AllCategories;
