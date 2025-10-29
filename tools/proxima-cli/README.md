# Proxima CLI

## Features

- **Content Type Management**: Pull and push content type definitions from/to Optimizely CMS
- **Code Generation**: Automatically generate React components, GraphQL fragments, and TypeScript types
- **Component Factories**: Auto-generate component registries and factories
- **Smart File Management**: Preserves custom modifications using `@not-modified` markers
- **Type Safety**: Ensures type-safe integration between CMS and Next.js

## Installation

The tool is already bundled with your solution. To install dependencies:

```bash
cd tools/proxima-cli
yarn install
yarn build
```

## Configuration

The tool reads configuration from your root `.env` file:

```env
# Required for fetching content types from Optimizely SaaS
OPTIMIZELY_GRAPH_GATEWAY=https://cg.optimizely.com
OPTIMIZELY_GRAPH_SINGLE_KEY=your_single_key_here

# Alternative authentication (if not using SINGLE_KEY)
OPTIMIZELY_GRAPH_APP_KEY=your_app_key
OPTIMIZELY_GRAPH_SECRET=your_graph_secret

# CMS API configuration (for future features)
OPTIMIZELY_CMS_URL=your_cms_domain
OPTIMIZELY_CMS_CLIENT_ID=your_client_id
OPTIMIZELY_CMS_CLIENT_SECRET=your_client_secret
```

**Note:** To use `yarn proxima:list` with remote content types, you need to configure either:
- `OPTIMIZELY_GRAPH_SINGLE_KEY` (recommended for read-only access), OR
- `OPTIMIZELY_GRAPH_APP_KEY` (for read/write access)

You can obtain these keys from your Optimizely Graph dashboard.

## Usage

### Available Commands

#### Next.js Code Generation

```bash
# Generate all components, fragments, and factories
yarn proxima:create

# Generate React components only
yarn proxima:components

# Generate GraphQL fragments only
yarn proxima:fragments

# Generate component factories only
yarn proxima:factory
```

#### Content Type Management

```bash
# List all content types from Optimizely SaaS and local project
# (requires OPTIMIZELY_GRAPH_SINGLE_KEY or OPTIMIZELY_GRAPH_APP_KEY in .env)
yarn proxima:list

# List only local content types (no API credentials needed)
yarn proxima:list --local-only

# List only remote content types from Optimizely SaaS
yarn proxima:list --remote-only
```

The `yarn proxima:list` command will:
- Show all content types from both your local project and Optimizely SaaS
- Categorize them by type (Pages, Components/Blocks, Experiences)
- Highlight any types that exist in one place but not the other
- Help you identify sync issues between local and remote

#### CMS Utilities

```bash
# Display CMS configuration
yarn proxima:info

# Display help
yarn proxima:help
```

### Options

- `-f, --force`: Force overwrite modified files (bypasses `@not-modified` protection)
- `-d, --dir <path>`: Specify custom components directory (default: `./src/components/cms`)
- `--local-only`: Show only local content types (for `yarn proxima:list`)
- `--remote-only`: Show only remote content types from Optimizely SaaS (for `yarn proxima:list`)

### Examples

```bash
# Generate all code from existing type definitions
yarn proxima:create

# Regenerate only the component factories
yarn proxima:factory
```

## How It Works

### File Structure

The tool generates files in the following structure:

```
src/components/cms/
├── page/                          # Page components
│   ├── StartPage/
│   │   ├── index.tsx              # React component
│   │   ├── StartPage.page.graphql # GraphQL fragment
│   │   └── StartPage.opti-type.json # Type definition
│   └── index.ts                   # Page factory
├── component/                     # Block components
│   ├── TextBlock/
│   ├── SliderBlock/
│   └── index.ts                   # Component factory
├── experience/                    # Experience components
│   └── index.ts                   # Experience factory
└── index.ts                       # Main factory
```

### Code Preservation

Files generated with the `@not-modified` marker will not be overwritten unless the `--force` flag is used. This allows you to customize generated components without losing changes when regenerating.

Example:
```typescript
// @not-modified => When this line is removed, the "force" parameter is required to overwrite
```

### Workflow

1. **Define Content Types**: Create or modify `.opti-type.json` files
2. **Generate Code**: Run `yarn cms:create`
3. **Compile GraphQL**: Run `yarn compile` to generate TypeScript types
4. **Customize**: Edit generated components as needed
5. **Preserve Changes**: The tool won't overwrite your customizations

## Integration with Your Project

The following scripts are available in your root `package.json`:

```json
{
  "scripts": {
    "proxima:setup": "yarn workspace @epinova/proxima-cli install && yarn workspace @epinova/proxima-cli build",
    "proxima:build": "yarn workspace @epinova/proxima-cli build",
    "proxima:create": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev nextjs create -d ../../src/components/cms",
    "proxima:components": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev nextjs components -d ../../src/components/cms",
    "proxima:fragments": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev nextjs fragments -d ../../src/components/cms",
    "proxima:factory": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev nextjs factory -d ../../src/components/cms",
    "proxima:list": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev types list -d ../../src/components/cms",
    "proxima:help": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev help",
    "proxima:info": "yarn proxima:build && yarn workspace @epinova/proxima-cli run dev cms info"
  }
}
```

Run commands from your project root:

```bash
yarn proxima:create
yarn proxima:info
yarn proxima:help
```

## Extending the Tool

### Adding Custom Templates

Edit `src/generators/templates.ts` to customize the generated code templates.

### Adding CMS API Integration

Edit `src/cms/client.ts` to implement actual API calls to your CMS. The current implementation provides placeholders for:

- Authentication (OAuth2)
- Fetching content types
- Pushing content types
- Version information

### Adding New Commands

Create new command files in `src/commands/` and register them in `src/cli.ts`.

## Differences from opti-cms

This custom tool provides the same core functionality as `opti-cms` but:

- **Bundled**: Lives within your solution for easier customization
- **Simplified**: Focuses on essential features for your use case
- **Extensible**: Easy to modify and extend for your specific needs
- **Transparent**: Full source code available for customization

## Troubleshooting

### No content types found

Ensure `.opti-type.json` files exist in your components directory. You can either:
- Manually create them
- Implement the CMS API client to pull them from Optimizely

### Files not being generated

Check:
1. The components directory path is correct
2. You have write permissions
3. The type definition files are valid JSON

### Modified files not updating

Files with customizations are protected by the `@not-modified` marker. Remove the marker from files you want to regenerate, or use the `--force` flag in the CLI if that option is available.

## License

MIT
