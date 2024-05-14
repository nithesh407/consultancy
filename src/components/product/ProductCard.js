import React, { useContext } from 'react';
import { IoMdStar } from 'react-icons/io';
import { Link } from 'react-router-dom';
import { displayMoney } from '../../helpers/utils';
import cartContext from '../../contexts/cart/cartContext';
import useActive from '../../hooks/useActive';


const ProductCard = (props) => {

    const { productID, productImageUrl, title, productDescription, productDiscountPrice, productOriginalPrice, productRating, path } = props;

    const { addItem } = useContext(cartContext);
    const { active, handleActive, activeClass } = useActive(false);


    // handling Add-to-cart
    const handleAddItem = () => {
        const item = { ...props };
        addItem(item);

        handleActive(productID);

        setTimeout(() => {
            handleActive(false);
        }, 3000);
    };

    const newPrice = displayMoney(productDiscountPrice);
    const oldPrice = displayMoney(productOriginalPrice);


    return (
        <>
            <div className="card products_card">
                <figure className="products_img">
                    {/* <Link to={`${path}${productID}`}> */}
                    <img src={productImageUrl[0]} alt="product-img" />
                    {/* </Link> */}
                </figure>
                <div className="products_details">
                    <span className="rating_star">
                        {
                            [...Array(productRating)].map((_, i) => <IoMdStar key={i} />)
                        }
                    </span>
                    <h3 className="products_title">
                        {title}
                    </h3>
                    <h5 className="products_info">{productDescription}</h5>
                    <div className="separator"></div>
                    <h2 className="products_price">
                        {newPrice} &nbsp;
                        <small><del>{oldPrice}</del></small>
                    </h2>
                    <button
                        type="button"
                        className={`btn products_btn ${activeClass(productID)}`}
                        onClick={handleAddItem}
                    >
                        {active ? 'Added' : 'Add to cart'}
                    </button>
                </div>
            </div>
        </>
    );
};

export default ProductCard;