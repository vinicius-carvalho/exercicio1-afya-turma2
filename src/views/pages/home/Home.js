import { api, postform } from '../../../service/api';

async function getRandomJoke() {
  const request = await api.get('random');
  const response = request.data;
  return response;
}

let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getRandomJoke();
    let view = `

          <div class="title">
            <h1>Exercício API Chuq Noris</h1>
          </div>
          

          <div> 
          <img src="${jokes.icon_url}"/>
          </div>

          <div> 
            <form id="form"> 
              <p> Envie uma mensagem preenchendo o formulário abaixo</p>
          
              <div class="field">
                <label for="nome">Seu Nome:</label>
                <input type="text" id="name" name="nome" placeholder="Digite seu nome">
              </div>

              <div class="field">
                <label for="email">Seu E-Mail:</label>
                <input type="email" id="email" name="email" placeholder="Digite seu E-Mail">
              </div>    
          
              <div class="field">
                <label for="telefone">Seu Telefone:</label>
                <input type="text" id="phone" name="telefone" placeholder="Digite seu Telefone">
              </div>

              <input type="submit" value="Enviar">
            </form>

          </div>
      `;

    return view
  },

  after_render: async () => {

    let formcontent = document.getElementById("form");

    formcontent.addEventListener('submit', (e) =>{
      e.preventDefault();

      let name = document.querySelector("#name").value;
      let email = document.querySelector("#email").value;
      let phone = document.querySelector("#phone").value;

      let postData = {
        "name":name,
        "email":email,
        "phone":phone
      }
      postform.post('', postData).then(
         response => alert("Sucesso!")
      ).catch(
        e => alert("Erro ao enviar os dados"))
    });
   }
}

export default Home;