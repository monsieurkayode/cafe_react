import React from "react";
import styled from "styled-components";
import { withRouter } from 'react-router-dom';
import { Button } from "semantic-ui-react";
import MenusQuery from '../queries/menus';

const Card = styled.div`
	min-width: 360px;
	max-width: 410px;
	overflow: hidden;
	cursor: pointer;
	flex: 1 0 30%;
	margin: 0 15px 30px;

	.header {
		height: 230px;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}

	.content {
		background: #fff;
		padding: 1.2rem 2rem;

		.left,
		.right {
			display: inline-block;
		}

		.type {
			margin-bottom: 6px;
			font-size: 0.9rem;
			font-weight: bold;
			color: #545151;
		}

		.name {
			font-weight: bolder;
			font-size: 1.1rem;
			letter-spacing: 0.5px;
		}

		.right {
			float: right;
			line-height: 2.4;
			color: gray;

			&.price {
				font-size: 1.1rem;
			}
		}
	}
`;

const MenuItem = ({ id, name, price, type, photoUrl, deleteMenu, history }) => {
	const handleDelete = (id) => {
		deleteMenu({ 
      variables: { input: { id } },
      refetchQueries: [{ query: MenusQuery }],
			awaitRefetchQueries: true,
    });
	};

	return (
		<Card onClick={() => history.push(`/${id}`)}>
			<div
				className="header"
				style={{
					backgroundImage: `url(${
						photoUrl || "https://via.placeholder.com/400"
					})`,
				}}
			>
				<Button
					icon="trash"
					color="youtube"
					size="tiny"
					floated="right"
					onClick={(e) => {handleDelete(id); e.stopPropagation()}}
				/>
			</div>
			<div className="content">
				<div className="left">
					<div className="uppercase type">{type.split("_").join(" ")}</div>
					<div className="capitalize name">{name}</div>
				</div>
				<div className="right price">&#36;&nbsp;{price}</div>
			</div>
		</Card>
	);
};

export default withRouter(MenuItem);
