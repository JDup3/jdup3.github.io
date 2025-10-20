# Card Component with Line Numbers

The Card component now includes reusable line number functionality through several new components:

## Components

### `CardContentWithCode`

A specialized CardContent that automatically adds line numbers to code content.

**Props:**

- `startLine?: number` - Starting line number (default: 1)
- `showLineNumbers?: boolean` - Whether to show line numbers (default: true)
- `lineNumberClassName?: string` - Custom className for line numbers
- `lines: React.ReactNode[]` - Array of line content

### `CodeBlock`

A standalone component for displaying code with line numbers.

**Props:**

- `startLine?: number` - Starting line number (default: 1)
- `showLineNumbers?: boolean` - Whether to show line numbers (default: true)
- `lineNumberClassName?: string` - Custom className for line numbers
- `lines: React.ReactNode[]` - Array of line content

### `CodeLine`

A component for individual code lines with optional line numbers.

**Props:**

- `lineNumber?: number` - Line number to display
- `showLineNumber?: boolean` - Whether to show line number (default: true)
- `lineNumberClassName?: string` - Custom className for line number

## Usage Examples

### Basic Usage with CardContentWithCode

```tsx
import { Card, CardHeader, CardContentWithCode } from '../components/ui/card';

<Card>
  <CardHeader>
    <h3>Example Code</h3>
  </CardHeader>
  <CardContentWithCode
    lines={[
      <>const message = "Hello World";</>,
      <>console.log(message);</>,
      <>// This is a comment</>,
    ]}
  />
</Card>;
```

### Custom Starting Line Number

```tsx
<CardContentWithCode
  startLine={10}
  lines={[<>function example() {'{'}</>, <> return true;</>, <>{'}'}</>]}
/>
```

### Hide Line Numbers

```tsx
<CardContentWithCode
  showLineNumbers={false}
  lines={[<>No line numbers here</>, <>Just plain content</>]}
/>
```

### Custom Line Number Styling

```tsx
<CardContentWithCode
  lineNumberClassName="text-blue-500 font-bold"
  lines={[<>Custom styled line numbers</>, <>Look different from default</>]}
/>
```

### Using CodeBlock Standalone

```tsx
import { CodeBlock } from '../components/ui/card';

<CodeBlock
  lines={[
    <>import React from 'react';</>,
    <>export default function App() {'{'}</>,
    <>
      {' '}
      return <div>Hello</div>;
    </>,
    <>{'}'}</>,
  ]}
/>;
```

### Manual Line Creation

```tsx
import { CodeLine } from '../components/ui/card';

<div className="space-y-1">
  <CodeLine lineNumber={1}>
    <>const x = 1;</>
  </CodeLine>
  <CodeLine lineNumber={2}>
    <>const y = 2;</>
  </CodeLine>
  <CodeLine hideLineNumber>
    <>// This line has no number</>
  </CodeLine>
</div>;
```

## Benefits

1. **Consistent Styling**: All line numbers use the same styling by default
2. **Flexible Starting Point**: Can start from any line number
3. **Optional Display**: Can easily hide/show line numbers
4. **Customizable**: Can override line number styling
5. **Reusable**: Works across different card types and contexts
6. **Type Safe**: Full TypeScript support with proper prop types
