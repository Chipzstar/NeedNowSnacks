import React, {Component} from 'react';
import basket from '../assets/basket.svg';
import logo from '../assets/logo.png';
import Sensations from '../assets/Walker sensation.png';
import Cheese from '../assets/Walkers cheese.png';
import ReadySalted from '../assets/Walkers ready salted.png';
import PotNoodle from '../assets/Pot Noodle Original Curry.png';
import NavBar from "../components/NavBar";
import SnackLogo from '../assets/snack-logo.svg';
import '../App.css';

class Home extends Component {
	render() {
		return (
			<div className={"container-fluid"}>
				<div className="header-container pb-5">
					<div className="logo">
						<img src={logo} alt={"NeedNowSnacks"} className="img-fluid"
						     height={90} width={230}/>
					</div>
					<div className="basket">
						<img src={basket} alt="Basket" height={40} width={30}/>
						<div className={"basket-badge"}>1</div>
					</div>
				</div>
				<NavBar/>
				<div className="flex-center row w-100 py-4">
					<header className="text-center font-weight-bold h1-responsive">Snacks&nbsp;</header>
					<img src={SnackLogo} alt=""/>
				</div>
				<hr className="pb-4"/>
				<div className='flex-1 row hiw-content'>
					<div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 px-3'>
						{/* Snack Image */}
						<div className="flex-column flex-center">
							<img src={Sensations} alt="Walkers crisps" className="pb-3"/>
							{/*Add to cart button */}
							<div className="pb-3">
								<button className="add-to-cart"/>
							</div>
							{/*Snack name / description */}
							<span className="pb-2 font-weight-bold">Walkers Sensations Thai Sweet Chilli</span>
							{/* Snack price */}
							<span className="font-weight-bold text-muted">£1.50</span>
						</div>
					</div>
					<div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 px-3'>
						{/* Snack Image */}
						<div className="flex-column flex-center">
							<img src={Cheese} alt="Walkers crisps" className="pb-3"/>
							{/*Add to cart button */}
							<div className="pb-3">
								<button className="add-to-cart"/>
							</div>
							{/*Snack name / description */}
							<span className="pb-2 font-weight-bold">Walkers Sensations Thai Sweet Chilli</span>
							{/* Snack price */}
							<span className="font-weight-bold text-muted">£1.50</span>
						</div>
					</div>
					<div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 px-3'>
						{/* Snack Image */}
						<div className="flex-column flex-center">
							<img src={ReadySalted} alt="Walkers crisps" className="pb-3"/>
							{/*Add to cart button */}
							<div className="pb-3">
								<button className="add-to-cart"/>
							</div>
							{/*Snack name / description */}
							<span className="pb-2 font-weight-bold">Walkers Sensations Thai Sweet Chilli</span>
							{/* Snack price */}
							<span className="font-weight-bold text-muted">£1.50</span>
						</div>
					</div>
					<div className='col-xl-3 col-lg-3 col-md-3 col-sm-12 px-3'>
						{/* Snack Image */}
						<div className="flex-column flex-center">
							<img src={PotNoodle} alt="Walkers crisps" className="pb-3"/>
							{/*Add to cart button */}
							<div className="pb-3">
								<button className="add-to-cart"/>
							</div>
							{/*Snack name / description */}
							<span className="pb-2 font-weight-bold">Walkers Sensations Thai Sweet Chilli</span>
							{/* Snack price */}
							<span className="font-weight-bold text-muted">£1.50</span>
						</div>
					</div>
				</div>
				<div>

				</div>
			</div>
		);
	}
}

export default Home;