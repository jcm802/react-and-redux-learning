import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

// *** moved from app.js to here to accomodate context system over redux
// this.props.onLanguageChange because this is where we are getting our function from, we have passed the function from app.js as a prop
class LanguageSelector extends React.Component {
    static contextType = LanguageContext;
    render(){
        // after retrieving the context type we can get this.context from the language store
        console.log(this.context);
        return (
            <div>
                Select a language:
                <i className="flag us" onClick={() => this.context.onLanguageChange('english')}/>
                <i className="flag nl" onClick={() => this.context.onLanguageChange('dutch')}/>
            </div>
        );
    }
}

export default LanguageSelector;