function Shuffle() {

    let url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=5db6f4086a434389be7c34fe56734651'
    
    fetch(`${url}`)
        .then(response => response.json())
        .then(data => {console.log(data)
        // note.textContent = data.content
        // author.textContent = data.author
        })
        .catch(err => console.error(err));

}

Shuffle()