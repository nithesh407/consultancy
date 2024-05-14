import React, { useContext, useState } from 'react';
import { BsCartX } from 'react-icons/bs';
import { calculateTotal, displayMoney } from '../helpers/utils';
import useDocTitle from '../hooks/useDocTitle';
import cartContext from '../contexts/cart/cartContext';
import CartItem from '../components/cart/CartItem';
import EmptyView from '../components/common/EmptyView';
import { Button, Modal, Form, Input } from 'antd';
import { PhoneOutlined, TruckOutlined, UserOutlined } from "@ant-design/icons";


const { TextArea } = Input;


const Cart = () => {

    useDocTitle('Cart');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onFinish = (value) => {

        console.log(value);
        setIsModalOpen(false);
    };
    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };
    const handleCancel = () => {
        setIsModalOpen(false);
    };

    const { cartItems } = useContext(cartContext);



    const cartQuantity = cartItems.length;
    console.log(cartItems)

    // total original price
    const cartTotal = cartItems.map(item => {
        return item.productOriginalPrice * item.quantity;
    });

    const calculateCartTotal = calculateTotal(cartTotal);
    const displayCartTotal = displayMoney(calculateCartTotal);


    // total discount
    const cartDiscount = cartItems.map(item => {
        return (item.productOriginalPrice - item.productDiscountPrice) * item.quantity;
    });

    const calculateCartDiscount = calculateTotal(cartDiscount);
    const displayCartDiscount = displayMoney(calculateCartDiscount);


    // final total amount
    const totalAmount = calculateCartTotal - calculateCartDiscount;
    const displayTotalAmount = displayMoney(totalAmount);


    return (
        <>
            <section id="cart" className="section">
                <div className="container">
                    {
                        cartQuantity === 0 ? (
                            <EmptyView
                                icon={<BsCartX />}
                                msg="Your Cart is Empty"
                                link="/all-products"
                                btnText="Start Shopping"
                            />
                        ) : (
                            <div className="wrapper cart_wrapper">
                                <div className="cart_left_col">
                                    {
                                        cartItems.map(item => (
                                            <CartItem
                                                key={item.id}
                                                {...item}
                                            />
                                        ))
                                    }
                                </div>

                                <div className="cart_right_col">
                                    <div className="order_summary">
                                        <h3>
                                            Order Summary &nbsp;
                                            ( {cartQuantity} {cartQuantity > 1 ? 'items' : 'item'} )
                                        </h3>
                                        <div className="order_summary_details">
                                            <div className="price">
                                                <span>Original Price</span>
                                                <b>{displayCartTotal}</b>
                                            </div>
                                            <div className="discount">
                                                <span>Discount</span>
                                                <b>- {displayCartDiscount}</b>
                                            </div>
                                            <div className="delivery">
                                                <span>Delivery</span>
                                                <b>Free</b>
                                            </div>
                                            <div className="separator"></div>
                                            <div className="total_price">
                                                <b><small>Total Price</small></b>
                                                <b>{displayTotalAmount}</b>
                                            </div>
                                        </div>
                                        <button type="button" className="btn checkout_btn">Checkout</button>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
                <Modal title="Enter Your Details" open={isModalOpen} footer={null} onCancel={handleCancel}>
                    <Form
                        name="signin"
                        onFinish={onFinish}
                        layout="vertical"
                        requiredMark="optional"
                    >
                        <Form.Item
                            name="name"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your name!",
                                },
                                {
                                    pattern: /^[A-Za-z\s]+$/,
                                    message: "Name must contain only letters and spaces!",
                                },
                            ]}
                        >
                            <Input prefix={<UserOutlined />} placeholder="Name" />
                        </Form.Item>

                        <Form.Item
                            name="phone"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Phone Number!",
                                },
                                {
                                    pattern: /^[0-9]{10}$/,
                                    message: "Phone number must be 10 digits!",
                                },
                                {
                                    validator: (_, value) => {
                                        if (value && !/^[0-9]+$/.test(value)) {
                                            return Promise.reject(new Error("Phone number must contain only numbers!"));
                                        }
                                        return Promise.resolve();
                                    },
                                },
                            ]}
                        >
                            <Input prefix={<PhoneOutlined />} placeholder="Phone" />
                        </Form.Item>
                        <Form.Item
                            name="houseNumber"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your house number!",
                                },
                            ]}
                        >
                            <Input placeholder="House Number" />
                        </Form.Item>

                        <Form.Item
                            name="street"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your street!",
                                },
                            ]}
                        >
                            <Input placeholder="Street" />
                        </Form.Item>

                        <Form.Item
                            name="city"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your city!",
                                },
                            ]}
                        >
                            <Input placeholder="City" />
                        </Form.Item>

                        <TextArea
                            disabled
                            value={
                                "srdht"
                            }
                            style={{ height: 120, resize: 'none' }}
                        />

                        <Form.Item style={{ marginBottom: "0px" }}>
                            <Button disabled block type="primary" htmlType="submit">
                                <TruckOutlined /> Confirm Order
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </section>
        </>
    );
};

export default Cart;