import React from 'react';
import styled from 'styled-components';

const VehicleCard = styled.div`
	border: 1px solid purple;
	width: 100px;
	height: 200px;
	float: right;
`;

const Vehicles = props =>
	props.vehicles.map(val => {
		return <VehicleCard>{val.name}</VehicleCard>;
	});

export default Vehicles;
