import React from 'react';
import Comment from '../comment/index.js';

import './style.css';

class CommentsContainer extends React.Component {

    render() {
        return (
            <div className="divTable">
                <div className="divHeaders">
                    <div className="header1">name</div>
                    <div className="header2">name</div>
                    <div className="header3">name</div>
                    <div className="header4">name</div>
                </div>
                <div className="divTableBody">
                    <Comment />
                    <Comment />
                    <Comment />
                </div>
            </div>
        );
    }

}

export default CommentsContainer;