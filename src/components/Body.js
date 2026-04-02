import RestaurantCard from "./RestaurantCard";
import { BASE_URL } from "../utils/constants";
import { useState, useEffect, use } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

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

    if (onlineStatus === false) {
        return <h1>Offline, Please check your internet connection!!</h1>
    }

    return (
        <div className="body">
            <div className='filter flex'>
                <div className='flex m-4 p-4'>
                    <input className="border border-solid border-black m-4 p-2" type="text" placeholder="Search for restaurants and food" value={searchText} onChange={(e) => {
                        setSearchText(e.target.value);
                    } }/>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                        
                        const filteredList = listOfRestaurants.filter((res) => 
                            res.info.name.toLowerCase().includes(searchText.toLowerCase()
                        ));
                        
                        setFilteredRestaurants(filteredList);
                    }}>Search</button>
                </div>
                <div className='flex m-4 p-4'>
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setFilteredRestaurants(filteredList);
                }}>
                    Top Rated Restaurants</button>
                </div>
            </div>
            <div className="flex flex-wrap">
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
