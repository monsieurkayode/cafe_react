import React from "react";
import { Grid, Button, Header } from "semantic-ui-react";
import Hero from "../components/common/Header";
import Menus from "../components/Menus";

const Cafe = () => {
	return (
		<Grid>
			<Grid.Column>
				<Hero />
				<div
					className="container"
					style={{ justifyContent: "space-between", padding: "0 12px" }}
				>
					<Header as="h3">Menu</Header>
					<Button primary>Add menu item</Button>
				</div>
				<Menus />
			</Grid.Column>
		</Grid>
	);
};

export default Cafe;
