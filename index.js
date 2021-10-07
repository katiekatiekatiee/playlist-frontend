const port = 'http://localhost:3000';
const playlistApi = new PlaylistApi(port);
const songApi = new SongApi(port);

const songForm = document.getElementById('song-form');

const titleInput = document.getElementById('song-title');
const artistInput= document.getElementById('song-artist');

const playlistInput = document.getElementById('playlist-id');
// const playlistForm = document.getElementById('playlist-form')

const dropDown = document.getElementById("playlist-dropdown");

songForm.addEventListener('submit', handleSubmit);


function handleSubmit(e){
    e.preventDefault();
    songApi.createSong();
}
// debugger

songApi.getSongs();
playlistApi.getPlaylists();