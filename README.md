----
=============================
----

# Guia de Configuração e Execução do Projeto

Siga o passo a passo abaixo para clonar, configurar o ambiente com Git Flow e executar o projeto localmente.

---

### 1. Clonar o repositório
```bash
git clone <endereço-remoto-repositorio>
```

### 2. Verificar branches locais
```bash
git branch
```

### 3. Verificar branches remotas
```bash
git branch -a
```

### 4. Inicializar a estrutura do Git Flow
Inicia a estrutura do Git Flow no projeto e muda automaticamente para a branch `develop`:
```bash
git flow init
```

> **Atenção (PC da Instituição):** Caso o Git Flow não esteja instalado no Windows, execute:
> ```bash
> winget install GitTower.GitFlowNext
> ```

### 5. Mudar para a branch de trabalho desejada
```bash
git switch <nomeDaBranch>
# ou
git checkout <nomeDaBranch>
```

### 6. Acessar a pasta da aplicação
```bash
cd my-app
```

### 7. Listar o conteúdo da pasta atual
```bash
ls
```

### 8. Abrir o VS Code a partir do Git Bash
```bash
code .
```

### 9. Encerrar o Git Bash
```bash
exit
```

### 10. Abrir o terminal no VS Code e instalar dependências
No VS Code, abra um novo terminal usando o **Command Prompt (CMD)** e instale as dependências:
```bash
npm install
# ou
npm i
```
> **Atenção:** Certifique-se de que o terminal está dentro da pasta `my-app`.

### 11. Executar o projeto em modo de desenvolvimento
```bash
npm run dev
```
---
# Guia de Sincronização de Branches com o Professor

Se o seu código está diferente ou você não tem o conteúdo atual do professor, identifique sua situação e siga os passos correspondentes abaixo.

---

### 1. Acabou de clonar o repositório OU ainda não criou sua branch
*(Você não tem branch de trabalho e precisa começar exatamente do ponto onde o professor parou)*

1. Atualize a lista de branches do servidor:
```bash
git fetch origin
```

2. Crie a sua branch diretamente a partir da branch do professor:
```bash
git switch -c feature/exemplo-rmSeuRM origin/feature/exemplo-pf0670
```
> Substitua `rmSeuRM` pelo seu RM real (ex: `feature/exemplo-rm12345`).

---

### 2. Você já tem a sua branch criada, mas o código está desatualizado
*(Você tem sua branch, mas falta o conteúdo que o professor acabou de passar na aula)*

1. Acesse a sua branch:
```bash
git switch feature/exemplo-rmSeuRM
```

2. Baixe as atualizações do servidor:
```bash
git fetch origin
```

3. Traga o código do professor para dentro da sua branch:
```bash
git merge origin/feature/exemplo-pf0670
```

---

### 3. Sua branch deu erro/conflito e você quer descartar tudo e ficar idêntico ao professor
*(Para quem perdeu a aula, quebrou o código ou quer zerar o ambiente com o código oficial do professor)*

1. Acesse a sua branch:
```bash
git switch feature/exemplo-rmSeuRM
```

2. Baixe os dados atualizados:
```bash
git fetch origin
```

3. Force a sua branch a ficar exatamente igual à do professor:
```bash
git reset --hard origin/feature/exemplo-pf0670
```

> **Atenção:** O comando `git reset --hard` apaga qualquer alteração local não sincronizada e alinha tudo 100% com a branch do professor.

---

----
=============================
----

-------------------------------------------------------------------
INSTALANDO E CONFIGURANDO ROTAS NO PROJETO
-------------------------------------------------------------------
## 1. Instalar os pacotes

Execute no terminal:
```bash
npm install react-router
```
---

## 2. Criar a pasta de rotas

Crie a pasta `routes` dentro de `src`:

```text
src/
└── routes/
```
---

## 3. Criar os componentes de rota

Adote o seguinte padrão dentro de `src/routes`:
* O nome da subpasta será o nome do componente (ex: `/Produtos`);
* O arquivo do componente sempre se chamará `index.tsx`;
* A função exportada terá o mesmo nome da subpasta: `export default function NomeDaPasta() { ... }`.

Rotas a serem criadas:
* `src/routes/Home/index.tsx`
* `src/routes/Produtos/index.tsx`
* `src/routes/EditarProdutos/index.tsx`
* `src/routes/Error/index.tsx`

---

## 4 e 5. Importar recursos no `main.tsx`

No arquivo `src/main.tsx`, importe os componentes criados e os utilitários de roteamento:

```tsx
import { createBrowserRouter, RouterProvider } from 'react-router'

import App from './App'
import Home from './routes/Home'
import Produtos from './routes/Produtos'
import EditarProdutos from './routes/EditarProdutos'
import Error from './routes/Error'
```

---

## 6. Configurar a árvore de rotas

Defina a constante `router` utilizando `createBrowserRouter`:

```tsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Error />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/produtos', element: <Produtos /> },
      { path: '/editar-produtos', element: <EditarProdutos /> }
    ]
  }
])
```

---

## 7. Atualizar a renderização no `main.tsx`

Substitua `<App />` diretamente por `<RouterProvider router={router} />`:

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
)
```

---

## 8. Ajustar o layout no `App.tsx`

No componente `App.tsx`, substitua o conteúdo estático pelo componente `<Outlet />`:

```tsx
import { Outlet } from 'react-router'
import Cabecalho from './components/Cabecalho'
import Rodape from './components/Rodape'

export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  )
}
```

---

## 9. Testar rotas no navegador

Acesse diretamente pela URL para validar a navegação:
* `http://localhost:5173/`
* `http://localhost:5173/produtos`
* `http://localhost:5173/editar-produtos`

> **Nota:** O cabeçalho e o rodapé permanecem estáticos na tela; apenas a área do `<Outlet />` é atualizada.

---

## 10. Criar o componente `<Menu />`

Crie o componente de navegação usando `<Link>` e insira-o dentro do `<Cabecalho />`:

```tsx
import { Link } from 'react-router'

export default function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/produtos">Produtos</Link></li>
        <li><Link to="/editar-produtos">Editar Produtos</Link></li>
      </ul>
    </nav>
  )
}
```




# useEffect: O hook que controla a rerenderização!!

Neste guia, vamos aprender como reagir a mudanças no seu projeto utilizando ganchos (**Hooks**):

* **O que é o `useEffect`?**  
  O `useEffect` é um hook nativo do React que atua como um observador. Ele serve para disparar ações secundárias (efeitos colaterais) sempre que algo muda ou quando um componente precisa se re-renderizar, sem interferir diretamente no fluxo visual da tela.

* **O que é o `useLocation`?**  
  O `useLocation` também é um hook, mas fornecido pelo `react-router`. Ele atua como uma antena que lê em tempo real os dados da URL atual da aplicação (caminho, parâmetros e estado).

Ao juntar os dois, criamos uma rotina automática que reage toda vez que o usuário navega por uma rota.

---

### Passo 1: Criar o Componente Observador de Rota

Crie o arquivo `src/components/ObservadorDeRota.tsx`:

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ObservadorDeRota() {
  const location = useLocation();

  useEffect(() => {
    // 1. Exibe a rota acessada no console
    console.log(`Rota acessada: ${location.pathname}`);

    // 2. Altera o título da aba do navegador
    document.title = `Aplicação | ${location.pathname}`;

    // 3. Rola a visualização de volta ao topo
    window.scrollTo(0, 0);

  }, [location]); // Dependência que dispara o hook

  return null;
}
```

> **Explicação do Passo 1:**
> * `useLocation()`: Ativa a leitura do endereço da aplicação e guarda em `location`.
> * `useEffect(..., [location])`: O hook fica vigiando o valor de `location`. Se ele mudar, o código dentro da função roda imediatamente.
> * `return null`: O componente executa apenas tarefas de lógica e não adiciona elementos visuais ao HTML.

---

### Passo 2: Importar e Adicionar no `App.tsx`

Abra o arquivo `src/App.tsx` e coloque o observador no topo da estrutura:

```tsx
import { Outlet } from 'react-router';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import ObservadorDeRota from './components/ObservadorDeRota';

export default function App() {
  return (
    <>
      <ObservadorDeRota />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  );
}
```

----
=============================
----


# useEffect: O hook que controla a rerenderização!!

Neste guia, vamos aprender como reagir a mudanças no seu projeto utilizando ganchos (**Hooks**):

* **O que é o `useEffect`?**  
  O `useEffect` é um hook nativo do React que atua como um observador. Ele serve para disparar ações secundárias (efeitos colaterais) sempre que algo muda ou quando um componente precisa se re-renderizar, sem interferir diretamente no fluxo visual da tela.

* **O que é o `useLocation`?**  
  O `useLocation` também é um hook, mas fornecido pelo `react-router`. Ele atua como uma antena que lê em tempo real os dados da URL atual da aplicação (caminho, parâmetros e estado).

Ao juntar os dois, criamos uma rotina automática que reage toda vez que o usuário navega por uma rota.

---

### Passo 1: Criar o Componente Observador de Rota

Crie o arquivo `src/components/ObservadorDeRota.tsx`:

```tsx
import { useEffect } from 'react';
import { useLocation } from 'react-router';

export default function ObservadorDeRota() {
  const location = useLocation();

  useEffect(() => {
    // 1. Exibe a rota acessada no console
    console.log(`Rota acessada: ${location.pathname}`);

    // 2. Altera o título da aba do navegador
    document.title = `Aplicação | ${location.pathname}`;

    // 3. Rola a visualização de volta ao topo
    window.scrollTo(0, 0);

  }, [location]); // Dependência que dispara o hook

  return null;
}
```

> **Explicação do Passo 1:**
> * `useLocation()`: Ativa a leitura do endereço da aplicação e guarda em `location`.
> * `useEffect(..., [location])`: O hook fica vigiando o valor de `location`. Se ele mudar, o código dentro da função roda imediatamente.
> * `return null`: O componente executa apenas tarefas de lógica e não adiciona elementos visuais ao HTML.

---

### Passo 2: Importar e Adicionar no `App.tsx`

Abra o arquivo `src/App.tsx` e coloque o observador no topo da estrutura:

```tsx
import { Outlet } from 'react-router';
import Cabecalho from './components/Cabecalho';
import Rodape from './components/Rodape';
import ObservadorDeRota from './components/ObservadorDeRota';

export default function App() {
  return (
    <>
      <ObservadorDeRota />
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  );
}
```

> **Explicação do Passo 2:**
> * Colocar o `<ObservadorDeRota />` dentro de `App.tsx` garante que o monitoramento fique ativo em toda a aplicação.
> * O `<Outlet />` continua cuidando da troca das páginas filhas enquanto o observador atua em segundo plano.

---

### Passo 3: Por que o Observador Funciona se o `App` não Muda?

> **Explicação do Passo 3:**
> 1. O `<RouterProvider>` compartilha o estado da rota com toda a árvore via Context API do React.
> 2. O hook `useLocation` conecta o `ObservadorDeRota` diretamente a esse canal.
> 3. Quando a rota muda, o React não precisa recarregar o `<App />` inteiro: ele atualiza apenas os componentes que usam hooks inscritos nessa alteração, re-executando o `useEffect`.

---

### Passo 4: Testar no Navegador

Execute `npm run dev` e valide o fluxo:

1. Abra o navegador e o console (`F12`).
2. Clique nos links do menu para alternar entre as rotas.
3. Verifique o console exibindo o novo caminho e a aba do navegador alterando o texto.

> **Explicação do Passo 4:**
> Esse teste confirma que o hook `useEffect` identificou a alteração disparada pelo `useLocation` e concluiu as ações com sucesso.


----
=============================
----

# Aula — 3 de setembro de 2026
# Exercício — Lâmpada: variável comum versus `useState`

## Objetivo

Neste exercício, você criará duas lâmpadas:

1. Uma controlada por uma variável comum;
2. Outra controlada pelo Hook `useState`.

O objetivo é observar que uma variável comum pode mudar na memória, mas não atualiza automaticamente a interface. O `useState`, além de guardar o valor, solicita uma nova renderização do componente.

> **Hook** é uma função especial do React. O `useState` permite criar e atualizar o estado de um componente.

---

## Resultado esperado

A página deverá apresentar duas seções:

* Lâmpada controlada por variável comum;
* Lâmpada controlada por `useState`.

Ao clicar no primeiro botão, o valor será alterado somente no console.

Ao clicar no segundo botão, a imagem deverá alternar entre:

* Lâmpada acesa;
* Lâmpada apagada.

---

## 1. Organizar as imagens

Coloque as duas imagens dentro da pasta `public/images`:

```text
public/
└── images/
    ├── lampada-acesa.png
    └── lampada-apagada.png
```

Os arquivos da pasta `public` podem ser acessados diretamente pelo navegador.

Exemplo:

```tsx
<img src="/images/lampada-acesa.png" alt="Lâmpada acesa" />
```

---

## 2. Criar o componente

Crie a seguinte estrutura:

```text
src/
└── components/
    └── Lampada/
        └── index.tsx
```

No arquivo `src/components/Lampada/index.tsx`, comece com:

```tsx
import { useState } from 'react'

export default function Lampada() {
  // Variável comum.
  // Ela pode mudar, mas não atualiza a interface.
  let lampadaComumAcesa = false

  // Estado controlado pelo React.
  // false: lâmpada apagada.
  // true: lâmpada acesa.
  const [lampadaStateAcesa, setLampadaStateAcesa] =
    useState(false)

  function alternarVariavelComum() {
    // Inverte o valor da variável comum.
    lampadaComumAcesa = !lampadaComumAcesa

    // O novo valor poderá ser observado no console.
    console.log('Variável comum:', lampadaComumAcesa)
  }

  function alternarUseState() {
    // TODO:
    // Utilize setLampadaStateAcesa para inverter
    // o valor atual do estado.
  }

  return (
    <main>
      <h1>Variável comum versus useState</h1>

      <section>
        <h2>Lâmpada com variável comum</h2>

        <p>
          Estado:
          {lampadaComumAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={
            lampadaComumAcesa
              ? '/images/lampada-acesa.png'
              : '/images/lampada-apagada.png'
          }
          alt={
            lampadaComumAcesa
              ? 'Lâmpada controlada por variável comum acesa'
              : 'Lâmpada controlada por variável comum apagada'
          }
          width="250"
        />

        <div>
          <button
            onClick={alternarVariavelComum}
            type="button"
          >
            Alternar variável comum
          </button>
        </div>

        <p>
          Observe o console depois de pressionar o botão.
        </p>
      </section>

      <hr />

      <section>
        <h2>Lâmpada com useState</h2>

        <p>
          Estado:
          {lampadaStateAcesa ? ' acesa' : ' apagada'}
        </p>

        <img
          src={
            lampadaStateAcesa
              ? '/images/lampada-acesa.png'
              : '/images/lampada-apagada.png'
          }
          alt={
            lampadaStateAcesa
              ? 'Lâmpada controlada pelo useState acesa'
              : 'Lâmpada controlada pelo useState apagada'
          }
          width="250"
        />

        <div>
          <button
            aria-pressed={lampadaStateAcesa}
            onClick={alternarUseState}
            type="button"
          >
            {lampadaStateAcesa
              ? 'Apagar lâmpada'
              : 'Acender lâmpada'}
          </button>
        </div>
      </section>
    </main>
  )
}
```

---

## 3. Completar a função do `useState`

Dentro da função `alternarUseState`, utilize a função responsável por atualizar o estado:

```tsx
function alternarUseState() {
  setLampadaStateAcesa(
    (estadoAtual) => !estadoAtual,
  )
}
```

O símbolo `!` significa **negação**. Neste exemplo, ele inverte o valor:

```text
false → true
true  → false
```

---

## 4. Utilizar o componente no App

Abra o arquivo `src/App.tsx` e importe o componente:

```tsx
import Lampada from './components/Lampada'

export default function App() {
  return <Lampada />
}
```

---

## 5. Executar o projeto

No terminal, execute:

```bash
npm run dev
```

Abra o endereço apresentado pelo Vite no navegador.

---

## 6. Testar a variável comum

1. Abra o console do navegador;
2. Pressione o botão **Alternar variável comum**;
3. Observe os valores apresentados no console;
4. Confira se a imagem foi alterada na página.

O valor da variável mudará no console, mas a imagem continuará apagada.

Isso acontece porque uma variável comum não informa ao React que a interface precisa ser renderizada novamente.

---

## 7. Testar o `useState`

Pressione o botão da segunda lâmpada.

O comportamento esperado será:

```text
Clique no botão
      ↓
O estado é invertido
      ↓
O React renderiza o componente novamente
      ↓
A imagem e o texto são atualizados
```

A cada clique, a lâmpada deverá alternar entre acesa e apagada.

---

## Entendendo a operação ternária

A imagem é escolhida por uma operação ternária:

```tsx
lampadaStateAcesa
  ? '/images/lampada-acesa.png'
  : '/images/lampada-apagada.png'
```

A estrutura de uma operação ternária é:

```text
condição ? valor verdadeiro : valor falso
```

Portanto:

```text
lampadaStateAcesa === true
→ mostra lampada-acesa.png

lampadaStateAcesa === false
→ mostra lampada-apagada.png
```

---

## Requisitos obrigatórios

* [ ] Criar o componente `Lampada`;
* [ ] Importar `useState`;
* [ ] Criar uma variável comum;
* [ ] Criar um estado com `useState`;
* [ ] Utilizar as imagens acesa e apagada;
* [ ] Utilizar uma operação ternária;
* [ ] Criar um botão para cada exemplo;
* [ ] Alterar o texto do botão do `useState`;
* [ ] Utilizar textos alternativos no atributo `alt`;
* [ ] Não utilizar CSS;
* [ ] Não utilizar Tailwind CSS;
* [ ] Testar o resultado no navegador;
* [ ] Verificar a variável comum no console.

---

## Perguntas para responder

1. Por que a variável comum não atualiza a imagem na página?
2. O que a função `setLampadaStateAcesa` faz?
3. O que o símbolo `!` faz com um valor booleano?
4. Qual é a função da operação ternária?
5. O que acontece quando o estado é atualizado?
6. Por que utilizamos dois arquivos de imagem?
7. Qual é a diferença entre `lampadaStateAcesa` e `setLampadaStateAcesa`?

> **Valor booleano** é um valor que possui somente duas possibilidades: `true`, que significa verdadeiro, ou `false`, que significa falso.

---

## Desafio

Depois de concluir o exercício:

1. Faça a lâmpada começar acesa;
2. Adicione um título diferente para cada estado;
3. Mostre a mensagem `Economize energia!` quando a lâmpada estiver acesa;
4. Mostre a mensagem `A lâmpada está descansando.` quando ela estiver apagada;
5. Crie um segundo componente utilizando o mesmo conceito.

---

## Registrar a atividade no Git

Confira as alterações:

```bash
git status
```

Adicione os arquivos:

```bash
git add .
```

Crie o commit:

```bash
git commit -m "feat: adiciona exercício da lâmpada com useState"
```

Publique as alterações:

```bash
git push
```

git push
```
