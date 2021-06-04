import React from "react";
import { Grid, Button, Header, Form, Message } from "semantic-ui-react";
import { toast } from "react-toastify";
import Hero from "../components/common/Header";
import TypesQuery from "../queries/types";
import MenusQuery from "../queries/menus";
import CreateMenuMutation from "../mutations/createMenu";

import { formFields } from "../utils/validations";

const AddMenu = ({ data, mutate, history }) => {
	let typeOptions = [];
	const initialState = {
		name: "",
		type: "",
		price: "",
		photoUrl: "",
	};

	if (!data.loading) {
		typeOptions = data.types.map((type) => ({
			text: type.split("_").join(" "),
			value: type,
			key: type,
		}));
	}

	const [errors, setErrors] = React.useState({});
	const [menuInput, updateMenuInput] = React.useState(initialState);
	const [formValid, setFormValid] = React.useState(false);
	const handleInputChange = (field, value) =>
		updateMenuInput((prevState) => ({ ...prevState, [field]: value }));

	React.useEffect(() => {
		setFormValid(
			!formFields.some(
				(formField) =>
					!menuInput[formField.field].toString().trim() && formField.required
			)
		);
	}, [menuInput]);

	const handleSubmit = () => {
		setErrors({});

		mutate({
			variables: { input: { menuInput } },
			refetchQueries: [{ query: MenusQuery }],
			awaitRefetchQueries: true,
		}).then(({ data: { createMenu } }) => {
			if (Object.keys(createMenu.errors || {}).length) {
				toast.dismiss();
				toast.error(
					Object.entries(createMenu.errors).map(
						([key, value]) => `${key[0].toUpperCase()}${key.slice(1)} ${value}`
					)[0]
				);
				setErrors(createMenu.errors);
			} else {
				history.push("/");
			}
		});
	};

	return (
		<Grid>
			<Grid.Column>
				<Hero />
				<div
					className="container"
					style={{ justifyContent: "space-between", padding: "0 12px" }}
				>
					<Header as="h3">Add Menu Item</Header>
				</div>
				<Form className="container">
					<Form.Field>
						<Grid columns={2} style={{ alignItems: "center" }}>
							<Grid.Column width={2}>
								<label>Type</label>
							</Grid.Column>
							<Grid.Column>
								<Form.Dropdown
									basic
									selection
									loading={data.loading}
									options={typeOptions}
									placeholder="Select type"
									error={!!errors.type}
									onChange={(e, { value }) => handleInputChange("type", value)}
									value={menuInput.type}
								/>
							</Grid.Column>
						</Grid>
					</Form.Field>
					<Form.Field>
						<Grid columns={2} style={{ alignItems: "center" }}>
							<Grid.Column width={2}>
								<label>Name</label>
							</Grid.Column>
							<Grid.Column>
								<Form.Input
									placeholder=""
									error={!!errors.name}
									onChange={(e, { value }) => handleInputChange("name", value)}
									value={menuInput.name}
								/>
							</Grid.Column>
						</Grid>
					</Form.Field>
					<Form.Field>
						<Grid columns={2} style={{ alignItems: "center" }}>
							<Grid.Column width={2}>
								<label>Price</label>
							</Grid.Column>
							<Grid.Column>
								<Form.Input
									placeholder=""
									error={!!errors.price}
									onChange={(e, { value }) =>
										handleInputChange("price", value.replace(/[^0-9\.]/, ""))
									}
									value={menuInput.price}
								/>
							</Grid.Column>
						</Grid>
					</Form.Field>
					<Form.Field>
						<Grid columns={2} style={{ alignItems: "center" }}>
							<Grid.Column width={2}>
								<label>Photo</label>
							</Grid.Column>
							<Grid.Column>
								<Form.Button type="file" primary content="Choose Photo" />
							</Grid.Column>
						</Grid>
					</Form.Field>
					<div style={{ marginTop: "6rem" }}>
						<Button
							onClick={handleSubmit}
							type="submit"
							primary
							disabled={!formValid}
						>
							Add Item
						</Button>
					</div>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default TypesQuery(CreateMenuMutation(AddMenu));
