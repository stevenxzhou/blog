import Post from '@/app/ui/components/posts/Post';
import { getPosts } from '@/app/lib/data';
import Link from 'next/link';

export default async function Page() {

  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      <Link href="/blog/post/insert"><button className="outline outline-1  border-purple-700 text-purple-700 hover:bg-purple-700 hover:text-white my-5 py-2 px-4 rounded">New +</button></Link>
      {posts?.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          title={post.title}
          content={post.content}
          date={post.date}
        />
      ))}
    </>)
}