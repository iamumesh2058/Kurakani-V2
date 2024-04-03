import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { TopicContext } from '../context/TopicContext';
import FormRow from '../components/FormRow';
import { getSingleRoom, updateRoom } from '../api/room.api';
import { toast } from 'react-toastify';

const UpdateRoom = () => {
    const navigate = useNavigate();
    const params = useParams();
    const [room, setRoom ]= useState([]);
    
    const { topics } = useContext(TopicContext);
    const [topic, setTopic] = useState("");
    const [roomName, setRoomName] = useState("");
    const [description, setDescription] = useState("");
    
    
    const getSingleRoomFunction = async () => {
        await getSingleRoom(params.id)
        .then(data => setRoom(data.room))
        .catch(err => console.log(err));
    }
    
    useEffect(() => {
        getSingleRoomFunction();
        setTopic(room?.topic?.topic || '');
        setRoomName(room?.roomName || '');
        setDescription(room?.description || '');
    }, [params]);
    
    console.log(room);

    const handleUpdateRoom = async (e) => {
        e.preventDefault();
        await updateRoom(params.id, topic, roomName, description)
            .then(data => {
                if (data.msg) {
                    toast.success(data.msg);
                    navigate(`/room/${params.id}`);
                    window.location.reload();
                }
                else if (data.err !== 'Authentication invalid') {
                    toast.error(data.err);
                }

                else{
                    toast.error("You are not allowed to perform this action");
                    navigate(-1);
                }
            })
            .catch((error) => {
                toast.error(error)
            })
    }

    return (
        <main className="create-room layout">
            <div className="container">
                <div className="layout__box">
                    <div className="layout__boxHeader">
                        <div className="layout__boxTitle">
                            <Link to={`/room/${params.id}`}>
                                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <title>arrow-left</title>
                                    <path
                                        d="M13.723 2.286l-13.723 13.714 13.719 13.714 1.616-1.611-10.96-10.96h27.625v-2.286h-27.625l10.965-10.965-1.616-1.607z">
                                    </path>
                                </svg>
                            </Link>
                            <h3>Update Study Room</h3>
                        </div>
                    </div>

                    <div className="layout__body">
                        <form className="form" action="" method="post">
                            <div className="form__group">
                                <label htmlFor="room_topic">Topic</label>
                                <input
                                    required
                                    type="text"
                                    name="topic"
                                    id="room_topic"
                                    list="topic-list"
                                    value={topic}
                                    onChange={(e) => setTopic(e.target.value)}
                                />
                                <datalist id="topic-list">
                                    <select id="room_topic">
                                        {
                                            topics?.map((topic) => {
                                                return (
                                                    <option key={topic._id} value={topic.topic}>{topic.topic}</option>
                                                )
                                            })
                                        }
                                    </select>
                                </datalist>
                            </div>

                            <FormRow
                                type="text"
                                labelText="room_name"
                                roomName="name"
                                text="Room Name"
                                defaultValue={roomName}
                                onChange={(e) => setRoomName(e.target.value)}
                            />

                            <FormRow
                                type="text"
                                labelText="room_about"
                                name="description"
                                text="About"
                                defaultValue={description}
                                onChange={(e) => setDescription(e.target.value)}
                            />

                            <div className="form__action">
                                <Link className="btn btn--dark" to={'/'}>Cancel</Link>
                                <button className="btn btn--main" type="submit" onClick={handleUpdateRoom}>Update Room</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default UpdateRoom;