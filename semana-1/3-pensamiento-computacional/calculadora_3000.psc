Proceso calculadora_3000
	Definir numero1 Como Entero;
	Definir numero2 Como Entero;
	Definir suma Como Entero;
	Definir resta Como Entero;
	Definir producto Como Entero;
	Definir cociente Como Real;
		
	Escribir 'Ingrese el número 1';
	Leer numero1;
	Escribir 'Ingrese el número 2';
	Leer numero2;
	
	// suma <- numero1 + numero2;
	suma = numero1 + numero2;
	resta = numero1 - numero2;
	producto = numero1 * numero2;
	cociente = numero1 / numero2;
	
	Escribir 'Suma: ', suma;
	Escribir 'Resta: ' + ConvertirATexto(resta);
	Escribir 'Producto: ', producto;
	Escribir 'Cociente: ', cociente;
FinProceso
