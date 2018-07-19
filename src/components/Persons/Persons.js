import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // componentWillMount() {
  //   console.log("[Persons.js] Component will mount");
  // }

  componentDidMount() {
    console.log("[Persons.js] Component did mount");
  }

  //WARNING! To be deprecated in React v17. Use new lifecycle static getDerivedStateFromProps instead.
  // componentWillReceiveProps(nextProps) {
  //   console.log("[Persons.js] Component will receive props", nextProps);
  //   return true;
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    console.log("[UPDATE Persons.js] Get Derived State From Props", nextProps, prevState);
    return true;
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("[UPDATE Persons.js] Should Component Update", nextProps, nextState);
  //   // console.log("nextProps.persons", nextProps.persons);
  //   // console.log("this.props.persons", this.props.persons);
  //   return nextProps.persons !== this.props.persons || 
  //     nextProps.changed !== this.props.changed || 
  //     nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   console.log("[UPDATE Persons.js] Component Will Update");
  // }
  

  render() {
    console.log("[Persons.js] Inside render");
    return this.props.persons.map((person, index) => {
      return (
        <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age}
          key={person.id}
          changed={event => this.props.changed(event, person.id)}
        />
      );
    });
  }
}

export default Persons;