/* import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faFacebookF,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Header = () => {
  const navLinks = [
    "#Home",
    "#Destinations",
    "#Motorcycles",
    "#Rentals",
    "#Blog",
    "#Contact",
  ];
  const icons = [faFacebookF, faGooglePlusG, faVk, faYoutube];
  return (
    <div className="w-full h-max bg-[rgb(0,0,0,0.3)] fixed top-0 z-10 backdrop-blur-md px-10 py-4 flex justify-between items-center">
      <div>
        <a href="#home">
          <img
            src="/images/logo-main.png"
            alt=""
            className="mix-blend-screen h-16"
          />
        </a>
      </div>
      <div className="flex gap-12 items-center justify-center">
        <ul className="flex gap-6 text-white text-base tracking-wider uppercase font-normal font-monsterrat">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.toLowerCase()}>{link.substring(1)}</a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 text-white text-xl">
          {icons.map((icon, index) => (
            <li
              key={index}
              className="w-11 h-11 rounded-full flex items-center justify-center border-4 border-white"
            >
              <a href="#">
                <FontAwesomeIcon icon={icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
 */


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVk,
  faFacebookF,
  faGooglePlusG,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const Header = () => {
  const navLinks = [
    "#Home",
    "#Destinations",
    "#Motorcycles",
    "#Rentals",
    "#Blog",
    "#Contact",
  ];

  const socialLinks = [
    { href: "https://www.facebook.com", icon: faFacebookF },
    { href: "https://mail.google.com", icon: faGooglePlusG }, // Consider replacing if Google+ is not relevant
    { href: "https://vk.com", icon: faVk },
    { href: "https://www.youtube.com", icon: faYoutube },
  ];

  return (
    <div className="w-full h-max bg-[rgb(0,0,0,0.3)] fixed top-0 z-10 backdrop-blur-md px-10 py-4 flex justify-between items-center">
      <div>
        <a href="#home">
          <img
            src="/images/logo-main.png"
            alt="Logo"
            className="mix-blend-screen h-16"
          />
        </a>
      </div>
      <div className="flex gap-12 items-center justify-center">
        <ul className="flex gap-6 text-white text-base tracking-wider uppercase font-normal font-monsterrat">
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.toLowerCase()}>{link.substring(1)}</a>
            </li>
          ))}
        </ul>
        <ul className="flex gap-4 text-white text-xl">
          {socialLinks.map((social, index) => (
            <li
              key={index}
              className="w-11 h-11 rounded-full flex items-center justify-center border-4 border-white"
            >
              <a href={social.href} target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={social.icon} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
