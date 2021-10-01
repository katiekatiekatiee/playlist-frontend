class PlaylistApi {
    constructor(port){
        this.baseUrl = `${port}/playlists`
    }

    getPlaylists() {
        fetch(`${this.port}/playlists`)
        .then(response => response.json())
        .then(json => {
            json.forEach(p => {
                const n = new Playlist(p)
                n.addToDom()
            })
        })
    }
}