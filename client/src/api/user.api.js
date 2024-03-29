export const register = (name, username, email, password) => {
    let user = { name, username, email, password };
    return fetch('/api/auth/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export const login = (email, password) => {
    let user = { email, password };
    return fetch('/api/auth/login', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => response.json())
        .catch(err => console.log(err))
}

export const logout = () => {
    return fetch('/api/auth/logout')
        .then(response => response.json())
        .catch(error => console.log(err));
}

export const getCurrentUser = () => {
    return fetch('/api/user/current-user')
        .then(response => response.json())
        .catch(error => console.log(err));
}