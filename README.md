# Relatório (desafio-backend-frameworks)

## Comparação de Frameworks
### Node.js/Express:
- Ele é fácil de ser entendido, bom para pessoas que estão começando a aprender agora, ele é bem simples, ele é rápido de fazer, ele também é curto os códigos não são grandes, assim tornando-se um código menor e é bom para usar em aplicações simples.

### Java/Spring Boot:
- É chato, eu não acho um código dificil de se entender, ah não ser que seja para pessoas iniciantes, mas ele é muito trabalhoso, códigos grandes, organizado, usando ele assim para sistemas maiores.

## Explicação da arquitetura:
## No projeto Node.js/Espress:
Funciona como um exemplo de atendimento ao cliente

(Usuário -> Routes -> Controllers -> Models -> A resposta)

1 passo = O usuário fara um pedido para o sistema

2 passo = O ROUTES receberá esse pedido

3 passo = O caminho específico do usuário chamará o CONTROLLERS

4 passo = O CONTROLLERS decidirá o que fazer, ele terá o models, caso precise

5 passo = Após esse percurso, ele voltará com uma resposta para o usuário.


## No projeto Java/Spring Boot
Ele funciona mais diretamente

(Usuário -> Controllers -> Resposta)

1 passo = O usuário fará um pedido

2 passo = O pedido será enviado diretamente para o CONTROLLERS, eem seguida ele responderá.


Guardar

Model -> Dados

Ex: Usuário, email.

Controllers -> Ele vai descidir o que fazer.

Routes -> Vai guiando os passos

(Acho que especificamente no node).


