export const Table = ({ cartItems, onRemove }) => {
    return (
        <div>
            <table className="table table-borderless table-shopping-cart">
                <thead className="text-muted">
                    <tr className="small text-uppercase">
                        <th scope="col" width="120">Product</th>
                        <th scope="col" width="120">Quantity</th>
                        <th scope="col" width="120">Price</th>
                        <th scope="col" className="text-right d-none d-md-block" width="200"></th>
                    </tr>
                </thead>


                <tbody>

                    {cartItems.map((item) => (
                        <tr className='' key={item.id}>
                            <td className="align-baseline">
                                <figure className="itemside align-items-center">
                                    <div className="aside"><img src={item.image} className="img-sm" alt={item.image} />
                                    </div>
                                    <figcaption className="info"> <span className="cart-product-name"
                                        data-abc="true">{item.name}</span>
                                        <p className="product-cat text-muted">{item.category}</p>
                                    </figcaption>
                                </figure>
                            </td>

                            <td className="align-baseline">
                                <button className="quantity-btn">-</button>
                                <span className="quantity-count">{item.quantity}</span>
                                <button className="quantity-btn">+</button>
                            </td>

                            <td className="align-baseline">
                                <div className="price-wrap">
                                    <p className="price">{item.price.toFixed(2)}</p>
                                </div>
                            </td>

                            <td className="text-right align-baseline">
                                <button
                                    onClick={() => onRemove(item.id)}
                                    className="delete-product-btn"
                                >
                                    x</button> </td>
                        </tr>
                    ))}

                </tbody>
            </table>
            {cartItems.length === 0 && (
                <div>
                    <img
                        className="empty-cart"
                        src="/images/empty-cart.png"
                        alt='empty-cart' />
                </div>
            )
            }


        </div>

    );
}

