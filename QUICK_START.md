# 🚀 Quick Start - EduEvents

## Dependências Instaladas ✅

Todos os projetos já estão com `npm install` concluído!

## Iniciar a Aplicação

### Opção 1: Terminals Separados (Recomendado)

Abra 4 terminais PowerShell/Bash e execute em cada um:

**Terminal 1 - HOST (porta 5173)**
```powershell
cd host
npm run dev
```

**Terminal 2 - MFE Inscriptions (porta 5174)**
```powershell
cd mfe-inscriptions
npm run dev
```

**Terminal 3 - MFE Scientific (porta 5175)**
```powershell
cd mfe-scientific
npm run dev
```

**Terminal 4 - MFE Schedule (porta 5176)**
```powershell
cd mfe-schedule
npm run dev
```

### Opção 2: Terminal Único (macOS/Linux)

```bash
./start-all.sh
```

(Script de conveniência - crie se necessário)

## Acessar a Aplicação

Após todos os 4 servidores iniciarem, abra seu navegador:

```
http://localhost:5173
```

## 🔐 Contas de Login (Demo)

| Email | Role | Função |
|-------|------|--------|
| `admin@eduevents.com` | Admin | Acesso completo |
| `reviewer@eduevents.com` | Reviewer | Avaliador científico |
| `author@eduevents.com` | Author | Autor de artigos |

**Senha**: `password123` (qualquer string)

## ⚠️ Portas Esperadas

- **5173**: Host (App Shell) ← Acesse aqui!
- **5174**: MFE Inscriptions
- **5175**: MFE Scientific
- **5176**: MFE Schedule

Se alguma porta estiver em uso, Vite te pedirá para escolher outra.

## 🧹 Build para Produção

```bash
# Cada projeto
cd host && npm run build
cd mfe-inscriptions && npm run build
cd mfe-scientific && npm run build
cd mfe-schedule && npm run build

# Output em: dist/
```

## 🐛 Troubleshooting

### "Cannot find module..."
```bash
# Delete node_modules and reinstall
rm -r node_modules
npm install
```

### "CORS error" ou "localhost:xxxx refused to connect"
- Certifique-se que TODOS os 4 terminais estão rodando
- Verifique a ordem: HOST primeiro, depois os MFEs

### "Module Federation not working"
- Verifique `vite.config.ts` em cada projeto
- Confirme que `cors: true` está ativo na seção `server`

## 📋 Estrutura de Pastas (para referência)

```
MFE/
├── host/                    # App Shell principal
├── mfe-inscriptions/        # Módulo de Ingressos
├── mfe-scientific/          # Módulo de Submissões
├── mfe-schedule/            # Módulo de Agenda
└── README.md                # Documentação completa
```

## 🎯 Funcionalidades Implementadas

✅ **Autenticação centralizada** com JWT mock e roles (Admin, Reviewer, Author)
✅ **3 Microfrontends independentes** totalmente funcionais:
   - Compra de ingressos e checkout
   - Submissão de artigos e painel de revisão
   - Agenda com palestras e palestrantes

✅ **Module Federation** para integração em runtime
✅ **Tailwind CSS** para estilização consistente
✅ **TypeScript** para type safety
✅ **Mock data** pronto para trocar com API real
✅ **Favoritos baseado em localStorage**
✅ **Geração de PDF** de certificados (jsPDF)

## 📚 Próximos Passos

1. Explore a interface e teste os workflows
2. Estude o código em `src/` para entender a arquitetura
3. Implemente endpoints de API conforme necessário
4. Adicione testes automatizados (vitest + Playwright)
5. Configure CI/CD (GitHub Actions)

## 📖 Documentação

Veja `README.md` para documentação completa sobre:
- Arquitetura detalhada
- Estrutura de cada MFE
- Como integrar com backend
- Boas práticas
- Próximos passos (roadmap)

---

**Status**: ✅ Pronto para desenvolvimento!

Aproveite! 🎉
