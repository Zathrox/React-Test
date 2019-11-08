import React from 'react';
import './App.css';


class ColorChanger extends React.Component {
    /* This is where we setup the array and save the state for the hexbot data we'll be receiveing */
    constructor() {
        super();
        this.state = {
            colors: [],
        };
    }

    componentDidMount() {
        /* This lifecycle events calls and fetches data from the API: Hexbot on initilisation and stores it in an array,
            this was setup like this in order to bring in multiply hex's if needed but I managed to create
            the functionality I needed with just one bit of data and continuously refresh the hexbox for new hex's */
        fetch('https://api.noopschallenge.com/hexbot')
        .then(results => {
            return results.json();
        }).then(data => {
            let colors = data.colors.map((col) => {
                return(
                    col.value
                )
            })
            this.setState({colors: colors});
            console.log("Hexbox beaming in some hex's:", this.state.colors);
        })
    }

    /* This function is called when you press the change colour button and simply recalls a fresh hex from the API   */
    changeColor = () => {
        this.componentDidMount();
    }

    render() {
        return (
            <div>
                {/* Simply page form that has two buttons in it, with the heading and one button changing color
                    with every press - I used inline styling to make use of the state-data for the button  */}
                <h1 style={{color: this.state.colors}}>Hexbox</h1>
                <p>
                    This is a hexcode: {this.state.colors[0]}.
                </p>
            
                <button
                    type="button"
                    className="button button1"
                    onClick={this.changeColor}
                    >Change color
                </button>
                <div>
                <button className="button" style={{backgroundColor: this.state.colors}}
                    type="button"
                    >Mystical Button
                </button>
                </div>
            </div>

        )
    };
}


export default ColorChanger;

