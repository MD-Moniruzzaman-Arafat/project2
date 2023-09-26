import PropTypes from 'prop-types';

const DonationItem = ({ singleItem }) => {

    const { picture, title, category, category_bg_color, card_bg_color, text_button_bg_color, price } = singleItem;

    return (
        <div>
            <div className="card card-side shadow-xl" style={{ backgroundColor: `${card_bg_color}` }}>
                <figure><img className='h-60' src={picture} alt="Movie" /></figure>
                <div className="card-body">
                    <span className='w-24 text-center px-2 rounded' style={{ backgroundColor: `${category_bg_color}`, color: `${text_button_bg_color}` }}>{category}</span>
                    <h2 className="card-title">{title}</h2>
                    <p style={{ color: `${text_button_bg_color}` }} className='font-bold'>$ {price}</p>
                    <div className="card-actions">
                        <button className="btn text-white btn-sm" style={{ backgroundColor: `${text_button_bg_color}` }}>View Details</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

DonationItem.propTypes = {
    singleItem: PropTypes.object
}

export default DonationItem;