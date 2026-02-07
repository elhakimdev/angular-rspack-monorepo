# Quick Reference - Performance Testing Guide

## 🚀 Immediate Next Steps

```bash
# 1. Make script executable
chmod +x quick-test.sh

# 2. Verify setup
./quick-test.sh verify

# 3. Show ports
./quick-test.sh ports

# 4. Install dependencies (if not already done)
pnpm install

# 5. Start development with all remotes
./quick-test.sh dev
```

## 📊 Quick Commands

### Verify Setup
```bash
./quick-test.sh verify                # ✓ Check all remotes exist
./quick-test.sh stats                 # 📊 Show file statistics
./quick-test.sh ports                 # 🔌 Show ports configuration
```

### Build & Performance
```bash
./quick-test.sh build accounts        # Build accounts remote
./quick-test.sh build-analytics       # Build analytics (with timing)
./quick-test.sh quick-test            # Compare all build times
```

### Development
```bash
./quick-test.sh dev                   # Start all remotes
./quick-test.sh dev-analytics         # Start only analytics remote
```

### Type Checking
```bash
./quick-test.sh check-types           # Check TypeScript types
./quick-test.sh size                  # Show bundle sizes
```

## 🎯 Performance Testing Scenarios

### Scenario 1: Initial Load Test
```bash
# Terminal 1
./quick-test.sh dev

# Terminal 2 - Monitor
watch -n 1 'ls -lh apps/client/remotes/analytics/dist/'
```

### Scenario 2: Build Performance Benchmark
```bash
# Compare build times
./quick-test.sh quick-test

# Expected: Analytics > Others
```

### Scenario 3: Heavy Compilation Test
```bash
# Build the most complex remote (analytics with 25 nested levels)
./quick-test.sh build-analytics

# Check memory/CPU with system monitor
```

### Scenario 4: Type Checking Performance
```bash
# Measure type checking time (includes all remotes)
time pnpm check-types
```

## 📈 What to Measure

### Compilation Speed
- Analytics (25 nested components) - should be slowest
- Accounts/Products - should be fastest
- Compare differences

### Memory Usage
```bash
# Monitor during build
watch -n 0.1 'ps aux | grep node'
```

### Bundle Sizes
```bash
./quick-test.sh size

# Analytics should have larger bundle due to complex nesting
```

### Hot Reload Time
1. Run `./quick-test.sh dev-analytics`
2. Edit any component in analytics remote
3. Measure time to reload in browser

## 🔧 Troubleshooting

### Port Already in Use
```bash
# Find process on port
lsof -i :4205    # Or specific port number

# Kill process
kill -9 <PID>
```

### Build Fails
```bash
# Clean build
rm -rf apps/client/remotes/*/dist
pnpm install
./quick-test.sh build-analytics
```

### Type Checking Fails
```bash
# Force rebuild
pnpm install
pnpm check-types
```

## 📚 Documentation Files

- `STRESS_TEST_README.md` - Comprehensive documentation
- `SETUP_CHECKLIST.md` - Complete verification checklist
- `quick-test.sh` - This automation script
- `PERFORMANCE_QUICK_REF.md` - This file

---

**Pro Tips:**
- Run `./quick-test.sh` without arguments to see all available commands
- Use `quick-test.sh quick-test` to get build time comparison
- Monitor system resources during buildswith `top` or `htop`
- Analytics remote is the performance test focus (25 levels deep!)
