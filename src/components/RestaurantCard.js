import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, avgRating, costForTwo, cloudinaryImageId } = props.restData.info || {};
    return (
        <div className='restaurant-card'>
            <img src={CDN_URL + cloudinaryImageId} alt="logo" />
            <h3>{name}</h3>
            <h4>Rating: {avgRating}</h4>
            <h4>Price: {costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;