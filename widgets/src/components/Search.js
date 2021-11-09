import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {

	// for search term
	const [term, setTerm] = useState('programming');

	// for search result
	const [results, setResults] = useState([]);

	//console.log(results);

	// (like lifecycle methods) we need to tell useEffect when in the cycle we want to use this
	// the second argument controls this, options are either [], nothing, or an array with something inside it
	// [] is the initial render
	// blank is initial rerender and after every rerender
	// [something, something].. is initial rerender, after every rerender
	// if ANY data (in the array) has changed since the last rerender
	
	// console.log('I run with every render')

	// useEffect(() => {
	// 	console.log('I only run once');
	// }, []);

	// useEffect(() => {
	// 	console.log('I run after every render and at initial render');
	// });

	// =============================
	// CLEANUP USEEFFECT FUNCTION EXAMPLE
	// =============================
	// useEffect(() => {
	// 	console.log('initial render or term was changed');

		// we are only allowed to return a function in this function which does cleanup
		// this is called at some point in time, first the overall function is called,
		// cleanup is added to the call stack, what we see on the console is clean up first
		// because that was the returned function from the top of the stack. It gives us a little time
		// to clean up before we see the rest of the main function

	// 	return () => {
	// 		console.log('CLEANUP');
	// 	};
	// }, [term]);

	// ===========================
	// ORIGINAL USEEFFECT FUNCTION
	// ===========================
	// we use this useEffect for the search function
	// we cannot use axios with functional components in the standard way

	useEffect(() => {

		//console.log('Initial and any time term changes');
		
		// You have several options for requests
		 // 1. immediate calling without a var
		// (async () => {
		// 	await axios.get('asdfasd');
		// })();

		// 2. you can also use a standard promise
		// axios.get('asdfsa')
		// .then((response) => {
		// 	console.log(response.data) etc...
		// });

		// 3. make a function expression and call it
		// we put the query params into the params object

		// ===== CODE STARTS HERE
		const search = async () => {
			// {data} is the entire object
			const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
				params: {
					action: 'query',
					list: 'search',
					origin: '*',
					format: 'json',
					srsearch: term,
				},
			});
			setResults(data.query.search);
		};

		// condition so results appear immediately when user
		// first opens the page
		if(term && !results.length){
			search();
		} else {
			// set timeout so we don't send requests too often
		// check if query contains param first to avoid an empty query error

		const timeoutId = setTimeout(() => {
			if(term) search();
		}, 500);

		return () => {
			clearTimeout(timeoutId);
		};
		}
		
	}, [term]);

	// mapping results to be displayed
	// dangerouslySetInnerHTML converts all html in text
	// html, however script tags remain allowing for a cross sripting attack so use wisely!!!
	const renderedResults = results.map((result) => {
		return (
			<div key={result.pageid} className="item">
				<div className="right floated content">
					<a 
					className="ui button"
					href={`https://en.wikipedia.org?curid=${result.pageid}`}
					>
					Go
					</a>
				</div>
				<div className="content">
					<div className="header">
						{result.title}
					</div>
					<span dangerouslySetInnerHTML={{ __html: result.snippet}}></span>
				</div>
			</div>
		);
	});

	// =============
	// JSX ON SCREEN
	// =============
	return (
		<div>
			<div className="ui form">
				<div className="field">
					<label>Enter Search Term</label>
					<input 
						value={term}
						onChange={(e) => setTerm(e.target.value)}
						className="input"/>
				</div>
			</div>

			<div className="ui celled list">
				{renderedResults}
			</div>
		</div>
	);
};

export default Search;