#!/bin/bash

# 🚀 Stress Test Verification & Quick Commands
# Purpose: Verify setup dan jalankan testing scenarios
# Usage: source quick-test.sh

echo "╔════════════════════════════════════════════════════════════════╗"
echo "║  Angular Monorepo - Stress Test Quick Commands                ║"
echo "║  RSBuild + Module Federation Performance Testing              ║"
echo "╚════════════════════════════════════════════════════════════════╝"
echo ""

# Color codes
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

verify_remotes() {
    echo -e "\n${BLUE}🔍 Verifying Remote Apps Exist...${NC}"
    
    remotes=("accounts" "products" "reports" "notifications" "analytics")
    
    for remote in "${remotes[@]}"; do
        if [ -d "apps/client/remotes/$remote" ]; then
            pkg_file="apps/client/remotes/$remote/package.json"
            if [ -f "$pkg_file" ]; then
                echo -e "${GREEN}✓${NC} $remote ($(grep '\"port\":' apps/client/remotes/$remote/rsbuild.config.ts | head -1))"
            else
                echo -e "${RED}✗${NC} $remote - Missing package.json"
            fi
        else
            echo -e "${RED}✗${NC} $remote - Not found"
        fi
    done
}

count_files() {
    echo -e "\n${BLUE}📊 File Statistics...${NC}"
    
    printf "  Components count: "
    find apps/client/remotes -name "*component.ts" | wc -l
    
    printf "  Package.json count: "
    find apps/client/remotes -name "package.json" | wc -l
    
    printf "  Nesting levels in analytics: "
    ls -1 apps/client/remotes/analytics/src/components/nesting/ 2>/dev/null | wc -l
}

show_ports() {
    echo -e "\n${BLUE}🔌 Configured Ports...${NC}"
    echo "  Shell:          http://localhost:4200"
    echo "  Accounts:       http://localhost:4201"
    echo "  Products:       http://localhost:4202"
    echo "  Reports:        http://localhost:4203"
    echo "  Notifications:  http://localhost:4204"
    echo "  Analytics:      http://localhost:4205 (Heavy - Performance Test)"
}

build_single_remote() {
    remote=$1
    if [ -z "$remote" ]; then
        echo -e "${RED}❌ Usage: build_single_remote <remote-name>${NC}"
        echo "   Available: accounts, products, reports, notifications, analytics"
        return 1
    fi
    
    echo -e "\n${YELLOW}⏳ Building $remote remote...${NC}"
    cd "apps/client/remotes/$remote" || exit 1
    time pnpm build
    cd ../../.. || exit 1
}

build_analytics() {
    echo -e "\n${YELLOW}⏳ Building analytics (HEAVY TEST)...${NC}"
    echo -e "${YELLOW}This remote has 25 deeply nested components.${NC}"
    cd apps/client/remotes/analytics || exit 1
    time pnpm build
    cd ../../.. || exit 1
}

quick_test() {
    echo -e "\n${YELLOW}🧪 Running Quick Build Test...${NC}"
    echo "Building all remotes to compare performance:"
    echo ""
    
    remotes=("accounts" "products" "reports" "notifications" "analytics")
    declare -A build_times
    
    for remote in "${remotes[@]}"; do
        echo -n "  $remote ... "
        cd "apps/client/remotes/$remote" || exit 1
        
        # Measure build time
        start=$(date +%s%N)
        pnpm build > /dev/null 2>&1
        end=$(date +%s%N)
        
        time_ms=$(( (end - start) / 1000000 ))
        build_times[$remote]=$time_ms
        
        echo "${GREEN}Done (${time_ms}ms)${NC}"
        cd ../../.. || exit 1
    done
    
    echo -e "\n${BLUE}📊 Build Time Comparison:${NC}"
    for remote in "${remotes[@]}"; do
        printf "  %-15s: %s ms\n" "$remote" "${build_times[$remote]}"
    done
}

dev_mode() {
    echo -e "\n${YELLOW}▶ Starting Development Mode...${NC}"
    echo "All apps will start on their respective ports:"
    show_ports
    echo ""
    echo -e "${YELLOW}Press Ctrl+C to stop${NC}"
    echo ""
    pnpm dev
}

dev_analytics_only() {
    echo -e "\n${YELLOW}▶ Starting Analytics Remote (Performance Focus)...${NC}"
    cd apps/client/remotes/analytics || exit 1
    echo "Open: http://localhost:4205"
    pnpm dev
    cd ../../..
}

help_menu() {
    cat << 'EOF'

Available Commands:
  verify          - Verify all remotes are created
  stats           - Show file statistics
  ports           - Show port configuration
  build <remote>  - Build specific remote (accounts|products|reports|notifications|analytics)
  build-analytics - Build analytics remote with timing (for performance testing)
  quick-test      - Compare build times across all remotes
  dev             - Start all remotes in development mode
  dev-analytics   - Start only analytics remote
  check-types     - Check TypeScript types
  size            - Show bundle sizes

Examples:
  verify
  build accounts
  build-analytics
  quick-test
  dev

EOF
}

# Main menu
case "${1:-help}" in
    "verify")
        verify_remotes
        ;;
    "stats")
        count_files
        ;;
    "ports")
        show_ports
        ;;
    "build")
        build_single_remote "$2"
        ;;
    "build-analytics")
        build_analytics
        ;;
    "quick-test")
        quick_test
        ;;
    "dev")
        dev_mode
        ;;
    "dev-analytics")
        dev_analytics_only
        ;;
    "check-types")
        echo -e "\n${YELLOW}⏳ Checking TypeScript types...${NC}"
        pnpm check-types
        ;;
    "size")
        echo -e "\n${BLUE}📦 Bundle Sizes:${NC}"
        for remote in accounts products reports notifications analytics; do
            if [ -d "apps/client/remotes/$remote/dist" ]; then
                size=$(du -sh "apps/client/remotes/$remote/dist" | cut -f1)
                echo "  $remote: $size"
            fi
        done
        ;;
    "help"|"-h"|"--help")
        help_menu
        ;;
    *)
        echo -e "${RED}Unknown command: $1${NC}"
        help_menu
        exit 1
        ;;
esac

exit 0
