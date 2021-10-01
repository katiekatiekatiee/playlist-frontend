class SongApi {
    constructor(port){
        this.baseUrl = `${port}/songs`
    }

    getSongs() {
        fetch(this.baseURL)
        .then(response => response.json())
        .then(json => {
            json.forEach(s => {
                const n = new Song(s)
                n.renderSong();
            })
        })
    }
}