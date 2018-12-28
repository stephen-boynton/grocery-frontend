import gql from 'graphql-tag';

export const LOG_IN = gql`
mutation Login($name: String! $password: String!){
    login(name: $name password: $password){
      jwt
    }
}
`

export const ADD_MEAL = gql`
  mutation AddMeal($name: String $description: String $ingredients: [String] $tags: [String]){
    addMeal(name: $name description: $description ingredients: $ingredients tags: $tags){
      id
      name
      description
      ingredients
      tags
    }
  }
`

export const ADD_GROCERY = gql`
  mutation AddGrocery($name: String $items: [String]){
    addGrocery(name: $name items: $items){
      id
      name
      items
    }
  }
`

export const ADD_PLAN = gql`
  mutation AddPlan($name: String $meals: [ID]){
    addPlan(name: $name meals: $meals){
      id
      name
      meals
    }
  }
`