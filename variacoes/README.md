# 📋 Guia de Variações - Páginas de Teste A/B

## 🎯 Estrutura

```
variacoes/
├── v2.html          # Variação 2 (cópia isolada do original)
├── v3.html          # Variação 3 (criar quando necessário)
└── README.md        # Este arquivo
```

---

## ✅ Como Funciona

### **Isolamento Total**

Cada variação é **100% independente**:
- ✅ Código próprio e completo
- ✅ Mesma integração com Google Sheets
- ✅ Mesmo Meta Pixel
- ✅ Identificação automática no Google Sheets

### **Identificação Automática**

Todas as variações enviam automaticamente um parâmetro `variacao` para o Google Sheets:
- **Original** (`index.html`): não envia parâmetro `variacao`
- **V2** (`variacoes/v2.html`): envia `variacao=v2`
- **V3** (`variacoes/v3.html`): envia `variacao=v3`

Isso permite comparar resultados no Google Sheets filtrando pela coluna `variacao`.

---

## 🛠️ Como Trabalhar na V2

### **1. Abrir o Arquivo**

```
variacoes/v2.html
```

### **2. Fazer Alterações**

Você pode alterar **QUALQUER COISA** na V2 sem afetar o original:
- ✅ Textos (headlines, copy, CTAs)
- ✅ Formulário (campos, opções)
- ✅ Cores e estilos
- ✅ Seções (adicionar, remover, reordenar)
- ✅ Imagens e vídeos
- ✅ JavaScript e funcionalidades

### **3. Testar Localmente**

**Opção 1: Abrir direto no navegador**
```
C:\Users\Leonardo trentini\Desktop\pagina-leads-vesto\variacoes\v2.html
```

**Opção 2: Servidor local (recomendado)**
```powershell
# Na pasta raiz do projeto
python -m http.server 8000
# Depois acesse: http://localhost:8000/variacoes/v2.html
```

### **4. Deploy**

**Opção A: Mesmo projeto Vercel (rotas)**
- Configure `vercel.json` para rotas:
  - `/` → `index.html` (original)
  - `/v2` → `variacoes/v2.html`

**Opção B: Projetos separados**
- Crie um novo projeto no Vercel
- Faça deploy apenas da pasta `variacoes/`

---

## 📊 Tracking e Análise

### **No Google Sheets**

Todas as variações salvam no **mesmo Google Sheets**, mas com identificação:

| Nome | WhatsApp | Variacao | utm_campaign |
|------|----------|----------|--------------|
| João | (11) 99999-9999 | v2 | campanha_teste |
| Maria | (11) 88888-8888 | (vazio) | campanha_teste |

**Filtrar por variação:**
1. Abra o Google Sheets
2. Filtre a coluna `variacao`
3. Compare resultados

### **UTMs Recomendadas**

Use UTMs diferentes para cada variação:

**Original:**
```
?utm_source=facebook&utm_medium=cpc&utm_campaign=teste&utm_content=original
```

**V2:**
```
?utm_source=facebook&utm_medium=cpc&utm_campaign=teste&utm_content=v2
```

**V3:**
```
?utm_source=facebook&utm_medium=cpc&utm_campaign=teste&utm_content=v3
```

---

## 🎨 Exemplos de Variações para Testar

### **V2 - Formulário Simplificado**
- Remover campos: "Marca/Instagram"
- Manter apenas: Nome, WhatsApp, Faturamento

### **V3 - Copy Urgente**
- Adicionar contador de vagas
- Texto: "Últimas 3 vagas disponíveis"
- CTA: "Garantir Minha Vaga Agora"

### **V4 - Social Proof**
- Adicionar depoimentos acima do formulário
- Números: "+50 marcas escalaram"
- Badge: "Última vaga preenchida há 2h"

### **V5 - Headline Diferente**
- Testar: "De operar para escalar: o ponto que falta"
- Testar: "Sua marca já vende. Agora precisa escalar."

---

## ⚠️ Importante

### **NÃO altere:**
- ❌ `index.html` (original) - mantenha intacto
- ❌ `GOOGLE_SCRIPT_URL` - use o mesmo de todas as variações
- ❌ Meta Pixel ID - use o mesmo

### **PODE alterar:**
- ✅ Qualquer coisa dentro de `variacoes/v2.html`
- ✅ Título da página (`<title>`)
- ✅ Textos, cores, layout
- ✅ Estrutura do formulário
- ✅ JavaScript (desde que mantenha a função `submitToGoogleSheets`)

---

## 🔧 Criar Nova Variação

1. **Copie a V2:**
   ```powershell
   copy variacoes\v2.html variacoes\v3.html
   ```

2. **Edite o identificador:**
   No arquivo `v3.html`, procure:
   ```javascript
   utmParams['variacao'] = 'v2';
   ```
   E altere para:
   ```javascript
   utmParams['variacao'] = 'v3';
   ```

3. **Altere o título:**
   ```html
   <title>VESTO co. - Variação V3</title>
   ```

4. **Faça suas alterações!**

---

## 📝 Checklist Antes de Deploy

- [ ] Variação identificada corretamente (`variacao=v2`)
- [ ] Formulário funcionando
- [ ] Google Sheets recebendo dados
- [ ] Meta Pixel disparando Lead
- [ ] Testado localmente
- [ ] UTMs configuradas no Facebook Ads

---

## 🚀 Próximos Passos

1. **Edite `variacoes/v2.html`** com suas alterações
2. **Teste localmente** antes de fazer deploy
3. **Configure UTMs** no Facebook Ads para diferenciar
4. **Compare resultados** no Google Sheets
5. **Escale a vencedora** quando tiver dados suficientes

---

**Última atualização**: 2025-01-15
