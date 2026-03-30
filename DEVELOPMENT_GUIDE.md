# 💡 Guia de Desenvolvimento - EduEvents

## 🛠️ Setup do Ambiente

### Visual Studio Code (Recomendado)
Extensões sugeridas:
- **ES7+ React/Redux/React-Native snippets** (dsznajder.es7-react-js-snippets)
- **Tailwind CSS IntelliSense** (bradlc.vscode-tailwindcss)
- **TypeScript Vue Plugin** (Vue.volar) - se trabalhar com Vue
- **Thunder Client** ou **REST Client** - testar APIs
- **Prettier** (Code formatter)

### Git Workflow Sugerido
```bash
# Clonar
git clone <repo>
cd MFE

# Criar branch para feature
git checkout -b feature/nome-da-feature

# Fazer commits pequenos
git add .
git commit -m "feat: descrição curta"

# Push
git push origin feature/nome-da-feature

# Abrir PR no GitHub
```

---

## 📝 Padrões de Código

### Nomeação de Arquivos
```typescript
// ✅ Certo
MyComponent.tsx          // Componentes React
useMyHook.ts             // Hooks customizados
myService.ts             // Serviços
types.ts ou index.ts     // Types
myFunction.ts            // Funções

// ❌ Errado
MyComponent.ts           // TypeScript sem JSX
myComponent.tsx          // lowercase para componentes
use-my-hook.ts           // kebab-case
```

### Estrutura de Componentes
```typescript
// ✅ Bom padrão
import React, { useState } from 'react'

interface ComponentProps {
  title: string
  onClose: () => void
  children?: React.ReactNode
}

export const MyComponent: React.FC<ComponentProps> = ({
  title,
  onClose,
  children,
}) => {
  const [state, setState] = useState(false)

  return (
    <div className="...">
      {/* JSX */}
    </div>
  )
}

// ❌ Evitar
function MyComponent(props) {
  return <div>{props.children}</div>
}
```

### Imports/Exports
```typescript
// ✅ Certo
export const MyFunction = () => {}
export type MyType = { ... }
export default App

// ❌ Evitar
export function MyFunction() {}
export interface MyInterface { ... }
module.exports = App
```

### Tailwind Classes
```typescript
// ✅ Certo
className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-blue-700"

// ❌ Evitar
className="p-2 m-2 bg-blue-500 text-white" // Sem hover states
style={{ padding: '10px' }}                   // Inline styles
```

---

## 🔄 Fluxo de Dados

### Hierarquia de Estado
```
1. localStorage      ← Persistência (favoritos, token, user)
2. Context API       ← Estado compartilhado (auth)
3. Component State   ← Estado local (forms, toggles)
4. servidor          ← Source of truth (futuro)
```

### Padrão de Hook + Context
```typescript
// ✅ Correto
export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth deve estar dentro de AuthProvider')
  }
  return context
}

// Uso
const { isAuthenticated, user } = useAuth()
```

### localStorage (para dados simples)
```typescript
// Salvar
localStorage.setItem('key', JSON.stringify(value))

// Carregar
const stored = localStorage.getItem('key')
const value = stored ? JSON.parse(stored) : null

// Deletar
localStorage.removeItem('key')
```

---

## 🐛 Troubleshooting Comum

### Problema: "Cannot find module 'react'"
**Solução**:
```bash
cd projeto/
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Problema: "Tailwind não funciona"
**Checklist**:
1. ✅ `index.css` importa `@tailwind`?
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

2. ✅ `tailwind.config.js` tem content correto?
   ```js
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}']
   ```

3. ✅ `main.tsx` importa `./index.css`?
   ```typescript
   import './index.css'
   ```

4. ✅ Reiniciou Vite com Ctrl+C e `npm run dev`?

### Problema: "MFE não carrega (localhost:xxxx refused)"
**Debug**:
```bash
# 1. Confirme que todos os 4 terminais estão rodando
# Terminal 1: host (5173)
# Terminal 2: mfe-inscriptions (5174)
# Terminal 3: mfe-scientific (5175)
# Terminal 4: mfe-schedule (5176)

# 2. Abra DevTools (F12) → Console
# Procure por CORS errors

# 3. Verifique vite.config.ts
server: {
  cors: true,  // ← IMPORTANTE
}

# 4. Acesse http://localhost:5173/assets/remoteEntry.js
# Se 404, MFE não compilou corretamente
```

### Problema: "localhost:5173 vazio/branco"
**Debug**:
1. Abra DevTools (F12)
2. Console tab - procure por erros em vermelho
3. Network tab - procure por status 404
4. Verifique se todos os MFEs estão rodando

### Problema: "TypeError: Cannot read property 'xxx' of null"
**Provável**: Está usando hook fora do provider
```typescript
// ❌ Errado
useAuth() // fora de AuthProvider

// ✅ Correto
<AuthProvider>
  <Component />  <!-- useAuth aqui funciona -->
</AuthProvider>
```

### Problema: "npm ERR! code ERESOLVE"
**Solução**:
```bash
npm install --legacy-peer-deps
```

---

## 📊 Performance Tips

### 1. Lazy Load de MFEs
Já implementado! Via `<Suspense>` no MFEContainer.

### 2. Code Splitting
Vite faz automaticamente. Nada a fazer.

### 3. Otimizar Imagens
```typescript
// ✅ Use URLs (não import)
img src="https://api.dicebear.com/7.x/avataaars/svg?seed=email"

// ❌ Evite
import image from '../image.png'
```

### 4. Memoization
```typescript
// Se renderiza frequentemente
const MemoComponent = React.memo(Component)

// Para callbacks pesados
const handleClick = useCallback(() => { ... }, [dep])
```

---

## 🧪 Testando Localmente

### Testar User Flow - Inscriptions
1. Login com `author@eduevents.com`
2. Navegue para "Ingressos"
3. Selecione um ingresso → Checkout
4. Preencha os campos
5. Aplique cupom `ESTUDANTE20` → -20%
6. Simule pagamento

### Testar User Flow - Scientific
1. Login com `author@eduevents.com`
2. Navegue para "Submissões"
3. Envie um artigo (preencha form + upload PDF mock)
4. Veja em "Dashboard" o artigo listado

### Testar User Flow - Schedule
1. Login com qualquer conta
2. Navegue para "Agenda"
3. Marque palestras como ⭐ favorito
4. Refreche a página (F5) → Favoritos persistem!

### Testar Auth
1. Faça logout (menu usuário)
2. Tente acessar `localhost:5173/inscriptions`
3. Deve redirecionar para login
4. Login com outro usuário → role diferente

---

## 📚 Recursos de Aprendizado

### React
- [Documentação oficial](https://react.dev)
- [React Router](https://reactrouter.com)
- [Hooks Deep Dive](https://react.dev/reference/react)

### Tailwind
- [Tailwind UI Components](https://tailwindui.com)
- [Tailwind Color Palette](https://tailwindcss.com/docs/colors)
- [Responsive Design](https://tailwindcss.com/docs/theme)

### Vite
- [Vite Docs](https://vitejs.dev)
- [Module Federation](https://webpack.js.org/concepts/module-federation/)

### TypeScript
- [Handbook](https://www.typescriptlang.org/docs/)
- [Advanced Types](https://www.typescriptlang.org/docs/handbook/2/types-from-types.html)

---

## 🚀 Deploy Checklist

Antes de fazer push:

- [ ] `npm run build` sem erros
- [ ] Sem `console.log` em produção
- [ ] Sem `any` types descobertos
- [ ] Sem imports desnecessários
- [ ] Responsivo testado (mobile + tablet)
- [ ] AuthContext funciona sem localhost
- [ ] Sem secrets em código (.env só!)
- [ ] README atualizado

---

## 🔒 Security Best Practices

### ✅ Fazer
- Usar HTTPS em produção
- Validar inputs do usuário
- Usar environment variables para secrets
- Never store password plaintext
- Implementar CSP headers

### ❌ Evitar
- Expor API keys no frontend (usar backend proxy)
- Confiar apenas em JWT (validar no backend)
- Usar `eval()` ou `innerHTML` com user input
- Deixar console.log com dados sensíveis

---

## 🎓 Boas Práticas Dos Projetos

1. **Separação de responsabilidades** - Cada arquivo tem um propósito
2. **Single Responsibility** - Uma função = uma coisa
3. **DRY** - Don't Repeat Yourself
4. **KISS** - Keep It Simple, Stupid
5. **Priorize readability** - Código claro > código "clever"

---

## 📞 Suporte / Dúvidas

Se travar em algo:

1. **Leia a mensagem de erro** - 90% traz a solução
2. **Procure na aba Console** (DevTools F12)
3. **Veja o código-comentado** nos arquivos
4. **Consulte README.md** da raiz
5. **Google the error message** - Alguém já teve este problema

---

Última atualização: 30 de março de 2026

Boa sorte! 🚀
