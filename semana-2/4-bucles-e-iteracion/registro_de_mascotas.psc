Proceso registro_de_mascotas
	Definir nombres Como Caracter;
	Definir nombreIngresado Como Caracter;
	Definir respuesta Como Entero;
	
	nombres = '';
	
	Repetir
		Escribir 'Ingrese el nombre de la mascota';
		Leer nombreIngresado;
		nombres = nombres + nombreIngresado + ', ';
		Escribir '¿Deseas ingrear otra mascota? No (2) Si (Cualquier otra acción)';
		Leer respuesta;
	Hasta Que respuesta == 2
	
	Escribir 'Registro: ' + nombres;
FinProceso
