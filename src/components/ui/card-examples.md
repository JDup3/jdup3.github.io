# Enhanced Card Components with Line Numbers & Typing Animation

## Overview

The Card component system includes two main features: static line-numbered code display and animated typing effects that simulate real-time code writing.

## Core Components

### Static Components

- **`CardContentWithCode`** - Code display with automatic line numbering
- **`CodeBlock`** - Standalone code container with line numbers
- **`CodeLine`** - Individual line with optional numbering

### Animated Components

- **`AnimatedCardContentWithCode`** - Drop-in replacement with typing animation
- **`AnimatedCodeBlock`** - Sequential line-by-line typing container
- **`AnimatedCodeLine`** - Individual line with typing cursor support

## Key Features

### Line Numbering System

- Automatic sequential numbering starting from any line
- Fixed-width alignment that prevents layout shifts
- Responsive design with proper text wrapping
- Customizable styling for different themes

### Typing Animation

- Character-by-character typing simulation
- **Viewport-triggered**: Animations start only when cards become visible
- **One-time execution**: Each animation runs once per page visit
- **Navigation-triggered**: Animations restart when navigating between pages
- Configurable speed (30-50ms per character) and line delays (300-500ms)
- Flashing cursor during typing and persistent terminal cursor after completion
- Preserves all React element styling and structure during animation

## Usage Examples

### Static Code Card

```tsx
<CardContentWithCode
  startLine={1}
  lines={[<>const message = "Hello World";</>, <>console.log(message);</>]}
/>
```

### Animated Code Card

```tsx
<AnimatedCardContentWithCode
  typingSpeed={30}        // Fast typing
  lineDelay={300}         // Quick line transitions
  lines={[
    <>interface Developer {</>,
    <>  name: string;</>,
    <>  skills: string[];</>,
    <>}</>,
  ]}
/>
```

## Animation Behavior

1. **Viewport Detection**: Card waits until it becomes visible (10% threshold)
2. **Start**: Card appears empty and animation begins
3. **Typing**: Each line types character-by-character with flashing cursor
4. **Transition**: Brief pause between lines for readability
5. **Completion**: Shows persistent terminal prompt (`$` with flashing cursor)
6. **Reset**: Animation resets when navigating to different pages and back

## Technical Implementation

- **State Management**: Tracks current line, character position, and completion status
- **Content Processing**: Recursively handles React elements while preserving styling
- **Performance**: Uses efficient timers with proper cleanup and minimal re-renders
- **Responsive**: Maintains mobile compatibility and proper text wrapping

## Benefits

- **Engaging UX**: Creates dynamic, interactive feel for portfolio content
- **Consistent Styling**: Matches VS Code theme with proper syntax highlighting
- **Flexible Configuration**: Adjustable speeds for different content types
- **Accessibility Ready**: Framework supports reduced motion preferences
- **Type Safe**: Full TypeScript support with comprehensive prop types
