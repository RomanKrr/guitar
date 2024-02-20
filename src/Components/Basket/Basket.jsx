import React, { useContext } from 'react';
import './Basket.css';
import { ShopContext } from '../../Context/ShopContex';
import { CiCircleRemove } from "react-icons/ci";

const Basket = () => {
    const { all_products, cartItems, removeFromCart } = useContext(ShopContext);

    // Перевірка, чи кошик порожній
    const isBasketEmpty = Object.values(cartItems).every(item => item === 0);

    // Розрахунок загальної суми товарів в кошику
    let totalPrice = 0;
    if (!isBasketEmpty) {
        all_products.forEach((product) => {
            totalPrice += product.price * cartItems[product.id];
        });
    }

    return (
        <div className='basket'>
            {/* Відображення порожнього кошика, якщо він порожній */}
            {isBasketEmpty && (
                <div className="basket-empty">
                    <h1>Корзина</h1>
                    <h2>У кошику немає товарів</h2>
                    {/* <p>перейти в каталог</p> */}
                    <hr />
                </div>
            )}

            {/* Відображення товарів, якщо кошик не порожній */}
            {!isBasketEmpty && (
                <div className="basket-with-items">
                    <h1>Корзина</h1>
                    {all_products.map((e) => {
                        if (cartItems[e.id] > 0) {
                            return (
                                <div key={e.id} className="basket-items">
                                    <img src={e.image} alt="" />
                                    <div className="basket-items-info">
                                        <h2>{e.name}</h2>
                                        <p>{e.price}грн</p>
                                    </div>
                                    <div className="b">
                                        <p>кількість {cartItems[e.id]}</p>
                                        <CiCircleRemove className='basket-item-ison-delete' onClick={() => { removeFromCart(e.id) }} />
                                    </div>
                                </div>
                            );
                        }
                    })}
                    <div className="basket-with-items-footer">
                        <h2>Всього: {totalPrice}грн</h2>
                        <button>Оформити замовлення</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Basket;
