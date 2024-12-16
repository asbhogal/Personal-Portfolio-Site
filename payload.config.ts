import path from 'path';
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob';
import { en } from 'payload/i18n/en';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Users } from './src/payload/collections/users';
import { Pages } from './src/payload/collections/pages';
import { Media } from './src/payload/collections/media';
import { Projects } from './src/payload/collections/projects';
import { Footer } from './src/payload/globals/footer';
import { Header } from './src/payload/globals/header';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error('Both ADMIN_EMAIL and ADMIN_PASSWORD must be set.');
}

if (!process.env.BLOB_READ_WRITE_TOKEN) {
  throw new Error('BLOB_READ_WRITE_TOKEN must be set.');
}

export default buildConfig({
  admin: {
    autoLogin: {
      email: process.env.ADMIN_EMAIL,
      password: process.env.ADMIN_PASSWORD,
      prefillOnly: true,
    },
    livePreview: {
      collections: ['pages'],
      url: 'http://localhost:3000',
    },
  },
  collections: [Users, Pages, Projects, Media],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  editor: lexicalEditor(),

  globals: [Header, Footer],

  i18n: {
    supportedLanguages: { en },
  },
  plugins: [
    vercelBlobStorage({
      collections: {
        media: true,
      },
      enabled: true,
      token: process.env.BLOB_READ_WRITE_TOKEN,
    }),
  ],
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
