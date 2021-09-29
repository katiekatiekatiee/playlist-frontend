class PlaylistApi {
    constructor(port){
        this.port = port
    }

    getPlaylists() {
        fetch(`${this.port}/playlists`)
        .then(response => response.json())
        .then(json => {
            json.forEach(p => {
                const n = new Playlist(p)
            })
        })
    }
}