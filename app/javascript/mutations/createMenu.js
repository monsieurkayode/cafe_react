import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const CreateMenuMutationRaw = gql`
	mutation createMenu($input: CreateMenuMutationInput!) {
    createMenu(input: $input) {
      menu {
        id
        name
        type
        price
        photoUrl
      }

      errors
    }
  }
`;

export default graphql(CreateMenuMutationRaw);