import React, { useState } from 'react';
import './MainPage.css';
import Item from '../Item/Item';
import all_products from '../Assets/all_products';
import { FaFilter } from "react-icons/fa6";

const MainPage = (props) => {
    const [find, setFind] = useState(false);
    const [cheap, setCheap] = useState(true); // Створюємо стейт для відстеження порядку сортування

    // Функція для сортування масиву за ціною
    const sortByPrice = (a, b) => {
        if (cheap) {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    }

    return (
        <div className='filter-container'>

            <div className='side'>
                <h1>{props.pageTitle}</h1>
                <div className='button-nav'>
                    {/* Додаємо обробник події для сортування */}
                    <select className='sort-button' onChange={() => setCheap(!cheap)}>
                        <option className='cheap-dear'>Від дешевих до дорогих</option>
                        <option className='dear-cheap'>Від дорогих до дешевих</option>
                    </select>
                    <div className={`filter-button ${find ? 'active' : ''}`} onClick={() => { setFind(!find) }}>
                        Фільтрувати<FaFilter style={{ color: '#FF7A00', width: '22px', height: '30px', marginLeft: '5px' }} />
                    </div>
                </div>
            </div>
            <div className={`filter ${find ? 'active' : ''}`}>
                <h3>Бренди</h3>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Alvarez</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Cort</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Ibanez</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Fender</p>
                </div>
                <h3 className='filter-price'>Ціна</h3>
                <div className='filter-items'>
                    <input className='filter-price-input' type="text" placeholder='Від' />
                    <input className='filter-price-input' type="text" placeholder='До' />
                </div>
                <h3>Форми для деки</h3>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Джамбо</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Дредноут</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Міні Джамбо</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>Парлор</p>
                </div>
                <h3>Колір</h3>
                <div className='filter-button-container'>
                    <button className='black' style={{ background: 'black' }}></button>
                    <button className='red' style={{ background: 'red' }}></button>
                    <button className='white' style={{ background: 'white' }}></button>
                    <button className='brown' style={{ background: 'brown' }}></button>
                    <button className='green' style={{ background: 'green' }}></button>
                    <button className='yellow' style={{ background: 'yellow' }}></button>
                    <button className='orange' style={{ background: 'orange' }}></button>
                </div>
                <h3>Розміри гітари</h3>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>3/4</p>
                </div>
                <div className='filter-items'>
                    <input type="checkbox" name="chek" id="" />
                    <p>4/4</p>
                </div>
            </div>
            <div className='main-page'>
                <div className='main-page-items'>
                    {/* Відображення елементів, відсортованих за ціною */}
                    {all_products.sort(sortByPrice).map((item, i) => {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} price={item.price} />
                    })}
                </div>
            </div>
        </div>
    );
}

export default MainPage;
