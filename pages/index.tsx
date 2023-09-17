import Button from '@/components/button'
import React from 'react'

export default function Home() {
  return (
    <div>
      <Button disabled size='sm' color='error'>Button</Button>
      <Button size='md' color='error'>Button</Button>
      <Button size='lg' color='success'>Button</Button>
      <Button size='xl' color='error'>Button</Button>
      <Button size='2xl' color='info'>Button</Button>
    </div>
  )
}
