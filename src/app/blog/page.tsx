import {collectAllTags } from '@/services/notion'
import {getThinking } from '@/api'
import { Title, Description } from '@/components/typography'
import { PostTable } from '@/widgets'

const BlogPage = async () => {
  const posts = await getThinking()
  // console.log(posts,'posts')
  const allTags = await collectAllTags(posts)

  return (
    <section className='max-w-xs w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl'>
      <header>
        <Title>Blog</Title>
        <Description
        >
          This is where I write about programming, tech, life, and everything in
          between.
        </Description>
      </header>
      <PostTable  posts={posts} />
      {/* <BlogPanel posts={posts} tags={allTags}/> */}
  </section>
  )
}

export default BlogPage