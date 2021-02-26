import React, {Component} from 'react';

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
  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.name);
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

export default App;