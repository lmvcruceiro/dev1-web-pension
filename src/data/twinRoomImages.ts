import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const twinRoomDirectory = join(process.cwd(), 'public', 'images', 'rooms', 'twin_room');

export const twinRoomImagePaths = readdirSync(twinRoomDirectory)
  .filter((fileName) => /\.(avif|gif|jpe?g|png|webp)$/i.test(fileName))
  .sort((leftFileName, rightFileName) => 
    leftFileName.localeCompare(rightFileName, undefined, { numeric: true })
  )
  .map((fileName) => `/images/rooms/twin_room/${fileName}`);
