import React from 'react';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            data: ''
        }
    }
    componentDidMount() {
        fetch(`http://localhost:3000/tilesData`).then(function(response){
            return response.json();
        }).then(function(data){
            console.log(data);
        })
        .catch(function(err){
            console.log('An Error Occured:', err);
        })
    }
    render() {
        return (
            <div>
                {/*<Search />
                <Items />*/}
            </div>
        )
    }
}
export default App;