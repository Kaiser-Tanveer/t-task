export const setAuthToken = user => {
    // get current user's email
    const currUser = {
        email: user.email,
    };

    // Posting token 
    fetch('https://t-task-server.vercel.app/jwt', {
        method: "POST",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(currUser)
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            // setup token on localStorage 
            localStorage.setItem("my-token", data.token);
        });
};