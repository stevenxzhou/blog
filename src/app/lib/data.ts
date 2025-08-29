import { neon } from '@neondatabase/serverless';

export async function getPosts() {

    const sql = neon(`${process.env.DATABASE_URL}`);

    try {
        const posts = await sql`select * from posts limit 2`;
        return posts;
    } catch (error) {
        
    }
}
