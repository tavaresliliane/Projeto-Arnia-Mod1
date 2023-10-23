const getProfessores = async ()=>{
    const apiURL= await fetch('https://projeto-mod1.onrender.com/Professores')
    const Professores= await apiURL.json()
    mostrarProfessores(Professores)
}
const mostrarProfessores=(Professores)=>{
    const tabela=document.querySelector('tbody')
    tabela.innerHTML=''

    Professores.forEach((Professores)=>{
        const ProfessoresHTML=`
        <tr>
            <td>${Professores.Nome}</td>
            <td>${Professores.Perfil}</td>
            <td>${Professores.Disciplina}</td>
            <td>
            <div class="imgtoggle">
            <img width="50" height="30" src="../images/inicio/ToggleOn.png"/>
              </div>
              </td>
            <td>
            <div class="cursor">
            <img width="30" height="30" src="../images/inicio/editar.png" onclick="editarProfessores(${Professores.id})"/>
            <img width="30" height="30" src="../images/inicio/excluir.png" onclick="excluirProfessores(${Professores.id})"/>
            </div>

        </tr>`
        tabela.innerHTML=tabela.innerHTML+ProfessoresHTML
    })
}

getProfessores()

const novoUsuario=()=>{
    window.location="cadastroprofessor.html"
}

const excluirProfessores= async(id)=>{
    await fetch(`https://projeto-mod1.onrender.com/Professores/${id}`,{method:'DELETE'})
    getProfessores()
}
const editarProfessores =(id)=>{
    window.location=`Editarprofessor.html?id=${id}`

}

const buscarProfessores= async(textosearch=null)=>{
    let texto=''

    if (textosearch){
        texto=`?q=${textosearch}`
    }


const apiResponse= await fetch(`https://projeto-mod1.onrender.com/Professores/${texto}`)
const Professores=await apiResponse.json()
mostrarProfessores(Professores)
}

search.addEventListener('keyup', (e) =>{
    const texto=search.value

    if (texto===''){
        buscarProfessores()
    } else if (e.key==='Enter'){
        buscarProfessores(texto)
    }
})

buscarProfessores()






    

         



 

