import slug from 'slugify';
export const slugify = (text: string | undefined) => {
  return slug(text || '', { lower: true, replacement: '-', trim: true });
};

export const unslugify = (text?: string) => {
  return (text || '')
    .trim()
    .split('-')
    .join('_')
    .split('_')
    .filter((s) => s.length > 0)
    .map((s) => s[0].toUpperCase() + s.slice(1).toLowerCase())
    .join(' ');
};
export default slugify;
