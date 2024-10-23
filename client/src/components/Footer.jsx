import favicon from "../assets/favicon.svg";
import { Facebook, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="flex  sm:flex-row justify-between items-center p-4">
      <div className="flex  items-center ">
        <div className="flex items-center">
          <img alt="Company Logo" className="mr-2" height="40" src={favicon} width="40" />
          <span className="text-lg font-bold">RemoverBg</span>
          <span className="mx-2">|</span>
        </div>
        <span className="text-gray-500 text-center sm:text-left hidden md:block">
          Copyright @szswebdev | All rights reserved.
        </span>
      </div>
      <div className="flex space-x-4">
        <a className="text-gray-500 hover:text-gray-700" href="#">
          <Facebook />
        </a>
        <a className="text-gray-500 hover:text-gray-700" href="#">
          <Twitter />
        </a>
        <a className="text-gray-500 hover:text-gray-700" href="#">
          <Linkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
