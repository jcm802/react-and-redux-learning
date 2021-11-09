import React from 'react';
import UserCreate from './UserCreate';
import { LanguageStore } from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {

    // the state and function is taken care of by the store now
    // state = { language: 'english'};

    // onLanguageChange = language => {
    //     this.setState({language: language});
    // };
    // ---------------

    // userCreate has both button and field, so it needs to be interacted with
    // the 'value' property is a very special part of a provider, and you put the state property in it so when it changes, the context changes as well
    // we didnt need to use this.state.language but it's just how we did it here
    // we linked multiple providers to UserCreate

    // we removed the LanguageContext provider and replace it with LanguageStore
    render(){
        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector />
                        <ColorContext.Provider value="red">
                                <UserCreate />
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        );
    }
} 

export default App;