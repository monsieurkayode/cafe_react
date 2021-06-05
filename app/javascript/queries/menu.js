import gql from "graphql-tag";
import { graphql } from 'react-apollo';

export const MenuQueryRaw = gql`
  query fetchMenu($id: ID!) {
    menu(id: $id) {
      id
      name
      type
      price
      photoUrl
    }
  }
`

export default graphql(MenuQueryRaw, {
  skip: ({ match: { params: { id }}}) => !id,
  options: ({ match: { params: { id } }}) => ({
    variables: { id }
  })
});
