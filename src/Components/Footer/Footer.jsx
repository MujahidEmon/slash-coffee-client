import { BsMailbox } from "react-icons/bs";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/2trFcPk/13.jpg')] mt-17 py-16">
        <div className="lg:max-w-7xl max-w-sm mx-auto">
          <img
            src="/src/assets/images/more/logo1.png"
            className="lg:h-20 h-16"
            alt=""
          />

          <div className="flex lg:flex-row flex-col justify-between">
            {/* Left */}
            <div className="flex flex-col gap-3 lg:w-1/2 w-full">
              <h1 className="font-rancho text-3xl lg:text-5xl font-semibold">
                Slash Coffee Emporium
              </h1>
              <p>
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex gap-2 items-center">
                <FaFacebook size={30}></FaFacebook>
                <FaInstagram size={30}></FaInstagram>
                <FaTwitter size={30}></FaTwitter>
                <FaLinkedinIn size={30}></FaLinkedinIn>
              </div>

              <h1 className="font-rancho text-3xl lg:text-5xl font-semibold mt-6">
                Get In Touch
              </h1>
              <div className="flex items-center gap-1">
                <BsMailbox></BsMailbox> slashcoffee@gmail.com
              </div>
              <div className="flex items-center gap-1">
                <FaPhone></FaPhone> +880179XXXXXXXX
              </div>
              <div className="flex items-center gap-1">
                <FaMapLocation></FaMapLocation> 12/2 Dhaka
              </div>
            </div>

            {/* Right */}
            <div className="lg:w-1/2 w-full flex flex-col gap-3">
              <h1 className="font-rancho text-3xl lg:text-5xl font-semibold">
                Connect With Us
              </h1>
              <label className="input input-bordered font-semibold font-raleway w-full flex items-center gap-2">
                Name
                <input
                  type="text"
                  className="grow border-none"
                  placeholder="Your Name"
                />
              </label>
              <label className="input input-bordered font-semibold font-raleway flex w-full items-center gap-2">
                Email
                <input
                  type="text"
                  className="grow border-none"
                  placeholder="Your Mail"
                />
              </label>
              <textarea
                className="textarea font-semibold font-raleway w-full border-none"
                placeholder="Message"
              ></textarea>
              <button className="btn   w-fit btn-outline rounded-4xl font-rancho text-xl btn-secondary">
                Send Message
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('https://i.ibb.co.com/HXz55sm/24.jpg')] py-2 bg-cover bg-center">
        <h1 className="font-rancho text-white text-center">
          All Rights Reserved | Slash Coffee Emporium | 2025
        </h1>
      </div>
    </>
  );
};

export default Footer;
