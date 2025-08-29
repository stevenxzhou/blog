

import { NextResponse } from 'next/server';
import { neon } from '@neondatabase/serverless';

export async function GET() {
 const sql = neon(`${process.env.DATABASE_URL}`);
  
  try {
    const posts = await sql`SELECT * FROM posts ORDER BY date DESC LIMIT 2;`;
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get('id');
  const title = searchParams.get('title');
  const content = searchParams.get('content');
  const date = searchParams.get('date');
  const sql = neon(`${process.env.DATABASE_URL}`);

  try {
    await sql`INSERT INTO POSTS (id, author, title, content, date) VALUES (${id}, 'Steven', ${title}, ${content}, ${date})`;
    return NextResponse.json({ message: "Successfully posted!" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}

