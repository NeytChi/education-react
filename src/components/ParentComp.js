import React, { Component, PureComponent } from 'react'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'NeytChi'
        }
    }
    
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name : 'NeytChi'
            })
        }, 2000)
    }
    render() {
        console.log('*********************************Parent Component*******************************');
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name}/>
               {/*<RegComp name={this.state.name} />
               <PureComp name={this.state.name} />*/}
            </div>
        )
    }
}

export default ParentComp
