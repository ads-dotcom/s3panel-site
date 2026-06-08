import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const getMarkDownContent = (folder: string, slug: string) => {
  const normalizedFolder = folder
    .replace(/^src[\\/]+data[\\/]?/, '')
    .replace(/^data[\\/]?/, '');
  const filePath = path.join(process.cwd(), 'src', 'data', normalizedFolder, `${slug}.md`);
  const content = fs.readFileSync(filePath, 'utf8');
  const matterResult = matter(content);
  return matterResult;
};

export default getMarkDownContent;
