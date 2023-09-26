import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Card = ({ data }) => {
    // console.log(data)

    const { id, card_bg_color, category, category_bg_color, picture, text_button_bg_color, title } = data;
    return (
        <div>
            <Link to={`donations/${id}`}>
                <div className="card w-72 shadow-xl" style={{ backgroundColor: `${card_bg_color}`, color: `${text_button_bg_color}` }}>
                    <figure><img className='w-72' src={picture} alt="Shoes" /></figure>
                    <div className="p-5">
                        <span className='w-24 text-center px-2 rounded' style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }}>{category}</span>
                        <h2 className="text-base font-bold">
                            {title}
                        </h2>
                    </div>
                </div>
            </Link>
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object
}

export default Card;