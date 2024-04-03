import React from 'react';
import { Link } from 'react-router-dom';

const ParticipantsList = ({ participants }) => {
    return (
        <div className="participants__list scroll">
            {
                participants?.map((participant) => {
                    return (
                        <Link href="{% url 'user-profile' participant.id %}" className="participant" key={participant._id}>
                            <div className={`avatar avatar--small ${participant.status === "Online" ? "active" : ''}`}>
                                {
                                    participant?.avatar ?
                                        <img src={`http://localhost:7000/${participant?.avatar}`} />
                                        :
                                        <img src={Avatar} />

                                }
                            </div>
                            <p>
                                {participant.name}
                                <span>@{participant.username}</span>
                            </p>
                        </Link>
                    )
                })
            }

        </div>
    )
}

export default ParticipantsList;