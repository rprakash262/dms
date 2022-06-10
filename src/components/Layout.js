import React from 'react';
import { connect } from 'react-redux';

import { ACTIONS } from '../reducers/layoutReducer';
import UploadSanctionOrder from './UploadSanctionOrder';
import Sidebar from './Sidebar';
import '../App.css'

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    const {
      changeTab,
      selectedTab,
    } = this.props;

    return (
      <div className="Layout">
        <div className="Header">
          <div className="header-left">Data Management System</div>
          <div className="header-right"></div>
        </div>
        <div className="Bottom">
          <Sidebar
            selectedTab={selectedTab}
            changeTab={changeTab}
          />
          <div className="Main-Content">
            {selectedTab === 'one' && <UploadSanctionOrder />}
            {selectedTab === 'two' && <div>Main Content two</div>}
            {selectedTab === 'three' && <div>Main Content three</div>}
            {selectedTab === 'four' && <div>Main Content four</div>}
          </div>
        </div>
      </div>
    )
  }
}

const mapstate = (state) => {
  const { selectedTab } = state.layout;

  return {
    selectedTab,
  }
}

const mapDispatch = {
  changeTab: ACTIONS.changeTab,
}

export default connect(mapstate, mapDispatch)(Layout);
