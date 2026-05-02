import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const servicesPageDirectory = join(process.cwd(), 'public', 'images', 'services');

export const servicesPageImagePaths = readdirSync(servicesPageDirectory)
  .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
  .sort((leftFileName, rightFileName) => 
    leftFileName.localeCompare(rightFileName, undefined, { numeric: true })
  )
  .map((fileName) => `/images/services/${fileName}`);