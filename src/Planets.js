import React from 'react';
import styled from 'styled-components';

const PlanetCard = styled.div`
	border: 1px solid green;
	width: 100px;
	height: 200px;
	float: right;
`;

const Planets = props =>
	props.planets.map(val => {
		return <PlanetCard>{val.name}</PlanetCard>;
	});

export default Planets;


//DATA NEEDED
//Name
//Terrain
// Population
// Climate
// Residents
// A button to "Favorite" the person