import React, {Component} from 'react';
var product;

class Counter extends Component {
    state = {
        value: this.props.value,      
    };

    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // }
    
    renderTags(){
        if (this.state.tags.length === 0) return <p>no tags</p>;

        return <ul> {this.state.tags.map(tag => <li key = {tag}> {tag}</li>)} </ul>

    }

    handleIncrement = product => {
        console.log(product);
        this.setState({value:this.state.value + 1 }); //"setState" tells react that this component's state is going to change. react will call eventually the render method (unknown timing) and it will return the new DOM
    }
    
    render() {     
        console.log('props', this.props);
        
        return (
        <div>
            {this.props.children}
            <span className = {this.getBadgeClasses()}> {this.formatCount()}</span>
            <button onClick={() => this.handleIncrement(product)}
            className = "btn btn-secondary btn-sm">Increment </button>
            {/* {this.state.tags.length === 0 && 'please make new tag'}
            {this.renderTags() } */}
        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.value === 0) ? "warning" : "primary";
        return classes;
    }

        formatCount(){
            const { value: count } = this.state;

        return count === 0 ? "0" : count
        }
}

 
export default Counter;