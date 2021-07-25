import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faGithub,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  return (
    <nav className='text-center mt-5 pb-2 text-lg underline'>
      <header className='mx-80 text-3xl'>Apartment Tracker</header>
      <a
        className='text-3xl m-5 hover:text-gray-400 duration-300'
        href='https://www.instagram.com/'
        target='_blank'
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a
        className='text-3xl m-5 hover:text-gray-400 duration-300'
        href='https://www.github.com/'
        target='_blank'
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <a
        className='text-3xl m-5 hover:text-gray-400 duration-300'
        href='https://www.twitter.com/'
        target='_blank'
      >
        <FontAwesomeIcon icon={faTwitter} />
      </a>
    </nav>
  );
};

export default Header;
