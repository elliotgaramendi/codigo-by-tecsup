SubProceso notaFinal <- promedio (nota1, nota2, nota3)
	Definir notaFinal Como Real;
	notaFinal = (nota1 + nota2 + nota3) / 3;
FinSubProceso

SubProceso estado(notaFinal)
	Si notaFinal >= 13 Entonces
		Escribir 'Aprobaste';
	SiNo
		Escribir 'Desaprobaste';
	FinSi
FinSubProceso

Proceso promedio_final_estado
	Definir nota01 Como Entero;
	Definir nota02 Como Entero;
	Definir nota03 Como Entero;
	Definir notaFinal Como Real;
	
	Escribir 'Ingrese sus 3 notas';
	Leer nota01;
	Leer nota02;
	Leer nota03;
	
	notaFinal = promedio(nota01, nota02, nota03);
	Escribir 'Su nota final es: ', notaFinal;
	estado(notaFinal);
FinProceso
