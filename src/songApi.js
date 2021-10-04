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
                n.attachToDom();
            })
        })

    }

    createSongs() {

        const songInfo = {
            song:{
            title: titleInput.value,
            artist: artistInput.value,
            
            playlist_id: dropDown.value
            }
        }

        const configObject = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(commentInfo)
        }
        
        fetch(this.baseUrl, configObject)
        .then(response => response.json())
        .then(data => {
            const c = new Song(data)
            c.attachToDom()
        })
   
    }

   
}

