# Billsy - Financial Dashboard

🚀 A modern financial dashboard application built with **Next.js 15**, **Better Auth**, **Prisma**, **Nx**, and **shadcn/ui**.

## 📌 Features

- ✅ **Next.js 15** with App Router
- ✅ **Nx Monorepo** for scalable project structure
- ✅ **Better Auth** for authentication
- ✅ **Prisma** for database management
- ✅ **shadcn/ui** for UI components
- ✅ **Financial Dashboard** with interactive charts
- ✅ **Goals Tracking** and performance metrics
- ✅ **Historical Reports** and analytics
- ✅ TypeScript support
- ✅ **pnpm** for efficient package management

## 🛠️ Prerequisites

Before setting up the project, ensure you have the following installed:

### Node.js 22

This project requires **Node.js 22** for optimal performance and compatibility.

**Using nvm (recommended):**

```sh
# Install Node.js 22
nvm install 22.19.0
nvm use 22.19.0
nvm alias default 22.19.0

# Verify installation
node --version  # Should show v22.19.0
```

**Alternative installation methods:**

- Download from [nodejs.org](https://nodejs.org/)
- Use package managers like Homebrew: `brew install node@22`

### pnpm

This project uses **pnpm** as the package manager for better performance and disk efficiency.

```sh
# Install pnpm globally
npm install -g pnpm

# Verify installation
pnpm --version
```

## 📦 Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/adrianyadav/billsy.git
   cd billsy
   ```

2. **Install dependencies:**

   ```sh
   pnpm install
   ```

3. **Set up environment variables:**

   ```sh
   cp .env.example .env
   ```

   Fill in the necessary values in the `.env` file.

4. **Set up the database:**

   ```sh
   pnpm prisma migrate dev
   ```

5. **Generate Prisma client:**
   ```sh
   pnpm prisma generate
   ```

## 🚀 Development

### Start the development server:

```sh
pnpm dev
# or
pnpm nx dev billsy
```

### Build the application:

```sh
pnpm build
# or
pnpm nx build billsy
```

### Start production server:

```sh
pnpm start
# or
pnpm nx start billsy
```

### Run linting:

```sh
pnpm lint
# or
pnpm nx lint billsy
```

## 🏗️ Project Structure

This project uses **Nx** for monorepo management with the following structure:

```
billsy/
├── apps/
│   ├── billsy/              # Frontend Next.js application
│   │   ├── app/             # Next.js app directory
│   │   ├── project.json     # Nx project configuration
│   │   ├── package.json     # Project dependencies
│   │   ├── next.config.ts   # Next.js configuration
│   │   └── tailwind.config.js
│   └── billsy-api/          # Backend NestJS API
│       ├── src/             # API source code
│       ├── project.json     # Nx project configuration
│       └── webpack.config.js
├── libs/                    # Shared libraries (future)
├── components/              # Shared UI components (to be moved to libs)
├── hooks/                   # Custom React hooks (to be moved to libs)
├── lib/                     # Utility libraries (to be moved to libs)
├── prisma/                  # Database schema and migrations
├── nx.json                  # Nx workspace configuration
├── package.json             # Root package.json with workspace scripts
└── pnpm-workspace.yaml      # pnpm workspace configuration
```

## 🔧 Nx Commands

Nx provides powerful tools for managing the monorepo:

```sh
# Show all available projects
pnpm nx show projects

# Build specific project
pnpm nx build billsy

# Run development server for specific project
pnpm nx dev billsy

# Run commands for affected projects only
pnpm nx affected:build
pnpm nx affected:test

# Generate dependency graph
pnpm nx graph
```

## 📊 Database Management

```sh
# View database in Prisma Studio
pnpm prisma studio

# Reset database
pnpm prisma migrate reset

# Deploy migrations to production
pnpm prisma migrate deploy
```

## 🛠️ Tech Stack

### Frontend

- **Next.js 15** - React framework with App Router
- **shadcn/ui** - Beautiful, accessible UI components
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library for React
- **React Query/SWR** - Data fetching and state management

### Backend

- **NestJS** - Progressive Node.js framework for building APIs
- **Prisma** - Next-generation database ORM
- **Better Auth** - Modern authentication solution
- **PostgreSQL/MySQL** - Relational database
- **JWT** - JSON Web Tokens for authentication

### DevOps & Tooling

- **Nx** - Smart monorepo build system
- **pnpm** - Fast, disk space efficient package manager
- **ESLint & Prettier** - Code linting and formatting
- **Jest** - Testing framework
- **Docker** - Containerization (future)
- **GitHub Actions** - CI/CD pipeline (future)

## 🐛 Troubleshooting

### Node.js Version Issues

If you encounter build errors, ensure you're using Node.js 22:

```sh
node --version  # Should be v22.19.0 or higher
```

### VSCode Terminal Node Version

If your VSCode terminal shows an older Node version:

1. Restart VSCode completely
2. Ensure nvm is properly configured in your shell profile
3. Set the default Node version: `nvm alias default 22.19.0`

### pnpm Installation Issues

If pnpm commands fail:

```sh
# Reinstall pnpm
npm uninstall -g pnpm
npm install -g pnpm@latest
```

### Nx Cache Issues

If you encounter build cache issues:

```sh
pnpm nx reset
```

## 📝 Recent Changes

### Nx Migration (December 2024)

- Migrated from standalone Next.js app to Nx monorepo structure
- Moved main application to `apps/billsy/`
- Updated build system to use Nx targets and executors
- Configured proper working directories for Next.js builds
- Fixed Prisma schema path references for monorepo structure
- Updated package.json scripts to delegate to Nx commands

## 🚧 Roadmap & Next Steps

### Phase 1: Nx Monorepo Setup ✅ COMPLETED

- [x] Configure Nx workspace
- [x] Migrate Next.js app to `apps/billsy/`
- [x] Fix build system and dependencies
- [x] Update documentation

### Phase 2: Component Architecture Restructuring 🚀 IN PROGRESS

The current migration to Nx monorepo is the **first step**. The next phase involves restructuring the existing codebase for better separation of concerns and scalability.

#### Planned Component Layer Structure:

```
apps/
├── billsy/                   # Frontend Next.js application
│   ├── app/                  # Next.js app router pages
│   ├── project.json          # Nx project configuration
│   ├── next.config.ts        # Next.js configuration
│   └── package.json          # App-specific dependencies
└── billsy-api/               # Backend NestJS API
    ├── src/
    │   ├── modules/          # Feature modules (auth, users, goals, etc.)
    │   ├── common/           # Shared decorators, guards, interceptors
    │   └── main.ts           # Application entry point
    ├── project.json          # Nx project configuration
    └── package.json          # API-specific dependencies

libs/
├── shared/                   # Shared libraries between FE & BE
│   ├── types/                # TypeScript type definitions
│   │   ├── entities/         # Database entity types (shared from Prisma)
│   │   ├── dtos/             # Data Transfer Objects
│   │   └── api/              # API request/response types
│   ├── constants/            # Application constants
│   ├── enums/                # Shared enumerations
│   └── utils/                # Pure utility functions
├── ui/                       # Frontend UI components library
│   ├── primitives/           # Basic UI elements (Button, Input, etc.)
│   ├── compositions/         # Complex UI compositions
│   └── layouts/              # Layout components
├── features/                 # Feature-specific components & logic
│   ├── auth/                 # Authentication (FE components + API client)
│   │   ├── components/       # React components
│   │   ├── services/         # API client services
│   │   └── types/            # Feature-specific types
│   ├── dashboard/            # Dashboard feature
│   ├── goals/                # Goals tracking feature
│   ├── reports/              # Reports and analytics feature
│   └── invoices/             # Invoice management feature
├── api-client/               # Frontend API client library
│   ├── services/             # API service classes
│   ├── hooks/                # React Query/SWR hooks
│   └── types/                # API client types
└── database/                 # Database utilities (Prisma shared)
    ├── schema/               # Prisma schema files
    ├── migrations/           # Database migrations
    ├── seeds/                # Database seeding
    └── utils/                # Database utility functions
```

#### Migration Tasks:

- [ ] **Setup NestJS API Application**: Create backend API with proper structure
  - [ ] Generate `apps/billsy-api/` with NestJS
  - [ ] Configure authentication modules (JWT, session management)
  - [ ] Set up API modules for goals, reports, invoices, users
  - [ ] Implement proper error handling and validation
- [ ] **Shared Types & Database**: Establish type-safe communication
  - [ ] Move Prisma schema to `libs/database/schema/`
  - [ ] Generate shared entity types from Prisma schema
  - [ ] Create DTOs in `libs/shared/types/dtos/`
  - [ ] Set up API request/response types in `libs/shared/types/api/`
- [ ] **Extract UI Components**: Move generic UI components to dedicated library
  - [ ] Migrate `components/ui/*` to `libs/ui/primitives/`
  - [ ] Create compositions for complex UI patterns
  - [ ] Establish component documentation with Storybook
- [ ] **Create Feature Libraries**: Organize by business domain
  - [ ] `libs/features/auth/` - Login, signup components + API services
  - [ ] `libs/features/dashboard/` - Dashboard components + data fetching
  - [ ] `libs/features/goals/` - Goals tracking + API integration
  - [ ] `libs/features/reports/` - Reports, charts + analytics services
  - [ ] `libs/features/invoices/` - Invoice management + CRUD operations
- [ ] **API Client Library**: Type-safe frontend-backend communication
  - [ ] Create `libs/api-client/` with generated API clients
  - [ ] Implement React Query/SWR hooks for data fetching
  - [ ] Add proper error handling and loading states
  - [ ] Set up request/response interceptors

- [ ] **Database Library**: Centralized database utilities
  - [ ] Move `prisma/` to `libs/database/`
  - [ ] Create database utility functions
  - [ ] Set up database seeding and testing utilities
  - [ ] Configure multi-environment database connections

- [ ] **Package Dependencies**: Establish clear dependency graph
  - [ ] Apps can depend on any libs
  - [ ] Feature libs can depend on shared, ui, and api-client libs
  - [ ] UI libs should have minimal dependencies
  - [ ] Shared libs should be dependency-free (pure utilities)
  - [ ] Prevent circular dependencies between libs

#### Benefits of This Structure:

- **🔧 Maintainability**: Clear separation of concerns between frontend, backend, and shared code
- **🚀 Scalability**: Easy to add new features without conflicts across full stack
- **♻️ Reusability**: UI components and business logic can be shared across applications
- **🧪 Testability**: Isolated libraries are easier to test independently
- **👥 Team Collaboration**: Frontend and backend developers can work independently
- **📦 Bundle Optimization**: Better tree-shaking and code splitting for frontend
- **🔒 Type Safety**: Shared types ensure type-safe communication between FE and BE
- **🏗️ Nx Semantics**: Follows Nx best practices with `apps/` and `libs/` structure
- **🔄 Code Generation**: Nx generators can scaffold consistent code across the stack

### Phase 3: Advanced Nx Features & Production Setup

- [ ] Implement Nx generators for consistent component and API endpoint creation
- [ ] Set up automated testing strategies per library and application
- [ ] Configure Nx Cloud for distributed builds and caching
- [ ] Add Storybook for component documentation
- [ ] Set up end-to-end testing with Cypress/Playwright
- [ ] Implement Docker containerization for both apps
- [ ] Configure CI/CD pipeline with GitHub Actions
- [ ] Set up monitoring and logging (DataDog, Sentry)
- [ ] Implement database migrations and deployment strategies

---

Built with ❤️ for modern financial management
