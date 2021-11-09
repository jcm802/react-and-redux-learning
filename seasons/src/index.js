import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from './Spinner';

if (module.hot) {
  module.hot.accept();
}

// functional component
//const App = () => {
	// geolocation api activation retrieving user location
	//window.navigator.geolocation.getCurrentPosition(
		// success
		//(position) => console.log(position),
		// failure
		//(err) => console.log(err)
	//);


	//return <div>Latitude: </div>;
//};
// class based component expects methods from a sub class
// we need this to handle asynchronous operations (compiling html before we recieve our current position)
// getting geolocation, success, error

// react says we have to define render
class App extends React.Component {
	// when an instance of this class is created
	// this constructor is called before anything else
	// it makes it a good place to initialise state

  // INITIAL USE OF CONSTRUCTOR
	//constructor(props){
		// we are overriding the subclass, super with props makes sure that the parent is also called
		//super(props);
		//this.state = {lat: null, errorMessage: ""}; // state object default initialised    
	//}

  // REFACTORED STATE INITIALISATION - this is the same as the initialisation
  // in the constructor version, Babel makes a constructor for us
  state = {lat: null, errorMessage: ''};

// LifeCycle methods
// shows up when component shows up on the screen
  // componentDidMount(){
  //   console.log('My component did render to the screen'); 

componentDidMount(){
    // DATA LOADING (previously was put in the render method)
    window.navigator.geolocation.getCurrentPosition(
      // refactored ES6 syntax
          position =>  this.setState({lat: position.coords.latitude}),// on success
            // we called setstate!!!
            // never directly assign state with = unless in the constructor!!!!
          err => this.setState({errorMessage: err.message})
          // treat the error properly
      );
  }

// this shows up when the component is rerendered
  componentDidUpdate(){
    console.log('My component was just updated - it rerendered');
  }

// helper function for various render cases so styles can easily
// be applied universally so we aren't repeating ourselves
  renderContent(){
    // this is called very frequently so we have get current position() into the constructor
     // this is called conditional rendering

     // if we get an error
      if(this.state.errorMessage && !this.state.lat){
        return <div>Error: {this.state.errorMessage}</div>;
      }
      // if we don't
      if(!this.state.errorMessage && this.state.lat){
        return <SeasonDisplay lat={this.state.lat}/>;
      }
      // return <div>Loading!</div>
      // remember not to have the semi colon when you go multi-line
      // regardless show the following
      return <Spinner message="Please accept location request"/>;
  }

  render() { 
    return (
        <div className="border red">
          {this.renderContent()}
        </div>
      )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));