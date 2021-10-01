class PlaylistApi {
    constructor(port){
        this.baseUrl = `${port}/playlists`
    }

    getPlaylists() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(p => {
                const n = new Playlist(p)
                // n.addToDom()
            })
        })
    }
}