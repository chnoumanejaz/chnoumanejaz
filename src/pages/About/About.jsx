import { useEffect, useState } from 'react';
import './About.scss';
import { motion } from 'framer-motion';
import { client, urlFor } from '../../client';
import { AppWrap, MotionWrap } from '../../wrapper';

function About() {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then(data => setAbouts(data));
  }, []);

  return (
    <>
      <h2 className="head-text">
        Good <span>Design </span>
        Equals <br />
        Good
        <span> Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.2, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}>
            <div>
              <img src={urlFor(about.imgUrl)} alt={about.title} />
            </div>
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
}

 export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
