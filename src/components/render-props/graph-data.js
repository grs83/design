import { Component } from 'react';

// Functions
import weatherData from '../../utl-functions/weather-api';

export default class GraphData extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        weatherData((err, data) => {
            if (err) console.error(err);
            
            else {
                this.setState({ data })
            }
        })
    }

    render() {
        return this.props.children({
            data: this.state.data
        })
    }
}