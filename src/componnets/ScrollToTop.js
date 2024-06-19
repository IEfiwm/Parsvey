import React from 'react';
import '../css/scroll.css';

const ScrollToTop = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button className='btntop' onClick={scrollToTop}  style={{ position: 'fixed', bottom: '20px', right: '20px', padding: '10px 20px',  borderRadius: '5px', border: 'none', cursor: 'pointer' }}>
     up
    </button>
  );
};

export default ScrollToTop;