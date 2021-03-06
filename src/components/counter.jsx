import React, {Component} from 'react';
var product;

class Counter extends Component {
    // constructor(){
    //     super();
    //     this.handleIncrement = this.handleIncrement.bind(this);
    // } 
    renderTags(){
        if (this.state.tags.length === 0) return <p>no tags</p>;

        return <ul> {this.state.tags.map(tag => <li key = {tag}> {tag}</li>)} </ul>
    }
    // handleIncrement = product => {
    //     this.setState({value:this.state.value + 1 }); //"setState" tells react that this component's state is going to change. react will call eventually the render method (unknown timing) and it will return the new DOM
    // } Deleted because we want the parent, not this controlled element, in charge of the state
    render() {     
        return (
        <div>
            <span className = {this.getBadgeClasses()}> {this.formatCount()}</span>
            <button 
                onClick={() => this.props.onIncrement(this.props.counter)}
                className = "btn btn-secondary btn-sm"
            >Increment </button>
            {/* {this.state.tags.length === 0 && 'please make new tag'}
            {this.renderTags() } */}
            <button 
            onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm m-2"
            >
                Delete
            </button>

        </div>);
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
        formatCount(){
            const { value: count } = this.props.counter;
        return count === 0 ? "0" : count
        }
}

export default Counter;