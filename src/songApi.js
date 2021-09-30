class SongApi {
    constructor(port){
        this.port = port
    }

    getSongs() {
        fetch(`${this.port}/songs`)
        .then(response => response.json())
        .then(json => {
            json.forEach(s => {
                const n = new Song(s)
            })
        })
    }
}