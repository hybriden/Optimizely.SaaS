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
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type ArticlePage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ArticlePage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ArticlePageAutocomplete = {
  __typename?: 'ArticlePageAutocomplete';
  undefined?: Maybe<_IContentAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type ArticlePageFacet = {
  __typename?: 'ArticlePageFacet';
  undefined?: Maybe<_IContentFacet>;
  undefined?: Maybe<IContentMetadataFacet>;
};

export type ArticlePageOrderByInput = {
  undefined?: InputMaybe<_IContentOrderByInput>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type ArticlePageOutput = {
  __typename?: 'ArticlePageOutput';
  undefined?: Maybe<ArticlePageAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<ArticlePageFacet>;
  undefined?: Maybe<ArticlePage>;
  undefined?: Maybe<Array<Maybe<ArticlePage>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type ArticlePageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ArticlePageWhereInput = {
  undefined?: InputMaybe<_IContentWhereInput>;
  undefined?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<ArticlePageWhereInput>>>;
};

export type BlankExperience = IData & _IContent & _IExperience & _IPage & {
  __typename?: 'BlankExperience';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<CompositionStructureNode>;
};


export type BlankExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankExperienceAutocomplete = {
  __typename?: 'BlankExperienceAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
  undefined?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankExperienceFacet = {
  __typename?: 'BlankExperienceFacet';
  undefined?: Maybe<IContentMetadataFacet>;
  undefined?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankExperienceOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankExperienceOutput = {
  __typename?: 'BlankExperienceOutput';
  undefined?: Maybe<BlankExperienceAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<BlankExperienceFacet>;
  undefined?: Maybe<BlankExperience>;
  undefined?: Maybe<Array<Maybe<BlankExperience>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type BlankExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankExperienceWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<BlankExperienceWhereInput>>>;
  undefined?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type BlankSection = IData & _IComponent & _IContent & _ISection & {
  __typename?: 'BlankSection';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<CompositionStructureNode>;
};


export type BlankSection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type BlankSection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type BlankSectionAutocomplete = {
  __typename?: 'BlankSectionAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
  undefined?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type BlankSectionFacet = {
  __typename?: 'BlankSectionFacet';
  undefined?: Maybe<IContentMetadataFacet>;
  undefined?: Maybe<CompositionStructureNodeFacet>;
};

export type BlankSectionOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type BlankSectionOutput = {
  __typename?: 'BlankSectionOutput';
  undefined?: Maybe<BlankSectionAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<BlankSectionFacet>;
  undefined?: Maybe<BlankSection>;
  undefined?: Maybe<Array<Maybe<BlankSection>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type BlankSectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type BlankSectionWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<BlankSectionWhereInput>>>;
  undefined?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type CompositionComponentNode = ICompositionComponentNode & ICompositionNode & {
  __typename?: 'CompositionComponentNode';
  undefined?: Maybe<_IComponent>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySetting = {
  __typename?: 'CompositionDisplaySetting';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type CompositionDisplaySettingAutocomplete = {
  __typename?: 'CompositionDisplaySettingAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
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
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
};

export type CompositionDisplaySettingWhereInput = {
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
};

export type CompositionNode = ICompositionNode & {
  __typename?: 'CompositionNode';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNode = ICompositionNode & ICompositionStructureNode & {
  __typename?: 'CompositionStructureNode';
  undefined?: Maybe<_IComponent>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<ICompositionNode>>>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type CompositionStructureNodeAutocomplete = {
  __typename?: 'CompositionStructureNodeAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<CompositionDisplaySettingAutocomplete>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ICompositionNodeAutocomplete>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  undefined?: Maybe<_IComponentFacet>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<CompositionDisplaySettingFacet>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<ICompositionNodeFacet>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
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
  undefined?: InputMaybe<_IComponentOrderByInput>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<ICompositionNodeOrderByInput>;
  undefined?: InputMaybe<OrderBy>;
};

export type CompositionStructureNodeWhereInput = {
  undefined?: InputMaybe<_IComponentWhereInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<CompositionDisplaySettingWhereInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<ICompositionNodeWhereInput>;
  undefined?: InputMaybe<StringFilterInput>;
};

export type ContentArea = IData & _IComponent & _IContent & {
  __typename?: 'ContentArea';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type ContentArea_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ContentArea_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ContentAreaAutocomplete = {
  __typename?: 'ContentAreaAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type ContentAreaFacet = {
  __typename?: 'ContentAreaFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type ContentAreaOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type ContentAreaOutput = {
  __typename?: 'ContentAreaOutput';
  undefined?: Maybe<ContentAreaAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<ContentAreaFacet>;
  undefined?: Maybe<ContentArea>;
  undefined?: Maybe<Array<Maybe<ContentArea>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type ContentAreaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ContentAreaWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<ContentAreaWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<ContentAreaWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<ContentAreaWhereInput>>>;
};

export type ContentMetadata = IContentMetadata & {
  __typename?: 'ContentMetadata';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type ContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type ContentReference = {
  __typename?: 'ContentReference';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<ContentUrl>;
};

export type ContentReferenceAutocomplete = {
  __typename?: 'ContentReferenceAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrlAutocomplete>;
};


export type ContentReferenceAutocompleteKeyArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type ContentReferenceFacet = {
  __typename?: 'ContentReferenceFacet';
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<ContentUrlFacet>;
};


export type ContentReferenceFacetKeyArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type ContentReferenceOrderByInput = {
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<ContentUrlOrderByInput>;
};

export type ContentReferenceWhereInput = {
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<ContentUrlWhereInput>;
};

export type ContentUrl = {
  __typename?: 'ContentUrl';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type ContentUrlAutocomplete = {
  __typename?: 'ContentUrlAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
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
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
};

export type ContentUrlWhereInput = {
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
};

export type Data = IData & {
  __typename?: 'Data';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type Data_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type Data_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type DataOrderByInput = {
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type DataOutput = {
  __typename?: 'DataOutput';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<IData>;
  undefined?: Maybe<Array<Maybe<IData>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type DataOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DataWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<DataWhereInput>>>;
};

export type DateFacet = {
  __typename?: 'DateFacet';
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type DateFacetUnit =
  | 'undefined'
  | 'undefined'
  | 'undefined';

export type DateFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `decay` influences the weight of the score with a decay function. For example, results that have a more recent datetime will be ranked higher. The `origin` will be `now()` in case not specified. The `scale` is by default 10. The `rate` must be in the range `[0..1]`. */
  undefined?: InputMaybe<Decay>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  undefined?: InputMaybe<Scalars['Date']['input']>;
  /** `exist` matches results that have this field. */
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  undefined?: InputMaybe<Scalars['Date']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  undefined?: InputMaybe<Scalars['Date']['input']>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  undefined?: InputMaybe<Scalars['Date']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  undefined?: InputMaybe<Scalars['Date']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  undefined?: InputMaybe<Scalars['Date']['input']>;
};

/** Decay influences the weight of the score based on field values with a decay function */
export type Decay = {
  undefined?: InputMaybe<Scalars['Date']['input']>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<Scalars['Int']['input']>;
};

export type FactorModifier =
  | 'undefined'
  | 'undefined'
  | 'undefined'
  | 'undefined'
  | 'undefined';

export type GenericMedia = IData & _IContent & _IMedia & {
  __typename?: 'GenericMedia';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type GenericMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type GenericMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type GenericMediaAutocomplete = {
  __typename?: 'GenericMediaAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type GenericMediaFacet = {
  __typename?: 'GenericMediaFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type GenericMediaOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type GenericMediaOutput = {
  __typename?: 'GenericMediaOutput';
  undefined?: Maybe<GenericMediaAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<GenericMediaFacet>;
  undefined?: Maybe<GenericMedia>;
  undefined?: Maybe<Array<Maybe<GenericMedia>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type GenericMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type GenericMediaWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<GenericMediaWhereInput>>>;
};

export type HeroBlock = IData & _IComponent & _IContent & {
  __typename?: 'HeroBlock';
  undefined?: Maybe<ContentReference>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<ContentReference>;
  undefined?: Maybe<RichText>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type HeroBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type HeroBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type HeroBlockAutocomplete = {
  __typename?: 'HeroBlockAutocomplete';
  undefined?: Maybe<ContentReferenceAutocomplete>;
  undefined?: Maybe<ContentReferenceAutocomplete>;
  undefined?: Maybe<RichTextAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type HeroBlockFacet = {
  __typename?: 'HeroBlockFacet';
  undefined?: Maybe<ContentReferenceFacet>;
  undefined?: Maybe<ContentReferenceFacet>;
  undefined?: Maybe<RichTextFacet>;
  undefined?: Maybe<IContentMetadataFacet>;
};

export type HeroBlockOrderByInput = {
  undefined?: InputMaybe<ContentReferenceOrderByInput>;
  undefined?: InputMaybe<ContentReferenceOrderByInput>;
  undefined?: InputMaybe<RichTextOrderByInput>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type HeroBlockOutput = {
  __typename?: 'HeroBlockOutput';
  undefined?: Maybe<HeroBlockAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<HeroBlockFacet>;
  undefined?: Maybe<HeroBlock>;
  undefined?: Maybe<Array<Maybe<HeroBlock>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type HeroBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type HeroBlockProperty = {
  __typename?: 'HeroBlockProperty';
  undefined?: Maybe<ContentReference>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<ContentReference>;
  undefined?: Maybe<RichText>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};

export type HeroBlockPropertyAutocomplete = {
  __typename?: 'HeroBlockPropertyAutocomplete';
  undefined?: Maybe<ContentReferenceAutocomplete>;
  undefined?: Maybe<ContentReferenceAutocomplete>;
  undefined?: Maybe<RichTextAutocomplete>;
};

export type HeroBlockPropertyFacet = {
  __typename?: 'HeroBlockPropertyFacet';
  undefined?: Maybe<ContentReferenceFacet>;
  undefined?: Maybe<ContentReferenceFacet>;
  undefined?: Maybe<RichTextFacet>;
};

export type HeroBlockPropertyOrderByInput = {
  undefined?: InputMaybe<ContentReferenceOrderByInput>;
  undefined?: InputMaybe<ContentReferenceOrderByInput>;
  undefined?: InputMaybe<RichTextOrderByInput>;
};

export type HeroBlockPropertyWhereInput = {
  undefined?: InputMaybe<ContentReferenceWhereInput>;
  undefined?: InputMaybe<ContentReferenceWhereInput>;
  undefined?: InputMaybe<RichTextWhereInput>;
};

export type HeroBlockWhereInput = {
  undefined?: InputMaybe<ContentReferenceWhereInput>;
  undefined?: InputMaybe<ContentReferenceWhereInput>;
  undefined?: InputMaybe<RichTextWhereInput>;
  undefined?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<HeroBlockWhereInput>>>;
};

/** Options for highlighting */
export type HighlightOptions = {
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  undefined?: InputMaybe<Scalars['String']['input']>;
  undefined?: InputMaybe<Scalars['String']['input']>;
};

export type ICompositionComponentNode = {
  undefined?: Maybe<_IComponent>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNode = {
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type ICompositionNodeAutocomplete = {
  __typename?: 'ICompositionNodeAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<CompositionDisplaySettingAutocomplete>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<CompositionDisplaySettingFacet>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
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
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<CompositionDisplaySettingOrderByInput>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
};

export type ICompositionNodeWhereInput = {
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<CompositionDisplaySettingWhereInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
};

export type ICompositionStructureNode = {
  undefined?: Maybe<_IComponent>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<CompositionDisplaySetting>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<ICompositionNode>>>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type IContentMetadata = {
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type IContentMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IContentMetadataAutocomplete = {
  __typename?: 'IContentMetadataAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrlAutocomplete>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
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
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<DateFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<DateFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<DateFacet>>>;
  undefined?: Maybe<Array<Maybe<NumberFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<ContentUrlFacet>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
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
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<ContentUrlOrderByInput>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
};

export type IContentMetadataWhereInput = {
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<IntFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<ContentUrlWhereInput>;
  undefined?: InputMaybe<StringFilterInput>;
  undefined?: InputMaybe<StringFilterInput>;
};

export type IData = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type IData_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type IData_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type IInstanceMetadata = {
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type IInstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IItemMetadata = {
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type IItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IMediaMetadata = {
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
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
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type ImageMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type ImageMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type ImageMediaAutocomplete = {
  __typename?: 'ImageMediaAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type ImageMediaFacet = {
  __typename?: 'ImageMediaFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type ImageMediaOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type ImageMediaOutput = {
  __typename?: 'ImageMediaOutput';
  undefined?: Maybe<ImageMediaAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<ImageMediaFacet>;
  undefined?: Maybe<ImageMedia>;
  undefined?: Maybe<Array<Maybe<ImageMedia>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type ImageMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type ImageMediaWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<ImageMediaWhereInput>>>;
};

export type InstanceMetadata = IContentMetadata & IInstanceMetadata & {
  __typename?: 'InstanceMetadata';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type InstanceMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type IntFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `exist` matches results that have this field. */
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  /** `Factor` allows you to use a number value in a field to influence the `_score` directly. If used on a multi-valued field, then only the lowest value of the field is used in calculations. Default for `value` is `1`. Default for `modifier` is `NONE`. */
  undefined?: InputMaybe<NumberFactor>;
  /** `gt` retrieves results with matches that have a value which is `greater than` it. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `gte` retrieves results with matches that have a value which is `greater than or equal to` it. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  undefined?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  /** `lt` retrieves results with matches that have a value which is `lower than` it. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `lte` retrieves results with matches that have a value which is `lower than or equal to` it. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  undefined?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
};

export type ItemMetadata = IContentMetadata & IItemMetadata & {
  __typename?: 'ItemMetadata';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type ItemMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type LandingPage = IData & _IContent & _IPage & {
  __typename?: 'LandingPage';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<RichText>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type LandingPageMetaDescriptionArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPageTitleArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPageUrlSegmentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type LandingPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type LandingPageAutocomplete = {
  __typename?: 'LandingPageAutocomplete';
  undefined?: Maybe<RichTextAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type LandingPageFacet = {
  __typename?: 'LandingPageFacet';
  undefined?: Maybe<RichTextFacet>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
  undefined?: Maybe<IContentMetadataFacet>;
};


export type LandingPageFacetMetaDescriptionArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetTitleArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};


export type LandingPageFacetUrlSegmentArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type LandingPageOrderByInput = {
  undefined?: InputMaybe<RichTextOrderByInput>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type LandingPageOutput = {
  __typename?: 'LandingPageOutput';
  undefined?: Maybe<LandingPageAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<LandingPageFacet>;
  undefined?: Maybe<LandingPage>;
  undefined?: Maybe<Array<Maybe<LandingPage>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type LandingPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type LandingPageWhereInput = {
  undefined?: InputMaybe<RichTextWhereInput>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<LandingPageWhereInput>>>;
};

export type LinkConfig = {
  undefined?: InputMaybe<Scalars['String']['input']>;
  undefined?: InputMaybe<Scalars['String']['input']>;
};

export type LinkTypes =
  | 'undefined'
  | 'undefined'
  | 'undefined'
  | 'undefined';

export type Locales =
  | 'undefined'
  | 'undefined'
  | 'undefined';

export type MediaMetadata = IContentMetadata & IInstanceMetadata & IMediaMetadata & {
  __typename?: 'MediaMetadata';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['DateTime']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<ContentUrl>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type MediaMetadataContentArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MediaMetadataDisplayNameArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};

export type MyTest = IData & _IContent & _IPage & {
  __typename?: 'MyTest';
  undefined?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type MyTest_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type MyTest_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type MyTestAutocomplete = {
  __typename?: 'MyTestAutocomplete';
  undefined?: Maybe<_IContentAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type MyTestFacet = {
  __typename?: 'MyTestFacet';
  undefined?: Maybe<_IContentFacet>;
  undefined?: Maybe<IContentMetadataFacet>;
};

export type MyTestOrderByInput = {
  undefined?: InputMaybe<_IContentOrderByInput>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type MyTestOutput = {
  __typename?: 'MyTestOutput';
  undefined?: Maybe<MyTestAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<MyTestFacet>;
  undefined?: Maybe<MyTest>;
  undefined?: Maybe<Array<Maybe<MyTest>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type MyTestOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type MyTestWhereInput = {
  undefined?: InputMaybe<_IContentWhereInput>;
  undefined?: InputMaybe<Array<InputMaybe<MyTestWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<MyTestWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<MyTestWhereInput>>>;
};

export type NumberFacet = {
  __typename?: 'NumberFacet';
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

/** Factor influences the score based of number values with a factor function */
export type NumberFactor = {
  undefined?: InputMaybe<FactorModifier>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type OrderBy =
  | 'undefined'
  | 'undefined';

export type OrderByFacetType =
  | 'undefined'
  | 'undefined';

export type Query = {
  __typename?: 'Query';
  undefined?: Maybe<ArticlePageOutput>;
  undefined?: Maybe<BlankExperienceOutput>;
  undefined?: Maybe<BlankSectionOutput>;
  undefined?: Maybe<ContentAreaOutput>;
  undefined?: Maybe<DataOutput>;
  undefined?: Maybe<GenericMediaOutput>;
  undefined?: Maybe<HeroBlockOutput>;
  undefined?: Maybe<ImageMediaOutput>;
  undefined?: Maybe<LandingPageOutput>;
  undefined?: Maybe<MyTestOutput>;
  undefined?: Maybe<SliderBlockOutput>;
  undefined?: Maybe<StartPageOutput>;
  undefined?: Maybe<SysContentFolderOutput>;
  undefined?: Maybe<TextBlockOutput>;
  undefined?: Maybe<VideoMediaOutput>;
  undefined?: Maybe<_ComponentOutput>;
  undefined?: Maybe<_ContentOutput>;
  undefined?: Maybe<_ExperienceOutput>;
  undefined?: Maybe<_FolderOutput>;
  undefined?: Maybe<_ImageOutput>;
  undefined?: Maybe<_MediaOutput>;
  undefined?: Maybe<_PageOutput>;
  undefined?: Maybe<_SectionOutput>;
  undefined?: Maybe<_VideoOutput>;
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


export type QueryMyTestArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MyTestOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MyTestWhereInput>;
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
  undefined?: Maybe<ArticlePageOutput>;
  undefined?: Maybe<BlankExperienceOutput>;
  undefined?: Maybe<BlankSectionOutput>;
  undefined?: Maybe<ContentAreaOutput>;
  undefined?: Maybe<DataOutput>;
  undefined?: Maybe<GenericMediaOutput>;
  undefined?: Maybe<HeroBlockOutput>;
  undefined?: Maybe<ImageMediaOutput>;
  undefined?: Maybe<LandingPageOutput>;
  undefined?: Maybe<MyTestOutput>;
  undefined?: Maybe<SliderBlockOutput>;
  undefined?: Maybe<StartPageOutput>;
  undefined?: Maybe<SysContentFolderOutput>;
  undefined?: Maybe<TextBlockOutput>;
  undefined?: Maybe<VideoMediaOutput>;
  undefined?: Maybe<_ComponentOutput>;
  undefined?: Maybe<_ContentOutput>;
  undefined?: Maybe<_ExperienceOutput>;
  undefined?: Maybe<_FolderOutput>;
  undefined?: Maybe<_ImageOutput>;
  undefined?: Maybe<_MediaOutput>;
  undefined?: Maybe<_PageOutput>;
  undefined?: Maybe<_SectionOutput>;
  undefined?: Maybe<_VideoOutput>;
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


export type QueryRefMyTestArgs = {
  cursor?: InputMaybe<Scalars['String']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  limit?: Scalars['Int']['input'];
  locale?: InputMaybe<Array<InputMaybe<Locales>>>;
  orderBy?: InputMaybe<MyTestOrderByInput>;
  skip?: Scalars['Int']['input'];
  track?: InputMaybe<Scalars['String']['input']>;
  usePinned?: InputMaybe<UsePinnedInput>;
  variation?: InputMaybe<VariationInput>;
  where?: InputMaybe<MyTestWhereInput>;
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
  undefined?: InputMaybe<Scalars['Int']['input']>;
  undefined?: InputMaybe<Scalars['Int']['input']>;
};

export type Ranking =
  | 'undefined'
  | 'undefined'
  | 'undefined'
  | 'undefined';

export type RichText = {
  __typename?: 'RichText';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<Scalars['JSON']['output']>;
};

export type RichTextAutocomplete = {
  __typename?: 'RichTextAutocomplete';
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
};


export type RichTextAutocompleteHtmlArgs = {
  limit?: Scalars['Int']['input'];
  value: Scalars['String']['input'];
};

export type RichTextFacet = {
  __typename?: 'RichTextFacet';
  undefined?: Maybe<Array<Maybe<StringFacet>>>;
};


export type RichTextFacetHtmlArgs = {
  filters?: InputMaybe<Array<Scalars['String']['input']>>;
  limit?: Scalars['Int']['input'];
  orderBy?: InputMaybe<OrderBy>;
  orderType?: InputMaybe<OrderByFacetType>;
};

export type RichTextOrderByInput = {
  undefined?: InputMaybe<OrderBy>;
};

export type RichTextWhereInput = {
  undefined?: InputMaybe<StringFilterInput>;
};

export type SearchableStringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `contains` performs full-text search on a word or phrase. */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  undefined?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `match` performs full-text search on a word or phrase where less relevant items are also returned. The `match` operator is only supported for `searchable` fields. It will improve fulltext search by making it easier to match on words. More exact matches will be ranked higher, less exact matches will be ranked lower. The `match` operator is supported with synonyms and fuzzy search. */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  undefined?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  undefined?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SliderBlock = IData & _IComponent & _IContent & {
  __typename?: 'SliderBlock';
  undefined?: Maybe<Array<Maybe<_IContent>>>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type SliderBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SliderBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SliderBlockAutocomplete = {
  __typename?: 'SliderBlockAutocomplete';
  undefined?: Maybe<_IContentAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type SliderBlockFacet = {
  __typename?: 'SliderBlockFacet';
  undefined?: Maybe<_IContentFacet>;
  undefined?: Maybe<IContentMetadataFacet>;
};

export type SliderBlockOrderByInput = {
  undefined?: InputMaybe<_IContentOrderByInput>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type SliderBlockOutput = {
  __typename?: 'SliderBlockOutput';
  undefined?: Maybe<SliderBlockAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<SliderBlockFacet>;
  undefined?: Maybe<SliderBlock>;
  undefined?: Maybe<Array<Maybe<SliderBlock>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type SliderBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SliderBlockWhereInput = {
  undefined?: InputMaybe<_IContentWhereInput>;
  undefined?: InputMaybe<Array<InputMaybe<SliderBlockWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<SliderBlockWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<SliderBlockWhereInput>>>;
};

export type StartPage = IData & _IContent & _IPage & {
  __typename?: 'StartPage';
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<HeroBlockProperty>;
  undefined?: Maybe<Array<Maybe<_IContent>>>;
  undefined?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type StartPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type StartPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type StartPageAutocomplete = {
  __typename?: 'StartPageAutocomplete';
  undefined?: Maybe<HeroBlockPropertyAutocomplete>;
  undefined?: Maybe<_IContentAutocomplete>;
  undefined?: Maybe<RichTextAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type StartPageFacet = {
  __typename?: 'StartPageFacet';
  undefined?: Maybe<HeroBlockPropertyFacet>;
  undefined?: Maybe<_IContentFacet>;
  undefined?: Maybe<RichTextFacet>;
  undefined?: Maybe<IContentMetadataFacet>;
};

export type StartPageOrderByInput = {
  undefined?: InputMaybe<HeroBlockPropertyOrderByInput>;
  undefined?: InputMaybe<_IContentOrderByInput>;
  undefined?: InputMaybe<RichTextOrderByInput>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type StartPageOutput = {
  __typename?: 'StartPageOutput';
  undefined?: Maybe<StartPageAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<StartPageFacet>;
  undefined?: Maybe<StartPage>;
  undefined?: Maybe<Array<Maybe<StartPage>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type StartPageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type StartPageWhereInput = {
  undefined?: InputMaybe<HeroBlockPropertyWhereInput>;
  undefined?: InputMaybe<_IContentWhereInput>;
  undefined?: InputMaybe<RichTextWhereInput>;
  undefined?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<StartPageWhereInput>>>;
};

export type StringFacet = {
  __typename?: 'StringFacet';
  undefined?: Maybe<Scalars['Int']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};

export type StringFilterInput = {
  /** `boost` influences the weight of a field by boosting a match with a number (default: 1) — counts more towards the eventual relevance score which can be projected with `_score` — at query time. Note that `boost` cannot be a negative number. */
  undefined?: InputMaybe<Scalars['Int']['input']>;
  /** `ends_with` retrieves matches that end with a certain value (suffix). */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `eq` matches on an exact value, but the value is case-insensitive. */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `exist` matches results that have this field. */
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  /** enables supporting fuzzy matching on the query terms (keywords), which returns items that contain terms in the content similar to the keywords, as measured by a _Levenshtein edit distance_. An edit distance is the number of one-character changes needed to turn one term into another. The edit distance is based on the length of the term.  */
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  /** `in` matches with 1 or more exact values in a list. Example: `in: ["word1", "word2", "this is a phrase"]` */
  undefined?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `like` matches on substrings with wildcard support: `%` to match on 0 or more characters, `_` to match on any character.  */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `not_eq` retrieves results not matching with an exact (but case-insensitive) value. */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** `not_in` returns results that do not match with 1 or more exact values in a list. Example: `not_in: ["word1", "word2", "this is a phrase"]` */
  undefined?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  /** `starts_with` retrieves matches that start with a certain value (prefix). */
  undefined?: InputMaybe<Scalars['String']['input']>;
  /** expands query value with synonyms. Example: if `H2O` is a synonym of `water`, then querying for `water` will also return results with `H2O`. */
  undefined?: InputMaybe<Array<InputMaybe<SynonymSlot>>>;
};

export type SynonymSlot =
  | 'undefined'
  | 'undefined';

export type SysContentFolder = IData & _IContent & _IFolder & {
  __typename?: 'SysContentFolder';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type SysContentFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type SysContentFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type SysContentFolderAutocomplete = {
  __typename?: 'SysContentFolderAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type SysContentFolderFacet = {
  __typename?: 'SysContentFolderFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type SysContentFolderOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type SysContentFolderOutput = {
  __typename?: 'SysContentFolderOutput';
  undefined?: Maybe<SysContentFolderAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<SysContentFolderFacet>;
  undefined?: Maybe<SysContentFolder>;
  undefined?: Maybe<Array<Maybe<SysContentFolder>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type SysContentFolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type SysContentFolderWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<SysContentFolderWhereInput>>>;
};

export type TextBlock = IData & _IComponent & _IContent & {
  __typename?: 'TextBlock';
  undefined?: Maybe<RichText>;
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type TextBlock_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type TextBlock_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type TextBlockAutocomplete = {
  __typename?: 'TextBlockAutocomplete';
  undefined?: Maybe<RichTextAutocomplete>;
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type TextBlockFacet = {
  __typename?: 'TextBlockFacet';
  undefined?: Maybe<RichTextFacet>;
  undefined?: Maybe<IContentMetadataFacet>;
};

export type TextBlockOrderByInput = {
  undefined?: InputMaybe<RichTextOrderByInput>;
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type TextBlockOutput = {
  __typename?: 'TextBlockOutput';
  undefined?: Maybe<TextBlockAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<TextBlockFacet>;
  undefined?: Maybe<TextBlock>;
  undefined?: Maybe<Array<Maybe<TextBlock>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type TextBlockOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TextBlockWhereInput = {
  undefined?: InputMaybe<RichTextWhereInput>;
  undefined?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<TextBlockWhereInput>>>;
};

export type VariationIncludeMode =
  | 'undefined'
  | 'undefined'
  | 'undefined';

export type VariationInput = {
  undefined?: InputMaybe<VariationIncludeMode>;
  undefined?: InputMaybe<Scalars['Boolean']['input']>;
  undefined?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type VideoMedia = IData & _IContent & _IMedia & _IVideo & {
  __typename?: 'VideoMedia';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type VideoMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type VideoMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type VideoMediaAutocomplete = {
  __typename?: 'VideoMediaAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type VideoMediaFacet = {
  __typename?: 'VideoMediaFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type VideoMediaOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type VideoMediaOutput = {
  __typename?: 'VideoMediaOutput';
  undefined?: Maybe<VideoMediaAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<VideoMediaFacet>;
  undefined?: Maybe<VideoMedia>;
  undefined?: Maybe<Array<Maybe<VideoMedia>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type VideoMediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type VideoMediaWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<VideoMediaWhereInput>>>;
};

export type _Component = IData & _IComponent & _IContent & {
  __typename?: '_Component';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Component_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Component_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ComponentAutocomplete = {
  __typename?: '_ComponentAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _ComponentFacet = {
  __typename?: '_ComponentFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _ComponentOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _ComponentOutput = {
  __typename?: '_ComponentOutput';
  undefined?: Maybe<_ComponentAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_ComponentFacet>;
  undefined?: Maybe<_IComponent>;
  undefined?: Maybe<Array<Maybe<_IComponent>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _ComponentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ComponentWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_ComponentWhereInput>>>;
};

export type _Content = IData & _IContent & {
  __typename?: '_Content';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Content_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Content_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ContentAutocomplete = {
  __typename?: '_ContentAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _ContentFacet = {
  __typename?: '_ContentFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _ContentOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _ContentOutput = {
  __typename?: '_ContentOutput';
  undefined?: Maybe<_ContentAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_ContentFacet>;
  undefined?: Maybe<_IContent>;
  undefined?: Maybe<Array<Maybe<_IContent>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _ContentOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ContentWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_ContentWhereInput>>>;
};

export type _Experience = IData & _IContent & _IExperience & _IPage & {
  __typename?: '_Experience';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<CompositionStructureNode>;
};


export type _Experience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Experience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ExperienceAutocomplete = {
  __typename?: '_ExperienceAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
  undefined?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _ExperienceFacet = {
  __typename?: '_ExperienceFacet';
  undefined?: Maybe<IContentMetadataFacet>;
  undefined?: Maybe<CompositionStructureNodeFacet>;
};

export type _ExperienceOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _ExperienceOutput = {
  __typename?: '_ExperienceOutput';
  undefined?: Maybe<_ExperienceAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_ExperienceFacet>;
  undefined?: Maybe<_IExperience>;
  undefined?: Maybe<Array<Maybe<_IExperience>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _ExperienceOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ExperienceWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_ExperienceWhereInput>>>;
  undefined?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Folder = IData & _IContent & _IFolder & {
  __typename?: '_Folder';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Folder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Folder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _FolderAutocomplete = {
  __typename?: '_FolderAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _FolderFacet = {
  __typename?: '_FolderFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _FolderOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _FolderOutput = {
  __typename?: '_FolderOutput';
  undefined?: Maybe<_FolderAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_FolderFacet>;
  undefined?: Maybe<_IFolder>;
  undefined?: Maybe<Array<Maybe<_IFolder>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _FolderOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _FolderWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_FolderWhereInput>>>;
};

export type _IComponent = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _IComponent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IComponent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IComponentFacet = {
  __typename?: '_IComponentFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _IComponentOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _IComponentWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_IComponentWhereInput>>>;
};

export type _IContent = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _IContent_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IContent_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IContentAutocomplete = {
  __typename?: '_IContentAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _IContentFacet = {
  __typename?: '_IContentFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _IContentOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _IContentWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_IContentWhereInput>>>;
};

export type _IExperience = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<CompositionStructureNode>;
};


export type _IExperience_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IExperience_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IFolder = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _IFolder_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IFolder_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IImage = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _IImage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IImage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IMedia = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _IMedia_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IMedia_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IPage = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _IPage_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _IPage_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ISection = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<CompositionStructureNode>;
};


export type _ISection_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _ISection_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _IVideo = {
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
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
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Image_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Image_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _ImageAutocomplete = {
  __typename?: '_ImageAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _ImageFacet = {
  __typename?: '_ImageFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _ImageOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _ImageOutput = {
  __typename?: '_ImageOutput';
  undefined?: Maybe<_ImageAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_ImageFacet>;
  undefined?: Maybe<_IImage>;
  undefined?: Maybe<Array<Maybe<_IImage>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _ImageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _ImageWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_ImageWhereInput>>>;
};

export type _Media = IData & _IContent & _IMedia & {
  __typename?: '_Media';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Media_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Media_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _MediaAutocomplete = {
  __typename?: '_MediaAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _MediaFacet = {
  __typename?: '_MediaFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _MediaOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _MediaOutput = {
  __typename?: '_MediaOutput';
  undefined?: Maybe<_MediaAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_MediaFacet>;
  undefined?: Maybe<_IMedia>;
  undefined?: Maybe<Array<Maybe<_IMedia>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _MediaOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _MediaWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_MediaWhereInput>>>;
};

export type _Page = IData & _IContent & _IPage & {
  __typename?: '_Page';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Page_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Page_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _PageAutocomplete = {
  __typename?: '_PageAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _PageFacet = {
  __typename?: '_PageFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _PageOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _PageOutput = {
  __typename?: '_PageOutput';
  undefined?: Maybe<_PageAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_PageFacet>;
  undefined?: Maybe<_IPage>;
  undefined?: Maybe<Array<Maybe<_IPage>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _PageOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _PageWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_PageWhereInput>>>;
};

export type _Section = IData & _IComponent & _IContent & _ISection & {
  __typename?: '_Section';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<CompositionStructureNode>;
};


export type _Section_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Section_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _SectionAutocomplete = {
  __typename?: '_SectionAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
  undefined?: Maybe<CompositionStructureNodeAutocomplete>;
};

export type _SectionFacet = {
  __typename?: '_SectionFacet';
  undefined?: Maybe<IContentMetadataFacet>;
  undefined?: Maybe<CompositionStructureNodeFacet>;
};

export type _SectionOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<CompositionStructureNodeOrderByInput>;
};

export type _SectionOutput = {
  __typename?: '_SectionOutput';
  undefined?: Maybe<_SectionAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_SectionFacet>;
  undefined?: Maybe<_ISection>;
  undefined?: Maybe<Array<Maybe<_ISection>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _SectionOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _SectionWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_SectionWhereInput>>>;
  undefined?: InputMaybe<CompositionStructureNodeWhereInput>;
};

export type _Video = IData & _IContent & _IMedia & _IVideo & {
  __typename?: '_Video';
  /** @deprecated Use `_link` field instead */
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<Scalars['Bool']['output']>;
  undefined?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<QueryRef>;
  undefined?: Maybe<IContentMetadata>;
  undefined?: Maybe<Scalars['Date']['output']>;
  undefined?: Maybe<Scalars['Float']['output']>;
  undefined?: Maybe<Scalars['String']['output']>;
};


export type _Video_FulltextArgs = {
  highlight?: InputMaybe<HighlightOptions>;
};


export type _Video_LinkArgs = {
  type?: InputMaybe<LinkTypes>;
};

export type _VideoAutocomplete = {
  __typename?: '_VideoAutocomplete';
  undefined?: Maybe<IContentMetadataAutocomplete>;
};

export type _VideoFacet = {
  __typename?: '_VideoFacet';
  undefined?: Maybe<IContentMetadataFacet>;
};

export type _VideoOrderByInput = {
  undefined?: InputMaybe<IContentMetadataOrderByInput>;
  undefined?: InputMaybe<Scalars['Float']['input']>;
  undefined?: InputMaybe<OrderBy>;
  undefined?: InputMaybe<Ranking>;
  /** The value needs to be a positive value, but cannot exceed the maximum value of an integer. In case it is exceeded, the maximum of an integer is used. In case of a negative value, semantic search will be disabled. */
  undefined?: InputMaybe<Scalars['Float']['input']>;
};

export type _VideoOutput = {
  __typename?: '_VideoOutput';
  undefined?: Maybe<_VideoAutocomplete>;
  undefined?: Maybe<Scalars['String']['output']>;
  undefined?: Maybe<_VideoFacet>;
  undefined?: Maybe<_IVideo>;
  undefined?: Maybe<Array<Maybe<_IVideo>>>;
  undefined?: Maybe<Scalars['Int']['output']>;
};


export type _VideoOutputTotalArgs = {
  all?: InputMaybe<Scalars['Boolean']['input']>;
};

export type _VideoWhereInput = {
  undefined?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  undefined?: InputMaybe<SearchableStringFilterInput>;
  undefined?: InputMaybe<IContentMetadataWhereInput>;
  undefined?: InputMaybe<DateFilterInput>;
  undefined?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
  undefined?: InputMaybe<Array<InputMaybe<_VideoWhereInput>>>;
};

export type System_Locales =
  | 'undefined'
  | 'undefined';

export type UsePinnedInput = {
  undefined?: InputMaybe<Scalars['String']['input']>;
  undefined?: InputMaybe<Scalars['String']['input']>;
};

export type BlankSectionDataFragment = { __typename?: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'BlankSectionDataFragment' };

export type ContentAreaDataFragment = { __typename?: 'ContentArea', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'ContentAreaDataFragment' };

export type GenericMediaDataFragment = { __typename?: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'GenericMediaDataFragment' };

export type HeroBlockDataFragment = { __typename?: 'HeroBlock', Heading?: string | null, Width?: Array<string | null> | null, Image?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null, MainIntro?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null, ContentLink?: { __typename?: 'ContentReference', url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'HeroBlockDataFragment' };

export type ImageMediaDataFragment = { __typename?: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } & { ' $fragmentName'?: 'ImageMediaDataFragment' };

export type SliderBlockDataFragment = { __typename?: 'SliderBlock', SliderContent?: Array<{ __typename: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'ContentArea', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | (
    { __typename: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null }
    & { ' $fragmentRefs'?: { 'ImageMediaDataFragment': ImageMediaDataFragment } }
  ) | { __typename: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'MyTest', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'SliderBlock', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'TextBlock', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Component', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Content', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Experience', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Folder', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Image', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Media', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Page', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Section', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | { __typename: '_Video', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, url?: { __typename?: 'ContentUrl', default?: string | null } | null } | null } | null> | null } & { ' $fragmentName'?: 'SliderBlockDataFragment' };

export type SysContentFolderDataFragment = { __typename?: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'SysContentFolderDataFragment' };

export type TextBlockDataFragment = { __typename?: 'TextBlock', Text?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null } & { ' $fragmentName'?: 'TextBlockDataFragment' };

export type VideoMediaDataFragment = { __typename?: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'VideoMediaDataFragment' };

export type BlankExperienceDataFragment = { __typename?: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null, composition?: { __typename?: 'CompositionStructureNode', key?: string | null, displayName?: string | null, nodeType?: string | null, type?: string | null, displayTemplateKey?: string | null } | null } & { ' $fragmentName'?: 'BlankExperienceDataFragment' };

export type ArticlePageDataFragment = { __typename?: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'ArticlePageDataFragment' };

export type LandingPageDataFragment = { __typename?: 'LandingPage', Title?: string | null, MetaDescription?: string | null, UrlSegment?: string | null, MainBody?: { __typename?: 'RichText', html?: string | null } | null } & { ' $fragmentName'?: 'LandingPageDataFragment' };

export type MyTestDataFragment = { __typename?: 'MyTest', _metadata?: { __typename?: 'ContentMetadata', key?: string | null } | { __typename?: 'InstanceMetadata', key?: string | null } | { __typename?: 'ItemMetadata', key?: string | null } | { __typename?: 'MediaMetadata', key?: string | null } | null } & { ' $fragmentName'?: 'MyTestDataFragment' };

export type StartPageDataFragment = { __typename?: 'StartPage', Heading?: string | null, MainIntro?: { __typename?: 'RichText', json?: any | null, html?: string | null } | null, MainContentArea?: Array<{ __typename: 'ArticlePage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: 'BlankExperience', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: 'BlankSection', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | (
    { __typename: 'ContentArea', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'ContentAreaDataFragment': ContentAreaDataFragment } }
  ) | { __typename: 'GenericMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | (
    { __typename: 'HeroBlock', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'HeroBlockDataFragment': HeroBlockDataFragment } }
  ) | { __typename: 'ImageMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: 'LandingPage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: 'MyTest', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | (
    { __typename: 'SliderBlock', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'SliderBlockDataFragment': SliderBlockDataFragment } }
  ) | { __typename: 'StartPage', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: 'SysContentFolder', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | (
    { __typename: 'TextBlock', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null }
    & { ' $fragmentRefs'?: { 'TextBlockDataFragment': TextBlockDataFragment } }
  ) | { __typename: 'VideoMedia', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Component', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Content', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Experience', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Folder', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Image', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Media', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Page', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Section', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | { __typename: '_Video', _metadata?: { __typename?: 'ContentMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'InstanceMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'ItemMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | { __typename?: 'MediaMetadata', key?: string | null, displayName?: string | null, types?: Array<string | null> | null } | null } | null> | null } & { ' $fragmentName'?: 'StartPageDataFragment' };

export const BlankSectionDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankSectionData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankSection"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<BlankSectionDataFragment, unknown>;
export const GenericMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"GenericMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"GenericMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<GenericMediaDataFragment, unknown>;
export const SysContentFolderDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SysContentFolderData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SysContentFolder"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<SysContentFolderDataFragment, unknown>;
export const VideoMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"VideoMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"VideoMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<VideoMediaDataFragment, unknown>;
export const BlankExperienceDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"BlankExperienceData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"BlankExperience"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}},{"kind":"Field","name":{"kind":"Name","value":"composition"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"nodeType"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"displayTemplateKey"}}]}}]}}]} as unknown as DocumentNode<BlankExperienceDataFragment, unknown>;
export const ArticlePageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ArticlePageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ArticlePage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ArticlePageDataFragment, unknown>;
export const LandingPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"LandingPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"LandingPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Title"}},{"kind":"Field","name":{"kind":"Name","value":"MetaDescription"}},{"kind":"Field","name":{"kind":"Name","value":"UrlSegment"}},{"kind":"Field","name":{"kind":"Name","value":"MainBody"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<LandingPageDataFragment, unknown>;
export const MyTestDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"MyTestData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"MyTest"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<MyTestDataFragment, unknown>;
export const HeroBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Width"}}]}}]} as unknown as DocumentNode<HeroBlockDataFragment, unknown>;
export const TextBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}}]} as unknown as DocumentNode<TextBlockDataFragment, unknown>;
export const ImageMediaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}}]} as unknown as DocumentNode<ImageMediaDataFragment, unknown>;
export const SliderBlockDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SliderContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMediaData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}}]} as unknown as DocumentNode<SliderBlockDataFragment, unknown>;
export const ContentAreaDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<ContentAreaDataFragment, unknown>;
export const StartPageDataFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"StartPageData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"StartPage"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"MainIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainContentArea"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"types"}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"HeroBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"TextBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"SliderBlockData"}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ContentAreaData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ImageMediaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ImageMedia"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"HeroBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"HeroBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Heading"}},{"kind":"Field","name":{"kind":"Name","value":"Image"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"MainIntro"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}},{"kind":"Field","name":{"kind":"Name","value":"ContentLink"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"Width"}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"TextBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"TextBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Text"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"json"}},{"kind":"Field","name":{"kind":"Name","value":"html"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"SliderBlockData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"SliderBlock"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"SliderContent"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}},{"kind":"Field","name":{"kind":"Name","value":"displayName"}},{"kind":"Field","name":{"kind":"Name","value":"url"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"default"}}]}}]}},{"kind":"FragmentSpread","name":{"kind":"Name","value":"ImageMediaData"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"ContentAreaData"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"ContentArea"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"_metadata"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"key"}}]}}]}}]} as unknown as DocumentNode<StartPageDataFragment, unknown>;