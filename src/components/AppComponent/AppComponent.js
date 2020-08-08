import React, { useEffect, useState } from 'react';
import trafficMeister from './../../data/index';
import { SelectedValues } from '../SelectedValues/SelectedValues';
import { SelectVehicle } from '../SelectOptions/SelectVehicle/SelectVehicle';
import { SelectBrand } from '../SelectOptions/SelectBrand/SelectBrand';
import { SelectColor } from '../SelectOptions/SelectColor/SelectColor';
import { ResetButton } from '../ResetButton/ResetButton';
import { SelectContainerComponent, SelectContainer, SelectBlock } from '../../styles/SelectOptions';

// useing React Hook is suitable since this app is not really big enough to use Redux. 

export const AppComponent = () => {
// default data
	const [ allData, setData ] = useState([]);
	// store selected value 
	const [ vehicle, setVehicle ] = useState('');
	const [ brand, setBrand ] = useState('');
	const [ color, setColor ] = useState('');
	const [ buttonEnable, setButtonEnable ] = useState(false);

	// enable reset button 
	const array = [ vehicle, brand, color ];
	const disableButton = (state) => state.length > 0; 
	let enableResetButton = array.some(disableButton);

	useEffect(() => {
		// fetch data from data 
		trafficMeister.fetchData((err, data) =>{
			if (err) {
				console.log(err);
				return;
			}
            
			setData(data);
		});
	}, []);

	// enable reset button 
	useEffect(() => {
		if(enableResetButton) {
			setButtonEnable(enableResetButton);
		} 
	}, [enableResetButton]);

	const resetStates = () => {
		setVehicle('');
		setBrand('');
		setColor('');
		setButtonEnable(false);
	};

	// check if option is selected in one of the three select options. 
	const filteredData = allData
		.filter(obj => (brand !== '' ? obj.brand === brand : true))
		.filter(obj => (vehicle !== '' ? obj.type === vehicle : true))
		.filter(obj => (color !== '' ? obj.colors.some(c => c === color) : true));

	const uniqueTypes = filteredData.map(obj => obj.type).reduce((acc, current) => {
		// acc will only output if no filter has been called
		// finds the first element of the array that meets the current parameter and then push it into the array 
		if (acc.findIndex(t => t === current) < 0) {
			acc.push(current);
		}

		return acc;
	}, []);

	// remove duplicates and apply filter based on chosen option(s)
	const uniqueColors = filteredData.map(obj => obj.colors).reduce((acc, current) => {
		current.forEach(c => {
			if (!acc.some(e => e === c)) {
				acc.push(c);
			}
		});

		return acc;
	}, []);

	return (
		<SelectContainerComponent>
			{/* Select vehicle */}
			<SelectContainer>
				<SelectBlock>
					<SelectVehicle
						vehicle={vehicle}
						uniqueTypes={uniqueTypes}
						onChangeEvent={ e => setVehicle(e.target.value) }
					/>
					{/* Select brand */}
					<SelectBrand 
						brand={ brand }
						filteredData={ filteredData }
						onChangeEvent={ e => setBrand(e.target.value) }
					/>

					{/* Select color */}
					<SelectColor 
						color={color} 
						uniqueColors={ uniqueColors } 
						onChangeEvent={ e => setColor(e.target.value) }
					/>
				</SelectBlock>

				{/* to reset all selected options */}
				<ResetButton
					onClickEvent={() => resetStates()}
					enableButton={buttonEnable}
				/>
                
			</SelectContainer>
			<SelectContainer>
				{/* output all selected values */}
				<SelectedValues
					curSelectVehicle={vehicle} 
					curSelectBrand={brand} 
					curSelectColor={color}
				/>
			</SelectContainer>
        
		</SelectContainerComponent>
	);
};