import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const mainPageDirectory = join(process.cwd(), 'public', 'images', 'home');

export const mainPageImagePaths = readdirSync(mainPageDirectory)
  .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
  .sort((leftFileName, rightFileName) => 
    leftFileName.localeCompare(rightFileName, undefined, { numeric: true })
  )
  .map((fileName) => `/images/home/${fileName}`);