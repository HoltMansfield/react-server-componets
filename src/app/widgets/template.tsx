import React from 'react';

export default function Template({ children }: { children: React.ReactNode }) {
  return <div>
    <div>Template Stuff</div>
    <div>{children}</div>
  </div>
}
