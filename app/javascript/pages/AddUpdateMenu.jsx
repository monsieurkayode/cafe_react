import React from "react";
import { Grid, Button, Header, Form } from "semantic-ui-react";
import { toast } from "react-toastify";
import { useQuery, useMutation } from "react-apollo";
import Hero from "../components/common/Header";
import TypesQuery from "../queries/types";
import MenusQuery from "../queries/menus";
import { MenuQueryRaw } from "../queries/menu";
import { CreateMenuMutationRaw } from "../mutations/createMenu";
import { UpdateMenuMutationRaw } from "../mutations/updateMenu";

import { formFields } from "../utils/validations";

const AddUpdateMenu = ({ history, data, match }) => {
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
	const [prefetched, setPrefetched] = React.useState(false);
	const [formValid, setFormValid] = React.useState(false);
	const fetchMenuResponse = useQuery(MenuQueryRaw, {
		variables: { id: match.params.id },
		skip: !match.params.id,
	});
	const [updateMenu] = useMutation(UpdateMenuMutationRaw);
	const [createMenu] = useMutation(CreateMenuMutationRaw);
	const handleInputChange = (field, value) =>
		updateMenuInput((prevState) => ({ ...prevState, [field]: value }));

	const handleSubmit = () => {
		setErrors({});

		const mutation = menuInput.id
			? { operation: updateMenu, dataKey: "updateMenu" }
			: { operation: createMenu, dataKey: "createMenu" };

		const { __typename, ...rest } = menuInput;

		mutation
			.operation({
				variables: { input: { menuInput: rest } },
				refetchQueries: [{ query: MenusQuery }],
				awaitRefetchQueries: true,
			})
			.then(({ data }) => {
				if (Object.keys(data[mutation.dataKey].errors || {}).length) {
					toast.dismiss();
					toast.error(
						Object.entries(data[mutation.dataKey].errors).map(
							([key, value]) =>
								`${key[0].toUpperCase()}${key.slice(1)} ${value}`
						)[0]
					);
					setErrors(data[mutation.dataKey].errors);
				} else {
					history.push("/");
				}
			});
	};

	React.useEffect(() => {
		if (!prefetched && fetchMenuResponse.data && fetchMenuResponse.data.menu) {
			setPrefetched(true);
			updateMenuInput(fetchMenuResponse.data.menu);
		}

		setFormValid(
			!formFields.some(
				(formField) =>
					!menuInput[formField.field].toString().trim() && formField.required
			)
		);
	}, [menuInput, fetchMenuResponse.loading]);

	return (
		<Grid>
			<Grid.Column>
				<Hero />
				<div
					className="container"
					style={{ justifyContent: "space-between", padding: "0 12px" }}
				>
					<Header as="h3">
						{match.params.id ? "Update" : "Add"} Menu Item
					</Header>
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
							{match.params.id ? "Update" : "Add"} Item
						</Button>
					</div>
				</Form>
			</Grid.Column>
		</Grid>
	);
};

export default TypesQuery(AddUpdateMenu);
