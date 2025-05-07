import { useContext } from "react";
import { BsMailbox } from "react-icons/bs";
import logo from "../../assets/images/more/logo1.png"
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";

const Footer = () => {

  const {handleSendMessage} = useContext(AuthContext);

  return (
    <>
      <div className="bg-[url('https://i.ibb.co.com/2trFcPk/13.jpg')] mt-17 py-16">
        <div className="lg:max-w-7xl md:max-w-xl max-w-sm mx-auto">
          <img
            src={logo}
            className="lg:h-20 h-16"
            alt=""
          />

          <div className="flex md:flex-row flex-col justify-between">
            {/* Left */}
            <div className="flex flex-col gap-6 lg:w-1/2 w-full">
              <h1 className="font-rancho text-3xl lg:text-5xl font-semibold">
                Slash Coffee Emporium
              </h1>
              <p>
                Always ready to be your friend. Come & Contact with us to share
                your memorable moments, to share with your best companion.
              </p>
              <div className="flex gap-5 items-center">
                <FaFacebook color="blue" size={30}></FaFacebook>
                <FaInstagram color="orange" size={30}></FaInstagram>
                <FaTwitter color="cyan" size={30}></FaTwitter>
                <FaLinkedinIn color="blue" size={30}></FaLinkedinIn>
              </div>

              <h1 className="font-rancho text-2xl lg:text-4xl  mt-6">
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
            <form onSubmit={handleSendMessage} className="lg:w-1/2 w-full flex flex-col gap-3">
              <h1 className="font-rancho text-3xl lg:text-5xl font-semibold">
                Create a Support Ticket
              </h1>
              <label className="input input-bordered font-semibold font-raleway w-full flex items-center gap-2">
                Phone
                <input
                  type="text"
                  name="phone"
                  className="grow border-none"
                  placeholder="Your Phone"
                />
              </label>
              <label className="input input-bordered font-semibold font-raleway flex w-full items-center gap-2">
                Email
                <input
                  type="email"
                  name="email"
                  className="grow border-none"
                  placeholder="Your Mail"
                />
              </label>
              <label className="input input-bordered font-semibold font-raleway flex w-full items-center gap-2">
                Service?
                <input
                  type="text"
                  name="service"
                  className="grow border-none"
                  placeholder="For which service?"
                />
              </label>
              <textarea
                className="textarea font-semibold font-raleway w-full border-none"
                placeholder="Your Message"
                name="message"
              ></textarea>
              <button className="btn   w-fit btn-outline rounded-4xl font-rancho text-lg btn-secondary">
                Send Message
              </button>
              <Link className="font-raleway cursor-pointer btn  btn-accent" to={'/manage'}>Manage</Link>
            </form>
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
