# EcoTrip 🌱 [^1]

**EcoTrip** é uma pequena aplicação que calcula a emissão de CO₂ de viagens com base na distância, tipo de transporte e número de passageiros. A interface é simples (frontend estático) e o backend fornece uma API REST em **Node.js + Express** e grava os registros em **SQLite**.

---

## Funcionalidades ✅

- Calcular CO₂ por viagem (kg) por passageiro
- Classificação de impacto (baixo / médio / alto)
- Armazenamento das viagens em banco SQLite (`ecotrip.db`)
- Frontend simples (HTML/CSS/JS) que consome a API

---

## Tecnologias 🧰

- Backend: Node.js, Express, sqlite3
- Frontend: HTML, CSS, JavaScript
- Server: roda em `http://localhost:3000` por padrão

---

## Porque escolhi Node.js + Express ao invés de Flask 💡

- **Uma linguagem no projeto inteiro:** usar JavaScript no frontend e backend acelera o desenvolvimento e reduz a quantidade de context-switch entre linguagens.
- **I/O não bloqueante:** Node.js é eficiente para I/O/requests simples e rápidos (como esta API), facilitando alta concorrência com baixo overhead.
- **Ecosistema e rapidez de protótipo:** o ecossistema npm e a leveza do Express permitem criar uma API mínima muito rápido.

Observação: **Flask** é uma excelente alternativa (microframework Python) — ótimo para quem prefere Python ou precisa de ecossistema científico. A escolha foi mais produtiva para este projeto porque eu já estava focando em JavaScript no frontend e queria agilidade na entrega.

---

## Como rodar localmente 🚀

1. Clone o repositório:

```bash
git clone <repo-url>
cd EcoTrip
```

2. Backend:

```bash
cd backend
npm install
npm start
```

O servidor estará disponível em `http://localhost:3000`.

3. Frontend:

- Abra `frontend/index.html` diretamente no navegador (recomendado usar Live Server em VS Code) ou sirva-o com um servidor estático (ex.: `npx http-server frontend -p 8080`).

> O frontend faz uma requisição POST para `http://localhost:3000/api/calculate`.

---

## Endpoints 📡

- POST `/api/calculate`
  - Body (JSON): `{ "distance": number, "passengers": number, "transport": "car"|"bus"|"plane" }`
  - Response (JSON): `{ "co2": number, "impact": "baixo"|"medio"|"alto", "suggestion": string }`

Exemplo usando `curl`:

```bash
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"distance":100,"passengers":1,"transport":"car"}'
```

---

## Banco de dados 🗄️

O backend usa SQLite e cria `ecotrip.db` automaticamente na raiz do backend. A tabela usada é `trips` com as colunas `transport`, `distance`, `passengers`, `co2` e `created_at`.

---

## Dicas de Debug 🔍

- Se o frontend não mostrar o resultado, abra o DevTools (F12) e veja o console para erros ou logs.
- Veja se a API está rodando em `localhost:3000` e que o `CORS` está habilitado (o backend já ativa `cors()` por padrão).

---

## Contribuições 🤝

PRs são bem-vindas! Sinta-se à vontade para abrir issues ou sugerir melhorias (ex.: melhorar UX, adicionar testes, adicionar autenticação, etc.).

[^1]: Projeto simple com base nas aulas do Expert Pablo Lopes (DIO). Projeto ainda pode ser melhorias.
