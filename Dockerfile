# Stage 1: Build
FROM node:20.15.1-alpine AS builder

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala todas as dependências (incluindo devDependencies para o build)
RUN npm install

# Copia o restante do projeto
COPY . .

# Compila o TypeScript
RUN npm run build

# Stage 2: Production
FROM node:20.15.1-alpine

WORKDIR /app

COPY package*.json ./

# Instala apenas dependências de produção para deixar a imagem mais leve
RUN npm install --only=production

# Copia apenas o build do stage anterior
COPY --from=builder /app/dist ./dist

EXPOSE 8097

CMD ["node", "dist/main.js"]
