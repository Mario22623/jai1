const videoPlayer = document.getElementById('videoPlayer');
const audioPlayer = document.getElementById('audioPlayer');

// Play audio
audioPlayer.play();

// Play video when audio is loaded
audioPlayer.oncanplay = function() {
    videoPlayer.play();
};
