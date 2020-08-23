// import React, { Component } from 'react'

// class Destructuring extends Component {
//     render() {
//         const { name, country } = this.props;
//         return (
//             <div>
//                 <h1>I'm {name}, from {country}</h1>
//             </div>
//         )
//     }
// }

// export default Destructuring

import React from 'react'

function Destructuring({name, country}) {
    //const {name, country} = props
    return (
        <div>
            <h1>I'm {name}, from {country}.</h1>
        </div>
    )
}

export default Destructuring

