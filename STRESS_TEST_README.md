# 🚀 Angular Monorepo - Performance & Stress Test Setup

Dokumentasi lengkap tentang stress test setup yang telah dibuat untuk Angular monorepo dengan RSBuild dan Turbopack.

## 📋 Overview

Stress test ini dirancang untuk menguji keandalan dan performa RSBuild dengan membuat struktur project yang besar dengan:
- **5 Remote Apps** dengan dummy components
- **1 Analytics Remote** dengan deeply nested components (25 levels)
- **1 Shell Application** yang akan mengintegrasikan semua remotes

## 🏗️ Project Structure

```
apps/client/
├── shell/                    # Shell application (main host)
│   ├── package.json
│   ├── rsbuild.config.ts
│   └── src/
│       ├── app.component.ts
│       └── components/
├── remotes/
│   ├── accounts/             # Remote 1: Accounts Management
│   │   ├── package.json
│   │   ├── rsbuild.config.ts
│   │   ├── tsconfig.json
│   │   └── src/
│   │       ├── app.component.ts
│   │       └── components/
│   │           ├── accounts-list.component.ts
│   │           └── accounts-detail.component.ts
│   │
│   ├── products/             # Remote 2: Products Management
│   │   ├── package.json
│   │   ├── rsbuild.config.ts
│   │   └── src/
│   │       ├── app.component.ts
│   │       └── components/
│   │           ├── product-list.component.ts
│   │           └── product-categories.component.ts
│   │
│   ├── reports/              # Remote 3: Reports
│   │   ├── package.json
│   │   ├── rsbuild.config.ts
│   │   └── src/
│   │       ├── app.component.ts
│   │       └── components/
│   │           ├── report-generator.component.ts
│   │           └── report-viewer.component.ts
│   │
│   ├── notifications/        # Remote 4: Notifications
│   │   ├── package.json
│   │   ├── rsbuild.config.ts
│   │   └── src/
│   │       ├── app.component.ts
│   │       └── components/
│   │           ├── notification-list.component.ts
│   │           └── notification-settings.component.ts
│   │
│   └── analytics/            # Remote 5: Analytics (PERFORMANCE TEST)
│       ├── package.json
│       ├── rsbuild.config.ts
│       └── src/
│           ├── app.component.ts
│           ├── components/
│           │   └── nesting/
│           │       ├── level-0.component.ts    ┐
│           │       ├── level-1.component.ts    │
│           │       ├── level-2.component.ts    │
│           │       ├── ...                     ├─ 25 Deeply Nested Levels
│           │       ├── level-22.component.ts   │  untuk Test Performance
│           │       ├── level-23.component.ts   │
│           │       └── level-24.component.ts   ┘
│           └── analytics.module.ts
```

## 🎯 Remote Apps Overview

### 1. **Accounts** (Port 4201)
- **Purpose**: Account management dummy module
- **Components**: 
  - `AccountsListComponent`: Menampilkan daftar akun
  - `AccountsDetailComponent`: Detail akun
- **Build**: `cd apps/client/remotes/accounts && pnpm build`

### 2. **Products** (Port 4202)
- **Purpose**: Product catalog dummy module
- **Components**:
  - `ProductListComponent`: Daftar produk
  - `ProductCategoriesComponent`: Kategori produk
- **Build**: `cd apps/client/remotes/products && pnpm build`

### 3. **Reports** (Port 4203)
- **Purpose**: Reporting system dummy module
- **Components**:
  - `ReportGeneratorComponent`: Form generator report
  - `ReportViewerComponent`: Viewer untuk report
- **Build**: `cd apps/client/remotes/reports && pnpm build`

### 4. **Notifications** (Port 4204)
- **Purpose**: Notification management dummy module
- **Components**:
  - `NotificationListComponent`: Daftar notifikasi
  - `NotificationSettingsComponent`: Pengaturan notifikasi
- **Build**: `cd apps/client/remotes/notifications && pnpm build`

### 5. **Analytics** (Port 4205) - 🏆 Performance Test
- **Purpose**: **STRESS TEST dengan deeply nested components**
- **Features**:
  - **25 levels komponen bersarang** (Level 0 - Level 24)
  - Setiap level: `NestingLevelXComponent` yang import dan menggunakan level berikutnya
  - Perfect untuk testing RSBuild compilation performance
  - Menguji:
    - Component import chains
    - TypeScript compilation time
    - Bundle optimization
    - Standalone components performance

**Component Hierarchy:**
```
AppComponent
    └── NestingLevel0Component
        └── NestingLevel1Component
            └── NestingLevel2Component
                └── NestingLevel3Component
                    └── ... (continues to Level 24)
                        └── NestingLevel24Component (Leaf)
```

## 🚀 Quick Start

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Development - Run All Remotes + Shell
```bash
pnpm dev
```
Ini akan menjalankan semua apps secara parallel dengan Turbo.

### 3. Build Specific Remote
```bash
# Build analytics performance test
pnpm --filter @shell/analytics build

# Atau dengan turbo
turbo build --filter @shell/analytics

# Build semua remotes
pnpm --filter "./apps/client/remotes/*" build
```

### 4. Build All
```bash
pnpm build
```

## 📊 Performance Testing

### Untuk test performa RSBuild:

1. **Analytics Remote** adalah yang paling berat karena deeply nested components
   ```bash
   cd apps/client/remotes/analytics
   time pnpm build  # Ukur waktu build
   ```

2. **Monitor Bundle Size**
   ```bash
   cd apps/client/remotes/analytics
   pnpm build
   # Check dist/ folder size
   ls -lh dist/
   ```

3. **Run Development Mode**
   ```bash
   cd apps/client/remotes/analytics
   pnpm dev
   # Open http://localhost:4205
   ```

### Metrics untuk Diukur:
- ✅ Build time (terutama analytics remote karena deeply nested)
- ✅ Bundle size per remote
- ✅ Hot reload time dalam dev mode
- ✅ Memory usage saat compilation
- ✅ Type checking performance

## 🛠️ Available Commands

### Root Level (Turbo)
```bash
pnpm dev              # Jalankan semua apps dalam dev mode
pnpm build            # Build semua apps
pnpm lint             # Lint semua apps
pnpm check-types      # Check TypeScript types
pnpm format           # Format dengan Prettier
```

### Per Remote
```bash
cd apps/client/remotes/accounts
pnpm dev              # Dev mode di port 4201
pnpm build            # Build production
pnpm build:staging    # Build staging environment
pnpm build:beta       # Build beta environment
pnpm build:prod       # Build production
```

## 📈 Module Federation Setup

Setiap remote dikonfigurasi dengan Module Federation:

```typescript
// Contoh dari rsbuild.config.ts
pluginModuleFederation({
  name: 'accounts',
  filename: 'mf-manifest.json',
  exposes: {
    './AccountsModule': './src/accounts.module.ts',
  },
  shared: {
    '@angular/core': { singleton: true, eager: true },
    '@angular/common': { singleton: true, eager: true },
    '@angular/router': { singleton: true, eager: true },
  }
})
```

## 💾 Ports Configuration

| App | Port | Purpose |
|-----|------|---------|
| Shell | 4200 | Host application |
| Accounts | 4201 | Remote: Accounts |
| Products | 4202 | Remote: Products |
| Reports | 4203 | Remote: Reports |
| Notifications | 4204 | Remote: Notifications |
| Analytics | 4205 | Remote: Analytics (Deep Nesting Test) |

## 🧪 Testing Scenarios

### Scenario 1: Test Basic Build
```bash
pnpm build
# Ukur total build time
```

### Scenario 2: Incremental Build / Hot Reload
```bash
cd apps/client/remotes/analytics
pnpm dev
# Buat perubahan di level-0.component.ts
# Ukur time untuk hot reload
```

### Scenario 3: Memory Profiling
```bash
# Menggunakan node dengan memory metrics
node --expose-gc $(pnpm bin)/rsbuild build apps/client/remotes/analytics
```

### Scenario 4: TypeScript Type Checking
```bash
pnpm check-types
# Lihat berapa lama type checking untuk deeply nested components
```

## 📝 Tips untuk Testing

1. **Monitor dengan top/htop** saat build jalan
   ```bash
   watch pnpm build
   ```

2. **Gunakan Chrome DevTools** untuk performance profiling
   - Saat dev mode, open DevTools > Performance
   - Record component rendering

3. **Check build logs**
   ```bash
   pnpm build 2>&1 | tee build.log
   ```

4. **Compare build times**
   - Bandingkan build time antara remotes sederhana (accounts) vs complex (analytics)

## 🔧 Customization

### Menambah Nesting Level
Edit `/apps/client/remotes/analytics/src/components/nesting/level-24.component.ts`
- Ubah ke import level-25 component
- Create level-25.component.ts

### Menambah Components di Remote
```bash
# Contoh: Tambah component di accounts
touch apps/client/remotes/accounts/src/components/accounts-transaction.component.ts
```

### Change Port
Edit `rsbuild.config.ts` di setiap remote:
```typescript
server: {
  port: 4201  // Change this
}
```

## 📦 Dependencies

Semua remotes menggunakan shared dependencies:
- `@angular/core` v21.1.2
- `@angular/common` v21.1.2
- `@angular/router` v21.1.2
- `rxjs` v7.8.2
- RSBuild v1.7.2
- Module Federation RSBuild Plugin v0.8.12

## ⚠️ Known Limitations

1. **Deep Nesting**: Component tree di analytics sangat dalam (25 levels)
   - Ini bisa mempengaruhi rendering performance di browser
   - Tapi good untuk testing compilation speed

2. **Dummy Data**: Semua data hardcoded untuk testing purposes
   - Replace dengan real API calls jika diperlukan

3. **No Real Features**: Ini pure stress test setup
   - Components tidak implement real business logic

## 🎓 Learning Resources

- [RSBuild Documentation](https://rsbuild.dev)
- [Module Federation Docs](https://module-federation.github.io/)
- [Angular 21 Standalone Components](https://angular.io/guide/standalone-components)
- [Turbopack Performance](https://turbo.build/repo/docs)

## 🤝 Contributing

Untuk menambah lebih banyak remotes atau components:
1. Follow structure dari existing remotes
2. Update documentation
3. Test build dan dev mode

## 📄 License

Same as parent project

---

**Created**: February 6, 2026  
**Purpose**: Angular Monorepo Performance & Stress Testing  
**Build Tool**: RSBuild + Turbopack  
