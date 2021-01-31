import React from 'react';
import ReactDOM from 'react-dom';
class Krectik extends React.Component {
    render() {
        </button>
    }
}
function Square(props) {
    return (
        <button className="square"
                onclick={props.onClick}>
            {props.value}
        </button>
    );
}

export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            square: Array(9).fill(null),
            xIsNext: true
        };
    }


    handleClick(i) {
        const squares = this.state.squares.slice();
        squares[i] = this.state.xIsNeat ? 'X' : 'O';
        this.setState({squares: squares, xIsNext: !this.state.xIsNext});
    }

    renderSquare(i) {
        return (<square value={this.state.square[i]} onClick={() => this.handleClick(i)}/>
        );
    }
}

