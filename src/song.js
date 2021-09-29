class Song {
    static all = []

    constructor({title, artist, id, playlistId}) {
        this.title = title;
        this.artist = artist;
        this.id = id;
        this.playlist_id = playlistId;

        Song.all.push(this)
    }
}