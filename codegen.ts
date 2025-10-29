// #region Environment variable file parsing
// Environment file parsing and updating
import * as DotEnv from 'dotenv'
import { expand } from 'dotenv-expand'
import path from 'node:path'
import fs from 'node:fs'
import figures from 'figures'
import chalk from 'chalk'

// Process environment files, to ensure the enviornment configuration is applied
const envFiles : string[] = [".env", ".env.local"]
if (process.env.NODE_ENV) {
    envFiles.push(`.env.${ process.env.NODE_ENV }`)
    envFiles.push(`.env.${ process.env.NODE_ENV }.local`)
}
envFiles.map(s => path.join(process.cwd(), s)).filter(s => fs.existsSync(s)).reverse().forEach(fileName => {
    var result = DotEnv.config({ path: fileName, override: false })
    expand(result)
    console.log(`${ chalk.greenBright(figures.tick) } Processed ${fileName}`)
})
// #endregion

// Actual code generation setup
import type { CodegenConfig  } from '@graphql-codegen/cli'

// Get schema URL from environment
const GRAPHQL_ENDPOINT = `${process.env.OPTIMIZELY_GRAPH_GATEWAY || 'https://cg.optimizely.com'}/content/v2`;
const GRAPHQL_KEY = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY || process.env.OPTIMIZELY_GRAPH_APP_KEY;

// Create the configuration itself
const config: CodegenConfig = {
    schema: [{
        [`${GRAPHQL_ENDPOINT}?auth=${GRAPHQL_KEY}`]: {
            headers: {}
        }
    }],

    // Allow & parse GraphQL Queries from anywhere within the codebase
    documents: [
        // Add local GraphQL files
        'src/**/*.graphql',

        // Add Definitions from components
        'src/**/!(*.d).{ts,tsx}'
    ],
    generates: {
        './src/gql/': {
            preset: 'client',
            presetConfig: {
                gqlTagName: 'gql',
                fragmentMasking: { unmaskFunctionName: 'getFragmentData' }
            },
            config: {
                useTypeImports: true,
                skipTypename: false,
                enumsAsTypes: true,
                scalars: {
                    DateTime: 'string',
                    Date: 'string'
                }
            },
            plugins: []
        }
    },
    ignoreNoDocuments: false
}

export default config