class Song {
    static all = []
    static container = document.getElementById(`songs-container`)

    constructor({title, artist, id, playlistId}) {
        this.title = title;
        this.artist = artist;
        this.id = id;
        this.playlist_id = playlistId;
        this.element = document.createElement("div");
        this.element.id = `song-${this.id}`;
        this.element.dataset['id'] = id;

        Song.all.push(this);
    }


    render() {
        this.element.innerHTML = `
        <div>
       $<span class="title">${this.title}</span>
        <span class="artist">${this.artist}</span>
       </div>
       
       <button class="edit" data-id= "${this.id}" >Edit</button>
       <button class="delete" data-id= "${this.id}" >Delete</button>
       `
       return this.element
    }
}