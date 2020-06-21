import React from "react";

const Comment = (props) => {
    return (<div className="ui comments">

        <div className="comment">
            <a className="avatar">
                <img alt="avatar" />
            </a>
            <div className="content">
                <a className="author">{props.name}</a>
                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>
                <div className="text">
                    {props.content}
                </div>
                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    </div>);
};
export default Comment;