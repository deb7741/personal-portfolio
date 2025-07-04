# Portfolio Website Application

## Overview

This is a full-stack portfolio website application built with React, TypeScript, and Express. The application showcases a personal portfolio with sections for about, skills, projects, and contact information. It uses modern web technologies including Tailwind CSS for styling, shadcn/ui for UI components, and includes a backend setup with database integration capabilities.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for client-side routing
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library based on Radix UI primitives
- **State Management**: TanStack Query for server state management
- **Build Tool**: Vite for development and production builds

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **Session Management**: Express sessions with PostgreSQL store support
- **Development**: Hot reload with Vite integration

## Key Components

### Frontend Components
- **Navigation**: Fixed header with responsive mobile menu
- **Hero Section**: Main landing area with personal introduction
- **About Section**: Detailed personal information and quick facts
- **Skills Section**: Technology and expertise showcase
- **Portfolio Section**: Project gallery with filtering capabilities
- **Contact Section**: Contact form with validation
- **Footer**: Social links and additional information

### Backend Infrastructure
- **Storage Interface**: Abstracted storage layer with in-memory implementation
- **Route Registration**: Modular route setup in `/api` namespace
- **Error Handling**: Centralized error middleware
- **Request Logging**: Custom middleware for API request tracking

### Database Schema
- **Users Table**: Basic user management with username and password fields
- **Migrations**: Drizzle-kit configuration for database schema management

## Data Flow

1. **Client Requests**: Frontend makes API calls through TanStack Query
2. **Request Processing**: Express server handles requests with middleware chain
3. **Data Operations**: Storage interface abstracts database operations
4. **Response Handling**: Standardized JSON responses with error handling
5. **State Updates**: TanStack Query manages client-side caching and updates

## External Dependencies

### Core Dependencies
- **@neondatabase/serverless**: PostgreSQL database connection
- **@tanstack/react-query**: Server state management
- **@radix-ui/***: Headless UI components
- **drizzle-orm**: Database ORM and query builder
- **wouter**: Lightweight React router
- **class-variance-authority**: Utility for conditional CSS classes

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type safety and development experience
- **Tailwind CSS**: Utility-first CSS framework
- **ESBuild**: Fast JavaScript bundler for production

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite compiles React application to static assets
2. **Backend Build**: ESBuild bundles Express server with external package references
3. **Output Structure**: Frontend assets in `dist/public`, server bundle in `dist/index.js`

### Environment Configuration
- **Development**: Vite dev server with HMR and Express middleware integration
- **Production**: Standalone Express server serving static files and API routes
- **Database**: PostgreSQL connection via environment variable `DATABASE_URL`

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database instance
- Environment variables for database connection
- Static file serving capability

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```