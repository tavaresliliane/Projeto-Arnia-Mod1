const formulario=document.getElementById('formulario')
const select = document.getElementById('perfil')

const cadastrarProfessor= async(Professores)=>{
    await fetch ('https://projeto-mod1.onrender.com/Professores',{
        method:'POST',
        headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(Professores)
    })
    window.location="Professor.html"
}



formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
     const Nome=formulario.elements['Nome'].value
     const Perfil=formulario.elements['Perfil'].value
     const Disciplina=formulario.elements['Disciplina'].value

     const Professores={
        Nome,
        Perfil,
        Disciplina
     }

     cadastrarProfessor(Professores)
     

})
    