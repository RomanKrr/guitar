import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContex';



function Navbar() {
    let [crossed, setCrossed] = useState(false);  
    let [cartOpen, setOpen] = useState(false);  
    const [menu, setMenu] = useState("shop");
    const [cartCount, setCartCount] = useState(0);
    const { cartItems } = useContext(ShopContext);

    useEffect(() => {
        // Отримати загальну кількість товарів у кошику
        let totalCount = Object.values(cartItems).reduce((acc, curr) => acc + curr, 0);
        setCartCount(totalCount);
    }, [cartItems]);
    const iconStyle = {
        color: 'orange', // Встановлюємо оранжевий колір
        textDecoration: 'none', // Позбавляємося від декорації посилання
      };
  return (
    <div className='navbar'>
        <div className={`header-burger ${crossed ? 'active' : ''}`}onClick={() => {setCrossed(!crossed);}}>
            <div className='bar'></div>
            <div className='bar'></div>
            <div className='bar'></div>
        </div>
        <div className={`category ${crossed ? 'active' : ''}`}>
            <li onClick={() =>{setMenu("shop")}}><Link style={{textDecoration: 'none', color: 'white'}} to='/'>Головна</Link></li>
            <li onClick={() =>{setMenu("acoustic")}}><Link style={{textDecoration: 'none'}} to='/acoustic'>Акустичні гітари</Link></li>
            <li onClick={() =>{setMenu("classic")}}><Link style={{textDecoration: 'none'}} to='/classic'>Класичні гітари</Link></li>
            <li onClick={() =>{setMenu("electric")}}><Link style={{textDecoration: 'none'}} to='/electric'>Електрогітари</Link></li>
            <li onClick={() =>{setMenu("bass")}}><Link style={{textDecoration: 'none'}} to='/bass'>Бас-гітари</Link></li>
            <li onClick={() =>{setMenu("accessories")}}><Link style={{textDecoration: 'none'}} to='/accessories'>Аксесуари для гітар</Link></li>

            <div className={`category-burger ${crossed ? 'active' : ''}`} onClick={() => { setCrossed(!crossed); }}>
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div className='category-logo'>Musical</div>
        </div>
        <div className='header-logo'>
            <svg className='l' xmlns="http://www.w3.org/2000/svg" width="141" height="23" viewBox="0 0 141 23" fill="none">
                <path d="M140.053 21.6024C139.312 21.4274 138.568 21.2558 137.823 21.0873M62.075 13.0535C46.5372 12.8339 33.4624 13.4059 25.3604 14.1061L62.075 13.0535ZM62.075 13.0535C84.6867 13.3732 112.515 15.3694 137.823 21.0873M1.37256 1.36249L137.823 21.0873" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
                Musical
            <svg className='r' xmlns="http://www.w3.org/2000/svg" width="141" height="23" viewBox="0 0 141 23" fill="none">
                <path d="M0.866516 21.7916C1.60744 21.6167 2.35074 21.445 3.09624 21.2766M78.8444 13.2428C94.3823 13.0232 107.457 13.5952 115.559 14.2954L78.8444 13.2428ZM78.8444 13.2428C56.2326 13.5624 28.4046 15.5587 3.09624 21.2766M139.547 1.55176L3.09624 21.2766" stroke="white" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
        </div>
                {/* <div className='header-button'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="38" height="34" viewBox="0 0 32 28" fill="none">
                        <path d="M0.379883 1.60242H3.9889L11.3513 21.9054H25.643" stroke="white" stroke-width="1.5"/>
                        <path d="M23.9206 22.0569L23.4899 23.4205L23.0593 24.7842L23.9206 26.1478L25.2124 26.6024L26.6478 26.1478L27.5091 25.5418V24.1781V22.966L26.6478 22.0569H25.6431H23.9206ZM23.9206 22.0569H13.4421M12.0067 22.0569H10.7148L9.71004 22.966V24.7842L10.7148 26.1478H12.0067L13.4421 25.5418V24.1781V22.966V22.0569M12.0067 22.0569H13.4421M12.0067 22.0569L10.7148 17.8145M10.7148 17.8145H15.8823M10.7148 17.8145L7.84401 12.0569M7.84401 12.0569L6.12152 6.60236H14.8775M7.84401 12.0569L14.9493 12.109M28.5139 12.2084L26.6478 17.8145H21.2651M28.5139 12.2084L30.3799 6.60236H22.0545M28.5139 12.2084L22.0545 12.1611M22.0545 12.1611V6.60236M22.0545 12.1611L14.9493 12.109M22.0545 12.1611L21.2651 17.8145M22.0545 6.60236H14.8775M14.8775 6.60236L14.9493 12.109M14.9493 12.109L15.8823 17.8145M15.8823 17.8145H21.2651" stroke="white" stroke-width="1.5"/>
                    </svg>
                    
                </div> */}
        <div className="header-container-basket-btn">
            <Link style={iconStyle} to='/cart'><FaShoppingCart onClick={window.scrollTo(0,0)} className={`header-basket ${cartOpen && 'active'}`}/></Link>
            <div className='shop-count'>{cartCount}</div>
            
            {/* {cartOpen && (
                    <div className='basket'>
                    <h1>Корзина</h1>
                    <h2>У кошику немає товарів</h2>
                    <p onClick={() => setOpen(cartOpen = false)}>перейти в каталог</p>
                    <hr />
                </div>
            )} */}
        </div>
    </div>
  )
}

export default Navbar