export async function TodoList ({ listPromise }) {
  const todos = await listPromise

  return (
    <div>
      <div>{todos.length} items</div>
      <ul>
        {todos.map(({ id, name }) => (
          <li key={id}>{name}</li>
        ))}
      </ul>
    </div>
  )
}
