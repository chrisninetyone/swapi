`import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import People from './People';
import Planets from './Planets';
import Vehicles from './Vehicles';

class App extends Component {
	state = {
		openingCrawl: '',
		title: '',
		date: '',
		people: [],
		planets: [],
		vehicles: [],
		homeworld: []
	};

	fetchPeople = (homeworld) => {
		const people = fetch('https://swapi.co/api/people/');
		const people = people.map(val => {
			return fetch(homeworld)
				.then(response => response.json())
				.then(response => console.log(response));
		});
		// fetch(people)
		// 	.then(response => response.json())
		// 	.then(response =>
		// 		response.map(val => {
		// 			return fetch(val.results);
		// 		})
		// 	)
		// 	.catch(error => console.log(error));
		return Promise.all(people);
	};

	fetchPlanets = () => {
		const planets = 'https://swapi.co/api/planets/';
		fetch(planets)
			.then(response => response.json())
			.then(response => {
				return response
			})
			.catch(error => console.log(error));
	};
	// fetchVehicles = () => {
	// 	const vehicles = 'https://swapi.co/api/vehicles/';
	// 	fetch(vehicles)
	// 		.then(response => response.json())
	// 		.then(response => console.log('vehicles', response))
	// 		.catch(error => console.log(error));
	// };

	componentDidMount() {
		const randomNum = Math.round(Math.random() * 6) + 1;
		const URL = `https://swapi.co/api/films/${randomNum}/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({
					openingCrawl: response.opening_crawl,
					title: response.title,
					date: response.release_date
				});
			});

		const planets =	this.fetchPlanets();
		const people = this.fetchPeople()


		this.fetchPeople(planets);
		// this.this.fetchVehicles();
	}



	render() {
		const PeopleButton = styled.button`
			color: pink;
		`;
		const PlanetsButton = styled.button`
			color: teal;
		`;
		const VehiclesButton = styled.button`
			color: purple;
		`;
		const Sidebar = styled.div`
			position: absolute;
			float: left;
			left: 0;
			width: 200px;
			border: 2px solid black;
		`;
		const SidebarContainer = styled.div`
			display: flex;
		`;

		return (
			<div className="App">
				<div>
					<h1>SWAPI-Box</h1>
					<button>View Favorites</button>
				</div>
				<div>
					<PeopleButton>People</PeopleButton>
					<PlanetsButton>Planets</PlanetsButton>
					<VehiclesButton>Vehicles</VehiclesButton>
					<People people={this.state.people} homeworld={this.state.homeworld} />
					<Planets planets={this.state.planets} />
					<Vehicles vehicles={this.state.vehicles} />
				</div>
				<SidebarContainer>
					<Sidebar>
						<div>
							{this.state.openingCrawl ? this.state.openingCrawl : <div />}
						</div>
						<div>{this.state.title ? this.state.title : <div />}</div>
						<div>{this.state.date ? this.state.date : <div />}</div>
					</Sidebar>
				</SidebarContainer>
			</div>
		);
	}
}

export default App;
