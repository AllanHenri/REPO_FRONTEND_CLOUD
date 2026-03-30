# 📚 Índice de Documentação - EduEvents

Bem-vindo ao **EduEvents** - Plataforma de Microfrontends para Gerenciamento de Congressos Acadêmicos!

Este é o índice completo de toda a documentação do projeto. Use este arquivo como guia para navegar pelos outros documentos.

---

## 🎯 Comece Aqui

### 1️⃣ **Primeira Vez? Leia Isto:**
- **[QUICK_START.md](QUICK_START.md)** ← START AQUI!
  - ✅ Como instalar dependências
  - ✅ Como rodar os servidores
  - ✅ Como fazer login
  - ⏱️ 5 minutos para estar rodando

### 2️⃣ **Entender o Projeto:**
- **[README.md](README.md)** - Documentação principal completa
  - Visão geral do projeto
  - Arquitetura detalhada
  - Tecnologias usadas
  - Instruções de setup
  - Como integrar com backend
  - Boas práticas

---

## 📖 Documentação por Tópico

### 🏗️ Arquitetura & Estrutura
| Arquivo | Conteúdo | Quando ler |
|---------|----------|-----------|
| [README.md](README.md) | Arquitetura detalhada | Primeira vez |
| [FILE_STRUCTURE.md](FILE_STRUCTURE.md) | Árvore de pastas completa | Navegação do projeto |
| [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md) | O que foi implementado | Visão geral do MVP |

### 🚀 Como Usar
| Arquivo | Conteúdo | Quando ler |
|---------|----------|-----------|
| [QUICK_START.md](QUICK_START.md) | Começar em 5 min | PRIMEIRA VEZ |
| [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md) | Padrões de código & troubleshooting | Antes de codificar |
| [ROADMAP.md](ROADMAP.md) | Futuras fases e features | Planejamento |

### 📋 Configuração
| Arquivo | Conteúdo | Quando usar |
|---------|----------|-----------|
| [.env.example](.env.example) | Template de variáveis | Configurar ambiente |
| [.gitignore](.gitignore) | Arquivos ignorados por Git | Git commits |
| [setup.ps1](setup.ps1) | Setup automático (Windows) | Instalação |
| [setup.sh](setup.sh) | Setup automático (Unix/Linux) | Instalação |

---

## 🎓 Guias de Desenvolvimento

### Iniciante
1. Leia: [QUICK_START.md](QUICK_START.md)
2. Rode: `npm run dev` em todos os projetos
3. Explore: Interface do browser
4. Leia: [README.md](README.md) - seção "Estrutura de Cada Projeto"

### Intermediário
1. Leia: [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)
2. Estude: Código-fonte em `src/`
3. Modifique: Alguma página existente
4. Submita: PR com mudança simples

### Avançado
1. Leia: [ROADMAP.md](ROADMAP.md)
2. Entenda: Como integrar backend
3. Implemente: Fase 2 (Backend Integration)
4. Deploy: Usando Docker + CI/CD

---

## 🔍 Buscar Solução Rápida

### "Como...?"

**Como rodar o projeto?**
→ [QUICK_START.md - Iniciar a Aplicação](QUICK_START.md#iniciar-a-aplicação)

**Como fazer login?**
→ [QUICK_START.md - Contas de Login](QUICK_START.md#-contas-de-login-demo)

**Como entender a arquitetura?**
→ [README.md - Arquitetura Proposta](README.md#-arquitetura-proposta)

**Como adicionar uma feature?**
→ [DEVELOPMENT_GUIDE.md - Padrões de Código](DEVELOPMENT_GUIDE.md#-padrões-de-código)

**Como debugar um problema?**
→ [DEVELOPMENT_GUIDE.md - Troubleshooting](DEVELOPMENT_GUIDE.md#-troubleshooting-comum)

**Como integrar com backend?**
→ [README.md - Fluxo de Integração com Backend](README.md#-fluxo-de-integração-com-backend)

**Como fazer deploy?**
→ [ROADMAP.md - Fase 4 DevOps](ROADMAP.md#-fase-4---devops--deploy-q3-2026)

**Qual é a estrutura de arquivos?**
→ [FILE_STRUCTURE.md](FILE_STRUCTURE.md)

**O que foi implementado exatamente?**
→ [IMPLEMENTATION_SUMMARY.md](IMPLEMENTATION_SUMMARY.md)

---

## 📁 Estrutura de Arquivos

```
MFE/
├── 📖 README.md                    ← Documentação principal
├── 📖 QUICK_START.md               ← COMECE AQUI!
├── 📖 IMPLEMENTATION_SUMMARY.md     ← O que foi feito
├── 📖 FILE_STRUCTURE.md            ← Árvore de pastas
├── 📖 DEVELOPMENT_GUIDE.md         ← Como desenvolver
├── 📖 ROADMAP.md                   ← Futuro do projeto
├── 📖 INDEX.md                     ← Este arquivo
├── 🔧 .env.example
├── 🔧 .gitignore
├── 🔧 setup.ps1
├── 🔧 setup.sh
├── 📁 host/                        ← App Shell
├── 📁 mfe-inscriptions/            ← MFE 1: Ingressos
├── 📁 mfe-scientific/              ← MFE 2: Submissões
├── 📁 mfe-schedule/                ← MFE 3: Agenda
└── 📁 shared/                      ← Componentes compartilhados
```

---

## 🎯 Roadmap de Leitura Recomendado

### Dia 1 (Setup)
- [ ] Ler [QUICK_START.md](QUICK_START.md)
- [ ] Rodar `npm run dev` em todos os projetos
- [ ] Fazer login e explorar a interface
- [ ] Testar as 3 funcionalidades principais

### Dia 2 (Entendimento)
- [ ] Ler [README.md](README.md) - seções 1-5
- [ ] Ler [FILE_STRUCTURE.md](FILE_STRUCTURE.md)
- [ ] Explorar código em `host/src/` (AuthContext)
- [ ] Explorar código em `mfe-inscriptions/src/`

### Dia 3 (Desenvolvimento)
- [ ] Ler [DEVELOPMENT_GUIDE.md](DEVELOPMENT_GUIDE.md)
- [ ] Fazer uma pequena mudança em um componente
- [ ] Testar localmente
- [ ] Estudar como Mock Data funciona

### Dia 4+ (Avançado)
- [ ] Ler [ROADMAP.md](ROADMAP.md)
- [ ] Planejar Fase 2 (Backend Integration)
- [ ] Estudar código de Module Federation
- [ ] Começar desenvolvimento de features

---

## 🔗 Referências Rápidas

### Documentação Externa
- [React.dev](https://react.dev) - Documentação React
- [tailwindcss.com](https://tailwindcss.com) - Tailwind CSS
- [vitejs.dev](https://vitejs.dev) - Vite documentation
- [typescriptlang.org](https://www.typescriptlang.org) - TypeScript

### Tools Úteis
- [VS Code](https://code.visualstudio.com) - IDE recomendada
- [Postman](https://postman.com) - Testar APIs
- [DevTools](https://developer.chrome.com/docs/devtools/) - Browser debugging

### Community
- [React Discord](https://discord.com/invite/react)
- [Vite Discord](https://discord.gg/vite)
- [Tailwind Discord](https://discord.gg/7NF8agS)

---

## 🆘 Precisa de Ajuda?

### Erro ao rodar?
1. Veja [QUICK_START.md - Troubleshooting](QUICK_START.md#troubleshooting)
2. Veja [DEVELOPMENT_GUIDE.md - Troubleshooting Comum](DEVELOPMENT_GUIDE.md#-troubleshooting-comum)

### Dúvida sobre código?
1. Procure em [FILE_STRUCTURE.md](FILE_STRUCTURE.md) - "Caminho para Cada Funcionalidade"
2. Leia o código-comentado nos arquivos
3. Consulte [README.md - Estrutura de Cada Projeto](README.md#-estrutura-de-cada-projeto)

### Quer desenvolver uma feature?
1. Leia [DEVELOPMENT_GUIDE.md - Padrões de Código](DEVELOPMENT_GUIDE.md#-padrões-de-código)
2. Clone [FILE_STRUCTURE.md](FILE_STRUCTURE.md) - "Como Adicionar Novo Arquivo"
3. Faça a mudança
4. Teste localmente

### Quer fazer deploy?
1. Leia [ROADMAP.md - Fase 4 DevOps](ROADMAP.md#-fase-4---devops--deploy-q3-2026)

---

## 📊 Checkpoints

Use este checklist para acompanhar seu progresso:

### Setup Completo
- [ ] Todos os `npm install` rodaram sem erro
- [ ] `npm run dev` funciona em todos os 4 projetos
- [ ] Consigo acessar `http://localhost:5173`
- [ ] Consigo fazer login com uma conta demo

### Entendi a Arquitetura
- [ ] Consigo explicar o que é Module Federation
- [ ] Consigo apontar os 3 MFEs na interface
- [ ] Consigo encontrar o AuthContext
- [ ] Consigo entender o fluxo de dados

### Estou desenvolvendo features
- [ ] Consigo criar um novo componente
- [ ] Consigo usar hooks do projeto
- [ ] Consigo fazer uma mudança sem quebrar nada
- [ ] Consigo debugar com DevTools

---

## 📝 Convenções do Project

### Nomeação
- Componentes: `PascalCase` (MyComponent.tsx)
- Hooks: `camelCase` com prefixo `use` (useAuth.ts)
- Pastas: `lowercase` (components/, pages/, mocks/)
- Tipos: `PascalCase` (User, AuthContext, MyInterface)

### Arquitetura
- Cada MFE é **independente**
- Host é **minimalista** (só navigation + auth)
- State é **centralizado** no Host (context API)
- Dados são **mockados** até integrar com backend

### Padrões
- Componentes são **functional** (não class components)
- Usamos **hooks** (não redux, não mobx)
- Estilo com **Tailwind** (não CSS manual)
- Setup com **TypeScript** (strict mode)

---

## 🎓 Matérias de Estudo

Se não tiver experiência anterior, recomendo estudar:

### Essencial
- [ ] React Hooks (useState, useContext, useCallback)
- [ ] Conditional Rendering
- [ ] Props e prop drilling
- [ ] Event handling

### Importante
- [ ] Context API
- [ ] localStorage
- [ ] async/await
- [ ] Module Federation (opcional, mas bom saber)

### Avançado
- [ ] Custom Hooks patterns
- [ ] Performance optimization
- [ ] Error boundaries
- [ ] Suspense + lazy loading

---

## 🎁 Bônus

### Scripts Úteis
```bash
# Rodar tudo de uma vez (você provavelmente quer 4 terminais)
cd host && npm run dev &
cd mfe-inscriptions && npm run dev &
cd mfe-scientific && npm run dev &
cd mfe-schedule && npm run dev &

# Build para produção
for project in host mfe-inscriptions mfe-scientific mfe-schedule; do
  cd $project
  npm run build
  cd ..
done
```

### Extensões VS Code Recomendadas
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- prettier
- Thunder Client (teste APIs)

---

## 📞 Contato / Suporte

Este projeto foi criado em 30 de março de 2026 como MVP educacional.

Para dúvidas:
1. Consulte a documentação acima
2. Procure no código-fonte (bem comentado)
3. Teste tudo localmente
4. Google o erro (sempre funciona!)

---

## ✨ Resumo em Uma Frase

**EduEvents** é uma plataforma de **microfrontends** educacional que demonstra arquitetura moderna com **React, Vite, Tailwind CSS e Module Federation**, totalmente pronta para aprender, modificar e estender.

---

**Última atualização**: 30 de março de 2026

**Versão**: 1.0.0 (MVP)

**Status**: ✅ Pronto para uso

---

## 🚀 Próximo Passo

👉 Vá para [QUICK_START.md](QUICK_START.md) e comece agora!
