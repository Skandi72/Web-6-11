import React from 'react';
function Filter(proos) {
    return <header>
    <div className="filter-list">
        <ul>
          <li>
            <select>
                <option>Filter 1</option>
            </select>  
          </li>
          <li>
            <select>
                <option>Filter 2</option>
            </select>  
          </li>
          <li>
            <select>
                <option>Filter 3</option>
            </select>  
          </li>
        </ul>
    </div>
    <div className="filterbutton">
        <button className="filter-button">Apple</button>
    </div>
</header>
}   

export default Filter;