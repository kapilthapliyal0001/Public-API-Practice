window.onload = () => {
    fetchBooks();
};

const fetchBooks = () => {
    fetch(" https://striveschool-api.herokuapp.com/books").then( (res) => res.json() 
    ).then( (data) => console.log(data)).catch( (e) => console.log(e));


};