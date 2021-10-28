/**
 * Desarrollado por: Cristian Alberto Hernandez.
 * Fecha:19/10/2021 - 08:00am
 * Version:1.0.0
 */

let juego_actual = 0;

let sliders = ['slide-1', 'slide-2']
let audios_sond = ['Audio1', '', 'Audio2']

let presentacion_slide = 0
let audio;
let audioOvers;
let audiosBotonesOver;
let path_sound = './public/sounds/'
let contadorEjercicios = 0

let elementosInicialesActividad = []



/*  Varibales arrastrar y solar*/
let figura_dragId;
let imag_drag_element;
let elementosPermitidosActividadActual;
let actividadActual;
let contadorPilasC1 = 0;
let contadorCitasC1 = 0;
let tituloCircuito1 = '¡Construcción de una linterna!'
//Configuracion actividad 1
let nombreElementos = [
	'Cinta aislante',
	'Interruptor Palanca',
	'Pila 9.V',
	'Pilas doble A',
	'Porta Pilas',
	'Led',
	'Papel aluminio',
	'Porta lamparas',
	'Pila',
	'Pinzas cocodrilo',
	'Cables Conectores',
	'Martillo',
	'Bisturi',
	'Clips',
	'Bombillas linterna',
	'Cinta',
	'Potenciometro',
	'Potencimetro nano',
	'Condesador',
	'Tijeras',
	'Pinzas',
	'Cable conector',
	'Caja plastica',
	'Alicate',
	'Llave',
	'Destornillador',
	'Resistencia'
]

let pasosCorrectosActividad = 0
let instruccionesActividade1 = [
	`<div class="animate__animated animate__fadeIn">
	<h4>!Vamos a construir una linterna!</h4>
                            <p>Desplazamos del centro de recursos los siguientes elementos:<br>
							<ul style="text-align: left;">
								<li>
								<b>Papel aluminio</b>
								</li>
								<li>
								<b>Dos pilas doble A</b>
								</li>
								<li>
								<b>Un bombillo led </b> 
								</li>
								<li>
								<b>Cinta aislante</b>
								</li>
							</ul>
							<div style="width: 50%;margin:0px auto;"><div onclick="iniciar(1)" id="comenzar" class="button" >Comenzar&nbsp;▶</div></div>
	</div>`
]

let pasosActividad1 = [
	`<div class="animate__animated animate__fadeIn">
	<h4>Pasos linterna</h4>
	 <ol type="a">
                                <li><span>Cortamos dos tiras de papel aluminio de 15 cm de largo por 5 cm de
                                        ancho.</span></li>
                                <li><span>Enrrollamos las tiras de papel aluminio de tal manera que nos queden tiras de
                                        15 cm de largo.</span></li>
                            </ol>
		</div>`,
	`<div class="animate__animated animate__fadeIn">
		<h4>Pasos linterna</h4>
		 <ol start="2">
									<li><span>Unimos las pilas con la cinta aislante teniendo en cuenta que los polos contrarios deben quedar enfrentados.</span></li>
								</ol>
			</div>`,
	`<div>
			<h4>Pasos linterna</h4>
			 <ol start="3">
										<li><span>Unimos cada una de las tiras a cada uno de los extremos del led o bombillo.</span></li>
									</ol>
				</div>`,
	`<div>
				<h4>Pasos linterna</h4>
				 <ol start="4">
											<li><span>Tomamos el extremo libre de una tira y lo pegamos a uno de los polos de la pila.</span></li>
										</ol>
					</div>`,
	`
				<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		<p>!Muy bien¡</p>
		<p>Ahora inténtalo, une el extremo libre de la tira a la pila.</p>
		</div>
				`
]




let areaCollision1 = `<div class="area-collision" ondrop="drop(event)" ondragover="allowDrop(event)" >
<div>
			<div class="contenedor-elementos-area-colision">
					<div class="luz-led">

					</div>
					<div id="aluminio" class="aluminio">
					
										</div>
						
					</div>
					<div class="pilas" id="pilas">
					<div style="
					display: flex;
					width: 75%;
					height: 8vh;
					justify-content: center;
					align-items: end;
					
				">
											<div style="
					
					width: 86%;
					height: inherit;
				">
											</div>
											<div id="conexionPilac1" style="
				width: 13%;
				height: 8vh;
				cursor: pointer;
			
				">
											</div>
					</div>
					</div>
					<div class="pilas-cinta" >

					</div>
			</div>
			<div>

			</div>

	</div>
</div>`



let elementosPermitidosActividad1 = [
	'elemento-6',//papel aluminio
	'elemento-8',//pila1
	'elemento-8',//pila2
	'elemento-0',//cinta,
	'elemento-5',//lled
	'elemento-0',//cinta
]



/** Fin configuracion actividad 1 */

/** Configuracion actividad 2 */
let elementosImagenSvgC2;
let tituloCircuito2 = '¡Construyamos un Circuito Serie!'
let contadorCableC2 = 0
let instruccionesActividade2 = [
	`<div class="animate__animated animate__fadeIn">
	<h4>!Vamos a diseñar, ensamblar y dibujar un circuito!</h4>
                            <p>Desplazamos del centro de recursos los siguientes elementos:</p> 
							<ul style="text-align: left;">
							<li><b>Dos pilas AA.</b></li>
							<li><b>Portalámparas.</b></li>
							<li><b>Dos bombillos para linterna de 3 voltios.</b></li>
							<li><b>Un portapilas.</b>, <b>Pinzas caimanes.</b></li>
							<li><b>Un interruptor.</b></li>
							</ul>
							<div style="width: 50%;margin:0px auto;"><div onclick="iniciar(2)" id="comenzar" class="button" >Comenzar&nbsp;▶</div></div>
	</div>`
]

let pasosActividad2 = [
	`<div class="animate__animated animate__fadeIn">
	<h4>Pasos</h4>
	 <ol>
                                <li><span>Al portapilas le colocamos las pilas AA. Con el cable de pinzas caimán conectamos un extremo al portapilas, y el otro extremo a uno de los terminales del interruptor.</span></li>
                               
                            </ol>
		</div>`,
	`<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		 <ol start="2">
									<li><span>Conectamos una pinza caimán, de otro cable, desde un terminal del interruptor a uno de los terminales del portalámparas (nos aseguramos de colocar el bombillo correspondiente previamente).</span></li>
								</ol>
			</div>`,
	`<div>
			<h4>Pasos</h4>
			 <ol start="3">
										<li><span>Conectamos otro cable del terminal del portalámparas a un terminal del segundo portalámparas</span></li>
									</ol>
				</div>`,
	`<div>
				<h4>Pasos</h4>
				 <ol start="4">
											<li><span>Conectamos un cable del otro terminal del segundo portalámparas al otro terminal del portalámparas</span></li>
										</ol>
					</div>`,
	`
				<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		<p>!Muy bien¡</p>
		<p>Ahora inténtalo, acciona el interruptor.</p>
		</div>
				`
]

let areaCollision2 = ``



let elementosPermitidosActividad2 = [
	'elemento-4',//Un portapilas.
	'elemento-3',//Dos pilas AA
	'elemento-1',//Interruptor
	'elemento-9',//Pinzas cocodrilo
	'elemento-7',//Dos Portalámparas
	'elemento-9',//Pinzas cocodrilo
	'elemento-9',//Pinzas cocodrilo
	'elemento-9'//Pinzas cocodrilo

]




/** Fin configuracion actividad 2 */

/** Configuracion actividad 3 */
let tituloCircuito3 = '¡Circuito mixtos!'
let contadorCableC3 = 0
let instruccionesActividade3 = [
	`<div class="animate__animated animate__fadeIn">
	<h4>!Vamos a construir el circuito mostrado en el punto 11!</h4>
                            <p>Desplazamos del centro de recursos los siguientes elementos:</p> 
							<ul style="text-align: left;">
							<li><b>Pila 9 V.</b></li>
							<li><b>Un portapilas.</b></li>
							<li><b>Pinzas caimanes.</b></li>
							<li><b>Un interruptor.</b></li>
							<li><b>Un recipiente o caja de jugo.</b></li>
							</ul>
							<div style="width: 50%;margin:0px auto;"><div onclick="iniciar(3)" id="comenzar" class="button" >Comenzar&nbsp;▶</div></div>
	</div>`
]

let pasosActividad3 = [
	`<div class="animate__animated animate__fadeIn">
	<h4>Pasos</h4>
	 <ol>
                                <li><span>Conectamos desde una pila 9V a uno de los cables con pinzas caimán, hasta un interruptor.</span></li>
                            </ol>
		</div>`,
	`<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		 <ol start="2">
									<li><span>Conectamos un cable desde el otro terminal del interruptor a uno de los terminales del portalámparas (nos aseguramos de colocar el bombillo correspondiente previamente).</span></li>
								</ol>
			</div>`,
	`<div>
			<h4>Pasos</h4>
			 <ol start="3">
										<li><span>Dentro de un reciente plástico, colocamos las puntas metálicas de los cables al fondo del recipiente y vamos agregando agua poco a poco para ver qué pasa.</span></li>
									</ol>
				</div>`,
	`<div>
	<h4>Pasos</h4>
		<ol start="4">
								<li><span>Conectamos un cable del recipiente al otro terminal del portapilas.</span></li>
							</ol>
		</div>`,
	`
				<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		<p>!Muy bien¡</p>
		<p>Ahora inténtalo, acciona el interruptor.</p>
		</div>
				`
]

let areaCollision3 = `<div class="area-collision" ondrop="drop(event)" ondragover="allowDrop(event)" >
<div>
			<div style="
			width: 86%;
			height: 44vh;
			position: absolute;
			top: 13px;
			left: 38px;
			margin: 0px auto;
		">
					<div class="pila-cuadrada">

					</div>
					<div class="cable1-c3">

					</div>
					<div class="caja_plastica">

					</div>
					<div class="interruptor-c3">

					</div>
					<div class="cable2-c3">

					</div>
					<div class="cable3-c3">

					</div>
					<div class="portalampara-2-c3">

					</div>
					<div class="cable4-c3">
							
					</div>
				</div>
			<div>
		</div>
	</div>
</div>`



let elementosPermitidosActividad3 = [
	'elemento-2',//pila 9v
	'elemento-1',//interruptor,
	'elemento-9',//cable cocodrilo
	'elemento-7',//lampara,
	'elemento-9',//cable cocodrilo
	'elemento-22',//caja plastica
	'elemento-9',//cable cocodrilo
	'elemento-9'//cable cocodrilo
]

/** Fin configuracion actividad 3 */

function init() {
	/* document.body.addEventListener('keyup', presentacionteclado, false)
	document.getElementById('siguiente').addEventListener('mouseover', btnSoundOver, false)
	document.getElementById('siguiente').addEventListener('mouseout', btnSoundOut, false)
	document.getElementById('atras').addEventListener('mouseover', btnSoundOver, false)
	document.getElementById('atras').addEventListener('mouseout', btnSoundOut, false) */
	cargarAudio();
	let conetedorElemetosDiv = document.querySelectorAll('.contenedor-elemento div');
	conetedorElemetosDiv.forEach(element => {
		element.classList.add('elementos-interrogacion')
	});
	/* 	cargarActividad(); */
}



function btnSoundOver() {
	audioOvers = new Audio(`${path_sound}61.mp3`);
	audioOvers.play();
}

function btnSoundOut() {
	audioOvers.pause();
}

function presentacionteclado(e) {


	if (e.keyCode == 39) {

		siguiente()
	}

	if (e.keyCode == 37) {
		if (getCurrentSlider() == 0) {

		} else {
			atras()
		}

	}


	if (e.keyCode == 13) {
		comprobar()
	}


}

function cargarAudio(loop = false) {
	if (audios_sond[presentacion_slide] != null || audios_sond[presentacion_slide] != undefined) {
		audio = new Audio(`${path_sound}${audios_sond[presentacion_slide]}.mp3`);
		audio.loop = loop
		audio.mute = true;
	}

}

function changeSound(new_sond) {
	audio.src = `${path_sound}${new_sond}.mp3`;
	audio.pause();
	audio.load();
	audio.play();
	audio.addEventListener('ended', function () {

	});
}


function presentacion() {
	if (presentacion_slide == 0) {
		document.getElementById('siguiente').style.display = "inline-block"
		document.getElementById('atras').style.visibility = "hidden"
		//document.getElementById('visubility').style.display = "inline-block"

	} else if (presentacion_slide == sliders.length - 1) {
		document.getElementById('siguiente').style.display = "none"
		//document.getElementById('atras').style.display = "none"
		document.getElementById('atras').style.visibility = "visible"
		document.getElementById('siguiente').style.display = "none"
		//changeSound(audios_sond[presentacion_slide])
	} else {
		document.getElementById('siguiente').style.display = "inline-block"
		document.getElementById('atras').style.visibility = "visible"
		document.getElementById('actividad').style.display = "none"

	}
	/* console.log(`slide-${presentacion_slide}`);*/
}


function siguiente() {
	if (presentacion_slide == sliders.length - 1) {
	} else {
		presentacion_slide++
		document.getElementById(sliders[presentacion_slide - 1]).style.display = "none"
		document.getElementById(sliders[presentacion_slide]).style.display = "block"
		audioOvers = new Audio(`${path_sound}60.mp3`);
		audioOvers.play();
		presentacion()
		limpiar()
	}
}

function atras() {
	presentacion_slide--
	document.getElementById(sliders[presentacion_slide + 1]).style.display = "none"
	document.getElementById(sliders[presentacion_slide]).style.display = "block"
	audioOvers = new Audio(`${path_sound}60.mp3`);
	audioOvers.play();
	presentacion()
	limpiar()
}

function getCurrentSlider() {
	return presentacion_slide
}






function allowDrop(ev) {
	ev.preventDefault();
}

function drag(ev) {
	ev.pageX = ev.pageX + 6
	ev.pageY = ev.pageY + 7
	ev.dataTransfer.setData("text", ev.target.id);
	//figura_dragId = ev.target.id.split("-")[1]
	figura_dragId = ev.target.id
	imag_drag_element = ev.target.src
	ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
	ev.preventDefault();
	ev.preventDefault();
	/* 	document.querySelector('.contenedor-instrucciones').innerHTML='' */

	if (figura_dragId == elementosPermitidosActividadActual[0]) {
		//bloque para verificar los pasos y los elementos a mostrar
		if (actividadActual == 1) {
			MostrarPartesCircuito1(figura_dragId)
			pasosCorrectosActividad++
			verificarPasosC1()
		} else if (actividadActual == 2) {
			MostrarPartesCircuito2(figura_dragId)
			pasosCorrectosActividad++
			verificarPasosC2()
		} else {
			MostrarPartesCircuito3(figura_dragId)
			pasosCorrectosActividad++
			verificarPasosC3()
		}


		elementosPermitidosActividadActual.shift()

		/* 	document.querySelector(`#${figura_dragId}`).style.filter = "brightness(0.5) opacity(0.5)"
			document.querySelector(`#${figura_dragId}`).style.pointerEvents = "none" */
		document.querySelector(`#${figura_dragId}`).style.border = "none"
		var data = ev.dataTransfer.getData("text");
		var nodeCopy = document.getElementById(data).cloneNode(true);
		nodeCopy.removeAttribute('draggable');
		/* ev.target.appendChild(nodeCopy); */
	} else {

		let elementodrag = document.querySelector(`#${figura_dragId}`)
		elementodrag.style.border = '1px solid red'
		setTimeout(() => {
			elementodrag.style.border = '1px solid silver'
		}, 1500);
	}

}




function menu(opcion) {
	switch (opcion) {
		case 'linterna':
			ReiniciarElementos()
			ReiniciarCircuito1()
			document.querySelector('.titulo-circuito').innerHTML = tituloCircuito1
			pasosCorrectosActividad = 0
			elementosPermitidosActividadActual = elementosPermitidosActividad1
			actividadActual = 1
			document.querySelector('.contenedor-pasos').innerHTML = ''
			cargarActividadLinterna()
			break;
		case 'CircuitoSerie':
			ReiniciarElementos()
			ReiniciarCircuito2()
			document.querySelector('.titulo-circuito').innerHTML = tituloCircuito2
			pasosCorrectosActividad = 0
			elementosPermitidosActividadActual = elementosPermitidosActividad2
			actividadActual = 2
			document.querySelector('.contenedor-pasos').innerHTML = ''
			cargarActividadSerie()
			break;
		case 'CircuitoMixto':
			ReiniciarElementos()
			document.querySelector('.titulo-circuito').innerHTML = tituloCircuito3
			pasosCorrectosActividad = 0
			elementosPermitidosActividadActual = elementosPermitidosActividad3
			actividadActual = 3
			document.querySelector('.contenedor-pasos').innerHTML = ''
			cargarActividadMixto()
			break;

		default:
			break;
	}
}


function cargarActividadLinterna() {

	document.querySelector('.contenedor-instrucciones').innerHTML = instruccionesActividade1[0]

}


function cargarActividadSerie() {
	document.querySelector('.contenedor-instrucciones').innerHTML = instruccionesActividade2[0]


}

function cargarActividadMixto() {

	document.querySelector('.contenedor-instrucciones').innerHTML = instruccionesActividade3[0]


}


function mostrarPasosActividad1() {
	document.querySelector('.contenedor-pasos').innerHTML = pasosActividad1[0]
}

function mostrarPasosActividad2() {
	document.querySelector('.contenedor-pasos').innerHTML = pasosActividad2[0]
}

function mostrarPasosActividad3() {
	document.querySelector('.contenedor-pasos').innerHTML = pasosActividad3[0]
}



function iniciar(actividad) {

	switch (actividad) {
		case 1:

			document.querySelector('#comenzar').style.display = 'none'
			document.querySelector('.contenedor-instrucciones').innerHTML = ` `
			document.querySelector('.contenedor-instrucciones').innerHTML = areaCollision1


			mostrarPasosActividad1()
			AlatoriosImagen()
			break;
		case 2:

			document.querySelector('#comenzar').style.display = 'none'
			document.querySelector('.contenedor-instrucciones').innerHTML = ''
			document.querySelector('.contenedor-instrucciones').innerHTML = areaCollision2
			elementosImagenSvgC2 = document.querySelectorAll('g')
			console.log(elementosImagenSvgC2)
			elementosImagenSvgC2.forEach(element => {
				element.style.visibility = 'hidden'
			});

			mostrarPasosActividad2()
			AlatoriosImagen()
			break;
		case 3:

			document.querySelector('#comenzar').style.display = 'none'
			document.querySelector('.contenedor-instrucciones').innerHTML = ''
			document.querySelector('.contenedor-instrucciones').innerHTML = areaCollision3
			mostrarPasosActividad3()
			AlatoriosImagen()
			break;

		default:
			break;
	}


}

function verificarPasosC1() {
	switch (pasosCorrectosActividad) {
		case 1:

			pasosActividad1.shift()
			mostrarPasosActividad1()
			break;
		case 4:

			pasosActividad1.shift()
			mostrarPasosActividad1()
			break;
		case 5:

			pasosActividad1.shift()
			mostrarPasosActividad1()
			break;
		case 6:

			pasosActividad1.shift()
			mostrarPasosActividad1()
			let conexcionPilac1 = document.querySelector('#conexionPilac1')

			let luzLed = document.querySelector('.luz-led')

			conexcionPilac1.addEventListener('click', (e) => {
				luzLed.classList.toggle('luz-led-on')
			}, false)


			tippy(`#conexionPilac1`, {
				content: 'Clic para unir',
				theme: 'material',

			});
			break;
		default:
			break;
	}



}

function verificarPasosC2() {

	switch (pasosCorrectosActividad) {
		case 4:

			pasosActividad2.shift()
			mostrarPasosActividad2()
			break;
		case 6:

			pasosActividad2.shift()
			mostrarPasosActividad2()
			break;
		case 7:

			pasosActividad2.shift()
			mostrarPasosActividad2()
			break;
		case 8:
			let interruptorc2 = document.querySelector(`#${elementosImagenSvgC2[8].id}`)
			let interruptorc2Img = document.querySelector(`#${elementosImagenSvgC2[8].id} > image`)
			let portalampara1c1 = document.querySelector(`#${elementosImagenSvgC2[2].id}`)
			let portalampara1c1Img = document.querySelector(`#${elementosImagenSvgC2[2].id} > image`)
			let portalampara2c1 = document.querySelector(`#${elementosImagenSvgC2[3].id}`)
			let portalampara2c1Img = document.querySelector(`#${elementosImagenSvgC2[3].id} > image`)
			let InterruptorClick=false

			

			console.log(interruptorc2)
			console.log(interruptorc2Img)
			console.log(portalampara1c1)
			console.log(portalampara2c1)


			interruptorc2.addEventListener('click', (e) => {
				if(InterruptorClick==false){
					interruptorc2Img.setAttribute('xlink:href','./public/assets/Img/Circuito2/interruptor2.png')
					portalampara1c1Img.setAttribute('xlink:href','./public/assets/Img/Circuito2/portalampara-encendida.png')
					portalampara2c1Img.setAttribute('xlink:href','./public/assets/Img/Circuito2/portalampara-encendida.png')
					InterruptorClick=!InterruptorClick
				}else{
					interruptorc2Img.setAttribute('xlink:href','./public/assets/Img/Circuito2/iterruptor1.png')
					portalampara1c1Img.setAttribute('xlink:href','./public/assets/Img/Circuito2/portalampara.png')
					portalampara2c1Img.setAttribute('xlink:href','./public/assets/Img/Circuito2/portalampara.png')
					InterruptorClick=!InterruptorClick
				}
				
				/* portalampara1c1.classList.toggle('portalampara-1-on')
				portalampara2c1.classList.toggle('portalampara-2-on') */
			}, false)


			tippy(`#${elementosImagenSvgC2[8].id}`, {
				content: 'Clic aqui',
				theme: 'material',

			}); 

			pasosActividad2.shift()
			mostrarPasosActividad2()
			break;
		default:
			break;
	}



}

function verificarPasosC3() {
	switch (pasosCorrectosActividad) {
		case 3:

			pasosActividad3.shift()
			mostrarPasosActividad3()
			break;
		case 5:

			pasosActividad3.shift()
			mostrarPasosActividad3()
			break;
		case 7:

			pasosActividad3.shift()
			mostrarPasosActividad3()


			break;
		case 8:
			pasosActividad3.shift()
			mostrarPasosActividad3()
			let interruptor = document.querySelector('.interruptor-c3')
			let portalampara1c3 = document.querySelector('.portalampara-2-c3')

			interruptor.addEventListener('click', (e) => {
				interruptor.classList.toggle('interruptor-c3-on')
				portalampara1c3.classList.toggle('portalampara-2-c3-on')
			}, false)


			tippy(`.interruptor-c3`, {
				content: 'Clic aqui',
				theme: 'material',

			});
			break;
		default:
			break;
	}



}


function MostrarPartesCircuito1(figura_dragId) {

	if (figura_dragId == 'elemento-6') {
		document.querySelector('.aluminio').style.visibility = 'visible'
	}
	if (figura_dragId == 'elemento-8' && contadorPilasC1 == 0) {
		document.querySelector('.pilas').style.visibility = 'visible'
		document.querySelector('.pilas').classList.remove('pila2')
		document.querySelector('.pilas').classList.add('pila1')
		/* document.querySelector('.pilas').style.backgroundImage = 'url(./public/assets/Img/Circuito/pilas-cinta-1.png)' */
		contadorPilasC1++
	} else if (figura_dragId == 'elemento-8' && contadorPilasC1 == 1) {
		document.querySelector('.pilas').style.visibility = 'visible'
		document.querySelector('.pilas').classList.remove('pila1')
		document.querySelector('.pilas').classList.add('pila2')
		/* document.querySelector('.pilas').style.backgroundImage = 'url(./public/assets/Img/Circuito/pilas-cinta-2.png)' */
		contadorPilasC1++
	}
	if (figura_dragId == 'elemento-0' && contadorCitasC1 == 0) {
		document.querySelector('.pilas').style.visibility = 'visible'
		/* document.querySelector('.pilas-cinta').style.visibility = 'visible' */
		/* document.querySelector('.pilas').classList.remove('pilas') */
		document.querySelector('.pilas').classList.add('pilas-cinta-1')
		contadorCitasC1++
	} else if (figura_dragId == 'elemento-0' && contadorCitasC1 == 1) {
		document.querySelector('.pilas').style.visibility = 'visible'
		/* document.querySelector('.pilas-cinta').style.visibility = 'visible' */
		/* document.querySelector('.pilas').classList.remove("pilas-cinta-1") */
		document.querySelector('.pilas').classList.add("pilas-cinta-2")
		contadorCitasC1++
	}
	if (figura_dragId == 'elemento-5') {
		document.querySelector('.luz-led').style.visibility = 'visible'
		document.querySelector('#aluminio').classList.remove('aluminio')
		document.querySelector('#aluminio').classList.add('aluminio-2')


	}
}

function MostrarPartesCircuito2(figura_dragId) {
	if (figura_dragId == 'elemento-4') {
		elementosImagenSvgC2[6].style.visibility = 'visible'
	}
	if (figura_dragId == 'elemento-3') {
		elementosImagenSvgC2[7].style.visibility = 'visible'
	}
	if (figura_dragId == 'elemento-1') {
		elementosImagenSvgC2[8].style.visibility = 'visible'
		/* document.querySelector('.pilas').style.backgroundImage="url('./public/assets/Img/Circuito/pilas-cinta.png');" */
	}

	if (figura_dragId == 'elemento-9' && contadorCableC2 == 0) {
		contadorCableC2++
		elementosImagenSvgC2[1].style.visibility = 'visible'

	} else if (figura_dragId == 'elemento-9' && contadorCableC2 == 1) {
		contadorCableC2++
		elementosImagenSvgC2[4].style.visibility = 'visible'
	} else if (figura_dragId == 'elemento-9' && contadorCableC2 == 2) {
		contadorCableC2++
		elementosImagenSvgC2[9].style.visibility = 'visible'
		/* document.querySelector('.cable3').style.visibility = 'visible' */
	}
	else if (figura_dragId == 'elemento-9' && contadorCableC2 == 3) {
		contadorCableC2++
		elementosImagenSvgC2[5].style.visibility = 'visible'
	}

	//Bombillos
	if (figura_dragId == 'elemento-7') {
		elementosImagenSvgC2[2].style.visibility = 'visible'
		elementosImagenSvgC2[3].style.visibility = 'visible'

	}



}

function MostrarPartesCircuito3(figura_dragId) {
	if (figura_dragId == 'elemento-2') {
		document.querySelector('.pila-cuadrada').style.visibility = 'visible'
	}
	if (figura_dragId == 'elemento-1') {
		document.querySelector('.interruptor-c3').style.visibility = 'visible'
	}
	if (figura_dragId == 'elemento-7') {
		document.querySelector('.portalampara-2-c3').style.visibility = 'visible'

	}
	if (figura_dragId == 'elemento-22') {
		document.querySelector('.caja_plastica').style.visibility = 'visible'
	}
	if (figura_dragId == 'elemento-9' && contadorCableC3 == 0) {
		document.querySelector('.cable1-c3').style.visibility = 'visible'
		contadorCableC3++
		/* document.querySelector('.cable2-c3').style.visibility = 'visible'
		document.querySelector('.cable3-c3').style.visibility = 'visible'
		document.querySelector('.cable4-c3').style.visibility = 'visible' */
	} else if (figura_dragId == 'elemento-9' && contadorCableC3 == 1) {
		document.querySelector('.cable2-c3').style.visibility = 'visible'
		contadorCableC3++
	} else if (figura_dragId == 'elemento-9' && contadorCableC3 == 2) {
		document.querySelector('.cable4-c3').style.visibility = 'visible'
		contadorCableC3++
	} else if (figura_dragId == 'elemento-9' && contadorCableC3 == 3) {
		document.querySelector('.cable3-c3').style.visibility = 'visible'
		contadorCableC3++
	}
}

function AlatoriosImagen() {
	let contenedorElementos = document.querySelector('.contenedor-elemento');

	let imagenesActividad

	if (elementosInicialesActividad.length == 0) {
		imagenesActividad = document.querySelectorAll('.contenedor-elemento > div')
	} else {
		imagenesActividad = elementosInicialesActividad
		elementosInicialesActividad = []
	}

	let imagenelemento = document.querySelectorAll('.imagen-elemento')


	imagenelemento.forEach(element => {

		element.style.visibility = 'visible'
	});

	imagenesActividad.forEach((elemento, index) => {
		elementosInicialesActividad.push(elemento)
		elemento.setAttribute('id', `elemento-${index}`)
		elemento.style.filter = "grayscale(0) drop-shadow(1px 4px 5px black)"
		elemento.style.pointerEvents = 'all'
		tippy(`#${elemento.id}`, {
			content: nombreElementos[index],
			theme: 'material',

		});
	})

	let conetedorElemetosDiv = document.querySelectorAll('.contenedor-elemento div');
	conetedorElemetosDiv.forEach(element => {
		element.style.backgroundImage = 'none';
	});


	let temporal = []
	let elementos_aleatorios = []
	for (let i = 0; i < imagenesActividad.length; i++) {
		temporal = [...temporal, i]
	}

	//Organizamos de forma aleatoria un array.
	temporal.sort(() => Math.random() - 0.5)
	for (let index = 0; index < imagenesActividad.length; index++) {
		elementos_aleatorios.push(imagenesActividad[temporal[index]])
	}

	contenedorElementos.innerHTML = ''

	elementos_aleatorios.forEach(element => {
		contenedorElementos.appendChild(element)
	});

}


function ReiniciarElementos() {
	/* elementosPermitidosActividadActual=[];
	actividadActual=0 */
	actividadActual
	let imagenelemento = document.querySelectorAll('.imagen-elemento')
	let conetedorElemetosDiv = document.querySelectorAll('.contenedor-elemento div');
	conetedorElemetosDiv.forEach(element => {
		element.style.backgroundImage = "url(./public/assets/Img/interrogacion.png)";
	});

	imagenelemento.forEach(element => {
		element.style.visibility = 'hidden'
	});
}

function ReiniciarCircuito1() {
	elementosPermitidosActividadActual;
	actividadActual;
	contadorPilasC1 = 0;
	contadorCitasC1 = 0;
	tituloCircuito1 = '¡Construcción de una linterna!'
	//Configuracion actividad 1
	nombreElementos = [
		'Cinta aislante',
		'Interruptor Palanca',
		'Pila 9.V',
		'Pilas doble A',
		'Porta Pilas',
		'Led',
		'Papel aluminio',
		'Porta lamparas',
		'Pila',
		'Pinzas cocodrilo',
		'Cables Conectores',
		'Martillo',
		'Bisturi',
		'Clips',
		'Bombillas linterna',
		'Cinta',
		'Potenciometro',
		'Potencimetro nano',
		'Condesador',
		'Tijeras',
		'Pinzas',
		'Cable conector',
		'Caja plastica',
		'Alicate',
		'Llave',
		'Destornillador',
		'Resistencia'
	]

	pasosCorrectosActividad = 0
	instruccionesActividade1 = [
		`<div class="animate__animated animate__fadeIn">
		<h4>!Vamos a construir una linterna!</h4>
								<p>Desplazamos del centro de recursos los siguientes elementos:<br>
								<ul style="text-align: left;">
									<li>
									<b>Papel aluminio</b>
									</li>
									<li>
									<b>Dos pilas doble A</b>
									</li>
									<li>
									<b>Un bombillo led </b> 
									</li>
									<li>
									<b>Cinta aislante</b>
									</li>
								</ul>
								<div style="width: 50%;margin:0px auto;"><div onclick="iniciar(1)" id="comenzar" class="button" >Comenzar&nbsp;▶</div></div>
		</div>`
	]

	pasosActividad1 = [
		`<div class="animate__animated animate__fadeIn">
		<h4>Pasos linterna</h4>
		 <ol type="a">
									<li><span>Cortamos dos tiras de papel aluminio de 15 cm de largo por 5 cm de
											ancho.</span></li>
									<li><span>Enrrollamos las tiras de papel aluminio de tal manera que nos queden tiras de
											15 cm de largo.</span></li>
								</ol>
			</div>`,
		`<div class="animate__animated animate__fadeIn">
			<h4>Pasos linterna</h4>
			 <ol start="2">
										<li><span>Unimos las pilas con la cinta aislante teniendo en cuenta que los polos contrarios deben quedar enfrentados.</span></li>
									</ol>
				</div>`,
		`<div>
				<h4>Pasos linterna</h4>
				 <ol start="3">
											<li><span>Unimos cada una de las tiras a cada uno de los extremos del led o bombillo.</span></li>
										</ol>
					</div>`,
		`<div>
					<h4>Pasos linterna</h4>
					 <ol start="4">
												<li><span>Tomamos el extremo libre de una tira y lo pegamos a uno de los polos de la pila.</span></li>
											</ol>
						</div>`,
		`
					<div class="animate__animated animate__fadeIn">
			<h4>Pasos</h4>
			<p>!Muy bien¡</p>
			<p>Ahora inténtalo, une el extremo libre de la tira a la pila.</p>
			</div>
					`
	]




	areaCollision1 = `<div class="area-collision" ondrop="drop(event)" ondragover="allowDrop(event)" >
	<div>
				<div class="contenedor-elementos-area-colision">
						<div class="luz-led">
	
						</div>
						<div id="aluminio" class="aluminio">
						
											</div>
							
						</div>
						<div class="pilas" id="pilas">
						<div style="
						display: flex;
						width: 75%;
						height: 8vh;
						justify-content: center;
						align-items: end;
						
					">
												<div style="
						
						width: 86%;
						height: inherit;
					">
												</div>
												<div id="conexionPilac1" style="
					width: 13%;
					height: 8vh;
					cursor: pointer;
				
					">
												</div>
						</div>
						</div>
						<div class="pilas-cinta" >
	
						</div>
				</div>
				<div>
	
				</div>
	
		</div>
	</div>`



	elementosPermitidosActividad1 = [
		'elemento-6',//papel aluminio
		'elemento-8',//pila1
		'elemento-8',//pila2
		'elemento-0',//cinta,
		'elemento-5',//lled
		'elemento-0',//cinta
	]



	/** Fin configuracion actividad 1 */
}


function ReiniciarCircuito2() {
	tituloCircuito2 = '¡Construyamos un Circuito Serie!'
	contadorCableC2 = 0
	instruccionesActividade2 = [
		`<div class="animate__animated animate__fadeIn">
	<h4>!Vamos a diseñar, ensamblar y dibujar un circuito!</h4>
                            <p>Desplazamos del centro de recursos los siguientes elementos:</p> 
							<ul style="text-align: left;">
							<li><b>Dos pilas AA.</b></li>
							<li><b>Portalámparas.</b></li>
							<li><b>Dos bombillos para linterna de 3 voltios.</b></li>
							<li><b>Un portapilas.</b>, <b>Pinzas caimanes.</b></li>
							<li><b>Un interruptor.</b></li>
							</ul>
							<div style="width: 50%;margin:0px auto;"><div onclick="iniciar(2)" id="comenzar" class="button" >Comenzar&nbsp;▶</div></div>
	</div>`
	]

	pasosActividad2 = [
		`<div class="animate__animated animate__fadeIn">
	<h4>Pasos</h4>
	 <ol>
                                <li><span>Al portapilas le colocamos las pilas AA. Con el cable de pinzas caimán conectamos un extremo al portapilas, y el otro extremo a uno de los terminales del interruptor.</span></li>
                               
                            </ol>
		</div>`,
		`<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		 <ol start="2">
									<li><span>Conectamos una pinza caimán, de otro cable, desde un terminal del interruptor a uno de los terminales del portalámparas (nos aseguramos de colocar el bombillo correspondiente previamente).</span></li>
								</ol>
			</div>`,
		`<div>
			<h4>Pasos</h4>
			 <ol start="3">
										<li><span>Conectamos otro cable del terminal del portalámparas a un terminal del segundo portalámparas</span></li>
									</ol>
				</div>`,
		`<div>
				<h4>Pasos</h4>
				 <ol start="4">
											<li><span>Conectamos un cable del otro terminal del segundo portalámparas al otro terminal del portalámparas</span></li>
										</ol>
					</div>`,
		`
				<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		<p>!Muy bien¡</p>
		<p>Ahora inténtalo, acciona el interruptor.</p>
		</div>
				`
	]

	areaCollision2 = `<div class="area-collision" ondrop="drop(event)" ondragover="allowDrop(event)" >
<div>
			<div class="contenedor-svg">
		<div >
		<svg version="1.1" class="responsive-c2"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 800 600" style="enable-background:new 0 0 800 600;" xml:space="preserve">
<g id="CapaInicial">
</g>
<g id="Cable1">
	
		<image style="overflow:visible;outline: none;" width="120" height="137" xlink:href="./public/assets/Img/Circuito2/37.png"  transform="matrix(-0.1167 -1.2219 1.2219 -0.1167 181.2849 331.5068)">
	</image>
</g>
<g id="Portalampara2">
	
		<image style="overflow:visible;outline: none;" width="246" height="171" xlink:href="./public/assets/Img/Circuito2/portalampara.png"  transform="matrix(0.7154 0 0 0.6608 503 177)">
	</image>
</g>
<g id="Portalampara1">
	
		<image style="overflow:visible;outline: none;" width="246" height="171" xlink:href="./public/assets/Img/Circuito2/portalampara.png"  transform="matrix(0.6891 0 0 0.6891 403 126)">
	</image>
</g>
<g id="Cable2">
	
		<image style="overflow:visible;outline: none;" width="85" height="236" xlink:href="./public/assets/Img/Circuito2/cable4.png"  transform="matrix(0.4477 0.8942 0.5948 -0.2978 303.0479 215.162)">
	</image>
</g>
<g id="Cable3">
	
		<image style="overflow:visible;outline: none;" width="360" height="135" xlink:href="./public/assets/Img/Circuito2/cable3.png"  transform="matrix(0.817 -0.3937 0.4341 0.9009 313.4775 316.2836)">
	</image>
</g>
<g id="Portapila">
	
		<image style="overflow:visible;outline: none;" width="134" height="114" xlink:href="./public/assets/Img/Circuito2/portapilas.png"  transform="matrix(1.4403 0 0 1.4403 153 309)">
	</image>
</g>
<g id="Pilas">
	
		<image style="overflow:visible;outline: none;" width="144" height="112" xlink:href="./public/assets/Img/Circuito2/PilasJuntas-c2.png"  transform="matrix(1.3298 0 0 1.3298 158.794 312.8565)">
	</image>
</g>
<g id="Interruptor1">
	
		<image style="overflow:visible;outline: none;" width="38" height="66" xlink:href="./public/assets/Img/Circuito2/iterruptor1.png"  transform="matrix(1.6787 0 0 1.6787 314.6841 97)">
	</image>
</g>
<g id="Cable4">
	<image style="overflow:visible;outline: none;" width="107" height="120" xlink:href="./public/assets/Img/Circuito2/cable2.png"  transform="matrix(0.785 0 0 0.7 509 161)">
	</image>
</g>
</svg>


		
		</div>
		
					<!--<div class="portapilas">

					</div>
					<div class="pilas-c2">

					</div>
					<div class="cable1">

					</div>
					<div class="interruptor">

					</div>
					<div class="cable2">

					</div>
					<div class="portalampara-1">

					</div>
					<div class="cable3">

					</div>
					<div class="portalampara-2">

					</div>
					<div class="cable4">
		</div> -->
			</div>
			<div>

			</div>

	</div>
</div>`



	elementosPermitidosActividad2 = [
		'elemento-4',//Un portapilas.
		'elemento-3',//Dos pilas AA
		'elemento-1',//Interruptor
		'elemento-9',//Pinzas cocodrilo
		'elemento-7',//Dos Portalámparas
		'elemento-9',//Pinzas cocodrilo
		'elemento-9',//Pinzas cocodrilo
		'elemento-9'//Pinzas cocodrilo

	]

}

function ReiniciarCircuito3() {
	tituloCircuito3 = '¡Circuito mixtos!'
	contadorCableC3 = 0
	instruccionesActividade3 = [
		`<div class="animate__animated animate__fadeIn">
		<h4>!Vamos a construir el circuito mostrado en el punto 11!</h4>
								<p>Desplazamos del centro de recursos los siguientes elementos:</p> 
								<ul style="text-align: left;">
								<li><b>Pila 9 V.</b></li>
								<li><b>Un portapilas.</b></li>
								<li><b>Pinzas caimanes.</b></li>
								<li><b>Un interruptor.</b></li>
								<li><b>Un recipiente o caja de jugo.</b></li>
								</ul>
								<div style="width: 50%;margin:0px auto;"><div onclick="iniciar(3)" id="comenzar" class="button" >Comenzar&nbsp;▶</div></div>
		</div>`
	]

	pasosActividad3 = [
		`<div class="animate__animated animate__fadeIn">
		<h4>Pasos</h4>
		 <ol>
									<li><span>Conectamos desde una pila 9V a uno de los cables con pinzas caimán, hasta un interruptor.</span></li>
								</ol>
			</div>`,
		`<div class="animate__animated animate__fadeIn">
			<h4>Pasos</h4>
			 <ol start="2">
										<li><span>Conectamos un cable desde el otro terminal del interruptor a uno de los terminales del portalámparas (nos aseguramos de colocar el bombillo correspondiente previamente).</span></li>
									</ol>
				</div>`,
		`<div>
				<h4>Pasos</h4>
				 <ol start="3">
											<li><span>Dentro de un reciente plástico, colocamos las puntas metálicas de los cables al fondo del recipiente y vamos agregando agua poco a poco para ver qué pasa.</span></li>
										</ol>
					</div>`,
		`<div>
		<h4>Pasos</h4>
			<ol start="4">
									<li><span>Conectamos un cable del recipiente al otro terminal del portapilas.</span></li>
								</ol>
			</div>`,
		`
					<div class="animate__animated animate__fadeIn">
			<h4>Pasos</h4>
			<p>!Muy bien¡</p>
			<p>Ahora inténtalo, acciona el interruptor.</p>
			</div>
					`
	]

	areaCollision3 = `<div class="area-collision" ondrop="drop(event)" ondragover="allowDrop(event)" >
	<div>
				<div style="
				width: 86%;
				height: 44vh;
				position: absolute;
				top: 13px;
				left: 38px;
				margin: 0px auto;
			">
						<div class="pila-cuadrada">
	
						</div>
						<div class="cable1-c3">
	
						</div>
						<div class="caja_plastica">
	
						</div>
						<div class="interruptor-c3">
	
						</div>
						<div class="cable2-c3">
	
						</div>
						<div class="cable3-c3">
	
						</div>
						<div class="portalampara-2-c3">
	
						</div>
						<div class="cable4-c3">
								
						</div>
					</div>
				<div>
			</div>
		</div>
	</div>`



	elementosPermitidosActividad3 = [
		'elemento-2',//pila 9v
		'elemento-1',//interruptor,
		'elemento-9',//cable cocodrilo
		'elemento-7',//lampara,
		'elemento-9',//cable cocodrilo
		'elemento-22',//caja plastica
		'elemento-9',//cable cocodrilo
		'elemento-9'//cable cocodrilo
	]
}