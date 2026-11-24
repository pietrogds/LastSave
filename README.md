<div align="center">

<img src="public/images/lastsave-logo-v4.png" alt="LastSave" width="100%">


![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Status](https://img.shields.io/badge/status-em%20desenvolvimento-yellow)

</div>

# LastSave
Projeto acadêmico individual em HTML, CSS e JS, no formato de blog/artigo , sobre a história dos video games e os jogos clássicos que moldaram a indústria.

## Como rodar

1. Rode o script `src/database/script-tabelas.sql` no MySQL Workbench (cria o banco `lastsave`).
2. Coloque seu usuário e senha do MySQL no arquivo `.env.dev` (`DB_USER` e `DB_PASSWORD`).
3. No terminal, dentro da pasta do projeto:

```
npm i
npm start
```

4. Acesse `http://localhost:3333`.

O login e o cadastro usam a API **web-data-viz** da SPTech. A documentação original dela está na pasta `documentacao-api/`.
