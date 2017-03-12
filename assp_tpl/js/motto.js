function getMotto(){
	motto=new Array(5);
	sources=new Array(5);

	motto[0]="<div class='portrait'>"+"<img src='/templets/sietmp/images/us2.jpg' width='54' height='54' />"+"</div>"+"<div class='quote-text'  style='font-size:15px'>"+"&quot;My ICEP roommate Walter was the true man and Alejandra from Spain was the sweetest girl.&quot;"+"<br /><br />"+"<div class='testimonial-meta' style='float:left'>"+"-"+" <span class='testimonial-client'>"+"吴伟华"+"</span>"+"ICEP校友 "+"&#8217;"+"2011，纽约大学"+"</div>"+"</div><div class='clear'></div>";
	
	motto[1]="<div class='portrait'>"+"<img src='/templets/sietmp/images/us3.jpg' width='54' height='54' />"+"</div>"+"<div class='quote-text'  style='font-size:15px'>"+"&quot;It is like seeing a real philosopher doing philosophy in class.&quot;"+"<br /><br />"+"<div class='testimonial-meta' style='float:left'>"+"-"+" <span class='testimonial-client'>"+"孙楠"+"</span>"+"ICEP校友 "+"&#8217;"+"2011，俄亥俄州立大学"+"</div>"+"</div><div class='clear'></div>";
	
	motto[2]="<div class='portrait'>"+"<img src='/templets/sietmp/images/us4.jpg' width='54' height='54' />"+"</div>"+"<div class='quote-text'  style='font-size:15px'>"+"&quot;I completed courses to fulfill my major requirement at ICEP.&quot;"+"<br /><br />"+"<div class='testimonial-meta' style='float:left'>"+"-"+" <span class='testimonial-client'>"+"李若然"+"</span>"+"ICEP校友 "+"&#8217;"+"2011，普林斯顿大学"+"</div>"+"</div><div class='clear'></div>";
	
	motto[3]="<div class='portrait'>"+"<img src='/templets/sietmp/images/us5.jpg' width='54' height='54' />"+"</div>"+"<div class='quote-text'  style='font-size:15px'>"+"&quot;I'm convinced that SIE graduates will have a major impact in shaping the future.&quot;"+"<br /><br />"+"<div class='testimonial-meta' style='float:left'>"+"-"+" <span class='testimonial-client'>"+"杨文"+"</span>"+"ICEP校友 "+"&#8217;"+"2011，华盛顿大学"+"</div>"+"</div><div class='clear'></div>";
	
	motto[4]="<div class='portrait'>"+"<img src='/templets/sietmp/images/us6.jpg' width='54' height='54' />"+"</div>"+"<div class='quote-text'  style='font-size:15px'>"+"&quot;Humorous professors, various group studies, making new friends, social parties and unforgettable memories.&quot;"+"<br /><br />"+"<div class='testimonial-meta' style='float:left'>"+"-"+" <span class='testimonial-client'>"+"江军"+"</span>"+"ICEP校友 "+"&#8217;"+"2011，爱荷华大学"+"</div>"+"</div><div class='clear'></div>";
	
	
	i=Math.floor(Math.random()*motto.length);
	document.getElementById("motto").innerHTML=motto[i];
	}
	setInterval(getMotto,5000);