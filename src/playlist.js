class Playlist {
    static all = []
    static playlistContainer = document.getElementById('playlist-container')

    constructor({title, description, id, songs}) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.songs = [
            songs.map(song => new Song(song))
        ]
        this.element = document.createElement("div");
        this.element.dataset['id'] = id;
        this.element.addEventListener('click', this.showSongs);
       
        Playlist.all.push(this)
    }

    showSongs = (e) => {
        // e.stopPropagation();
        // e.cancelBubble() = true;
        // e.stopImmediatePropagation();
       const playId = e.target.dataset.id
       const songsFilter = Song.all.filter(song => {
       return song.playlistId === parseInt(playId)
    })
        // debugger
        songsFilter.forEach( song => {
            song.render(e.target)
            // debugger
            // e.target.querySelector('ul').innerHTML += `${song.title} - ${song.artist}`
        })
        Song.renderForm(e.target);
        
    }

    render(){
        
        this.element.innerHTML = `${this.title}
        <ul class="songsList"></ul>`
        // debugger
        
        this.element.id = `playlist-${this.id}`
        return this.element
    }

    addToDom(){
        Playlist.playlistContainer.append(this.render())
    }

    // addToDropDown() {
    //     const option = document.createElement('option')
    //     option.value  = this.id; 
    //     option.innerText = this.title;
    //     dropDown.appendChild(option);
    // }

}