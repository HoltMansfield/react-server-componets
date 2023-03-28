import React from 'react'

export const metadata = {
  title: 'Nested Layouts',
};

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-9">
      <div className="flex justify-between">
        Layout stuff
      </div>
      <div>{children}</div>
    </div>
  );
}
