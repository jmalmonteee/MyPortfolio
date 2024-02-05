import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Logo from "../img/MontyLogo.png";
import {HiOutlineMail} from "react-icons/hi"
import {HiOutlinePhoneMissedCall} from "react-icons/hi"

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white lg:px-48 px-4 py-20">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="mb-4 md:mb-0 ">
          <img className="h-14 w-50" src={Logo} alt="Dev.AC" />
        </div>
        <div>
          <h2 className="text[22px] font-semibold text-[#81FFD9] py-2 uppercase">
            Services
          </h2>
          <ul className="text[16px] my-4">
            <li className="  hover:text-slate-800 duration-300 text-lg
              cursor-pointer leading-9 ">Software Development</li>
            <li className="  hover:text-slate-800 duration-300 text-lg
              cursor-pointer leading-9 ">Front-End Developer</li>
            <li className="  hover:text-slate-800 duration-300 text-lg
              cursor-pointer leading-9 ">Back-End Developer</li>
            <li className="  hover:text-slate-800 duration-300 text-lg
              cursor-pointer leading-9 ">Full-Stack Developer</li>
            <li className="  hover:text-slate-800 duration-300 text-lg
              cursor-pointer leading-9 ">UI/UX Designer</li>
          </ul>
        </div>
        <div className="mb-4 md:mb-0">
          <h2 className="text[22px] font-semibold text-[#81FFD9] py-2 uppercase">
            Contact
          </h2>
          <p className="flex flex-1 items-center text[12px] my-4"><HiOutlineMail className="mr-2 text-xl"/> Email: jmalmonteee@gmail.com
</p>
          <p className="flex flex-1 items-center text[12px] my-4"><HiOutlinePhoneMissedCall className="mr-2 text-xl"/>  Phone: </p>
        </div>
        <div>
          {" "}
          <h2 className="text[22px] font-semibold text-[#81FFD9] py-2 uppercase">
            Follow Me
          </h2>
          <div className="flex space-x-4">
            <a
              href="https://github.com/jmalmonteee"
              className="text-white hover:text-[#81FFD9] rounded-full glow p-2"
            >
              <FaGithub data-aos="fade-up" className="text-[28px]" />
            </a>
            <a
              href="https://www.linkedin.com/in/john-michael-almonte-922314268/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app&fbclid=IwAR2Zt-Xe1yEOXHCXQ4kUpUlBx1sWKX-ytlGA29IXQD-ca5FjVsM23HBlMBM"
              className="text-white hover:text-[#81FFD9] rounded-full glow p-2"
            >
              <FaLinkedin data-aos="fade-down" className="text-[28px]" />
            </a>
            <a
              href="https://twitter.com"
              className="text-white hover:text-[#81FFD9] rounded-full glow p-2"
            >
              <FaTwitter data-aos="fade-up" className="text-[28px]" />
            </a>
            <a
              href="https://www.instagram.com/_jmalmonte/?igsh=aTZqNHptd3h3eGU3&fbclid=IwAR1GIPYA2c6h4q1KFSiVc54WXG0ghEJ3lYkT8ood6gh_h7MjgD2xO1mU-Ko"
              className="text-white hover:text-[#81FFD9]rounded-full glow p-2"
            >
              <FaInstagram data-aos="fade-down" className="text-[28px]" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
