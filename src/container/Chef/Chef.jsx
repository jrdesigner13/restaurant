import React from 'react';

import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' >
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt='chef' />
    </div>
    <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word" />
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt='quote' />
          <p className='p__opensans'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam tempora ducimus placeat. Aliquam, recusandae enim?</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptas aut sint aperiam numquam perferendis eligendi obcaecati ipsum pariatur nulla.</p>
      </div>  

      <div className='app__chef-sign'>
        <p>Jao Luo</p>
        <p className='p__opensans'>Chef & Founder</p>
        <img src={images.sign} alt='sign' />
      </div> 
    </div>
  </div>
);

export default Chef;
