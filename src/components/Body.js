import RestaurantCard from "./RestaurantCard";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    // Whenever state variable changes, component re-renders and the code inside the component function is executed again.
    console.log("Body render");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        // API call to fetch restaurant data
        const data = await fetch(`${BASE_URL}/listRestaurants`);

        const json = await data.json();

        setListOfRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredRestaurants(json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }
    
    // Conditional rendering
    if (listOfRestaurants.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">
            <div className='filter'>
                <div className='search'>
                    <input type="text" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    } }/>
                    <button className="search-btn" onClick={() => {
                        
                        const filteredList = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()
                        ));
                        
                        setFilteredRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    filteredRestaurants.map((restaurant) => {
                        return <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}><RestaurantCard restData={restaurant} /></Link>
                    })
                }
            </div>
        </div>
    );
}

export default Body;
