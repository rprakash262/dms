import React from 'react';

class UploadSanctionOrder extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <div className="upload-sanction-order">
        <h4>Upload Sanction Order</h4>
        <div>
          <input
            type="file"
            className="input-file"
            onChange={() => {}}
          />
          <button className="button">Upload</button>
        </div>
      </div>
    )
  }
}

export default UploadSanctionOrder;