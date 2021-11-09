import React, { useState, useEffect, useRef } from 'react';

// Wiring up properties from app to component
const Dropdown = ({label, options, selected, onSelectedChange}) => {

	// new state for open and closed dropdown
	const [open, setOpen] = useState(false);

	// ref to retrieve the most parent element returned by our component
	// this will show react where the react elements begin and the dom elements end
	// this is to stop any confusion with clicking on the body or a react element
	const ref = useRef();

	// when the user clicks elsewhere on the screen the dropdown will close
	// this only happens once because we only need to set it up once
	// useEffect(() => {

	// 	const onBodyClick = (event) => {
			// this checks to see if the element clicked on is inside our component
			// if it is, this function does nothing and the logic
			// we set up will just run
			// if it isn't we close the dropdown
		// 	if(ref.current.contains(event.target)) return;

		// 	setOpen(false);
		// };

		// document.body.addEventListener('click', onBodyClick, {capture: true});

		// do not call the above listener to stop a null pointer
		// exception when we toggle the dropdown (sets ref.current to null)
	// 	return () = {
	// 		document.body.removeEventListener('click', onBodyClick, {
	// 			capture: true,
	// 		});
	// 	};
	// }, []);

	// the full new useEffect function without comments
	useEffect(() => {
    const onBodyClick = (event) => {
      if (ref.current.contains(event.target)) return;
      setOpen(false);
    };
    document.body.addEventListener("click", onBodyClick, { capture: true });
 
    return () => {
      document.body.removeEventListener("click", onBodyClick, {
        capture: true,
      });
    };
  }, []);

	// Mapping the options for rendering
	const renderedOptions = options.map((option) => {
		// check currently selected value, if so show nothing (or null)
		if(option.value === selected.value) return null;
		// insert all this into a div
		return (
				<div 
					key={option.value} 
					className="item"
					onClick={() => onSelectedChange(option)}
				>
					{option.label}
				</div>
			);
	});

	// ref.current to show the referenced div, shown on rerender
	//console.log(ref.current);

// to add a color reference
//<p style={{color: selected.value}}>{`The Color is ${selected.value}!`}</p>

	// To be displayed
	return (
		<div ref={ref} className="ui form">
			<div className="field">
				<label className="label">{label}</label>
				<div onClick={() => setOpen(!open)} className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
					<i className="dropdown icon"></i>
					<div className="text">{selected.label}</div>
					<div className={`menu ${open ? 'visible transition' : ''}`}>{renderedOptions}</div>
				</div>
			</div>
			
		</div>

	);
};

export default Dropdown;