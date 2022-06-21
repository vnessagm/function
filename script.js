
//1 - crie uma função que exiba uma mensagem no console
function msg(){
    console.log('This is a message')
  }
  
  msg()

//2 - crie uma função que receba o seu nome como (parâmetro) e exiba no console
function user(ipt){
    console.log(ipt)
  }
  
  user("Vanessa")

//3 - crie uma função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function curiosity(user, age, music){
    console.log(`My name is ${user}, I'm ${age} years old and my favorite music style is ${music}.`)
  }
  
 curiosity ("Vanessa", 25, "pop")

//4 - crie uma função que receba um filme, uma música (parâmetros) e exiba no console
function enter (movie, song){
    console.log (`The movie is ${movie} and the song is ${song}`)
}
enter("BlackPanther", "Black")



//5 - crie uma função que retorne o triplo do número recebido no parâmetro da função
function triple(three){
    return(console.log(three*3))
  }
  
  triple(10)