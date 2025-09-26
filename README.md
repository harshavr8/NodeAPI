# Node API Tutorial Project

This repository contains a simple Node + Express API that follows the tutorial from:
https://github.com/aschneider15/CSC560-Rewrite/blob/master/Node%20API/Creating%20API.md

## What's included
- `index.js` — Express server with an in-memory `books` resource and full CRUD:
  - GET /api/books
  - GET /api/books/:id
  - POST /api/books
  - PATCH /api/books/:id
  - DELETE /api/books/:id

## Run locally
1. Install dependencies:
```bash
npm install
```
2. Start server:
```bash
npm start
```
Server runs on port 3000 by default.

## Git / GitHub
Create a GitHub repo, then:
```bash
git init
git add .
git commit -m "Initial commit - Node API tutorial"
git remote add origin https://github.com/<your-username>/<repo-name>.git
git branch -M main
git push -u origin main
```

## Postman requests
A Postman collection file is included (`postman_collection.json`). Import it into Postman.  
Make requests to `http://localhost:3000`.

### Required screenshots
Use Postman to make one GET, one POST, one PATCH and one DELETE request. Capture screenshots and include them in your assignment submission.

## Notes
- This implementation uses an in-memory array for simplicity as in the tutorial.
- If you prefer persistence, swap in a JSON file or a database.
