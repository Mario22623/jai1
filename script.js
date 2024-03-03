const videoElement = document.getElementById('video');
const audioTracksSelect = document.getElementById('audio-tracks');
const switchAudioButton = document.getElementById('switch-audio');

// Fetch and populate audio tracks
videoElement.addEventListener('loadedmetadata', () => {
    const audioTracks = videoElement.audioTracks;

    for (let i = 0; i < audioTracks.length; i++) {
        const track = audioTracks[i];
        const option = document.createElement('option');
        option.value = i; 
        option.text = `Track ${i + 1} (${track.label})`;
        audioTracksSelect.appendChild(option);
    }
});

// Switch audio track
switchAudioButton.addEventListener('click', () => {
    const selectedIndex = audioTracksSelect.selectedIndex;
    if (selectedIndex >= 0) {
        videoElement.audioTracks[selectedIndex].enabled = true;
    }
});
