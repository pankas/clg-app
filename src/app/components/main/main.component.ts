import { Component } from '@angular/core';

@Component({
    selector : 'main',
    templateUrl : 'main.component.html',
    styleUrls : ['main.component.css']
})
export class MainComponent{
	private togglebtn : boolean = false;
	public mobiletrue : boolean;
    constructor(){
		console.log("check2");
		const mq = window.matchMedia( "(max-width: 500px)" );
		if(mq.matches){
			this.mobiletrue = true;
		}
		else{
			this.mobiletrue = false;
		}
    }
    toggle(tg){
    	
		if(this.togglebtn == false){
			this.togglebtn = true;
			document.getElementById("mySidenav").style.width = "280px";
			document.getElementById("main").style.marginLeft = "280px";
			document.getElementById('left').style.marginLeft="235px";
		}
		else{
			this.togglebtn = false;
			document.getElementById("mySidenav").style.width = "0px";
			document.getElementById("main").style.marginLeft = "0px";
			document.getElementById('left').style.marginLeft="0px";
		}
		
		// document.getElementById('left').style.marginLeft="100px";
    	// // document.getElementById(from).style.display='none';
   		// document.getElementById(to).style.display= "block";
   		// if(from=="left"){
   		// 	document.getElementById("mySidenav").style.width = "250px";
	    // 	document.getElementById("main").style.marginLeft = "250px";	
   		// }
   		// else{
   		// 	document.getElementById("mySidenav").style.width = "0px";
	    // 	document.getElementById("main").style.marginLeft = "0px";	
   		// }
   		
	}
	toggleMobile(tg){
    	
		if(this.togglebtn == false){
			this.togglebtn = true;
			document.getElementById("mySidenav").style.width = "250px";
			document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
			document.getElementById('left').style.marginLeft="235px";
		}
		else{
			this.togglebtn = false;
			document.getElementById("mySidenav").style.width = "0";
			document.body.style.backgroundColor = "white";
			document.getElementById('left').style.marginLeft="0";
		}
		
		// document.getElementById('left').style.marginLeft="100px";
    	// // document.getElementById(from).style.display='none';
   		// document.getElementById(to).style.display= "block";
   		// if(from=="left"){
   		// 	document.getElementById("mySidenav").style.width = "250px";
	    // 	document.getElementById("main").style.marginLeft = "250px";	
   		// }
   		// else{
   		// 	document.getElementById("mySidenav").style.width = "0px";
	    // 	document.getElementById("main").style.marginLeft = "0px";	
   		// }
	}
	toggleMobileclose(){
		if(this.mobiletrue){
			this.togglebtn=true;
			this.toggleMobile("tg");
		}
		
	}
}