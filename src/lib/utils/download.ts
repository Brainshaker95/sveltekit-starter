import { objectAssign } from '$utils/object';

export const download = (blob: Blob, fileName: string): void => {
  const url = URL.createObjectURL(blob);

  objectAssign(document.createElement('a'), {
    href: url,
    download: fileName,
  }).click();

  URL.revokeObjectURL(url);
};
