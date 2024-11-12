'use client'

import React, { createContext, useState, useContext } from 'react'

type UserContextType = {
  language: 'en' | 'sw'
  setLanguage: (lang: 'en' | 'sw') => void
}

const UserContext = createContext<UserContextType | undefined>(undefined)

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [language, setLanguage] = useState<'en' | 'sw'>('en')

  return (
    <UserContext.Provider value={{ language, setLanguage }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}