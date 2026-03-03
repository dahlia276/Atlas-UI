# 🗺️ Atlas UI

> A modern, accessible React component library built with TypeScript and Tailwind CSS.

![Tests](https://img.shields.io/badge/tests-passing-brightgreen)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue)
![Storybook](https://img.shields.io/badge/Storybook-10.x-ff4785)
![Tailwind](https://img.shields.io/badge/Tailwind-4.x-38bdf8)

## 🚀 Live Demo

[View Storybook →](https://atlas-ui-lgp4-l48or76xq-dahlia276s-projects.vercel.app/)

## ✨ Components

| Component | Description |
|-----------|-------------|
| `Button`  | 5 variants, 3 sizes, loading state, fully accessible |
| `Input`   | Label, error state, helper text, fully accessible |
| `Badge`   | 5 semantic color variants for status indicators |
| `Card`    | Compound component with Header, Content, and Footer |

## 🛠️ Tech Stack

- **React 18** with hooks
- **TypeScript 5** for type safety
- **Tailwind CSS 4** for styling
- **Storybook 10** for component documentation
- **Vitest + Testing Library** for unit tests
- **Vite** for fast development and builds

## 🏗️ Architecture Decisions

**Why forwardRef?** Interactive components (Button, Input) use `forwardRef` so parent components can attach refs for focus management, which is required by form libraries like React Hook Form and for proper accessibility tooling.

**Why compound components for Card?** The compound pattern (`<Card.Header>`, `<Card.Content>`) provides a flexible, readable API without prop-drilling. The same pattern is used by Radix UI and shadcn/ui.

**Why the `cn()` utility?** The `clsx` + `tailwind-merge` combo resolves Tailwind class conflicts automatically and allows consumers to safely override styles via `className`.

## 🧪 Testing

```bash
npm run test
```

Tests focus on user-visible behavior rather than implementation details:
- Correct rendering and structure
- Accessible markup (aria attributes, label association)
- User interactions (click, type)
- State changes (loading, error, disabled)

## 📁 Project Structure

```
src/
├── components/
│   ├── Button/   (Button.tsx, Button.test.tsx, Button.stories.tsx)
│   ├── Input/    (Input.tsx, Input.test.tsx, Input.stories.tsx)
│   ├── Badge/    (Badge.tsx, Badge.stories.tsx)
│   └── Card/     (Card.tsx, Card.stories.tsx)
├── utils/
│   └── cn.ts     (clsx + tailwind-merge utility)
└── index.ts      (library entry point)
```

## 🗺️ Roadmap

These are the features and components I plan to add next, roughly in priority order.

**Components**
- [ ] `Select` — accessible dropdown using Radix UI primitives for keyboard navigation
- [ ] `Modal` / `Dialog` — focus-trapped overlay with Radix UI Dialog
- [ ] `Toast` — notification system with queue management
- [ ] `Tooltip` — accessible hover/focus tooltip
- [ ] `Checkbox` and `Radio` — fully styled form controls
- [ ] `Tabs` — accessible tabbed interface

**Developer Experience**
- [ ] Generate TypeScript declaration files on build
- [ ] Add a theming system so consumers can customize the color palette
- [ ] Create a demo app showing components used together in realistic layouts

## 🚀 Getting Started

```bash
# Clone and install
git clone https://github.com/YOUR_USERNAME/atlas-ui.git
cd atlas-ui
npm install

# Start Storybook
npm run storybook

# Run tests
npm run test
```