# Script para fazer push do projeto para GitHub
# Execute: .\fazer-push.ps1

Write-Host "🚀 Preparando push para GitHub..." -ForegroundColor Cyan

# Verificar se estamos no diretório correto
if (-not (Test-Path "index.html")) {
    Write-Host "❌ Erro: Execute este script no diretório do projeto!" -ForegroundColor Red
    exit 1
}

# Verificar se há mudanças
$status = git status --porcelain
if ($status) {
    Write-Host "📝 Adicionando mudanças..." -ForegroundColor Yellow
    git add .
    git commit -m "Update: $(Get-Date -Format 'yyyy-MM-dd HH:mm')"
}

# Verificar se o remote está configurado
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "🔗 Configurando repositório remoto..." -ForegroundColor Yellow
    git remote add origin https://github.com/Leonardotrentini/leads.git
}

# Fazer push
Write-Host "⬆️  Fazendo push para GitHub..." -ForegroundColor Green
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Push realizado com sucesso!" -ForegroundColor Green
    Write-Host ""
    Write-Host "📋 Próximos passos:" -ForegroundColor Cyan
    Write-Host "   1. Acesse: https://vercel.com" -ForegroundColor White
    Write-Host "   2. Faça login com GitHub" -ForegroundColor White
    Write-Host "   3. Clique em 'Add New Project'" -ForegroundColor White
    Write-Host "   4. Selecione o repositório 'Leonardotrentini/leads'" -ForegroundColor White
    Write-Host "   5. Clique em 'Deploy'" -ForegroundColor White
} else {
    Write-Host "❌ Erro ao fazer push. Verifique suas credenciais Git." -ForegroundColor Red
    Write-Host "💡 Dica: Se o repositório estiver vazio, use: git push -u origin main --force" -ForegroundColor Yellow
}
