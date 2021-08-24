import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import rigoImageUrl from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Jumbotron, Button, Link, Toast, ToastBody, ToastHeader } from "reactstrap";

export const Home = () => {
	const { store, actions } = useContext(Context);

	const en_lg = [
		"My name is Fabián Chacón 🇨🇷",
		"I am a Full Stack developer in Web environments and a student of Electronic Engineering.",
		"I want to show you a bit of my work!",
		"I consider myself a problem solver, and I see teamwork as a pillar for development inside organizations.",
		"My networks and contact",
		"Some projects done",
		"Weighted Average Calculator",
		"Tool to facilitate the calculation of average grades for university students.",
		"Visit the site",
		"Movie Repository",
		"Film appreciation course tool, try to enter the code 1001.",
		"Simple Counter",
		"A timer with three buttons for manipulation.",
		"Todo List",
		"An interface to create and delete pending tasks using text inputs."
	];

	const sp_lg = [
		"Mi nombre es Fabián Chacón 🇨🇷",
		"Soy desarrollador Full Stack en entornos Web y estudiante de Ingeniería en Electrónica.",
		"¡Quiero mostrarte un poco de mi trabajo!",
		"Me considero una persona solucionadora de problemas, y veo el trabajo en equipo como un pilar para desarrollo para las organizaciones.",
		"Mis redes y contacto:",
		"Algunos trabajos realizados:",
		"Calculadora de promedio ponderado",
		"Herramienta para facilitar el cálculo de promedio para estudiantes universitarios.",
		"Visitar el sitio",
		"Repositorio de películas",
		"Herramienta curso de apreciación de cine, intenta ingresar el código 1001.",
		"Contador simple",
		"Un temporizador con tres botones para su manipulación.",
		"Lista de tareas",
		"Una interfaz para crear y eliminar tareas pendientes mediante entradas de texto."
	];

	const [language, setLanguage] = useState(en_lg);

	return (
		<div className="mt-2 container-fluid">
			<div className="container d-flex justify-content-center pt-3 text-center">
				<div className="row d-flex justify-content-center">
					<div className="col-12">
						<div className="text-center p-5 rounded rounded-5" style={{ "background-color": "#e9ecef" }}>
							<p />
							<h2 className="display-4">{language[0]}</h2>
							<p className="lead">{language[1]}</p>
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
							<div className="row d-flex justify-content-between">
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
						</div>
					</div>
				</div>
			</div>
			<div className="text-center">
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
			<div className="row mt-3 d-flex justify-content-center text-center">
				<span className="text-center h3 text-info">Algunos trabajos realizados:</span>
			</div>
			<div className="row mt-2 d-flex justify-content-center">
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>Calculadora de promedio ponderado</ToastHeader>
						<ToastBody>
							Herramienta para facilitar el cálculo de promedio para estudiantes universitarios.
						</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://grade-calculator-nine.vercel.app/"
							target="__blank">
							Visitar el sitio
						</Button>
					</Toast>
				</div>
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>Repositorio de películas</ToastHeader>
						<ToastBody>
							Herramienta curso de apreciación de cine, intenta ingresar el código 1001.
						</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://course-cinema.vercel.app/"
							target="__blank">
							Visitar el sitio
						</Button>
					</Toast>
				</div>
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>Contador simple</ToastHeader>
						<ToastBody>Un temporizador con tres botones para su manipulación.</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://simple-counter-three.vercel.app/"
							target="__blank">
							Visitar el sitio
						</Button>
					</Toast>
				</div>
				<div className="m-1">
					<Toast className="text-center">
						<ToastHeader>Lista de tareas</ToastHeader>
						<ToastBody>
							Una interfaz para crear y eliminar tareas pendientes mediante entradas de texto.
						</ToastBody>
						<Button
							size="sm"
							className="m-1"
							color="success"
							href="https://exercise-todo-list.vercel.app/"
							target="__blank">
							Visitar el sitio
						</Button>
					</Toast>
				</div>
			</div>
		</div>
	);
};
