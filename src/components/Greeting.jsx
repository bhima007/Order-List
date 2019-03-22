// import React from 'react';

// const Greeting = () => {

//     let greet = false;

//     return ( 
//         <div className="headerGreet">
//             {greet ? (<p>Hello, selamat berbelanja.</p>) : (<p>Hello, daftar kuy!</p>)}
//         </div>
//      );
// }

// export default Greeting;

import React, { Component } from 'react';

class Greeting extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greet: false
        }
    }
    render() {

        const {greet} = this.state;
        const greetLogin = <p>Hello, selamat berbelanja.</p>;
        const greetLoginYet = <p>Hello, daftar kuy!</p>

        return (
            <div className="headerGreet">
                {greet ? greetLogin : greetLoginYet}
            </div>
        );
    }
}

export default Greeting;