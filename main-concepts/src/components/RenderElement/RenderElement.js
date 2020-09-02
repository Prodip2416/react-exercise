import React from 'react';

const RenderElement = () => {
    function tick() {
        return <h3>It is {new Date().toLocaleTimeString()}</h3>;
    }
    return (
        <div>
            {tick()}
        </div>
    );
};

export default RenderElement;