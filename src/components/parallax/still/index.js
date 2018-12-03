import React from 'react';

// Styles 
import './styles.css';

const ParallaxStill = props => {

    return (
        <div className={`parallax-still ${props.img} flex-column`}>
            { props.children }
        </div>
    )
}

export default ParallaxStill;