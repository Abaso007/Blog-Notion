import {getPublishedBlogs } from '@/api'
import { Title, Description } from '@/components/typography'
import BlogCard from '@/app/blog/components/BlogCard'

const BlogPage = async () => {
  const blogs = await getPublishedBlogs()

  return (
    <>
     <header>
      <Title>Blog</Title>
      <Description
      >
        This is where I write about programming, tech, life, and everything in
        between.
      </Description>
     </header>
     <div>
       {blogs.map((article) => (
        <BlogCard key={article.id} article={article}></BlogCard>
      ))}
       {/* <ArticleList articles={blogs} /> */}
        {/* <Image src={result.cover?.external?.url} width={300} height={200} alt="Picture of the author" /> */}
     </div>
  </>
  )
}

export default BlogPage