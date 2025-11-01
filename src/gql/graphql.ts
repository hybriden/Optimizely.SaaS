/* eslint-disable */
import type { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  Bool: { input: any; output: any; }
  Date: { input: string; output: string; }
  DateTime: { input: string; output: string; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/). */
  JSON: { input: any; output: any; }
};

export type ArticlePage = IData & _IContent & _IPage & {
  __typename?: 'ArticlePage';
  Heading?: Maybe<Scalars['String']['output']>;
  Intro?: Maybe<Scalars['String']['output']>;
  MainBody?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ArticlePage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  MainBody?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  MainBody?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ArticlePageOrderByInput = {
  MainBody?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  autocomplete?: Maybe<ArticlePageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ArticlePageFacet>;
  item?: Maybe<ArticlePage>;
  items?: Maybe<Array<Maybe<ArticlePage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  MainBody?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  autocomplete?: Maybe<BlankExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankExperienceFacet>;
  item?: Maybe<BlankExperience>;
  items?: Maybe<Array<Maybe<BlankExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  autocomplete?: Maybe<BlankSectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<BlankSectionFacet>;
  item?: Maybe<BlankSection>;
  items?: Maybe<Array<Maybe<BlankSection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  key?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  value?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionDisplaySettingAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionDisplaySettingAutocompleteValueArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionDisplaySettingFacet = {
  __typename?: 'CompositionDisplaySettingFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  value?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionDisplaySettingFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionDisplaySettingFacetValueArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionDisplaySettingOrderByInput = {
  key?: InputMaybe<OrderBy>;
  value?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  value?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodes?: Maybe<ICompositionNodeAutocomplete>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type CompositionStructureNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type CompositionStructureNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type CompositionStructureNodeFacet = {
  __typename?: 'CompositionStructureNodeFacet';
  component?: Maybe<_IComponentFacet>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  nodes?: Maybe<ICompositionNodeFacet>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type CompositionStructureNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetLayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type CompositionStructureNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type CompositionStructureNodeOrderByInput = {
  component?: InputMaybe<_IComponentOrderByInput>;
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  nodes?: InputMaybe<ICompositionNodeOrderByInput>;
  type?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  component?: InputMaybe<_IComponentWhereInput>;
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  nodes?: InputMaybe<ICompositionNodeWhereInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ContentArea = IData & _IComponent & _IContent & {
  __typename?: 'ContentArea';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ContentArea_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentArea_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentAreaAutocomplete = {
  __typename?: 'ContentAreaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentAreaFacet = {
  __typename?: 'ContentAreaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ContentAreaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentAreaOutput = {
  __typename?: 'ContentAreaOutput';
  autocomplete?: Maybe<ContentAreaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ContentAreaFacet>;
  item?: Maybe<ContentArea>;
  items?: Maybe<Array<Maybe<ContentArea>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ContentAreaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentAreaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ContentAreaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ContentAreaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ContentAreaWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  key?: Maybe<Scalars['String']['output']>;
  url?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  key?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  key?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  key?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  base?: Maybe<Scalars['String']['output']>;
  default?: Maybe<Scalars['String']['output']>;
  graph?: Maybe<Scalars['String']['output']>;
  hierarchical?: Maybe<Scalars['String']['output']>;
  internal?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  base?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  default?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  graph?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  hierarchical?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  internal?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ContentUrlAutocompleteBaseArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteDefaultArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteGraphArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteHierarchicalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteInternalArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ContentUrlAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentUrlFacet = {
  __typename?: 'ContentUrlFacet';
  base?: Maybe<Array<Maybe<StringFacet>>>;
  default?: Maybe<Array<Maybe<StringFacet>>>;
  graph?: Maybe<Array<Maybe<StringFacet>>>;
  hierarchical?: Maybe<Array<Maybe<StringFacet>>>;
  internal?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ContentUrlFacetBaseArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetDefaultArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetGraphArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetHierarchicalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetInternalArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ContentUrlFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentUrlOrderByInput = {
  base?: InputMaybe<OrderBy>;
  default?: InputMaybe<OrderBy>;
  graph?: InputMaybe<OrderBy>;
  hierarchical?: InputMaybe<OrderBy>;
  internal?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  base?: InputMaybe<StringFilterInput>;
  default?: InputMaybe<StringFilterInput>;
  graph?: InputMaybe<StringFilterInput>;
  hierarchical?: InputMaybe<StringFilterInput>;
  internal?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  cursor?: Maybe<Scalars['String']['output']>;
  item?: Maybe<IData>;
  items?: Maybe<Array<Maybe<IData>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type DateFacetUnit =
  /** Defined as 24 hours (86,400,000 milliseconds). All days begin at the earliest possible time, which is usually 00:00:00 (midnight). */
  | 'DAY'
  /** Defined as 60 minutes each (3,600,000 milliseconds). All hours begin at 00 minutes and 00 seconds. */
  | 'HOUR'
  /** Defined as 1000 milliseconds each. */
  | 'MINUTE';

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  decay?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  origin?: InputMaybe<Scalars['Date']['input']>;
  rate?: InputMaybe<Scalars['Float']['input']>;
  scale?: InputMaybe<Scalars['Int']['input']>;
};

export type FactorModifier =
  /** Add 1 to the field value and take the natural logarithm */
  | 'LOG'
  /** Do not apply any multiplier to the field value */
  | 'NONE'
  /** Reciprocate the field value, same as 1/x where x is the field's value */
  | 'RECIPROCAL'
  /** Take the square root of the field value */
  | 'SQRT'
  /** Square the field value (multiply it by itself) */
  | 'SQUARE';

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  autocomplete?: Maybe<GenericMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<GenericMediaFacet>;
  item?: Maybe<GenericMedia>;
  items?: Maybe<Array<Maybe<GenericMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  ContentLink?: Maybe<ContentReference>;
  Heading?: Maybe<Scalars['String']['output']>;
  Image?: Maybe<ContentReference>;
  MainIntro?: Maybe<Scalars['String']['output']>;
  Width?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  ContentLink?: Maybe<ContentReferenceAutocomplete>;
  Image?: Maybe<ContentReferenceAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  ContentLink?: Maybe<ContentReferenceFacet>;
  Image?: Maybe<ContentReferenceFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  ContentLink?: InputMaybe<ContentReferenceOrderByInput>;
  Image?: InputMaybe<ContentReferenceOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  autocomplete?: Maybe<HeroBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<HeroBlockFacet>;
  item?: Maybe<HeroBlock>;
  items?: Maybe<Array<Maybe<HeroBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockWhereInput = {
  ContentLink?: InputMaybe<ContentReferenceWhereInput>;
  Image?: InputMaybe<ContentReferenceWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  enabled?: InputMaybe<Scalars['Boolean']['input']>;
  endToken?: InputMaybe<Scalars['String']['input']>;
  startToken?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  displayName?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  displaySettings?: Maybe<CompositionDisplaySettingAutocomplete>;
  displayTemplateKey?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  layoutType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  nodeType?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  type?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type ICompositionNodeAutocompleteDisplayNameArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteDisplayTemplateKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteLayoutTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteNodeTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type ICompositionNodeAutocompleteTypeArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ICompositionNodeFacet = {
  __typename?: 'ICompositionNodeFacet';
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  displaySettings?: Maybe<CompositionDisplaySettingFacet>;
  displayTemplateKey?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  layoutType?: Maybe<Array<Maybe<StringFacet>>>;
  nodeType?: Maybe<Array<Maybe<StringFacet>>>;
  type?: Maybe<Array<Maybe<StringFacet>>>;
};


export type ICompositionNodeFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetDisplayTemplateKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetLayoutTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetNodeTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type ICompositionNodeFacetTypeArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ICompositionNodeOrderByInput = {
  displayName?: InputMaybe<OrderBy>;
  displaySettings?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  displayTemplateKey?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  layoutType?: InputMaybe<OrderBy>;
  nodeType?: InputMaybe<OrderBy>;
  type?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  displayName?: InputMaybe<StringFilterInput>;
  displaySettings?: InputMaybe<CompositionDisplaySettingWhereInput>;
  displayTemplateKey?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  layoutType?: InputMaybe<StringFilterInput>;
  nodeType?: InputMaybe<StringFilterInput>;
  type?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  component?: Maybe<_IComponent>;
  displayName?: Maybe<Scalars['String']['output']>;
  displaySettings?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  displayTemplateKey?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  layoutType?: Maybe<Scalars['String']['output']>;
  nodeType?: Maybe<Scalars['String']['output']>;
  nodes?: Maybe<Array<Maybe<ICompositionNode>>>;
  type?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  changeset?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  fallbackForLocale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  key?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  locale?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  status?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrlAutocomplete>;
  variation?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  version?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type IContentMetadataAutocompleteChangesetArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteFallbackForLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteLocaleArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteStatusArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteTypesArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVariationArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};


export type IContentMetadataAutocompleteVersionArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type IContentMetadataFacet = {
  __typename?: 'IContentMetadataFacet';
  changeset?: Maybe<Array<Maybe<StringFacet>>>;
  created?: Maybe<Array<Maybe<DateFacet>>>;
  displayName?: Maybe<Array<Maybe<StringFacet>>>;
  fallbackForLocale?: Maybe<Array<Maybe<StringFacet>>>;
  key?: Maybe<Array<Maybe<StringFacet>>>;
  lastModified?: Maybe<Array<Maybe<DateFacet>>>;
  locale?: Maybe<Array<Maybe<StringFacet>>>;
  published?: Maybe<Array<Maybe<DateFacet>>>;
  sortOrder?: Maybe<Array<Maybe<NumberFacet>>>;
  status?: Maybe<Array<Maybe<StringFacet>>>;
  types?: Maybe<Array<Maybe<StringFacet>>>;
  url?: Maybe<ContentUrlFacet>;
  variation?: Maybe<Array<Maybe<StringFacet>>>;
  version?: Maybe<Array<Maybe<StringFacet>>>;
};


export type IContentMetadataFacetChangesetArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetCreatedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetDisplayNameArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetFallbackForLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetLastModifiedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetLocaleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetPublishedArgs = {
  unit?: InputMaybe<DateFacetUnit>;
  value?: InputMaybe<Scalars['Int']['input']>;
};


export type IContentMetadataFacetSortOrderArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
  ranges?: InputMaybe<Array<InputMaybe<RangeFacetsInput>>>;
};


export type IContentMetadataFacetStatusArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetTypesArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVariationArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type IContentMetadataFacetVersionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type IContentMetadataOrderByInput = {
  changeset?: InputMaybe<OrderBy>;
  created?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  fallbackForLocale?: InputMaybe<OrderBy>;
  key?: InputMaybe<OrderBy>;
  lastModified?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  published?: InputMaybe<OrderBy>;
  sortOrder?: InputMaybe<OrderBy>;
  status?: InputMaybe<OrderBy>;
  types?: InputMaybe<OrderBy>;
  url?: InputMaybe<ContentUrlOrderByInput>;
  variation?: InputMaybe<OrderBy>;
  version?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  changeset?: InputMaybe<StringFilterInput>;
  created?: InputMaybe<DateFilterInput>;
  displayName?: InputMaybe<SearchableStringFilterInput>;
  fallbackForLocale?: InputMaybe<StringFilterInput>;
  key?: InputMaybe<StringFilterInput>;
  lastModified?: InputMaybe<DateFilterInput>;
  locale?: InputMaybe<StringFilterInput>;
  published?: InputMaybe<DateFilterInput>;
  sortOrder?: InputMaybe<IntFilterInput>;
  status?: InputMaybe<StringFilterInput>;
  types?: InputMaybe<StringFilterInput>;
  url?: InputMaybe<ContentUrlWhereInput>;
  variation?: InputMaybe<StringFilterInput>;
  version?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type IMediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IMediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ImageMedia = IData & _IContent & _IImage & _IMedia & {
  __typename?: 'ImageMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  autocomplete?: Maybe<ImageMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<ImageMediaFacet>;
  item?: Maybe<ImageMedia>;
  items?: Maybe<Array<Maybe<ImageMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  factor?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  gt?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  gte?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  lt?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  lte?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  displayOption?: Maybe<Scalars['String']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  published?: Maybe<Scalars['DateTime']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LandingPage = IData & _IContent & _IPage & {
  __typename?: 'LandingPage';
  MainBody?: Maybe<RichText>;
  MetaDescription?: Maybe<Scalars['String']['output']>;
  Title?: Maybe<Scalars['String']['output']>;
  UrlSegment?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type LandingPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  MainBody?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  MainBody?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type LandingPageOrderByInput = {
  MainBody?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  autocomplete?: Maybe<LandingPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<LandingPageFacet>;
  item?: Maybe<LandingPage>;
  items?: Maybe<Array<Maybe<LandingPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  MainBody?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LinkConfig = {
  from?: InputMaybe<Scalars['String']['input']>;
  to?: InputMaybe<Scalars['String']['input']>;
};

export type LinkTypes =
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.owner`   |
   */
  | 'ASSETS'
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  | 'DEFAULT'
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.key` |
   * | *to*        |        | `_metadata.container`   |
   */
  | 'ITEMS'
  /**
   *
   * | *Direction* | &nbsp; | *Field*     |
   * | ----------: | ------ | :---------- |
   * | *from*      |        | `_metadata.path` |
   * | *to*        |        | `_metadata.key`   |
   */
  | 'PATH';

export type Locales =
  | 'ALL'
  | 'NEUTRAL'
  | 'en';

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  changeset?: Maybe<Scalars['String']['output']>;
  container?: Maybe<Scalars['String']['output']>;
  content?: Maybe<Scalars['String']['output']>;
  created?: Maybe<Scalars['DateTime']['output']>;
  createdBy?: Maybe<Scalars['String']['output']>;
  displayName?: Maybe<Scalars['String']['output']>;
  expired?: Maybe<Scalars['DateTime']['output']>;
  fallbackForLocale?: Maybe<Scalars['String']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  lastModified?: Maybe<Scalars['DateTime']['output']>;
  lastModifiedBy?: Maybe<Scalars['String']['output']>;
  locale?: Maybe<Scalars['String']['output']>;
  locales?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  mimeType?: Maybe<Scalars['String']['output']>;
  owner?: Maybe<Scalars['String']['output']>;
  path?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  published?: Maybe<Scalars['DateTime']['output']>;
  routeSegment?: Maybe<Scalars['String']['output']>;
  sortOrder?: Maybe<Scalars['Int']['output']>;
  status?: Maybe<Scalars['String']['output']>;
  thumbnail?: Maybe<Scalars['String']['output']>;
  types?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  url?: Maybe<ContentUrl>;
  variation?: Maybe<Scalars['String']['output']>;
  version?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type NewsPage = IData & _IContent & _IPage & {
  __typename?: 'NewsPage';
  MainBody?: Maybe<RichText>;
  MainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type NewsPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type NewsPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type NewsPageAutocomplete = {
  __typename?: 'NewsPageAutocomplete';
  MainBody?: Maybe<RichTextAutocomplete>;
  MainContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type NewsPageFacet = {
  __typename?: 'NewsPageFacet';
  MainBody?: Maybe<RichTextFacet>;
  MainContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type NewsPageOrderByInput = {
  MainBody?: InputMaybe<RichTextOrderByInput>;
  MainContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type NewsPageOutput = {
  __typename?: 'NewsPageOutput';
  autocomplete?: Maybe<NewsPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<NewsPageFacet>;
  item?: Maybe<NewsPage>;
  items?: Maybe<Array<Maybe<NewsPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type NewsPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type NewsPageWhereInput = {
  MainBody?: InputMaybe<RichTextWhereInput>;
  MainContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<NewsPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<NewsPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<NewsPageWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  modifier?: InputMaybe<FactorModifier>;
  value?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderBy =
  | 'ASC'
  | 'DESC';

export type OrderByFacetType =
  | 'COUNT'
  | 'VALUE';

export type Query = {
  __typename?: 'Query';
  ArticlePage?: Maybe<ArticlePageOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  ContentArea?: Maybe<ContentAreaOutput>;
  Data?: Maybe<DataOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  NewsPage?: Maybe<NewsPageOutput>;
  SliderBlock?: Maybe<SliderBlockOutput>;
  StartPage?: Maybe<StartPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryContentAreaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentAreaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContentAreaWhereInput>;
};


export type QueryDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryNewsPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<NewsPageWhereInput>;
};


export type QuerySliderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SliderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SliderBlockWhereInput>;
};


export type QueryStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<StartPageWhereInput>;
};


export type QuerySysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TextBlockWhereInput>;
};


export type QueryVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type Query_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type Query_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type Query_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type Query_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type Query_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type Query_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type Query_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type Query_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type Query_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type QueryRef = {
  __typename?: 'QueryRef';
  ArticlePage?: Maybe<ArticlePageOutput>;
  BlankExperience?: Maybe<BlankExperienceOutput>;
  BlankSection?: Maybe<BlankSectionOutput>;
  ContentArea?: Maybe<ContentAreaOutput>;
  Data?: Maybe<DataOutput>;
  GenericMedia?: Maybe<GenericMediaOutput>;
  HeroBlock?: Maybe<HeroBlockOutput>;
  ImageMedia?: Maybe<ImageMediaOutput>;
  LandingPage?: Maybe<LandingPageOutput>;
  NewsPage?: Maybe<NewsPageOutput>;
  SliderBlock?: Maybe<SliderBlockOutput>;
  StartPage?: Maybe<StartPageOutput>;
  SysContentFolder?: Maybe<SysContentFolderOutput>;
  TextBlock?: Maybe<TextBlockOutput>;
  VideoMedia?: Maybe<VideoMediaOutput>;
  _Component?: Maybe<_ComponentOutput>;
  _Content?: Maybe<_ContentOutput>;
  _Experience?: Maybe<_ExperienceOutput>;
  _Folder?: Maybe<_FolderOutput>;
  _Image?: Maybe<_ImageOutput>;
  _Media?: Maybe<_MediaOutput>;
  _Page?: Maybe<_PageOutput>;
  _Section?: Maybe<_SectionOutput>;
  _Video?: Maybe<_VideoOutput>;
};


export type QueryRefArticlePageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ArticlePageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ArticlePageWhereInput>;
};


export type QueryRefBlankExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankExperienceWhereInput>;
};


export type QueryRefBlankSectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<BlankSectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<BlankSectionWhereInput>;
};


export type QueryRefContentAreaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ContentAreaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ContentAreaWhereInput>;
};


export type QueryRefDataArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<System_Locales>>>;
  orderBy?: InputMaybe<DataOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<DataWhereInput>;
};


export type QueryRefGenericMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<GenericMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<GenericMediaWhereInput>;
};


export type QueryRefHeroBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<HeroBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<HeroBlockWhereInput>;
};


export type QueryRefImageMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<ImageMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<ImageMediaWhereInput>;
};


export type QueryRefLandingPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<LandingPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<LandingPageWhereInput>;
};


export type QueryRefNewsPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<NewsPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<NewsPageWhereInput>;
};


export type QueryRefSliderBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SliderBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SliderBlockWhereInput>;
};


export type QueryRefStartPageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<StartPageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<StartPageWhereInput>;
};


export type QueryRefSysContentFolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<SysContentFolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<SysContentFolderWhereInput>;
};


export type QueryRefTextBlockArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<TextBlockOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<TextBlockWhereInput>;
};


export type QueryRefVideoMediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<VideoMediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<VideoMediaWhereInput>;
};


export type QueryRef_ComponentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ComponentOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ComponentWhereInput>;
};


export type QueryRef_ContentArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ContentOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ContentWhereInput>;
};


export type QueryRef_ExperienceArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ExperienceOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ExperienceWhereInput>;
};


export type QueryRef_FolderArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_FolderOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_FolderWhereInput>;
};


export type QueryRef_ImageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_ImageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_ImageWhereInput>;
};


export type QueryRef_MediaArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_MediaOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_MediaWhereInput>;
};


export type QueryRef_PageArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_PageOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_PageWhereInput>;
};


export type QueryRef_SectionArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_SectionOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_SectionWhereInput>;
};


export type QueryRef_VideoArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<_VideoOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<_VideoWhereInput>;
};

export type RangeFacetsInput = {
  from?: InputMaybe<Scalars['Int']['input']>;
  to?: InputMaybe<Scalars['Int']['input']>;
};

export type Ranking =
  | 'BOOST_ONLY'
  | 'DOC'
  | 'RELEVANCE'
  | 'SEMANTIC';

export type RichText = {
  __typename?: 'RichText';
  html?: Maybe<Scalars['String']['output']>;
  json?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  html?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  html?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  html?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  html?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  contains?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  match?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SliderBlock = IData & _IComponent & _IContent & {
  __typename?: 'SliderBlock';
  SliderContent?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type SliderBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SliderBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SliderBlockAutocomplete = {
  __typename?: 'SliderBlockAutocomplete';
  SliderContent?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SliderBlockFacet = {
  __typename?: 'SliderBlockFacet';
  SliderContent?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SliderBlockOrderByInput = {
  SliderContent?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SliderBlockOutput = {
  __typename?: 'SliderBlockOutput';
  autocomplete?: Maybe<SliderBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SliderBlockFacet>;
  item?: Maybe<SliderBlock>;
  items?: Maybe<Array<Maybe<SliderBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SliderBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SliderBlockWhereInput = {
  SliderContent?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<SliderBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SliderBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SliderBlockWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  Heading?: Maybe<Scalars['String']['output']>;
  MainContentArea?: Maybe<Array<Maybe<_IContent>>>;
  MainIntro?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  MainContentArea?: Maybe<_IContentAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  MainContentArea?: Maybe<_IContentFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type StartPageOrderByInput = {
  MainContentArea?: InputMaybe<_IContentOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  autocomplete?: Maybe<StartPageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<StartPageFacet>;
  item?: Maybe<StartPage>;
  items?: Maybe<Array<Maybe<StartPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  MainContentArea?: InputMaybe<_IContentWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  count?: Maybe<Scalars['Int']['output']>;
  name?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  boost?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  endsWith?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  eq?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  exist?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  fuzzy?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  like?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  notEq?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  notIn?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  startsWith?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  synonyms?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SynonymSlot =
  /** synonym slot 1 */
  | 'ONE'
  /** synonym slot 2 */
  | 'TWO';

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  autocomplete?: Maybe<SysContentFolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<SysContentFolderFacet>;
  item?: Maybe<SysContentFolder>;
  items?: Maybe<Array<Maybe<SysContentFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TextBlock = IData & _IComponent & _IContent & {
  __typename?: 'TextBlock';
  Text?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type TextBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TextBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  Text?: Maybe<RichTextAutocomplete>;
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  Text?: Maybe<RichTextFacet>;
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  Text?: InputMaybe<RichTextOrderByInput>;
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  autocomplete?: Maybe<TextBlockAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<TextBlockFacet>;
  item?: Maybe<TextBlock>;
  items?: Maybe<Array<Maybe<TextBlock>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  Text?: InputMaybe<RichTextWhereInput>;
  _and?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type VariationIncludeMode =
  | 'ALL'
  | 'NONE'
  | 'SOME';

export type VariationInput = {
  include?: InputMaybe<VariationIncludeMode>;
  includeOriginal?: InputMaybe<Scalars['Boolean']['input']>;
  value?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  autocomplete?: Maybe<VideoMediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<VideoMediaFacet>;
  item?: Maybe<VideoMedia>;
  items?: Maybe<Array<Maybe<VideoMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  autocomplete?: Maybe<_ComponentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ComponentFacet>;
  item?: Maybe<_IComponent>;
  items?: Maybe<Array<Maybe<_IComponent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  autocomplete?: Maybe<_ContentAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ContentFacet>;
  item?: Maybe<_IContent>;
  items?: Maybe<Array<Maybe<_IContent>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  autocomplete?: Maybe<_ExperienceAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ExperienceFacet>;
  item?: Maybe<_IExperience>;
  items?: Maybe<Array<Maybe<_IExperience>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  autocomplete?: Maybe<_FolderAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_FolderFacet>;
  item?: Maybe<_IFolder>;
  items?: Maybe<Array<Maybe<_IFolder>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _IVideo_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IVideo_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _Image = IData & _IContent & _IImage & _IMedia & {
  __typename?: '_Image';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  autocomplete?: Maybe<_ImageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_ImageFacet>;
  item?: Maybe<_IImage>;
  items?: Maybe<Array<Maybe<_IImage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  autocomplete?: Maybe<_MediaAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_MediaFacet>;
  item?: Maybe<_IMedia>;
  items?: Maybe<Array<Maybe<_IMedia>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  autocomplete?: Maybe<_PageAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_PageFacet>;
  item?: Maybe<_IPage>;
  items?: Maybe<Array<Maybe<_IPage>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
  composition?: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
  composition?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
  composition?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
  composition?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  autocomplete?: Maybe<_SectionAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_SectionFacet>;
  item?: Maybe<_ISection>;
  items?: Maybe<Array<Maybe<_ISection>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  composition?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  _children?: Maybe<QueryRef>;
  _deleted?: Maybe<Scalars['Bool']['output']>;
  _fulltext?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  _id?: Maybe<Scalars['String']['output']>;
  _link?: Maybe<QueryRef>;
  _metadata?: Maybe<IContentMetadata>;
  _modified?: Maybe<Scalars['Date']['output']>;
  _score?: Maybe<Scalars['Float']['output']>;
  _track?: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  _metadata?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  _metadata?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  _metadata?: InputMaybe<IContentMetadataOrderByInput>;
  _minimumScore?: InputMaybe<Scalars['Float']['input']>;
  _modified?: InputMaybe<OrderBy>;
  _ranking?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  _semanticWeight?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  autocomplete?: Maybe<_VideoAutocomplete>;
  cursor?: Maybe<Scalars['String']['output']>;
  facets?: Maybe<_VideoFacet>;
  item?: Maybe<_IVideo>;
  items?: Maybe<Array<Maybe<_IVideo>>>;
  total?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  _and?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _fulltext?: InputMaybe<SearchableStringFilterInput>;
  _metadata?: InputMaybe<IContentMetadataWhereInput>;
  _modified?: InputMaybe<DateFilterInput>;
  _not?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  _or?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type System_Locales =
  | 'ALL'
  | 'NEUTRAL';

export type UsePinnedInput = {
  collectionId?: InputMaybe<Scalars['String']['input']>;
  phrase?: InputMaybe<Scalars['String']['input']>;
};

export type ContentAreaDataFragment = { __typename?: 'ContentArea', _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null }
    | { __typename?: 'InstanceMetadata', key?: string | null }
    | { __typename?: 'ItemMetadata', key?: string | null }
    | { __typename?: 'MediaMetadata', key?: string | null }
   | null } & { ' $fragmentName'?: 'ContentAreaDataFragment' };

export type HeroBlockDataFragment = { __typename?: 'HeroBlock', Heading?: string | null, MainIntro?: string | null, Width?: Array<string | null> | null, _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, ContentLink?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'HeroBlockDataFragment' };

export type SliderBlockDataFragment = { __typename?: 'SliderBlock', _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, SliderContent?: Array<
    | { __typename: 'ArticlePage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'BlankExperience', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'BlankSection', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'ContentArea', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'GenericMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'HeroBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'ImageMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'LandingPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'NewsPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'SliderBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'StartPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'SysContentFolder', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'TextBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'VideoMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Component', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Content', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Experience', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Folder', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Image', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Media', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Page', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Section', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Video', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
   | null> | null } & { ' $fragmentName'?: 'SliderBlockDataFragment' };

export type TextBlockDataFragment = { __typename?: 'TextBlock', _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, Text?: { __typename?: 'RichText', html?: string | null } | null } & { ' $fragmentName'?: 'TextBlockDataFragment' };

export type BlankExperienceDataFragment = { __typename?: 'BlankExperience', _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null }
    | { __typename?: 'InstanceMetadata', key?: string | null }
    | { __typename?: 'ItemMetadata', key?: string | null }
    | { __typename?: 'MediaMetadata', key?: string | null }
   | null, composition?: { __typename?: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, type?: string | null, displayTemplateKey?: string | null } | null } & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type ArticlePageDataFragment = { __typename?: 'ArticlePage', Heading?: string | null, Intro?: string | null, _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, MainBody?: { __typename?: 'RichText', html?: string | null } | null } & { ' $fragmentName'?: 'ArticlePageDataFragment' };

export type LandingPageDataFragment = { __typename?: 'LandingPage', Title?: string | null, MetaDescription?: string | null, UrlSegment?: string | null, _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, MainBody?: { __typename?: 'RichText', html?: string | null } | null } & { ' $fragmentName'?: 'LandingPageDataFragment' };

export type NewsPageDataFragment = { __typename?: 'NewsPage', _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, MainBody?: { __typename?: 'RichText', html?: string | null } | null, MainContentArea?: Array<
    | { __typename: 'ArticlePage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'BlankExperience', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'BlankSection', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'ContentArea', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'GenericMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'HeroBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'ImageMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'LandingPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'NewsPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'SliderBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'StartPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'SysContentFolder', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'TextBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'VideoMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Component', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Content', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Experience', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Folder', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Image', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Media', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Page', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Section', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Video', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
   | null> | null } & { ' $fragmentName'?: 'NewsPageDataFragment' };

export type StartPageDataFragment = { __typename?: 'StartPage', Heading?: string | null, MainIntro?: string | null, _metadata?:
    | { __typename?: 'ContentMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'InstanceMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'ItemMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
    | { __typename?: 'MediaMetadata', key?: string | null, version?: string | null, published?: string | null, lastModified?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', base?: string | null, default?: string | null } | null }
   | null, MainContentArea?: Array<
    | { __typename: 'ArticlePage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'BlankExperience', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'BlankSection', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'ContentArea', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'GenericMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'HeroBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'ImageMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'LandingPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'NewsPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'SliderBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'StartPage', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'SysContentFolder', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'TextBlock', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: 'VideoMedia', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Component', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Content', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Experience', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Folder', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Image', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Media', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Page', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Section', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
    | { __typename: '_Video', _metadata?:
        | { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null }
        | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null }
       | null }
   | null> | null } & { ' $fragmentName'?: 'StartPageDataFragment' };

export const ContentAreaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ContentAreaDataFragment, unknown>;
export const HeroBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainIntro"}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Width"}}]}}]} as unknown as DocumentNode<HeroBlockDataFragment, unknown>;
export const SliderBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"SliderContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}}]} as unknown as DocumentNode<SliderBlockDataFragment, unknown>;
export const TextBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<TextBlockDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"displayTemplateKey"}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const ArticlePageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Intro"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<ArticlePageDataFragment, unknown>;
export const LandingPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<LandingPageDataFragment, unknown>;
export const NewsPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"NewsPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"NewsPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}}]} as unknown as DocumentNode<NewsPageDataFragment, unknown>;
export const StartPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"version"}},{"kind":"Field","name":{"kind":"Name","value":"published"}},{"kind":"Field","name":{"kind":"Name","value":"lastModified"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"base"}},{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"MainIntro"}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}}]}}]}}]}}]} as unknown as DocumentNode<StartPageDataFragment, unknown>;