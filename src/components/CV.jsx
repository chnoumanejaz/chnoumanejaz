import { HiOutlineDownload } from 'react-icons/hi';

function CV() {
  return (
    <a href="/Nouman Ejaz.pdf" className="cv-link">
      <div className="cv-btn app__flex">
        <HiOutlineDownload />
        Download CV
      </div>
    </a>
  );
}

export default CV;
