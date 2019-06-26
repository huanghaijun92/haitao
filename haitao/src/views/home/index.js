import { connect } from 'react-redux';
import UI from './UI';
// import action from './action';
import '@/styles/home.scss';
import api from '@/api';

const mapStateToProps = (state) => ({
  homeBannerlist: state.home.homeBannerlist,
  homeProlist: state.home.homeProlist,
  navlist: state.home.navlist
})
const mapDispatchToProps = (dispatch) => ({
  getHomeBannerlistData () {
    api.reqGetData('banner').then(data => {
      dispatch({
        type: 'changeHomeBannerlist',
        data
      })
    })
  },
  getHomeProlistData () {
    api.reqGetData('douban').then(data => {
      dispatch({
        type: 'changeHomeProlist',
        data
      })
    })
  }
})


// const mapDispatchToProps = (dispatch) => ({
//   getHomeBannerlistData () {
//     dispatch(action.getHomeBannerlistData)
//   },
//   getHomeProlistData () {
//     dispatch(action.getHomeProlistData)
//   }
// })

const Com = connect(mapStateToProps, mapDispatchToProps)(UI)

export default Com;