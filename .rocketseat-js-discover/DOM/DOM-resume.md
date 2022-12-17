# DOM (Document Object Model):

- É o HTML convertido para um Objeto Javascript
- API que representa e interage com o HTML
- Estrutura de dados do tipo árvore, criada pelo browser
- Propriedades e métodos

## Para que ?

- Javascript usa a DOM par se conectar ao HTML
- Manipular o HTML com o Javascript
- Voê só programa para WEB porque existe a DOM

## Document Object Model:

document || html || head, body

               '->  head || meta, meta, title  

               '->  body || title 




# Selecionando Elementos

                .getElementBy and .querySelector

## getElementBy:

- getElementBy || Id | ClassName | TagName

    document.getElementById("blog-title") (element)

    document.getElementByClassName("blog-title) (htmlCollection)

    document.getElementByTagName('') (HTMLCollection)

## querySelector() (element):

- The querySelector() method returns the first child element that matches a specified CSS selector(s) of an element.

- Note: The querySelector() method only returns the first element that matches the specified  selectors. To return all the matches, use the querySelectorAll() method instead.

## querySelectorAll() (`NodeList`):

- The querySelectorAll() method returns a collection of an element's child elements that match a specified CSS selector(s), as a static `NodeList` object.

### HTML Collection < - > Node List




# Manipulando o Conteúdo (elements):

## textContent:

    const element = document.querySelector('h1')

    element.textContent += "Olá Devs!"

## innerText:

    element.innerText = "Olá Devs!"

## innerHTML:

- O único que pode adicionar HTML no elemento

    element.innerHTML = "Olá Devs! <small> !!! </small>"

## value:

    const element = document.querySelector('input')

    element.value = "valor que eu quiser"

    console.log(element.value)

- Você consegue atribuir e dar o valor do elemento

## .setAttribute('atribute','value'):

- Adiciona atributos à tag

    const header = document.querySelector('header')
    header.setAttribute('id', 'header')

    const headerID  = document.querySelector('#header')

    console.log(headerID.getAttribute('id'))

    header.removeAttribute('id')

### note that:  .'set'Att..   .'get'Att..   .'remove'Att.. 




# Manipulando Estilos:

- adiciona estilos nos elementos das tags

## .style. :

    const element = document.querySelector('body')

    element.style.backgroundColor = "#FFFFFF"

## .classList. :

- || .add('') | .remove('') | .toogle(''):

    const element = document.querySelector('body')

    element.classList.add('active', 'green')
    
    element.classList.toggle('green')

    console.log(element.classList) -> 'active'

- o método .toggle('') age como um interruptor: se o valor passado estiver no elemento, ele remove; se o valor passado NÃO estiver no elemento, ele adiciona. É isto!!!




# Navegando pelos elementos:

## parentElement e parentNode:

- .parentNode:

    const body = document.querySelector('body')

    console.log(body.parentNode)

- Desta forma se acessa ao elemento pai da tag chamada, no caso do exemplo, seria <html>

## childNodes children:

- .childNotes:
    - Seleciona múltiplas tags filhas e espaços

- .children:
     Seleciona apenas as tags filhas

## firstChild and FirstElementChild:

- .firstChild:

    - Seleciona o primeiro elemento, mas leva em consideração os espaços, assim como em ChildNotes.

- .firstElementChild:

    - Seleciona o primeiro elemento, sem ligar para os espaços.

- É as mesma regra, inversamente, para l.astChild e .lastElementChild


## .nextSibling and .nextElementSibling
## .previousSibling and .previousElementSibling:

- É basicamente a navegação por irmãs.
- Sibling = irmã
- a palavra Element representa o método que não considera os espaços vazios


# Criando e adicionando elementos na pagina:

## .createElement(''):

- Creates a new element.

    const div = document.createElement('div');
    div.innerText = 'Olá, Devs!';

     code will be continued below.

## .append() and .prepend():

- Check the code:
    const body = document.querySelector('body');

    body.append(div);

- Notice that `body.append` inserted a <div> inside the original tag <body>, on it's bottom. That's .append can do! As fore .prepend():

    body.prepend(div);
    
    - this would insert the <div> inside <body> on it's top!

## .insertBefore('',''):

- Insere um elemento antes de outro específico.
- Recebe dois argumentos ('o elemento novo', 'o nó/tag de referência')

- Não existe o método .insertAfter('',''), não existe! Mas existe uma gambiarra:

    const div = document.createElement('div');
    div.innerText = "Olá Devs!"

    // gambiarra do insert`After`:

        const body = document.querySelector('body');
        const header = body.querySelector('header');
        `body.insertBefore(div, header.nextSibling);`




# Eventos 

## Eventos de teclado:

.onkeypress 
.onkeydown
.onkeyup

## .addEventListener

    cons h1 = document.querySelector('h1')

    h1.addEventListener('click', print());

    function print() {
            console.log('print')
        }

### É bom ficar ligado no vocabulário de eventos, ein????!!!!

