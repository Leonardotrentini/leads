# 🚀 Configuração Rápida - Google Sheets VESTO

## ✅ Planilha já está pronta!
- **ID da Planilha**: `1qVabWwyOMXFlR0Yrr2tVbgkaoTDX6_QNV-SbSatrVZg`
- **Link**: https://docs.google.com/spreadsheets/d/1qVabWwyOMXFlR0Yrr2tVbgkaoTDX6_QNV-SbSatrVZg/edit
- **Cabeçalhos**: Já configurados corretamente ✅

## 📝 Passo a Passo (5 minutos)

### 1. Criar o Google Apps Script

1. **Abra sua planilha**: https://docs.google.com/spreadsheets/d/1qVabWwyOMXFlR0Yrr2tVbgkaoTDX6_QNV-SbSatrVZg/edit

2. **Vá em**: `Extensões` → `Apps Script`

3. **Delete todo o código padrão** e cole o código do arquivo `google-apps-script.js`

4. **Salve o projeto** (Ctrl+S ou Cmd+S)
   - Nome sugerido: "Captura Leads VESTO"

### 2. Publicar como Web App

1. No Apps Script, clique em **`Implantar`** → **`Nova implantação`**

2. Clique no ícone de **engrenagem ⚙️** ao lado de "Tipo"

3. Selecione **`Aplicativo da Web`**

4. Configure:
   - **Descrição**: "Captura de Leads VESTO"
   - **Executar como**: **"Eu"**
   - **Quem tem acesso**: **"Qualquer pessoa"** ⚠️ IMPORTANTE!

5. Clique em **`Implantar`**

6. **Na primeira vez**, você precisará autorizar:
   - Clique em **"Revisar permissões"**
   - Escolha sua conta Google
   - Clique em **"Avançado"** → **"Ir para Captura Leads VESTO (não seguro)"**
   - Clique em **"Permitir"**

7. **Copie a URL da Web App** (algo como: `https://script.google.com/macros/s/SEU_ID/exec`)

### 3. Conectar ao HTML

1. Abra o arquivo `index.html`

2. Procure por esta linha (por volta da linha 450):
   ```javascript
   const GOOGLE_SCRIPT_URL = 'COLE_AQUI_A_URL_DO_SEU_GOOGLE_APPS_SCRIPT';
   ```

3. **Substitua** `COLE_AQUI_A_URL_DO_SEU_GOOGLE_APPS_SCRIPT` pela URL que você copiou

4. Salve o arquivo

### 4. Testar! 🎉

1. Abra o `index.html` no navegador

2. Preencha o formulário com dados de teste

3. Clique em "Solicitar Diagnóstico"

4. Verifique se os dados apareceram na planilha!

## 🔍 Verificar se está funcionando

- ✅ Botão muda para "Enviando..." quando clica
- ✅ Botão muda para "Enviado com sucesso!" após envio
- ✅ Dados aparecem na planilha automaticamente
- ✅ Todos os UTMs são capturados (se houver na URL)

## 🐛 Problemas Comuns

**Erro ao enviar:**
- Verifique se a URL do Web App está correta no HTML
- Verifique se o acesso está como "Qualquer pessoa"
- Abra o Console do navegador (F12) para ver erros

**Dados não aparecem:**
- Verifique se autorizou as permissões no Apps Script
- Verifique se o nome da aba está correto (deve ser "Página1")
- Verifique os logs no Apps Script: `Execuções` → veja se há erros

## 📊 O que será capturado

Cada lead salvará:
- ✅ Nome completo
- ✅ WhatsApp
- ✅ Marca/Instagram
- ✅ Faturamento Mensal
- ✅ Investimento Mensal
- ✅ Todos os parâmetros UTM (se houver na URL)
- ✅ URL completa de origem
- ✅ Data/hora do envio
- ✅ Informações do navegador

## 🎯 Pronto!

Agora é só testar e começar a capturar leads! 🚀
