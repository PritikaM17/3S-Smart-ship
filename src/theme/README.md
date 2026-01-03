# Tree Theme System

This theme system provides a scalable way to customize the appearance of tree nodes without modifying CSS files.

## Features

- **Centralized Configuration**: All colors and styles are defined in one place
- **Type-Safe**: Full TypeScript support with interfaces
- **Node Type Support**: Define themes for different node types
- **Node Overrides**: Override specific nodes by ID
- **Easy to Extend**: Add new node types or modify existing ones easily

## Usage

### Basic Usage

The theme is automatically applied using the default theme:

```typescript
import Tree from './components/Tree/Tree';
import { hierarchyData } from './data/hierarchyData';

<Tree data={hierarchyData} />
```

### Custom Theme

Create a custom theme by extending the default theme:

```typescript
import Tree from './components/Tree/Tree';
import { defaultTreeTheme, TreeTheme } from './theme/treeTheme';
import { hierarchyData } from './data/hierarchyData';

const customTheme: TreeTheme = {
  ...defaultTreeTheme,
  nodeTypes: {
    ...defaultTreeTheme.nodeTypes,
    // Add a new node type
    myNewType: {
      backgroundColor: '#f0f0f0',
      color: '#333333',
      borderColor: '#cccccc',
      expandButton: {
        color: '#333333',
        borderColor: '#cccccc',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
    // Override an existing type
    equipment: {
      ...defaultTreeTheme.nodeTypes.equipment,
      backgroundColor: '#1e88e5', // Different shade of blue
    },
  },
  // Override specific nodes by ID
  nodeOverrides: {
    'special-node-id': {
      backgroundColor: '#ff5722',
      color: '#ffffff',
      // ... other properties
    },
  },
  // Customize line appearance
  lineColor: '#78909c',
  lineWidth: 3,
  cornerRadius: 10,
  // Customize search highlight
  highlight: {
    backgroundColor: '#ffc107',
    padding: '2px 4px',
    borderRadius: '4px',
    fontWeight: '700',
  },
};

<Tree data={hierarchyData} theme={customTheme} />
```

## Adding New Node Types

1. Add the new type to your data structure (in `types/index.ts`):

```typescript
export type NodeType = 'equipment_type' | 'equipment' | 'assembly' | 'component' | 'myNewType';
```

2. Add the theme configuration in `theme/treeTheme.ts`:

```typescript
export const defaultTreeTheme: TreeTheme = {
  nodeTypes: {
    // ... existing types
    myNewType: {
      backgroundColor: '#your-color',
      color: '#your-text-color',
      borderColor: '#your-border-color',
      expandButton: {
        color: '#your-button-color',
        borderColor: '#your-button-border',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      },
    },
  },
  // ...
};
```

3. Use the new type in your data:

```typescript
{
  id: "my-node",
  name: "My Node",
  type: "myNewType",
  children: []
}
```

## Theme Properties

### NodeTheme

- `backgroundColor`: Background color of the node
- `color`: Text color
- `borderColor`: Border color
- `expandButton`: Styles for the expand/collapse button
  - `color`: Button text/icon color
  - `borderColor`: Button border color
  - `backgroundColor`: Button background color

### TreeTheme

- `nodeTypes`: Record of node type themes
- `nodeOverrides`: Optional overrides for specific node IDs
- `lineColor`: Color of connecting lines
- `lineWidth`: Width of connecting lines
- `cornerRadius`: Radius for rounded corners in lines
- `highlight`: Styles for search highlight
  - `backgroundColor`: Highlight background
  - `padding`: Highlight padding
  - `borderRadius`: Highlight border radius
  - `fontWeight`: Highlight font weight

## Benefits

1. **Scalability**: Easy to add new node types without touching CSS
2. **Maintainability**: All styling in one place
3. **Flexibility**: Override specific nodes or entire types
4. **Type Safety**: TypeScript ensures correct theme structure
5. **No CSS Conflicts**: Styles are applied inline, avoiding CSS specificity issues

