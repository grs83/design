import React from 'react';

const LoaderHOC = WrappedComponent => {
    return (props) => {
        return (
            props.data.length > 0 ? (
                <WrappedComponent {...props} /> 
            ) : (
                <h2 style={{color: 'white'}}>
                    Loading...
                </h2> 
            )
        )
    }
}

export default LoaderHOC