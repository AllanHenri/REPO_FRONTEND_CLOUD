# EduEvents - Plataforma de Microfrontends Acadêmicos

Plataforma integrada de gerenciamento de congressos acadêmicos utilizando **arquitetura de microfrontends** com React, Vite, Tailwind CSS e Module Federation.

## 🎯 Visão Geral

**EduEvents** centraliza em uma única interface modular:
- 💳 **Gestão de Inscrições** (Domínio Financeiro)
- 📚 **Submissão de Artigos e Revisão Científica** (Domínio Científico)
- 📅 **Programação e Agenda de Eventos** (Domínio de Conteúdo)

## 🏗️ Arquitetura

```
┌─────────────────────────────────────────────────────────┐
│ HOST (App Shell) - Porta 5173                          │
│ ├─ Navigation + Layout                                 │
│ ├─ AuthContext (JWT + Roles)                          │
│ └─ MFE Container                                       │
└─────────────────────────────────────────────────────────┘
          ↓              ↓              ↓
┌──────────────┐  ┌──────────────┐  ┌──────────────┐
│ MFE-Inscr.  │  │ MFE-Scientific│  │ MFE-Schedule │
│ Porta 5174  │  │  Porta 5175   │  │  Porta 5176  │
└──────────────┘  └──────────────┘  └──────────────┘
```

### Padrão de Integração: Module Federation

Cada MFE é uma aplicação **independente** que expõe seus componentes e é carregada dinamicamente pelo host em runtime.

## 📦 Estrutura de Projetos

```
MFE/
├── host/                               # App Shell
├── mfe-inscriptions/                   # MFE 1: Ingressos e Pagamento
├── mfe-scientific/                     # MFE 2: Submissões Científicas
├── mfe-schedule/                       # MFE 3: Agenda e Programação
└── shared/                             # (Preparado) Componentes reutilizáveis
```

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ e npm/yarn
- Git

### 1. Clone e Setup

```bash
# Instale dependências do Host
cd host
npm install

# Instale dependências do MFE Inscriptions
cd ../mfe-inscriptions
npm install

# Instale dependências do MFE Scientific
cd ../mfe-scientific
npm install

# Instale dependências do MFE Schedule
cd ../mfe-schedule
npm install
```

### 2. Inicie os Servidores (em terminais separados)

```bash
# Terminal 1: Host
cd host
npm run dev
# → http://localhost:5173

# Terminal 2: MFE Inscriptions
cd mfe-inscriptions
npm run dev
# → http://localhost:5174

# Terminal 3: MFE Scientific
cd mfe-scientific
npm run dev
# → http://localhost:5175

# Terminal 4: MFE Schedule
cd mfe-schedule
npm run dev
# → http://localhost:5176
```

### 3. Acesse a Aplicação

Abra seu navegador e vá para:
```
http://localhost:5173
```

## 🔐 Login (Demo)

Use uma das contas de demo disponíveis na página de login:

| Email | Role | Acesso |
|-------|------|--------|
| `admin@eduevents.com` | Admin | Todos os módulos |
| `reviewer@eduevents.com` | Reviewer | Módulo científico (revisão) |
| `author@eduevents.com` | Author | Todos os módulos |

**Senha (qualquer uma)**: `password123`

## 📋 Estrutura de Cada Projeto

### Host (`/host`)
- **Responsabilidade**: Navegação, autenticação, layout compartilhado
- **Arquivos principais**:
  - `src/context/AuthContext.tsx` - Provider de autenticação
  - `src/components/Navigation.tsx` - Barra lateral e header
  - `src/components/MFEContainer.tsx` - Loader dinâmico de MFEs
  - `vite.config.ts` - Config de Module Federation

### MFE Inscriptions (`/mfe-inscriptions`)
- **Responsabilidade**: Gestão de ingressos, checkout, histórico
- **Páginas**:
  - Dashboard - Ingressos disponíveis
  - Checkout - Fluxo de compra (simulado)
- **Mock Data**: `src/mocks/registrationData.ts`

### MFE Scientific (`/mfe-scientific`)
- **Responsabilidade**: Submissão de artigos, avaliação, certificados
- **Páginas**:
  - Dashboard - Artigos submetidos e avaliações
  - Submit - Formulário de envio
- **Funcionalidade**: Geração de PDF de certificados (jsPDF)
- **Mock Data**: `src/mocks/scientificData.ts`

### MFE Schedule (`/mfe-schedule`)
- **Responsabilidade**: Cronograma, palestrantes, favoritos
- **Páginas**:
  - Dashboard - Palestras agrupadas por data
  - Speakers - Detalhes dos palestrantes
  - Favorites - Palestras marcadas com ⭐
- **Persistência**: Favoritos salvos em localStorage
- **Mock Data**: `src/mocks/scheduleData.ts`

## 🛠️ Tecnologias

| Tecnologia | Versão | Propósito |
|---|---|---|
| React | 18.2 | Framework UI |
| Vite | 5.0 | Build tool (HMR super rápido) |
| Module Federation | via @originjs | Carregamento dinâmico de MFEs |
| Tailwind CSS | 3.3 | Estilização utilitária |
| TypeScript | 5.3 | Type safety |
| Axios | 1.6 | HTTP requests (pronto para API) |
| jsPDF | 2.5 | Geração de certificados |

## 🎨 Design System

### Cores Primárias
- **Primary**: `#3B82F6` (Azul)
- **Secondary**: `#8B5CF6` (Roxo)
- **Accent**: `#EC4899` (Rosa)
- **Success**: `#10B981` (Verde)
- **Warning**: `#F59E0B` (Amarelo)
- **Danger**: `#EF4444` (Vermelho)

Definido em `tailwind.config.js` (todos os projetos usam a mesma paleta)

## 📝 Autenticação e Autorização

### Contexto Centralizado (Host)
```typescript
interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  token: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
}

interface User {
  id: string
  name: string
  email: string
  role: 'Admin' | 'Author' | 'Reviewer' | 'Guest'
  avatar: string
}
```

- **Token**: JWT simulado, armazenado em `localStorage`
- **Roles**: Determinam acesso aos MFEs
- **AuthGuard**: Componente que valida roles

## 🔄 Fluxo de Integração com Backend

Atualmente, o sistema usa **mock data** para demonstração. Para integrar com um backend real:

### 1. APIs Esperadas (sugestão)

```bash
# Inscrições
POST /api/inscriptions/register
POST /api/inscriptions/checkout
GET /api/inscriptions/history

# Submissões
POST /api/submissions
GET /api/submissions/:id
POST /api/submissions/:id/reviews

# Agenda
GET /api/schedule/talks
GET /api/schedule/speakers
POST /api/schedule/favorites
```

### 2. Trocar Mock Data

Substitua chamadas em `src/mocks/` por `axios`:

```typescript
// Antes (mock)
import { mockTickets } from '../mocks/registrationData'

// Depois (API)
const response = await axios.get('http://api.eduevents.com/tickets')
const tickets = response.data
```

## 📦 Build e Deploy

### Build Individual
```bash
# Cada projeto compila independentemente
cd host
npm run build

cd ../mfe-inscriptions
npm run build

# ... (repita para os outros MFEs)
```

### Build Simultâneo (script sugerido)
```bash
# Crie um script root na raiz (MFE/)
# deploy.sh ou deploy.ps1
```

## 🧪 Testes (Estrutura Preparada)

Cada projeto inclui:
- **vitest** para unit tests
- **@testing-library/react** para componentes
- **(Opcional) Playwright** para E2E

Estrutura de pastas:
```
src/
├── __tests__/      # Testes unitários
└── pages/
    ├── __e2e__/    # Testes E2E
```

## 🐛 Troubleshooting

### MFE não carrega
1. Verifique se o MFE está rodando na porta correta
2. Abra DevTools → Console, procure por erros de CORS
3. Verifique `vite.config.ts` → `cors: true`

### Erro de CORS
```typescript
// vite.config.ts
server: {
  cors: true,  // ✓ Importante para Module Federation
}
```

### Tailwind CSS não aplica
- Verifique se `index.css` importa `@tailwind`
- Confirme que `tailwind.config.js` está correto
- Limpe o cache: `npm run dev` (Vite HMR funciona bem)

## 📚 Boas Práticas Implementadas

✅ **Separação de responsabilidades** - Cada MFE tem um domínio bem definido
✅ **Isolamento de estado** - Cada MFE gerencia seu próprio estado
✅ **Lazy loading** - MFEs carregam sob demanda
✅ **Type safety** - TypeScript obrigatório
✅ **Consistent styling** - Tailwind CSS compartilhado
✅ **Mock data preparada** - Pronto para trocar por API
✅ **Autenticação centralizada** - Host cuida de auth e rules
✅ **Responsive design** - Mobile-first com Tailwind

## 🚀 Próximas Fases (Roadmap)

- [ ] **Fase 1**: Setup ✅ (concluído)
- [ ] **Fase 2**: Integração com backend REST/GraphQL
- [ ] **Fase 3**: Testes automatizados (Vitest + Playwright)
- [ ] **Fase 4**: CI/CD (GitHub Actions)
- [ ] **Fase 5**: Docker + Kubernetes
- [ ] **Fase 6**: Monitoramento e analytics
- [ ] **Fase 7**: i18n (Internacionalização)

## 📖 Documentação Adicional

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Module Federation Docs](https://webpack.js.org/concepts/module-federation/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

## 📄 Licença

MIT License - Você é livre para usar, modificar e distribuir

## 👨‍💻 Contribuições

Para contribuir:
1. Faça um fork
2. Crie uma branch (`git checkout -b feature/sua-feature`)
3. Commit suas mudanças (`git commit -m 'Adiciona feature X'`)
4. Push para a branch (`git push origin feature/sua-feature`)
5. Abra um Pull Request

## 📧 Suporte

Para dúvidas ou sugestões, abra uma issue no repositório.

---

**Desenvolvido com ❤️ para plataformas acadêmicas** | 2026
