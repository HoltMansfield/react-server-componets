export async function TodoList ({ listPromise }: { listPromise: any }) {
  // Wait for the album's promise to resolve.
  const data = await listPromise

  return (
    <div>
      <div>{data.length} items</div>
      <div>
        {JSON.stringify(data)}
      </div>
    </div>
  )
}
