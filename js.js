function makeChoise(thing) {
	var youChoiseNode = document.getElementById('youChoise');
	youChoiseNode.innerHTML=replThing
(thing);
}

function replThing(thing) {
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

function replWin(thing) {
	var choise;	
	switch (thing) {
		case 'stone':
			choise = 'Ничья с Камнями'
			break
		case 'scissors':
			choise = 'Ничья с Ножницами'
			break
		case 'paper':
			choise = 'Ничья с Бумагой'
			break
		}
	return choise;
}


function game() {
	
	var youChoise = document.form1.thing.value; // выбор игрока
	var comp = Math.random(); // генерируем случайный выбор компьтера
	var compChoise; // выбор компьютера
	var compNode = document.getElementById('compChoise'); //выбор компьютера
	var winnerNode = document.getElementById('winner'); // победитель
	var commentNode = document.getElementById('comment'); // комментарий победы

	// если игрок не сделал выбор
	if (!youChoise) {
		alert('Выбирай!');
		return
	}
	
	if (comp <= 1/3) {
		compChoise = 'stone'}
	else if (comp > 1/3 && comp <= 2/3) {
			compChoise = 'scissors'		}
		else if (comp > 2/3 && comp <= 1) {
				compChoise = 'paper'}
	
	compNode.innerHTML=replThing(compChoise)+'; '+comp; // выбор компьютера
		
	if (youChoise == compChoise) {
		winnerNode.innerHTML='Ничья';
		commentNode.innerHTML=replWin(youChoise);	
		return
	}

	if (youChoise == 'stone' && compChoise == 'scissors') {
		winnerNode.innerHTML='Ты выиграл!';
		commentNode.innerHTML='Камень тупит Ножницы';	
		return
	}
	
	if (youChoise == 'scissors' && compChoise == 'stone') {
		winnerNode.innerHTML='Комп выиграл!';
		commentNode.innerHTML='Камень тупит Ножницы';	
		return
	}
	
	if (youChoise == 'stone' && compChoise == 'paper') {
		winnerNode.innerHTML='Комп выиграл!';
		commentNode.innerHTML='Бумага обертывает Камень';	
		return
	}
	
	if (youChoise == 'paper' && compChoise == 'stone') {
		winnerNode.innerHTML='Ты выиграл!';
		commentNode.innerHTML='Бумага обертывает Камень';	
		return
	}

	if (youChoise == 'scissors' && compChoise == 'paper') {
		winnerNode.innerHTML='Ты выиграл!';
		commentNode.innerHTML='Ножницы режут Бумагу';	
		return
	}

	if (youChoise == 'paper' && compChoise == 'scissors') {
		winnerNode.innerHTML='Комп выиграл!';
		commentNode.innerHTML='Ножницы режут Бумагу';	
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
	console.log('Число цифр:'+countNum+'; Максимальное число:'+maxNum);

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

	var str = 'str1n6w1ths0menum6er5 7even';
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

	var str = 'str1n6w1ths0menum6er5 7even'
	var strNum = str.match(/\d/g);
	var countNum = strNum.length;
	var maxNum = Math.max.apply(null,strNum);
	console.log('Число цифр:'+countNum+'; Максимальное число:'+maxNum);

}

