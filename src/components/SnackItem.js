import React from 'react';
import PropTypes from 'prop-types';

const SnackItem = (props) => {
	console.log(props);
	return (
		<div>

		</div>
	);
}


SnackItem.propTypes = {
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
};

export default SnackItem;
