import { useState } from 'react';

//Warning: You provided a `value` prop to a form field without an `onChange` handler. 
// Keep in Mind How React Works: Every time React detects a change anywhere, it reruns its render cycle
// Now When i write a key to input a react is gonna kick rerender cycle, the component will rerender with the same state
// With the location prop
const SearchParams = () => {
const [location, setLocation] = useState('Seattle,WA');

    return (
        <div className="search-params">
            <form>
                <label htmlFor="location">
                    location
                    <input id="location" onChange={(e) => setLocation(e.target.value)} value={location}
                    placeholder="Location" />
                </label>
                <button>Submit</button>
                </form>
        </div>
    )
}

export default SearchParams;