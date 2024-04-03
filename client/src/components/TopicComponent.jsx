import React, { useContext } from 'react';
import { TopicContext } from '../context/TopicContext';
import { Link } from "react-router-dom"
import { RoomContext } from '../context/RoomContext';

const TopicComponent = () => {
    const { topics } = useContext(TopicContext);
    const { rooms } = useContext(RoomContext);
    return (
        <div>
            <div className="topics__header">
                <h2>Browse Topics</h2>
            </div>
            <ul className="topics__list">
                <li>
                    <Link>All <span>{rooms.length}</span></Link>
                </li>
                {
                    topics.slice(0, 5).map((topic) => {
                        return (
                            <li key={topic._id}>
                                <Link >{topic.topic} <span>{topic.numberOfRooms}</span></Link>
                            </li>
                        )
                    })
                }
            </ul>
            <Link className="btn btn--link" to='/topics'>
                More
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>chevron-down</title>
                    <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
                </svg>
            </Link>
        </div>
    )
}

export default TopicComponent;