import React, {useCallback, useState} from 'react';
import {useFirestoreConnect} from "react-redux-firebase";
import {useSelector} from "react-redux";
import logo from '../assets/logo.png';
import NavBar from "../components/NavBar";
import SnackLogo from '../assets/snack-logo.svg';
import SnackItem from "../components/SnackItem";
import Basket from "../components/Basket";
import {MDBAlert, MDBModal, MDBModalBody} from "mdbreact";
import '../App.css';

const Home = props => {
	useFirestoreConnect(['products']);
	const snacks = useSelector(state => state.firestore.ordered["products"]);
	const [showAlert, setShowAlert] = useState(false);
	const toggle = useCallback(() => setShowAlert(true), []);

	return (
		<div className="container-fluid">
			<Basket/>
			<div className="header-container pb-5">
				<div className="logo">
					<img src={logo} alt={"NeedNowSnacks"} className="img-fluid" height={90} width={230}/>
				</div>
			</div>
			<NavBar/>
			<div className="flex-center row w-100 py-4">
				<header className="text-center font-weight-bold h1-responsive">Snacks&nbsp;</header>
				<img src={SnackLogo} alt=""/>
			</div>
			<hr className="pb-4"/>
			<MDBModal isOpen={showAlert} toggle={toggle} centered size="sm" modalStyle="warning" overflowScroll>
				<MDBModalBody className="flex-column">
					<MDBAlert color="warning" onClose={() => setShowAlert(false)} dismiss className="h-100 w-100">
						<strong>Item already in basket!</strong><br/>To add more, head to the checkout page.
					</MDBAlert>
				</MDBModalBody>
			</MDBModal>
			<div className='row px-4'>
				{snacks && snacks.map((item, index) => (
					<SnackItem
						key={index}
						id={item.id}
						image={item.img}
						price={item.price}
						name={item.name}
						handleAlert={toggle}
					/>
				))}
			</div>
		</div>
	);
}

export default Home;