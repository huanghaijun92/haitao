import React, { Component } from 'react';
import Banner from '@/components/Banner';

class Com extends Component {
  componentDidMount () {
    this.props.getHomeBannerlistData();
    this.props.getHomeProlistData();
  }

  goSearch () {
    // console.log(this.props)
    this.props.history.push('/empty/search')
  }

  render () {
    return (
      <div className = "box">
        <header className = "header hheader">
          <div className = "hsearch">
            <div className = "logo">
              <img src={ require('@/images/scan.png') } alt=""/>
            </div>
            <div className = "searchbar" onClick={this.goSearch.bind(this)}>
              <input type="text" className="search" disabled/>
            </div>
            <div className = "userimg">
              <img src={ require('@/images/msg.png') } alt=""/>
            </div>
          </div>
          <div className = "hnav">
            <ul>
              <li>推荐</li>
              <li>草本顺势疗法</li>
              <li>沐浴和个人护理</li>
              <li>美容美妆</li>
            </ul>
          </div>
        </header>
        <div className = "content hcontent">
          <div>
            <div className = "banner">
              <Banner bannerlist = { this.props.homeBannerlist } />
            </div>
            <div className = "subnav">
              <ul>
                <li>
                  <i><img src={ require('@/images/nav1.png') } alt=""/></i>
                  <span>特价产品</span>
                </li>
                <li>
                  <i><img src={ require('@/images/nav2.png') } alt=""/></i>
                  <span>尖货排名</span>
                </li>
                <li>
                  <i><img src={ require('@/images/nav3.png') } alt=""/></i>
                  <span>新品上架</span>
                </li>
                <li>
                  <i><img src={ require('@/images/nav4.png') } alt=""/></i>
                  <span>限时抢购</span>
                </li>
              </ul>
            </div>
            <div className = "odds">
              <p><i>每周特惠</i></p>
              <ul>
                <li><img alt="" src={ require('@/images/odds1.png') }/></li>
                <li><img alt="" src={ require('@/images/odds3.png') }/></li>
                <li><img alt="" src={ require('@/images/odds2.png') }/></li>
              </ul>
            </div>
            <div className = "recommendations">
              <h2><span>产品建议</span><em>更多<i>></i></em></h2>
              <ul>
                <li><img alt="" src={ require('@/images/rec1.png') }/></li>
                <li><img alt="" src={ require('@/images/rec2.png') }/></li>
                <li><img alt="" src={ require('@/images/rec3.png') }/></li>
                <li><img alt="" src={ require('@/images/rec4.png') }/></li>
              </ul>
            </div>
            <div className = "subbanner">
                <img alt="" src={ require('@/images/subbanner.png') }/>
            </div>
            <div className = "hot">
              <h2><span>今日热门</span><em>更多<i>></i></em></h2>
              <ul>
                <li>
                  <img alt="" src={ require('@/images/hot1.png') } />
                </li>
                <li>
                  <img alt="" src={ require('@/images/hot2.png') } />
                </li>
                <li>
                  <img alt="" src={ require('@/images/hot3.png') } />
                </li>
              </ul>
            </div>
            <div className = "timelimited">
              <div className = "timebox">
              <h2><span>限时抢购</span><em>查看更多<i>></i></em></h2>
              <ul>
                <li>
                  <img alt="" src={ require('@/images/time1.png') } />
                  <p>阿卡波糖片</p>
                  <span>$9.9</span>
                  <s>$19.9</s>
                </li>
                <li>
                  <img alt="" src={ require('@/images/time1.png') } />
                  <p>阿卡波糖片</p>
                  <span>$9.9</span>
                  <s>$19.9</s>
                </li>
                <li>
                  <img alt="" src={ require('@/images/time1.png') } />
                  <p>阿卡波糖片</p>
                  <span>$9.9</span>
                  <s>$19.9</s>
                </li>
                <li>
                  <img alt="" src={ require('@/images/time1.png') } />
                  <p>阿卡波糖片</p>
                  <span>$9.9</span>
                  <s>$19.9</s>
                </li>
              </ul>
              </div>
            </div>
            <div className = "health">
              <h2><span>健康建议</span></h2>
              <ul>
                <li>
                  <img alt="" src={ require('@/images/health1.png') } />
                  <p className="healthname">十全大补汤</p>
                  <p className="healthintro">功效:"十全大补汤"选鲜料加入十味中药，无味小料，吴味调料</p>
                </li>
                <li>
                  <img alt="" src={ require('@/images/health2.png') } />
                  <p className="healthname">乌鸡汤</p>
                  <p className="healthintro">功效:"乌鸡汤"选鲜料加入十味中药，无味小料，吴味调料</p>
                </li>
              </ul>
            </div>
          </div>
         </div>
      </div>
    )
  }
}

export default Com;
