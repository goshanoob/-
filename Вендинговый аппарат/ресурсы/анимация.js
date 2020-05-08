onload = function (){   
        document.getElementById("telo1_1").oninput = двигать;
        document.getElementById("telo2_1").oninput = двигать;
        document.getElementById("telo1_2").oninput = двигать;
        document.getElementById("telo2_2").oninput = двигать;
		function двигать(){
			var id = this.id.match(/\d/g), p = this.value;
			switch(id.join('')){
				case "11": 
					document.getElementById("тело1_1").setAttribute("translation",-p); 
					document.getElementById("ряд_1").innerHTML = (p/0.1+5-0.25).toFixed(1); 
					break;
				case "12": 
					document.getElementById("тело1_2").setAttribute("rotation","0 0 1 "+p);
					document.getElementById("тело1_3").setAttribute("rotation","0 0 1 "+(-2*p));
					document.getElementById("тело1_4").setAttribute("rotation","0 0 1 "+p);
					document.getElementById("полка_1").innerHTML = p;
					break;
				case "21": 
					document.getElementById("тело2_1").setAttribute("translation",p+" -0.05 0");
					document.getElementById("ряд_2").innerHTML = Math.round(10*(+p+0.3)/0.08)/10+1;
					break;
				case "22": 
					document.getElementById("тело2_2").setAttribute("translation","0 "+p+" 0");
					document.getElementById("полка_2").innerHTML = Math.round(10*p/0.1)/10-1;
					break;
				
			}
		}
		
		
}