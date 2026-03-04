const API_URL = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

export async function getPosts() {
  const query = `
    query GetAllPosts {
      posts {
        nodes {
          id
          title
          slug
          date
          excerpt
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const res = await fetch(API_URL!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query }),
  });

  const json = await res.json();
  return json.data.posts.nodes;
}