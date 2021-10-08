class SongApi {
    constructor(port){
        this.baseUrl = `${port}/songs`
    }

    getSongs() {
       
        fetch(this.baseUrl)
        .then(response => response.json())
        
        .then(json => {
            
            json["data"].forEach((s) => {
                const n = new Song(s)
               debugger
            })
        })

    }

    createSong(listId, title, artist, form) {

        const songInfo = {
            song:{
            title: title,
            artist: artist,
            
            playlist_id: listId
            }
        }
// debugger
        const configObject = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: JSON.stringify(songInfo)
        }
        
        fetch(this.baseUrl, configObject)
        .then(response => response.json())
        .then(data => {
            // debugger
            const n = new Song(data)
            
            // n.attachToDom()
            n.render(form.parentElement)
            form.reset();
        })
        
    }

    deleteSong(e) {
       
        const id = e.target.dataset.id
        e.target.parentElement.remove()
        fetch(`${this.baseUrl}/${id}`, {method: 'DELETE'})
        .then(resp => resp.json())
        .then(json => alert(json.message))
    }
}
    // updateSong(song){
    //     const {title, artist, id} = song
    //     const songInfo = {
    //         title, 
    //         artist
    //     }

    //     const configObject = {
    //         method: 'PATCH',
    //         headers: {
    //             "Content-Type": "application/json",
    //             Accept: "application/json"
    //         },
    //         body: JSON.stringify(songInfo)
    //     }
        
    //     fetch(`${this.baseUrl}/${id}`, configObject)
    //     .then(song.render())
        
    // }

   

   


