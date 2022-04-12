Proceso invertir
	Definir ingreso Como Caracter;
	Definir invertido Como Caracter;
	Definir index Como Entero;
	
	invertido = '';
	
	Escribir ('Ingrese algo para invertir');
	leer ingreso;
		
	Para index <- Longitud(ingreso) Hasta 0 Con Paso -1 Hacer
		invertido = invertido + Subcadena(ingreso, index, index);
	FinPara
	
	Escribir invertido;
FinProceso
