/**
 * Shared GraphQL Fragments
 *
 * These fragments are used by multiple queries to avoid duplication.
 * Extracted from getContentByPath and getContentById queries.
 */

import { gql } from 'graphql-request';

/**
 * Core metadata fragments
 */
export const CORE_FRAGMENTS = gql`
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
`;

/**
 * Page type fragments
 */
export const PAGE_FRAGMENTS = gql`
  fragment StartPageData on StartPage {
    Heading
    MainIntro
    MainContentArea {
      __typename
      _metadata {
        key
        displayName
        types
      }
      ...HeroBlockData
      ...TextBlockData
      ...SliderBlockData
      ...ContentAreaData
    }
  }

  fragment NewsPageData on NewsPage {
    _metadata {
      key
      published
      lastModified
    }
    MainContentArea {
      __typename
      _metadata {
        key
        types
        locale
        displayName
        url {
          base
          default
        }
        published
      }
      ... on LandingPage {
        Title
        MetaDescription
      }
    }
  }

  fragment LandingPageData on LandingPage {
    Title
    MetaDescription
    UrlSegment
    MainBody {
      html
    }
  }

  fragment ArticlePageData on ArticlePage {
    _metadata {
      key
      version
      published
      lastModified
      displayName
      url {
        base
        default
      }
    }
    Heading
    Intro
    MainBody {
      html
    }
  }
`;

/**
 * Experience type fragments
 */
export const EXPERIENCE_FRAGMENTS = gql`
  fragment BlankExperienceData on BlankExperience {
    _metadata {
      key
    }
    composition {
      key
      displayName
      nodeType
      type
      displayTemplateKey
    }
  }
`;

/**
 * Component/Block type fragments
 */
export const COMPONENT_FRAGMENTS = gql`
  fragment HeroBlockData on HeroBlock {
    Heading
    Image {
      url {
        default
      }
    }
    MainIntro
    ContentLink {
      url {
        default
      }
    }
    Width
  }

  fragment TextBlockData on TextBlock {
    Text {
      json
      html
    }
  }

  fragment SliderBlockData on SliderBlock {
    SliderContent {
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
    }
  }

  fragment ContentAreaData on ContentArea {
    _metadata {
      key
    }
  }
`;

/**
 * All fragments combined for easier import
 */
export const ALL_FRAGMENTS = gql`
  ${CORE_FRAGMENTS}
  ${PAGE_FRAGMENTS}
  ${EXPERIENCE_FRAGMENTS}
  ${COMPONENT_FRAGMENTS}
`;
