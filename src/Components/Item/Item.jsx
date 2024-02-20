import React from 'react'
import './Item.css'
import { Link } from 'react-router-dom';

const Item = (props) => {
    return (
        <Link to={`/product/${props.id}`} style={{ textDecoration: 'none', color: 'inherit'}}> <div onClick={window.scrollTo(0,0)} className='product'>
            <img src={props.image} alt="" />
            <p className='product-name'>{props.name}</p>
            <hr />
            <div className='product-bottom'>
                <p className='product-price'>{props.price}грн</p>
                <button className='product-basket'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                        <path d="M0.379883 1.60242H3.9889L11.3513 21.9054H25.643" stroke="white" stroke-width="1.5"/>
                        <path d="M23.9206 22.0569L23.4899 23.4205L23.0593 24.7842L23.9206 26.1478L25.2124 26.6024L26.6478 26.1478L27.5091 25.5418V24.1781V22.966L26.6478 22.0569H25.6431H23.9206ZM23.9206 22.0569H13.4421M12.0067 22.0569H10.7148L9.71004 22.966V24.7842L10.7148 26.1478H12.0067L13.4421 25.5418V24.1781V22.966V22.0569M12.0067 22.0569H13.4421M12.0067 22.0569L10.7148 17.8145M10.7148 17.8145H15.8823M10.7148 17.8145L7.84401 12.0569M7.84401 12.0569L6.12152 6.60236H14.8775M7.84401 12.0569L14.9493 12.109M28.5139 12.2084L26.6478 17.8145H21.2651M28.5139 12.2084L30.3799 6.60236H22.0545M28.5139 12.2084L22.0545 12.1611M22.0545 12.1611V6.60236M22.0545 12.1611L14.9493 12.109M22.0545 12.1611L21.2651 17.8145M22.0545 6.60236H14.8775M14.8775 6.60236L14.9493 12.109M14.9493 12.109L15.8823 17.8145M15.8823 17.8145H21.2651" stroke="white" stroke-width="1.5"/>
                    </svg>
                </button>
            </div>
        </div></Link>
    );
}
 
export default Item;