import React, { useContext } from 'react';
import { TopicContext } from '../context/TopicContext';
import { Link } from "react-router-dom"

const TopicComponent = () => {
    const { topics } = useContext(TopicContext);
    console.log(topics);
    return (
        <div>
            <div className="topics__header">
                <h2>Browse Topics</h2>
            </div>
            <ul className="topics__list">
                <li>
                    <Link href="/">All <span>{0}</span></Link>
                </li>
                {
                    topics.slice(0, 5).map((topic) => {
                        return (
                            <li key={topic._id}>
                                <Link href="">{topic.topic} <span>{topic.numberOfRooms}</span></Link>
                            </li>
                        )
                    })
                }
                {/* <li>
                    <a href="/">All <span>{{ topics.count }}</span></a>
                </li>
                {% for topic in topics %}
                <li>
                    <a href="{% url 'home' %}?q={{topic.name}}">{{ topic.name }} <span>{{ topic.room_set.all.count }}</span></a>
                </li>
                {% endfor %} */}

            </ul>
            <a className="btn btn--link" href="{% url 'topics' %}">
                More
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                    <title>chevron-down</title>
                    <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path>
                </svg>
            </a>
            {/* {% else %} */}
            {/* <div className="topics__header"> */}
            {/* <h2>Browse Topics</h2> */}
            {/* </div> */}
            {/* <ul className="topics__list"> */}
            {/* <li>
                    <a href="/">All <span>{{ room_count }}</span></a>
                </li>
                {% for topic in topics %}
                <li>
                    <a href="{% url 'user-profile' user.id  %}?q={{topic.name}}">{{ topic.name }} <span>{{ topic.room_set.all.count }}</span></a>
                </li>
                {% endfor %} */}

            {/* </ul> */}
            {/* <a className="btn btn--link" href="{% url 'topics' %}"> */}
            {/* More */}
            {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"> */}
            {/* <title>chevron-down</title> */}
            {/* <path d="M16 21l-13-13h-3l16 16 16-16h-3l-13 13z"></path> */}
            {/* </svg> */}
            {/* </a> */}
            {/* {% endif %} */}
        </div>
    )
}

export default TopicComponent;