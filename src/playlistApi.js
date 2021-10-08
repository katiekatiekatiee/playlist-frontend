class PlaylistApi {
    constructor(port){
        this.baseUrl = `${port}/playlists`
    }

    getPlaylists() {
        fetch(this.baseUrl)
        .then(response => response.json())
        .then(data => {
            data.map(playlist => {
                const p = new Playlist(playlist);
                p.addToDom();
                p.addToDropDown()
            })
        })
    }
}