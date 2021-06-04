import gql from "graphql-tag";
import { graphql } from "react-apollo";

const MenusQueryRaw = gql`
	{
		menus {
			id
			name
			price
			type
			photoUrl
		}
	}
`;

export default MenusQueryRaw;
