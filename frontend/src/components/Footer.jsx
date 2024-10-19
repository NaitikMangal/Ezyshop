import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
       
        <div>
          <img src={assets.logo} className="mb-3 w-20" alt="" />
          <p className="w-full md:w-2/3 text-gray-600 ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto, ipsum! Soluta eos a nobis ipsum eius illo aliquam voluptate, tempore ducimus quaerat, ratione eum eaque! Tempora autem molestias cumque accusamus magni veritatis, dignissimos quae?
          </p>
        </div>

          <div>
            <p className="text-xl font-medium mb-5" >COMPANY</p>
            <ul className="flex flex-col gap-1 text-gray-600" >
                <li>Home</li>
                <li>Aboutus</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
          </div>

          <div>
            <p className='text-xl font-medium mb-5' >GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600' >
                 <li>+1-212-456-7890</li>
                 <li>contact@ezyshop.com</li>
            </ul>
          </div>
      </div>

        <div>
            <hr />
            <p className="py-5 text-sm text-center">Copyright 2024@ ezyshop.com - All Right Reserved</p>
        </div>

    </div>
  );
};

export default Footer;
