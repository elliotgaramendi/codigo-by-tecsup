SubProceso notaFinal <- promedio (nota1, nota2, nota3)
	Definir notaFinal Como Real;
	notaFinal = (nota1 + nota2 + nota3) / 3;
FinSubProceso

Proceso promedio_final
	Definir nota01 Como Entero;
	Definir nota02 Como Entero;
	Definir nota03 Como Entero;
	
	Escribir 'Ingrese sus 3 notas';
	Leer nota01;
	Leer nota02;
	Leer nota03;
	
	Escribir promedio(nota01, nota02, nota03);
FinProceso
