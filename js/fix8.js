// ���ͼƬ�л� //
document.writeln("<div id=\"adpic\">");
document.writeln("                        <img src=\"images/pic01.jpg\" style=\"display:none\">");
document.writeln("                        <img src=\"images/pic02.jpg\" style=\"display:none\">");
document.writeln("                        <img src=\"images/pic03.jpg\" style=\"display:none\">");
document.writeln("                        <img src=\"images/pic04.jpg\" style=\"display:none\">");
document.writeln("                   </div>");
document.writeln("                   <script language=\"JavaScript\" type=\"text/javascript\">");
document.writeln("                   <!--");
document.writeln("                    function runad()");
document.writeln("                        {");
document.writeln("                         var ads=document.getElementById(\"adpic\").getElementsByTagName(\"img\")");
document.writeln("                         for(var i=0,adsc=ads.length;i<adsc;i++)");
document.writeln("                         {");
document.writeln("                          ads[i].style.display=\'none\';");
document.writeln("                         }");
document.writeln("                         ads[parseInt(Math.random()*ads.length)].style.display=\'\';");
document.writeln("                        }");
document.writeln("                        function run()");
document.writeln("                        {");
document.writeln("                         //���ִ�к���");
document.writeln("                          runad();");
document.writeln("                        }");
document.writeln("                        window.onload=run");
document.writeln("                   //-->");
document.writeln("                   </script>");




// ������ //

//**������������*****
var BROWSERNAME="";
switch(navigator.appName.toLowerCase()){
 case "netscape":
  BROWSERNAME="ns";
 break;
 case "microsoft internet explorer":
 default:
  BROWSERNAME="ie";
 break;
}

//**���ó�ʼ���¼�******
switch(BROWSERNAME){
 case "ns":
  window.addEventListener("load",_xScrollStick_init,false);
 break;
 case "ie":
 default:
  window.attachEvent("onload",_xScrollStick_init);
}

//**��ʼ������******
function _xScrollStick_init(){
 var allTheScrollSticks=document.getElementsByTagName("div");
 for(var i=0;i<allTheScrollSticks.length;i++){
  if(allTheScrollSticks[i].className.match(/^((xScrollStick)|(.+ +xScrollStick)|(xScrollStick +.+)|(.+ +xScrollStick +.+))$/))_xScrollStick_event_doInit(allTheScrollSticks[i]);
 }
 window_event_scroll();
}


//**�¼���Ӧ������******

function _xScrollStick_event_doInit(element){
 //��ʼ������
 element.offX=element.offsetLeft;
 element.offY=element.offsetTop;
 
 //���÷���
 element.Stick=_xScrollStick_method_Stick;
 
 //�����¼�
 switch(BROWSERNAME){
  case "ns":
   window.addEventListener("scroll",window_event_scroll,false);
  break;
  case "ie":
  default:
   window.attachEvent("onscroll",window_event_scroll);
 }
 
 //��ȡ����
 //��
 document.body.parentNode.onscroll=window_event_scroll;

}

function window_event_scroll(){
 var allTheScrollSticks=document.getElementsByTagName("div");
 for(var i=0;i<allTheScrollSticks.length;i++){
  if(allTheScrollSticks[i].className.match(/^((xScrollStick)|(.+ +xScrollStick)|(xScrollStick +.+)|(.+ +xScrollStick +.+))$/))try{allTheScrollSticks[i].Stick();}catch(e){}
 }
}

//**����������******
function _xScrollStick_method_Stick(){
 var x=this.offX, y=this.offY, po=this;
 this.style.position="absolute";
 x+=document.body.parentNode.scrollLeft;
 y+=document.body.parentNode.scrollTop;
 this.style.left=x+"px";
 this.style.top=y+"px";
 
}