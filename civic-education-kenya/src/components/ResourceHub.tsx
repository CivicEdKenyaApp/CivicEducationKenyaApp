import Image from 'next/image'
import Link from 'next/link'

type Resource = {
  id: number
  title: string
  type: 'article' | 'video' | 'infographic'
  description: string
  url: string
  imageUrl: string
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Understanding the Kenyan Constitution',
    type: 'article',
    description: 'An in-depth look at the Kenyan Constitution and its key provisions.',
    url: '/resources/kenyan-constitution',
    imageUrl: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 2,
    title: 'How Laws Are Made in Kenya',
    type: 'video',
    description: 'A step-by-step video guide on the legislative process in Kenya.',
    url: '/resources/law-making-process',
    imageUrl: '/placeholder.svg?height=200&width=300',
  },
  {
    id: 3,
    title: 'Your Rights as a Kenyan Citizen',
    type: 'infographic',
    description: 'An easy-to-understand infographic detailing the rights of Kenyan citizens.',
    url: '/resources/citizen-rights',
    imageUrl: '/placeholder.svg?height=200&width=300',
  },
]

export default function ResourceHub() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Resource Hub</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <div key={resource.id} className="bg-white p-6 rounded-lg shadow-md">
            <Image
              src={resource.imageUrl}
              alt={resource.title}
              width={300}
              height={200}
              className="w-full h-40 object-cover mb-4 rounded"
            />
            <h3 className="text-xl font-semibold mb-2">{resource.title}</h3>
            <p className="text-gray-600 mb-2">Type: {resource.type}</p>
            <p className="mb-4">{resource.description}</p>
            <Link href={resource.url} className="text-blue-500 hover:underline">
              View Resource
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}