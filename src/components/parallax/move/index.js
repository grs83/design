import React from 'react';

// Styles 
import './styles.css';

const ParallaxMove = props => {

    return (
        <div className='parallax-move-wrapper'>
            <div className='parallax-move freeway flex-column'>
                { props.children }
            </div>
        </div>
    )
}

export default ParallaxMove;