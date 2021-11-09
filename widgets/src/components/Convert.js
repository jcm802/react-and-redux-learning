import React, {useState, useEffect} from 'react';
import axios from 'axios';
// Translate google API key
//AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM

const Convert = ({ language, text }) => {
	// state that will store translated text
	const [translated, setTranslated] = useState('');
	const [debouncedText, setDebouncedText] = useState(text);

	// useEffect no. 1
	useEffect(() => {
		const timerId = setTimeout(() => {
			setDebouncedText(text);
		}, 500);
		return () => {
			clearTimeout(timerId);
		};
	}, [text]);

	// useEffect no.2
	// this recieves the language and text
	useEffect(() => {
		const doTranslation = async () => {
		// with post you can send along data for the body in the first object and
		// in the second object you send along your params
		const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2',
		 {}, {
			params: {
				q: debouncedText,
				// we want the language code specifically
				target: language.value,
				key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
			}
		}); // retrieval of translated text while updating state
			setTranslated(data.data.translations[0].translatedText);
		};
		// making sure to call the request function
		doTranslation();
	}, [language, debouncedText]);

	return (
			<h1 className="ui header">{translated}</h1>
		);
};

export default Convert;