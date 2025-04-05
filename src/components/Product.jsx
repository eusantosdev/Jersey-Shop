export const Product = ({ items }) => {
    return (
        items.map(( { photo, name, price, quantity, isInBag }, id ) => 
            <div key={id} className={`product ${ isInBag ? 'selected' : '' }`}>
                <div className="product">
                    <div className="photo">
                        <img src={"./img/" + photo} />
                    </div>
                    <div className="description">
                        <span className="name">{name}</span>
                        <span className="price">{price}</span>
                        { 
                            isInBag &&
                            <div className="quantity-area">
                                <button>-</button>
                                    <span className="quantity">{quantity}</span>
                                <button>+</button>
                            </div> 
                        }
                    </div>
                </div>
            </div>
        )
    )
} 