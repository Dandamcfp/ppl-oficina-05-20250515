      
      // Fetch 07 INICIO, filtrar
      function imprimeFiltrar(objeto) {
        var mensagem;

        objeto.forEach(function (obj) {
          mensagem += `
        <br>
        {
          <br>
          "<span class='campo'>id</span>": ${obj.id},
          <br>
          "<span class='campo'>userId</span>": ${obj.userId},
          <br>
          "<span class='campo'>title</span>": ${obj.title},
          <br>
          "<span class='campo'>body</span>": ${obj.body}
          <br>
        },
        <br>`;
        });

        return mensagem;
      }

      async function filtrarPostagens(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
            respjson.innerHTML = imprimeFiltrar(json);
          });
      }
      // Fetch filtrar Final 
      //Get Post id - 01
       