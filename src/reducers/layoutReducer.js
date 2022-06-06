const CHANGE_TAB = 'layout/CHANGE_TAB';

const changeTab = (tabName) => ({ type: CHANGE_TAB, tabName });

const initialState = {
  selectedTab: 'one',
};

export const ACTIONS = {
  changeTab,
}

function layoutReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {
        selectedTab: action.tabName,
      })
    default:
      return state
  }
};

export default layoutReducer;