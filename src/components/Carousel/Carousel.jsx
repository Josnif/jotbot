'use client';
import React, { useState, useEffect } from 'react';


const Carousel = ({ controls=false, autoplay=false, speed=3000, slidesToShow = 1, children }) => {   
    const autoplayInterval = speed;

    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) => {
        setActiveIndex(index);
    };

    const handlePrevious = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? React.Children.count(children) - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === React.Children.count(children) ? 0 : prevIndex + 1));
    }

    useEffect(() => {   
        if (autoplay) {
            const autoPlayTimer = setInterval(() => {
                handleNext();
            }, autoplayInterval)
    
            return () =>  {
                clearInterval(autoPlayTimer);
            }
        } 
    }, [children, autoplayInterval]);

    const startIndex = activeIndex;
    const endIndex = startIndex + slidesToShow;

    const visibleChildren = React.Children.toArray(children).slice(startIndex, endIndex);

    return (
        <div className="carousel">
            <div className="slides flex gap-8 items-center justify-center">
                {visibleChildren.map((child, index) => {
                    const isActive = index >= activeIndex && index < activeIndex + slidesToShow;
                    return (
                        <div key={index} className={`slide ${isActive ? 'active' : ''}`}>
                        {child}
                        </div>
                    );
                })}
            </div>
            {controls ? (
                <div className="controls">
                    <button onClick={handlePrevious}>Previous</button>
                    <div className="dots">
                    {React.Children.map(children, (_, index) => (
                        <div
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => handleClick(index)}
                        />
                    ))}
                    </div>
                    <button onClick={handleNext}>Next</button>
                </div>
            ) : null}
        </div>
    )
}

export default Carousel