#!/bin/bash

# EduEvents Development Helper Script
# Usage: ./dev.sh [command]
#
# Commands:
#   start       - Start all 4 projects
#   start-one   - Start one project (interactive)
#   build       - Build all projects
#   test        - Run tests (when implemented)
#   clean       - Clean node_modules & dist
#   help        - Show this help message

set -e

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

PROJECTS=(\"host\" \"mfe-inscriptions\" \"mfe-scientific\" \"mfe-schedule\")
PORTS=(5173 5174 5175 5176)

print_banner() {
    echo -e \"${BLUE}\"
    echo \"╔════════════════════════════════════╗\"
    echo \"║    EduEvents Development Helper    ║\"
    echo \"║         Microfrontend Platform     ║\"
    echo \"╚════════════════════════════════════╝\"
    echo -e \"${NC}\"
}

help_text() {
    cat << EOF
EduEvents Development Helper

Usage: ./dev.sh [command]

Commands:
  start           Start all 4 projects in parallel
  start-one       Start a single project (interactive)
  build           Build all projects for production
  build-one       Build a single project
  clean           Remove node_modules and dist folders
  clean-deps      Clean and reinstall dependencies
  test            Run tests (when implemented)
  lint            Run ESLint (when implemented)
  format          Format code with Prettier (when implemented)
  ports           Show which ports each project uses
  creds           Show demo account credentials
  help            Show this help message

Examples:
  ./dev.sh start              # All 4 projects
  ./dev.sh start-one          # Choose one project
  ./dev.sh build              # Production build
  ./dev.sh clean              # Clean all

Requirements:
  - Node.js 16+
  - npm

Documentation:
  - See QUICK_START.md for setup
  - See README.md for architecture
  - See DEVELOPMENT_GUIDE.md for patterns

EOF
}

show_ports() {
    echo -e \"${BLUE}📍 Project Ports:${NC}\"
    echo \"\"
    echo -e \"  ${GREEN}host${NC}              → http://localhost:5173\"
    echo -e \"  ${GREEN}mfe-inscriptions${NC} → http://localhost:5174\"
    echo -e \"  ${GREEN}mfe-scientific${NC}   → http://localhost:5175\"
    echo -e \"  ${GREEN}mfe-schedule${NC}     → http://localhost:5176\"
    echo \"\"
    echo -e \"${YELLOW}🌐 Main URL: http://localhost:5173${NC}\"
    echo \"\"
}

show_credentials() {
    echo -e \"${BLUE}🔐 Demo Credentials:${NC}\"
    echo \"\"
    echo -e \"  ${GREEN}Admin${NC}:\"
    echo \"    Email: admin@eduevents.com\"
    echo \"    Password: admin123\"
    echo \"\"
    echo -e \"  ${GREEN}Reviewer${NC}:\"
    echo \"    Email: reviewer@eduevents.com\"
    echo \"    Password: reviewer123\"
    echo \"\"
    echo -e \"  ${GREEN}Author${NC}:\"
    echo \"    Email: author@eduevents.com\"
    echo \"    Password: author123\"
    echo \"\"
}

verify_dependencies() {
    if ! command -v node &> /dev/null; then
        echo -e \"${RED}❌ Node.js not found. Please install Node.js 16+${NC}\"
        exit 1
    fi
    
    if ! command -v npm &> /dev/null; then
        echo -e \"${RED}❌ npm not found. Please install npm${NC}\"
        exit 1
    fi
    
    echo -e \"${GREEN}✓ Dependencies verified${NC}\"
}

start_all() {
    print_banner
    echo -e \"${YELLOW}Starting all 4 projects...${NC}\"
    echo \"\"
    
    for i in \"${!PROJECTS[@]}\"; do
        project=\"${PROJECTS[$i]}\"
        port=\"${PORTS[$i]}\"
        echo -e \"${BLUE}📦 Starting $project on port $port...${NC}\"
        (cd \"$project\" && npm run dev) &
    done
    
    echo \"\"
    show_ports
    echo -e \"${GREEN}✓ All projects started!${NC}\"
    echo -e \"${YELLOW}Press Ctrl+C to stop all projects${NC}\"
    wait
}

start_one() {
    print_banner
    echo -e \"${BLUE}Choose a project to start:${NC}\"
    echo \"\"
    for i in \"${!PROJECTS[@]}\"; do
        echo \"  $((i+1))) ${PROJECTS[$i]} (port ${PORTS[$i]})\"
    done
    echo \"\"
    read -p \"Enter your choice (1-${#PROJECTS[@]}): \" choice
    
    if ! [[ \"$choice\" =~ ^[0-9]+$ ]] || [ \"$choice\" -lt 1 ] || [ \"$choice\" -gt \"${#PROJECTS[@]}\" ]; then
        echo -e \"${RED}❌ Invalid choice${NC}\"
        exit 1
    fi
    
    idx=$((choice-1))
    project=\"${PROJECTS[$idx]}\"
    port=\"${PORTS[$idx]}\"
    
    echo \"\"
    echo -e \"${GREEN}✓ Starting $project${NC}\"
    echo -e \"${YELLOW}Navigate to http://localhost:$port${NC}\"
    echo \"\"
    cd \"$project\"
    npm run dev
}

build_all() {
    print_banner
    echo -e \"${YELLOW}Building all projects...${NC}\"
    echo \"\"
    
    for project in \"${PROJECTS[@]}\"; do
        echo -e \"${BLUE}🔨 Building $project...${NC}\"
        (cd \"$project\" && npm run build) || {
            echo -e \"${RED}❌ Build failed for $project${NC}\"
            exit 1
        }
        echo -e \"${GREEN}✓ $project built${NC}\"
        echo \"\"
    done
    
    echo -e \"${GREEN}✓ All projects built successfully!${NC}\"
}

build_one() {
    print_banner
    echo -e \"${BLUE}Choose a project to build:${NC}\"
    echo \"\"
    for i in \"${!PROJECTS[@]}\"; do
        echo \"  $((i+1))) ${PROJECTS[$i]}\"
    done
    echo \"\"
    read -p \"Enter your choice (1-${#PROJECTS[@]}): \" choice
    
    if ! [[ \"$choice\" =~ ^[0-9]+$ ]] || [ \"$choice\" -lt 1 ] || [ \"$choice\" -gt \"${#PROJECTS[@]}\" ]; then
        echo -e \"${RED}❌ Invalid choice${NC}\"
        exit 1
    fi
    
    idx=$((choice-1))
    project=\"${PROJECTS[$idx]}\"
    
    echo \"\"
    echo -e \"${BLUE}🔨 Building $project...${NC}\"
    (cd \"$project\" && npm run build)
    echo -e \"${GREEN}✓ Build complete!${NC}\"
}

clean_all() {
    print_banner
    echo -e \"${YELLOW}Cleaning all projects...${NC}\"
    echo \"\"
    
    for project in \"${PROJECTS[@]}\"; do
        echo -e \"${BLUE}🧹 Cleaning $project...${NC}\"
        rm -rf \"$project/node_modules\"
        rm -rf \"$project/dist\"
        echo -e \"${GREEN}✓ $project cleaned${NC}\"
    done
    
    echo \"\"
    echo -e \"${GREEN}✓ All projects cleaned!${NC}\"
}

clean_and_reinstall() {
    print_banner
    echo -e \"${YELLOW}Cleaning and reinstalling dependencies...${NC}\"
    echo \"\"
    
    clean_all
    
    echo \"\"
    echo -e \"${YELLOW}Reinstalling dependencies...${NC}\"
    echo \"\"
    
    for project in \"${PROJECTS[@]}\"; do
        echo -e \"${BLUE}📥 Installing $project dependencies...${NC}\"
        (cd \"$project\" && npm install) || {
            echo -e \"${RED}❌ npm install failed for $project${NC}\"
            exit 1
        }
        echo -e \"${GREEN}✓ $project dependencies installed${NC}\"
    done
    
    echo \"\"
    echo -e \"${GREEN}✓ All dependencies installed!${NC}\"
}

# Main script logic
print_banner

if [ $# -eq 0 ]; then
    help_text
    exit 0
fi

case \"$1\" in
    start)
        verify_dependencies
        start_all
        ;;
    start-one)
        verify_dependencies
        start_one
        ;;
    build)
        verify_dependencies
        build_all
        ;;
    build-one)
        verify_dependencies
        build_one
        ;;
    clean)
        clean_all
        ;;
    clean-deps)
        clean_and_reinstall
        ;;
    test)
        echo -e \"${YELLOW}Tests not yet implemented.${NC}\"
        echo \"See ROADMAP.md (Fase 1) for testing plan\"
        ;;
    lint)
        echo -e \"${YELLOW}Linting not yet implemented.${NC}\"
        ;;
    format)
        echo -e \"${YELLOW}Formatting not yet implemented.${NC}\"
        ;;
    ports)
        show_ports
        ;;
    creds)
        show_credentials
        ;;
    help)
        help_text
        ;;
    *)
        echo -e \"${RED}Unknown command: $1${NC}\"
        echo \"Run './dev.sh help' for usage\"
        exit 1
        ;;
esac
