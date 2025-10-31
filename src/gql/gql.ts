/* eslint-disable */
import * as types from './graphql';
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}": typeof types.BlankSectionDataFragmentDoc,
    "fragment ContentAreaData on ContentArea {\n  _metadata {\n    key\n  }\n}": typeof types.ContentAreaDataFragmentDoc,
    "fragment GenericMediaData on GenericMedia {\n  _metadata {\n    key\n  }\n}": typeof types.GenericMediaDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  Heading\n  Image {\n    url {\n      default\n    }\n  }\n  MainIntro {\n    json\n    html\n  }\n  ContentLink {\n    url {\n      default\n    }\n  }\n  Width\n}": typeof types.HeroBlockDataFragmentDoc,
    "fragment ImageMediaData on ImageMedia {\n  _metadata {\n    key\n  }\n}": typeof types.ImageMediaDataFragmentDoc,
    "fragment SliderBlockData on SliderBlock {\n  SliderContent {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n      url {\n        default\n        base\n      }\n    }\n  }\n}": typeof types.SliderBlockDataFragmentDoc,
    "fragment SysContentFolderData on SysContentFolder {\n  _metadata {\n    key\n  }\n}": typeof types.SysContentFolderDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  Text {\n    json\n    html\n  }\n}": typeof types.TextBlockDataFragmentDoc,
    "fragment VideoMediaData on VideoMedia {\n  _metadata {\n    key\n  }\n}": typeof types.VideoMediaDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n  composition {\n    key\n    displayName\n    nodeType\n    type\n    displayTemplateKey\n  }\n}": typeof types.BlankExperienceDataFragmentDoc,
    "fragment ArticlePageData on ArticlePage {\n  _metadata {\n    key\n  }\n}": typeof types.ArticlePageDataFragmentDoc,
    "fragment LandingPageData on LandingPage {\n  Title\n  MetaDescription\n  UrlSegment\n  MainBody {\n    html\n  }\n}": typeof types.LandingPageDataFragmentDoc,
    "fragment MyTestData on MyTest {\n  _metadata {\n    key\n  }\n}": typeof types.MyTestDataFragmentDoc,
    "fragment NewsPageData on NewsPage {\n  _metadata {\n    key\n    published\n    lastModified\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      types\n      locale\n      displayName\n      url {\n        base\n        default\n      }\n      published\n    }\n    ... on LandingPage {\n      Title\n      MetaDescription\n    }\n  }\n}": typeof types.NewsPageDataFragmentDoc,
    "fragment StartPageData on StartPage {\n  Heading\n  MainIntro {\n    json\n    html\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n    }\n    ...HeroBlockData\n    ...TextBlockData\n    ...SliderBlockData\n    ...ContentAreaData\n  }\n}": typeof types.StartPageDataFragmentDoc,
    "fragment SyncTestData on SyncTest {\n  _metadata {\n    key\n    version\n    published\n    lastModified\n    displayName\n    url {\n      base\n      default\n    }\n  }\n  Heading\n  MainIntro {\n    html\n  }\n  Subtitle\n  IsPublished\n  Priority\n  PublishDate\n  ContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }\n  Tags\n  ExternalLink\n}": typeof types.SyncTestDataFragmentDoc,
};
const documents: Documents = {
    "fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}": types.BlankSectionDataFragmentDoc,
    "fragment ContentAreaData on ContentArea {\n  _metadata {\n    key\n  }\n}": types.ContentAreaDataFragmentDoc,
    "fragment GenericMediaData on GenericMedia {\n  _metadata {\n    key\n  }\n}": types.GenericMediaDataFragmentDoc,
    "fragment HeroBlockData on HeroBlock {\n  Heading\n  Image {\n    url {\n      default\n    }\n  }\n  MainIntro {\n    json\n    html\n  }\n  ContentLink {\n    url {\n      default\n    }\n  }\n  Width\n}": types.HeroBlockDataFragmentDoc,
    "fragment ImageMediaData on ImageMedia {\n  _metadata {\n    key\n  }\n}": types.ImageMediaDataFragmentDoc,
    "fragment SliderBlockData on SliderBlock {\n  SliderContent {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n      url {\n        default\n        base\n      }\n    }\n  }\n}": types.SliderBlockDataFragmentDoc,
    "fragment SysContentFolderData on SysContentFolder {\n  _metadata {\n    key\n  }\n}": types.SysContentFolderDataFragmentDoc,
    "fragment TextBlockData on TextBlock {\n  Text {\n    json\n    html\n  }\n}": types.TextBlockDataFragmentDoc,
    "fragment VideoMediaData on VideoMedia {\n  _metadata {\n    key\n  }\n}": types.VideoMediaDataFragmentDoc,
    "fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n  composition {\n    key\n    displayName\n    nodeType\n    type\n    displayTemplateKey\n  }\n}": types.BlankExperienceDataFragmentDoc,
    "fragment ArticlePageData on ArticlePage {\n  _metadata {\n    key\n  }\n}": types.ArticlePageDataFragmentDoc,
    "fragment LandingPageData on LandingPage {\n  Title\n  MetaDescription\n  UrlSegment\n  MainBody {\n    html\n  }\n}": types.LandingPageDataFragmentDoc,
    "fragment MyTestData on MyTest {\n  _metadata {\n    key\n  }\n}": types.MyTestDataFragmentDoc,
    "fragment NewsPageData on NewsPage {\n  _metadata {\n    key\n    published\n    lastModified\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      types\n      locale\n      displayName\n      url {\n        base\n        default\n      }\n      published\n    }\n    ... on LandingPage {\n      Title\n      MetaDescription\n    }\n  }\n}": types.NewsPageDataFragmentDoc,
    "fragment StartPageData on StartPage {\n  Heading\n  MainIntro {\n    json\n    html\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n    }\n    ...HeroBlockData\n    ...TextBlockData\n    ...SliderBlockData\n    ...ContentAreaData\n  }\n}": types.StartPageDataFragmentDoc,
    "fragment SyncTestData on SyncTest {\n  _metadata {\n    key\n    version\n    published\n    lastModified\n    displayName\n    url {\n      base\n      default\n    }\n  }\n  Heading\n  MainIntro {\n    html\n  }\n  Subtitle\n  IsPublished\n  Priority\n  PublishDate\n  ContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }\n  Tags\n  ExternalLink\n}": types.SyncTestDataFragmentDoc,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment BlankSectionData on BlankSection {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ContentAreaData on ContentArea {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ContentAreaData on ContentArea {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment GenericMediaData on GenericMedia {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment GenericMediaData on GenericMedia {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment HeroBlockData on HeroBlock {\n  Heading\n  Image {\n    url {\n      default\n    }\n  }\n  MainIntro {\n    json\n    html\n  }\n  ContentLink {\n    url {\n      default\n    }\n  }\n  Width\n}"): (typeof documents)["fragment HeroBlockData on HeroBlock {\n  Heading\n  Image {\n    url {\n      default\n    }\n  }\n  MainIntro {\n    json\n    html\n  }\n  ContentLink {\n    url {\n      default\n    }\n  }\n  Width\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ImageMediaData on ImageMedia {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ImageMediaData on ImageMedia {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SliderBlockData on SliderBlock {\n  SliderContent {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n      url {\n        default\n        base\n      }\n    }\n  }\n}"): (typeof documents)["fragment SliderBlockData on SliderBlock {\n  SliderContent {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n      url {\n        default\n        base\n      }\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SysContentFolderData on SysContentFolder {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment SysContentFolderData on SysContentFolder {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment TextBlockData on TextBlock {\n  Text {\n    json\n    html\n  }\n}"): (typeof documents)["fragment TextBlockData on TextBlock {\n  Text {\n    json\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment VideoMediaData on VideoMedia {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment VideoMediaData on VideoMedia {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n  composition {\n    key\n    displayName\n    nodeType\n    type\n    displayTemplateKey\n  }\n}"): (typeof documents)["fragment BlankExperienceData on BlankExperience {\n  _metadata {\n    key\n  }\n  composition {\n    key\n    displayName\n    nodeType\n    type\n    displayTemplateKey\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment ArticlePageData on ArticlePage {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment ArticlePageData on ArticlePage {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment LandingPageData on LandingPage {\n  Title\n  MetaDescription\n  UrlSegment\n  MainBody {\n    html\n  }\n}"): (typeof documents)["fragment LandingPageData on LandingPage {\n  Title\n  MetaDescription\n  UrlSegment\n  MainBody {\n    html\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment MyTestData on MyTest {\n  _metadata {\n    key\n  }\n}"): (typeof documents)["fragment MyTestData on MyTest {\n  _metadata {\n    key\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment NewsPageData on NewsPage {\n  _metadata {\n    key\n    published\n    lastModified\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      types\n      locale\n      displayName\n      url {\n        base\n        default\n      }\n      published\n    }\n    ... on LandingPage {\n      Title\n      MetaDescription\n    }\n  }\n}"): (typeof documents)["fragment NewsPageData on NewsPage {\n  _metadata {\n    key\n    published\n    lastModified\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      types\n      locale\n      displayName\n      url {\n        base\n        default\n      }\n      published\n    }\n    ... on LandingPage {\n      Title\n      MetaDescription\n    }\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment StartPageData on StartPage {\n  Heading\n  MainIntro {\n    json\n    html\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n    }\n    ...HeroBlockData\n    ...TextBlockData\n    ...SliderBlockData\n    ...ContentAreaData\n  }\n}"): (typeof documents)["fragment StartPageData on StartPage {\n  Heading\n  MainIntro {\n    json\n    html\n  }\n  MainContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n      types\n    }\n    ...HeroBlockData\n    ...TextBlockData\n    ...SliderBlockData\n    ...ContentAreaData\n  }\n}"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "fragment SyncTestData on SyncTest {\n  _metadata {\n    key\n    version\n    published\n    lastModified\n    displayName\n    url {\n      base\n      default\n    }\n  }\n  Heading\n  MainIntro {\n    html\n  }\n  Subtitle\n  IsPublished\n  Priority\n  PublishDate\n  ContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }\n  Tags\n  ExternalLink\n}"): (typeof documents)["fragment SyncTestData on SyncTest {\n  _metadata {\n    key\n    version\n    published\n    lastModified\n    displayName\n    url {\n      base\n      default\n    }\n  }\n  Heading\n  MainIntro {\n    html\n  }\n  Subtitle\n  IsPublished\n  Priority\n  PublishDate\n  ContentArea {\n    __typename\n    _metadata {\n      key\n      displayName\n    }\n  }\n  Tags\n  ExternalLink\n}"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;