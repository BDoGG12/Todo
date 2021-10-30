import React, { Component } from 'react';

var TodoTable = (props) => (
    <table>
        <tbody>
            <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Done?</th>
            </tr>
            {props.data.map(item => <tr>
                <td>{item.name}</td>
                <td>{item.desc}</td>
                <td>{item.isComplete}</td>
            </tr>)}
            <tr>
                <td>{props.name}</td>
                <td>{props.desc}</td>
                <td>{props.isComplete}</td>
            </tr>
        </tbody>
    </table>
);

export default TodoTable;