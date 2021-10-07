class SongApi {
    constructor(port){
        this.baseUrl = `${port}/songs`
    }

    getSongs() {
       
        fetch(this.baseUrl)
        .then(response => response.json())
        
        .then(json => {
            
            json["data"].forEach((s) => {
                const n = new Song({id: s.id, ...s.attributes})
               
            })
        })

    }

    createSong() {

        const songInfo = {
            song:{
            title: titleInput.value,
            artist: artistInput.value,
            
            // playlist_id: dropDown.value
            }
        }

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
            const n = new Song({id: data.data.id, ...data.data.attributes})
           
            n.attachToDom()
            n.render()
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

   

   


