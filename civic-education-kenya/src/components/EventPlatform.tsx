import React from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type Event = {
  id: number
  title: string
  date: string
  location: string
  description: string
}

const events: Event[] = [
  {
    id: 1,
    title: "Civic Education Workshop",
    date: "2024-06-15",
    location: "Nairobi Community Center",
    description: "Join us for an interactive workshop on civic rights and responsibilities."
  },
  {
    id: 2,
    title: "Town Hall Meeting: Local Governance",
    date: "2024-07-01",
    location: "Mombasa City Hall",
    description: "Discuss local governance issues with your elected representatives."
  }
]

export default function EventsPlatform() {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Upcoming Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date} at {event.location}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
            </CardContent>
            <CardFooter>
              <Button>Register</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}