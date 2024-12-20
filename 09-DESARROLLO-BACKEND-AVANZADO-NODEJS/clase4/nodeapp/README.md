# NodeApp

## Deploy

### Install dependencies

```sh
npm install
```

On first deploy rename the .env.example to .env and edit the environment variables

```sh
cp .env.example .env
```

On first deploy you can run next command to empty the database and create initial data:

```js
npm run initDB
```

## Start

To start in production mode:

```sh
npm start
```

To start in development mode:

```sh
npm run dev
```

## API

Base URL: http://localhost:3000/api

### Agents list

GET /api/agents
/api/agents?limit=1&fields=name

```json
{
  "agents": [
    {
      "_id": "6723fea874e30150278c363b",
      "name": "Smith"
    }
  ],
  "count": 5
}
```
