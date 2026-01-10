import { Button } from './components/Button'

function App() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Welcome to Storybook</h1>
      <p>Run <code>npm run storybook</code> to see your components</p>
      <Button label="Click me" primary />
    </div>
  )
}

export default App
