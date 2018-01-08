import React, { Component } from "react";
import Dropzone from "react-dropzone";
import axios, { post } from "axios";
import SelectWrapper from "../../components/SelectWrapper/SelectWrapper";
import "./FeedData.css";

class FeedData extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: [{ value: "one", label: "One" }, { value: "two", label: "Two" }],
      files: []
    };

    this.fileUpload = this.fileUpload.bind(this);
  }

  onChange = val => {
    console.log("selected", val);
  };

  onDrop(files) {
    this.setState({
      files
    });
  }

  uploadFile(e) {
    this.fileUpload(this.state.files);
  }

  fileUpload(file) {
    const url = "http://example.com/file-upload";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    return post(url, formData, config);
  }

  render() {
    return (
      <div className="feedData-container">
        <SelectWrapper onChange={this.onChange} options={this.state.options} />
        <Dropzone onDrop={this.onDrop.bind(this)}>
          <p>
            Try dropping some files here, or click to select files to upload.
          </p>
        </Dropzone>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.files.map(f => (
              <li key={f.name}>
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
        <button type="button" onClick={this.uploadFile.bind(this)}>
          upload file
        </button>
      </div>
    );
  }
}

export default FeedData;
