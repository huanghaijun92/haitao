import React from 'react';
import { Carousel } from 'antd-mobile';

const Com = ({ bannerlist }) => (
  <Carousel
    autoplay
    infinite
    dots={false}
    style={{ display: 'inline-block', width: '100%', height: 152 }}>
    {bannerlist.map((val, index) => (
      <a key={index} href="http://www.alipay.com" style={{ display: 'inline-block', width: '100%' }} >
        <img src={'http://www.daxunxun.com' + val} alt="" style={{ width: '100%', height: 152, verticalAlign: 'top' }} />
      </a>
    ))}
  </Carousel>
)

export default Com;