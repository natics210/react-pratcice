import React from 'react';
import './search-box.styles.css';

export const SearchBox = ({ placeHolder, handler}) => {
    return <input type='search' className='search' placeholder={placeHolder} onChange={handler} />
}