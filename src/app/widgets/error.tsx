'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: any,
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div>ERROR</div>
      <p>Something went wrong!</p>
      <p>{JSON.stringify(error)}</p>
      <button onClick={() => reset()}>Reset error boundary</button>
    </div>
  );
}
