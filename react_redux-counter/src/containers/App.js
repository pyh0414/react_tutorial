// import React, { Component } from 'react';
// import Counter from '../components/Counter';

// class App extends Component {
//     render() {
//         return (
//             <div>
//                     <Counter/>
//             </div>
//         );
//     }
// }

// export default App;

import React, { Component } from 'react';

import CounterContainer from '../containers/CounterContainer';
class App extends Component {
    render() {
        return (
            <div>
                <CounterContainer/>
            </div>
        );
    }
}

export default App;