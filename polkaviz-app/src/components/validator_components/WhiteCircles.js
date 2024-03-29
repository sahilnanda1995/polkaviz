import React from 'react'
import Circleandline from './Circleandline.js'

class WhiteCircles extends React.Component{
    render(){
        let angle= 2/3*Math.PI;
        let maxAngle = 2/3*Math.PI
        var arr =[];

            if(this.props.n>5)
            {
                angle = Math.PI/4
                maxAngle = 3/4*2*Math.PI
            }

            this.props.nominators.forEach((element,index) => {
                angle += maxAngle/(Number(this.props.n)+1)
                arr.push(
                    <Circleandline 
                            key={index}
                            x={this.props.r*Math.cos(angle)+this.props.x} 
                            y={this.props.r*Math.sin(angle)+this.props.y} 
                            x2={this.props.x}
                            y2={this.props.y}
                            text={element.who}
                            history={this.props.history}
                            totalinfo={this.props.totalinfo}
                            valinfo={this.props.valinfo}
                            />)
            });
            
            return(
                arr
            )
    }
}


export default WhiteCircles