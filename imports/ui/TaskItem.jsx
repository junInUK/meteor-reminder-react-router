import React, {Component} from 'react';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskItem = (props) => {

    const showReminder = (evt) => {
        // console.log(evt.target.value);
        console.log(evt.target);
    }

    return (
        <>
        {/* children was the item between <Comment></Comment> is CommentList */}
        {/* <li><a href={this.props.url}>{this.props.children}</a></li> */}
        <ListGroup.Item action onClick={showReminder}>
           {props.children}
        </ListGroup.Item>
        </>
    )

} 

export default TaskItem;