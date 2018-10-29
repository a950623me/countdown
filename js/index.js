window.onload = function(){
	var Mdata = document.getElementsByClassName("M-data")[0];
	//获取当前时间
	function getNowtime(){
		var data = new Date();
		var month = data.getMonth()+1;
		return {
			"month":checkTime(month),
			"year":checkTime(data.getFullYear()),
			"day":checkTime(data.getDate()),
			"h":checkTime(data.getHours()),
			"m":checkTime(data.getMinutes()),
			"s":checkTime(data.getSeconds())
		};
	}
	function checkTime(numtime){ //将0-9的数字前面加上0，例1变为01 
	  if(numtime<10) 
	  { 
	    numtime = "0" + numtime; 
	  } 
	  return numtime; 
	} 
	//获取倒计时
	var time = {
		"year":2019,
		"month":1,
		"day":1,
		"h":9,
		"m":59,
		"s":60
	};
	//获取时间赋值对象
	var obj = {
		sec:document.getElementById("seconds"),
		minutes:document.getElementById("minutes"),
		hours:document.getElementById("hours"),
		months:document.getElementById("months"),
		day:document.getElementById("days"),
		days:document.getElementById("dayss")
	}
	function goalTimer(){
		var goalTimes = (new Date(time.year,time.month,time.day,time.h,time.m,time.s).getTime()-new Date(getNowtime().year,getNowtime().month,getNowtime().day,getNowtime().h,getNowtime().m,getNowtime().s).getTime())/1000;
		console.log(new Date());
		//console.log(goalTimes);
		var goalTimes =Math.floor(goalTimes);
		//console.log(goalTimes);
		var month = Math.floor((goalTimes / 2629744)%12, 10);//计算剩余的月数
		//var month = checkTime(month);
		console.log(month)
		var dd = Math.floor((goalTimes / 86400)%30, 10);//计算剩余的天数
		console.log(dds);
		var dd = checkTime(dd);
		var hour = Math.floor((goalTimes/3600)%24,10);//获取剩余小时
		var hour = checkTime(hour);
		var sec = Math.floor(goalTimes%60,10);//获取剩余秒数
		var sec = checkTime(sec);
		var minute = Math.floor((goalTimes/60)%60,10);
		var minute = checkTime(minute);
		var dds = Math.floor(goalTimes / 86400,10)
		return {
			"month":month,
			"day":dd,
			"hour":hour,
			"sec":sec,
			"minute":minute,
			"days":dds
		};
	}
	setInterval(function(){
		var addTime = goalTimer();
		//赋值
		obj.day.innerHTML = addTime.day;
		obj.months.innerHTML = addTime.month;
		obj.hours.innerHTML = addTime.hour;
		obj.sec.innerHTML = addTime.sec;
		obj.minutes.innerHTML = addTime.minute;
		obj.days.innerHTML = addTime.days;
		//console.log(addTime);
	},1000)
	
	setInterval(function(){
		var data = getNowtime();
		Mdata.innerHTML = "<span>"+data.month+"月"+data.day+"日</span><span>"+data.h+"："+data.m+"："+data.s+"</span>";
	},1000)
	//ajax异步交互
	ajax({
	    method: 'get',
	    url: 'data/data.json',
	    success: function (response) {
	    	var data = JSON.parse(response).data;
	    	var response = JSON.parse(response).reponse;
	       // console.log(response);
	    	var tbody1 = document.getElementsByClassName("tab1")[0].getElementsByTagName("tbody")[0];
	    	var tbody2 = document.getElementById("tab2");
	    	var tbody3 = document.getElementById("tab3");
	    	var max = data.length>10?10:data.length;
	    	var max2 = data.length>10?10:data.length;
	    	var max3 = response.length>10?10:response.length;
	    	//升序排序
	    	function compare(property){
			    return function(a,b){
			        var value1 = a[property];
			        var value2 = b[property];
			        return value1 - value2;
			    }
			}
	    	data.sort(compare('number'))
	    	//日期升序排序
//	    	function compareBig(propertyName){
//			    return function(object1, object2) {
//			        var value1 = object1[propertyName];
//			        var value2 = object2[propertyName];
//			        console.log(value1);
//			        if (value1 < value2) {
//			            return -1;
//			        } else if (value1 > value2) {
//			            return 1;
//			        } else {
//			            return 0;
//			        }
//			    }
//			}
//			console.log(response.sort(compareBig('time')))
	    	for (var i =0;i<max;i++){
	    		if(i==0){
	    			tbody1.innerHTML+='<tr class="first-tr"><td><img src="images/name1.jpg"/></td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}else if(i==1){
	    			tbody1.innerHTML+='<tr class="second-tr"><td><img src="images/name2.jpg"/></td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}else if(i==2){
	    			tbody1.innerHTML+='<tr class="third-tr"><td><img src="images/name3.png"/></td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}else{
	    			tbody1.innerHTML+='<tr><td>'+(i+1)+'</td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}
	    		
	    	}
	    	for (var i =0;i<max2;i++){
	    		if(i==0){
	    			tbody2.innerHTML+='<tr class="first-tr"><td><img src="images/name1.jpg"/></td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}else if(i==1){
	    			tbody2.innerHTML+='<tr class="second-tr"><td><img src="images/name2.jpg"/></td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}else if(i==2){
	    			tbody2.innerHTML+='<tr class="third-tr"><td><img src="images/name3.png"/></td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}else{
	    			tbody2.innerHTML+='<tr><td>'+(i+1)+'</td><td>'+data[i].name+'</td><td>'+data[i].number+'</td><td>'+data[i].number+'</td></tr>';
	    		}
	    		
	    	}
	    	for(var k =0;k<max3;k++){
	    		tbody3.innerHTML+='<tr><td>'+response[k].name+'</td><td>'+response[k].time+'</td></tr>';
	    	}
	    }
	});
	console.log(document.getElementsByTagName("html")[0].offsetHeight);
}
