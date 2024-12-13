

pt=0;bt=0;mt=0;mgt=0;st=0;dt=0;ct=0;pst=0;cdt=0;aa=0;bb=0;

function pizza()
{
		if(document.getElementById("pcc").checked==true)
					{
	document.getElementById("pp").disabled=false;
	document.getElementById("pq").disabled=false;
	document.getElementById("pd").disabled=false;
					}
if(document.getElementById("pcc").checked==false)
					{
	document.getElementById("pp").disabled=true;
	document.getElementById("pq").disabled=true;
	document.getElementById("pd").disabled=true;
}
					
}
function burger()
{
		if(document.getElementById("bgc").checked==true)
					{
	document.getElementById("bp").disabled=false;
	document.getElementById("bq").disabled=false;
	document.getElementById("bd").disabled=false;
					}
if(document.getElementById("bgc").checked==false)
					{
	document.getElementById("bp").disabled=true;
	document.getElementById("bq").disabled=true;
	document.getElementById("bd").disabled=true;
}
					
}
function momos()
{
	if(document.getElementById("moc").checked==true)
{
	document.getElementById("mp").disabled=false;
	document.getElementById("mq").disabled=false;
	document.getElementById("md").disabled=false;
	}
if(document.getElementById("moc").checked==false)
					{
	document.getElementById("mp").disabled=true;
	document.getElementById("mq").disabled=true;
	document.getElementById("md").disabled=true;
}
}
function maggie()
{
	if(document.getElementById("mac").checked==true)
{
	document.getElementById("mgp").disabled=false;
	document.getElementById("mgq").disabled=false;
	document.getElementById("mgd").disabled=false;
}
if(document.getElementById("mac").checked==false)
					{
	document.getElementById("mgp").disabled=true;
	document.getElementById("mgq").disabled=true;
	document.getElementById("mgd").disabled=true;
}
}
function shake()
{
	if(document.getElementById("scc").checked==true)
{
	document.getElementById("sp").disabled=false;
	document.getElementById("sq").disabled=false;
	document.getElementById("sd").disabled=false;
}
if(document.getElementById("scc").checked==false)
					{
	document.getElementById("sp").disabled=true;
	document.getElementById("sq").disabled=true;
	document.getElementById("sd").disabled=true;
}
}
function dausa()
{
	if(document.getElementById("dcc").checked==true)
{
	document.getElementById("dp").disabled=false;
	document.getElementById("dq").disabled=false;
	document.getElementById("dd").disabled=false;
}
if(document.getElementById("dcc").checked==false)
					{
	document.getElementById("dp").disabled=true;
	document.getElementById("dq").disabled=true;
	document.getElementById("dd").disabled=true;
}
}
function chowmien()
{
		if(document.getElementById("ccc").checked==true)
{
	document.getElementById("cp").disabled=false;
	document.getElementById("cq").disabled=false;
	document.getElementById("cd").disabled=false;
}
if(document.getElementById("ccc").checked==false)
{
	document.getElementById("cp").disabled=true;
	document.getElementById("cq").disabled=true;
	document.getElementById("cd").disabled=true;
}
}
function pasta()
{
		if(document.getElementById("pac").checked==true)
{
	document.getElementById("psp").disabled=false;
	document.getElementById("psq").disabled=false;
	document.getElementById("psd").disabled=false;
}
if(document.getElementById("pac").checked==false)
					{
	document.getElementById("psp").disabled=true;
	document.getElementById("psq").disabled=true;
	document.getElementById("psd").disabled=true;
}
}
function drinks()
{
		if(document.getElementById("cdc").checked==true)
{
	document.getElementById("cdp").disabled=false;
	document.getElementById("cdq").disabled=false;
	document.getElementById("cdd").disabled=false;
}
if(document.getElementById("cdc").checked==false)
					{
	document.getElementById("cdp").disabled=true;
	document.getElementById("cdq").disabled=true;
	document.getElementById("cdd").disabled=true;
}
}

	function pizz()
				{
					pp=document.getElementById("pp").value;
					pt=pq*pp-pd;
					document.getElementById("pt").value=pt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}		

	function piz()
				{
					pq=document.getElementById("pq").value;
					pt=pq*pp-pd;
					document.getElementById("pt").value=pt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function pi()
				{
					pd=document.getElementById("pd").value;
					pt=pq*pp-pd;
					document.getElementById("pt").value=pt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}
	function burge()
				{	
					bp=document.getElementById("bp").value;
					bt=bq*bp-bd;
					document.getElementById("bt").value=bt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}		

	function burg()
				{
					bq=document.getElementById("bq").value;
					bt=bq*bp-bd;
					document.getElementById("bt").value=bt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function bur()
				{
					bd=document.getElementById("bd").value;
					bt=bq*bp-bd;
					document.getElementById("bt").value=bt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}
	function momo()
				{
					mp=document.getElementById("mp").value;
					mt=mq*mp-md;
					document.getElementById("mt").value=mt;	
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}		

	function mom()
				{
					mq=document.getElementById("mq").value;
					mt=mq*mp-md;
					document.getElementById("mt").value=mt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function mo()
				{
					md=document.getElementById("md").value;
					mt=mq*mp-md;
					document.getElementById("mt").value=mt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}
	function magg()
				{
					mgp=document.getElementById("mgp").value;
					mgt=mgq*mgp-mgd;
					document.getElementById("mgt").value=mgt;	
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;		
				}		

	function mag()
				{
					mgq=document.getElementById("mgq").value;
					mgt=mgq*mgp-mgd;
					document.getElementById("mgt").value=mgt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function ma()
{
			mgd=document.getElementById("mgd").value;
			mgt=mgq*mgp-mgd;
			document.getElementById("mgt").value=mgt;
			total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
			document.getElementById("total").value=total;
}




	function shak()
				{
					sp=document.getElementById("sp").value;
					st=sq*sp-sd;
					document.getElementById("st").value=st;		
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;	
				}		

	function sha()
				{
					sq=document.getElementById("sq").value;
					st=sq*sp-sd;
					document.getElementById("st").value=st;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function sh()
				{
					sd=document.getElementById("sd").value;
					st=sq*sp-sd;
					document.getElementById("st").value=st;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}
																	



	function daus()
				{
					dp=document.getElementById("dp").value;
					dt=dq*dp-dd;
					document.getElementById("dt").value=dt;		
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;	
				}		

	function dau()
				{
					dq=document.getElementById("dq").value;
					dt=dq*dp-dd;
					document.getElementById("dt").value=dt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function da()
				{
					dd=document.getElementById("dd").value;
					dt=dq*dp-dd;
					document.getElementById("dt").value=dt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}




	function chowmei()
				{
					cp=document.getElementById("cp").value;
					ct=cq*cp-cd;
					document.getElementById("ct").value=ct;		
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;	
				}		

	function chowme()
				{
					cq=document.getElementById("cq").value;
					ct=cq*cp-cd;
					document.getElementById("ct").value=ct;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function chowm()
				{
					cd=document.getElementById("cd").value;
					ct=cq*cp-cd;
					document.getElementById("ct").value=ct;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}


	function past()
				{
					psp=document.getElementById("psp").value;
					pst=psq*psp-psd;
					document.getElementById("pst").value=pst;	
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;		
				}		

	function pas()
				{
					psq=document.getElementById("psq").value;
					pst=psq*psp-psd;
					document.getElementById("pst").value=pst;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function pa()
				{
					psd=document.getElementById("psd").value;
					pst=psq*psp-psd;
					document.getElementById("pst").value=pst;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}


	function drin()
				{
					cdp=document.getElementById("cdp").value;
					cdt=cdq*cdp-cdd;
					document.getElementById("cdt").value=cdt;	
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;		
				}		

	function dri()
				{
					cdq=document.getElementById("cdq").value;
					cdt=cdq*cdp-cdd;
					document.getElementById("cdt").value=cdt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

	function dr()
				{
					cdd=document.getElementById("cdd").value;
					cdt=cdq*cdp-cdd;
					document.getElementById("cdt").value=cdt;
					total=pt+bt+mt+mgt+st+dt+ct+pst+cdt;
					document.getElementById("total").value=total;
				}

			function count()
			{
				  discount=document.getElementById("discount").value;
			
					if(document.getElementById("rs").selected==true)
				{
					
					pay=total-discount;
					document.getElementById("pay").value=pay;
				}
			
					if(document.getElementById("per").selected==true)
				{
					
					pay=total-total*discount/100;
					document.getElementById("pay").value=pay;
				}	 
			}

		function enter()
		{
			 var str = new String(document.getElementById("names").value);
         	 if(str.length>=10)
			{
				aa=pay-(pay*10/100);
				document.getElementById("len").value=aa;
			} 
			else
			{
					document.getElementById("len").value=pay;
			}
		}
		
		function phone()
		{
			xw=document.getElementById("numb").value;
			if(xw[0]==9)
			{
				bb=aa-(aa*9/100);
				document.getElementById("number").value=bb;
			}
			else if(xw[0]==6)                                                                                      
			{                                                                                                                                                  
				cc=aa-(aa*6/100);                                                                                       
				document.getElementById("number").value=cc;                                             
			}
			else 
			{
				document.getElementById("number").value=aa;
			}
		}
		
		
		function mal()
		{
			
			if(xw[0]==9)
			{
				document.getElementById("number").value=bb;
			}
			else if(xw[0]==6)                                                                                      
			{                                                                                                                                                  
				document.getElementById("number").value=cc;                                             
			}
			else
			{						
				document.getElementById("male").value=bb;													
			}
		}
		
		function femal()
		{
				
		}
		
		function othe()
		{
			
		}
		
		
		function reload()
		{
			window.location.reload();
		}
	
	
	function prin()
	{  																								
		window.print();																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																		
	}																															
		