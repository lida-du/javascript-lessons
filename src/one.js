import React from 'react';
export class One extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '',
        }
    };

    hi(){
        alert(this.state.text);
    }
    render(){
        return(
            <div>
                <button onClick={() => {this.hi()}}>Нажми на меня </button>
                <input type="text"
                    value={this.state.text}
                       onChange={(e) => this.setState({
                           text: e.target.value,
                       })}
                />
                <input type="text"
                    value={this.state.text}
                />

            </div>

        )
    }
}