import gql from 'graphql-tag';

export const GET_MEALS = gql`
query {
  meals {
    id
    name
    description
    ingredients
    tags
  }
}
`

export const GET_FAVORITE_AND_LATEST = gql`
query Meal($key: String $value: String){
  meal(key: $key value: $value) {
    id
    name
    ingredients
    description
    ingredients
    tags
  }
}
`