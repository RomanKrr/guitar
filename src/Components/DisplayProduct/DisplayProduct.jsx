import React, { useState, useEffect, useContext } from 'react'
import './DisplayProduct.css'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { ShopContext } from '../../Context/ShopContex';


const DisplayProduct = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [visibleDescription, setVisibleDescription] = useState(true);
    const [visibleComments, setVisibleComments] = useState(false);
    const [isImageZoomed, setIsImageZoomed] = useState(false);
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const toggleImageZoom = () => {
        setIsImageZoomed(!isImageZoomed);
    };


    const showDescription = () => {
        setVisibleDescription(true);
        setVisibleComments(false);
    };

    const showComments = () => {
        setVisibleDescription(false);
        setVisibleComments(true);
    };

    // const images = [product.image, product.image, product.image2];
    // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    // const nextSlide = () => {
    //   const newIndex = (currentImageIndex + 1) % images.length;
    //   setCurrentImageIndex(newIndex);
    // };
  
    // const prevSlide = () => {
    //   const newIndex = (currentImageIndex - 1 + images.length) % images.length;
    //   setCurrentImageIndex(newIndex);
    // };
    const [slideIndex, setSlideIndex] = useState(1);
    

    const nextSlide = () => {
        showSlides(slideIndex + 1);
    };

    const previousSlide = () => {
        showSlides(slideIndex - 1);
    };

    const showSlides = (n) => {
        const slides = document.getElementsByClassName("slider-product-item");
        
        if (n > slides.length) {
            setSlideIndex(1);
        } else if (n < 1) {
            setSlideIndex(slides.length);
        } else {
            setSlideIndex(n);
        }
        
        for (let i = 0; i < slides.length; i++) {
            if (i + 1 === slideIndex) {
                if (!slides[i].classList.contains('active')) {
                    slides[i].classList.add('active');
                }
            } else {
                slides[i].classList.remove('active');
            }
        }
    };

  return (
    <div className='display-product'>
      {/* <div style={{ height: '100px' }}></div> */}

        <div className="display-product-main">
            {/* <div className="product-images">
                <img className='main-image' src={product.image} alt="" />
                <div className="thumbnail-images">
                        <img src={product.image1} alt="" />
                        <img src={product.image2} alt="" />
                        <img src={product.image3} alt="" />
                </div>
            </div> */}
            <div className="product-images-slider">
                <div className="slider-container">
                    <div className={`slider-product-item ${slideIndex === 1 ? 'active' : ''}`}>
                        <img src={product.image} alt="" className={`product-image ${isImageZoomed ? 'zoomed' : ''}`} onClick={toggleImageZoom} />
                    </div>
                    <div className={`slider-product-item ${slideIndex === 2 ? 'active' : ''}`}>
                        <img src={product.image1} alt=""  className={`product-image ${isImageZoomed ? 'zoomed' : ''}`} onClick={toggleImageZoom} />
                    </div>
                    <div className={`slider-product-item ${slideIndex === 3 ? 'active' : ''}`}>
                        <img src={product.image2} alt="" className={`product-image ${isImageZoomed ? 'zoomed' : ''}`} onClick={toggleImageZoom} />
                    </div>
                </div>
                <a className="previous" onClick={previousSlide}>&#10094;</a>
                <a className="next" onClick={nextSlide}>&#10095;</a>
            </div>
            <div className="product-main-info">
                <h1>{product.name}</h1>
                {/* <hr /> */}
                <div className="product-main-characteristics">
                    <dl class="product-main-characteristics-item">
                        <div>
                            <dt>Кількість струн</dt>
                            <dd>{product.strings}</dd>
                        </div>  

                        <div>
                            <dt>Колір</dt>
                            <dd>{product.color}</dd>
                        </div>

                        <div>
                            <dt>Розмір гітари</dt>
                            <dd>{product.size}</dd>
                        </div>

                        <div>
                            <dt>Верхня дека</dt>
                            <dd>{product.topDeck}</dd>
                        </div>

                        <div>
                            <dt>Нижня дека</dt>
                            <dd>{product.backDeck}</dd>
                        </div>

                        <div>
                            <dt>Гриф</dt>
                            <dd>{product.neck}</dd>
                        </div>

                        <div>
                            <dt>Виробник</dt>
                            <dd>{product.manufacturer}</dd>
                        </div>
                        <p>Детальніше про характеристи <FaArrowRightLong /></p>
                    </dl>
                </div>
            </div>
        </div>
        <div className="display-product-navigation">
            <div className="display-product-additional">
            <h2 onClick={showDescription} className={!visibleDescription ? 'active' : ''}>Опис</h2>
            <h2 onClick={showComments} className={visibleComments ? 'active' : ''}>Відгуки</h2>
            </div>
            <div className="display-product-actions">
                <h2>{product.price}грн</h2>
                <button onClick={()=>{addToCart(product.id)}} className='product-basket'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="28" viewBox="0 0 32 28" fill="none">
                            <path d="M0.379883 1.60242H3.9889L11.3513 21.9054H25.643" stroke="white" stroke-width="1.5"/>
                            <path d="M23.9206 22.0569L23.4899 23.4205L23.0593 24.7842L23.9206 26.1478L25.2124 26.6024L26.6478 26.1478L27.5091 25.5418V24.1781V22.966L26.6478 22.0569H25.6431H23.9206ZM23.9206 22.0569H13.4421M12.0067 22.0569H10.7148L9.71004 22.966V24.7842L10.7148 26.1478H12.0067L13.4421 25.5418V24.1781V22.966V22.0569M12.0067 22.0569H13.4421M12.0067 22.0569L10.7148 17.8145M10.7148 17.8145H15.8823M10.7148 17.8145L7.84401 12.0569M7.84401 12.0569L6.12152 6.60236H14.8775M7.84401 12.0569L14.9493 12.109M28.5139 12.2084L26.6478 17.8145H21.2651M28.5139 12.2084L30.3799 6.60236H22.0545M28.5139 12.2084L22.0545 12.1611M22.0545 12.1611V6.60236M22.0545 12.1611L14.9493 12.109M22.0545 12.1611L21.2651 17.8145M22.0545 6.60236H14.8775M14.8775 6.60236L14.9493 12.109M14.9493 12.109L15.8823 17.8145M15.8823 17.8145H21.2651" stroke="white" stroke-width="1.5"/>
                        </svg>
                </button>
            </div>
        </div>
        <div className={`display-product-descr ${visibleDescription ? '' : 'hidden'}`}>{product.description}</div>
        <div className={`display-product-comments ${visibleComments ? '' : 'hidden'}`}>
                <div className="display-product-comments-items">
                    <h3>Оцініть товар</h3>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="display-product-comments-items">
                    <h3>Ім'я користувача</h3>
                    <input type="text" />
                </div>
                <div className="display-product-comments-items">
                    <h3>Додайте коментар</h3>
                    <input type="text" />
                </div>
                <button type='submit'>Відправити</button>
            </div>
        </div>
  )
}

export default DisplayProduct