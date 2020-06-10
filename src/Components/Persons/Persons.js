import React, { Component }from 'react';
import Person from './Person/Person';
class Persons extends Component {
    constructor(props) { 
        super(props);
        this.state = {}
    }
    // static getDerivedStateFromProps(props, state) {
    //     console.log('[Persons.js] get DerivedStateFromProps');
    //     return state;
    // }
    // UNSAFE_componentWillReceiveProps() { 
    //     console.log('[Persons.js] UNSAFE_componentWillReceiveProps', this.props);
    // }
    shouldComponentUpdate(nextProps, nextState) {
        console.log('[Persons.js]  shouldComponentUpdate');
        return true;
    }
    getSnapshotBeforeUpdate(prevProps, nextState) { 
        console.log('[Persons.js]  getSnapshotBeforeUpdate');
        return { message: 'Snapshot!'};
    }
    // componentWillUpdate(nextProps, nextState, nextContext) { 

    // }
    componentDidUpdate(prevProps, prevState, snapshot) { 
        console.log('[Persons.js]  componentDidUpdate');
        console.log(snapshot);
    }
    render() { 
        console.log('[Persons.js] rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)}
                key={index}
            />
        });
    }
}
export default Persons;