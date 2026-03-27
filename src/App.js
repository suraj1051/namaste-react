import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            <Body />
            <h2>Footer</h2>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppLayoutComponent />);
