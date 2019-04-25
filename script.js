const resolve = document.getElementById('resolve');
resolve.addEventListener('click', () => {
	const a = document.getElementById('coeficiente-a').value;
	if(a == 0){
		alert('A equação inserida não é de 2º grau');
		return;
	}
	const b = document.getElementById('coeficiente-b').value;
	const c = document.getElementById('coeficiente-c').value;

	const delta = b*b - 4*a*c;
	const resultadoDelta = document.getElementById('resultado-delta');
	resultadoDelta.value = delta;

	const x1 = document.getElementById('resultado-x1');
	const x2 = document.getElementById('resultado-x2');
	if(delta < 0) {
		x1.value = ''
		x2.value = ''
		return;
	}
	x1.value = (-b + Math.sqrt(delta)) / (2*a);
	x2.value = (-b - Math.sqrt(delta)) / (2*a);

	const qtdRaizes = document.getElementById('qtd-raizes');
	qtdRaizes.value = delta > 0 ? 2 : 1;

	const concavidade = document.getElementById('concavidade');
	concavidade.value = a > 0 ? 'para cima' : 'para baixo';

	const vertice = document.getElementById('vertice');
	vertice.value = `(${-b/(2*a)}, ${-delta/(4*a)})`;
})
