import React from "react";
import Subscriber from "../subscribe/Subscribe";


const Footer = () => {
  return (
    <div className="bg-[#1A1818]">
      <div className="container mx-auto sm:px-[80px] pb-[100px]">
     
      <h2 className="text-white text-xl sm:text-3xl font-bold leading-10 mt-4">
        Subscribe to our mailing list
      </h2>
      <p className="text-justify pt-[10px] text-white text-xs sm:text-sm font-normal leading-5 sm:leading-7">
      Stay informed about the latest wildlife conservation updates,endangered species
          <br />  initiatives, and valuable tips and strategies for supporting wildlife protection on our platform.{" "}

      </p>

      <Subscriber />
      
      </div>
    </div>
    


  )
}

export default Footer;  