#!/bin/bash

echo "================================"
echo "EduEvents - Setup Inicial"
echo "================================"
echo ""

# Função para instalar dependências
install_dependencies() {
    local project_path=$1
    local project_name=$2
    
    echo "📦 Instalando dependências de $project_name..."
    cd "$project_path"
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Erro ao instalar dependências de $project_name"
        cd - > /dev/null
        return 1
    fi
    cd - > /dev/null
    echo "✅ $project_name pronto!"
    return 0
}

# Array de projetos
projects=(
    "host:HOST"
    "mfe-inscriptions:MFE Inscriptions"
    "mfe-scientific:MFE Scientific"
    "mfe-schedule:MFE Schedule"
)

all_success=true

# Instalar dependências de cada projeto
for project in "${projects[@]}"; do
    IFS=":" read -r path name <<< "$project"
    if ! install_dependencies "./$path" "$name"; then
        all_success=false
    fi
    echo ""
done

if [ "$all_success" = true ]; then
    echo "================================"
    echo "✅ Setup Completo!"
    echo "================================"
    echo ""
    echo "🚀 Para iniciar a aplicação, execute os seguintes comandos em terminais separados:"
    echo ""
    echo "Terminal 1 (Host):"
    echo "  cd host && npm run dev"
    echo ""
    echo "Terminal 2 (MFE Inscriptions):"
    echo "  cd mfe-inscriptions && npm run dev"
    echo ""
    echo "Terminal 3 (MFE Scientific):"
    echo "  cd mfe-scientific && npm run dev"
    echo ""
    echo "Terminal 4 (MFE Schedule):"
    echo "  cd mfe-schedule && npm run dev"
    echo ""
    echo "Então acesse: http://localhost:5173"
    echo ""
else
    echo "❌ Setup falhou em alguns projetos"
fi
