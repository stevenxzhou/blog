import { createClient, sql } from '@vercel/postgres';

export async function connectToDB() {

    const client = createClient();

    await client.connect();

    try {

        if (client) {
            return client;
        }
    } catch (error) {
        console.log(error);
    }

}

export async function getPosts() {

    try {
        const posts = await sql`select * from posts limit 2`;
        return posts.rows;
    } catch (error) {
        
    }
}
