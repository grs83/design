import React from 'react';

// Components
import Cube from './cube';

// styles
import './styles.css';

const CubeWrapper = props => {

    return (
        <div className="cube-wrapper">
            <Cube />
        </div>
    )
}

export default CubeWrapper;