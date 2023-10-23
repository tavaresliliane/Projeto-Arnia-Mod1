function logar(){
    var login=document.getElementById('login').value
    var senha=document.getElementById('senha').value

    if(login=="deniamilenacosta@gmail.com"&& senha==="0000"){
        window.location="../ProjetoArnia/html/Inicio.html"
        return false
    }
}