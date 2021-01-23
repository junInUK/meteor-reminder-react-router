import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';

const TaskItem = (props) => {

    const showReminder = (evt,id, title) => {
        // console.log(evt.target.value);
        console.log("id:" + id + " title:"+title);
//        this.props.history.push('/reminders');
    }

    return (
        <>
        {/* children was the item between <Comment></Comment> is CommentList */}
        {/* <li><a href={this.props.url}>{this.props.children}</a></li> */}
        <ListGroup.Item key={props.id} action onClick={(evt) => showReminder(evt,props.id, props.children)}>
           <a href={"/reminders/"+props.id}>{props.children}</a>
        </ListGroup.Item>
        </>
    )

} 

export default withRouter(TaskItem);