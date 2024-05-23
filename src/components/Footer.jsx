import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faMobileScreen,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faGooglePlusG,
  faVk,
  faYoutube,
  faLinkedinIn,
  faDigg,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

const Contact = () => {
  const contactInfo = [
    {
      icon: faEnvelope,
      title: "Email",
      description: "free@psdfreebies.com \n free@psdfreebies.com",
    },
    {
      icon: faMobileScreen,
      title: "Phone",
      description: "+123-456-789 \n +123-456-789",
    },
    {
      icon: faLocationDot,
      title: "Address",
      description: "123, Main Road, New City,\n My Country 123456",
    },
  ];

  const iconLinks = [
    { href: "https://www.facebook.com/login/", icon: faFacebookF },
    { href: "https://www.facebook.com/login/", icon: faGooglePlusG },
    { href: "https://www.facebook.com/login/", icon: faVk },
    { href: "https://www.facebook.com/login/", icon: faYoutube },
    { href: "https://www.facebook.com/login/", icon: faLinkedinIn },
    { href: "https://www.facebook.com/login/", icon: faDigg },
    { href: "https://www.facebook.com/login/", icon: faGithub },
  ];

  return (
    <div
      id="contact"
      className="w-full flex flex-col items-center justify-center pt-24"
    >
      <div className="flex items-center justify-center gap-10 mb-10">
        {contactInfo.map((info, index) => (
          <div key={index} className="flex gap-7">
            <div className="flex items-center justify-center">
              <FontAwesomeIcon
                icon={info.icon}
                className="text-5xl text-[#181818]"
              />
            </div>
            <div className="flex flex-col gap-2 whitespace-pre-line tracking-normal leading-6">
              <h5 className="text-xl text-[#181818] font-helvetica uppercase">
                {info.title}
              </h5>
              <p className="text-[#262626] font-lato leading-5">
                {info.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-10 text-5xl p-4 pb-10">
        <ul className="flex flex-row gap-8 text-black text-3xl">
          {iconLinks.map((link, index) => (
            <li key={index}>
              <a href={link.href} target="_blank">
                <FontAwesomeIcon
                  icon={link.icon}
                  className="border-2 border-[#f0d839] rounded-full p-4 w-10 h-10"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="w-full h-[200px] bg-[#cd0a2d] items-center justify-center flex flex-col text-center font-lato text-white text-2xl leading-9">
        <p>
          Designed By Sakshi Rana <br />
          Copyright 2020, All Right Reserved
        </p>
      </div>
    </div>
  );
};

export default Contact;
