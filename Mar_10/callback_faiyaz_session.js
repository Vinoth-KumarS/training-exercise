function loginUser(cb) {
    console.log("requested login user");
    setTimeout(() => {
        const response = { email: "faiyaz@gmail.com", password: "xyz" };
        console.log("user loggedIn");
        console.log(response)

        cb(response)

    }, 2000);

}

function getUserVideos(email, cb) {
    console.log("requested for videos");
    setTimeout(() => {
        console.log("got videos for user", email);
        const videos = ["one", "two", "three"];
        cb(videos);
    }, 3000);
}

loginUser(function cb() {

})
loginUser()
getUserVideos(loginUser(), callBack(videos))











// requested login user //instant
// after 2 sec
// user logged
// request for videos
// after 5 sec
// got videos for faiyaz@gmail
// ["one","two","three"]