import React, { useContext } from 'react';
import { TbTrash } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import QuantityBox from '../common/QuantityBox';


const CartItem = (props) => {

    const { productID: id, productImageUrl: images, title, productDescription: info, productDiscountPrice: finalPrice, productOriginalPrice: originalPrice, quantity = 5, path } = props;

    const { removeItem } = useContext(cartContext);
    const newPrice = displayMoney(finalPrice);
    const oldPrice = displayMoney(originalPrice);


    return (
        <>
            <div className="cart_item">
                <figure className="cart_item_img">
                    <img src={images[0]} alt="product-img" />
                </figure>
                <div className="cart_item_info">
                    <div className="cart_item_head">
                        <h4 className="cart_item_title">
                            {title} {info}
                        </h4>
                        <div className="cart_item_del">
                            <span onClick={() => removeItem(id)}>
                                <TbTrash />
                            </span>
                            <div className="tooltip">Remove Item</div>
                        </div>
                    </div>

                    <h2 className="cart_item_price">
                        {newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small>
                    </h2>

                    <QuantityBox itemId={id} itemQuantity={quantity} />
                </div>
            </div>
        </>
    );
};

export default CartItem;