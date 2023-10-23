const formulario=document.getElementById('formulario')
let Professoresid= null

const getIdUrl=()=>{
   const paramString=window.location.search
   const params= new URLSearchParams(paramString)
   Professoresid=params.get('id') 
   console.log(Professoresid)
}

const buscarProfessores= async()=>{
    const response=await fetch(`https://projeto-mod1.onrender.com/Professores/${Professoresid}`)
    const Professores=await response.json()
    return Professores
}

const carregarDadosformulario=async (Professoresid)=>{
    document.getElementById('Nome').value=Professoresid.Nome
    document.getElementById('Perfil').value=Professoresid.Perfil
    document.getElementById('Disciplina').value=Professoresid.Disciplina
    
    
        
}

const carregarDados=async()=>{
    getIdUrl()
    const Professores=await buscarProfessores()
    carregarDadosformulario(Professores)
}
const editarProfessor=async(Professores)=>{
    await fetch (`https://projeto-mod1.onrender.com/Professores/${Professoresid}`,{
        method:'PUT',
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

     editarProfessor(Professores)
})
carregarDados()
