import React, { Component } from 'react';
import './App.css';
import styled from 'styled-components';
import People from './People';
import Planets from './Planets';
import Vehicles from './Vehicles';
import axios from 'axios';

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
	handlePeople = () => {
		const URL = `https://swapi.co/api/people/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({ people: this.state.people.concat(response.results) });
			})
			.then(response => {
				this.state.people.forEach(val => {
					console.log(val.homeworld);
					axios.get(val.homeworld).then(response => {
						console.log('homeworld response', response.data.name);
						this.setState({
							homeworld: this.state.homeworld.concat(response.data.name)
						});
					});
				});
			});
	};

	handlePlanets = () => {
		const URL = `https://swapi.co/api/planets/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({ planets: this.state.planets.concat(response.results) });
				console.log(response);
			});
	};

	handleVehicles = () => {
		const URL = `https://swapi.co/api/vehicles/`;
		fetch(URL)
			.then(response => response.json())
			.then(response => {
				this.setState({
					vehicles: this.state.vehicles.concat(response.results)
				});
				console.log(response);
			});
	};

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
					<PeopleButton onClick={this.handlePeople}>People</PeopleButton>
					<PlanetsButton onClick={this.handlePlanets}>Planets</PlanetsButton>
					<VehiclesButton onClick={this.handleVehicles}>
						Vehicles
					</VehiclesButton>
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
