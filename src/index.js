module.exports = function toReadable (inputNumber) {


	switch(inputNumber) {
		case 0:
		return 'zero';
		case 1:
		return 'one';
		case 2:
		return 'two';
		case 3: 
		return 'three';
		case 4:
		return 'four';
		case 5:
		return 'five';
		case 6: 
		return 'six';
		case 7:
		return 'seven';
		case 8:
		return 'eight';
		case 9: 
		return 'nine';
		case 10:
		return 'ten';
		case 11:
		return 'eleven';
		case 12:
		return 'twelve';
		case 13: 
		return 'thirteen';
		case 14:
		return 'fourteen';
		case 15:
		return 'fifteen';
		case 16: 
		return 'sixteen';
		case 17:
		return 'seventeen';
		case 18:
		return 'eighteen';
		case 19: 
		return 'nineteen';
		
		case 110:
		return 'one hundred ten';
		case 111:
		return 'one hundred eleven';
		case 112:
		return 'one hundred twelve';
		case 113:
		return 'one hundred thirteen';
		case 114:
		return 'one hundred fourteen';
		case 115:
		return 'one hundred fifteen';
		case 116:
		return 'one hundred sixteen';
		case 117:
		return 'one hundred seventeen';
		case 118:
		return 'one hundred eighteen';
		case 119:
		return 'one hundred nineteen';

		case 210:
		return 'two hundred ten';
		case 211:
		return 'two hundred eleven';
		case 212:
		return 'two hundred twelve';
		case 213:
		return 'two hundred thirteen';
		case 214:
		return 'two hundred fourteen';
		case 215:
		return 'two hundred fifteen';
		case 216:
		return 'two hundred sixteen';
		case 217:
		return 'two hundred seventeen';
		case 218:
		return 'two hundred eighteen';
		case 219:
		return 'two hundred nineteen';

		case 310:
		return 'three hundred ten';
		case 311:
		return 'three hundred eleven';
		case 312:
		return 'three hundred twelve';
		case 313:
		return 'three hundred thirteen';
		case 314:
		return 'three hundred fourteen';
		case 315:
		return 'three hundred fifteen';
		case 316:
		return 'three hundred sixteen';
		case 317:
		return 'three hundred seventeen';
		case 318:
		return 'three hundred eighteen';
		case 319:
		return 'three hundred nineteen';

		case 410:
		return 'four hundred ten';
		case 411:
		return 'four hundred eleven';
		case 412:
		return 'four hundred twelve';
		case 413:
		return 'four hundred thirteen';
		case 414:
		return 'four hundred fourteen';
		case 415:
		return 'four hundred fifteen';
		case 416:
		return 'four hundred sixteen';
		case 417:
		return 'four hundred seventeen';
		case 418:
		return 'four hundred eighteen';
		case 419:
		return 'four hundred nineteen';

		case 510:
		return 'five hundred ten';
		case 511:
		return 'five hundred eleven';
		case 512:
		return 'five hundred twelve';
		case 513:
		return 'five hundred thirteen';
		case 514:
		return 'five hundred fourteen';
		case 515:
		return 'five hundred fifteen';
		case 516:
		return 'five hundred sixteen';
		case 517:
		return 'five hundred seventeen';
		case 518:
		return 'five hundred eighteen';
		case 519:
		return 'five hundred nineteen';

		case 610:
		return 'six hundred ten';
		case 611:
		return 'six hundred eleven';
		case 612:
		return 'six hundred twelve';
		case 613:
		return 'six hundred thirteen';
		case 614:
		return 'six hundred fourteen';
		case 615:
		return 'six hundred fifteen';
		case 616:
		return 'six hundred sixteen';
		case 617:
		return 'six hundred seventeen';
		case 618:
		return 'six hundred eighteen';
		case 619:
		return 'six hundred nineteen';

		case 710:
		return 'seven hundred ten';
		case 711:
		return 'seven hundred eleven';
		case 712:
		return 'seven hundred twelve';
		case 713:
		return 'seven hundred thirteen';
		case 714:
		return 'seven hundred fourteen';
		case 715:
		return 'seven hundred fifteen';
		case 716:
		return 'seven hundred sixteen';
		case 717:
		return 'seven hundred seventeen';
		case 718:
		return 'seven hundred eighteen';
		case 719:
		return 'seven hundred nineteen';

		case 810:
		return 'eight hundred ten';
		case 811:
		return 'eight hundred eleven';
		case 812:
		return 'eight hundred twelve';
		case 813:
		return 'eight hundred thirteen';
		case 814:
		return 'eight hundred fourteen';
		case 815:
		return 'eight hundred fifteen';
		case 816:
		return 'eight hundred sixteen';
		case 817:
		return 'eight hundred seventeen';
		case 818:
		return 'eight hundred eighteen';
		case 819:
		return 'eight hundred nineteen';

		case 910:
		return 'nine hundred ten';
		case 911:
		return 'nine hundred eleven';
		case 912:
		return 'nine hundred twelve';
		case 913:
		return 'nine hundred thirteen';
		case 914:
		return 'nine hundred fourteen';
		case 915:
		return 'nine hundred fifteen';
		case 916:
		return 'nine hundred sixteen';
		case 917:
		return 'nine hundred seventeen';
		case 918:
		return 'nine hundred eighteen';
		case 919:
		return 'nine hundred nineteen';
	}

	if (inputNumber.toString().length === 3) {
		var firstDigNum = Math.floor(inputNumber / 100);
		var secondDigNum = inputNumber.toString().slice(0,-1);
				secondDigNum = secondDigNum.toString().slice(1);
		var thirdDigNum = inputNumber.toString().slice(2);

		return firstDig(firstDigNum) + ' hundred' + secondDig(secondDigNum) + thirdDig(thirdDigNum);
		
		function firstDig(firstDigNum) {
			switch (firstDigNum) {
				case 1:
				return 'one';
				case 2:
				return 'two';
				case 3: 
				return 'three';
				case 4:
				return 'four';
				case 5:
				return 'five';
				case 6: 
				return 'six';
				case 7:
				return 'seven';
				case 8:
				return 'eight';
				case 9: 
				return 'nine';
			}
		}
		function secondDig(secondDigNum) {
			switch (secondDigNum) {
				case '0':
				return '';
				case '2':
				return ' twenty';
				case '3': 
				return ' thirty';
				case '4':
				return ' forty';
				case '5':
				return ' fifty';
				case '6': 
				return ' sixty';
				case '7':
				return ' seventy';
				case '8':
				return ' eighty'
				case '9': 
				return ' ninety';
			}
		}
		function thirdDig(thirdDigNum) {
			switch (thirdDigNum) {
				case '0':
				return '';
				case '1':
				return ' one';
				case '2':
				return ' two';
				case '3': 
				return ' three';
				case '4':
				return ' four';
				case '5':
				return ' five';
				case '6': 
				return ' six';
				case '7':
				return ' seven';
				case '8':
				return ' eight';
				case '9': 
				return ' nine';
			}
		}

	}
	else if (inputNumber.toString().length === 2) {
		var firstCharNum = inputNumber.toString().slice(0,-1);
		var secondCharNum = inputNumber.toString().slice(1);

		return firstChar(firstCharNum) + secondChar(secondCharNum);

		function firstChar(firstCharNum) {
			switch (firstCharNum) {
				case '2':
				return 'twenty';
				case '3':
				return 'thirty';
				case '4':
				return 'forty';
				case '5':
				return 'fifty';
				case '6':
				return 'sixty';
				case '7':
				return 'seventy';
				case '8':
				return 'eighty';
				case '9':
				return 'ninety';
			}
		}
		function secondChar(secondCharNum) {
			switch (secondCharNum) {
				case '0':
				return '';
				case "1":
				return ' one';
				case "2":
				return ' two';
				case "3":
				return ' three';
				case "4":
				return ' four';
				case "5":
				return ' five';
				case "6":
				return ' six';
				case "7":
				return ' seven';
				case "8":
				return ' eight';
				case "9":
				return ' nine';
			}
		}
	}
	else {
	}
}