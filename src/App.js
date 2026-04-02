import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import About from './components/About';
import ContactUs from './components/ContactUs';
import Error from './components/Error';
import RestaurantMenu from './components/RestaurantMenu';
import Shimmer from './components/Shimmer';
// import Grocery from './components/Grocery';

// App chunking
// Dynalic Bundling
// Code splitting is a technique to split the code into smaller chunks 
// which can be loaded on demand. This helps in reducing the initial load time of the application 
// and improves the performance.

const Grocery = React.lazy(() => import('./components/Grocery'));

const AppLayoutComponent = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <ContactUs />
            },
            {
                path: "/restaurants",
                element: <Body />
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu />
            },
            {
                path: "/grocery",
                element: (
                    <React.Suspense fallback={<Shimmer />}>
                        <Grocery />
                    </React.Suspense>
                )
            }

        ],
        errorElement: <Error />
    }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
