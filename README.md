# API de Consultas Médicas


![serveless](https://github.com/user-attachments/assets/62f1088d-8512-4591-9dc7-ea7b4a0845d0)
![type](https://github.com/user-attachments/assets/b2934169-4e42-4499-a22e-4ab1ee5a401f)
![node](https://github.com/user-attachments/assets/06ef81ea-2443-4679-99ab-e2654eea963e)
![post (1)](https://github.com/user-attachments/assets/8aed154b-5fcb-4e84-b830-7c04ee58f299)


Uma API serverless para o gerenciamento de consultas médicas, construída com **Node.js**, **TypeScript** e **Serverless Framework**.

---

## ✨ Visão Geral

Essa API fornece endpoints para gerenciar agendas médicas e consultas, oferecendo um serviço rápido e escalável para aplicações de saúde. Todas as rotas foram testadas no **Postman** para garantir o correto funcionamento e a confiabilidade das operações.

---

## ⚙️ Pré-requisitos

- **Node.js** v14 ou superior
- **npm** ou **yarn**
- **Serverless Framework CLI**

---

## 🚀 Instalação e Execução

1. **Instale as dependências** do projeto:
   ```bash
   npm install
2. **Execute os testes** para garantir que tudo está funcionando corretamente:
   ```bash
   npm test
3. **Inicie o servidor de desenvolvimento** local para trabalhar no projeto:
   ```bash
   npm run dev
## 📌 API Endpoints

### Listar Agendas Médicas
- **Método:** `GET`
- **Rota:** `/agendas`

Retorna uma lista com as agendas de todos os médicos disponíveis.

---

### Criar Agendamento
- **Método:** `POST`
- **Rota:** `/agendamento`
- **Corpo da Requisição:**
   ```json
   {
     "medico_id": 1,
     "paciente_nome": "Carlos Almeida",
     "data_horario": "2024-10-05 09:00"
   }
Utilize este endpoint para criar um novo agendamento para o paciente especificado na data e horário desejados.

---

## 🗂 Estrutura do Projeto

A organização do projeto foi planejada para manter o código limpo, modular e fácil de manter. 
Cada domínio possui seus próprios arquivos de controle, serviços, interfaces e mocks.

    
    /src
      ├── /agenda            # Domínio das agendas médicas
      │   ├── /controller    # Lógica de controle e gestão das agendas
      │   ├── /service       # Lógica de negócios para agendas
      │   ├── /interface     # Tipagens e interfaces relacionadas a agendas
      │   └── /mocks         # Dados fictícios para testes de agendas
      └── /agendamento       # Domínio dos agendamentos
          ├── /controller    # Lógica de controle e gestão dos agendamentos
          ├── /service       # Lógica de negócios para agendamentos
          ├── /interface     # Tipagens e interfaces relacionadas a agendamentos
          └── /mocks         # Dados fictícios para testes de agendamentos


## 🧪 Testes

Execute os testes unitários:
    
    npm test

**Observação:** Todas as rotas foram testadas no Postman para garantir a integridade da API.

---

## 🔍 Linting e Formatação
Para manter o código limpo e consistente, foram configurados scripts para análise estática e 
formatação:

- **Análise com ESLint:**
  ```bash
  npm run lint
- **Formatação com Prettier:**
   ```bash
  npm run format

 ---
 ## 🛠 Tecnologias Utilizadas
 - **Node.js** e **TypeScript** para backend e tipagem segura.
 - **Serverless Framework** para uma infraestrutura serverless e escalável.
 - **Postman** para teste e validação dos endpoints.

**Observação:** Sinta-se à vontade para explorar o projeto! Boa codificação! 🚀



