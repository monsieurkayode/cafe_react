import gql from "graphql-tag";
import { graphql } from 'react-apollo';

export const UpdateMenuMutationRaw = gql`
	mutation updateMenu($input: UpdateMenuMutationInput!) {
    updateMenu(input: $input) {
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

export default graphql(UpdateMenuMutationRaw);
