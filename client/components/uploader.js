import React, { Component } from 'react'

class Uploader extends Component {
  onFileChange(event) {
    event.preventDefault()
    const file = event.target.files[0]
    this.refs.alert = `Uploading ${file.name}`
    const uploader = new Slingshot.Upload("uploadToAmazonS3")
    uploader.send(file, (error, url) => {
      if (error) {
        Bert.alert(error.message, "warning")
        this.refs.alert = "Choose a file to upload"
      } else {
        console.log(this.props.params)
        Meteor.call('products.imageupdate', this.props.params, url)
      }
    })
  }
  render() {
    return (
      <div className="upload-area">
        <form ref="form">
          <p className="alert alert-success text-center">
            <span ref="alert">Choose a file (Click or Drag)</span>
            <input
              onChange={this.onFileChange.bind(this)}
              type="file"
            />
          </p>
        </form>
      </div>
    )
  }
}

export default Uploader
