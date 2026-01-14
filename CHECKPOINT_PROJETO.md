# ✅ CHECKPOINT - Projeto VESTO Landing Page

**Data do Checkpoint:** 14 de Janeiro de 2026  
**Status:** ✅ FUNCIONANDO - Integração Google Sheets ativa

---

## 📋 Informações da Integração

### Google Sheets
- **ID da Planilha:** `157kWNwSBfL9elfF5pHM-9mVwgHgnvPdorsCiTA6-qAU`
- **Link da Planilha:** https://docs.google.com/spreadsheets/d/157kWNwSBfL9elfF5pHM-9mVwgHgnvPdorsCiTA6-qAU/edit
- **Nome da Aba:** `leads`
- **Cabeçalhos da Planilha:**
  - Timestamp | Nome | WhatsApp | Marca/Instagram | Faturamento Mensal | Investimento Mensal
  - utm_source | utm_medium | utm_campaign | utm_term | utm_content | utm_id
  - utm_source_platform | utm_creative_format | utm_marketing_tactic
  - gclid | fbclid | ref | source | url_completa | user_agent

### Google Apps Script
- **URL do Web App:** `https://script.google.com/macros/s/AKfycbwdOefsZSNRyort_lt204O0ToTjhqcWFoLnvx1GfLryXgEknz_VCL62bXst072QSt1W/exec`
- **Código de Implantação:** `AKfycbwdOefsZSNRyort_lt204O0ToTjhqcWFoLnvx1GfLryXgEknz_VCL62bXst072QSt1W`
- **Configuração:**
  - Executar como: "Eu"
  - Quem tem acesso: "Qualquer pessoa"
  - Tipo: Aplicativo da Web

---

## 🎨 Estrutura da Landing Page

### Hero Section
- **Logo:** https://i.ibb.co/8nsvs7ng/Design-sem-nome-75.png
- **Imagem Hero:** https://i.ibb.co/zVYPQg56/Design-sem-nome-78.png
- **Headline:** "Existe um ponto entre operar e escalar"
  - Palavra "escalar" com gradiente dourado
- **Subheadline:** "Para operações de moda que já vendem, mas ainda não sustentam o próximo nível."
- **Tipografia Premium:**
  - Headline: Playfair Display, text-4xl (mobile), text-6xl (desktop)
  - Subheadline: Inter, text-base (mobile), text-xl (desktop)

### Formulário de Captura
- **Título:** "Aplicação para Consultoria"
- **Subtítulo:** "Vagas Limitadas"
- **Campos:**
  1. Nome Completo (obrigatório)
  2. WhatsApp (obrigatório, com máscara automática)
  3. Marca / Instagram (obrigatório)
  4. Faturamento Mensal (select):
     - Até 10k
     - 20 - 30k
     - 30 a 50k
     - 50k - 100k
     - 100k - 300k
     - Acima de 300k
  5. Investimento Mensal (select):
     - Menos de 1k
     - 1 - 3k
     - 3 - 5k
     - 5 - 8k
     - 8 - 10k
     - +10k

### Mensagens de Confirmação
- **Sucesso:** Card verde com ícone de check e mensagem "Enviado com sucesso!"
- **Erro:** Card vermelho com ícone de erro e mensagem de erro

---

## 🎨 Paleta de Cores

```css
primary: #C9A45C (Gold)
deep-green: #0B2B21 (Main Background)
card-green: #10372C (Form Card)
darker-green: #061A14 (Footer/Section alternate)
off-white: #F4F1EA (Main Text)
warm-grey: #D1CDC7 (Secondary Text)
```

---

## 📁 Arquivos do Projeto

### Arquivos Principais
- `index.html` - Landing page completa
- `google-apps-script.js` - Código do Apps Script (atualizado com novo ID)
- `CONFIGURACAO_RAPIDA.md` - Guia de configuração
- `INSTRUCOES_GOOGLE_SHEETS.md` - Instruções detalhadas

### Imagens Utilizadas
- Logo: https://i.ibb.co/8nsvs7ng/Design-sem-nome-75.png
- Hero Image: https://i.ibb.co/zVYPQg56/Design-sem-nome-78.png

---

## 🔧 Funcionalidades Implementadas

### ✅ Concluído
- [x] Design premium e responsivo
- [x] Hero section com tipografia refinada
- [x] Formulário de captura completo
- [x] Integração com Google Sheets
- [x] Captura automática de todos os parâmetros UTM
- [x] Mensagens de confirmação visual (sucesso/erro)
- [x] Máscara automática para WhatsApp
- [x] Validação de campos obrigatórios
- [x] Animações suaves de entrada
- [x] Gradiente dourado na palavra "escalar"

### 📊 Dados Capturados
Cada lead salva automaticamente:
- Dados do formulário (nome, WhatsApp, marca, faturamento, investimento)
- Todos os parâmetros UTM da URL
- URL completa de origem
- Timestamp do envio
- User Agent do navegador

---

## 🚀 Como Restaurar

### Se precisar restaurar a integração:
1. Abra o Google Apps Script da planilha
2. Cole o código do arquivo `google-apps-script.js`
3. Ajuste o `SPREADSHEET_ID` e `SHEET_NAME` se necessário
4. Publique como Web App (configuração: "Qualquer pessoa")
5. Copie a URL e atualize no `index.html` (linha ~458)

### Se precisar restaurar o formulário:
- Todos os IDs dos campos estão no `index.html`
- Formulário usa `id="leadForm"`
- Botão usa `id="submitBtn"`
- Mensagens: `id="successMessage"` e `id="errorMessage"`

---

## 📝 Notas Importantes

1. **Acesso ao Web App:** Deve estar configurado como "Qualquer pessoa" para funcionar
2. **Nome da Aba:** Verificar se é "leads" (minúsculo) ou "LEADS" (maiúsculo)
3. **CORS:** O envio usa form POST + iframe para evitar problemas de CORS
4. **Teste:** Sempre testar após mudanças no Apps Script

---

## 🔗 Links Importantes

- **Planilha:** https://docs.google.com/spreadsheets/d/157kWNwSBfL9elfF5pHM-9mVwgHgnvPdorsCiTA6-qAU/edit
- **Web App:** https://script.google.com/macros/s/AKfycbwdOefsZSNRyort_lt204O0ToTjhqcWFoLnvx1GfLryXgEknz_VCL62bXst072QSt1W/exec

---

**✅ Status Atual: TUDO FUNCIONANDO PERFEITAMENTE!**
