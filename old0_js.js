function makeChoise(thing) {
	document.getElementById('youChoise').innerHTML=replacement(thing);
}

function replacement(thing) {
	var youChoise;	
	switch (thing) {
		case 'stone':
			youChoise = 'Камень'
			break
		case 'scissors':
			youChoise = 'Ножницы'
			break
		case 'paper':
			youChoise = 'Бумага'
			break
		}
	return youChoise;
}

function game() {
	var youChoise = document.form1.thing.value;
	var comp = Math.random();
	var compChoise;
	if (!youChoise) {
		alert('Выбирай!');
		return
	}
	if (comp <= 0.333333333333333) {
		compChoise = 'stone'}
	else if (comp > 0.333333333333333 && comp <= 0.666666666666666) {
			compChoise = 'scissors'		}
		else if (comp > 0.666666666666666 && comp <= 1) {
				compChoise = 'paper'}		
	
	document.getElementById('compChoise').innerHTML=replacement(compChoise);
	
	if (youChoise == 'stone' && compChoise == 'stone') {
		document.getElementById('winner').innerHTML='Ничья';
		document.getElementById('comment').innerHTML='Ничья с Камнями';	
		return
	}
		if (youChoise == 'scissors' && compChoise == 'scissors') {
		document.getElementById('winner').innerHTML='Ничья';
		document.getElementById('comment').innerHTML='Ничья с Ножницами';	
		return
	}
	if (youChoise == 'paper' && compChoise == 'paper') {
		document.getElementById('winner').innerHTML='Ничья';
		document.getElementById('comment').innerHTML='Ничья с Бумагой';	
		return
	}
		if (youChoise == 'stone' && compChoise == 'scissors') {
		document.getElementById('winner').innerHTML='Ты выиграл!';
		document.getElementById('comment').innerHTML='Камень тупит Ножницы';	
		return
	}
		if (youChoise == 'scissors' && compChoise == 'stone') {
		document.getElementById('winner').innerHTML='Комп выиграл!';
		document.getElementById('comment').innerHTML='Камень тупит Ножницы';	
		return
	}
		if (youChoise == 'stone' && compChoise == 'paper') {
		document.getElementById('winner').innerHTML='Комп выиграл!';
		document.getElementById('comment').innerHTML='Бумага обертывает Камень';	
		return
	}
		if (youChoise == 'paper' && compChoise == 'stone') {
		document.getElementById('winner').innerHTML='Ты выиграл!';
		document.getElementById('comment').innerHTML='Бумага обертывает Камень';	
		return
	}

		if (youChoise == 'scissors' && compChoise == 'paper') {
		document.getElementById('winner').innerHTML='Ты выиграл!';
		document.getElementById('comment').innerHTML='Ножницы режут Бумагу';	
		return
	}

		if (youChoise == 'paper' && compChoise == 'scissors') {
		document.getElementById('winner').innerHTML='Комп выиграл!';
		document.getElementById('comment').innerHTML='Ножницы режут Бумагу';	
		return
	}

}

function work() {
	//var str = prompt('Введите строку');
	/*var str = 'str1n6w1ths0menum6er5 7even';
	var countNum = 0;
	var maxNum = 0;
	for (var i = str.length-1; i>=0; i=i-1) {
		var checkNum = parseInt(str[i]);
		if (!isNaN(checkNum)) { // ищем не числа а символы
			countNum=countNum+1;
			if (maxNum <= checkNum) {
				maxNum = checkNum;
			}
		}
	}
	console.log('Число цифр:'+countNum+'; Максимальное число:'+maxNum);*/

	var str = 'str1n6w1ths0menum6er5 7even';
	var countNum = 0;
	var maxNum = 0;
	for (var i = str.length-1; i>=0; i=i-1) {
		var checkNum = parseInt(str[i]); 
		if (checkNum == checkNum) { // хороший, но не понятнфый вариант
			countNum=countNum+1;
			if (maxNum <= checkNum) {
				maxNum = checkNum;
			}
		}
	}
	console.log('Число цифр:'+countNum+'; Максимальное число:'+maxNum);

	/*var str = 'str1n6w1ths0menum6er5 7even';
	var countNum = 0;
	var maxNum = 0;
	for (var i = str.length-1; i>=0; i=i-1) {
		var checkNum = Number(str[i]); // не годится пробел считается 0 нулем лучше использовать parseInt
		if (checkNum == checkNum) {
			console.log(str[i]+'; '+checkNum);
			countNum=countNum+1;
			if (maxNum <= checkNum) {
				maxNum = checkNum;
			}
		}
	}
	console.log('Число цифр:'+countNum+'; Максимальное число:'+maxNum);*/
}

