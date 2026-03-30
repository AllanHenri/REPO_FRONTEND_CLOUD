# EduEvents - Setup Script
# Execute este script para instalar todas as dependências e compilar os projetos

Write-Host "================================" -ForegroundColor Green
Write-Host "EduEvents - Setup Inicial" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Função para instalar dependências
function Install-Dependencies {
    param($ProjectPath, $ProjectName)
    
    Write-Host "📦 Instalando dependências de $ProjectName..." -ForegroundColor Cyan
    Push-Location $ProjectPath
    npm install
    if ($LASTEXITCODE -ne 0) {
        Write-Host "❌ Erro ao instalar dependências de $ProjectName" -ForegroundColor Red
        Pop-Location
        return $false
    }
    Pop-Location
    Write-Host "✅ $ProjectName pronto!" -ForegroundColor Green
    return $true
}

# Array de projetos
$Projects = @(
    @{ Path = ".\host"; Name = "HOST" },
    @{ Path = ".\mfe-inscriptions"; Name = "MFE Inscriptions" },
    @{ Path = ".\mfe-scientific"; Name = "MFE Scientific" },
    @{ Path = ".\mfe-schedule"; Name = "MFE Schedule" }
)

$AllSuccess = $true

# Instalar dependências de cada projeto
foreach ($Project in $Projects) {
    if (-not (Install-Dependencies -ProjectPath $Project.Path -ProjectName $Project.Name)) {
        $AllSuccess = $false
    }
    Write-Host ""
}

if ($AllSuccess) {
    Write-Host "================================" -ForegroundColor Green
    Write-Host "✅ Setup Completo!" -ForegroundColor Green
    Write-Host "================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "🚀 Para iniciar a aplicação, execute os seguintes comandos em terminais separados:" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "Terminal 1 (Host):" -ForegroundColor Cyan
    Write-Host "  cd host && npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Terminal 2 (MFE Inscriptions):" -ForegroundColor Cyan
    Write-Host "  cd mfe-inscriptions && npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Terminal 3 (MFE Scientific):" -ForegroundColor Cyan
    Write-Host "  cd mfe-scientific && npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Terminal 4 (MFE Schedule):" -ForegroundColor Cyan
    Write-Host "  cd mfe-schedule && npm run dev" -ForegroundColor White
    Write-Host ""
    Write-Host "Então acesse: http://localhost:5173" -ForegroundColor Green
    Write-Host ""
} else {
    Write-Host "❌ Setup falhou em alguns projetos" -ForegroundColor Red
}
