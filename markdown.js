import matter from 'gray-matter'
import { marked } from 'marked'

export async function loadAllPosts() {
  const files = import.meta.glob('/content/blog/*.md', { as: 'raw' })
  const posts = []
  for (const [path, loader] of Object.entries(files)) {
    const raw = await loader()
    const { data, content } = matter(raw)
    const slug = path.split('/').pop().replace('.md','')
    posts.push({ ...data, slug, html: marked.parse(content) })
  }
  posts.sort((a,b)=> new Date(b.date) - new Date(a.date))
  return posts
}

export async function loadPost(slug) {
  const map = import.meta.glob('/content/blog/*.md', { as: 'raw' })
  const key = Object.keys(map).find(p => p.endsWith(`${slug}.md`))
  if (!key) return null
  const raw = await map[key]()
  const { data, content } = matter(raw)
  return { ...data, slug, html: marked.parse(content) }
}
