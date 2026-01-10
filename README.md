# Storybook Component Library

A modern React component library built with [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/).

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

**Start Storybook** (recommended for component development):

```bash
npm run storybook
```

Opens Storybook at [http://localhost:6006](http://localhost:6006)

**Start the app**:

```bash
npm run dev
```

## 📁 Project Structure

```
├── .storybook/
│   ├── main.js           # Storybook configuration
│   └── preview.js        # Global decorators & parameters
├── src/
│   ├── components/       # UI components
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   └── Button.stories.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## 📝 Writing Stories

Stories are files that end in `.stories.jsx`. Each story represents a different state of your component.

### Basic Story Structure

```jsx
import { MyComponent } from './MyComponent'

export default {
  title: 'Components/MyComponent',
  component: MyComponent,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    label: 'Hello World',
  },
}

export const Variant = {
  args: {
    label: 'Different State',
    variant: 'secondary',
  },
}
```

### Adding a New Component

1. Create your component in `src/components/`:

```jsx
// src/components/Card.jsx
export const Card = ({ title, children }) => (
  <div className="card">
    <h2>{title}</h2>
    {children}
  </div>
)
```

2. Create a stories file:

```jsx
// src/components/Card.stories.jsx
import { Card } from './Card'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
}

export const Default = {
  args: {
    title: 'Card Title',
    children: 'Card content goes here.',
  },
}
```

3. View it in Storybook at [http://localhost:6006](http://localhost:6006)

## 🛠️ Available Scripts

| Command | Description |
|---------|-------------|
| `npm run storybook` | Start Storybook dev server on port 6006 |
| `npm run build-storybook` | Build static Storybook for deployment |
| `npm run dev` | Start Vite dev server |
| `npm run build` | Build app for production |
| `npm run preview` | Preview production build |

## 📦 Included Addons

- **[@storybook/addon-essentials](https://storybook.js.org/docs/essentials/introduction)** - Controls, actions, viewport, backgrounds, docs
- **[@storybook/addon-interactions](https://storybook.js.org/docs/writing-tests/interaction-testing)** - Play functions & interaction testing
- **[@storybook/addon-links](https://storybook.js.org/docs/sharing/linking-stories)** - Link between stories

## 🔗 Useful Links

- [Storybook Documentation](https://storybook.js.org/docs)
- [Writing Stories](https://storybook.js.org/docs/writing-stories)
- [Args & Controls](https://storybook.js.org/docs/essentials/controls)
- [Autodocs](https://storybook.js.org/docs/writing-docs/autodocs)
- [Vite Documentation](https://vitejs.dev/guide/)

## 📄 License

ISC
