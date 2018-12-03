import React from 'react';

// styles
import './styles.css';

const SubSection = props => {

    return (
        <div className='sub-section flex-row'>
            { props.children }
        </div>
    )
}

export default SubSection;