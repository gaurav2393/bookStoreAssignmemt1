import React from 'react';
import ReactDOM from 'react-dom';
import '../css/styles.css';
import App from './containers/app'

class Main extends React.Component {
    render(){
        return(
            <App />
        )
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));