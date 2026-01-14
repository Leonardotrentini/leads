# Instruções para Configurar Google Sheets - Captura de Leads

## Passo 1: Criar o Google Sheets

1. Acesse [Google Sheets](https://sheets.google.com)
2. Crie uma nova planilha
3. Na primeira linha, adicione os cabeçalhos:
   ```
   Timestamp | Nome | WhatsApp | Marca/Instagram | Faturamento Mensal | Investimento Mensal | utm_source | utm_medium | utm_campaign | utm_term | utm_content | utm_id | utm_source_platform | utm_creative_format | utm_marketing_tactic | gclid | fbclid | ref | source | url_completa | user_agent
   ```
4. Anote o ID da planilha (está na URL: `https://docs.google.com/spreadsheets/d/SEU_ID_AQUI/edit`)

## Passo 2: Criar o Google Apps Script

1. Na sua planilha, vá em **Extensões** > **Apps Script**
2. Delete o código padrão e cole o código abaixo:

```javascript
function doPost(e) {
  try {
    // ID da sua planilha (substitua pelo ID real)
    const SPREADSHEET_ID = 'COLE_O_ID_DA_SUA_PLANILHA_AQUI';
    
    // Nome da aba (geralmente 'Sheet1' ou 'Página1')
    const SHEET_NAME = 'Sheet1';
    
    // Abre a planilha
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
    
    // Parse dos dados recebidos
    const data = JSON.parse(e.postData.contents);
    
    // Prepara os dados para inserir na planilha
    const row = [
      data.timestamp || new Date().toISOString(),
      data.nome || '',
      data.whatsapp || '',
      data.marca || '',
      data.faturamento || '',
      data.investimento || '',
      data.utm_source || '',
      data.utm_medium || '',
      data.utm_campaign || '',
      data.utm_term || '',
      data.utm_content || '',
      data.utm_id || '',
      data.utm_source_platform || '',
      data.utm_creative_format || '',
      data.utm_marketing_tactic || '',
      data.gclid || '',
      data.fbclid || '',
      data.ref || '',
      data.source || '',
      data.url_completa || '',
      data.user_agent || ''
    ];
    
    // Adiciona a nova linha
    sheet.appendRow(row);
    
    // Retorna sucesso
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Dados salvos com sucesso' }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Retorna erro
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **IMPORTANTE**: Substitua `COLE_O_ID_DA_SUA_PLANILHA_AQUI` pelo ID real da sua planilha
4. Salve o projeto (Ctrl+S ou Cmd+S)
5. Dê um nome ao projeto (ex: "Captura Leads VESTO")

## Passo 3: Publicar como Web App

1. No Apps Script, clique em **Implantar** > **Nova implantação**
2. Clique no ícone de engrenagem ⚙️ ao lado de **Tipo** e selecione **Aplicativo da Web**
3. Configure:
   - **Descrição**: "Captura de Leads VESTO"
   - **Executar como**: "Eu"
   - **Quem tem acesso**: "Qualquer pessoa" (importante para funcionar)
4. Clique em **Implantar**
5. **Copie a URL da Web App** (algo como: `https://script.google.com/macros/s/SEU_ID/exec`)
6. **IMPORTANTE**: Na primeira vez, você precisará autorizar o acesso:
   - Clique em **Revisar permissões**
   - Escolha sua conta Google
   - Clique em **Avançado** > **Ir para [nome do projeto] (não seguro)**
   - Clique em **Permitir**

## Passo 4: Conectar ao HTML

1. Abra o arquivo `index.html`
2. Procure por: `const GOOGLE_SCRIPT_URL = 'COLE_AQUI_A_URL_DO_SEU_GOOGLE_APPS_SCRIPT';`
3. Substitua `COLE_AQUI_A_URL_DO_SEU_GOOGLE_APPS_SCRIPT` pela URL da Web App que você copiou
4. Salve o arquivo

## Passo 5: Testar

1. Abra o `index.html` no navegador
2. Preencha o formulário
3. Envie os dados
4. Verifique se os dados apareceram na planilha

## Parâmetros UTM Capturados

O sistema captura automaticamente:
- `utm_source` - Origem do tráfego
- `utm_medium` - Meio de marketing
- `utm_campaign` - Nome da campanha
- `utm_term` - Termo de busca
- `utm_content` - Conteúdo específico
- `utm_id` - ID da campanha
- `utm_source_platform` - Plataforma de origem
- `utm_creative_format` - Formato criativo
- `utm_marketing_tactic` - Tática de marketing
- `gclid` - Google Click ID
- `fbclid` - Facebook Click ID
- `ref` - Referência
- `source` - Fonte
- `url_completa` - URL completa da página
- `user_agent` - Navegador do usuário
- `timestamp` - Data e hora do envio

## Exemplo de URL com UTMs

```
https://seusite.com/?utm_source=google&utm_medium=cpc&utm_campaign=moda_q3&utm_term=consultoria&utm_content=banner1
```

Todos esses parâmetros serão capturados automaticamente e salvos na planilha!

## Troubleshooting

- **Erro 401**: Verifique se você autorizou as permissões no Apps Script
- **Erro 403**: Verifique se o acesso está configurado como "Qualquer pessoa"
- **Dados não aparecem**: Verifique o console do navegador (F12) para ver erros
- **URL não funciona**: Certifique-se de que a implantação foi feita corretamente
