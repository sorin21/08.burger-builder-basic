import React, { Component } from 'react';
import classes from './Person.scss';

class Person extends Component {
  componentWillMount() {
    console.log("[Person.js] Component will mount");
  }

  componentDidMount() {
    console.log("[Person.js] Component did mount");
  }
  render() {
    console.log("[Person.js] Inside render");
    return (
      <div className={classes.Person}>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}

export default Person;