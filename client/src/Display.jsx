import React, {Component} from 'react';

class Display extends Component {
  componentDidMount() {
    console.log("Display componentDidMount")
  }

  render() {
    console.log("Display render")
    return (
      <main className="main">
        <div className="card">
          <div className="card-content">
            <span className="card-title">{this.props.contact.name}</span>
            <img className="circle contact-image" src={this.props.contact.image_url}></img>
            <p>{this.props.contact.email}</p>
          </div>
          <div className="card-action">
            <a href="#">Delete</a>
          </div>
        </div>
      </main>
    );
  }
}
export default Display;
