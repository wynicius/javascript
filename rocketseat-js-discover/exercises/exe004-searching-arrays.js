// Esse é um desafio onde vamos trabalhar com arrays, começando com coisas básicas e complicando conforme anda.

// Desafio:

/* 
    ∞ Buscando e contando dados em Arrays ∞
    Baseado no Array de Livros por Categoria abaixo, faça os seguintes desafios
        • Contar o número de categorias e o número de livros em cada categoria
        • Contar o número de autores
        • Mostrar livros do autor Augusto Cury
        • Transformar a função acima em uma função que irá receber o nome do autor e devolver os livros desse autor.
*/

const booksByCategory = [
    {
        category: "Riqueza",
        books: [
            {
                title: "Os segredos da mente milionária",
                author: "T. Harv Eker",
            },
            {
                title: "O homem mais rico da Babilônia",
                author: "George S. Clason",
            },
            {
                title: "Pai rico, pai pobre",
                author: "Robert T. Kiyosaki e Sharon L. Lechter",
            },
        ],
    },
    {
        category: "Inteligência Emocional",
        books: [
            {
                title: "Você é Insubstituível",
                author: "Augusto Cury",
            },
            {
                title: "Ansiedade – Como enfrentar o mal do século",
                author: "Augusto Cury",
            },
            {
                title: "Os 7 hábitos das pessoas altamente eficazes",
                author: "Stephen R. Covey",
            },
        ],
    },
];


const totalCategories = booksByCategory.length 
    console.log('temos ' + totalCategories + ' categorias');

for (const categoria of booksByCategory) {
    totalLivros = categoria.books.length;
}
    console.log('Cada categoria possui '+totalLivros + ' livros')

countAuthors()
function countAuthors() {
    let authors = [];
    let livrosDeAugusto = ['caralho']

    for( let arrayInteira of booksByCategory ) {
        for( let arraysBooks of arrayInteira.books ) {
            if (authors.indexOf(arraysBooks.author) == -1) {
                authors.push( arraysBooks.author );
            }
            if (livrosDeAugusto.indexOf(arraysBooks.author) == 'Augusto Cury') {
                livrosDeAugusto.push( arraysBooks.title);
            }
        }
    }
    console.log('A quantidade de autores é ' + authors.length);
    console.log('os livros de Augusto Cury são' + livrosDeAugusto)

}