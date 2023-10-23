const formulario=document.getElementById('formulario')
let Alunosid= null

const getIdUrl=()=>{
   const paramString=window.location.search
   const params= new URLSearchParams(paramString)
   Alunosid=params.get('id') 
   console.log(Alunosid)
}

const buscarAlunos= async()=>{
    const response=await fetch(`http://localhost:3000/Alunos/${Alunosid}`)
    const Alunos=await response.json()
    return Alunos
}

const carregarDadosformulario=async (Alunosid)=>{
    document.getElementById('Nome').value=Alunosid.Nome
    document.getElementById('Turma').value=Alunosid.Turma
    
        
}

const carregarDados=async()=>{
    getIdUrl()
    const Alunos=await buscarAlunos()
    carregarDadosformulario(Alunos)
}
const editarAluno=async(Alunos)=>{
    await fetch (`https://projeto-mod1.onrender.com/Alunos/${Alunosid}`,{
        method:'PUT',
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

     editarAluno(Alunos)
})
carregarDados()
