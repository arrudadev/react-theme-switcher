import React, { useEffect, useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import { Link } from 'react-scroll';

import { BackToTopButton } from './styles';

const BackToTop = () => {
  const [showBackToTop, setShowBackTo] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setShowBackTo(true);
      } else {
        setShowBackTo(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
  }, []);

  return (
    <BackToTopButton showBackToTop={showBackToTop}>
      <Link to="banner" spy smooth duration={500}>
        <FaChevronUp size={20} />
      </Link>
    </BackToTopButton>
  );
};

export default BackToTop;
