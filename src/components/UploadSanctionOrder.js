import React from 'react';
import { connect } from 'react-redux';

import { ACTIONS } from '../reducers/layoutReducer';
import { uploadSanctionOrderAction } from '../actions';

class UploadSanctionOrder extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedFile: null,
    }
  }

  onFileChange = event => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  uploadSanctionOrder = async () => {
    const { selectedFile } = this.state;
    const { toggleAlert } = this.props;

    if (selectedFile === null) {
      return toggleAlert(true, 'error', 'Please select a file to upload!');
    }

    await uploadSanctionOrderAction(selectedFile[0]);
    return toggleAlert(true, 'success', 'File uploaded successfully!!');
  }

  render () {
    return (
      <div className="upload-sanction-order">
        <h4>Upload Sanction Order</h4>
        <div>
          <input
            type="file"
            className="input-file"
            onChange={this.onFileChange}
          />
          <button
            className="button"
            onClick={this.uploadSanctionOrder}
          >
            Upload
          </button>
        </div>
      </div>
    )
  }
}

const mapState = (state) => {

}

const mapDispatch = {
  toggleAlert: ACTIONS.toggleAlert,
}

export default connect(mapState, mapDispatch)(UploadSanctionOrder);