import React, { useContext } from "react";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import Card from "../component/card"

export const Home = () => {

	const { store, actions } = useContext(Context)
	return (
		<div className="container">
			<div className="row">
				<div className="col-md-12">
					<h2>Contact List</h2>
					<h6>Agenda asignada: {store.agenda}</h6>
				</div>
				<div className="col-md-8">
					{
						store.contacts.length > 0 &&
						store.contacts.map((contact) => {
							return (
								<Card {...contact} key={contact.id} />
							)
						})
					}
				</div>
			</div>
		</div>
	)
};
