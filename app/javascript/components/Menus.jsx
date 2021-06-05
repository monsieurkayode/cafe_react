import React from "react";
import { graphql } from "react-apollo";
import MenusQueryRaw from "../queries/menus";
import DeleteMenuMutation from '../mutations/deleteMenu';

import MenuItem from "./MenuItem";

const Menus = ({ data, mutate }) => {
	if (data.loading) {
		return null;
	}

	return (
		<div style={{ marginTop: "4rem" }} className="container">
			{data.menus.map((menu) => (
				<MenuItem key={menu.id} {...menu} deleteMenu={mutate} />
			))}
		</div>
	);
};

const Query = graphql(MenusQueryRaw);

export default Query(DeleteMenuMutation(Menus));
