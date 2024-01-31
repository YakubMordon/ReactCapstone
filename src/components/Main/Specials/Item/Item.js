import './Item.css';

export default function Item({name, description, price, imageUrl}) {
  return (
    <div className="item-container">
        <img className="item-image" src={imageUrl} alt={name} />
        <div className="item-textContainer">
            <div className="item-header">
                <p className="item-nameText">{name}</p>
                <p className="item-priceText">${price}</p>
            </div>
            <p className="item-descriptionText">{description}</p>
            <p className="item-delivery" aria-label="On Click">Order a delivery</p>
        </div>
    </div>
  )
}
