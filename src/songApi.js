class SongApi {
    constructor(port){
        this.baseUrl = `${port}/songs`
    }

    getSongs() {
        // debugger
        fetch(this.baseUrl)
        .then(response => response.json())
        
        .then(json => {
            // debugger
            json["data"].forEach((s) => {
                const n = new Song(s)
                n.renderSong();
            })
        })
    }

    // createSongs() {

    //     const songInfo = {
    //         song:{
    //         title: titleInput.value,
    //         artist: artistInput.value,
            
    //         playlistName: playlistInput.value
    //         }
    //     }
    
}