const Sidebar = ({selectedTab, changeTab})=> {
  return (
    <div className="Sidebar">
      <div onClick={() => changeTab('one')} className="one-tab">
        Upload Sanction Order
        {selectedTab === 'one' && 
        <div className="one-tab-pointer"/>}
      </div>
      <div onClick={() => changeTab('two')}className="one-tab">
        Tab Two
        {selectedTab === 'two' && 
        <div className="one-tab-pointer"/>}
      </div>
      <div onClick={() => changeTab('three')} className="one-tab">
          Tab Three
          {selectedTab === 'three' && 
          <div className="one-tab-pointer"/>}
        </div>
      <div onClick={() => changeTab('four')} className="one-tab">
        Tab Four
        {selectedTab === 'four' && 
        <div className="one-tab-pointer"/>}
      </div>
    </div>
  )
}

export default Sidebar;