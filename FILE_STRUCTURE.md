# 📁 Estrutura Completa de Arquivos - EduEvents

## 🌳 Árvore de Arquivos

```
MFE/
│
├── 📄 README.md                          ← Documentação principal
├── 📄 QUICK_START.md                     ← Guia rápido para rodar
├── 📄 IMPLEMENTATION_SUMMARY.md           ← Este arquivo (resumo)
├── 📄 .env.example                       ← Template de variáveis
├── 📄 .gitignore                         ← Configuração Git
├── 📄 setup.ps1                          ← Setup script (Windows)
├── 📄 setup.sh                           ← Setup script (Linux/Mac)
│
├── 📁 host/                              ← HOST (App Shell)
│   ├── 📄 package.json
│   ├── 📄 vite.config.ts
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 index.html
│   ├── 📁 node_modules/                  ← Instalado
│   ├── 📁 dist/                          ← Build output
│   └── 📁 src/
│       ├── 📄 main.tsx
│       ├── 📄 App.tsx
│       ├── 📄 index.css
│       ├── 📁 types/
│       │   └── 📄 index.ts               ← User, Role, AuthState
│       ├── 📁 context/
│       │   └── 📄 AuthContext.tsx        ← JWT + userState
│       ├── 📁 hooks/
│       │   └── 📄 useAuth.ts
│       └── 📁 components/
│           ├── 📄 Layout.tsx
│           ├── 📄 Navigation.tsx         ← Sidebar + Header
│           ├── 📄 AuthGuard.tsx          ← RBAC
│           └── 📄 MFEContainer.tsx       ← Module Federation loader
│
├── 📁 mfe-inscriptions/                  ← MFE 1: Ingressos
│   ├── 📄 package.json                   ← Inclui jsPDF, html2canvas
│   ├── 📄 vite.config.ts
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 index.html
│   ├── 📁 node_modules/                  ← Instalado
│   ├── 📁 dist/                          ← Build output
│   └── 📁 src/
│       ├── 📄 main.tsx
│       ├── 📄 App.tsx                    ← Root com navegação interna
│       ├── 📄 index.css
│       ├── 📁 mocks/
│       │   └── 📄 registrationData.ts    ← Tickets, Coupons, Transactions
│       ├── 📁 hooks/
│       │   └── 📄 useRegistrations.ts    ← Cart logic
│       └── 📁 pages/
│           ├── 📄 DashboardPage.tsx      ← Ingressos + histórico
│           └── 📄 CheckoutPage.tsx       ← 4-step checkout flow
│
├── 📁 mfe-scientific/                    ← MFE 2: Submissões
│   ├── 📄 package.json                   ← Inclui jsPDF
│   ├── 📄 vite.config.ts
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 index.html
│   ├── 📁 node_modules/                  ← Instalado
│   ├── 📁 dist/                          ← Build output
│   └── 📁 src/
│       ├── 📄 main.tsx
│       ├── 📄 App.tsx
│       ├── 📄 index.css
│       ├── 📁 mocks/
│       │   └── 📄 scientificData.ts      ← Papers, Reviews, Areas
│       ├── 📁 utils/
│       │   └── 📄 pdfGenerator.ts        ← jsPDF certificates
│       └── 📁 pages/
│           ├── 📄 DashboardPage.tsx      ← Artigos + avaliações + aprovados
│           └── 📄 SubmitPage.tsx         ← Formulário upload
│
├── 📁 mfe-schedule/                      ← MFE 3: Agenda
│   ├── 📄 package.json
│   ├── 📄 vite.config.ts
│   ├── 📄 tsconfig.json
│   ├── 📄 tsconfig.node.json
│   ├── 📄 tailwind.config.js
│   ├── 📄 postcss.config.js
│   ├── 📄 index.html
│   ├── 📁 node_modules/                  ← Instalado
│   ├── 📁 dist/                          ← Build output
│   └── 📁 src/
│       ├── 📄 main.tsx
│       ├── 📄 App.tsx
│       ├── 📄 index.css
│       ├── 📁 mocks/
│       │   └── 📄 scheduleData.ts        ← Talks, Speakers, Rooms
│       ├── 📁 hooks/
│       │   └── 📄 useFavorites.ts        ← localStorage para ⭐
│       └── 📁 pages/
│           ├── 📄 DashboardPage.tsx      ← Palestras agrupadas
│           └── 📄 SpeakersPage.tsx       ← Bio dos palestrantes
│
└── 📁 shared/                            ← (Preparado para componentes reutilizáveis)
    ├── 📄 package.json
    └── 📁 src/
        ├── 📁 components/                ← Buttons, Cards, etc
        ├── 📁 types/                     ← User, Submission, etc
        └── 📁 utils/                     ← Helpers, validation
```

## 📊 Resumo de Arquivos por Tipo

### TypeScript/TSX (Lógica)
- **host/src**: 5 arquivos
- **mfe-inscriptions/src**: 5 arquivos
- **mfe-scientific/src**: 5 arquivos
- **mfe-schedule/src**: 5 arquivos
- **Total**: 20 arquivos TSX

### Configuração (Config)
- **Cada projeto**: vite.config.ts, tsconfig.json, tailwind.config.js, postcss.config.js
- **Total**: 4 × 4 = 16 arquivos

### Package Management
- **package.json**: 4 (host + 3 MFEs)
- **package-lock.json**: 4 (automático após npm install)

### Documentação
- README.md
- QUICK_START.md
- IMPLEMENTATION_SUMMARY.md
- .env.example
- setup.ps1, setup.sh
- **Total**: 6 arquivos

### Build/Output (após npm run build)
- **dist/**: Criado automaticamente em cada projeto
- **node_modules/**: Criado automaticamente (~500MB)

---

## 🎯 Caminho para Cada Funcionalidade

### 1. Autenticação
```
host/src/context/AuthContext.tsx     ← Provider
host/src/hooks/useAuth.ts            ← Hook
host/src/components/AuthGuard.tsx    ← Proteção
host/src/App.tsx                     ← LoginPage
```

### 2. Ingressos e Checkout
```
mfe-inscriptions/src/pages/DashboardPage.tsx
mfe-inscriptions/src/pages/CheckoutPage.tsx
mfe-inscriptions/src/mocks/registrationData.ts
```

### 3. Submissão de Artigos
```
mfe-scientific/src/pages/SubmitPage.tsx
mfe-scientific/src/pages/DashboardPage.tsx
mfe-scientific/src/mocks/scientificData.ts
```

### 4. Geração de Certificados
```
mfe-scientific/src/utils/pdfGenerator.ts
```

### 5. Agenda e Palestras
```
mfe-schedule/src/pages/DashboardPage.tsx
mfe-schedule/src/pages/SpeakersPage.tsx
mfe-schedule/src/mocks/scheduleData.ts
```

### 6. Favoritos
```
mfe-schedule/src/hooks/useFavorites.ts
```

---

## 🔗 Integração entre Projetos

```
HOST (5173)
├── remoteEntry.js (expõe: useAuth, AuthContext)
│
├─ MFE-1 (5174)
│   ├── remoteEntry.js (expõe: ./App)
│   ├── import { useAuth } from host
│   └── src/App.tsx
│
├─ MFE-2 (5175)
│   ├── remoteEntry.js (expõe: ./App)
│   ├── import { useAuth } from host
│   └── src/App.tsx + utils/pdfGenerator.ts
│
└─ MFE-3 (5176)
    ├── remoteEntry.js (expõe: ./App)
    ├── import { useAuth } from host
    └── src/App.tsx + hooks/useFavorites.ts
```

---

## 💾 Tamanho Total

| Componente | Tamanho |
|---|---|
| Código-fonte (src/) | ~300 KB |
| node_modules (antes build) | ~500 MB |
| dist/ (produção, minificado) | ~400 KB total (4 bundles) |

---

## 📦 Como Adicionar Novo Arquivo

### Novo Componente em um MFE
```bash
# Exemplo: novo componente em inscriptions
./mfe-inscriptions/src/components/NewComponent.tsx
```

### Nova Página
```bash
# Exemplo: nova página em schedule
./mfe-schedule/src/pages/NewPage.tsx
```

### Novo Hook
```bash
# Exemplo: novo hook em scientific
./mfe-scientific/src/hooks/useNewHook.ts
```

### Novo serviço de API futura
```bash
# Quando integrar com backend
./mfe-inscriptions/src/services/api.ts
```

---

## 🚀 Checklist de Desenvolvimento

Ao adicionar features:

- [ ] Crie arquivo em pasta apropriada
- [ ] Use TypeScript (não `any`)
- [ ] Exporte types em `types/` se necessário
- [ ] Use Tailwind para styling (não CSS manual)
- [ ] Update mock data se necessário
- [ ] Teste no seu MFE localmente
- [ ] Se compartilhar, mova para `shared/`

---

Última atualização: 30 de março de 2026
