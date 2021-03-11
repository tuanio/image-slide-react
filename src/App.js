import './App.css'; 
import React from 'react'; 
import { Fetching } from './helper';

class Image extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            id: 1, 
            image: 1,
            width: 700,
            height: 500
        };
        this.handleClickNext = this.handleClickNext.bind(this); 
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGoTo = this.handleGoTo.bind(this);
    } 

    async componentDidMount() {
        let data = await Fetching(1);
        this.setState(state => ({ image: data }));
    }

    handleChange(e) {
        this.setState(state => ({
            id: parseInt(e.target.value)
        }));
    }

    async handleGoTo(e) {
        let data = await Fetching(this.state.id);
        this.setState(state => ({ image: data }));
    }

    async handleClickPrev(e) {
        if (this.state.id === 1) {
            return; 
        }
        this.setState(state => ({ id: state.id - 1 }));
        let data = await Fetching(this.state.id);
        this.setState(state => ({ image: data }));
    }

    async handleClickNext(e) {
        this.setState(state => ({ id: state.id + 1 }));
        let data = await Fetching(this.state.id);
        this.setState(state => ({ image: data }));
    }

    render() {
        return (
            <div id="container">
                <div id="nav">
                    <div>From Front-End Team with &hearts;</div>
                    <input type="text" id="txt" value={this.state.id} onChange={this.handleChange}/>
                    <button onClick={this.handleGoTo}>Get Image</button>
                </div>
                <img alt="This is from lorem picsum" id="img" src={this.state.image} />
                <div id="buttons">
                    <button className="btn btn1" onClick={this.handleClickPrev}>Previous</button>
                    <button className="btn btn2" onClick={this.handleClickNext}>Next</button>
                </div>
            </div>
        );
    }
}

function App() {
    return (
        <Image />
    );
}

export default App;
