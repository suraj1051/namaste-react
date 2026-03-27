import RestaurantCard from "./RestaurantCard";
import restaurantList from "../utils/mockData";
import { useState } from "react";

const Body = () => {

    const [listOfRestaurants, setListOfRestaurants] = useState(restaurantList.data.cards[0].card.card.gridElements.infoWithStyle.restaurants);
    
    return (
        <div className="body">
            <div className='filter'>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(
                        (res) => res.info.avgRating > 4.5
                    );
                    setListOfRestaurants(filteredList);
                }}>
                    Top Rated Restaurants</button>
            </div>
            <div className='restaurant-container'>
                {
                    listOfRestaurants.map((restaurant) => {
                        return <RestaurantCard restData={restaurant} key={restaurant.info.id} />
                    })
                }
            </div>
        </div>
    );
}

export default Body;
