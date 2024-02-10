import React, { useContext } from 'react'
import { ReactTyped } from 'react-typed';
import { DataContext } from '../../../context/DataContext';
import "./BannerTyped.css"

const BannerTyped = () => {
  const data = useContext(DataContext);
  const typed_strings = data.banner_typed_strings;
  // console.log(data)
  return (
    <div className='bannertyped'>
      <div className='bannerTypedDiv w-75 text-center'>
        <ReactTyped
          startWhenVisible
          strings={typed_strings}
          typeSpeed={65}
          backSpeed={50}
          backDelay={1300}
          loop
          smartBackspace
        />
      </div>
    </div>
  );
};

export default BannerTyped