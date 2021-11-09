import axios from 'axios';

// this component is used for getting unsplash to
// accept our request, this was moved from our App class
// to make things a lot cleaner
// doing it this way will have some big benefits for future apps
// we work on

export default axios.create({
	baseURL: 'https://api.unsplash.com/',
	headers: {
			Authorization: 'Client-ID IOTscvBnqHnIDkLD1xl0xSaWT1yqzGD1LPtnktPPz6c'
	} 
});