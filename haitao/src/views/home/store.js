const reducer = (state = {
  homeBannerlist: [1, 2],
  homeProlist: []
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