import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component {
    // adding in context to a class component
    // 'contextType' is a very special property name
    // static adds a property to the class itself
    // static contextType = LanguageContext;

    // this is essentially the same as writing
    // Button.contextType = LanguageContext;
    // when we use a consumer we do not have to specify a context type

    render(){
        // accessing the context data
        // console.log(this.context);
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; 
        
        // consumers inserted here
        // it needs one child which always needs to be a function
        // the consumer react component will automatically invoke the function inside it
        return (
            <ColorContext.Consumer>
                {(color) => 
                    <button className={`ui button ${color}`}>
                    <LanguageContext.Consumer>
                        {({ language }) => language === 'english' ? 'Submit' : 'Voorleggen'}
                    </LanguageContext.Consumer>
                </button>
                }
                
            </ColorContext.Consumer>
        );
    }
}

export default Button;