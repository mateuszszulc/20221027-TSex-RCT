import PropTypes, { InferProps } from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

AuctionItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    imgURL: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    description: PropTypes.string,
    moveToCart: PropTypes.func,
 };

type AuctionItemProps = InferProps<typeof AuctionItem.propTypes>

function AuctionItem({ id, title, imgURL, price, description = 'Jakiś opis...', moveToCart = () => {} }: AuctionItemProps) {
    const auction = { id, title, description, imgURL, price };
    return (
        <div className="card">
            <div className="card-header">{title}</div>
            <img className="card-img" src={imgURL} alt={title} />
            <div className="card-body">
                <p className="card-text">{description}</p>
                <div className="d-flex justify-content-between">
                    <strong>{price} zł</strong>
                    <button onClick={() => moveToCart?.(auction)} className="btn btn-primary">
                        <FontAwesomeIcon icon={faCartPlus} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AuctionItem;
