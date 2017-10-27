import React from 'react';

class AddFishForm extends React.Component {
	render(){
		return(
			<form className="fish-edit">
				<input type="text" placeholder="name"/>
				<input type="text" placeholder="price"/>
				<input type="text" placeholder="status"/>
				<input type="text" placeholder="desc"/>
				<input type="text" placeholder="image"/>

			</form>
			)
		
	}

}

export default AddFishForm;