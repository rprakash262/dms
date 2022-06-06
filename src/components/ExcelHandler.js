import React from 'react';
import axios from 'axios';
import { JsonToExcel } from 'react-json-excel';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
      x: 'jsbj'
    }
  }

  onFileChange = event => {
    
    // Update the state
    this.setState({ selectedFile: event.target.files[0] });
  
  };

  onFileUpload = () => {
  
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
  
    // Details of the uploaded file
    console.log(this.state.selectedFile);
  
    // Request made to the backend api
    // Send formData object
    // axios.post("api/uploadfile", formData);
  };

  fileData = () => {
      if (this.state.selectedFile) { 
        return (
          <div>
            <h2>File Details:</h2>
            <p>File Name: {this.state.selectedFile.name}</p>
            <p>File Type: {this.state.selectedFile.type}</p>
          </div>
        );
      } else {
        return (
          <div>
            <br />
            <h4>Choose before Pressing the Upload button</h4>
          </div>
        );
      }
  };


  render() {

    const className = 'class-name-for-style';
    const filename = 'Excel-file';
    const fields = {
      "column1": "Column 1",
      "column2": "Column 2"
    };
    const style = {
      padding: "5px"
    };
    const data = [
      { column1: 1, column2: 'ahbv'},
      { column1: 2, column2: 'kbhjw'},
      { column1: 3, column2: 'kwajbfj'},
    ];
    const text = "Convert Json to Excel";

    return (
      <div className="App">
        {console.log(this.state.x)}
        <div>
          <input type="file" onChange={this.onFileChange} />
          <button onClick={this.onFileUpload}>
            Upload!
          </button>
        </div>

        {this.fileData()}

        <JsonToExcel
          data={data}
          className={className}
          filename={filename}
          fields={fields}
          style={style}
          text={text}
        />
      </div>
    )
  }
}

export default App;
