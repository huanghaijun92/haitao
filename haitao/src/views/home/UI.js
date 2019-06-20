import React, { Component } from 'react';
import Banner from '@/components/Banner';

class Com extends Component {
  componentDidMount () {
    this.props.getHomeBannerlistData();
    this.props.getHomeProlistData();
  }

  render () {
    return (
      <div className = "box">
        <header className = "header">首页头部</header>
        <div className = "content">
          <Banner bannerlist = { this.props.homeBannerlist } />
        </div>
      </div>
    )
  }
}

export default Com;