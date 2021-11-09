// we make a separate file for this so we can make use of it where we actually want it
import React from 'react';

// context with default value to be used by button and field components
// create context takes an arg of any js type, object, array, number etc.
// to change the context value we need to create a provider in the App component
const Context = React.createContext('english');

// named export to be imported with {}
export class LanguageStore extends React.Component {
    // 1. setting a state property to maintain the current language
    state = { language: 'english' };
    // 2. (inside) callback for other components to change the selected language
    onLanguageChange = language => {
        this.setState({ language });
    }
    // 3. render method with provider - passing the currently selected language and our callback (our data and a way to change our data)
    // this is how we share and allow other components to change the selected language
    // 4. we also need to wrap our provider tag around the components
    // this.props.children is the jsx of all our other components giving them all access to the context object
    // the capital C is required for context because we need to tell context this is not a normal vanilla js object
    render(){
        return (
            <Context.Provider value={{ ...this.state, onLanguageChange: this.onLanguageChange }}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

export default Context;