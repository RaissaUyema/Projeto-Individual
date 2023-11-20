  var random = ['naruto', 'sakura'];

  function sobre_person(){
    var modal = document.getElementById('modal_informacao_person');
    var person = tipo_person;
 
    if(person == 'naruto'){
        imagem_informacao_person.innerHTML = `<img src="../imagem/narutooo.jpg" width="280px">`;
        sobre_informacao_person.innerHTML =`loremloremloremloremloremloremloremloremloremloremloerme`
        tipo_person.innerHTML = `jtnjnjnrjfnfjmfjnjugn`
    } else if(person == 'sakura'){
        imagem_informacao_person.innerHTML = `<img src="../imagem/sakura.jpg" width="280px" alt="sakura">`;
        sobre_informacao_person.innerHTML =`loremloremloremloremloremloremloremloremloremloremloerme`
        tipo_person.innerHTML = `jtnjnjnrjfnfjmfjnjugn`
    } else if(person == 'sasuke'){
        imagem_informacao_person.innerHTML = `<img src="../imagem/sasuke1.jpg" width="280px"></div>`;
        sobre_informacao_person.innerHTML =`loremloremloremloremloremloremloremloremloremloremloerme`
        tipo_person.innerHTML = `jtnjnjnrjfnfjmfjnjugn`
    } else if(person == 'kakashi'){
        imagem_informacao_person.innerHTML = `<img src="../imagem/kakashi.jpg" width="280px"></div>`;
        sobre_informacao_person.innerHTML =`loremloremloremloremloremloremloremloremloremloremloerme`
        tipo_person.innerHTML = `jtnjnjnrjfnfjmfjnjugn`
    }
    else if(person == 'jiraiya'){
        imagem_informacao_person.innerHTML = `<img src="../imagem/ji.jpg" width="280x"></div>`;
        sobre_informacao_person.innerHTML =`loremloremloremloremloremloremloremloremloremloremloerme`
        tipo_person.innerHTML = `jtnjnjnrjfnfjmfjnjugn`
    }


    modal.style = "display: flex";
  }

function fechar_modal(){
    var modal_person = document.getElementById("modal_informacao_person");
}

window.addEventListener('click', (e) => {
    var modal_tipos = document.getElementById("modal_informacao_person");
    if (e.target == modal_tipos ){

        fechar_modais()
    }
}
)

// modal_tipo_vinhos