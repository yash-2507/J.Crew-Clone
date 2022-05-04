import React, { Component } from 'react'

export class Colors extends Component {
    render() {
        const {colors} = this.props;
        return (
            <div className="colors">
                {
                colors.map((color, index) =>(
                    <button style={{background: color,borderRadius:"50%"}} key={index}></button>
                ))
                }
            </div>
        )
    }
}

export default Colors
