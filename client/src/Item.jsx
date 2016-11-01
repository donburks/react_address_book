import React, {Component} from 'react';

class Item extends Component {
  constructor(props) {
    super(props)
    this.selectContact = this.selectContact.bind(this)
  }

  componentDidMount() {
    console.log("Item componentDidMount")
  }

  selectContact() {
    console.log("Selected contact", this.props.contactId);
    this.props.handleClick(this.props.contactId);
  }

  render() {
    console.log("Item render")
    return (
      <li
        onClick={this.selectContact}
        className="collection-item">{this.props.name}</li>
    );
  }
}
export default Item;
