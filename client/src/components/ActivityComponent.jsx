import React from 'react';
import { Link } from 'react-router-dom';

const ActivityComponent = () => {
    return (
        <>
            <div className="activities__header">
                <h2>Recent Activities</h2>
            </div>
            
            <div className="activities__box">
                <div className="activities__boxHeader roomListRoom__header">
                    <Link to={''} className="roomListRoom__author">
                        {/* {% if room_message.user.is_active %}
                        <div className="avatar avatar--small active">
                            <img src="{{room_message.user.avatar.url}}" />
                        </div>
                        {% else %} */}
                        <div className="avatar avatar--small">
                            <img src="{{room_message.user.avatar.url}}" />
                        </div>
                        {/* <p>
                            @{{ room_message.user.username }}
                            <span>{{ room_message.created | timesince }} ago</span>
                        </p> */}
                    </Link>
                    {/* {% if request.user == room_message.user %} */}
                    <div className="roomListRoom__actions">
                        {/* <Link href="{% url 'delete-message' room_message.id %}"> */}
                        <Link to={''}>
                            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                <title>remove</title>
                                <path
                                    d="M27.314 6.019l-1.333-1.333-9.98 9.981-9.981-9.981-1.333 1.333 9.981 9.981-9.981 9.98 1.333 1.333 9.981-9.98 9.98 9.98 1.333-1.333-9.98-9.98 9.98-9.981z"
                                ></path>
                            </svg>
                        </Link>
                    </div>
                    {/* {% endif %} */}
                </div>
                <div className="activities__boxContent">
                    {/* <p>replied to post “<Link href="{% url 'room' room_message.room.id %}">{{ room_message.room }}</Link>”</p> */}
                    <p>replied to post “<Link to={""}></Link>”</p>
                    <div className="activities__boxRoomContent">
                        {/* {{ room_message.body }} */}
                    </div>
                </div>
            </div>
        </>

    )
}

export default ActivityComponent;