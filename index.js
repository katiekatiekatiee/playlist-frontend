const port = 'http://localhost:3000';
const playlistApi = new PlaylistApi(port);
const songApi = new SongApi(port);

const songForm = document.getElementById('song-form');

const titleValue = document.getElementById('song-title');
const artistValue = document.getElementById('song-artist');


// const playlistForm = document.getElementById('playlist-form')

