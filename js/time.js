    var fnTimeCountDown = function(data,obj,nowDate,callback){
    	console.log(new Date(data));
		var f = {
			zero:function(n){
				var n = parseInt(n,10);
				if(n>0){
					if(n<=9){
						n = "0"+n;
					}
					return String(n);
				}else{
					return "00";
				}
			},
			dv:function(){
				//var data = data||Date.UTC(2020,1,1);
				//console.log(data)
				var future = new Date(data).getTime();
				var nowTime = new Date(nowDate).getTime();
				console.log(future);
			//	console.log(nowTime.getTime());
				//毫秒差值
				var dur = parseInt((future-nowTime)/1000),pms={
					sec:"00",
					minute:"00",
					hour:"00",
					day:"00",
					month:"00",
					year:"0",
					days:"0"
				};
				console.log(parseInt(dur/86400,10));
				if(dur>0){
					pms.sec = f.zero(dur%60);
					pms.minute = Math.floor(dur/60)>0?f.zero((dur/60)%60):"00";
					pms.hour = Math.floor(dur/3600)>0?f.zero((dur/3600)%24):"00";
					pms.day = Math.floor(dur/86400)>0?f.zero(Math.floor(dur/86400)%30):"00";
					pms.days = f.zero(Math.floor(dur/86400));
					//月份，以实际平均每月秒数计算
					pms.month = Math.floor((dur / 2629744)) > 0 ? f.zero(Math.floor((dur / 2629744)) % 12) : "00";
					//年份，按回归年365天5时48分46秒算
                    pms.year = Math.floor((dur / 31556926)) > 0 ? Math.floor((dur / 31556926)) : "0";
				}
				return pms;			
			},
			ui:function(){
				console.log(f.dv());
				console.log(obj);
				if (obj.sec) {
                    obj.sec.innerHTML = f.dv().sec;
	            }
	            if (obj.minute) {
	                obj.minute.innerHTML = f.dv().minute;
	            }
	            if (obj.hour) {
	                obj.hour.innerHTML = f.dv().hour;
	            }
	            if (obj.day) {
	                obj.day.innerHTML = f.dv().day;
	            }
	            if (obj.days) {
	                obj.days.innerHTML = f.dv().days;
	            }
	            if (obj.month) {
	                obj.month.innerHTML = f.dv().month;
	            }
	            if (obj.year) {
	                obj.year.innerHTML = f.dv().year;
	            }
	            // setTimeout(f.ui, 1000);
			}
		};
		f.ui();
	}
	