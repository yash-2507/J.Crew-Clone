import React, { Component } from 'react'
import '../App.css'

export class DetailsThumb extends Component {
    render() {
        const {images, tab, myRef} = this.props;
        return (
            <div className="thumb" ref={myRef}>
                {
                images.map((img, index) =>(
                    <img src={img} alt="small-img" key={index} 
                    onClick={() => tab(index)}
                   className="small-img" />
                ))
                }
            </div>
        )
    }
}

export default DetailsThumb
