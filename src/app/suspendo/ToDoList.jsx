export async function TodoList ({ listPromise }) {
  // Wait for the album's promise to resolve.
  const todos = await listPromise;

  return (
    <ul>
      {todos.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
