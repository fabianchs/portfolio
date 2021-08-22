import React, { useContext } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Link } from "reactstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="mt-2 text-center">
			<div className="container d-flex justify-content-center pt-3">
				<div className="row d-flex justify-content-center">
					<div className="col-12 m-1">
						<h1>
							<i className="fas fa-wrench text-secondary" />
							¡Vaya! Mi portafolio aún está bajo construcción.
						</h1>
					</div>
					<div className="col-12">
						<Jumbotron>
							<p />
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
									Me considero una persona solucionadora de problemas, y veo el trabajo en equipo como
									un pilar para desarrollo para las organizaciones.
								</h5>
							</p>
							<p className="mt-3">
								<h5>Mis redes y contacto:</h5>
							</p>
							<div className="container-fluid d-flex justify-content-between">
								<span className="m-1">
									<a
										href="https://github.com/fabianchs"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-github fa-2x" />
										<span>/fabianchs</span>
									</a>
								</span>
								<span className="m-1">
									<a
										href="https://github.com/fabianchs"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-github fa-2x" />
										<span>/fabianchs</span>
									</a>
								</span>
								<span className="m-1">
									<a
										href="https://twitter.com/fabiandchs"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-twitter fa-2x" />
										<span>/fabiandchs</span>
									</a>
								</span>
								<span className="m-1">
									<a
										href="https://www.linkedin.com/in/fabiandchs/"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-linkedin fa-2x" />
										<span>/fabiandchs</span>
									</a>
								</span>

								<span className="m-1">
									<a
										href="https://www.instagram.com/fabiandchs/"
										target="__blank"
										className="d-flex align-items-center">
										<i className="fab fa-instagram fa-2x" />
										<span>/fabiandchs</span>
									</a>
								</span>
							</div>
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
				<i className="fas fa-server fa-5x m-2" />
			</div>
		</div>
	);
};
