export async function TodoList ({ listPromise }: { listPromise: any }) {
  // Wait for the album's promise to resolve.
  const data = await listPromise

  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
