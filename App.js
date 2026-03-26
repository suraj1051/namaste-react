import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => React Element => HTML Element

const heading = React.createElement(
  'h1',
  { id: 'heading' },
  'Hello World from React'
);

// How do you create h1 tag using JSX?
const jsxHeading = <h1 className="head">Hello World from React heading</h1>;

const Title = () => (
  <>
  {jsxHeading}
  <h1 className="head">Hello World Title ss</h1>
  </>
);
const HeadingComponent = () => {
  return <div id="container">
    {Title()}
    <Title />
    <Title></Title>
    <h1 className="head">Hello World from React Functional Components </h1>
  </div>;
  <h1 className="head">Hello World from React Functional Components </h1>;
} 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<HeadingComponent />);

