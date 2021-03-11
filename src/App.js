import './App.css'; 
/* từ đây là phần code */ 
import React from 'react'; 
import { Fetching } from './helper.js';

class Image extends React.Component { 
    constructor(props) { 
        super(props); 
        this.state = { 
            id: 1, 
            image: 1,
            width: 700,
            height: 500
        };

        let url = `https://picsum.photos/id/${this.state.id}/${this.state.width}/${this.state.height}`;
        (async () => {
            let res = await fetch(url);
            let blob = await res.blob();
            console.log(blob);
            let krl = URL.createObjectURL(blob);
            this.setState(state => ({
                image: krl
            }))
        })();
        this.handleClickNext = this.handleClickNext.bind(this); 
        this.handleClickPrev = this.handleClickPrev.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleGoTo = this.handleGoTo.bind(this);
    } 

    handleChange(e) {
        this.setState(state => ({
            id: parseInt(e.target.value)
        }));
    }

    handleGoTo(e) {
        let url = `https://picsum.photos/id/${this.state.id}/${this.state.width}/${this.state.height}`;
        (async () => {
            let res = await fetch(url);
            let blob = await res.blob();
            console.log(blob);
            let krl = URL.createObjectURL(blob);
            this.setState(state => ({
                image: krl
            }))
        })();

    }

    handleClickPrev(e) {
        if (this.state.id === 1) {
            return; 
        }
        this.setState(state => ({ 
            id: this.state.id - 1 
        })) 
        /* 
         * -> text
         * -> json 
         * -> blob 
         *
         * */

        let url = `https://picsum.photos/id/${this.state.id}/${this.state.width}/${this.state.height}`;
        (async () => {
            let res = await fetch(url);
            let blob = await res.blob();
            console.log(blob);
            let krl = URL.createObjectURL(blob);
            this.setState(state => ({
                image: krl
            }))
        })();

    }

    handleClickNext(e) {
        this.setState(state => ({
            id: this.state.id + 1
        }))
        /*
         * -> text
         * -> json 
         * -> blob
         * */

        let url = `https://picsum.photos/id/${this.state.id}/${this.state.width}/${this.state.height}`;
        (async () => {
            let res = await fetch(url);
            let blob = await res.blob();
            console.log(blob);
            let krl = URL.createObjectURL(blob);
            this.setState(state => ({
                image: krl
            }))
        })();
    }

    render() {
        return (
            <div id="container">
                <div id="nav">
                    <div>From Front-End Team with &hearts;</div>
                    <input type="text" id="txt" value={this.state.id} onChange={this.handleChange}/>
                    <button onClick={this.handleGoTo}>Get Image</button>
                </div>
                <img alt="this is a image from lorem picsum" id="img" src={this.state.image} />
                <div id="buttons">
                    <button className="btn btn1" onClick={this.handleClickPrev}>Previous</button>
                    <button className="btn btn2" onClick={this.handleClickNext}>Next</button>
                </div>
            </div>
        );
    }
}
/* đến đây nè */

function App() {
    return (
        <Image />
    );
}

export default App;
