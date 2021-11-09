import axios from 'axios';

const KEY = 'AIzaSyACwDMihim0EmX4hcSuRgL4gsxnDYcHiVk';

export default axios.create({
	baseURL: 'https://www.googleapis.com/youtube/v3',
	params: {
		part: 'snippet',
		type: 'video',
		maxResults: 5,
		key: KEY
	}
});

// the above is so later we can say youtube.get('/search') or whatever