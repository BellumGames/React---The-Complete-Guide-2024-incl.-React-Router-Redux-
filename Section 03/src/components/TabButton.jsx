
export default function TabButton({ children, onSelect, isSelected }) {
    console.log("TABBUTTON COMPONENT EXECUTING");

    return (
        <li><button className={isSelected ? 'active' : undefined} onClick={onSelect}>{children}</button></li>
    );
}

/*
export default function TabButton(props) {
    return <li><button>{props.children}</button></li>
}

export default function Card({ name, children }) {
    return (
        <article className="card">
            <h2>{name}</h2>
            {children}
        </article>
    );
}

// From tests before
*/

/*
// IMPORTANT: You CAN'T import & use useState like this in this Udemy environment
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState();

import React from 'react';
 
export default function App() {
    const [price, setPrice] = React.useState(100); // 100 is the default price state
 
    function handleClick() {
      setPrice(75);
    }
 
    return (
        <div>
            <p data-testid="price">${price}</p>
            <button onClick={handleClick}>Apply Discount</button>
        </div>
    );
}
*/

/*
import React from 'react';

// IMPORTANT:
// In this Udemy environment, you CAN'T import & use useState like this:
// import { useState } from 'react'
// Instead, import & use it like this:
// import React from 'react';
// React.useState(...)

// don't change the Component name "App"

export default function App() {
    const [isDeleting , setDelete] = React.useState(<button onClick={handleDanger}>Delete</button>);
    
    function handleDanger() {
        setDelete(!isDeleting? <button onClick={handleDanger}>Delete</button> : (
                <div data-testid="alert" id="alert">
                  <h2>Are you sure?</h2>
                  <p>These changes can't be reverted!</p>
                  <button onClick={handleProceed}>Proceed</button>
                </div>
            )
        );
    }
    
    function handleProceed() {
        setDelete(isDeleting ? <button onClick={handleDanger}>Delete</button> : (
                <div data-testid="alert" id="alert">
                  <h2>Are you sure?</h2>
                  <p>These changes can't be reverted!</p>
                  <button onClick={handleProceed}>Proceed</button>
                </div>
            )
        );
    }
    
    return (
      <div>
        {isDeleting}
      </div>    
    );
}

import React from 'react';

// don't change the Component name "App"

export default function App() {
    const [isSelected, SetIsSelected] = React.useState("");
    
    function OnSelect(){
        SetIsSelected("Something different");
    }
    
    return (
        <div>
            <p className={isSelected ? 'active' : undefined}>Style me!</p>
            <button onClick={OnSelect}>Toggle style</button>
        </div>
    );
}

*/