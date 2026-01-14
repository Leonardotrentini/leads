# 🚀 Guia de Deploy - VESTO Landing Page

## Passo 1: Fazer Commit e Push para GitHub

Execute os seguintes comandos no PowerShell:

```powershell
cd "C:\Users\Leonardo trentini\Desktop\pagina-leads-vesto"

# Inicializar Git (se ainda não foi feito)
git init

# Adicionar todos os arquivos
git add .

# Fazer commit
git commit -m "Initial commit - Landing page VESTO otimizada para Vercel"

# Conectar ao repositório remoto
git remote add origin https://github.com/Leonardotrentini/leads.git

# Mudar para branch main
git branch -M main

# Fazer push
git push -u origin main
```

**Nota:** Se o repositório já tiver conteúdo, use:
```powershell
git push -u origin main --force
```

## Passo 2: Deploy na Vercel

### Opção A: Via Interface Web (Mais Fácil)

1. Acesse [vercel.com](https://vercel.com)
2. Faça login com sua conta GitHub
3. Clique em **"Add New Project"**
4. Selecione o repositório `Leonardotrentini/leads`
5. A Vercel detectará automaticamente:
   - Framework: **Other** (site estático)
   - Build Command: (nenhum necessário)
   - Output Directory: `.` (raiz)
6. Clique em **"Deploy"**
7. Aguarde ~30 segundos
8. Pronto! Você receberá uma URL como: `https://leads-xxxxx.vercel.app`

### Opção B: Via CLI

```powershell
# Instalar Vercel CLI (se ainda não tiver)
npm i -g vercel

# Fazer deploy
cd "C:\Users\Leonardo trentini\Desktop\pagina-leads-vesto"
vercel

# Seguir as instruções no terminal
# Para produção:
vercel --prod
```

## Passo 3: Configurar Domínio Customizado (Opcional)

1. Na dashboard da Vercel, vá em **Settings** > **Domains**
2. Adicione seu domínio (ex: `vesto.com.br`)
3. Configure os DNS conforme instruções da Vercel
4. Aguarde a propagação (pode levar até 24h)

## ✅ Verificações Pós-Deploy

- [ ] Página carrega corretamente
- [ ] Formulário envia dados para Google Sheets
- [ ] UTM parameters estão sendo capturados
- [ ] Vídeos do YouTube estão carregando
- [ ] Design responsivo funciona em mobile
- [ ] Performance está otimizada (verificar no Lighthouse)

## 🔧 Configurações Aplicadas

O projeto já está configurado com:
- ✅ `vercel.json` com headers de segurança e cache
- ✅ `.gitignore` para ignorar arquivos desnecessários
- ✅ Otimizações de performance
- ✅ CDN global automático

## 📊 Monitoramento

Após o deploy, você pode monitorar:
- **Analytics**: Na dashboard da Vercel
- **Performance**: Use Google PageSpeed Insights
- **Leads**: Verifique a planilha do Google Sheets

---

**Pronto para deploy!** 🎯
