import React, { useEffect, useState } from 'react'

function Image(props) {
    const {id, title, image} = props;

    const imgStyle = {
        width: '250px'
    }
    const divStyle = {
        width: '350px',
        float: 'left'
    }
    return (
        <div>      
            <div style={divStyle}>
                <h3>No : {id}</h3>
                <p>{title}</p>
                <img style={imgStyle} src={image} alt="" />
            </div>
        </div>
    )
}

export default Image;