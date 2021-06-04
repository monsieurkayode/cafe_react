import React from "react";
import { graphql } from "react-apollo";
import MenusQueryRaw from "../queries/menus";

import MenuItem from "./MenuItem";

const Menus = ({ data, loading }) => {
	if (loading) {
		return "Loading....";
	}

	return (
		<div style={{ marginTop: "4rem" }} className="container">
			{data.menus &&
				data.menus.map((menu) => <MenuItem key={menu.id} {...menu} />)}
		</div>
	);
};

const Query = graphql(MenusQueryRaw);

export default Query(Menus);
