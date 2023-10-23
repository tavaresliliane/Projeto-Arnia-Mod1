const getAlunos = async ()=>{
    const apiURL= await fetch('https://projeto-mod1.onrender.com/Alunos')
    const Alunos= await apiURL.json()
    mostrarAlunos(Alunos)
}
const mostrarAlunos=(Alunos)=>{
    const tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    Alunos.forEach((Alunos)=>{
        const AlunosHTML=`
        <tr>
            <td>${Alunos.Nome}</td>
            <td>${Alunos.Turma}</td>
            <td>
            <div class="imgtoggle">
            <img width="50" height="30" src="../images/inicio/ToggleOn.png"/>
              </div>
              </td>
            <td>
            <div class="cursor">
            <img width="30" height="30" src="../images/inicio/editar.png" onclick="editarAlunos(${Alunos.id})"/>
            <img width="30" height="30" src="../images/inicio/excluir.png" onclick="excluirAlunos(${Alunos.id})"/>
            </div>

        </tr>`
        tabela.innerHTML=tabela.innerHTML+AlunosHTML
    })
}

getAlunos()

const novoUsuario=()=>{
    window.location="cadastroAlunos.html"
}

const excluirAlunos= async(id)=>{
    await fetch(`https://projeto-mod1.onrender.com/Alunos/${id}`,{method:'DELETE'})
    getAlunos()
}
const editarAlunos =(id)=>{
    window.location=`EditarAlunos.html?id=${id}`

}

const buscarAlunos= async(textosearch=null)=>{
    let texto=''

    if (textosearch){
        texto=`?q=${textosearch}`
    }


const apiResponse= await fetch(`https://projeto-mod1.onrender.com/Alunos/${texto}`)
const Alunos=await apiResponse.json()
mostrarAlunos(Alunos)
}

search.addEventListener('keyup', (e) =>{
    const texto=search.value

    if (texto===''){
        buscarAlunos()
    } else if (e.key==='Enter'){
        buscarAlunos(texto)
    }
})

buscarAlunos()






    

         



 

