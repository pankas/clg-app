import { Component, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';

declare let $ :any;
@Component({
    selector : 'main',
    templateUrl : 'main.component.html',
    styleUrls : ['main.component.css']
})
export class MainComponent implements AfterViewInit{
	 togglebtn : boolean = true;
	 mobiletrue : boolean;
	 userInfo;
	isAdmin :boolean = false;
	isTeacher :boolean = false; 
	message : string = '';
    constructor( private router : Router){
		if(localStorage.getItem('id') == 'admin'){
			this.isAdmin = true;
		}
		else{
			if(localStorage.getItem('semester') == '0'){
				this.isTeacher = true;
			}
		}
		this.userInfo = {
			id : localStorage.getItem('id'),
			semester : localStorage.getItem('semester'),
			name : localStorage.getItem('name'),
			email : localStorage.getItem('email') 
		};
		console.log("check2");
		const mq = window.matchMedia( "(max-width: 500px)" );
		if(mq.matches){
			this.mobiletrue = true;
		}
		else{
			this.mobiletrue = false;
		}
		if(this.isAdmin == true || this.isTeacher == true){
			this.router.navigate(['/main/list']);
		}
		else{
			this.router.navigate(['/main/student-form']);
		}
		// this.toggle();
	}

	ngAfterViewInit(){
		const mq = window.matchMedia( "(max-width: 500px)" );
		if(!mq.matches){
			this.togglebtn = false;
			this.toggle();
		}
	}
	
    toggle(tg?){
    	console.log("cdss");
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

	asklogout(){
		console.log("cadcdcdfwrfc");
		this.message = "Sure, want to logout";
		console.log(this.message);
		$('#mes').modal('show');
	}

	logout(){
		localStorage.clear();
		this.router.navigateByUrl('/login');
	}
}