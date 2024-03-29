export const getAllTopics = () => {
    return fetch('/api/topic/get-all-topics')
        .then(res => res.json())
        .catch(err => console.log(err))
}
