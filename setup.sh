#!/bin/bash

mkdir -p src/{config,controllers,dtos,factories,middlewares,models,repositories,services,routes,shared/errors}
mkdir -p src/repositories/{interfaces,implementations}
mkdir -p src/database/{migrations,seeds}

# .gitkeep
touch src/{config,controllers,dtos,factories,middlewares,models,repositories,services,routes,shared/errors}/.gitkeep
touch src/repositories/{interfaces,implementations}/.gitkeep
touch src/database/{migrations,seeds}/.gitkeep

# Main files
touch src/server.ts
touch src/app.ts

# 
touch .env
touch .env.example

echo "Estrutura de pastas criada com sucesso!"