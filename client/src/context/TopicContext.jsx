import { createContext, useEffect, useState } from "react";
import { getAllTopics } from "../api/topic.api";


export const TopicContext = createContext({
    topics: [],
    setTopics: () => { }
});


export const TopicProvider = ({ children }) => {
    const [topics, setTopics] = useState([]);

    const setTopicsFunction = async () => {
        await getAllTopics()
            .then(data => setTopics(data.topics))
            .catch(err => console.log(err));
    }

    useEffect(() => {
        setTopicsFunction();
    }, []);

    const value = { topics, setTopics };
    return (
        <TopicContext.Provider value={value}>
            {children}
        </TopicContext.Provider>
    )
}