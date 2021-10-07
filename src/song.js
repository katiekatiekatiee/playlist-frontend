class Song {
    static all = []
    static container = document.getElementById(`songs-container`)

    constructor({title, artist, id, playlist_id}) {
        this.title = title;
        this.artist = artist;
        this.id = id;
        this.playlistId = playlist_id;
        this.element = document.createElement("li");
        this.element.id = `song-${this.id}`;
        this.element.dataset['id'] = id;
        this.element.addEventListener('click', this.handleClick)

        Song.all.push(this);
    }


    render(e) {
        // debugger
        e.querySelector('ul').innerHTML += `
        <div data-id="${this.id}">
       <span class="title">Song: ${this.title}</span> -- 
        <span class="artist">Artist: ${this.artist}</span>
       </div>

       <button class="delete" data-id= "${this.id}" >Delete</button>
       `
       return this.element
    }

    static renderForm(e) {
        e.innerHTML += 
       ` <h2>Add a song to a playlist:</h2>
        <form id="song-form">
            <label for="song-title">Song Title:</label>
            <input type="text" name="title" class="song-title"/> <br>
            <label for="song-artist">Song Artist:</label>
            <input type="text" name="artist" class="song-artist"/> <br>
     
            <select name="playlist_id" id="playlist-dropdown"></select><br>
     
            <input type="submit" value="Add Song" />
        </form>`
        e.addEventListener('submit', Song.addSong)
    }

    static addSong(e){ 
        let listId = e.target.parentElement.dataset.id
        let title = e.target.querySelector('.song-title').value
        let artist =  e.target.querySelector('.song-artist').value
        // Song.attributes = {title: title, artist: artist, playlist_id: listId}
        // const n = new Song({id: s.id, ...s.attributes})
    }
    // renderSong(){
    //     Song.container.appendChild(this.render())
    // }

    handleClick = (e) => {
        
        if(e.target.innerText === "Delete"){
            // debugger
            songApi.deleteSong(e)
    
        // } else if(e.target.innerText === "Edit") {
        //     e.target.innerText = "Save"
        //     this.editSong(e.target)
        // } else if(e.target.innerText === "Save") {
        //     e.target.innerText = "Edit"
        //     this.saveUpdatedSong(e.target)
        }
    }

    // editSong() {
    //     const div = this.element.querySelector('div');
    //       for(const element of div.children) {
    //         let inputValue = element.innerText;
    //         let name = element.classList[0];
    //         element.outerHTML = `<input type="text" class="edit-${name}" value="${inputValue}" />`
    //     }
    // }

//     saveUpdatedSong() {
//         this.title = this.element.querySelector(".edit-title").value;
//         this.artist = this.element.querySelector(".edit-artist").value;
       
//         songApi.updateSong(this)
//    }

   attachToDom(){
        Song.container.appendChild(this.render())
    }
}