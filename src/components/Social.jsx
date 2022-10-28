import { FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

import '../styles/components/social.sass'

const social = [
    { name: "linkedin", icon: <FaLinkedinIn />, link: "https://www.linkedin.com/in/isaque-brighenti/" },
    { name: "github", icon: <FaGithub />, link: "https://github.com/isaquebrighenti" },
    { name: "instagram", icon: <FaInstagram />, link: "https://www.instagram.com/isaquebrighenti/" },
];

const Social = () => {
  return <section id="social">
    {social.map((network) => (
        <a href={network.link} className='social-btn' id={network.name} key={network.name}>
            {network.icon}
        </a>
    ))}
  </section>
};

export default Social