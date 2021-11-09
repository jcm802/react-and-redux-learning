// purpose of this is too show one image by itself
import React from 'react';

// should be class name 'ImageCard'
class ImageCar extends React.Component {

	constructor(props){
		super(props);

		// initialised state
		this.state = {spans: 0};

		// DOM React ref
		this.imageRef = React.createRef();
	}

	// this is too early - it is before the image has actually been loaded
	componentDidMount(){
		//console.log(this.imageRef);
		// the second an image renders we print out the height of the image
		// the instant after this happens the image itself has not actually loaded yet
		//console.log(this.imageRef.current.clientHeight);

		// when an image has loaded, the event listener takes care of this
		this.imageRef.current.addEventListener('load', this.setSpans);
	}

	// callback - this is where we will figure out heights of each image
	setSpans = () => {
		const height = this.imageRef.current.clientHeight;
		// figures out how many rows each image requires
		const spans = Math.ceil(height / 10);
		this.setState({spans: spans});
		

		//console.log(this.imageRef.current.clientHeight);
	}

	render(){
		const {description, urls} = this.props.image;
		return (
			<div style={{gridRowEnd: `span ${this.state.spans}`}}>
				<img ref={this.imageRef} alt={description} src={urls.regular}/>
			</div>
		);
	}
}

export default ImageCar;