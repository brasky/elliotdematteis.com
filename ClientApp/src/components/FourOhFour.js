import React, { Component } from 'react';

export class FourOhFour extends Component {
    static displayName = FourOhFour.name;
    constructor(props) {
        super(props);
        this.state = {
            gif: "" };
    }
    componentDidMount() {
        this.getGif();
    }

    async getGif() {
        const response = await fetch('fourohfour');
        const data = await response.json();
        this.setState({ gif: data });
    }

    render() {
        let gif = this.state.gif;
        return (
            <div>
                <h1 className="text-center">404</h1>
                <img alt="A hopefully funny but random gif" className="mx-auto d-block" src={gif.gifUrl}/>
            </div>
        );
    }
}
