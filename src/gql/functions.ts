import { gql, type GraphQLClient } from 'graphql-request'
import type * as Types from './graphql'

// Define variable types inline since client preset doesn't export them
type GetContentByPathVariables = {
  path: string[];
  locale: string[];
  changeset?: string | null;
}

type GetContentByIdVariables = {
  key: string;
  version?: string | null;
  locale: string[];
  changeset?: string | null;
}

export async function getContentByPath(client: GraphQLClient, variables: GetContentByPathVariables): Promise<any> {
  const query = gql`
    query getContentByPath($path: [String!]!, $locale: [Locales!], $changeset: String = null) {
      content: _Content(
        where: {_metadata: {url: {default: {in: $path}}, changeset: {eq: $changeset}}}
        locale: $locale
      ) {
        total
        items: item {
          __typename
          _metadata {
            key
            displayName
            types
            url {
              default
              base
            }
          }
          ...IContentData
          ...PageData
        }
      }
    }

    fragment IContentData on _IContent {
      _metadata {
        ...IContentInfo
      }
      _type: __typename
    }

    fragment IContentInfo on IContentMetadata {
      key
      locale
      types
      displayName
      version
      url {
        ...LinkData
      }
    }

    fragment LinkData on ContentUrl {
      base
      default
    }

    fragment PageData on _IContent {
      ...IContentData
    }
  `

  return client.request(query, variables)
}

export async function getContentById(client: GraphQLClient, variables: GetContentByIdVariables): Promise<any> {
  const query = gql`
    query getContentById($key: String!, $version: String, $locale: [Locales!], $changeset: String) {
      content: _Content(
        variation: { include: ALL }
        where: {
          _metadata: { key: { eq: $key }, version: { eq: $version }, changeset: { eq: $changeset } }
        }
        locale: $locale
      ) {
        total
        items: item {
          __typename
          _metadata {
            key
            displayName
            types
            version
            published
            url {
              default
              base
            }
          }
          ...IContentData
          ...PageData
        }
      }
    }

    fragment IContentData on _IContent {
      _metadata {
        ...IContentInfo
      }
      _type: __typename
    }

    fragment IContentInfo on IContentMetadata {
      key
      locale
      types
      displayName
      version
      url {
        ...LinkData
      }
    }

    fragment LinkData on ContentUrl {
      base
      default
    }

    fragment PageData on _IContent {
      ...IContentData
    }
  `

  return client.request(query, variables)
}
