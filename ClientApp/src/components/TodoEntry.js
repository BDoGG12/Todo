import React, { Component } from 'react';
import TodoTable from './TodoTable';


class TodoEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameEntry: '',
            descEntry: '',
            isDone: false,
            data : []
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleIsDoneChange = this.handleIsDoneChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log(this.state);
    }

    handleNameChange(e) {
        this.setState({ nameEntry: e.target.value });
    }

    handleDescChange(e) {
        this.setState({ descEntry: e.target.value });
    }

    handleIsDoneChange(e) {
        this.setState({ isDone: !this.state.isDone });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log("Clicked");
        this.state.data.push({
            name: this.state.nameEntry,
            description: this.state.descEntry,
            isDone: !this.state.isDone
        });
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <p>
                    Here are your Todo items for the day:
                    </p>
                <form onSubmit={this.handleSubmit} >
                    <label>
                        Name:
                <input type="text" placeholder="Enter Todo name..." value={this.state.nameEntry} onChange={this.handleNameChange} />
                Description:
                <input type="text" placeholder="Enter description..." value={this.state.descEntry} onChange={this.handleDescChange} />
                    </label>
                    <input type="submit" value="Add"/>
                </form>
                <TodoTable data={this.state.data} />
            </div>
        )

    }
}

export default TodoEntry;