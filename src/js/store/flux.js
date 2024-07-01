const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			url: 'https://playground.4geeks.com',
			agenda: 'nazariego',
			newContact: {
				name: '',
				phone: '',
				email: '',
				address: '',
			},
			contacts: [],
		},
		actions: {

			getAgenda: () => {
				const { url, agenda } = getStore()
				const { createAgenda } = getActions()

				fetch(`${url}/contact/agendas/${agenda}`)
					.then((response) => {
						console.log(response)
						if (response.status === 404) createAgenda()
						else return response.json()
					})
					.then((responseJson) => {
						console.log(responseJson)
						setStore({ contacts: responseJson.contacts })
					})

			},

			createAgenda: () => {
				const { url, agenda } = getStore()
				const { getAgenda } = getActions()
				fetch(`${url}/contact/agendas/${agenda}`, {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' }
				})
					.then((response) => {
						console.log(response)
						if (response.status === 201) getAgenda()
						else return response.json()
					})
					.then((responseJson) => {
						console.log(responseJson)
					})
			},

			createContact: (datos) => {
				const { url, agenda } = getStore()
				//https://playground.4geeks.com/contact/agendas/nazariego/contacts
				console.log(datos)
				fetch(`${url}/contact/agendas/${agenda}/contacts`, {
					method: 'POST',
					body: JSON.stringify(datos),
					headers: { 'Content-Type': 'application/json' }
				})
			}
		}
	};
};

export default getState;
