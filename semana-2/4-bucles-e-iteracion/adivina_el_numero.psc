Proceso adivina_el_numero
	Definir numeroAdivinar Como Entero;
	Definir numeroIngresado Como Entero;
	
	numeroAdivinar = azar(100);
		
	Escribir '¿En qué número estoy pensando?';
	Leer numeroIngresado;
	
	Mientras numeroIngresado<>numeroAdivinar Hacer
		Si (numeroAdivinar < numeroIngresado) Entonces
			Escribir 'El número es menor';
		SiNo
			Escribir 'El número es mayor';
		FinSi
		Escribir 'Vuelve a intentarlo';
		Leer numeroIngresado;
	FinMientras
	
	Escribir '¡Felicidades, estaba pensando en ese número!';
FinProceso
