import { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const { resId } = useParams();

    const [resInfo, setResInfo] = useState(null);

    useEffect(() => {
        // API call to fetch menu data
        fetchMenu();
    }, []);

    const fetchMenu = async () => {
        const data = await fetch(`${BASE_URL}/listRestaurantMenu/${resId}`);

        const json = await data.json();
        setResInfo(json.data);
    };

    if (resInfo === null) {
        return <Shimmer />;
    }

    const { name, cuisines, costForTwoMessage } = resInfo?.cards[2]?.card?.card?.info || {};
    const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card || {};
    console.log(itemCards);
    return (
        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(", ")}</p>
            <h3>{costForTwoMessage}</h3>
            <h2>Menu</h2>
            <ul>
                {
                    itemCards.map((item) => {
                        return <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100} ₹</li>
                    })
                }
            </ul>
        </div>
    );
}

export default RestaurantMenu;