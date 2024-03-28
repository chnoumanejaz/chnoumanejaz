import { motion } from 'framer-motion';
import { images } from '../../constants';
import './Header.scss';
import { AppWrap } from '../../wrapper';
import CV from '../../components/CV';

function Header() {
  const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className="app__header-info">
        <div className="app__header-badge">
          <div className="badge-cmp app__flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text">Hello, I am</p>
              <h1 className="head-text">Nouman Ejaz</h1>
            </div>
          </div>
          <div className="tag-cmp app__flex">
            <p className="p-text"> React Developer ⚛️ </p>
            <p className="p-text"> 👨‍💻 Freelancer </p>
          </div>
          <div className="tag-cmp tag-cv app__flex">
            <CV />
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }}
        className="app__header-img">
        <img src={images.profile3} alt="profile_Nouman" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          src={images.circle}
          alt="profile_bg"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVariants}
        whileInView={scaleVariants.whileInView}
        className="app__header-circles">
        {[images.redux, images.react, images.typescript].map(
          (circle, index) => {
            return (
              <div className="circle-cmp app__flex" key={`circle-${index}`}>
                <img src={circle} alt="circle-tech" />
              </div>
            );
          }
        )}
      </motion.div>
    </div>
  );
}

export default AppWrap(Header, 'home');
