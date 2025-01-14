```javascript
// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

// app/blog/[id]/page.js
export default async function Page({ params }) {
  const id = params.id;

  // Simulate fetching data
  await new Promise((resolve) => setTimeout(resolve, 500));

  return (
    <div>Blog Post {id}</div>
  );
}
```