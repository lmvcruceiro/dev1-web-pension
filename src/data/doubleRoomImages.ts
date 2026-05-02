import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const doubleRoomDirectory = join(process.cwd(), 'public', 'images', 'rooms', 'double_room');

export const doubleRoomImagePaths = readdirSync(doubleRoomDirectory)
  .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
  .sort((leftFileName, rightFileName) => 
    leftFileName.localeCompare(rightFileName, undefined, { numeric: true })
  )
  .map((fileName) => `/images/rooms/double_room/${fileName}`);
