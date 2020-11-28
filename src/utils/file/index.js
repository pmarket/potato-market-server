import path from 'path';
import * as Uuid from '@src/utils/uuid';

const createUniqueFileName = (fileName) => {
  const extension = path.extname(fileName);
  return Uuid.createUuid() + extension;
};

export { createUniqueFileName };
