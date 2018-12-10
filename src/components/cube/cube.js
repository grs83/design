import React from 'react';

// styles
import './styles.css';

const Cube = props => {
    const changeSide = (side) => {
        const cube = document.querySelector('.cube');
        const selectedClass = `cube-${side}-rotate`;
        
        const sideClasses = ['cube-front-rotate', 'cube-back-rotate', 'cube-top-rotate', 'cube-bottom-rotate', 'cube-left-rotate', 'cube-right-rotate'].filter(sideClass => sideClass !== selectedClass);
        
        sideClasses.forEach((sideClass) => {
            cube.classList.remove(sideClass);
        })
        
        cube.classList.add(selectedClass);
    }

    const cubeSubmit = () => {
        const cube = document.querySelector('.cube');
        cube.classList.add('cubeSubmit');
    }

    return (
        <div className="cube-container">
            <div className="cube">
                <div className="cube-bottom">
                    <h2>Bottom</h2>
                </div>

                <div className="cube-top">
                    <h2>Top</h2>
                    <button onClick={() => changeSide('left')}>Back</button>
                    <button onClick={() => cubeSubmit()}>Submit</button>
                </div>

                <div className="cube-left">
                    <h2>Left</h2>
                    <div>
                        <button onClick={() => changeSide('back')}>Back</button>
                        <button onClick={() => changeSide('top')}>Next</button>
                    </div>
                </div>

                <div className="cube-back">
                    <h2>Back</h2>
                    <div>
                        <button onClick={() => changeSide('right')}>Back</button>
                        <button onClick={() => changeSide('left')}>Next</button>
                    </div>
                </div>

                <div className="cube-right">
                    <h2>Right</h2>
                    <div>
                        <button onClick={() => changeSide('front')}>Back</button>
                        <button onClick={() => changeSide('back')}>Next</button>
                    </div>
                </div>

                <div className="cube-front">
                    <h2>Front</h2>
                    <button onClick={() => changeSide('right')}>Next</button>
                </div>
            </div>
        </div>
    )
}

export default Cube;