import React, { Component } from 'react';
import classes from './Person.scss';
import PropTypes from 'prop-types';

import {AuthContext} from '../../../containers/App';

class Person extends Component {
  inputElement = React.createRef();
  componentWillMount() {
    console.log("[Person.js] Component will mount");
  }

  componentDidMount() {
    console.log("[Person.js] Component did mount");
    if(this.props.position === 0) {
      this.inputElement.current.focus();
    }
  }

  focus() {
    this.inputElement.current.focus();
  }
  render() {
    console.log("[Person.js] Inside render");
    return (
      <div className={classes.Person}>
        <AuthContext.Consumer>{auth => auth ? <p>I am authenticated</p> : <p> I am not authenticated</p>}</AuthContext.Consumer>
        <p onClick={this.props.click}>
          I'm {this.props.name} and I am {this.props.age} years old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
          // create a new prop inputElement available for entire class
          // ref={(inp) => this.inputElement = inp}
          ref={this.inputElement}
        />
      </div>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number
}

export default Person;