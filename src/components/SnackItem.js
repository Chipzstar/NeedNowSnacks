import React from 'react';
import PropTypes from 'prop-types';
import CurrencyFormat from 'react-currency-format';
import {addSnack} from "../store/actions/snackActions";
import {useDispatch, useSelector} from "react-redux";
import '../App.css';

const SnackItem = ({id, name, image, price, handleAlert}) => {
	const dispatch = useDispatch();
	const snacks = useSelector(state => state.snacks);

	return (
		<div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 px-3'>
			{/* Snack Image */}
			<div className="flex-center flex-column">
				<div className="d-flex flex-center flex-column flex-fill">
					<img src={image} alt={name} className="pb-3 img-fluid card-img"/>
				</div>
				<div className="flex-column flex-center d-flex flex-fill">
					{/*Add to cart button */}
					<div className="pb-3">
						<button className="add-to-cart" onClick={() => {
							if (snacks.some(item => item.id === id)) {
								handleAlert();
							} else {
								dispatch(addSnack({id, name, price}));
								console.log("new snack added:", name);
							}
						}}/>
					</div>
					{/*Snack name / description */}
					<span className="pb-2 font-weight-bold">{name}</span>
					{/* Snack price */}
					<span className="font-weight-bold text-muted">
					<CurrencyFormat
						value={price}
						displayType={'text'}
						thousandSeparator={true}
						prefix={'£'}
						decimalScale={2}
						fixedDecimalScale
					/>
				</span>
				</div>
			</div>
		</div>
	);
}

SnackItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	handleAlert: PropTypes.func.isRequired
};

export default SnackItem;
