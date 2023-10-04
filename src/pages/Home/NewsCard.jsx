import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
const NewsCard = ({ news }) => {
    const { title, image_url, details, _id} = news;
    return (
        <div className="relative mt-6 flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="p-6">
                <img className= 'w-full' src={image_url} alt="" />
                <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {title}
                </h5>
                <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                    {
                        details.length > 200 
                        ? <p>{details.slice(0, 200)} <Link to={`/news/${_id}`} className="text-blue-600 font-bold">Read more</Link></p>
                        : <p>{details}</p>
                    }
                </p>
            </div>
            
        </div>
    );
};
NewsCard.propTypes = {
    news: PropTypes.object
}
export default NewsCard;