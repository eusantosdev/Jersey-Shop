const Items = ({ items }) => {
    return (
            <div className={`product ${ items.isInBag ? 'selected' : '' }`}>
                <div className="product">
                    <div className="photo">
                        <img src={"./img/" + items.photo} />
                    </div>
                    <div className="description">
                        <span className="name">{items.name}</span>
                        <span className="price">{items.price}</span>
                        { 
                            items.isInBag &&
                            <div className="quantity-area">
                                <button>-</button>
                                    <span className="quantity">{items.quantity}</span>
                                <button>+</button>
                            </div> 
                        }
                    </div>
                </div>
            </div>
        )
} 

export default Items;