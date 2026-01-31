# 🚀 Enterprise Angular Monorepo (Rsbuild + Turborepo + Micro Frontends)

![Angular](https://img.shields.io/badge/Angular-v21_(Zoneless)-dd0031?style=flat&logo=angular)
![Rsbuild](https://img.shields.io/badge/Rsbuild-Rust_Bundler-orange?style=flat)
![Turborepo](https://img.shields.io/badge/Turborepo-Monorepo-EF4444?style=flat)
![Micro Frontends](https://img.shields.io/badge/Architecture-Micro_Frontends-blue?style=flat)
![License](https://img.shields.io/badge/license-MIT-green)

> **Next-Generation Angular Architecture.** Engineered for extreme performance, scalability, and developer experience.

## 📖 Overview

This project demonstrates a high-performance **Micro Frontend** architecture suitable for enterprise scale. It moves away from the traditional Webpack-based Angular CLI in favor of **Rsbuild (Rspack)**—a Rust-based bundler that offers 10x faster compilation.

Orchestrated by **Turborepo**, this monorepo features intelligent caching, isolated build outputs, and a seamless **Module Federation** setup where the Shell application lazy-loads remote modules based on routing.

## 🏗 Architecture Diagram

The system uses a **Source Dependency** pattern for internal libraries (Zero-Build) and **Module Federation** for application composition.

```
  📦 Monorepo Architecture
 ┣ 📂 apps (Applications)
 ┃ ┣ 🚀 shell (Host App - Port 4200)
 ┃ ┃ ┣ ⤵️ Lazy Loads: /login (from Remote)
 ┃ ┃ ┣ 🔗 Imports: @auth/primitives-ui
 ┃ ┃ ┗ 🔗 Imports: @auth/logger
 ┃ ┃
 ┃ ┗ 🔌 login (Remote App - Port 4201)
 ┃   ┣ 🔗 Imports: @auth/primitives-ui
 ┃   ┗ 🔗 Imports: @auth/logger
 ┃
 ┗ 📂 packages (Shared Source Code)
   ┣ 🧱 @auth/primitives-ui (Zero-Build Library)
   ┗ 📝 @auth/logger (Zero-Build Library)
```

# 🌟 Key Features
## ⚡Rus-Powered Performance Built with Rsbuild (Rspack).

- Cold Start: < 300ms (vs 5s+ with Webpack).

- HMR: Instantaneous (millisecond-response), O(1) scalability.

- Bundling: Efficient tree-shaking and minification closer to native speeds.

## 🧩 Native Micro Frontends
Implemented using the ```@module-federation/rsbuild-plugin```.

- Shell App: Handles layout, global navigation, and authentication state.

- Remote Apps: Loaded lazily only when the user navigates to specific routes (e.g., /login).

- Shared Context: Singleton instances of Angular Core, Router, and Shared Services.

## 📦 Smart Monorepo Strategy
- Powered by Turborepo.

- Remote Caching: Never rebuild the same code twice.

- Isolated Outputs: Each app builds into its own local dist folder (apps/client/shell/dist), ensuring clean Docker containerization.

- Source Dependencies: Internal libraries (ui, logger) are consumed as raw TypeScript. No complex library build steps required during development.

## 🛡 Enterprise Logging
- Custom wrapper around Pino Logger.

- Browser-Friendly: Pretty-printed, expandable objects in Chrome DevTools.

- Secure by Default: Automatic redaction of sensitive fields (password, token, secret) before logging.

- Isomorphic: Works seamlessly in both Node.js (build time) and Browser (runtime).

## ⚖️ Performance Comparison
| Feature | Standard Angular CLI (Webpack) | This Architecture (Rsbuild) |
| :--- | :--- | :--- |
| **Build Engine** | Javascript (Webpack) | **Rust (Rspack)** |
| **Dev Server Start** | 2s - 10s (Scales linearly) | **< 300ms (Constant)** |
| **HMR Speed** | 1s - 3s | **< 50ms** |
| **Monorepo DX** | Complex `angular.json` paths | **Simple `pnpm` workspaces** |
| **Micro Frontend** | Requires external libraries | **Native Plugin Support** |

## 🚀 Getting Started
Prerequisites
- Node.js v20+
- pnpm (Recommended)

Installation
1. Clone The Repository
```bash
git clone [https://github.com/elhakimdev/angular-rspack-monorepo](https://github.com/elhakimdev/angular-rspack-monorepo)
cd angular-rsbuild-monorepo
```

2. Install dependency
```bash
pnpm install
```

3. Run Development Server Start both Shell and Remote applications in parallel.
```bash
pnpm dev
```
- Shell: http://localhost:4200
## 🛠 Build Pipeline & Environments
The project uses a single-config strategy. The build command automatically injects the correct environment variables and optimizations based on NODE_ENV.
| Command | Environment | Source Maps | Minification | Use Case |
| :--- | :--- | :--- | :--- | :--- |
| `pnpm build:qa` | QA | ✅ Yes | ✅ Yes | For Testers (Debuggable) |
| `pnpm build:staging` | Staging | ❌ No | ✅ Yes | Pre-Production Simulation |
| `pnpm build:prod` | Production | ❌ No | ✅ Aggressive | Live Deployment |

Run a specific build:
```bash
pnpm build:prod
```

## 📂 Project Structure
```bash
.
├── apps/
│   ├── client/
│   │   ├── shell/           # The Host Application (Main Container)
│   │   │   ├── src/
│   │   │   ├── rsbuild.config.ts
│   │   │   └── tsconfig.app.json
│   │   └── login/           # The Remote Application (Micro Frontend)
│   │       ├── src/
│   │       └── rsbuild.config.ts
├── packages/
│   ├── logger/              # Shared Logging Library (Pino)
│   └── primitives-ui/       # Shared Headless UI Components
├── turbo.json               # Turborepo Pipeline Config
├── package.json             # Root Scripts
└── pnpm-workspace.yaml      # Workspace Definitions
```

## 🤝 Contributing
Contributions are welcome! Please run ```pnpm lint``` before submitting a pull request.

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.


