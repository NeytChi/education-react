import React, { Component } from 'react'

class EventBind extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            message : 'Hello'
        }

        /*{this.GoodBye = this.GoodBye.bind(this)}*/
    }

    GoodBye = () => {
        this.setState({
            message: "Goodbye!"
        })
    }
    
    render() {
        return (
            <div>
                <div>{this.state.message}</div>
               {/* <button onClick={this.GoodBye.bind(this)}>Click</button>*/}
               {/*<button onClick={() => this.GoodBye()}>Click</button>*/}
               <button onClick={this.GoodBye}>Click</button>
            </div>
        )
    }
}

export default EventBind
