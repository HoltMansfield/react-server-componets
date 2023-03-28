import { Suspense } from 'react'
import { TodoList } from '@/app/widgets/TodoList'

// Faster request
async function getUser() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ name: 'Firsto' })
    }, 350)
  })
}

// Slower request
async function getTodos() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([{ id: 1, name: 'Test Suspense', id: 2, name: 'Find something new to test' }])
    }, 4000)
  })
}

export default async function Page({ params: { userId } }) {
  // Initiate both requests in parallel.
  const userResponse = getUser(userId)
  const todosResponse = getTodos(userId)

  // Wait only for the user request
  const user = await userResponse

  return (
    <>
      {/* This gets returned to the browser as a custom html string */}
      <h1>{user.name}</h1>
      <Suspense fallback={<div>Fetching todos...</div>}>
        {/* The above gets rendered and then this gets streamed to the browser as a custom html string after */}
        <TodoList listPromise={todosResponse}></TodoList>
      </Suspense>
    </>
  )
}
