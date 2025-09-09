import fs from 'fs'
const domain = process.env.SITE_DOMAIN || 'https://nova-automations.com'
const staticRoutes = ['/', '/services', '/pricing', '/portfolio', '/blog', '/about', '/contact', '/privacy', '/terms']
const blogDir = 'content/blog'
const blogFiles = fs.existsSync(blogDir) ? fs.readdirSync(blogDir).filter(f=>f.endsWith('.md')) : []
const blogUrls = blogFiles.map(f=> `/blog/${f.replace('.md','')}`)
const urls = [...staticRoutes, ...blogUrls].map(u => `  <url><loc>${domain}${u}</loc></url>`).join('\n')
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`
if (!fs.existsSync('dist')) fs.mkdirSync('dist', { recursive: true })
fs.writeFileSync('dist/sitemap.xml', xml)
console.log('✅ sitemap.xml generated with', staticRoutes.length + blogUrls.length, 'routes')
