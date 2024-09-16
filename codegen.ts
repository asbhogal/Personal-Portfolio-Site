import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: './src/graphql/**/*.{ts,tsx}',
  generates: {
    '@/graphql/generated/schema.ts': {
      plugins: [
        'typescript-operations',
        'typescript',
        'typescript-graphql-request',
      ],
    },
  },
  overwrite: true,
  schema: 'http://localhost:3000/api/graphql',
};
export default config;
