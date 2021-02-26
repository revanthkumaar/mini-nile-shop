import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as contactAction from './actions/contactAction'

class App extends Component{
  constructor(){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: ''
    }

  }
  handleChange(e){
    this.setState({
      name: e.target.value
    })
  }
  //submit functionality
  handleSubmit(e){
    e.preventDefault();
    let contact = {
      name: this.state.name
    }
    this.props.createContact(contact);
  }

  render(){
    let name;
    return(
      <div>
        <h1>contacts application</h1>
        <h3>Add contact form</h3>
        <hr/>
      {/*
        <ul>
         {this.props.contacts.map((contact,i)=> 
         <li key={i}>{contact.name}</li>)}
        </ul>

      */}
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange}/>
          <input type="submit" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state,ownProps) = {
  return {
    contacts: state.contacts
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createContact: contact => dispatch(contactAction.createContact(contact))
  }
}


export default connect(mapStateToProps,mapDispatchToProps)(App);


//connect()

/*

connect is a function that bridges gap between store and components
it also provides a way to pass the state as props to 
display data or dispatch events to redux store

*/