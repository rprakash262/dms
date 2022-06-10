const CHANGE_TAB = 'layout/CHANGE_TAB';
const SHOW_ALERT = 'layout/SHOW_ALERT';

const changeTab = (tabName) => ({ type: CHANGE_TAB, tabName });
const showAlert = (alertBool, alertType, alertMsg) => ({ type: SHOW_ALERT, alertBool, alertType, alertMsg });

const initialState = {
  selectedTab: 'one',
  alertBool: false,
  alertType: '',
  alertMsg: '',
};

const toggleAlert = (alertBool, alertType, alertMsg) => (dispatch, getState) => {
  dispatch(showAlert(alertBool, alertType, alertMsg));
  return setTimeout(() => dispatch(showAlert(false, alertType, alertMsg)), 4000)
}

export const ACTIONS = {
  changeTab,
  toggleAlert,
}

function layoutReducer (state = initialState, action) {
  switch (action.type) {
    case CHANGE_TAB:
      return Object.assign({}, state, {
        selectedTab: action.tabName,
      })
    case SHOW_ALERT:
      return Object.assign({}, state, {
        alertBool: action.alertBool,
        alertMsg: action.alertMsg,
        alertType: action.alertType,
      })
    default:
      return state
  }
};

export default layoutReducer;