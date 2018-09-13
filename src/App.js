import React, { Component } from 'react';
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

// fetchPeople = () => {
// 	const peoplePromise =
// }

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
			//fetch the other endpoints too
			//promise.all()
		const people = 'https://swapi.co/api/people/';
		fetch(people)
			.then(response => response.json())
			.then(response => console.log('people', response));
		const planets = 'https://swapi.co/api/planets/'
			fetch(planets)
				.then(response => response.json())
				.then(response => console.log('planets', response))
		const vehicles = 'https://swapi.co/api/vehicles/'
			fetch(vehicles)
				.then(response => response.json())
				.then(response => console.log('vehicles', response))
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
