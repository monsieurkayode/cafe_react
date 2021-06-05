import gql from "graphql-tag";

const MenusQueryRaw = gql`
	query fetchMenus {
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
