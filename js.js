/**
 * Created by Administrator on 2015/11/4.
 */
var oPicList = document.getElementById('picList');
var oCss = document.getElementById('css');
var aPic = [];
var iZindex = 0 ;
var iStyle = '';
var iLiW = 25;
var iNum = oPicList.clientWidth / iLiW;
var iHtml = '';
var oBtns = document.getElementById('btns');
var aBtns = oBtns.getElementsByTagName('li');
var iNow = 0;
for(var i = 0; i < iNum; i++){
    i>iNum/2 ? iZindex-- : iZindex++;
    iStyle += '#picList li:nth-of-type('+ (i+1) +'){z-index: '+ iZindex +';}';
    iStyle += '#picList li:nth-of-type('+ (i+1) +') a{  background-position:-'+ (i*iLiW) +'px 0;}';
    iHtml+='<li> <a href="#"></a> <a href="#"></a> <a href="#"></a> <a href="#"></a> <span></span> <span></span> </li>';
}
oPicList.innerHTML = iHtml;
oCss.innerHTML += iStyle;
aPic = oPicList.getElementsByTagName('li');
for(var i = 0; i<aBtns.length; i++){
    aBtns[i].onclick = (function (a) {
        return function () {
            aBtns[iNow].className = '';
            for(var j = 0; j<aPic.length; j++){
                with (aPic[j].style){
                    WebkiTransform = 'translateZ(-180px) rotateX(-' + a*90 + 'deg)';
                    MozTransform = 'translateZ(-180px) rotateX(-' + a*90 + 'deg)';
                    MsTransform = 'translateZ(-180px) rotateX(-' + a*90 + 'deg)';
                    OTransform = 'translateZ(-180px) rotateX(-' + a*90 + 'deg)';
                    transform = 'translateZ(-180px) rotateX(-' + a*90 + 'deg)';
                }
                with(aPic[j].style){
                    WebkitTransition = 'all ' + Math.abs(iNow-a)*0.5 + 's '+ j*50 +'ms ease-in-out';
                    MozTransition = 'all ' + Math.abs(iNow-a)*0.5 + 's '+ j*50 +'ms ease-in-out';
                    MsTransition = 'all ' + Math.abs(iNow-a)*0.5 + 's '+ j*50 +'ms ease-in-out';
                    OTransition = 'all ' + Math.abs(iNow-a)*0.5 + 's '+ j*50 +'ms ease-in-out';
                    Transition = 'all ' + Math.abs(iNow-a)*0.5 + 's '+ j*50 +'ms ease-in-out';
                }
            }
            this.className = 'active';
            iNow = a;
        }

    })(i);
}