const KB = 1024;
const MB = Math.pow(1024, 2);

export const formatFileSize = (size: number): string => {
  if (size > MB) return `${(size / MB).toFixed(2)} MB`;
  if (size > KB) return `${(size / KB).toFixed(2)} KB`;
  return `${size} Bytes`;
};
