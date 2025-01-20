# NodeApp

## Deploy

### Install dependencies

```sh
npm install
```

On first deploy copy .env.example to .env and custimize environment variables

```sh
cp .env.example .env
```

You can run next command to empty the database and create initial data:

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

### Agent list

GET /api/agents

```json
{
    "results": [
        {
            "_id": "67606e86a195b1ecf0e0a122",
            "name": "Smith",
            "age": 31,
            "owner": "67606e86a195b1ecf0e0a11c",
            "__v": 0
        },
        // ...
    ],
    "count": 5
}
```