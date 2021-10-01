class Playlist {
    static all = []
    static playlistContainer = document.getElementById('playlist-container')

    constructor({title, description, id}) {
        this.title = title;
        this.description = description;
        this.id = id;
        // this.songs = songs;
    }

    render(){
        this.element.innerText = this.title 
        this.element.id = `playlist-${this.id}`
        return this.element
    }
}