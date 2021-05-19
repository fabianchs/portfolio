import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Link } from "reactstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="text-center mt-5">
			<div className="container d-flex justify-content-center pt-3">
				<div className="row d-flex justify-content-center">
					<div className="col-12">
						<Jumbotron>
							<h1 className="display-3">¡Hola! Mi nombre es Fabián Chacón 🇨🇷</h1>
							<p className="lead">
								Soy desarrollador Full Stack en entornos Web y estudiante de Ingeniería en Electrónica.
							</p>
							<p className="lead">
								<strong>¡Quiero mostrarte un poco de mi trabajo!</strong>
							</p>
							<hr className="my-2" />
							<p className="mt-3">
								<h5>
									Me considero una persona solucionadora de problemas, y considero el trabajo en
									equipo como un pilar para desarrollo para las organizaciones.
								</h5>
							</p>
							<Button color="success" className="mt-3 text-light" />
						</Jumbotron>
					</div>
				</div>
			</div>
			<div>
				<i className="fab fa-5x fa-html5 m-2" />
				<i className="fab fa-css3-alt fa-5x m-2" />
				<i className="fab fa-5x fa-js-square m-2" />
				<i className="fab  fa-bootstrap fa-5x m-2 " />
				<i className="fab fa-git fa-5x m-2" />
				<i className="fab fa-5x fa-react m-2" />
				<i className="fab  fa-python fa-5x m-2" />
				<i className="fab fa-github fa-5x m-2" />
			</div>
		</div>
	);
};
