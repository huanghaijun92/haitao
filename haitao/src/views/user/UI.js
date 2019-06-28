import React, { Component } from 'react';

class Com extends Component {
  render () {
    return (
      <div className = "box">
        <header className = "header uheader">
          <div className = "utitle"><span>我的</span><i>设置</i></div>
          <div className = "usermsg">
            <img src={ require('@/images/user/userimg.png') } alt=""/>
            <div className = "username">
              <p className = "uname">尼古拉斯赵四</p>
              <p className = "utel">18938893293</p>
            </div>
          </div>
          <div className = "unav">
            <ul>
              <li>
                <i>0</i>
                <span>收藏夹</span>
              </li>
              <li>
                <i>0</i>
                <span>关注店铺</span>
              </li>
              <li>
                <i>0</i>
                <span>足迹</span>
              </li>
              <li>
                <i>0</i>
                <span>红包卡劵</span>
              </li>
            </ul>
          </div>
        </header>
        <div className = "content ucontent">
          <div className = "order">
            <p><span>我的订单</span><em>查看全部订单<i><img src={require('@/images/user/jiantou.png')} alt=""/></i></em></p>
            <ul>
              <li>
                <img src={ require('@/images/user/pay.png') } alt=""/>
                <span>待付款</span>
              </li>
              <li>
                <img src={ require('@/images/user/send.png') } alt=""/>
                <span>代发货</span>
              </li>
              <li>
                <img src={ require('@/images/user/receive.png') } alt=""/>
                <span>待收货</span>
              </li>
              <li>
                <img src={ require('@/images/user/evaluate.png') } alt=""/>
                <span>评价</span>
              </li>
              <li>
                <img src={ require('@/images/user/refund.png') } alt=""/>
                <span>退款/售后</span>
              </li>
            </ul>
          </div>
          <div className = "userlist">
            <ul>
              <li>
                <span>我的账户</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
              <li>
                <span>消息中心</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
              <li>
                <span>我的产品评论</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
              <li>
                <span>通知列表</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
              <li>
                <span>收藏</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
            </ul>
          </div>
          <div className = "set">
            <ul>
              <li>
                <span>设置</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
              <li>
                <span>顾客服务部</span>
                <i><img src={require('@/images/user/jiantou.png')} alt=""/></i>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Com;