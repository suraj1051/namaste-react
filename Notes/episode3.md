# JSX React
- Its not html inside javascript. JSX is html like javascript syntax(XML).

# why you use jsx to write code ?
- a: because it is easy to write and understand. It is also easier to debug.

# question: Why do we need to use React.createElement when we have JSX?
- Answer: JSX is not understood by browsers, it needs to be converted into React.createElement calls which then create React Elements that can be rendered to the DOM.

# How does JSX get converted to React.createElement calls?
- JSX is transpiled by tools like Babel into React.createElement calls. For example, the JSX <h1 id="heading">Hello World from React</h1> gets transpiled to React.createElement('h1', { id: 'heading' }, 'Hello World from React').
- Babel is javscript compiler.

# React Component
- Everything in react is a Component.
- two types of components
- 1.class based components 2.Functional based Componenets
- React Functional component is normal javascript function that returns jsx code/ React element.

# What is Component composition 
- Composite two component inside one composition.

# JSX sanitise the data.
- Its prevent cross-site scripting attack.

# prompts are just argument to the function
- prompts are just argument of the function
- Passing dynamic data to Component
- common js -> const { resName, rating, price } = props;

# Each child in a list should have a unique "key" prop.
- Its a missing property 
-   {
        restaurantList.data.cards[0].card.card.gridElements.infoWithStyle.restaurants.map((restaurant) => {
                return <RestaurantCard restData={restaurant} key={restaurant.info.id} />
            })
    }
# why we need "key" prop ?
- Its used to optimise render cycle to React.    
- its represnting card uniquely. video - 2.0.0.
- React official documnet didn't recommded that dont use index as key prop.
- 

# EPISODE - 5

- different types of import/export
- default Export/Import - import restaurantList from "../utils/mockData";
- named Export/Import - import { LOGO_URL } from "../utils/constants";

- Can you do default export with named export ?

# Read about Reconsilation on below link

https://github.com/acdlite/react-fiber-architecture

# useState 
const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);

# useEffect HOOK is called as soon as body load.
- usEffect( callback arrow function, []);
- whenever second arguments change my useEffect would called

# Routing -
- React-rouer-dom
# 2 types of rounting in web apps
- Client Side Routing
- Server Side Routing

# componentDidMount() used - ClassBasedComponent
- componentDidMount is used to make api call in classComponenet after component render.

# Single Responsibility principle


