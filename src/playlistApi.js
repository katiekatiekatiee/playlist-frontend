class PlaylistApi {
    constructor(port){
        this.baseUrl = `${port}/playlists`
    }

    getPlaylists() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(json => {
            json["data"].forEach(p => {
                const n = new Playlist({id: p.id, ...p.attributes})
                n.addToDom()
                n.addToDropDown()
            })
        })
    }
}