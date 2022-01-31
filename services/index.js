import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      posts(orderBy: createdAt_DESC) {
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        featuredPost
      }
    }
  `;

  const result = await request(graphqlAPI, query);
  return result.posts;
};

export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        createdAt
        slug
        title
        excerpt
        featuredImage {
          url
        }
        featuredPost
        content {
          markdown
          raw
          html
        }
      }
    }
  `;

  const result = await request(graphqlAPI, query, { slug });
  return result.post;
};
