/**
 * Google Apps Script para Captura de Leads VESTO
 * 
 * INSTRUÇÕES:
 * 1. Copie este código para o Google Apps Script
 * 2. Substitua SPREADSHEET_ID pelo ID da sua planilha
 * 3. Ajuste SHEET_NAME se necessário
 * 4. Publique como Web App
 * 5. Cole a URL no index.html
 */

function doGet() {
  return ContentService
    .createTextOutput('OK - use POST para enviar leads')
    .setMimeType(ContentService.MimeType.TEXT);
}

function doPost(e) {
  try {
    // ID da planilha VESTO - LEADS QUALIFICAÇÃO
    const SPREADSHEET_ID = '1qVabWwyOMXFlR0Yrr2tVbgkaoTDX6_QNV-SbSatrVZg';
    
    // Nome da aba (ajuste para a sua aba real)
    const SHEET_NAME = 'LEADS';
    
    // Abre a planilha
    const sheet = SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);

    if (!sheet) {
      throw new Error("Aba não encontrada: " + SHEET_NAME);
    }
    
    // Aceita JSON (fetch) OU form-urlencoded (form/iframe)
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (err) {
        // se não for JSON, tenta interpretar como querystring
        data = e.parameter || {};
      }
    } else {
      data = (e && e.parameter) ? e.parameter : {};
    }
    
    // Prepara os dados para inserir na planilha
    // Ordem deve corresponder aos cabeçalhos da planilha
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
      .createTextOutput(JSON.stringify({ 
        'status': 'success', 
        'message': 'Dados salvos com sucesso',
        'timestamp': new Date().toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log do erro (você pode ver no Apps Script > Execuções)
    console.error('Erro ao processar dados:', error);
    
    // Retorna erro
    return ContentService
      .createTextOutput(JSON.stringify({ 
        'status': 'error', 
        'message': error.toString() 
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

/**
 * Função de teste (opcional)
 * Execute esta função no Apps Script para testar se está funcionando
 */
function testConnection() {
  const testData = {
    timestamp: new Date().toISOString(),
    nome: 'Teste',
    whatsapp: '(11) 99999-9999',
    marca: '@teste',
    faturamento: 'Até 10k',
    investimento: 'Menos de 1k',
    utm_source: 'test',
    utm_medium: 'test',
    url_completa: 'https://teste.com',
    user_agent: 'Test Agent'
  };
  
  const mockEvent = {
    postData: {
      contents: JSON.stringify(testData)
    }
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}
