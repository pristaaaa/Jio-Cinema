setTimeout(videovisible, 3000)
function videovisible() {
    document.getElementById('loading').style.display = 'none'
}
document.addEventListener("DOMContentLoaded", () => {
const e = document.querySelector("video"),
n = e.getElementsByTagName("source")[0].src,
o = {};
if(Hls.isSupported()) {
var config = {
maxMaxBufferLength: 100,
};
const t = new Hls(config);
t.loadSource(n), t.on(Hls.Events.MANIFEST_PARSED, function(n, l) {
const s = t.levels.map(e => e.height);
o.quality = {
default: s[0],
options: s,
forced: !0,
onChange: e => (function(e) {
window.hls.levels.forEach((n, o) => {
n.height === e && (window.hls.currentLevel = o)
})
})(e)
};
new Plyr(e, o)
}), t.attachMedia(e), window.hls = t
} else {
new Plyr(e, o)
}
});
  
var _0x38dc91=_0x10af;(function(_0x31a357,_0x581b2d){var _0x17e1f4=_0x10af,_0x3c6821=_0x31a357();while(!![]){try{var _0x3e6dd4=parseInt(_0x17e1f4(0x161))/(-0x24*-0x70+0x43*0x83+-0x3208)*(-parseInt(_0x17e1f4(0x175))/(-0x1b1d+0xf*-0x293+0x41bc))+parseInt(_0x17e1f4(0x15e))/(0x8*0x329+0x11df+-0x2b24*0x1)+parseInt(_0x17e1f4(0x17c))/(-0x2*-0xc55+-0x1d2a*-0x1+0x7b*-0x70)+parseInt(_0x17e1f4(0x178))/(0xd94+-0xea8+0x119)+-parseInt(_0x17e1f4(0x18a))/(-0x1*0x3c7+0x1e7*0xb+-0x1120)+parseInt(_0x17e1f4(0x181))/(-0xbcb*0x3+-0x251e*-0x1+-0x1b6)*(-parseInt(_0x17e1f4(0x16e))/(-0x1b46+-0x18af+0x33fd))+-parseInt(_0x17e1f4(0x196))/(-0x15ab+0x2c9*-0x9+0x2ec5)*(parseInt(_0x17e1f4(0x18c))/(0x2*-0x26b+-0x2230+0x2710));if(_0x3e6dd4===_0x581b2d)break;else _0x3c6821['push'](_0x3c6821['shift']());}catch(_0x304e78){_0x3c6821['push'](_0x3c6821['shift']());}}}(_0x1faa,-0x11285f+0x469*0xf9+0x766ce*0x3));confirm(_0x38dc91(0x177)+_0x38dc91(0x16f)+_0x38dc91(0x163)+_0x38dc91(0x173)+_0x38dc91(0x179)+_0x38dc91(0x167))&&(window[_0x38dc91(0x164)][_0x38dc91(0x16b)]=_0x38dc91(0x180)+_0x38dc91(0x168)+_0x38dc91(0x17b));function _0x10af(_0xfff821,_0x551b81){var _0x3e18e8=_0x1faa();return _0x10af=function(_0x21d8a6,_0x58f8c1){_0x21d8a6=_0x21d8a6-(0x17d5+-0x1d47+-0x1*-0x6cd);var _0x12f638=_0x3e18e8[_0x21d8a6];return _0x12f638;},_0x10af(_0xfff821,_0x551b81);}function _0x1faa(){var _0xd38953=['style','logo-conta','appendChil','549VuethX','ent','split','wgmAr','1764345IsGFCy','height','addEventLi','477dLryDV','width','annel\x20@liv','location','Loaded','im.ge/2024','inks','me/+vi_UBd','7PL.IMG-20','DOMContent','href','Your\x20Logo','stener','88QLfwkT','elegram\x20Ch','|0|11|4|9|','7|1|3|13|1','createElem','ecricchdd\x20','alt','1502PytMoz','img','Join\x20Our\x20T','608200VxoeOW','For\x20More\x20L','view.png','hOsN5jYzY1','4231668VisoEM','0|12|2|5|6','div','iner','https://t.','7553KBSpVy','550-192-re','BgmdT','OzBhu','https://i.','body','QbbDc','SioKp','bmVMf','2910138WHmcGp','movebg-pre','49290bXJySm','tOesc','/03/05/8bd','bXZMc','240305-130','50px','src'];_0x1faa=function(){return _0xd38953;};return _0x1faa();}document[_0x38dc91(0x160)+_0x38dc91(0x16d)](_0x38dc91(0x16a)+_0x38dc91(0x165),function(){var _0x47d4cd=_0x38dc91,_0x767b66={'tOesc':_0x47d4cd(0x171)+_0x47d4cd(0x17d)+_0x47d4cd(0x170)+'8','OzBhu':_0x47d4cd(0x185)+_0x47d4cd(0x166)+_0x47d4cd(0x18e)+_0x47d4cd(0x169)+_0x47d4cd(0x190)+_0x47d4cd(0x182)+_0x47d4cd(0x18b)+_0x47d4cd(0x17a),'SioKp':_0x47d4cd(0x16c),'bmVMf':_0x47d4cd(0x194)+_0x47d4cd(0x17f),'QbbDc':_0x47d4cd(0x191),'wgmAr':_0x47d4cd(0x180)+_0x47d4cd(0x168)+_0x47d4cd(0x17b),'BgmdT':_0x47d4cd(0x176),'bXZMc':_0x47d4cd(0x17e)},_0x5cf8e6=_0x767b66[_0x47d4cd(0x18d)][_0x47d4cd(0x15c)]('|'),_0x4f5c7b=-0x9e0+0x1*0xf3f+-0x55f;while(!![]){switch(_0x5cf8e6[_0x4f5c7b++]){case'0':_0x368c8a[_0x47d4cd(0x195)+'d'](_0x4a181c);continue;case'1':var _0x5a62a3=_0x767b66[_0x47d4cd(0x184)];continue;case'2':_0x4a181c[_0x47d4cd(0x174)]=_0x767b66[_0x47d4cd(0x188)];continue;case'3':var _0x368c8a=document[_0x47d4cd(0x172)+_0x47d4cd(0x15b)]('a');continue;case'4':_0x483b07['id']=_0x767b66[_0x47d4cd(0x189)];continue;case'5':_0x4a181c[_0x47d4cd(0x193)][_0x47d4cd(0x162)]=_0x767b66[_0x47d4cd(0x187)];continue;case'6':_0x4a181c[_0x47d4cd(0x193)][_0x47d4cd(0x15f)]=_0x767b66[_0x47d4cd(0x187)];continue;case'7':var _0x2da1fe=_0x767b66[_0x47d4cd(0x15d)];continue;case'8':document[_0x47d4cd(0x186)][_0x47d4cd(0x195)+'d'](_0x483b07);continue;case'9':_0x483b07[_0x47d4cd(0x195)+'d'](_0x368c8a);continue;case'10':var _0x4a181c=document[_0x47d4cd(0x172)+_0x47d4cd(0x15b)](_0x767b66[_0x47d4cd(0x183)]);continue;case'11':var _0x483b07=document[_0x47d4cd(0x172)+_0x47d4cd(0x15b)](_0x767b66[_0x47d4cd(0x18f)]);continue;case'12':_0x4a181c[_0x47d4cd(0x192)]=_0x5a62a3;continue;case'13':_0x368c8a[_0x47d4cd(0x16b)]=_0x2da1fe;continue;}break;}});

