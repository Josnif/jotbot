'use client';
import React, { useState, useEffect } from 'react';


const Carousel = ({ controls=false, autoplay=false, speed=3000, slidesToShow = 1, children }) => {   
    const autoplayInterval = speed;

    const [activeIndex, setActiveIndex] = useState(0);
    const [total, setTotal] = useState(0);
    const [isSlideshow, setIsSlideshow] = useState(false);

    const [visibleChildren, setVisibleChildren] = useState([])

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? total - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === (total - 1) ? 0 : prevIndex + 1));
    }

    const toggleSlideshow = () => {
        setIsSlideshow((prevValue) => !prevValue);
    };      

    useEffect(() => { 
        setTotal(React.Children.count(children)); 
        if (autoplay && isSlideshow) {
            const autoPlayTimer = setInterval(() => {
                handleNext();
            }, autoplayInterval)
    
            return () =>  {
                clearInterval(autoPlayTimer);
            }
        } 
    }, [children, autoplayInterval]);

    return (
        <div className={`carousel ${isSlideshow ? 'slideshow' : ''}`}>
            <div className="slides flex gap-8 items-center justify-center" style={{'--active-index': activeIndex}}>
                {React.Children.map(children, (child, index) => {
                    const isActive = index >= activeIndex && index < activeIndex + slidesToShow;
                    return (
                        <div key={index} className={`slide ${isActive ? 'active'  :  isSlideshow ? 'active' : ''} ${index}`}>
                            {child}
                        </div>
                    );
                })}
            </div>
            {controls ? (
                <div className="controls">
                    <button className='bg-transparent text-primary' onClick={handlePrevious}>Previous</button>
                    <div className="dots">
                    {React.Children.map(children, (_, index) => {
                        if (index <= total - slidesToShow) {
                            return (
                                <div
                                    key={index}
                                    className={`dot ${index === activeIndex ? 'active' : ''}`}
                                    onClick={() => handleClick(index)}
                                />
                            )
                        }
                    }
                    )}
                    </div>
                    <button className='bg-transparent text-primary' onClick={handleNext}>Next</button>
                    <button className='bg-transparent text-primary' onClick={toggleSlideshow}>{isSlideshow ? 'Stop' : 'Start'} Slideshow</button>
                </div>
            ) : null}
        </div>
    )
}

export default Carousel