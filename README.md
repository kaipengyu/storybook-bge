# Storybook Email Component Library

A modern React email component library built with [Storybook](https://storybook.js.org/) and [Vite](https://vitejs.dev/).

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start Storybook at [http://localhost:6006](http://localhost:6006)

## 📁 Project Structure

```
├── .storybook/          # Storybook configuration
│   ├── main.js
│   └── preview.js
├── src/
│   ├── components/
│   │   └── Email/      # Email components
│   │       ├── Header/
│   │       ├── HeroImage/
│   │       ├── Title/
│   │       ├── Content/
│   │       ├── Button/
│   │       ├── Footer/
│   │       └── EmailTemplate/
│   └── stories/        # Example stories
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
| `npm run dev` | Start Storybook dev server on port 6006 (includes AI Scanner at /ai-scanner) |
| `npm run build` | Build Storybook for production |
| `npm run preview` | Preview production build |

## 🪄 AI Email Scanner

The AI Email Scanner is a standalone tool that converts PDF email designs into production-ready HTML code using AI.

### Features
- Upload email design PDFs
- AI-powered component detection using Google Gemini 2.0
- Real-time preview
- Editable component properties
- Export HTML code

### Access
- **Development**: [http://localhost:6006/ai-scanner](http://localhost:6006/ai-scanner) (after `npm run dev`)
- **Production**: `https://yourdomain.com/ai-scanner` (after deploying to Vercel)
- Runs within the same server as a separate route

### Requirements
Make sure you've set up your `VITE_GEMINI_API_KEY` in the `.env` file (see Environment Setup above).

## 🚀 Deployment

### Vercel Deployment

This project is configured to deploy both apps to Vercel:

**URLs after deployment:**
- **Storybook**: `https://your-project.vercel.app` (root domain)
- **AI Scanner**: `https://your-project.vercel.app/ai-scanner` (same domain, different route)

**Setup:**

1. Push your code to GitHub/GitLab/Bitbucket

2. Connect to Vercel:
   ```bash
   vercel
   ```

3. **IMPORTANT**: Add environment variables in Vercel dashboard:
   - Go to Project Settings → Environment Variables
   - Add: `VITE_GEMINI_API_KEY` = your API key
   - Apply to: Production, Preview, and Development

4. Deploy:
   ```bash
   vercel --prod
   ```

**Build Process:**
The `npm run build` command:
1. Builds Storybook → `storybook-static/`
2. Builds Scanner → `storybook-static/ai-scanner/`
3. Both are served from the same domain

**Continuous Deployment:**
Once connected to Vercel, every push to your main branch automatically deploys both apps.

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
