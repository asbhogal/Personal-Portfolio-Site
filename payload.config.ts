import path from 'path';
import { en } from 'payload/i18n/en';
import { lexicalEditor } from '@payloadcms/richtext-lexical';
import { mongooseAdapter } from '@payloadcms/db-mongodb';
import { buildConfig } from 'payload';
import sharp from 'sharp';
import { fileURLToPath } from 'url';
import { Users } from './app/(payload)/collections/users';
import { Pages } from './app/(payload)/collections/pages';
import { Media } from './app/(payload)/collections/media';
import { Footer } from './app/(payload)/globals/footer';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (!process.env.ADMIN_EMAIL || !process.env.ADMIN_PASSWORD) {
  throw new Error('Both ADMIN_EMAIL and ADMIN_PASSWORD must be set.');
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
  collections: [Users, Pages, Media],
  db: mongooseAdapter({
    url: process.env.MONGODB_URI || '',
  }),
  editor: lexicalEditor(),

  globals: [Footer],

  i18n: {
    supportedLanguages: { en },
  },
  secret: process.env.PAYLOAD_SECRET || '',
  sharp,
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
});
