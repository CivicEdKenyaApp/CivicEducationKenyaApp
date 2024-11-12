'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

type Opportunity = {
  id: number
  title: string
  organization: string
  location: string
  description: string
}

const initialOpportunities: Opportunity[] = [
  {
    id: 1,
    title: 'Civic Education Facilitator',
    organization: 'Civic Education Kenya',
    location: 'Various locations in Nairobi',
    description: 'Help facilitate workshops on civic rights and responsibilities in local communities.',
  },
  {
    id: 2,
    title: 'Community Outreach Volunteer',
    organization: 'Kenya Civic Engagement Initiative',
    location: 'Mombasa',
    description: 'Assist in organizing and conducting community outreach programs to increase civic awareness.',
  },
]

export default function VolunteerOpportunities() {
  const [opportunities, setOpportunities] = useState(initialOpportunities)

  const applyForOpportunity = (opportunityId: number) => {
    // In a real app, this would open an application form or send a request to the server
    console.log(`Applied for opportunity with id: ${opportunityId}`)
  }

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Volunteer Opportunities</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {opportunities.map((opportunity) => (
          <Card key={opportunity.id}>
            <CardHeader>
              <CardTitle>{opportunity.title}</CardTitle>
              <CardDescription>{opportunity.organization} - {opportunity.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{opportunity.description}</p>
            </CardContent>
            <CardFooter>
              <Button onClick={() => applyForOpportunity(opportunity.id)}>Apply</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}