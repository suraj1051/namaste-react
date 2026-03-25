import React from 'react';
import ReactDOM from 'react-dom/client';

const parent = React.createElement('div', { id: 'parent', xyz: 'abc' },
    React.createElement('div', { id: 'child' }, [
        React.createElement('h1', null, 'first heading'), 
        React.createElement('h2', null, 'second heading')
    ]),
    React.createElement('div', { id: 'child1' }, [
        React.createElement('h1', null, 'first heading'), 
        React.createElement('h2', null, 'second heading')
    ])
);

// console.log(heading); //heading is a React element, which is a JavaScript object
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);