'use client';

import Post from '@/app/ui/components/posts/Post';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Page() {
  type PostType = {
    id: string;
    title: string;
    content: string;
    date: string;
  };

  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    fetch('/api/posts').then((res) => {
      return res.json();
    }).then((data)=> {
      setPosts(data.posts);
    })
  }, [])

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