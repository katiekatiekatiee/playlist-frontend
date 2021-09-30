class Song {
    static all = []
    static container = document.getElementById(`songs-container`)

    constructor({title, artist, id, playlistId}) {
        this.title = title;
        this.artist = artist;
        this.id = id;
        this.playlist_id = playlistId;
        this.element = document.createElement("li");
        this.element.id = `song-${this.id}`;
        this.element.dataset['id'] = id;
        this.element.addEventListener('click', this.handleClick)

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

    handleClick = (e) => {
        if(e.target.innerText === "Delete"){
            itemApi.deleteSong(e)
    
        } else if(e.target.innerText === "Edit") {
            e.target.innerText = "Save"
            this.editSong(e.target)
        } else if(e.target.innerText === "Save") {
            e.target.innerText = "Edit"
            this.saveUpdatedSong(e.target)
        }
    }
}