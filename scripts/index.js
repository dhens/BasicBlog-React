module.exports = {
    postTimestamp: () => {
        let today = new Date();
        let date = today.getDate() + '-' + (today.getMonth() + 1) + '-' + today.getFullYear();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        let dateTime = time + ' ' + date;
        return dateTime;
    },
    newPostLogMessage: (username, time, post_id, serverResponse) => {
        return console.log(
            `New blog post: 
        \ruser: ${username} 
        \rtime: ${time} 
        \rpost_id: ${post_id} 
        \r${JSON.stringify(serverResponse)}`);
    }
}