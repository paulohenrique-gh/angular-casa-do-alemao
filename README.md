# Casa do Alemão

**Casa do Alemão** é uma SPA (single-page application) feita em Angular no bootcamp T-Academy. Os usuários podem, além de outras funcionalidades, acessar informações gerais sobre a Alemanha, publicar artigos e commentar nas publicações.

## Tecnologias utilizadas
- Angular 18
- Tailwind
- Angular Material

Backend: como o foco do projeto era o frontend, foi utilizada a biblioteca JSON Server para simular uma API no backend


## Funcionalidades e permissões

| Função       | Ação                | Editores | Usuários | Visitantes |
|--------------|---------------------|----------|----------|------------|
| Informações Gerais | Visualizar    | ✔️       | ✔️       | ✔️         |
| Artigos      | Visualizar          | ✔️       | ✔️       | ✔️         |
| Artigos      | Publicar            | ✔️       | ❌       | ❌         |
| Artigos      | Editar              | ✔️       | ❌       | ❌         |
| Artigos      | Excluir             | ✔️       | ❌       | ❌         |
| Comentários  | Visualizar          | ✔️       | ✔️       | ✔️         |
| Comentários  | Comentar            | ✔️       | ✔️       | ❌         |
| Comentários  | Editar              | ✔️       | ✔️       | ❌         |
| Comentários  | Excluir             | ✔️       | ✔️       | ❌         |


## Configuração e execução

### Requisitos

- Node.js

### Executando a aplicação

1. **Clone o repositório:**
    ```bash
    git clone git@github.com:paulohenrique-gh/angular-casa-do-alemao.git
    cd angular-casa-do-alemao
    ```

2. **Instale as dependências:**
    ```bash
    npm install
    ```

3. **Inicie a aplicação**
    ```bash
    npm run start
    ```
    Serão executados os comandos `ng serve` e `npx json-server db.json` em paralelo devido à biblioteca **Concurrently**

5. **Acesse a aplicação:**

    Acesse a http://localhost:4200 no navegador de sua preferência


## Testando a aplicação

Você pode usar as credenciais abaixo para testar as funcionalidades:

- Editor:
    - Email: john.doe@example.com
    - Senha: password123

- Usuário:
    - Email: bob.brown@example.com
    - Senha: password101

Se preferir, pode também criar um novo cadastro no endereço http://localhost:4200/signup e acessar com o email e senha cadastrados

## Capturas

https://github.com/user-attachments/assets/a1dc53bf-0354-4f02-a1f1-adb9ca729862

---

![Página inicial](https://github.com/user-attachments/assets/9aabd4f7-7a7f-4122-a0fe-dbf96914d5e8)
Página inicial

---

![Estados](https://github.com/user-attachments/assets/35af3933-f09c-407f-a32c-c9fda8f26802)
Estados

---

![Galeria](https://github.com/user-attachments/assets/e3972269-9adc-471b-b128-9831630342a2)
Galeria

---

![Artigos](https://github.com/user-attachments/assets/6019c3d7-ff44-4846-a134-f36bb28fee21)
Artigos

---

![Formulário artigo](https://github.com/user-attachments/assets/49a284ff-ea00-43bf-8313-ecea364e0903)
Formulário de artigo

---

![Artigo completo](https://github.com/user-attachments/assets/86fac966-2084-408f-aa1e-457ded93f8ac)
Artigo completo

---

![Pop-up confirmação](https://github.com/user-attachments/assets/88ab3344-d797-4d9c-8aff-071887c8f8f7)
Pop-up de confirmação

---

![Cadastro](https://github.com/user-attachments/assets/c8947a1c-4f07-4d6f-b6bd-35ee9a5b07c4)
Cadastro

---

![Login](https://github.com/user-attachments/assets/ce58e99f-a47d-4b0c-a96d-5217326900e1)
Login

---

![Erro](https://github.com/user-attachments/assets/015c4652-1b07-48bb-83c2-5d78c03c244a)
Erro

---

![Página não encontrada](https://github.com/user-attachments/assets/69bddf07-bc6c-4de9-870f-20508cda80fe)
Página não encontrada




