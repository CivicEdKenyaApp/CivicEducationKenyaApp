'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

type ForumPost = {
  id: number
  title: string
  author: string
  content: string
  replies: number
}

const initialPosts: ForumPost[] = [
  { id: 1, title: 'Discussing the new education policy', author: 'John Doe', content: 'What are your thoughts on the recently proposed education policy?', replies: 5 },
  { id: 2, title: 'Healthcare reform ideas', author: 'Jane Smith', content: 'Let\'s brainstorm ideas for improving our healthcare system.', replies: 3 },
]

export default function CommunityPortal() {
  const [posts, setPosts] = useState(initialPosts)
  const [newPost, setNewPost] = useState({ title: '', content: '' })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const post: ForumPost = {
      id: posts.length + 1,
      title: newPost.title,
      author: 'Current User', // In a real app, this would be the logged-in user
      content: newPost.content,
      replies: 0
    }
    setPosts([post, ...posts])
    setNewPost({ title: '', content: '' })
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Community Portal</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-lg shadow-md">
        <Input
          type="text"
          value={newPost.title}
          onChange={(e: { target: { value: any } }) => setNewPost({ ...newPost, title: e.target.value })}
          placeholder="Post Title"
          required
        />
        <Textarea
          value={newPost.content}
          onChange={(e: { target: { value: any } }) => setNewPost({ ...newPost, content: e.target.value })}
          placeholder="Post Content"
          required
        />
        <Button type="submit">Create Post</Button>
      </form>
      <div className="space-y-4">
        {posts.map((post) => (
          <div key={post.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
            <p className="text-gray-600 mb-2">By: {post.author}</p>
            <p className="mb-4">{post.content}</p>
            <p className="text-sm text-gray-500">Replies: {post.replies}</p>
          </div>
        ))}
      </div>
    </div>
  )
}