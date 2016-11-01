import React, {Component} from 'react';
import Nav from './Nav.jsx';
import Display from './Display.jsx';

class App extends Component {
  constructor(props) {
    console.log("App constructor")
    super(props)
    // Set the initial state of the component
    this.changeCurrentContact = this.changeCurrentContact.bind(this);
    this.state = {contacts: [], currentContact: {} }
  }

  componentDidMount() {
    console.log("App componentDidMount")
    // Is for using third party libraries that
    // need access to the DOM
    //
    // Also, for AJAX requests
    $.get("http://localhost:8000/api/contacts")
    .then((contacts) => {
      // set the contacts in the state
      // calls render automatically
      this.setState({contacts: contacts, currentContact: contacts[0]})
    })
    .catch((err) => {
      alert("Could not get contacts");
    })
  }
  
  changeCurrentContact(id) {
    let contact = this.state.contacts.filter(function(c) {        
      return c.id === id;
    })[0];
    this.setState({currentContact: contact});
  }

  render() {
    console.log("App render")
    return (
      <div className="wrapper">
        <Nav contacts={this.state.contacts} handleClick={this.changeCurrentContact} />
        <Display contact={this.state.currentContact} />
      </div>
    );
  }
}
export default App;
