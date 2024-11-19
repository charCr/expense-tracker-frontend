/* eslint-disable */
import { DocumentTypeDecoration } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
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
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: { input: any; output: any; }
};

export type BudgetType = {
  __typename?: 'BudgetType';
  amount: Scalars['Float']['output'];
  category: CategoryType;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  id: Scalars['Int']['output'];
  period: Scalars['String']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  userId: Scalars['Int']['output'];
};

export type CategoryType = {
  __typename?: 'CategoryType';
  description?: Maybe<Scalars['String']['output']>;
  expenses?: Maybe<Array<ExpenseType>>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ExpenseType = {
  __typename?: 'ExpenseType';
  amount: Scalars['Float']['output'];
  category: CategoryType;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  date: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['Int']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  userId: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  budgets: Array<BudgetType>;
  categories: Array<CategoryType>;
  expenses: Array<ExpenseType>;
  recurringExpenses: Array<RecurringExpenseType>;
  tags: Array<TagType>;
  users: Array<UserType>;
};

export type RecurringExpenseType = {
  __typename?: 'RecurringExpenseType';
  amount: Scalars['Float']['output'];
  category: CategoryType;
  categoryId: Scalars['Int']['output'];
  createdAt: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  frequency: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  nextDueDate: Scalars['DateTime']['output'];
  updatedAt: Scalars['DateTime']['output'];
  user: UserType;
  userId: Scalars['Int']['output'];
};

export type TagType = {
  __typename?: 'TagType';
  expenses: Array<ExpenseType>;
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type UserType = {
  __typename?: 'UserType';
  email: Scalars['String']['output'];
  id: Scalars['Int']['output'];
};

export type GetExpensesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetExpensesQuery = { __typename?: 'Query', expenses: Array<{ __typename?: 'ExpenseType', id: number, amount: number, description?: string | null, date: any, category: { __typename?: 'CategoryType', id: number, name: string } }> };

export class TypedDocumentString<TResult, TVariables>
  extends String
  implements DocumentTypeDecoration<TResult, TVariables>
{
  __apiType?: DocumentTypeDecoration<TResult, TVariables>['__apiType'];

  constructor(private value: string, public __meta__?: Record<string, any> | undefined) {
    super(value);
  }

  toString(): string & DocumentTypeDecoration<TResult, TVariables> {
    return this.value;
  }
}

export const GetExpensesDocument = new TypedDocumentString(`
    query GetExpenses {
  expenses {
    id
    amount
    description
    date
    category {
      id
      name
    }
  }
}
    `) as unknown as TypedDocumentString<GetExpensesQuery, GetExpensesQueryVariables>;