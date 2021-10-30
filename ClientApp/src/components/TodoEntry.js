import React, { Component } from 'react';
import TodoItem from './TodoItem';


class TodoEntry extends Component {
    constructor(props) {
        super(props);

        this.state = {
            nameEntry: '',
            descEntry: '',
            isDone: false,
            data = []
        };

        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleDescChange = this.handleDescChange.bind(this);
        this.handleIsDoneChange = this.handleIsDoneChange.bind(this);
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
        this.state.data.push({
            name: this.state.nameEntry,
            desc: this.state.descEntry
        });
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
                <input type="text" value={this.state.nameEntry} />
                Description:
                <input type="text" value={this.state.descEntry} />
                    </label>
                    <input type="submit" value="Add" />
                </form>
                <table>
                    <TodoItem />
                </table>
            </div>
        )

    }
}

export default TodoEntry;