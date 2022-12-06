// Nesta aula veremos sobre o throw e try/catch. São parte do controle de fluxo da aplicação.

// Isso significa que vamos tentar executar um bloco de código, e se der algum erro (exception), será disparado e capturado na nossa aplicação. Suponhamos que haja uma função que dispare um erro caso não seja passado um parâmetro dessa função.

function sayMyName(name = '') {
    if (name === '') {
        throw 'Name is required'
    }

    console.log(name)
}

// Nesse caso, se o nome vier vazio, será disparada uma mensagem 'Nome é obrigatório'

// Precisamos agora usar o try/catch para capturarmos esse erro, caso contrário, ele irá encerrar nossa aplicação, e nós o faremos da seguinte maneira:

try {
    sayMyName()
} catch(e) {
    console.log(e)
}

console.log('after the try/catch, proving that the API still went on after de the exception')

// O try irá executar a função, enquanto o catch vai capturar o erro e atribuir à variável e, que só existe dentro do catch. Após isso, mesmo com o erro, nossa aplicação não será interrompida por completo.