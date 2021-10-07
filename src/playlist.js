class Playlist {
    static all = []
    static playlistContainer = document.getElementById('playlist-container')

    constructor({title, description, id}) {
        this.title = title;
        this.description = description;
        this.id = id;
        this.element = document.createElement("li");
        this.element.dataset['id'] = id;
        this.element.addEventListener('click', this.showSongs);
        // this.songs = songs;
        Playlist.all.push(this)
    }

    showSongs = (e) => {
        e.stopPropagation()
       const playId = e.target.dataset.id
       const songsFilter = Song.all.filter(song => {
        // debugger
       return song.playlistId === parseInt(playId)
    })
        // debugger
        songsFilter.forEach( song => {
            song.render(e.target)
            // debugger
            // e.target.querySelector('ul').innerHTML += `${song.title} - ${song.artist}`
        })

    }

    render(){
        // debugger
        this.element.innerHTML = `${this.title}
        <ul class="songsList"></ul>`
        // debugger
        
        this.element.id = `playlist-${this.id}`
        return this.element
    }

    addToDom(){
        Playlist.playlistContainer.append(this.render())
    }

    addToDropDown() {
        const option = document.createElement('option')
        option.value  = this.id; 
        option.innerText = this.title;
        dropDown.appendChild(option);
    }

}