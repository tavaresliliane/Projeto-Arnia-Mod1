const formulario=document.getElementById('formulario')
const select = document.getElementById('Turma')

const cadastrarAluno= async(Alunos)=>{
    await fetch ('https://projeto-mod1.onrender.com/Alunos',{
        method:'POST',
        headers:{
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
        },
        body: JSON.stringify(Alunos)
    })
    window.location="Aluno.html"
}



formulario.addEventListener('submit',(e)=>{
    e.preventDefault()
     const Nome=formulario.elements['Nome'].value
     const Turma=formulario.elements['Turma'].value
     

     const Alunos={
        Nome,
        Turma,
        
     }

     cadastrarAluno(Alunos)
     

})
    