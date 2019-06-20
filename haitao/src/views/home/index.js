import { connect } from 'react-redux';
import UI from './UI';
import action from './action';

const mapStateToProps = (state) => ({
  homeBannerlist: state.home.homeBannerlist,
  homeProlist: state.home.homeProlist
})
const mapDispatchToProps = (dispatch) => ({
  getHomeBannerlistData () {
    dispatch(action.getHomeBannerlistData)
  },
  getHomeProlistData () {
    dispatch(action.getHomeProlistData)
  }
})

const Com = connect(mapStateToProps, mapDispatchToProps)(UI)

export default Com;