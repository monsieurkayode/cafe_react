import gql from "graphql-tag";
import { graphql } from 'react-apollo';

const TypesQueryRaw = gql`
	query fetchTypes {
		types
	}
`;

export default graphql(TypesQueryRaw);
