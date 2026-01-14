# VESTO - Página de Captação de Leads

Landing page de alta performance para captação de leads da VESTO co.

## 🚀 Deploy na Vercel

### Opção 1: Deploy via GitHub (Recomendado)

1. **Faça push do código para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Landing page VESTO"
   git branch -M main
   git remote add origin https://github.com/Leonardotrentini/leads.git
   git push -u origin main
   ```

2. **Conecte na Vercel:**
   - Acesse [vercel.com](https://vercel.com)
   - Faça login com GitHub
   - Clique em "Add New Project"
   - Importe o repositório `Leonardotrentini/leads`
   - A Vercel detectará automaticamente as configurações
   - Clique em "Deploy"

### Opção 2: Deploy via Vercel CLI

```bash
npm i -g vercel
vercel
```

## 📋 Funcionalidades

- ✅ Formulário de captação de leads
- ✅ Integração com Google Sheets
- ✅ Rastreamento de UTM parameters
- ✅ Design responsivo e otimizado
- ✅ Performance otimizada para Core Web Vitals
- ✅ SEO friendly

## 🔧 Configuração

### Google Sheets Integration

O formulário está configurado para enviar dados para:
- **Google Apps Script URL**: Configurado no `index.html`
- **Planilha**: Google Sheets configurada via Apps Script

Para mais detalhes, consulte `INSTRUCOES_GOOGLE_SHEETS.md`

## 📁 Estrutura do Projeto

```
├── index.html              # Página principal
├── vercel.json             # Configurações Vercel
├── .gitignore              # Arquivos ignorados pelo Git
├── README.md               # Este arquivo
├── google-apps-script.js   # Script para Google Apps Script
└── docs/
    ├── INSTRUCOES_GOOGLE_SHEETS.md
    ├── CONFIGURACAO_RAPIDA.md
    └── CHECKPOINT_PROJETO.md
```

## 🌐 URLs

Após o deploy, você receberá uma URL como:
- `https://leads-xxxxx.vercel.app`
- Ou pode configurar um domínio customizado

## ⚡ Performance

O projeto está otimizado para:
- ✅ Carregamento rápido (< 2s)
- ✅ Core Web Vitals otimizados
- ✅ CDN global (Vercel Edge Network)
- ✅ Cache otimizado

## 📝 Notas

- O projeto usa Tailwind CSS via CDN
- Imagens hospedadas externamente (i.ibb.co)
- YouTube embeds para vídeos de resultados

---

**Desenvolvido para VESTO co.** 🎯
