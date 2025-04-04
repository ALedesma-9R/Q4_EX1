	function round(){
		let x = document.getElementById('x').value;

		document.getElementById('maam_Text').innerHTML='The rounded off version of the given variable is ' + Math.round(Math.sqrt(x))+ '.';
	}

	function sqrt() {
		let x = document.getElementById('x').value;

		document.getElementById('maam_Text').innerHTML='The given variable\'s square root is ' + (Math.sqrt(x)).toFixed(2) + '.';
	}

	function pow(){
		let x = document.getElementById('x').value;

		document.getElementById('maam_Text').innerHTML='The given variable raised to itself is ' + Math.pow(x,x) + '.';
	}

	function random() {
		let x = document.getElementById('x').value;

		document.getElementById('maam_Text').innerHTML='A random number between 0 to the given variable is ' + (Math.random()*x).toFixed(2) + '.';
	}