import './ImageList.css';
import React from 'react';
import ImageCar from './ImageCar';

const ImageList = props => {
	// todo: loop over each image in props
	// todo: return a new component array with all the images in it
	//console.log(props.images);
	const images = props.images.map(image => {
		return <ImageCar key={image.id} image={image}/>;
	});
	return (
		<div className="image-list">
			{images}
		</div>
		);

};

export default ImageList;