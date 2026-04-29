import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const mainPageDirectory = join(process.cwd(), 'public', 'images', 'main_page');

const extractOrder = (fileName: string) => {
  const match = fileName.match(/^(\d+)_/);
  return match ? Number(match[1]) : Number.MAX_SAFE_INTEGER;
};

export const mainPageImagePaths = readdirSync(mainPageDirectory)
  .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
  .sort((leftFileName, rightFileName) => {
    const leftOrder = extractOrder(leftFileName);
    const rightOrder = extractOrder(rightFileName);

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return leftFileName.localeCompare(rightFileName);
  })
  .map((fileName) => `/images/main_page/${fileName}`);