import { BsInstagram } from 'react-icons/bs';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

function SocialMedia() {
  function handleClick(destination) {
    if (destination === 'linkedin')
      window.open('https://www.linkedin.com/in/chnoumanejaz/', '_blank');
    if (destination === 'github')
      window.open('https://github.com/chnoumanejaz', '_blank');
    if (destination === 'insta')
      window.open('https://www.instagram.com/chnoumanejaz/', '_blank');
    if (destination === 'facebook')
      window.open('https://web.facebook.com/chnoumanejaz31/', '_blank');
  }

  return (
    <div className="app__social">
      <div onClick={() => handleClick('linkedin')}>
        <FaLinkedinIn />
      </div>
      <div onClick={() => handleClick('github')}>
        <FaGithub />
      </div>
      <div onClick={() => handleClick('insta')}>
        <BsInstagram />
      </div>
      <div onClick={() => handleClick('facebook')}>
        <FaFacebookF />
      </div>
    </div>
  );
}

export default SocialMedia;
