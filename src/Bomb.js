import React from 'react'; 

class Bomb extends React.Component{

    constructor(props){
        super()
  
        this.state = {
            secondsLeft: props.initialCount
           
        }
    }


    render(){
        let message; 
        if (this.state.secondsLeft === 0) {
            message = <h1>Boom!</h1>
          } else {
            message = <h1>{this.state.secondsLeft} seconds left before I go boom!</h1>
          }
          
          return (
            <div>
              
              {message}
            </div>
          );
    }



}

export default Bomb; 
