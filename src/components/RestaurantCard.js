import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { name, avgRating, costForTwo, cloudinaryImageId } = props.restData.info || {};
    return (
        <div className='m-4 p-4 w-52 h-72 bg-gray-100 rounded-lg'>
            <img src={CDN_URL + cloudinaryImageId} alt="logo" />
            <h3 className="font-bold text-lg">{name}</h3>
            <h4>Rating: {avgRating}</h4>
            <h4>Price: {costForTwo}</h4>
        </div>
    );
}

export default RestaurantCard;