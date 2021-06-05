import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const DeleteMenuMutationRaw = gql`
	mutation deleteMenu($input: DeleteMenuMutationInput!) {
    deleteMenu(input: $input) {
      errors
    }
  }
`;

export default graphql(DeleteMenuMutationRaw);
