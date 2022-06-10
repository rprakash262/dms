const AlertBar = ({alertBool, alertType, alertMsg})=> {
  return (
    <div className={`alert-bar ${alertBool ? '' : 'alert-bar-hide'}`}>
      <div className={`alert-bar-content ${alertType === 'success' ? 'alert-bar-success' : 'alert-bar-error'}`}>
        <p>{alertMsg}</p>
      </div>
    </div>
  )
}

export default AlertBar;