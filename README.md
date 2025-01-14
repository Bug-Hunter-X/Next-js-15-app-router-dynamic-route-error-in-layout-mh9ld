# Next.js 15 App Router Dynamic Route Error in Layout

This repository demonstrates a bug in Next.js 15's App Router where using a dynamic route segment in a layout causes an error.  The error occurs when the layout attempts to render before the dynamic segment is available. 

## How to reproduce:

1. Clone this repository.
2. Run `npm install`.
3. Run `npm run dev`.
4. Navigate to `/blog/1`.

You should see the error in the console and the page will not render correctly.

## Solution:

The solution involves using a loader to handle the asynchronous loading of the dynamic route segment. This way, the layout can access and process the data before rendering the actual content.
