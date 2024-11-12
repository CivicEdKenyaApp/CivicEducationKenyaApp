export type ResourceType = 'article' | 'video' | 'infographic' | 'podcast' | 'quiz'

export type ResourceCategory = 
  | 'constitution'
  | 'government-structure'
  | 'voting-process'
  | 'civic-rights'
  | 'local-governance'
  | 'policy-making'
  | 'judicial-system'

export type Resource = {
  id: string
  title: string
  type: ResourceType
  category: ResourceCategory
  description: string
  content: string
  author: string
  datePublished: string
  lastUpdated: string
  language: 'en' | 'sw'
  tags: string[]
  url: string
  imageUrl: string
  estimatedReadTime?: number
  videoDuration?: number
  audioLength?: number
  difficulty: 'beginner' | 'intermediate' | 'advanced'
}

export const resources: Resource[] = [
  {
    id: '1',
    title: 'Understanding the Kenyan Constitution',
    type: 'article',
    category: 'constitution',
    description: 'An in-depth look at the Kenyan Constitution and its key provisions.',
    content: 'The Constitution of Kenya is the supreme law of the Republic of Kenya...',
    author: 'Dr. Atieno Odhiambo',
    datePublished: '2024-01-15',
    lastUpdated: '2024-03-20',
    language: 'en',
    tags: ['constitution', 'law', 'governance'],
    url: '/resources/kenyan-constitution',
    imageUrl: '/images/constitution.jpg',
    estimatedReadTime: 15,
    difficulty: 'intermediate'
  },
  {
    id: '2',
    title: 'How Laws Are Made in Kenya',
    type: 'video',
    category: 'policy-making',
    description: 'A step-by-step video guide on the legislative process in Kenya.',
    content: 'https://www.youtube.com/watch?v=example',
    author: 'Civic Education Kenya Team',
    datePublished: '2024-02-01',
    lastUpdated: '2024-02-01',
    language: 'en',
    tags: ['legislation', 'parliament', 'law-making'],
    url: '/resources/law-making-process',
    imageUrl: '/images/parliament.jpg',
    videoDuration: 720,
    difficulty: 'beginner'
  },
  {
    id: '3',
    title: 'Haki za Raia wa Kenya',
    type: 'infographic',
    category: 'civic-rights',
    description: 'Mwongozo wa kuelewa haki za raia wa Kenya.',
    content: '/infographics/citizen-rights.png',
    author: 'Kamau Muthoni',
    datePublished: '2024-02-15',
    lastUpdated: '2024-03-10',
    language: 'sw',
    tags: ['haki', 'raia', 'katiba'],
    url: '/resources/haki-za-raia',
    imageUrl: '/images/citizen-rights.jpg',
    difficulty: 'beginner'
  },
  {
    id: '4',
    title: 'Devolution in Kenya: Powers and Functions',
    type: 'article',
    category: 'local-governance',
    description: 'Explore the devolved system of government in Kenya and its impact on local governance.',
    content: 'Devolution in Kenya was introduced with the 2010 Constitution...',
    author: 'Prof. Makau Mutua',
    datePublished: '2024-03-01',
    lastUpdated: '2024-03-15',
    language: 'en',
    tags: ['devolution', 'county-government', 'local-governance'],
    url: '/resources/devolution-kenya',
    imageUrl: '/images/devolution.jpg',
    estimatedReadTime: 20,
    difficulty: 'intermediate'
  },
  {
    id: '5',
    title: 'Kenyas Judicial System Explained',
    type: 'podcast',
    category: 'judicial-system',
    description: 'A comprehensive audio guide to understanding Kenyas judicial system.',
    content: '/audio/judicial-system-explained.mp3',
    author: 'Justice Willy Mutunga',
    datePublished: '2024-03-10',
    lastUpdated: '2024-03-10',
    language: 'en',
    tags: ['judiciary', 'courts', 'justice-system'],
    url: '/resources/judicial-system-podcast',
    imageUrl: '/images/judiciary.jpg',
    audioLength: 2700,
    difficulty: 'advanced'
  }
]