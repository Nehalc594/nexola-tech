import matter from 'gray-matter';

function importAll(r) {
  return r.keys().map((key) => {
    const slug = key.replace('./', '').replace('.md.js', '');
    const raw = r(key).default;
    const { data } = matter(raw);

    return {
      slug,
      ...data,
    };
  });
}

// Require all .md.js files in the /posts folder
const posts = importAll(require.context('../posts', false, /\.md\.js$/));

// Sort newest first
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

export default posts;
