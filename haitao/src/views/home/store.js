const reducer = (state = {
  homeBannerlist: [1, 2],
  homeProlist: [],
  navlist: ['@/images/nav1.png', '@/images/nav2.png', '@/images/nav3.png', '@/images/nav4.png'],
},action) => {
  const { type, data } = action;
  switch (type) {
    case 'changeHomeBannerlist':
      return Object.assign({}, state, { homeBannerlist: data });
    case 'changeHomeProlist':
      return Object.assign({}, state, { homeProlist: data });
    default:
      return state;
  }
}

export default reducer;