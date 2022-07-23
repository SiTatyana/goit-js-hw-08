// import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
  const iframe = document.querySelector("#vimeo-player");
const player = new Vimeo.Player(iframe);
  
const onPlay = function(data) {
    let time = data.seconds;
    localStorage.setItem("videoplayer-current-time", time);
};

let currentTime = localStorage.getItem("videoplayer-current-time")

player.on("timeupdate", throttle(onPlay, 1000));
       player.setCurrentTime(currentTime).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
   