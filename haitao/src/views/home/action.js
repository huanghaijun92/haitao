// 使用react-thunk来进行异步操作
import api from '@/api';

export default {
  getHomeBannerlistData (dispatch) {
    api.reqGetData('banner').then(data => {
      dispatch({
        type: 'changeHomeBannerlist',
        data
      })
    })
  },
  getHomeProlistData (dispatch) {
    api.reqGetData('douban').then(data => {
      dispatch({
        type: 'changeHomeProlist',
        data
      })
    })
  }
}