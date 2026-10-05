(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const qi="156",ci={ROTATE:0,DOLLY:1,PAN:2},ui={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Pu=0,to=1,Cu=2,fc=1,Lu=2,bn=3,hn=0,At=1,Ot=2,ft=0,Di=1,no=2,io=3,ro=4,Du=5,Pi=100,Iu=101,Uu=102,so=103,ao=104,Nu=200,Fu=201,Ou=202,Bu=203,dc=204,pc=205,zu=206,Hu=207,Gu=208,ku=209,Vu=210,Wu=0,Xu=1,ju=2,fa=3,qu=4,Yu=5,Ku=6,Zu=7,mc=0,$u=1,Ju=2,Vn=0,Qu=1,eh=2,th=3,gc=4,nh=5,vc=300,Fi=301,Oi=302,pr=303,da=304,hs=306,fn=1e3,xt=1001,rs=1002,be=1003,pa=1004,ts=1005,Ke=1006,_c=1007,Cn=1008,ma=1008,Pt=1009,ih=1010,rh=1011,Ca=1012,xc=1013,An=1014,ke=1015,jt=1016,Mc=1017,Sc=1018,Wn=1020,sh=1021,Mt=1023,ah=1024,oh=1025,si=1026,oi=1027,ga=1028,Tc=1029,lh=1030,yc=1031,Ec=1033,bs=33776,ws=33777,As=33778,Rs=33779,oo=35840,lo=35841,co=35842,uo=35843,ch=36196,ho=37492,fo=37496,po=37808,mo=37809,go=37810,vo=37811,_o=37812,xo=37813,Mo=37814,So=37815,To=37816,yo=37817,Eo=37818,bo=37819,wo=37820,Ao=37821,Ps=36492,Ro=36494,Po=36495,uh=36283,Co=36284,Lo=36285,Do=36286,mr=2300,Bi=2301,Cs=2302,Io=2400,Uo=2401,No=2402,hh=2500,fh=0,bc=1,va=2,fs=3e3,un=3001,_r=3200,dh=3201,La=0,ph=1,Xn="",Ye="srgb",pt="srgb-linear",ds="display-p3",Ls=7680,mh=519,gh=512,vh=513,_h=514,xh=515,Mh=516,Sh=517,Th=518,yh=519,_a=35044,ss="300 es",xa=1035,Rn=2e3,as=2001;class dn{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const Ct=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Fo=1234567;const ur=Math.PI/180,zi=180/Math.PI;function an(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ct[i&255]+Ct[i>>8&255]+Ct[i>>16&255]+Ct[i>>24&255]+"-"+Ct[e&255]+Ct[e>>8&255]+"-"+Ct[e>>16&15|64]+Ct[e>>24&255]+"-"+Ct[t&63|128]+Ct[t>>8&255]+"-"+Ct[t>>16&255]+Ct[t>>24&255]+Ct[n&255]+Ct[n>>8&255]+Ct[n>>16&255]+Ct[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Da(i,e){return(i%e+e)%e}function Eh(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function bh(i,e,t){return i!==e?(t-i)/(e-i):0}function hr(i,e,t){return(1-t)*i+t*e}function wh(i,e,t,n){return hr(i,e,1-Math.exp(-t*n))}function Ah(i,e=1){return e-Math.abs(Da(i,e*2)-e)}function Rh(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Ph(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Ch(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Lh(i,e){return i+Math.random()*(e-i)}function Dh(i){return i*(.5-Math.random())}function Ih(i){i!==void 0&&(Fo=i);let e=Fo+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Uh(i){return i*ur}function Nh(i){return i*zi}function Ma(i){return(i&i-1)===0&&i!==0}function wc(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function os(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Fh(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),f=a((e-n)/2),p=s((n-e)/2),g=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*f,o*c);break;case"YZY":i.set(l*f,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*f,o*u,o*c);break;case"XZX":i.set(o*u,l*g,l*p,o*c);break;case"YXY":i.set(l*p,o*u,l*g,o*c);break;case"ZYZ":i.set(l*g,l*p,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function cn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Qe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ac={DEG2RAD:ur,RAD2DEG:zi,generateUUID:an,clamp:wt,euclideanModulo:Da,mapLinear:Eh,inverseLerp:bh,lerp:hr,damp:wh,pingpong:Ah,smoothstep:Rh,smootherstep:Ph,randInt:Ch,randFloat:Lh,randFloatSpread:Dh,seededRandom:Ih,degToRad:Uh,radToDeg:Nh,isPowerOfTwo:Ma,ceilPowerOfTwo:wc,floorPowerOfTwo:os,setQuaternionFromProperEuler:Fh,normalize:Qe,denormalize:cn};class me{constructor(e=0,t=0){me.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Fe{constructor(e,t,n,r,s,a,o,l,c){Fe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],p=n[5],g=n[8],v=r[0],m=r[3],d=r[6],S=r[1],_=r[4],T=r[7],R=r[2],w=r[5],b=r[8];return s[0]=a*v+o*S+l*R,s[3]=a*m+o*_+l*w,s[6]=a*d+o*T+l*b,s[1]=c*v+u*S+h*R,s[4]=c*m+u*_+h*w,s[7]=c*d+u*T+h*b,s[2]=f*v+p*S+g*R,s[5]=f*m+p*_+g*w,s[8]=f*d+p*T+g*b,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,f=o*l-u*s,p=c*s-a*l,g=t*h+n*f+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=f*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Ds.makeScale(e,t)),this}rotate(e){return this.premultiply(Ds.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ds.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ds=new Fe;function Rc(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Oh(){const i=gr("canvas");return i.style.display="block",i}const Oo={};function fr(i){i in Oo||(Oo[i]=!0,console.warn(i))}function Ii(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Is(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Bh=new Fe().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),zh=new Fe().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function Hh(i){return i.convertSRGBToLinear().applyMatrix3(zh)}function Gh(i){return i.applyMatrix3(Bh).convertLinearToSRGB()}const kh={[pt]:i=>i,[Ye]:i=>i.convertSRGBToLinear(),[ds]:Hh},Vh={[pt]:i=>i,[Ye]:i=>i.convertLinearToSRGB(),[ds]:Gh},Vt={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(i){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!i},get workingColorSpace(){return pt},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=kh[e],r=Vh[t];if(n===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}};let hi;class Pc{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{hi===void 0&&(hi=gr("canvas")),hi.width=e.width,hi.height=e.height;const n=hi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=hi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Ii(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ii(t[n]/255)*255):t[n]=Ii(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Wh=0;class Cc{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Wh++}),this.uuid=an(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Us(r[a].image)):s.push(Us(r[a]))}else s=Us(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Us(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Pc.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Xh=0;class dt extends dn{constructor(e=dt.DEFAULT_IMAGE,t=dt.DEFAULT_MAPPING,n=xt,r=xt,s=Ke,a=Cn,o=Mt,l=Pt,c=dt.DEFAULT_ANISOTROPY,u=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Xh++}),this.uuid=an(),this.name="",this.source=new Cc(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new me(0,0),this.repeat=new me(1,1),this.center=new me(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Fe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===un?Ye:Xn),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fn:e.x=e.x-Math.floor(e.x);break;case xt:e.x=e.x<0?0:1;break;case rs:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fn:e.y=e.y-Math.floor(e.y);break;case xt:e.y=e.y<0?0:1;break;case rs:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Ye?un:fs}set encoding(e){fr("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===un?Ye:Xn}}dt.DEFAULT_IMAGE=null;dt.DEFAULT_MAPPING=vc;dt.DEFAULT_ANISOTROPY=1;class Je{constructor(e=0,t=0,n=0,r=1){Je.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],f=l[1],p=l[5],g=l[9],v=l[2],m=l[6],d=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const _=(c+1)/2,T=(p+1)/2,R=(d+1)/2,w=(u+f)/4,b=(h+v)/4,D=(g+m)/4;return _>T&&_>R?_<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(_),r=w/n,s=b/n):T>R?T<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(T),n=w/r,s=D/r):R<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(R),n=b/s,r=D/s),this.set(n,r,s,t),this}let S=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(f-u)*(f-u));return Math.abs(S)<.001&&(S=1),this.x=(m-g)/S,this.y=(h-v)/S,this.z=(f-u)/S,this.w=Math.acos((c+p+d-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class jh extends dn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Je(0,0,e,t),this.scissorTest=!1,this.viewport=new Je(0,0,e,t);const r={width:e,height:t,depth:1};n.encoding!==void 0&&(fr("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===un?Ye:Xn),this.texture=new dt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ke,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Cc(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class tt extends jh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Lc extends dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class dr extends dt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=be,this.minFilter=be,this.wrapR=xt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Sa extends tt{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLMultipleRenderTargets=!0;const s=this.texture;this.texture=[];for(let a=0;a<n;a++)this.texture[a]=s.clone(),this.texture[a].isRenderTargetTexture=!0}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.texture.length;r<s;r++)this.texture[r].image.width=e,this.texture[r].image.height=t,this.texture[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}copy(e){this.dispose(),this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.texture.length=0;for(let t=0,n=e.texture.length;t<n;t++)this.texture[t]=e.texture[t].clone(),this.texture[t].isRenderTargetTexture=!0;return this}}class Jt{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const f=s[a+0],p=s[a+1],g=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==f||c!==p||u!==g){let m=1-o;const d=l*f+c*p+u*g+h*v,S=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const R=Math.sqrt(_),w=Math.atan2(R,d*S);m=Math.sin(m*w)/R,o=Math.sin(o*w)/R}const T=o*S;if(l=l*m+f*T,c=c*m+p*T,u=u*m+g*T,h=h*m+v*T,m===1-o){const R=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=R,c*=R,u*=R,h*=R}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],f=s[a+1],p=s[a+2],g=s[a+3];return e[t]=o*g+u*h+l*p-c*f,e[t+1]=l*g+u*f+c*h-o*p,e[t+2]=c*g+u*p+o*f-l*h,e[t+3]=u*g-o*h-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),f=l(n/2),p=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"YXZ":this._x=f*u*h+c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"ZXY":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h-f*p*g;break;case"ZYX":this._x=f*u*h-c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h+f*p*g;break;case"YZX":this._x=f*u*h+c*p*g,this._y=c*p*h+f*u*g,this._z=c*u*g-f*p*h,this._w=c*u*h-f*p*g;break;case"XZY":this._x=f*u*h-c*p*g,this._y=c*p*h-f*u*g,this._z=c*u*g+f*p*h,this._w=c*u*h+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],f=n+o+h;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(a-r)*p}else if(n>o&&n>h){const p=2*Math.sqrt(1+n-o-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+a)/p,this._z=(s+c)/p}else if(o>h){const p=2*Math.sqrt(1+o-n-h);this._w=(s-c)/p,this._x=(r+a)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-o);this._w=(a-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*a+t*this._w,this._x=p*n+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,f=Math.sin(t*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=r*h+this._y*f,this._z=s*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class C{constructor(e=0,t=0,n=0){C.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Bo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Bo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=l*t+a*r-o*n,u=l*n+o*t-s*r,h=l*r+s*n-a*t,f=-s*t-a*n-o*r;return this.x=c*l+f*-s+u*-o-h*-a,this.y=u*l+f*-a+h*-s-c*-o,this.z=h*l+f*-o+c*-a-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Ns.copy(this).projectOnVector(e),this.sub(Ns)}reflect(e){return this.sub(Ns.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ns=new C,Bo=new Jt;class pn{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(xn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(xn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=xn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fi.copy(e.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let a=0,o=s.count;a<o;a++)xn.fromBufferAttribute(s,a).applyMatrix4(e.matrixWorld),this.expandByPoint(xn)}else r.boundingBox===null&&r.computeBoundingBox(),fi.copy(r.boundingBox),fi.applyMatrix4(e.matrixWorld),this.union(fi)}const n=e.children;for(let r=0,s=n.length;r<s;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,xn),xn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(er),br.subVectors(this.max,er),di.subVectors(e.a,er),pi.subVectors(e.b,er),mi.subVectors(e.c,er),In.subVectors(pi,di),Un.subVectors(mi,pi),Zn.subVectors(di,mi);let t=[0,-In.z,In.y,0,-Un.z,Un.y,0,-Zn.z,Zn.y,In.z,0,-In.x,Un.z,0,-Un.x,Zn.z,0,-Zn.x,-In.y,In.x,0,-Un.y,Un.x,0,-Zn.y,Zn.x,0];return!Fs(t,di,pi,mi,br)||(t=[1,0,0,0,1,0,0,0,1],!Fs(t,di,pi,mi,br))?!1:(wr.crossVectors(In,Un),t=[wr.x,wr.y,wr.z],Fs(t,di,pi,mi,br))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,xn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(xn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_n[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_n[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_n[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_n[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_n[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_n[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_n[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_n[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_n),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const _n=[new C,new C,new C,new C,new C,new C,new C,new C],xn=new C,fi=new pn,di=new C,pi=new C,mi=new C,In=new C,Un=new C,Zn=new C,er=new C,br=new C,wr=new C,$n=new C;function Fs(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){$n.fromArray(i,s);const o=r.x*Math.abs($n.x)+r.y*Math.abs($n.y)+r.z*Math.abs($n.z),l=e.dot($n),c=t.dot($n),u=n.dot($n);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const qh=new pn,tr=new C,Os=new C;class mn{constructor(e=new C,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):qh.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;tr.subVectors(e,this.center);const t=tr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(tr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Os.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(tr.copy(e.center).add(Os)),this.expandByPoint(tr.copy(e.center).sub(Os))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mn=new C,Bs=new C,Ar=new C,Nn=new C,zs=new C,Rr=new C,Hs=new C;class xr{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Mn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Mn.copy(this.origin).addScaledVector(this.direction,t),Mn.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){Bs.copy(e).add(t).multiplyScalar(.5),Ar.copy(t).sub(e).normalize(),Nn.copy(this.origin).sub(Bs);const s=e.distanceTo(t)*.5,a=-this.direction.dot(Ar),o=Nn.dot(this.direction),l=-Nn.dot(Ar),c=Nn.lengthSq(),u=Math.abs(1-a*a);let h,f,p,g;if(u>0)if(h=a*l-o,f=a*o-l,g=s*u,h>=0)if(f>=-g)if(f<=g){const v=1/u;h*=v,f*=v,p=h*(h+a*f+2*o)+f*(a*h+f+2*l)+c}else f=s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;else f<=-g?(h=Math.max(0,-(-a*s+o)),f=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c):f<=g?(h=0,f=Math.min(Math.max(-s,-l),s),p=f*(f+2*l)+c):(h=Math.max(0,-(a*s+o)),f=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+f*(f+2*l)+c);else f=a>0?-s:s,h=Math.max(0,-(a*f+o)),p=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Bs).addScaledVector(Ar,f),p}intersectSphere(e,t){Mn.subVectors(e.center,this.origin);const n=Mn.dot(this.direction),r=Mn.dot(Mn)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,r=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,r=(e.min.x-f.x)*c),u>=0?(s=(e.min.y-f.y)*u,a=(e.max.y-f.y)*u):(s=(e.max.y-f.y)*u,a=(e.min.y-f.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-f.z)*h,l=(e.max.z-f.z)*h):(o=(e.max.z-f.z)*h,l=(e.min.z-f.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Mn)!==null}intersectTriangle(e,t,n,r,s){zs.subVectors(t,e),Rr.subVectors(n,e),Hs.crossVectors(zs,Rr);let a=this.direction.dot(Hs),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Nn.subVectors(this.origin,e);const l=o*this.direction.dot(Rr.crossVectors(Nn,Rr));if(l<0)return null;const c=o*this.direction.dot(zs.cross(Nn));if(c<0||l+c>a)return null;const u=-o*Nn.dot(Hs);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _e{constructor(e,t,n,r,s,a,o,l,c,u,h,f,p,g,v,m){_e.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,v,m)}set(e,t,n,r,s,a,o,l,c,u,h,f,p,g,v,m){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=r,d[1]=s,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=u,d[10]=h,d[14]=f,d[3]=p,d[7]=g,d[11]=v,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _e().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/gi.setFromMatrixColumn(e,0).length(),s=1/gi.setFromMatrixColumn(e,1).length(),a=1/gi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f+v*o,t[4]=g*o-p,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=p*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*u,p=l*h,g=c*u,v=c*h;t[0]=f-v*o,t[4]=-a*h,t[8]=g+p*o,t[1]=p+g*o,t[5]=a*u,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*u,p=a*h,g=o*u,v=o*h;t[0]=l*u,t[4]=g*c-p,t[8]=f*c+v,t[1]=l*h,t[5]=v*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=v-f*h,t[8]=g*h+p,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=p*h+g,t[10]=f-v*h}else if(e.order==="XZY"){const f=a*l,p=a*c,g=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=f*h+v,t[5]=a*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=o*u,t[10]=v*h+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yh,e,Kh)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Fn.crossVectors(n,Gt),Fn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Fn.crossVectors(n,Gt)),Fn.normalize(),Pr.crossVectors(Gt,Fn),r[0]=Fn.x,r[4]=Pr.x,r[8]=Gt.x,r[1]=Fn.y,r[5]=Pr.y,r[9]=Gt.y,r[2]=Fn.z,r[6]=Pr.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],p=n[13],g=n[2],v=n[6],m=n[10],d=n[14],S=n[3],_=n[7],T=n[11],R=n[15],w=r[0],b=r[4],D=r[8],x=r[12],y=r[1],k=r[5],q=r[9],I=r[13],N=r[2],F=r[6],U=r[10],B=r[14],Y=r[3],ee=r[7],$=r[11],V=r[15];return s[0]=a*w+o*y+l*N+c*Y,s[4]=a*b+o*k+l*F+c*ee,s[8]=a*D+o*q+l*U+c*$,s[12]=a*x+o*I+l*B+c*V,s[1]=u*w+h*y+f*N+p*Y,s[5]=u*b+h*k+f*F+p*ee,s[9]=u*D+h*q+f*U+p*$,s[13]=u*x+h*I+f*B+p*V,s[2]=g*w+v*y+m*N+d*Y,s[6]=g*b+v*k+m*F+d*ee,s[10]=g*D+v*q+m*U+d*$,s[14]=g*x+v*I+m*B+d*V,s[3]=S*w+_*y+T*N+R*Y,s[7]=S*b+_*k+T*F+R*ee,s[11]=S*D+_*q+T*U+R*$,s[15]=S*x+_*I+T*B+R*V,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],f=e[10],p=e[14],g=e[3],v=e[7],m=e[11],d=e[15];return g*(+s*l*h-r*c*h-s*o*f+n*c*f+r*o*p-n*l*p)+v*(+t*l*p-t*c*f+s*a*f-r*a*p+r*c*u-s*l*u)+m*(+t*c*h-t*o*p-s*a*h+n*a*p+s*o*u-n*c*u)+d*(-r*o*u-t*l*h+t*o*f+r*a*h-n*a*f+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],f=e[10],p=e[11],g=e[12],v=e[13],m=e[14],d=e[15],S=h*m*c-v*f*c+v*l*p-o*m*p-h*l*d+o*f*d,_=g*f*c-u*m*c-g*l*p+a*m*p+u*l*d-a*f*d,T=u*v*c-g*h*c+g*o*p-a*v*p-u*o*d+a*h*d,R=g*h*l-u*v*l-g*o*f+a*v*f+u*o*m-a*h*m,w=t*S+n*_+r*T+s*R;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=S*b,e[1]=(v*f*s-h*m*s-v*r*p+n*m*p+h*r*d-n*f*d)*b,e[2]=(o*m*s-v*l*s+v*r*c-n*m*c-o*r*d+n*l*d)*b,e[3]=(h*l*s-o*f*s-h*r*c+n*f*c+o*r*p-n*l*p)*b,e[4]=_*b,e[5]=(u*m*s-g*f*s+g*r*p-t*m*p-u*r*d+t*f*d)*b,e[6]=(g*l*s-a*m*s-g*r*c+t*m*c+a*r*d-t*l*d)*b,e[7]=(a*f*s-u*l*s+u*r*c-t*f*c-a*r*p+t*l*p)*b,e[8]=T*b,e[9]=(g*h*s-u*v*s-g*n*p+t*v*p+u*n*d-t*h*d)*b,e[10]=(a*v*s-g*o*s+g*n*c-t*v*c-a*n*d+t*o*d)*b,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*p-t*o*p)*b,e[12]=R*b,e[13]=(u*v*r-g*h*r+g*n*f-t*v*f-u*n*m+t*h*m)*b,e[14]=(g*o*r-a*v*r-g*n*l+t*v*l+a*n*m-t*o*m)*b,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*f+t*o*f)*b,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,f=s*c,p=s*u,g=s*h,v=a*u,m=a*h,d=o*h,S=l*c,_=l*u,T=l*h,R=n.x,w=n.y,b=n.z;return r[0]=(1-(v+d))*R,r[1]=(p+T)*R,r[2]=(g-_)*R,r[3]=0,r[4]=(p-T)*w,r[5]=(1-(f+d))*w,r[6]=(m+S)*w,r[7]=0,r[8]=(g+_)*b,r[9]=(m-S)*b,r[10]=(1-(f+v))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=gi.set(r[0],r[1],r[2]).length();const a=gi.set(r[4],r[5],r[6]).length(),o=gi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],en.copy(this);const c=1/s,u=1/a,h=1/o;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=u,en.elements[5]*=u,en.elements[6]*=u,en.elements[8]*=h,en.elements[9]*=h,en.elements[10]*=h,t.setFromRotationMatrix(en),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Rn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),f=(n+r)/(n-r);let p,g;if(o===Rn)p=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===as)p=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Rn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),f=(t+e)*c,p=(n+r)*u;let g,v;if(o===Rn)g=(a+s)*h,v=-2*h;else if(o===as)g=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gi=new C,en=new _e,Yh=new C(0,0,0),Kh=new C(1,1,1),Fn=new C,Pr=new C,Gt=new C,zo=new _e,Ho=new Jt;class ps{constructor(e=0,t=0,n=0,r=ps.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],f=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return zo.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zo,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ho.setFromEuler(this),this.setFromQuaternion(Ho,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ps.DEFAULT_ORDER="XYZ";class Dc{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Zh=0;const Go=new C,vi=new Jt,Sn=new _e,Cr=new C,nr=new C,$h=new C,Jh=new Jt,ko=new C(1,0,0),Vo=new C(0,1,0),Wo=new C(0,0,1),Qh={type:"added"},ef={type:"removed"};class rt extends dn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Zh++}),this.uuid=an(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=rt.DEFAULT_UP.clone();const e=new C,t=new ps,n=new Jt,r=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new _e},normalMatrix:{value:new Fe}}),this.matrix=new _e,this.matrixWorld=new _e,this.matrixAutoUpdate=rt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Dc,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.multiply(vi),this}rotateOnWorldAxis(e,t){return vi.setFromAxisAngle(e,t),this.quaternion.premultiply(vi),this}rotateX(e){return this.rotateOnAxis(ko,e)}rotateY(e){return this.rotateOnAxis(Vo,e)}rotateZ(e){return this.rotateOnAxis(Wo,e)}translateOnAxis(e,t){return Go.copy(e).applyQuaternion(this.quaternion),this.position.add(Go.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ko,e)}translateY(e){return this.translateOnAxis(Vo,e)}translateZ(e){return this.translateOnAxis(Wo,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Sn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Cr.copy(e):Cr.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),nr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Sn.lookAt(nr,Cr,this.up):Sn.lookAt(Cr,nr,this.up),this.quaternion.setFromRotationMatrix(Sn),r&&(Sn.extractRotation(r.matrixWorld),vi.setFromRotationMatrix(Sn),this.quaternion.premultiply(vi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Qh)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ef)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Sn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Sn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Sn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t){let n=[];this[e]===t&&n.push(this);for(let r=0,s=this.children.length;r<s;r++){const a=this.children[r].getObjectsByProperty(e,t);a.length>0&&(n=n.concat(a))}return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,e,$h),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(nr,Jh,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),f=a(e.skeletons),p=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}rt.DEFAULT_UP=new C(0,1,0);rt.DEFAULT_MATRIX_AUTO_UPDATE=!0;rt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const tn=new C,Tn=new C,Gs=new C,yn=new C,_i=new C,xi=new C,Xo=new C,ks=new C,Vs=new C,Ws=new C;let Lr=!1;class sn{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),tn.subVectors(e,t),r.cross(tn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){tn.subVectors(r,t),Tn.subVectors(n,t),Gs.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(Tn),l=tn.dot(Gs),c=Tn.dot(Tn),u=Tn.dot(Gs),h=a*c-o*o;if(h===0)return s.set(-2,-1,-1);const f=1/h,p=(c*l-o*u)*f,g=(a*u-o*l)*f;return s.set(1-p-g,g,p)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,yn),yn.x>=0&&yn.y>=0&&yn.x+yn.y<=1}static getUV(e,t,n,r,s,a,o,l){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),this.getInterpolation(e,t,n,r,s,a,o,l)}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,yn),l.setScalar(0),l.addScaledVector(s,yn.x),l.addScaledVector(a,yn.y),l.addScaledVector(o,yn.z),l}static isFrontFacing(e,t,n,r){return tn.subVectors(n,t),Tn.subVectors(e,t),tn.cross(Tn).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),tn.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return sn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Lr===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Lr=!0),sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}getInterpolation(e,t,n,r,s){return sn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;_i.subVectors(r,n),xi.subVectors(s,n),ks.subVectors(e,n);const l=_i.dot(ks),c=xi.dot(ks);if(l<=0&&c<=0)return t.copy(n);Vs.subVectors(e,r);const u=_i.dot(Vs),h=xi.dot(Vs);if(u>=0&&h<=u)return t.copy(r);const f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(_i,a);Ws.subVectors(e,s);const p=_i.dot(Ws),g=xi.dot(Ws);if(g>=0&&p<=g)return t.copy(s);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(xi,o);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Xo.subVectors(s,r),o=(h-u)/(h-u+(p-g)),t.copy(r).addScaledVector(Xo,o);const d=1/(m+v+f);return a=v*d,o=f*d,t.copy(n).addScaledVector(_i,a).addScaledVector(xi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let tf=0;class Yt extends dn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:tf++}),this.uuid=an(),this.name="",this.type="Material",this.blending=Di,this.side=hn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dc,this.blendDst=pc,this.blendEquation=Pi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=fa,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ls,this.stencilZFail=Ls,this.stencilZPass=Ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Di&&(n.blending=this.blending),this.side!==hn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=this.alphaHash),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ic={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nn={h:0,s:0,l:0},Dr={h:0,s:0,l:0};function Xs(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ye){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Vt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Vt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Vt.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Vt.workingColorSpace){if(e=Da(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Xs(a,s,e+1/3),this.g=Xs(a,s,e),this.b=Xs(a,s,e-1/3)}return Vt.toWorkingColorSpace(this,r),this}setStyle(e,t=Ye){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ye){const n=Ic[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ii(e.r),this.g=Ii(e.g),this.b=Ii(e.b),this}copyLinearToSRGB(e){return this.r=Is(e.r),this.g=Is(e.g),this.b=Is(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ye){return Vt.fromWorkingColorSpace(Lt.copy(this),e),Math.round(wt(Lt.r*255,0,255))*65536+Math.round(wt(Lt.g*255,0,255))*256+Math.round(wt(Lt.b*255,0,255))}getHexString(e=Ye){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Vt.workingColorSpace){Vt.fromWorkingColorSpace(Lt.copy(this),t);const n=Lt.r,r=Lt.g,s=Lt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=Vt.workingColorSpace){return Vt.fromWorkingColorSpace(Lt.copy(this),t),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=Ye){Vt.fromWorkingColorSpace(Lt.copy(this),e);const t=Lt.r,n=Lt.g,r=Lt.b;return e!==Ye?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(nn),nn.h+=e,nn.s+=t,nn.l+=n,this.setHSL(nn.h,nn.s,nn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(nn),e.getHSL(Dr);const n=hr(nn.h,Dr.h,t),r=hr(nn.s,Dr.s,t),s=hr(nn.l,Dr.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new xe;xe.NAMES=Ic;class ii extends Yt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const wn=nf();function nf(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function rf(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=wt(i,-65504,65504),wn.floatView[0]=i;const e=wn.uint32View[0],t=e>>23&511;return wn.baseTable[t]+((e&8388607)>>wn.shiftTable[t])}function sf(i){const e=i>>10;return wn.uint32View[0]=wn.mantissaTable[wn.offsetTable[e]+(i&1023)]+wn.exponentTable[e],wn.floatView[0]}const Ir={toHalfFloat:rf,fromHalfFloat:sf},ht=new C,Ur=new me;class lt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=_a,this.updateRange={offset:0,count:-1},this.gpuType=ke,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix3(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyMatrix4(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.applyNormalMatrix(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ht.fromBufferAttribute(this,t),ht.transformDirection(e),this.setXYZ(t,ht.x,ht.y,ht.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=cn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=cn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=cn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=cn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=cn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==_a&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}}class Uc extends lt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Nc extends lt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Pn extends lt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let af=0;const Zt=new _e,js=new rt,Mi=new C,kt=new pn,ir=new pn,bt=new C;class Qt extends dn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=an(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rc(e)?Nc:Uc)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Fe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return js.lookAt(e),js.updateMatrix(),this.applyMatrix4(js.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Mi).negate(),this.translate(Mi.x,Mi.y,Mi.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Pn(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new pn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];kt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(kt.min),this.boundingBox.expandByPoint(kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new C,1/0);return}if(e){const n=this.boundingSphere.center;if(kt.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];ir.setFromBufferAttribute(o),this.morphTargetsRelative?(bt.addVectors(kt.min,ir.min),kt.expandByPoint(bt),bt.addVectors(kt.max,ir.max),kt.expandByPoint(bt)):(kt.expandByPoint(ir.min),kt.expandByPoint(ir.max))}kt.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)bt.fromBufferAttribute(o,c),l&&(Mi.fromBufferAttribute(e,c),bt.add(Mi)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,a=t.uv.array,o=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new lt(new Float32Array(4*o),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let y=0;y<o;y++)c[y]=new C,u[y]=new C;const h=new C,f=new C,p=new C,g=new me,v=new me,m=new me,d=new C,S=new C;function _(y,k,q){h.fromArray(r,y*3),f.fromArray(r,k*3),p.fromArray(r,q*3),g.fromArray(a,y*2),v.fromArray(a,k*2),m.fromArray(a,q*2),f.sub(h),p.sub(h),v.sub(g),m.sub(g);const I=1/(v.x*m.y-m.x*v.y);isFinite(I)&&(d.copy(f).multiplyScalar(m.y).addScaledVector(p,-v.y).multiplyScalar(I),S.copy(p).multiplyScalar(v.x).addScaledVector(f,-m.x).multiplyScalar(I),c[y].add(d),c[k].add(d),c[q].add(d),u[y].add(S),u[k].add(S),u[q].add(S))}let T=this.groups;T.length===0&&(T=[{start:0,count:n.length}]);for(let y=0,k=T.length;y<k;++y){const q=T[y],I=q.start,N=q.count;for(let F=I,U=I+N;F<U;F+=3)_(n[F+0],n[F+1],n[F+2])}const R=new C,w=new C,b=new C,D=new C;function x(y){b.fromArray(s,y*3),D.copy(b);const k=c[y];R.copy(k),R.sub(b.multiplyScalar(b.dot(k))).normalize(),w.crossVectors(D,k);const I=w.dot(u[y])<0?-1:1;l[y*4]=R.x,l[y*4+1]=R.y,l[y*4+2]=R.z,l[y*4+3]=I}for(let y=0,k=T.length;y<k;++y){const q=T[y],I=q.start,N=q.count;for(let F=I,U=I+N;F<U;F+=3)x(n[F+0]),x(n[F+1]),x(n[F+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new lt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const r=new C,s=new C,a=new C,o=new C,l=new C,c=new C,u=new C,h=new C;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);r.fromBufferAttribute(t,g),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(u),l.add(u),c.add(u),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)r.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,f=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?p=l[v]*o.data.stride+o.offset:p=l[v]*u;for(let d=0;d<u;d++)f[g++]=c[p++]}return new lt(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const f=c[u],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let f=0,p=h.length;f<p;f++)u.push(h[f].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jo=new _e,Jn=new xr,Nr=new mn,qo=new C,Si=new C,Ti=new C,yi=new C,qs=new C,Fr=new C,Or=new me,Br=new me,zr=new me,Yo=new C,Ko=new C,Zo=new C,Hr=new C,Gr=new C;class Bt extends rt{constructor(e=new Qt,t=new ii){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){Fr.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&(qs.fromBufferAttribute(h,e),a?Fr.addScaledVector(qs,u):Fr.addScaledVector(qs.sub(t),u))}t.add(Fr)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere),Nr.applyMatrix4(s),Jn.copy(e.ray).recast(e.near),!(Nr.containsPoint(Jn.origin)===!1&&(Jn.intersectSphere(Nr,qo)===null||Jn.origin.distanceToSquared(qo)>(e.far-e.near)**2))&&(jo.copy(s).invert(),Jn.copy(e.ray).applyMatrix4(jo),!(n.boundingBox!==null&&Jn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Jn)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,p=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,R=_;T<R;T+=3){const w=o.getX(T),b=o.getX(T+1),D=o.getX(T+2);r=kr(this,d,e,n,c,u,h,w,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(o.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=o.getX(m),_=o.getX(m+1),T=o.getX(m+2);r=kr(this,a,e,n,c,u,h,S,_,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){const m=f[g],d=a[m.materialIndex],S=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let T=S,R=_;T<R;T+=3){const w=T,b=T+1,D=T+2;r=kr(this,d,e,n,c,u,h,w,b,D),r&&(r.faceIndex=Math.floor(T/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,d=v;m<d;m+=3){const S=m,_=m+1,T=m+2;r=kr(this,a,e,n,c,u,h,S,_,T),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function of(i,e,t,n,r,s,a,o){let l;if(e.side===At?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===hn,o),l===null)return null;Gr.copy(o),Gr.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Gr);return c<t.near||c>t.far?null:{distance:c,point:Gr.clone(),object:i}}function kr(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Si),i.getVertexPosition(l,Ti),i.getVertexPosition(c,yi);const u=of(i,e,t,n,Si,Ti,yi,Hr);if(u){r&&(Or.fromBufferAttribute(r,o),Br.fromBufferAttribute(r,l),zr.fromBufferAttribute(r,c),u.uv=sn.getInterpolation(Hr,Si,Ti,yi,Or,Br,zr,new me)),s&&(Or.fromBufferAttribute(s,o),Br.fromBufferAttribute(s,l),zr.fromBufferAttribute(s,c),u.uv1=sn.getInterpolation(Hr,Si,Ti,yi,Or,Br,zr,new me),u.uv2=u.uv1),a&&(Yo.fromBufferAttribute(a,o),Ko.fromBufferAttribute(a,l),Zo.fromBufferAttribute(a,c),u.normal=sn.getInterpolation(Hr,Si,Ti,yi,Yo,Ko,Zo,new C),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new C,materialIndex:0};sn.getNormal(Si,Ti,yi,h.normal),u.face=h}return u}class Mr extends Qt{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let f=0,p=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,r,a,2),g("x","z","y",1,-1,e,n,-t,r,a,3),g("x","y","z",1,-1,e,t,n,r,s,4),g("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Pn(c,3)),this.setAttribute("normal",new Pn(u,3)),this.setAttribute("uv",new Pn(h,2));function g(v,m,d,S,_,T,R,w,b,D,x){const y=T/b,k=R/D,q=T/2,I=R/2,N=w/2,F=b+1,U=D+1;let B=0,Y=0;const ee=new C;for(let $=0;$<U;$++){const V=$*k-I;for(let W=0;W<F;W++){const ie=W*y-q;ee[v]=ie*S,ee[m]=V*_,ee[d]=N,c.push(ee.x,ee.y,ee.z),ee[v]=0,ee[m]=0,ee[d]=w>0?1:-1,u.push(ee.x,ee.y,ee.z),h.push(W/b),h.push(1-$/D),B+=1}}for(let $=0;$<D;$++)for(let V=0;V<b;V++){const W=f+V+F*$,ie=f+V+F*($+1),ue=f+(V+1)+F*($+1),fe=f+(V+1)+F*$;l.push(W,ie,fe),l.push(ie,ue,fe),Y+=6}o.addGroup(p,Y,x),p+=Y,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Hi(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Ft(i){const e={};for(let t=0;t<i.length;t++){const n=Hi(i[t]);for(const r in n)e[r]=n[r]}return e}function lf(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fc(i){return i.getRenderTarget()===null?i.outputColorSpace:pt}const ls={clone:Hi,merge:Ft};var cf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,uf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class at extends Yt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=cf,this.fragmentShader=uf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Hi(e.uniforms),this.uniformsGroups=lf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ia extends rt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _e,this.projectionMatrix=new _e,this.projectionMatrixInverse=new _e,this.coordinateSystem=Rn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Dt extends Ia{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zi*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ur*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zi*2*Math.atan(Math.tan(ur*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ur*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Ei=-90,bi=1;class hf extends rt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null;const r=new Dt(Ei,bi,e,t);r.layers=this.layers,this.add(r);const s=new Dt(Ei,bi,e,t);s.layers=this.layers,this.add(s);const a=new Dt(Ei,bi,e,t);a.layers=this.layers,this.add(a);const o=new Dt(Ei,bi,e,t);o.layers=this.layers,this.add(o);const l=new Dt(Ei,bi,e,t);l.layers=this.layers,this.add(l);const c=new Dt(Ei,bi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Rn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=e.getRenderTarget(),h=e.xr.enabled;e.xr.enabled=!1;const f=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,a),e.setRenderTarget(n,3),e.render(t,o),e.setRenderTarget(n,4),e.render(t,l),n.texture.generateMipmaps=f,e.setRenderTarget(n,5),e.render(t,c),e.setRenderTarget(u),e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class Oc extends dt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Fi,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ff extends tt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];t.encoding!==void 0&&(fr("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===un?Ye:Xn),this.texture=new Oc(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ke}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new at({name:"CubemapFromEquirect",uniforms:Hi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:At,blending:ft});s.uniforms.tEquirect.value=t;const a=new Bt(r,s),o=t.minFilter;return t.minFilter===Cn&&(t.minFilter=Ke),new hf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const Ys=new C,df=new C,pf=new Fe;class Gn{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Ys.subVectors(n,t).cross(df.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ys),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||pf.getNormalMatrix(e),r=this.coplanarPoint(Ys).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qn=new mn,Vr=new C;class Ua{constructor(e=new Gn,t=new Gn,n=new Gn,r=new Gn,s=new Gn,a=new Gn){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Rn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],f=r[7],p=r[8],g=r[9],v=r[10],m=r[11],d=r[12],S=r[13],_=r[14],T=r[15];if(n[0].setComponents(l-s,f-c,m-p,T-d).normalize(),n[1].setComponents(l+s,f+c,m+p,T+d).normalize(),n[2].setComponents(l+a,f+u,m+g,T+S).normalize(),n[3].setComponents(l-a,f-u,m-g,T-S).normalize(),n[4].setComponents(l-o,f-h,m-v,T-_).normalize(),t===Rn)n[5].setComponents(l+o,f+h,m+v,T+_).normalize();else if(t===as)n[5].setComponents(o,h,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Qn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Qn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Qn)}intersectsSprite(e){return Qn.center.set(0,0,0),Qn.radius=.7071067811865476,Qn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Qn)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Vr.x=r.normal.x>0?e.max.x:e.min.x,Vr.y=r.normal.y>0?e.max.y:e.min.y,Vr.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Vr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Bc(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function mf(i,e){const t=e.isWebGL2,n=new WeakMap;function r(c,u){const h=c.array,f=c.usage,p=i.createBuffer();i.bindBuffer(u,p),i.bufferData(u,h,f),c.onUploadCallback();let g;if(h instanceof Float32Array)g=i.FLOAT;else if(h instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(t)g=i.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)g=i.SHORT;else if(h instanceof Uint32Array)g=i.UNSIGNED_INT;else if(h instanceof Int32Array)g=i.INT;else if(h instanceof Int8Array)g=i.BYTE;else if(h instanceof Uint8Array)g=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)g=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:g,bytesPerElement:h.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,h){const f=u.array,p=u.updateRange;i.bindBuffer(h,c),p.count===-1?i.bufferSubData(h,0,f):(t?i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f,p.offset,p.count):i.bufferSubData(h,p.offset*f.BYTES_PER_ELEMENT,f.subarray(p.offset,p.offset+p.count)),p.count=-1),u.onUploadCallback()}function a(c){return c.isInterleavedBufferAttribute&&(c=c.data),n.get(c)}function o(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=n.get(c);u&&(i.deleteBuffer(u.buffer),n.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const f=n.get(c);(!f||f.version<c.version)&&n.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const h=n.get(c);h===void 0?n.set(c,r(c,u)):h.version<c.version&&(s(h.buffer,c,u),h.version=c.version)}return{get:a,remove:o,update:l}}class ms extends Qt{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,f=t/l,p=[],g=[],v=[],m=[];for(let d=0;d<u;d++){const S=d*f-a;for(let _=0;_<c;_++){const T=_*h-s;g.push(T,-S,0),v.push(0,0,1),m.push(_/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let S=0;S<o;S++){const _=S+c*d,T=S+c*(d+1),R=S+1+c*(d+1),w=S+1+c*d;p.push(_,T,w),p.push(T,R,w)}this.setIndex(p),this.setAttribute("position",new Pn(g,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ms(e.width,e.height,e.widthSegments,e.heightSegments)}}var gf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,_f=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,xf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Mf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Sf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ef=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,wf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Af=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Rf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Lf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Df=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,If=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Uf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Nf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Ff=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,Of=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Bf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,zf=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Hf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Gf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Vf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Wf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Xf=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,jf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Yf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Zf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,$f=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Jf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Qf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ed=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,td=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,nd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,id=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ad=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,od=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ld=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ud=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,fd=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,dd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,pd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,md=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,gd=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,vd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,_d=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Md=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Td=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,yd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Ed=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,wd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ad=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Pd=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,Cd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Ld=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,Dd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Id=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ud=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Fd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Od=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Bd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,zd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Hd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Gd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Vd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Xd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Yd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Kd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Zd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,$d=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Jd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ep=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,tp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,np=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ip=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,rp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ap=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,op=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,lp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,up=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,fp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const dp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pp=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_p=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Mp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Sp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Tp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,yp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Ep=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,wp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ap=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ip=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Up=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Np=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Fp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Op=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Bp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Xp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ee={alphahash_fragment:gf,alphahash_pars_fragment:vf,alphamap_fragment:_f,alphamap_pars_fragment:xf,alphatest_fragment:Mf,alphatest_pars_fragment:Sf,aomap_fragment:Tf,aomap_pars_fragment:yf,begin_vertex:Ef,beginnormal_vertex:bf,bsdfs:wf,iridescence_fragment:Af,bumpmap_pars_fragment:Rf,clipping_planes_fragment:Pf,clipping_planes_pars_fragment:Cf,clipping_planes_pars_vertex:Lf,clipping_planes_vertex:Df,color_fragment:If,color_pars_fragment:Uf,color_pars_vertex:Nf,color_vertex:Ff,common:Of,cube_uv_reflection_fragment:Bf,defaultnormal_vertex:zf,displacementmap_pars_vertex:Hf,displacementmap_vertex:Gf,emissivemap_fragment:kf,emissivemap_pars_fragment:Vf,colorspace_fragment:Wf,colorspace_pars_fragment:Xf,envmap_fragment:jf,envmap_common_pars_fragment:qf,envmap_pars_fragment:Yf,envmap_pars_vertex:Kf,envmap_physical_pars_fragment:od,envmap_vertex:Zf,fog_vertex:$f,fog_pars_vertex:Jf,fog_fragment:Qf,fog_pars_fragment:ed,gradientmap_pars_fragment:td,lightmap_fragment:nd,lightmap_pars_fragment:id,lights_lambert_fragment:rd,lights_lambert_pars_fragment:sd,lights_pars_begin:ad,lights_toon_fragment:ld,lights_toon_pars_fragment:cd,lights_phong_fragment:ud,lights_phong_pars_fragment:hd,lights_physical_fragment:fd,lights_physical_pars_fragment:dd,lights_fragment_begin:pd,lights_fragment_maps:md,lights_fragment_end:gd,logdepthbuf_fragment:vd,logdepthbuf_pars_fragment:_d,logdepthbuf_pars_vertex:xd,logdepthbuf_vertex:Md,map_fragment:Sd,map_pars_fragment:Td,map_particle_fragment:yd,map_particle_pars_fragment:Ed,metalnessmap_fragment:bd,metalnessmap_pars_fragment:wd,morphcolor_vertex:Ad,morphnormal_vertex:Rd,morphtarget_pars_vertex:Pd,morphtarget_vertex:Cd,normal_fragment_begin:Ld,normal_fragment_maps:Dd,normal_pars_fragment:Id,normal_pars_vertex:Ud,normal_vertex:Nd,normalmap_pars_fragment:Fd,clearcoat_normal_fragment_begin:Od,clearcoat_normal_fragment_maps:Bd,clearcoat_pars_fragment:zd,iridescence_pars_fragment:Hd,opaque_fragment:Gd,packing:kd,premultiplied_alpha_fragment:Vd,project_vertex:Wd,dithering_fragment:Xd,dithering_pars_fragment:jd,roughnessmap_fragment:qd,roughnessmap_pars_fragment:Yd,shadowmap_pars_fragment:Kd,shadowmap_pars_vertex:Zd,shadowmap_vertex:$d,shadowmask_pars_fragment:Jd,skinbase_vertex:Qd,skinning_pars_vertex:ep,skinning_vertex:tp,skinnormal_vertex:np,specularmap_fragment:ip,specularmap_pars_fragment:rp,tonemapping_fragment:sp,tonemapping_pars_fragment:ap,transmission_fragment:op,transmission_pars_fragment:lp,uv_pars_fragment:cp,uv_pars_vertex:up,uv_vertex:hp,worldpos_vertex:fp,background_vert:dp,background_frag:pp,backgroundCube_vert:mp,backgroundCube_frag:gp,cube_vert:vp,cube_frag:_p,depth_vert:xp,depth_frag:Mp,distanceRGBA_vert:Sp,distanceRGBA_frag:Tp,equirect_vert:yp,equirect_frag:Ep,linedashed_vert:bp,linedashed_frag:wp,meshbasic_vert:Ap,meshbasic_frag:Rp,meshlambert_vert:Pp,meshlambert_frag:Cp,meshmatcap_vert:Lp,meshmatcap_frag:Dp,meshnormal_vert:Ip,meshnormal_frag:Up,meshphong_vert:Np,meshphong_frag:Fp,meshphysical_vert:Op,meshphysical_frag:Bp,meshtoon_vert:zp,meshtoon_frag:Hp,points_vert:Gp,points_frag:kp,shadow_vert:Vp,shadow_frag:Wp,sprite_vert:Xp,sprite_frag:jp},ce={common:{diffuse:{value:new xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Fe}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Fe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Fe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Fe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Fe},normalScale:{value:new me(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Fe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Fe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Fe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Fe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0},uvTransform:{value:new Fe}},sprite:{diffuse:{value:new xe(16777215)},opacity:{value:1},center:{value:new me(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Fe},alphaMap:{value:null},alphaMapTransform:{value:new Fe},alphaTest:{value:0}}},Xt={basic:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.fog]),vertexShader:Ee.meshbasic_vert,fragmentShader:Ee.meshbasic_frag},lambert:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ee.meshlambert_vert,fragmentShader:Ee.meshlambert_frag},phong:{uniforms:Ft([ce.common,ce.specularmap,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},specular:{value:new xe(1118481)},shininess:{value:30}}]),vertexShader:Ee.meshphong_vert,fragmentShader:Ee.meshphong_frag},standard:{uniforms:Ft([ce.common,ce.envmap,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.roughnessmap,ce.metalnessmap,ce.fog,ce.lights,{emissive:{value:new xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag},toon:{uniforms:Ft([ce.common,ce.aomap,ce.lightmap,ce.emissivemap,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.gradientmap,ce.fog,ce.lights,{emissive:{value:new xe(0)}}]),vertexShader:Ee.meshtoon_vert,fragmentShader:Ee.meshtoon_frag},matcap:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,ce.fog,{matcap:{value:null}}]),vertexShader:Ee.meshmatcap_vert,fragmentShader:Ee.meshmatcap_frag},points:{uniforms:Ft([ce.points,ce.fog]),vertexShader:Ee.points_vert,fragmentShader:Ee.points_frag},dashed:{uniforms:Ft([ce.common,ce.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ee.linedashed_vert,fragmentShader:Ee.linedashed_frag},depth:{uniforms:Ft([ce.common,ce.displacementmap]),vertexShader:Ee.depth_vert,fragmentShader:Ee.depth_frag},normal:{uniforms:Ft([ce.common,ce.bumpmap,ce.normalmap,ce.displacementmap,{opacity:{value:1}}]),vertexShader:Ee.meshnormal_vert,fragmentShader:Ee.meshnormal_frag},sprite:{uniforms:Ft([ce.sprite,ce.fog]),vertexShader:Ee.sprite_vert,fragmentShader:Ee.sprite_frag},background:{uniforms:{uvTransform:{value:new Fe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ee.background_vert,fragmentShader:Ee.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ee.backgroundCube_vert,fragmentShader:Ee.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ee.cube_vert,fragmentShader:Ee.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ee.equirect_vert,fragmentShader:Ee.equirect_frag},distanceRGBA:{uniforms:Ft([ce.common,ce.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ee.distanceRGBA_vert,fragmentShader:Ee.distanceRGBA_frag},shadow:{uniforms:Ft([ce.lights,ce.fog,{color:{value:new xe(0)},opacity:{value:1}}]),vertexShader:Ee.shadow_vert,fragmentShader:Ee.shadow_frag}};Xt.physical={uniforms:Ft([Xt.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Fe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Fe},clearcoatNormalScale:{value:new me(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Fe},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Fe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Fe},sheen:{value:0},sheenColor:{value:new xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Fe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Fe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Fe},transmissionSamplerSize:{value:new me},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Fe},attenuationDistance:{value:0},attenuationColor:{value:new xe(0)},specularColor:{value:new xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Fe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Fe},anisotropyVector:{value:new me},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Fe}}]),vertexShader:Ee.meshphysical_vert,fragmentShader:Ee.meshphysical_frag};const Wr={r:0,b:0,g:0};function qp(i,e,t,n,r,s,a){const o=new xe(0);let l=s===!0?0:1,c,u,h=null,f=0,p=null;function g(m,d){let S=!1,_=d.isScene===!0?d.background:null;_&&_.isTexture&&(_=(d.backgroundBlurriness>0?t:e).get(_)),_===null?v(o,l):_&&_.isColor&&(v(_,1),S=!0);const T=i.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,a):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),_&&(_.isCubeTexture||_.mapping===hs)?(u===void 0&&(u=new Bt(new Mr(1,1,1),new at({name:"BackgroundCubeMaterial",uniforms:Hi(Xt.backgroundCube.uniforms),vertexShader:Xt.backgroundCube.vertexShader,fragmentShader:Xt.backgroundCube.fragmentShader,side:At,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(R,w,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=d.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,u.material.toneMapped=_.colorSpace!==Ye,(h!==_||f!==_.version||p!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Bt(new ms(2,2),new at({name:"BackgroundMaterial",uniforms:Hi(Xt.background.uniforms),vertexShader:Xt.background.vertexShader,fragmentShader:Xt.background.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=d.backgroundIntensity,c.material.toneMapped=_.colorSpace!==Ye,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||f!==_.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,f=_.version,p=i.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,d){m.getRGB(Wr,Fc(i)),n.buffers.color.setClear(Wr.r,Wr.g,Wr.b,d,a)}return{getClearColor:function(){return o},setClearColor:function(m,d=1){o.set(m),l=d,v(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(o,l)},render:g}}function Yp(i,e,t,n){const r=i.getParameter(i.MAX_VERTEX_ATTRIBS),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),a=n.isWebGL2||s!==null,o={},l=m(null);let c=l,u=!1;function h(N,F,U,B,Y){let ee=!1;if(a){const $=v(B,U,F);c!==$&&(c=$,p(c.object)),ee=d(N,B,U,Y),ee&&S(N,B,U,Y)}else{const $=F.wireframe===!0;(c.geometry!==B.id||c.program!==U.id||c.wireframe!==$)&&(c.geometry=B.id,c.program=U.id,c.wireframe=$,ee=!0)}Y!==null&&t.update(Y,i.ELEMENT_ARRAY_BUFFER),(ee||u)&&(u=!1,D(N,F,U,B),Y!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function f(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function p(N){return n.isWebGL2?i.bindVertexArray(N):s.bindVertexArrayOES(N)}function g(N){return n.isWebGL2?i.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function v(N,F,U){const B=U.wireframe===!0;let Y=o[N.id];Y===void 0&&(Y={},o[N.id]=Y);let ee=Y[F.id];ee===void 0&&(ee={},Y[F.id]=ee);let $=ee[B];return $===void 0&&($=m(f()),ee[B]=$),$}function m(N){const F=[],U=[],B=[];for(let Y=0;Y<r;Y++)F[Y]=0,U[Y]=0,B[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:F,enabledAttributes:U,attributeDivisors:B,object:N,attributes:{},index:null}}function d(N,F,U,B){const Y=c.attributes,ee=F.attributes;let $=0;const V=U.getAttributes();for(const W in V)if(V[W].location>=0){const ue=Y[W];let fe=ee[W];if(fe===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(fe=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(fe=N.instanceColor)),ue===void 0||ue.attribute!==fe||fe&&ue.data!==fe.data)return!0;$++}return c.attributesNum!==$||c.index!==B}function S(N,F,U,B){const Y={},ee=F.attributes;let $=0;const V=U.getAttributes();for(const W in V)if(V[W].location>=0){let ue=ee[W];ue===void 0&&(W==="instanceMatrix"&&N.instanceMatrix&&(ue=N.instanceMatrix),W==="instanceColor"&&N.instanceColor&&(ue=N.instanceColor));const fe={};fe.attribute=ue,ue&&ue.data&&(fe.data=ue.data),Y[W]=fe,$++}c.attributes=Y,c.attributesNum=$,c.index=B}function _(){const N=c.newAttributes;for(let F=0,U=N.length;F<U;F++)N[F]=0}function T(N){R(N,0)}function R(N,F){const U=c.newAttributes,B=c.enabledAttributes,Y=c.attributeDivisors;U[N]=1,B[N]===0&&(i.enableVertexAttribArray(N),B[N]=1),Y[N]!==F&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,F),Y[N]=F)}function w(){const N=c.newAttributes,F=c.enabledAttributes;for(let U=0,B=F.length;U<B;U++)F[U]!==N[U]&&(i.disableVertexAttribArray(U),F[U]=0)}function b(N,F,U,B,Y,ee,$){$===!0?i.vertexAttribIPointer(N,F,U,Y,ee):i.vertexAttribPointer(N,F,U,B,Y,ee)}function D(N,F,U,B){if(n.isWebGL2===!1&&(N.isInstancedMesh||B.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const Y=B.attributes,ee=U.getAttributes(),$=F.defaultAttributeValues;for(const V in ee){const W=ee[V];if(W.location>=0){let ie=Y[V];if(ie===void 0&&(V==="instanceMatrix"&&N.instanceMatrix&&(ie=N.instanceMatrix),V==="instanceColor"&&N.instanceColor&&(ie=N.instanceColor)),ie!==void 0){const ue=ie.normalized,fe=ie.itemSize,ye=t.get(ie);if(ye===void 0)continue;const Ce=ye.buffer,Me=ye.type,Xe=ye.bytesPerElement,Rt=n.isWebGL2===!0&&(Me===i.INT||Me===i.UNSIGNED_INT||ie.gpuType===xc);if(ie.isInterleavedBufferAttribute){const Ue=ie.data,z=Ue.stride,gt=ie.offset;if(Ue.isInstancedInterleavedBuffer){for(let Se=0;Se<W.locationSize;Se++)R(W.location+Se,Ue.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Ue.meshPerAttribute*Ue.count)}else for(let Se=0;Se<W.locationSize;Se++)T(W.location+Se);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Se=0;Se<W.locationSize;Se++)b(W.location+Se,fe/W.locationSize,Me,ue,z*Xe,(gt+fe/W.locationSize*Se)*Xe,Rt)}else{if(ie.isInstancedBufferAttribute){for(let Ue=0;Ue<W.locationSize;Ue++)R(W.location+Ue,ie.meshPerAttribute);N.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ue=0;Ue<W.locationSize;Ue++)T(W.location+Ue);i.bindBuffer(i.ARRAY_BUFFER,Ce);for(let Ue=0;Ue<W.locationSize;Ue++)b(W.location+Ue,fe/W.locationSize,Me,ue,fe*Xe,fe/W.locationSize*Ue*Xe,Rt)}}else if($!==void 0){const ue=$[V];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(W.location,ue);break;case 3:i.vertexAttrib3fv(W.location,ue);break;case 4:i.vertexAttrib4fv(W.location,ue);break;default:i.vertexAttrib1fv(W.location,ue)}}}}w()}function x(){q();for(const N in o){const F=o[N];for(const U in F){const B=F[U];for(const Y in B)g(B[Y].object),delete B[Y];delete F[U]}delete o[N]}}function y(N){if(o[N.id]===void 0)return;const F=o[N.id];for(const U in F){const B=F[U];for(const Y in B)g(B[Y].object),delete B[Y];delete F[U]}delete o[N.id]}function k(N){for(const F in o){const U=o[F];if(U[N.id]===void 0)continue;const B=U[N.id];for(const Y in B)g(B[Y].object),delete B[Y];delete U[N.id]}}function q(){I(),u=!0,c!==l&&(c=l,p(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:h,reset:q,resetDefaultState:I,dispose:x,releaseStatesOfGeometry:y,releaseStatesOfProgram:k,initAttributes:_,enableAttribute:T,disableUnusedAttributes:w}}function Kp(i,e,t,n){const r=n.isWebGL2;let s;function a(c){s=c}function o(c,u){i.drawArrays(s,c,u),t.update(u,s,1)}function l(c,u,h){if(h===0)return;let f,p;if(r)f=i,p="drawArraysInstanced";else if(f=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",f===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}f[p](s,c,u,h),t.update(u,s,h)}this.setMode=a,this.render=o,this.renderInstances=l}function Zp(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(b){if(b==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const a=typeof WebGL2RenderingContext<"u"&&i.constructor.name==="WebGL2RenderingContext";let o=t.precision!==void 0?t.precision:"highp";const l=s(o);l!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",l,"instead."),o=l);const c=a||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,h=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),v=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),d=i.getParameter(i.MAX_VARYING_VECTORS),S=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,T=a||e.has("OES_texture_float"),R=_&&T,w=a?i.getParameter(i.MAX_SAMPLES):0;return{isWebGL2:a,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:o,logarithmicDepthBuffer:u,maxTextures:h,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:d,maxFragmentUniforms:S,vertexTextures:_,floatFragmentTextures:T,floatVertexTextures:R,maxSamples:w}}function $p(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new Gn,o=new Fe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const p=h.length!==0||f||n!==0||r;return r=f,n=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){t=u(h,f,0)},this.setState=function(h,f,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,d=i.get(h);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const S=s?0:n,_=S*4;let T=d.clippingState||null;l.value=T,T=u(g,f,_,p);for(let R=0;R!==_;++R)T[R]=t[R];d.clippingState=T,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,f,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const d=p+v*4,S=f.matrixWorldInverse;o.getNormalMatrix(S),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,T=p;_!==v;++_,T+=4)a.copy(h[_]).applyMatrix4(S,o),a.normal.toArray(m,T),m[T+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function Jp(i){let e=new WeakMap;function t(a,o){return o===pr?a.mapping=Fi:o===da&&(a.mapping=Oi),a}function n(a){if(a&&a.isTexture&&a.isRenderTargetTexture===!1){const o=a.mapping;if(o===pr||o===da)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new ff(l.height/2);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Na extends Ia{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Li=4,$o=[.125,.215,.35,.446,.526,.582],ni=20,Ks=new Na,Jo=new xe;let Zs=null;const ti=(1+Math.sqrt(5))/2,wi=1/ti,Qo=[new C(1,1,1),new C(-1,1,1),new C(1,1,-1),new C(-1,1,-1),new C(0,ti,wi),new C(0,ti,-wi),new C(wi,0,ti),new C(-wi,0,ti),new C(ti,wi,0),new C(-ti,wi,0)];class el{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Zs=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=il(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Zs),e.scissorTest=!1,Xr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Fi||e.mapping===Oi?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Zs=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ke,minFilter:Ke,generateMipmaps:!1,type:jt,format:Mt,colorSpace:pt,depthBuffer:!1},r=tl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tl(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Qp(s)),this._blurMaterial=em(s,e,t)}return r}_compileMaterial(e){const t=new Bt(this._lodPlanes[0],e);this._renderer.compile(t,Ks)}_sceneToCubeUV(e,t,n,r){const o=new Dt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Jo),u.toneMapping=Vn,u.autoClear=!1;const p=new ii({name:"PMREM.Background",side:At,depthWrite:!1,depthTest:!1}),g=new Bt(new Mr,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy(Jo),v=!0);for(let d=0;d<6;d++){const S=d%3;S===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):S===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const _=this._cubeSize;Xr(r,S*_,d>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,o),u.render(e,o)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Fi||e.mapping===Oi;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=il()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nl());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Bt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;Xr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ks)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Qo[(r-1)%Qo.length];this._blur(e,r-1,r,s,a)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Bt(this._lodPlanes[r],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ni-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):ni;m>ni&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ni}`);const d=[];let S=0;for(let b=0;b<ni;++b){const D=b/v,x=Math.exp(-D*D/2);d.push(x),b===0?S+=x:b<m&&(S+=2*x)}for(let b=0;b<d.length;b++)d[b]=d[b]/S;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:_}=this;f.dTheta.value=g,f.mipInt.value=_-n;const T=this._sizeLods[r],R=3*T*(r>_-Li?r-_+Li:0),w=4*(this._cubeSize-T);Xr(t,R,w,3*T,2*T),l.setRenderTarget(t),l.render(h,Ks)}}function Qp(i){const e=[],t=[],n=[];let r=i;const s=i-Li+1+$o.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-Li?l=$o[a-i+Li-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,d=1,S=new Float32Array(v*g*p),_=new Float32Array(m*g*p),T=new Float32Array(d*g*p);for(let w=0;w<p;w++){const b=w%3*2/3-1,D=w>2?0:-1,x=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];S.set(x,v*g*w),_.set(f,m*g*w);const y=[w,w,w,w,w,w];T.set(y,d*g*w)}const R=new Qt;R.setAttribute("position",new lt(S,v)),R.setAttribute("uv",new lt(_,m)),R.setAttribute("faceIndex",new lt(T,d)),e.push(R),r>Li&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tl(i,e,t){const n=new tt(i,e,t);return n.texture.mapping=hs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Xr(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function em(i,e,t){const n=new Float32Array(ni),r=new C(0,1,0);return new at({name:"SphericalGaussianBlur",defines:{n:ni,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ft,depthTest:!1,depthWrite:!1})}function nl(){return new at({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ft,depthTest:!1,depthWrite:!1})}function il(){return new at({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fa(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ft,depthTest:!1,depthWrite:!1})}function Fa(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function tm(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===pr||l===da,u=l===Fi||l===Oi;if(c||u)if(o.isRenderTargetTexture&&o.needsPMREMUpdate===!0){o.needsPMREMUpdate=!1;let h=e.get(o);return t===null&&(t=new el(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),e.set(o,h),h.texture}else{if(e.has(o))return e.get(o).texture;{const h=o.image;if(c&&h&&h.height>0||u&&h&&r(h)){t===null&&(t=new el(i));const f=c?t.fromEquirectangular(o):t.fromCubemap(o);return e.set(o,f),o.addEventListener("dispose",s),f.texture}else return null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function nm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function im(i,e,t,n){const r={},s=new WeakMap;function a(h){const f=h.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);for(const g in f.morphAttributes){const v=f.morphAttributes[g];for(let m=0,d=v.length;m<d;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete r[f.id];const p=s.get(f);p&&(e.remove(p),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(h,f){return r[f.id]===!0||(f.addEventListener("dispose",a),r[f.id]=!0,t.memory.geometries++),f}function l(h){const f=h.attributes;for(const g in f)e.update(f[g],i.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,d=v.length;m<d;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(h){const f=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const S=p.array;v=p.version;for(let _=0,T=S.length;_<T;_+=3){const R=S[_+0],w=S[_+1],b=S[_+2];f.push(R,w,w,b,b,R)}}else if(g!==void 0){const S=g.array;v=g.version;for(let _=0,T=S.length/3-1;_<T;_+=3){const R=_+0,w=_+1,b=_+2;f.push(R,w,w,b,b,R)}}else return;const m=new(Rc(f)?Nc:Uc)(f,1);m.version=v;const d=s.get(h);d&&e.remove(d),s.set(h,m)}function u(h){const f=s.get(h);if(f){const p=h.index;p!==null&&f.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function rm(i,e,t,n){const r=n.isWebGL2;let s;function a(f){s=f}let o,l;function c(f){o=f.type,l=f.bytesPerElement}function u(f,p){i.drawElements(s,p,o,f*l),t.update(p,s,1)}function h(f,p,g){if(g===0)return;let v,m;if(r)v=i,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,p,o,f*l,g),t.update(p,s,g)}this.setMode=a,this.setIndex=c,this.render=u,this.renderInstances=h}function sm(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function am(i,e){return i[0]-e[0]}function om(i,e){return Math.abs(e[1])-Math.abs(i[1])}function lm(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,a=new Je,o=[];for(let c=0;c<8;c++)o[c]=[c,0];function l(c,u,h){const f=c.morphTargetInfluences;if(e.isWebGL2===!0){const g=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,v=g!==void 0?g.length:0;let m=s.get(u);if(m===void 0||m.count!==v){let F=function(){I.dispose(),s.delete(u),u.removeEventListener("dispose",F)};var p=F;m!==void 0&&m.texture.dispose();const _=u.morphAttributes.position!==void 0,T=u.morphAttributes.normal!==void 0,R=u.morphAttributes.color!==void 0,w=u.morphAttributes.position||[],b=u.morphAttributes.normal||[],D=u.morphAttributes.color||[];let x=0;_===!0&&(x=1),T===!0&&(x=2),R===!0&&(x=3);let y=u.attributes.position.count*x,k=1;y>e.maxTextureSize&&(k=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const q=new Float32Array(y*k*4*v),I=new Lc(q,y,k,v);I.type=ke,I.needsUpdate=!0;const N=x*4;for(let U=0;U<v;U++){const B=w[U],Y=b[U],ee=D[U],$=y*k*4*U;for(let V=0;V<B.count;V++){const W=V*N;_===!0&&(a.fromBufferAttribute(B,V),q[$+W+0]=a.x,q[$+W+1]=a.y,q[$+W+2]=a.z,q[$+W+3]=0),T===!0&&(a.fromBufferAttribute(Y,V),q[$+W+4]=a.x,q[$+W+5]=a.y,q[$+W+6]=a.z,q[$+W+7]=0),R===!0&&(a.fromBufferAttribute(ee,V),q[$+W+8]=a.x,q[$+W+9]=a.y,q[$+W+10]=a.z,q[$+W+11]=ee.itemSize===4?a.w:1)}}m={count:v,texture:I,size:new me(y,k)},s.set(u,m),u.addEventListener("dispose",F)}let d=0;for(let _=0;_<f.length;_++)d+=f[_];const S=u.morphTargetsRelative?1:1-d;h.getUniforms().setValue(i,"morphTargetBaseInfluence",S),h.getUniforms().setValue(i,"morphTargetInfluences",f),h.getUniforms().setValue(i,"morphTargetsTexture",m.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",m.size)}else{const g=f===void 0?0:f.length;let v=n[u.id];if(v===void 0||v.length!==g){v=[];for(let T=0;T<g;T++)v[T]=[T,0];n[u.id]=v}for(let T=0;T<g;T++){const R=v[T];R[0]=T,R[1]=f[T]}v.sort(om);for(let T=0;T<8;T++)T<g&&v[T][1]?(o[T][0]=v[T][0],o[T][1]=v[T][1]):(o[T][0]=Number.MAX_SAFE_INTEGER,o[T][1]=0);o.sort(am);const m=u.morphAttributes.position,d=u.morphAttributes.normal;let S=0;for(let T=0;T<8;T++){const R=o[T],w=R[0],b=R[1];w!==Number.MAX_SAFE_INTEGER&&b?(m&&u.getAttribute("morphTarget"+T)!==m[w]&&u.setAttribute("morphTarget"+T,m[w]),d&&u.getAttribute("morphNormal"+T)!==d[w]&&u.setAttribute("morphNormal"+T,d[w]),r[T]=b,S+=b):(m&&u.hasAttribute("morphTarget"+T)===!0&&u.deleteAttribute("morphTarget"+T),d&&u.hasAttribute("morphNormal"+T)===!0&&u.deleteAttribute("morphNormal"+T),r[T]=0)}const _=u.morphTargetsRelative?1:1-S;h.getUniforms().setValue(i,"morphTargetBaseInfluence",_),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:l}}function cm(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;r.get(f)!==c&&(f.update(),r.set(f,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}const zc=new dt,Hc=new Lc,Gc=new dr,kc=new Oc,rl=[],sl=[],al=new Float32Array(16),ol=new Float32Array(9),ll=new Float32Array(4);function Yi(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=rl[r];if(s===void 0&&(s=new Float32Array(r),rl[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Tt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function gs(i,e){let t=sl[e];t===void 0&&(t=new Int32Array(e),sl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function um(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function hm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2fv(this.addr,e),yt(t,e)}}function fm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Tt(t,e))return;i.uniform3fv(this.addr,e),yt(t,e)}}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4fv(this.addr,e),yt(t,e)}}function pm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,n))return;ll.set(n),i.uniformMatrix2fv(this.addr,!1,ll),yt(t,n)}}function mm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,n))return;ol.set(n),i.uniformMatrix3fv(this.addr,!1,ol),yt(t,n)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Tt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yt(t,e)}else{if(Tt(t,n))return;al.set(n),i.uniformMatrix4fv(this.addr,!1,al),yt(t,n)}}function vm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function _m(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2iv(this.addr,e),yt(t,e)}}function xm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3iv(this.addr,e),yt(t,e)}}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4iv(this.addr,e),yt(t,e)}}function Sm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Tt(t,e))return;i.uniform2uiv(this.addr,e),yt(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Tt(t,e))return;i.uniform3uiv(this.addr,e),yt(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Tt(t,e))return;i.uniform4uiv(this.addr,e),yt(t,e)}}function bm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||zc,r)}function wm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||Gc,r)}function Am(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||kc,r)}function Rm(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||Hc,r)}function Pm(i){switch(i){case 5126:return um;case 35664:return hm;case 35665:return fm;case 35666:return dm;case 35674:return pm;case 35675:return mm;case 35676:return gm;case 5124:case 35670:return vm;case 35667:case 35671:return _m;case 35668:case 35672:return xm;case 35669:case 35673:return Mm;case 5125:return Sm;case 36294:return Tm;case 36295:return ym;case 36296:return Em;case 35678:case 36198:case 36298:case 36306:case 35682:return bm;case 35679:case 36299:case 36307:return wm;case 35680:case 36300:case 36308:case 36293:return Am;case 36289:case 36303:case 36311:case 36292:return Rm}}function Cm(i,e){i.uniform1fv(this.addr,e)}function Lm(i,e){const t=Yi(e,this.size,2);i.uniform2fv(this.addr,t)}function Dm(i,e){const t=Yi(e,this.size,3);i.uniform3fv(this.addr,t)}function Im(i,e){const t=Yi(e,this.size,4);i.uniform4fv(this.addr,t)}function Um(i,e){const t=Yi(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Nm(i,e){const t=Yi(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Fm(i,e){const t=Yi(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Om(i,e){i.uniform1iv(this.addr,e)}function Bm(i,e){i.uniform2iv(this.addr,e)}function zm(i,e){i.uniform3iv(this.addr,e)}function Hm(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function km(i,e){i.uniform2uiv(this.addr,e)}function Vm(i,e){i.uniform3uiv(this.addr,e)}function Wm(i,e){i.uniform4uiv(this.addr,e)}function Xm(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||zc,s[a])}function jm(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||Gc,s[a])}function qm(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||kc,s[a])}function Ym(i,e,t){const n=this.cache,r=e.length,s=gs(t,r);Tt(n,s)||(i.uniform1iv(this.addr,s),yt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||Hc,s[a])}function Km(i){switch(i){case 5126:return Cm;case 35664:return Lm;case 35665:return Dm;case 35666:return Im;case 35674:return Um;case 35675:return Nm;case 35676:return Fm;case 5124:case 35670:return Om;case 35667:case 35671:return Bm;case 35668:case 35672:return zm;case 35669:case 35673:return Hm;case 5125:return Gm;case 36294:return km;case 36295:return Vm;case 36296:return Wm;case 35678:case 36198:case 36298:case 36306:case 35682:return Xm;case 35679:case 36299:case 36307:return jm;case 35680:case 36300:case 36308:case 36293:return qm;case 36289:case 36303:case 36311:case 36292:return Ym}}class Zm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=Pm(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Km(t.type)}}class Jm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const $s=/(\w+)(\])?(\[|\.)?/g;function cl(i,e){i.seq.push(e),i.map[e.id]=e}function Qm(i,e,t){const n=i.name,r=n.length;for($s.lastIndex=0;;){const s=$s.exec(n),a=$s.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){cl(t,c===void 0?new Zm(o,i,e):new $m(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new Jm(o),cl(t,h)),t=h}}}class ns{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);Qm(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function ul(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let eg=0;function tg(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function ng(i){switch(i){case pt:return["Linear","( value )"];case Ye:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),["Linear","( value )"]}}function hl(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+tg(i.getShaderSource(e),a)}else return r}function ig(i,e){const t=ng(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function rg(i,e){let t;switch(e){case Qu:t="Linear";break;case eh:t="Reinhard";break;case th:t="OptimizedCineon";break;case gc:t="ACESFilmic";break;case nh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function sg(i){return[i.extensionDerivatives||i.envMapCubeUVHeight||i.bumpMap||i.normalMapTangentSpace||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(cr).join(`
`)}function ag(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function og(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function cr(i){return i!==""}function fl(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function dl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const lg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ta(i){return i.replace(lg,ug)}const cg=new Map([["encodings_fragment","colorspace_fragment"],["encodings_pars_fragment","colorspace_pars_fragment"],["output_fragment","opaque_fragment"]]);function ug(i,e){let t=Ee[e];if(t===void 0){const n=cg.get(e);if(n!==void 0)t=Ee[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ta(t)}const hg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pl(i){return i.replace(hg,fg)}function fg(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function ml(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function dg(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===fc?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Lu?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===bn&&(e="SHADOWMAP_TYPE_VSM"),e}function pg(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Fi:case Oi:e="ENVMAP_TYPE_CUBE";break;case hs:e="ENVMAP_TYPE_CUBE_UV";break}return e}function mg(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Oi:e="ENVMAP_MODE_REFRACTION";break}return e}function gg(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:e="ENVMAP_BLENDING_MULTIPLY";break;case $u:e="ENVMAP_BLENDING_MIX";break;case Ju:e="ENVMAP_BLENDING_ADD";break}return e}function vg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function _g(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=dg(t),c=pg(t),u=mg(t),h=gg(t),f=vg(t),p=t.isWebGL2?"":sg(t),g=ag(s),v=r.createProgram();let m,d,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),m.length>0&&(m+=`
`),d=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(cr).join(`
`),d.length>0&&(d+=`
`)):(m=[ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(cr).join(`
`),d=[p,ml(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?Ee.tonemapping_pars_fragment:"",t.toneMapping!==Vn?rg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ee.colorspace_pars_fragment,ig("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(cr).join(`
`)),a=Ta(a),a=fl(a,t),a=dl(a,t),o=Ta(o),o=fl(o,t),o=dl(o,t),a=pl(a),o=pl(o),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",t.glslVersion===ss?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===ss?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=S+m+a,T=S+d+o,R=ul(r,r.VERTEX_SHADER,_),w=ul(r,r.FRAGMENT_SHADER,T);if(r.attachShader(v,R),r.attachShader(v,w),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),i.debug.checkShaderErrors){const x=r.getProgramInfoLog(v).trim(),y=r.getShaderInfoLog(R).trim(),k=r.getShaderInfoLog(w).trim();let q=!0,I=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,R,w);else{const N=hl(r,R,"vertex"),F=hl(r,w,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+x+`
`+N+`
`+F)}else x!==""?console.warn("THREE.WebGLProgram: Program Info Log:",x):(y===""||k==="")&&(I=!1);I&&(this.diagnostics={runnable:q,programLog:x,vertexShader:{log:y,prefix:m},fragmentShader:{log:k,prefix:d}})}r.deleteShader(R),r.deleteShader(w);let b;this.getUniforms=function(){return b===void 0&&(b=new ns(r,v)),b};let D;return this.getAttributes=function(){return D===void 0&&(D=og(r,v)),D},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=eg++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=R,this.fragmentShader=w,this}let xg=0;class Mg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Sg(e),t.set(e,n)),n}}class Sg{constructor(e){this.id=xg++,this.code=e,this.usedTimes=0}}function Tg(i,e,t,n,r,s,a){const o=new Dc,l=new Mg,c=[],u=r.isWebGL2,h=r.logarithmicDepthBuffer,f=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(x){return x===0?"uv":`uv${x}`}function m(x,y,k,q,I){const N=q.fog,F=I.geometry,U=x.isMeshStandardMaterial?q.environment:null,B=(x.isMeshStandardMaterial?t:e).get(x.envMap||U),Y=B&&B.mapping===hs?B.image.height:null,ee=g[x.type];x.precision!==null&&(p=r.getMaxPrecision(x.precision),p!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",p,"instead."));const $=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,V=$!==void 0?$.length:0;let W=0;F.morphAttributes.position!==void 0&&(W=1),F.morphAttributes.normal!==void 0&&(W=2),F.morphAttributes.color!==void 0&&(W=3);let ie,ue,fe,ye;if(ee){const it=Xt[ee];ie=it.vertexShader,ue=it.fragmentShader}else ie=x.vertexShader,ue=x.fragmentShader,l.update(x),fe=l.getVertexShaderID(x),ye=l.getFragmentShaderID(x);const Ce=i.getRenderTarget(),Me=I.isInstancedMesh===!0,Xe=!!x.map,Rt=!!x.matcap,Ue=!!B,z=!!x.aoMap,gt=!!x.lightMap,Se=!!x.bumpMap,De=!!x.normalMap,Ae=!!x.displacementMap,nt=!!x.emissiveMap,Oe=!!x.metalnessMap,Ie=!!x.roughnessMap,je=x.anisotropy>0,vt=x.clearcoat>0,Et=x.iridescence>0,A=x.sheen>0,M=x.transmission>0,G=je&&!!x.anisotropyMap,re=vt&&!!x.clearcoatMap,te=vt&&!!x.clearcoatNormalMap,se=vt&&!!x.clearcoatRoughnessMap,ve=Et&&!!x.iridescenceMap,ae=Et&&!!x.iridescenceThicknessMap,X=A&&!!x.sheenColorMap,P=A&&!!x.sheenRoughnessMap,Q=!!x.specularMap,pe=!!x.specularColorMap,le=!!x.specularIntensityMap,de=M&&!!x.transmissionMap,Le=M&&!!x.thicknessMap,Ve=!!x.gradientMap,L=!!x.alphaMap,he=x.alphaTest>0,j=!!x.alphaHash,ne=!!x.extensions,oe=!!F.attributes.uv1,ze=!!F.attributes.uv2,Ze=!!F.attributes.uv3;let et=Vn;return x.toneMapped&&(Ce===null||Ce.isXRRenderTarget===!0)&&(et=i.toneMapping),{isWebGL2:u,shaderID:ee,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:ue,defines:x.defines,customVertexShaderID:fe,customFragmentShaderID:ye,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:p,instancing:Me,instancingColor:Me&&I.instanceColor!==null,supportsVertexTextures:f,outputColorSpace:Ce===null?i.outputColorSpace:Ce.isXRRenderTarget===!0?Ce.texture.colorSpace:pt,map:Xe,matcap:Rt,envMap:Ue,envMapMode:Ue&&B.mapping,envMapCubeUVHeight:Y,aoMap:z,lightMap:gt,bumpMap:Se,normalMap:De,displacementMap:f&&Ae,emissiveMap:nt,normalMapObjectSpace:De&&x.normalMapType===ph,normalMapTangentSpace:De&&x.normalMapType===La,metalnessMap:Oe,roughnessMap:Ie,anisotropy:je,anisotropyMap:G,clearcoat:vt,clearcoatMap:re,clearcoatNormalMap:te,clearcoatRoughnessMap:se,iridescence:Et,iridescenceMap:ve,iridescenceThicknessMap:ae,sheen:A,sheenColorMap:X,sheenRoughnessMap:P,specularMap:Q,specularColorMap:pe,specularIntensityMap:le,transmission:M,transmissionMap:de,thicknessMap:Le,gradientMap:Ve,opaque:x.transparent===!1&&x.blending===Di,alphaMap:L,alphaTest:he,alphaHash:j,combine:x.combine,mapUv:Xe&&v(x.map.channel),aoMapUv:z&&v(x.aoMap.channel),lightMapUv:gt&&v(x.lightMap.channel),bumpMapUv:Se&&v(x.bumpMap.channel),normalMapUv:De&&v(x.normalMap.channel),displacementMapUv:Ae&&v(x.displacementMap.channel),emissiveMapUv:nt&&v(x.emissiveMap.channel),metalnessMapUv:Oe&&v(x.metalnessMap.channel),roughnessMapUv:Ie&&v(x.roughnessMap.channel),anisotropyMapUv:G&&v(x.anisotropyMap.channel),clearcoatMapUv:re&&v(x.clearcoatMap.channel),clearcoatNormalMapUv:te&&v(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&v(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&v(x.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&v(x.iridescenceThicknessMap.channel),sheenColorMapUv:X&&v(x.sheenColorMap.channel),sheenRoughnessMapUv:P&&v(x.sheenRoughnessMap.channel),specularMapUv:Q&&v(x.specularMap.channel),specularColorMapUv:pe&&v(x.specularColorMap.channel),specularIntensityMapUv:le&&v(x.specularIntensityMap.channel),transmissionMapUv:de&&v(x.transmissionMap.channel),thicknessMapUv:Le&&v(x.thicknessMap.channel),alphaMapUv:L&&v(x.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(De||je),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,vertexUv1s:oe,vertexUv2s:ze,vertexUv3s:Ze,pointsUvs:I.isPoints===!0&&!!F.attributes.uv&&(Xe||L),fog:!!N,useFog:x.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:I.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:V,morphTextureStride:W,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,useLegacyLights:i._useLegacyLights,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&x.map.colorSpace===Ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ot,flipSided:x.side===At,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionDerivatives:ne&&x.extensions.derivatives===!0,extensionFragDepth:ne&&x.extensions.fragDepth===!0,extensionDrawBuffers:ne&&x.extensions.drawBuffers===!0,extensionShaderTextureLOD:ne&&x.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:x.customProgramCacheKey()}}function d(x){const y=[];if(x.shaderID?y.push(x.shaderID):(y.push(x.customVertexShaderID),y.push(x.customFragmentShaderID)),x.defines!==void 0)for(const k in x.defines)y.push(k),y.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(S(y,x),_(y,x),y.push(i.outputColorSpace)),y.push(x.customProgramCacheKey),y.join()}function S(x,y){x.push(y.precision),x.push(y.outputColorSpace),x.push(y.envMapMode),x.push(y.envMapCubeUVHeight),x.push(y.mapUv),x.push(y.alphaMapUv),x.push(y.lightMapUv),x.push(y.aoMapUv),x.push(y.bumpMapUv),x.push(y.normalMapUv),x.push(y.displacementMapUv),x.push(y.emissiveMapUv),x.push(y.metalnessMapUv),x.push(y.roughnessMapUv),x.push(y.anisotropyMapUv),x.push(y.clearcoatMapUv),x.push(y.clearcoatNormalMapUv),x.push(y.clearcoatRoughnessMapUv),x.push(y.iridescenceMapUv),x.push(y.iridescenceThicknessMapUv),x.push(y.sheenColorMapUv),x.push(y.sheenRoughnessMapUv),x.push(y.specularMapUv),x.push(y.specularColorMapUv),x.push(y.specularIntensityMapUv),x.push(y.transmissionMapUv),x.push(y.thicknessMapUv),x.push(y.combine),x.push(y.fogExp2),x.push(y.sizeAttenuation),x.push(y.morphTargetsCount),x.push(y.morphAttributeCount),x.push(y.numDirLights),x.push(y.numPointLights),x.push(y.numSpotLights),x.push(y.numSpotLightMaps),x.push(y.numHemiLights),x.push(y.numRectAreaLights),x.push(y.numDirLightShadows),x.push(y.numPointLightShadows),x.push(y.numSpotLightShadows),x.push(y.numSpotLightShadowsWithMaps),x.push(y.shadowMapType),x.push(y.toneMapping),x.push(y.numClippingPlanes),x.push(y.numClipIntersection),x.push(y.depthPacking)}function _(x,y){o.disableAll(),y.isWebGL2&&o.enable(0),y.supportsVertexTextures&&o.enable(1),y.instancing&&o.enable(2),y.instancingColor&&o.enable(3),y.matcap&&o.enable(4),y.envMap&&o.enable(5),y.normalMapObjectSpace&&o.enable(6),y.normalMapTangentSpace&&o.enable(7),y.clearcoat&&o.enable(8),y.iridescence&&o.enable(9),y.alphaTest&&o.enable(10),y.vertexColors&&o.enable(11),y.vertexAlphas&&o.enable(12),y.vertexUv1s&&o.enable(13),y.vertexUv2s&&o.enable(14),y.vertexUv3s&&o.enable(15),y.vertexTangents&&o.enable(16),y.anisotropy&&o.enable(17),x.push(o.mask),o.disableAll(),y.fog&&o.enable(0),y.useFog&&o.enable(1),y.flatShading&&o.enable(2),y.logarithmicDepthBuffer&&o.enable(3),y.skinning&&o.enable(4),y.morphTargets&&o.enable(5),y.morphNormals&&o.enable(6),y.morphColors&&o.enable(7),y.premultipliedAlpha&&o.enable(8),y.shadowMapEnabled&&o.enable(9),y.useLegacyLights&&o.enable(10),y.doubleSided&&o.enable(11),y.flipSided&&o.enable(12),y.useDepthPacking&&o.enable(13),y.dithering&&o.enable(14),y.transmission&&o.enable(15),y.sheen&&o.enable(16),y.opaque&&o.enable(17),y.pointsUvs&&o.enable(18),y.decodeVideoTexture&&o.enable(19),x.push(o.mask)}function T(x){const y=g[x.type];let k;if(y){const q=Xt[y];k=ls.clone(q.uniforms)}else k=x.uniforms;return k}function R(x,y){let k;for(let q=0,I=c.length;q<I;q++){const N=c[q];if(N.cacheKey===y){k=N,++k.usedTimes;break}}return k===void 0&&(k=new _g(i,y,x,s),c.push(k)),k}function w(x){if(--x.usedTimes===0){const y=c.indexOf(x);c[y]=c[c.length-1],c.pop(),x.destroy()}}function b(x){l.remove(x)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:T,acquireProgram:R,releaseProgram:w,releaseShaderCache:b,programs:c,dispose:D}}function yg(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function Eg(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function vl(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,f,p,g,v,m){let d=i[e];return d===void 0?(d={id:h.id,object:h,geometry:f,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},i[e]=d):(d.id=h.id,d.object=h,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=h.renderOrder,d.z=v,d.group=m),e++,d}function o(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?n.push(d):p.transparent===!0?r.push(d):t.push(d)}function l(h,f,p,g,v,m){const d=a(h,f,p,g,v,m);p.transmission>0?n.unshift(d):p.transparent===!0?r.unshift(d):t.unshift(d)}function c(h,f){t.length>1&&t.sort(h||Eg),n.length>1&&n.sort(f||gl),r.length>1&&r.sort(f||gl)}function u(){for(let h=e,f=i.length;h<f;h++){const p=i[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function bg(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new vl,i.set(n,[a])):r>=s.length?(a=new vl,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function wg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new xe};break;case"SpotLight":t={position:new C,direction:new C,color:new xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new xe,groundColor:new xe};break;case"RectAreaLight":t={color:new xe,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function Ag(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new me,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Rg=0;function Pg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function Cg(i,e){const t=new wg,n=Ag(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new C);const s=new C,a=new _e,o=new _e;function l(u,h){let f=0,p=0,g=0;for(let k=0;k<9;k++)r.probe[k].set(0,0,0);let v=0,m=0,d=0,S=0,_=0,T=0,R=0,w=0,b=0,D=0;u.sort(Pg);const x=h===!0?Math.PI:1;for(let k=0,q=u.length;k<q;k++){const I=u[k],N=I.color,F=I.intensity,U=I.distance,B=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)f+=N.r*F*x,p+=N.g*F*x,g+=N.b*F*x;else if(I.isLightProbe)for(let Y=0;Y<9;Y++)r.probe[Y].addScaledVector(I.sh.coefficients[Y],F);else if(I.isDirectionalLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*x),I.castShadow){const ee=I.shadow,$=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,r.directionalShadow[v]=$,r.directionalShadowMap[v]=B,r.directionalShadowMatrix[v]=I.shadow.matrix,T++}r.directional[v]=Y,v++}else if(I.isSpotLight){const Y=t.get(I);Y.position.setFromMatrixPosition(I.matrixWorld),Y.color.copy(N).multiplyScalar(F*x),Y.distance=U,Y.coneCos=Math.cos(I.angle),Y.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Y.decay=I.decay,r.spot[d]=Y;const ee=I.shadow;if(I.map&&(r.spotLightMap[b]=I.map,b++,ee.updateMatrices(I),I.castShadow&&D++),r.spotLightMatrix[d]=ee.matrix,I.castShadow){const $=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,r.spotShadow[d]=$,r.spotShadowMap[d]=B,w++}d++}else if(I.isRectAreaLight){const Y=t.get(I);Y.color.copy(N).multiplyScalar(F),Y.halfWidth.set(I.width*.5,0,0),Y.halfHeight.set(0,I.height*.5,0),r.rectArea[S]=Y,S++}else if(I.isPointLight){const Y=t.get(I);if(Y.color.copy(I.color).multiplyScalar(I.intensity*x),Y.distance=I.distance,Y.decay=I.decay,I.castShadow){const ee=I.shadow,$=n.get(I);$.shadowBias=ee.bias,$.shadowNormalBias=ee.normalBias,$.shadowRadius=ee.radius,$.shadowMapSize=ee.mapSize,$.shadowCameraNear=ee.camera.near,$.shadowCameraFar=ee.camera.far,r.pointShadow[m]=$,r.pointShadowMap[m]=B,r.pointShadowMatrix[m]=I.shadow.matrix,R++}r.point[m]=Y,m++}else if(I.isHemisphereLight){const Y=t.get(I);Y.skyColor.copy(I.color).multiplyScalar(F*x),Y.groundColor.copy(I.groundColor).multiplyScalar(F*x),r.hemi[_]=Y,_++}}S>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_FLOAT_1,r.rectAreaLTC2=ce.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=ce.LTC_HALF_1,r.rectAreaLTC2=ce.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=f,r.ambient[1]=p,r.ambient[2]=g;const y=r.hash;(y.directionalLength!==v||y.pointLength!==m||y.spotLength!==d||y.rectAreaLength!==S||y.hemiLength!==_||y.numDirectionalShadows!==T||y.numPointShadows!==R||y.numSpotShadows!==w||y.numSpotMaps!==b)&&(r.directional.length=v,r.spot.length=d,r.rectArea.length=S,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=T,r.directionalShadowMap.length=T,r.pointShadow.length=R,r.pointShadowMap.length=R,r.spotShadow.length=w,r.spotShadowMap.length=w,r.directionalShadowMatrix.length=T,r.pointShadowMatrix.length=R,r.spotLightMatrix.length=w+b-D,r.spotLightMap.length=b,r.numSpotLightShadowsWithMaps=D,y.directionalLength=v,y.pointLength=m,y.spotLength=d,y.rectAreaLength=S,y.hemiLength=_,y.numDirectionalShadows=T,y.numPointShadows=R,y.numSpotShadows=w,y.numSpotMaps=b,r.version=Rg++)}function c(u,h){let f=0,p=0,g=0,v=0,m=0;const d=h.matrixWorldInverse;for(let S=0,_=u.length;S<_;S++){const T=u[S];if(T.isDirectionalLight){const R=r.directional[f];R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),f++}else if(T.isSpotLight){const R=r.spot[g];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(d),R.direction.setFromMatrixPosition(T.matrixWorld),s.setFromMatrixPosition(T.target.matrixWorld),R.direction.sub(s),R.direction.transformDirection(d),g++}else if(T.isRectAreaLight){const R=r.rectArea[v];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(d),o.identity(),a.copy(T.matrixWorld),a.premultiply(d),o.extractRotation(a),R.halfWidth.set(T.width*.5,0,0),R.halfHeight.set(0,T.height*.5,0),R.halfWidth.applyMatrix4(o),R.halfHeight.applyMatrix4(o),v++}else if(T.isPointLight){const R=r.point[p];R.position.setFromMatrixPosition(T.matrixWorld),R.position.applyMatrix4(d),p++}else if(T.isHemisphereLight){const R=r.hemi[m];R.direction.setFromMatrixPosition(T.matrixWorld),R.direction.transformDirection(d),m++}}}return{setup:l,setupView:c,state:r}}function _l(i,e){const t=new Cg(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function a(h){n.push(h)}function o(h){r.push(h)}function l(h){t.setup(n,h)}function c(h){t.setupView(n,h)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:l,setupLightsView:c,pushLight:a,pushShadow:o}}function Lg(i,e){let t=new WeakMap;function n(s,a=0){const o=t.get(s);let l;return o===void 0?(l=new _l(i,e),t.set(s,[l])):a>=o.length?(l=new _l(i,e),o.push(l)):l=o[a],l}function r(){t=new WeakMap}return{get:n,dispose:r}}class Dg extends Yt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_r,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ig extends Yt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Ug=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ng=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Fg(i,e,t){let n=new Ua;const r=new me,s=new me,a=new Je,o=new Dg({depthPacking:dh}),l=new Ig,c={},u=t.maxTextureSize,h={[hn]:At,[At]:hn,[Ot]:Ot},f=new at({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new me},radius:{value:4}},vertexShader:Ug,fragmentShader:Ng}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Bt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let d=this.type;this.render=function(R,w,b){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const D=i.getRenderTarget(),x=i.getActiveCubeFace(),y=i.getActiveMipmapLevel(),k=i.state;k.setBlending(ft),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const q=d!==bn&&this.type===bn,I=d===bn&&this.type!==bn;for(let N=0,F=R.length;N<F;N++){const U=R[N],B=U.shadow;if(B===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;r.copy(B.mapSize);const Y=B.getFrameExtents();if(r.multiply(Y),s.copy(B.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/Y.x),r.x=s.x*Y.x,B.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/Y.y),r.y=s.y*Y.y,B.mapSize.y=s.y)),B.map===null||q===!0||I===!0){const $=this.type!==bn?{minFilter:be,magFilter:be}:{};B.map!==null&&B.map.dispose(),B.map=new tt(r.x,r.y,$),B.map.texture.name=U.name+".shadowMap",B.camera.updateProjectionMatrix()}i.setRenderTarget(B.map),i.clear();const ee=B.getViewportCount();for(let $=0;$<ee;$++){const V=B.getViewport($);a.set(s.x*V.x,s.y*V.y,s.x*V.z,s.y*V.w),k.viewport(a),B.updateMatrices(U,$),n=B.getFrustum(),T(w,b,B.camera,U,this.type)}B.isPointLightShadow!==!0&&this.type===bn&&S(B,b),B.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(D,x,y)};function S(R,w){const b=e.update(v);f.defines.VSM_SAMPLES!==R.blurSamples&&(f.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new tt(r.x,r.y)),f.uniforms.shadow_pass.value=R.map.texture,f.uniforms.resolution.value=R.mapSize,f.uniforms.radius.value=R.radius,i.setRenderTarget(R.mapPass),i.clear(),i.renderBufferDirect(w,null,b,f,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,i.setRenderTarget(R.map),i.clear(),i.renderBufferDirect(w,null,b,p,v,null)}function _(R,w,b,D){let x=null;const y=b.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)x=y;else if(x=b.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const k=x.uuid,q=w.uuid;let I=c[k];I===void 0&&(I={},c[k]=I);let N=I[q];N===void 0&&(N=x.clone(),I[q]=N),x=N}if(x.visible=w.visible,x.wireframe=w.wireframe,D===bn?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,b.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const k=i.properties.get(x);k.light=b}return x}function T(R,w,b,D,x){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&x===bn)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,R.matrixWorld);const q=e.update(R),I=R.material;if(Array.isArray(I)){const N=q.groups;for(let F=0,U=N.length;F<U;F++){const B=N[F],Y=I[B.materialIndex];if(Y&&Y.visible){const ee=_(R,Y,D,x);i.renderBufferDirect(b,null,q,ee,R,B)}}}else if(I.visible){const N=_(R,I,D,x);i.renderBufferDirect(b,null,q,N,R,null)}}const k=R.children;for(let q=0,I=k.length;q<I;q++)T(k[q],w,b,D,x)}}function Og(i,e,t){const n=t.isWebGL2;function r(){let L=!1;const he=new Je;let j=null;const ne=new Je(0,0,0,0);return{setMask:function(oe){j!==oe&&!L&&(i.colorMask(oe,oe,oe,oe),j=oe)},setLocked:function(oe){L=oe},setClear:function(oe,ze,Ze,et,zt){zt===!0&&(oe*=et,ze*=et,Ze*=et),he.set(oe,ze,Ze,et),ne.equals(he)===!1&&(i.clearColor(oe,ze,Ze,et),ne.copy(he))},reset:function(){L=!1,j=null,ne.set(-1,0,0,0)}}}function s(){let L=!1,he=null,j=null,ne=null;return{setTest:function(oe){oe?Ce(i.DEPTH_TEST):Me(i.DEPTH_TEST)},setMask:function(oe){he!==oe&&!L&&(i.depthMask(oe),he=oe)},setFunc:function(oe){if(j!==oe){switch(oe){case Wu:i.depthFunc(i.NEVER);break;case Xu:i.depthFunc(i.ALWAYS);break;case ju:i.depthFunc(i.LESS);break;case fa:i.depthFunc(i.LEQUAL);break;case qu:i.depthFunc(i.EQUAL);break;case Yu:i.depthFunc(i.GEQUAL);break;case Ku:i.depthFunc(i.GREATER);break;case Zu:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}j=oe}},setLocked:function(oe){L=oe},setClear:function(oe){ne!==oe&&(i.clearDepth(oe),ne=oe)},reset:function(){L=!1,he=null,j=null,ne=null}}}function a(){let L=!1,he=null,j=null,ne=null,oe=null,ze=null,Ze=null,et=null,zt=null;return{setTest:function(it){L||(it?Ce(i.STENCIL_TEST):Me(i.STENCIL_TEST))},setMask:function(it){he!==it&&!L&&(i.stencilMask(it),he=it)},setFunc:function(it,ln,It){(j!==it||ne!==ln||oe!==It)&&(i.stencilFunc(it,ln,It),j=it,ne=ln,oe=It)},setOp:function(it,ln,It){(ze!==it||Ze!==ln||et!==It)&&(i.stencilOp(it,ln,It),ze=it,Ze=ln,et=It)},setLocked:function(it){L=it},setClear:function(it){zt!==it&&(i.clearStencil(it),zt=it)},reset:function(){L=!1,he=null,j=null,ne=null,oe=null,ze=null,Ze=null,et=null,zt=null}}}const o=new r,l=new s,c=new a,u=new WeakMap,h=new WeakMap;let f={},p={},g=new WeakMap,v=[],m=null,d=!1,S=null,_=null,T=null,R=null,w=null,b=null,D=null,x=!1,y=null,k=null,q=null,I=null,N=null;const F=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let U=!1,B=0;const Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(Y)[1]),U=B>=1):Y.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),U=B>=2);let ee=null,$={};const V=i.getParameter(i.SCISSOR_BOX),W=i.getParameter(i.VIEWPORT),ie=new Je().fromArray(V),ue=new Je().fromArray(W);function fe(L,he,j,ne){const oe=new Uint8Array(4),ze=i.createTexture();i.bindTexture(L,ze),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<j;Ze++)n&&(L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY)?i.texImage3D(he,0,i.RGBA,1,1,ne,0,i.RGBA,i.UNSIGNED_BYTE,oe):i.texImage2D(he+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,oe);return ze}const ye={};ye[i.TEXTURE_2D]=fe(i.TEXTURE_2D,i.TEXTURE_2D,1),ye[i.TEXTURE_CUBE_MAP]=fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),n&&(ye[i.TEXTURE_2D_ARRAY]=fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ye[i.TEXTURE_3D]=fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1)),o.setClear(0,0,0,1),l.setClear(1),c.setClear(0),Ce(i.DEPTH_TEST),l.setFunc(fa),Ae(!1),nt(to),Ce(i.CULL_FACE),Se(ft);function Ce(L){f[L]!==!0&&(i.enable(L),f[L]=!0)}function Me(L){f[L]!==!1&&(i.disable(L),f[L]=!1)}function Xe(L,he){return p[L]!==he?(i.bindFramebuffer(L,he),p[L]=he,n&&(L===i.DRAW_FRAMEBUFFER&&(p[i.FRAMEBUFFER]=he),L===i.FRAMEBUFFER&&(p[i.DRAW_FRAMEBUFFER]=he)),!0):!1}function Rt(L,he){let j=v,ne=!1;if(L)if(j=g.get(he),j===void 0&&(j=[],g.set(he,j)),L.isWebGLMultipleRenderTargets){const oe=L.texture;if(j.length!==oe.length||j[0]!==i.COLOR_ATTACHMENT0){for(let ze=0,Ze=oe.length;ze<Ze;ze++)j[ze]=i.COLOR_ATTACHMENT0+ze;j.length=oe.length,ne=!0}}else j[0]!==i.COLOR_ATTACHMENT0&&(j[0]=i.COLOR_ATTACHMENT0,ne=!0);else j[0]!==i.BACK&&(j[0]=i.BACK,ne=!0);ne&&(t.isWebGL2?i.drawBuffers(j):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(j))}function Ue(L){return m!==L?(i.useProgram(L),m=L,!0):!1}const z={[Pi]:i.FUNC_ADD,[Iu]:i.FUNC_SUBTRACT,[Uu]:i.FUNC_REVERSE_SUBTRACT};if(n)z[so]=i.MIN,z[ao]=i.MAX;else{const L=e.get("EXT_blend_minmax");L!==null&&(z[so]=L.MIN_EXT,z[ao]=L.MAX_EXT)}const gt={[Nu]:i.ZERO,[Fu]:i.ONE,[Ou]:i.SRC_COLOR,[dc]:i.SRC_ALPHA,[Vu]:i.SRC_ALPHA_SATURATE,[Gu]:i.DST_COLOR,[zu]:i.DST_ALPHA,[Bu]:i.ONE_MINUS_SRC_COLOR,[pc]:i.ONE_MINUS_SRC_ALPHA,[ku]:i.ONE_MINUS_DST_COLOR,[Hu]:i.ONE_MINUS_DST_ALPHA};function Se(L,he,j,ne,oe,ze,Ze,et){if(L===ft){d===!0&&(Me(i.BLEND),d=!1);return}if(d===!1&&(Ce(i.BLEND),d=!0),L!==Du){if(L!==S||et!==x){if((_!==Pi||w!==Pi)&&(i.blendEquation(i.FUNC_ADD),_=Pi,w=Pi),et)switch(L){case Di:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.ONE,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Di:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case no:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case io:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ro:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}T=null,R=null,b=null,D=null,S=L,x=et}return}oe=oe||he,ze=ze||j,Ze=Ze||ne,(he!==_||oe!==w)&&(i.blendEquationSeparate(z[he],z[oe]),_=he,w=oe),(j!==T||ne!==R||ze!==b||Ze!==D)&&(i.blendFuncSeparate(gt[j],gt[ne],gt[ze],gt[Ze]),T=j,R=ne,b=ze,D=Ze),S=L,x=!1}function De(L,he){L.side===Ot?Me(i.CULL_FACE):Ce(i.CULL_FACE);let j=L.side===At;he&&(j=!j),Ae(j),L.blending===Di&&L.transparent===!1?Se(ft):Se(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.premultipliedAlpha),l.setFunc(L.depthFunc),l.setTest(L.depthTest),l.setMask(L.depthWrite),o.setMask(L.colorWrite);const ne=L.stencilWrite;c.setTest(ne),ne&&(c.setMask(L.stencilWriteMask),c.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),c.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ie(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Ce(i.SAMPLE_ALPHA_TO_COVERAGE):Me(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ae(L){y!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),y=L)}function nt(L){L!==Pu?(Ce(i.CULL_FACE),L!==k&&(L===to?i.cullFace(i.BACK):L===Cu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Me(i.CULL_FACE),k=L}function Oe(L){L!==q&&(U&&i.lineWidth(L),q=L)}function Ie(L,he,j){L?(Ce(i.POLYGON_OFFSET_FILL),(I!==he||N!==j)&&(i.polygonOffset(he,j),I=he,N=j)):Me(i.POLYGON_OFFSET_FILL)}function je(L){L?Ce(i.SCISSOR_TEST):Me(i.SCISSOR_TEST)}function vt(L){L===void 0&&(L=i.TEXTURE0+F-1),ee!==L&&(i.activeTexture(L),ee=L)}function Et(L,he,j){j===void 0&&(ee===null?j=i.TEXTURE0+F-1:j=ee);let ne=$[j];ne===void 0&&(ne={type:void 0,texture:void 0},$[j]=ne),(ne.type!==L||ne.texture!==he)&&(ee!==j&&(i.activeTexture(j),ee=j),i.bindTexture(L,he||ye[L]),ne.type=L,ne.texture=he)}function A(){const L=$[ee];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function M(){try{i.compressedTexImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function G(){try{i.compressedTexImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function re(){try{i.texSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function te(){try{i.texSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function se(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ve(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{i.texStorage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{i.texStorage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function P(){try{i.texImage2D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Q(){try{i.texImage3D.apply(i,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function pe(L){ie.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),ie.copy(L))}function le(L){ue.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),ue.copy(L))}function de(L,he){let j=h.get(he);j===void 0&&(j=new WeakMap,h.set(he,j));let ne=j.get(L);ne===void 0&&(ne=i.getUniformBlockIndex(he,L.name),j.set(L,ne))}function Le(L,he){const ne=h.get(he).get(L);u.get(he)!==ne&&(i.uniformBlockBinding(he,ne,L.__bindingPointIndex),u.set(he,ne))}function Ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),n===!0&&(i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},ee=null,$={},p={},g=new WeakMap,v=[],m=null,d=!1,S=null,_=null,T=null,R=null,w=null,b=null,D=null,x=!1,y=null,k=null,q=null,I=null,N=null,ie.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),o.reset(),l.reset(),c.reset()}return{buffers:{color:o,depth:l,stencil:c},enable:Ce,disable:Me,bindFramebuffer:Xe,drawBuffers:Rt,useProgram:Ue,setBlending:Se,setMaterial:De,setFlipSided:Ae,setCullFace:nt,setLineWidth:Oe,setPolygonOffset:Ie,setScissorTest:je,activeTexture:vt,bindTexture:Et,unbindTexture:A,compressedTexImage2D:M,compressedTexImage3D:G,texImage2D:P,texImage3D:Q,updateUBOMapping:de,uniformBlockBinding:Le,texStorage2D:ae,texStorage3D:X,texSubImage2D:re,texSubImage3D:te,compressedTexSubImage2D:se,compressedTexSubImage3D:ve,scissor:pe,viewport:le,reset:Ve}}function Bg(i,e,t,n,r,s,a){const o=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,h=r.maxSamples,f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(A,M){return d?new OffscreenCanvas(A,M):gr("canvas")}function _(A,M,G,re){let te=1;if((A.width>re||A.height>re)&&(te=re/Math.max(A.width,A.height)),te<1||M===!0)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap){const se=M?os:Math.floor,ve=se(te*A.width),ae=se(te*A.height);v===void 0&&(v=S(ve,ae));const X=G?S(ve,ae):v;return X.width=ve,X.height=ae,X.getContext("2d").drawImage(A,0,0,ve,ae),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+A.width+"x"+A.height+") to ("+ve+"x"+ae+")."),X}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+A.width+"x"+A.height+")."),A;return A}function T(A){return Ma(A.width)&&Ma(A.height)}function R(A){return o?!1:A.wrapS!==xt||A.wrapT!==xt||A.minFilter!==be&&A.minFilter!==Ke}function w(A,M){return A.generateMipmaps&&M&&A.minFilter!==be&&A.minFilter!==Ke}function b(A){i.generateMipmap(A)}function D(A,M,G,re,te=!1){if(o===!1)return M;if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let se=M;return M===i.RED&&(G===i.FLOAT&&(se=i.R32F),G===i.HALF_FLOAT&&(se=i.R16F),G===i.UNSIGNED_BYTE&&(se=i.R8)),M===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(se=i.R8UI),G===i.UNSIGNED_SHORT&&(se=i.R16UI),G===i.UNSIGNED_INT&&(se=i.R32UI),G===i.BYTE&&(se=i.R8I),G===i.SHORT&&(se=i.R16I),G===i.INT&&(se=i.R32I)),M===i.RG&&(G===i.FLOAT&&(se=i.RG32F),G===i.HALF_FLOAT&&(se=i.RG16F),G===i.UNSIGNED_BYTE&&(se=i.RG8)),M===i.RGBA&&(G===i.FLOAT&&(se=i.RGBA32F),G===i.HALF_FLOAT&&(se=i.RGBA16F),G===i.UNSIGNED_BYTE&&(se=re===Ye&&te===!1?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)),(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function x(A,M,G){return w(A,G)===!0||A.isFramebufferTexture&&A.minFilter!==be&&A.minFilter!==Ke?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function y(A){return A===be||A===pa||A===ts?i.NEAREST:i.LINEAR}function k(A){const M=A.target;M.removeEventListener("dispose",k),I(M),M.isVideoTexture&&g.delete(M)}function q(A){const M=A.target;M.removeEventListener("dispose",q),F(M)}function I(A){const M=n.get(A);if(M.__webglInit===void 0)return;const G=A.source,re=m.get(G);if(re){const te=re[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&N(A),Object.keys(re).length===0&&m.delete(G)}n.remove(A)}function N(A){const M=n.get(A);i.deleteTexture(M.__webglTexture);const G=A.source,re=m.get(G);delete re[M.__cacheKey],a.memory.textures--}function F(A){const M=A.texture,G=n.get(A),re=n.get(M);if(re.__webglTexture!==void 0&&(i.deleteTexture(re.__webglTexture),a.memory.textures--),A.depthTexture&&A.depthTexture.dispose(),A.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(G.__webglFramebuffer[te]))for(let se=0;se<G.__webglFramebuffer[te].length;se++)i.deleteFramebuffer(G.__webglFramebuffer[te][se]);else i.deleteFramebuffer(G.__webglFramebuffer[te]);G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer[te])}else{if(Array.isArray(G.__webglFramebuffer))for(let te=0;te<G.__webglFramebuffer.length;te++)i.deleteFramebuffer(G.__webglFramebuffer[te]);else i.deleteFramebuffer(G.__webglFramebuffer);if(G.__webglDepthbuffer&&i.deleteRenderbuffer(G.__webglDepthbuffer),G.__webglMultisampledFramebuffer&&i.deleteFramebuffer(G.__webglMultisampledFramebuffer),G.__webglColorRenderbuffer)for(let te=0;te<G.__webglColorRenderbuffer.length;te++)G.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(G.__webglColorRenderbuffer[te]);G.__webglDepthRenderbuffer&&i.deleteRenderbuffer(G.__webglDepthRenderbuffer)}if(A.isWebGLMultipleRenderTargets)for(let te=0,se=M.length;te<se;te++){const ve=n.get(M[te]);ve.__webglTexture&&(i.deleteTexture(ve.__webglTexture),a.memory.textures--),n.remove(M[te])}n.remove(M),n.remove(A)}let U=0;function B(){U=0}function Y(){const A=U;return A>=l&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+l),U+=1,A}function ee(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function $(A,M){const G=n.get(A);if(A.isVideoTexture&&vt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const re=A.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Xe(G,A,M);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+M)}function V(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){Xe(G,A,M);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+M)}function W(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){Xe(G,A,M);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+M)}function ie(A,M){const G=n.get(A);if(A.version>0&&G.__version!==A.version){Rt(G,A,M);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+M)}const ue={[fn]:i.REPEAT,[xt]:i.CLAMP_TO_EDGE,[rs]:i.MIRRORED_REPEAT},fe={[be]:i.NEAREST,[pa]:i.NEAREST_MIPMAP_NEAREST,[ts]:i.NEAREST_MIPMAP_LINEAR,[Ke]:i.LINEAR,[_c]:i.LINEAR_MIPMAP_NEAREST,[Cn]:i.LINEAR_MIPMAP_LINEAR},ye={[gh]:i.NEVER,[yh]:i.ALWAYS,[vh]:i.LESS,[xh]:i.LEQUAL,[_h]:i.EQUAL,[Th]:i.GEQUAL,[Mh]:i.GREATER,[Sh]:i.NOTEQUAL};function Ce(A,M,G){if(G?(i.texParameteri(A,i.TEXTURE_WRAP_S,ue[M.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,ue[M.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,ue[M.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,fe[M.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,fe[M.minFilter])):(i.texParameteri(A,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(A,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,i.CLAMP_TO_EDGE),(M.wrapS!==xt||M.wrapT!==xt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(A,i.TEXTURE_MAG_FILTER,y(M.magFilter)),i.texParameteri(A,i.TEXTURE_MIN_FILTER,y(M.minFilter)),M.minFilter!==be&&M.minFilter!==Ke&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),M.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,ye[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const re=e.get("EXT_texture_filter_anisotropic");if(M.magFilter===be||M.minFilter!==ts&&M.minFilter!==Cn||M.type===ke&&e.has("OES_texture_float_linear")===!1||o===!1&&M.type===jt&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(A,re.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Me(A,M){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",k));const re=M.source;let te=m.get(re);te===void 0&&(te={},m.set(re,te));const se=ee(M);if(se!==A.__cacheKey){te[se]===void 0&&(te[se]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),te[se].usedTimes++;const ve=te[A.__cacheKey];ve!==void 0&&(te[A.__cacheKey].usedTimes--,ve.usedTimes===0&&N(M)),A.__cacheKey=se,A.__webglTexture=te[se].texture}return G}function Xe(A,M,G){let re=i.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),M.isData3DTexture&&(re=i.TEXTURE_3D);const te=Me(A,M),se=M.source;t.bindTexture(re,A.__webglTexture,i.TEXTURE0+G);const ve=n.get(se);if(se.version!==ve.__version||te===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ae=R(M)&&T(M.image)===!1;let X=_(M.image,ae,!1,u);X=Et(M,X);const P=T(X)||o,Q=s.convert(M.format,M.colorSpace);let pe=s.convert(M.type),le=D(M.internalFormat,Q,pe,M.colorSpace,M.isVideoTexture);Ce(re,M,P);let de;const Le=M.mipmaps,Ve=o&&M.isVideoTexture!==!0,L=ve.__version===void 0||te===!0,he=x(M,X,P);if(M.isDepthTexture)le=i.DEPTH_COMPONENT,o?M.type===ke?le=i.DEPTH_COMPONENT32F:M.type===An?le=i.DEPTH_COMPONENT24:M.type===Wn?le=i.DEPTH24_STENCIL8:le=i.DEPTH_COMPONENT16:M.type===ke&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===si&&le===i.DEPTH_COMPONENT&&M.type!==Ca&&M.type!==An&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=An,pe=s.convert(M.type)),M.format===oi&&le===i.DEPTH_COMPONENT&&(le=i.DEPTH_STENCIL,M.type!==Wn&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=Wn,pe=s.convert(M.type))),L&&(Ve?t.texStorage2D(i.TEXTURE_2D,1,le,X.width,X.height):t.texImage2D(i.TEXTURE_2D,0,le,X.width,X.height,0,Q,pe,null));else if(M.isDataTexture)if(Le.length>0&&P){Ve&&L&&t.texStorage2D(i.TEXTURE_2D,he,le,Le[0].width,Le[0].height);for(let j=0,ne=Le.length;j<ne;j++)de=Le[j],Ve?t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,Q,pe,de.data):t.texImage2D(i.TEXTURE_2D,j,le,de.width,de.height,0,Q,pe,de.data);M.generateMipmaps=!1}else Ve?(L&&t.texStorage2D(i.TEXTURE_2D,he,le,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,X.width,X.height,Q,pe,X.data)):t.texImage2D(i.TEXTURE_2D,0,le,X.width,X.height,0,Q,pe,X.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,Le[0].width,Le[0].height,X.depth);for(let j=0,ne=Le.length;j<ne;j++)de=Le[j],M.format!==Mt?Q!==null?Ve?t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,X.depth,Q,de.data,0,0):t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,j,le,de.width,de.height,X.depth,0,de.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(i.TEXTURE_2D_ARRAY,j,0,0,0,de.width,de.height,X.depth,Q,pe,de.data):t.texImage3D(i.TEXTURE_2D_ARRAY,j,le,de.width,de.height,X.depth,0,Q,pe,de.data)}else{Ve&&L&&t.texStorage2D(i.TEXTURE_2D,he,le,Le[0].width,Le[0].height);for(let j=0,ne=Le.length;j<ne;j++)de=Le[j],M.format!==Mt?Q!==null?Ve?t.compressedTexSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,Q,de.data):t.compressedTexImage2D(i.TEXTURE_2D,j,le,de.width,de.height,0,de.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(i.TEXTURE_2D,j,0,0,de.width,de.height,Q,pe,de.data):t.texImage2D(i.TEXTURE_2D,j,le,de.width,de.height,0,Q,pe,de.data)}else if(M.isDataArrayTexture)Ve?(L&&t.texStorage3D(i.TEXTURE_2D_ARRAY,he,le,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,X.width,X.height,X.depth,Q,pe,X.data)):t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,X.width,X.height,X.depth,0,Q,pe,X.data);else if(M.isData3DTexture)Ve?(L&&t.texStorage3D(i.TEXTURE_3D,he,le,X.width,X.height,X.depth),t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,X.width,X.height,X.depth,Q,pe,X.data)):t.texImage3D(i.TEXTURE_3D,0,le,X.width,X.height,X.depth,0,Q,pe,X.data);else if(M.isFramebufferTexture){if(L)if(Ve)t.texStorage2D(i.TEXTURE_2D,he,le,X.width,X.height);else{let j=X.width,ne=X.height;for(let oe=0;oe<he;oe++)t.texImage2D(i.TEXTURE_2D,oe,le,j,ne,0,Q,pe,null),j>>=1,ne>>=1}}else if(Le.length>0&&P){Ve&&L&&t.texStorage2D(i.TEXTURE_2D,he,le,Le[0].width,Le[0].height);for(let j=0,ne=Le.length;j<ne;j++)de=Le[j],Ve?t.texSubImage2D(i.TEXTURE_2D,j,0,0,Q,pe,de):t.texImage2D(i.TEXTURE_2D,j,le,Q,pe,de);M.generateMipmaps=!1}else Ve?(L&&t.texStorage2D(i.TEXTURE_2D,he,le,X.width,X.height),t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,pe,X)):t.texImage2D(i.TEXTURE_2D,0,le,Q,pe,X);w(M,P)&&b(re),ve.__version=se.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Rt(A,M,G){if(M.image.length!==6)return;const re=Me(A,M),te=M.source;t.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const se=n.get(te);if(te.version!==se.__version||re===!0){t.activeTexture(i.TEXTURE0+G),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,M.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,M.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.NONE);const ve=M.isCompressedTexture||M.image[0].isCompressedTexture,ae=M.image[0]&&M.image[0].isDataTexture,X=[];for(let j=0;j<6;j++)!ve&&!ae?X[j]=_(M.image[j],!1,!0,c):X[j]=ae?M.image[j].image:M.image[j],X[j]=Et(M,X[j]);const P=X[0],Q=T(P)||o,pe=s.convert(M.format,M.colorSpace),le=s.convert(M.type),de=D(M.internalFormat,pe,le,M.colorSpace),Le=o&&M.isVideoTexture!==!0,Ve=se.__version===void 0||re===!0;let L=x(M,P,Q);Ce(i.TEXTURE_CUBE_MAP,M,Q);let he;if(ve){Le&&Ve&&t.texStorage2D(i.TEXTURE_CUBE_MAP,L,de,P.width,P.height);for(let j=0;j<6;j++){he=X[j].mipmaps;for(let ne=0;ne<he.length;ne++){const oe=he[ne];M.format!==Mt?pe!==null?Le?t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,oe.width,oe.height,pe,oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,de,oe.width,oe.height,0,oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,0,0,oe.width,oe.height,pe,le,oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne,de,oe.width,oe.height,0,pe,le,oe.data)}}}else{he=M.mipmaps,Le&&Ve&&(he.length>0&&L++,t.texStorage2D(i.TEXTURE_CUBE_MAP,L,de,X[0].width,X[0].height));for(let j=0;j<6;j++)if(ae){Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,X[j].width,X[j].height,pe,le,X[j].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,de,X[j].width,X[j].height,0,pe,le,X[j].data);for(let ne=0;ne<he.length;ne++){const ze=he[ne].image[j].image;Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,ze.width,ze.height,pe,le,ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,de,ze.width,ze.height,0,pe,le,ze.data)}}else{Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,pe,le,X[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,de,pe,le,X[j]);for(let ne=0;ne<he.length;ne++){const oe=he[ne];Le?t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,0,0,pe,le,oe.image[j]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+j,ne+1,de,pe,le,oe.image[j])}}}w(M,Q)&&b(i.TEXTURE_CUBE_MAP),se.__version=te.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function Ue(A,M,G,re,te,se){const ve=s.convert(G.format,G.colorSpace),ae=s.convert(G.type),X=D(G.internalFormat,ve,ae,G.colorSpace);if(!n.get(M).__hasExternalTextures){const Q=Math.max(1,M.width>>se),pe=Math.max(1,M.height>>se);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,se,X,Q,pe,M.depth,0,ve,ae,null):t.texImage2D(te,se,X,Q,pe,0,ve,ae,null)}t.bindFramebuffer(i.FRAMEBUFFER,A),je(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,te,n.get(G).__webglTexture,0,Ie(M)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,te,n.get(G).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function z(A,M,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),M.depthBuffer&&!M.stencilBuffer){let re=i.DEPTH_COMPONENT16;if(G||je(M)){const te=M.depthTexture;te&&te.isDepthTexture&&(te.type===ke?re=i.DEPTH_COMPONENT32F:te.type===An&&(re=i.DEPTH_COMPONENT24));const se=Ie(M);je(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,se,re,M.width,M.height):i.renderbufferStorageMultisample(i.RENDERBUFFER,se,re,M.width,M.height)}else i.renderbufferStorage(i.RENDERBUFFER,re,M.width,M.height);i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.RENDERBUFFER,A)}else if(M.depthBuffer&&M.stencilBuffer){const re=Ie(M);G&&je(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,M.width,M.height):je(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,re,i.DEPTH24_STENCIL8,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,i.DEPTH_STENCIL,M.width,M.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.RENDERBUFFER,A)}else{const re=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let te=0;te<re.length;te++){const se=re[te],ve=s.convert(se.format,se.colorSpace),ae=s.convert(se.type),X=D(se.internalFormat,ve,ae,se.colorSpace),P=Ie(M);G&&je(M)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,P,X,M.width,M.height):je(M)?f.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,P,X,M.width,M.height):i.renderbufferStorage(i.RENDERBUFFER,X,M.width,M.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function gt(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const re=n.get(M.depthTexture).__webglTexture,te=Ie(M);if(M.depthTexture.format===si)je(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(M.depthTexture.format===oi)je(M)?f.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,te):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function Se(A){const M=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");gt(M.__webglFramebuffer,A)}else if(G){M.__webglDepthbuffer=[];for(let re=0;re<6;re++)t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer[re]),M.__webglDepthbuffer[re]=i.createRenderbuffer(),z(M.__webglDepthbuffer[re],A,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),z(M.__webglDepthbuffer,A,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function De(A,M,G){const re=n.get(A);M!==void 0&&Ue(re.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Se(A)}function Ae(A){const M=A.texture,G=n.get(A),re=n.get(M);A.addEventListener("dispose",q),A.isWebGLMultipleRenderTargets!==!0&&(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=M.version,a.memory.textures++);const te=A.isWebGLCubeRenderTarget===!0,se=A.isWebGLMultipleRenderTargets===!0,ve=T(A)||o;if(te){G.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer[ae]=[];for(let X=0;X<M.mipmaps.length;X++)G.__webglFramebuffer[ae][X]=i.createFramebuffer()}else G.__webglFramebuffer[ae]=i.createFramebuffer()}else{if(o&&M.mipmaps&&M.mipmaps.length>0){G.__webglFramebuffer=[];for(let ae=0;ae<M.mipmaps.length;ae++)G.__webglFramebuffer[ae]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(se)if(r.drawBuffers){const ae=A.texture;for(let X=0,P=ae.length;X<P;X++){const Q=n.get(ae[X]);Q.__webglTexture===void 0&&(Q.__webglTexture=i.createTexture(),a.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(o&&A.samples>0&&je(A)===!1){const ae=se?M:[M];G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let X=0;X<ae.length;X++){const P=ae[X];G.__webglColorRenderbuffer[X]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[X]);const Q=s.convert(P.format,P.colorSpace),pe=s.convert(P.type),le=D(P.internalFormat,Q,pe,P.colorSpace,A.isXRRenderTarget===!0),de=Ie(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,de,le,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+X,i.RENDERBUFFER,G.__webglColorRenderbuffer[X])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),z(G.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(te){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,M,ve);for(let ae=0;ae<6;ae++)if(o&&M.mipmaps&&M.mipmaps.length>0)for(let X=0;X<M.mipmaps.length;X++)Ue(G.__webglFramebuffer[ae][X],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,X);else Ue(G.__webglFramebuffer[ae],A,M,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);w(M,ve)&&b(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(se){const ae=A.texture;for(let X=0,P=ae.length;X<P;X++){const Q=ae[X],pe=n.get(Q);t.bindTexture(i.TEXTURE_2D,pe.__webglTexture),Ce(i.TEXTURE_2D,Q,ve),Ue(G.__webglFramebuffer,A,Q,i.COLOR_ATTACHMENT0+X,i.TEXTURE_2D,0),w(Q,ve)&&b(i.TEXTURE_2D)}t.unbindTexture()}else{let ae=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(o?ae=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ae,re.__webglTexture),Ce(ae,M,ve),o&&M.mipmaps&&M.mipmaps.length>0)for(let X=0;X<M.mipmaps.length;X++)Ue(G.__webglFramebuffer[X],A,M,i.COLOR_ATTACHMENT0,ae,X);else Ue(G.__webglFramebuffer,A,M,i.COLOR_ATTACHMENT0,ae,0);w(M,ve)&&b(ae),t.unbindTexture()}A.depthBuffer&&Se(A)}function nt(A){const M=T(A)||o,G=A.isWebGLMultipleRenderTargets===!0?A.texture:[A.texture];for(let re=0,te=G.length;re<te;re++){const se=G[re];if(w(se,M)){const ve=A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,ae=n.get(se).__webglTexture;t.bindTexture(ve,ae),b(ve),t.unbindTexture()}}}function Oe(A){if(o&&A.samples>0&&je(A)===!1){const M=A.isWebGLMultipleRenderTargets?A.texture:[A.texture],G=A.width,re=A.height;let te=i.COLOR_BUFFER_BIT;const se=[],ve=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ae=n.get(A),X=A.isWebGLMultipleRenderTargets===!0;if(X)for(let P=0;P<M.length;P++)t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,ae.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglFramebuffer);for(let P=0;P<M.length;P++){se.push(i.COLOR_ATTACHMENT0+P),A.depthBuffer&&se.push(ve);const Q=ae.__ignoreDepthValues!==void 0?ae.__ignoreDepthValues:!1;if(Q===!1&&(A.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),X&&i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,ae.__webglColorRenderbuffer[P]),Q===!0&&(i.invalidateFramebuffer(i.READ_FRAMEBUFFER,[ve]),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[ve])),X){const pe=n.get(M[P]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,pe,0)}i.blitFramebuffer(0,0,G,re,0,0,G,re,te,i.NEAREST),p&&i.invalidateFramebuffer(i.READ_FRAMEBUFFER,se)}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),X)for(let P=0;P<M.length;P++){t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.RENDERBUFFER,ae.__webglColorRenderbuffer[P]);const Q=n.get(M[P]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,ae.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+P,i.TEXTURE_2D,Q,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,ae.__webglMultisampledFramebuffer)}}function Ie(A){return Math.min(h,A.samples)}function je(A){const M=n.get(A);return o&&A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(A){const M=a.render.frame;g.get(A)!==M&&(g.set(A,M),A.update())}function Et(A,M){const G=A.colorSpace,re=A.format,te=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||A.format===xa||G!==pt&&G!==Xn&&(G===Ye||G===ds?o===!1?e.has("EXT_sRGB")===!0&&re===Mt?(A.format=xa,A.minFilter=Ke,A.generateMipmaps=!1):M=Pc.sRGBToLinear(M):(re!==Mt||te!==Pt)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),M}this.allocateTextureUnit=Y,this.resetTextureUnits=B,this.setTexture2D=$,this.setTexture2DArray=V,this.setTexture3D=W,this.setTextureCube=ie,this.rebindTextures=De,this.setupRenderTarget=Ae,this.updateRenderTargetMipmap=nt,this.updateMultisampleRenderTarget=Oe,this.setupDepthRenderbuffer=Se,this.setupFrameBufferTexture=Ue,this.useMultisampledRTT=je}const zg=0,_t=1;function Hg(i,e,t){const n=t.isWebGL2;function r(s,a=Xn){let o;const l=a===Ye||a===ds?_t:zg;if(s===Pt)return i.UNSIGNED_BYTE;if(s===Mc)return i.UNSIGNED_SHORT_4_4_4_4;if(s===Sc)return i.UNSIGNED_SHORT_5_5_5_1;if(s===ih)return i.BYTE;if(s===rh)return i.SHORT;if(s===Ca)return i.UNSIGNED_SHORT;if(s===xc)return i.INT;if(s===An)return i.UNSIGNED_INT;if(s===ke)return i.FLOAT;if(s===jt)return n?i.HALF_FLOAT:(o=e.get("OES_texture_half_float"),o!==null?o.HALF_FLOAT_OES:null);if(s===sh)return i.ALPHA;if(s===Mt)return i.RGBA;if(s===ah)return i.LUMINANCE;if(s===oh)return i.LUMINANCE_ALPHA;if(s===si)return i.DEPTH_COMPONENT;if(s===oi)return i.DEPTH_STENCIL;if(s===xa)return o=e.get("EXT_sRGB"),o!==null?o.SRGB_ALPHA_EXT:null;if(s===ga)return i.RED;if(s===Tc)return i.RED_INTEGER;if(s===lh)return i.RG;if(s===yc)return i.RG_INTEGER;if(s===Ec)return i.RGBA_INTEGER;if(s===bs||s===ws||s===As||s===Rs)if(l===_t)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(s===bs)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===ws)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===As)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Rs)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(s===bs)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===ws)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===As)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Rs)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===oo||s===lo||s===co||s===uo)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(s===oo)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===lo)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===co)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===uo)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===ch)return o=e.get("WEBGL_compressed_texture_etc1"),o!==null?o.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===ho||s===fo)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(s===ho)return l===_t?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(s===fo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===po||s===mo||s===go||s===vo||s===_o||s===xo||s===Mo||s===So||s===To||s===yo||s===Eo||s===bo||s===wo||s===Ao)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(s===po)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===mo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===go)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===vo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===_o)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===xo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Mo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===So)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===To)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===yo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Eo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===bo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===wo)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Ao)return l===_t?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Ps||s===Ro||s===Po)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(s===Ps)return l===_t?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Ro)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Po)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===uh||s===Co||s===Lo||s===Do)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(s===Ps)return o.COMPRESSED_RED_RGTC1_EXT;if(s===Co)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Lo)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Do)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Wn?n?i.UNSIGNED_INT_24_8:(o=e.get("WEBGL_depth_texture"),o!==null?o.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class Gg extends Dt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ri extends rt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kg={type:"move"};class Js{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ri,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ri,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ri,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),d=this._getHandJoint(c,v);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(kg)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new ri;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}class vs extends dt{constructor(e,t,n,r,s,a,o,l,c,u){if(u=u!==void 0?u:si,u!==si&&u!==oi)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===si&&(n=An),n===void 0&&u===oi&&(n=Wn),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:be,this.minFilter=l!==void 0?l:be,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Vg extends dn{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,f=null,p=null,g=null;const v=t.getContextAttributes();let m=null,d=null;const S=[],_=[],T=new Dt;T.layers.enable(1),T.viewport=new Je;const R=new Dt;R.layers.enable(2),R.viewport=new Je;const w=[T,R],b=new Gg;b.layers.enable(1),b.layers.enable(2);let D=null,x=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(V){let W=S[V];return W===void 0&&(W=new Js,S[V]=W),W.getTargetRaySpace()},this.getControllerGrip=function(V){let W=S[V];return W===void 0&&(W=new Js,S[V]=W),W.getGripSpace()},this.getHand=function(V){let W=S[V];return W===void 0&&(W=new Js,S[V]=W),W.getHandSpace()};function y(V){const W=_.indexOf(V.inputSource);if(W===-1)return;const ie=S[W];ie!==void 0&&(ie.update(V.inputSource,V.frame,c||a),ie.dispatchEvent({type:V.type,data:V.inputSource}))}function k(){r.removeEventListener("select",y),r.removeEventListener("selectstart",y),r.removeEventListener("selectend",y),r.removeEventListener("squeeze",y),r.removeEventListener("squeezestart",y),r.removeEventListener("squeezeend",y),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",q);for(let V=0;V<S.length;V++){const W=_[V];W!==null&&(_[V]=null,S[V].disconnect(W))}D=null,x=null,e.setRenderTarget(m),p=null,f=null,h=null,r=null,d=null,$.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(V){s=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(V){o=V,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(V){c=V},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(V){if(r=V,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",y),r.addEventListener("selectstart",y),r.addEventListener("selectend",y),r.addEventListener("squeeze",y),r.addEventListener("squeezestart",y),r.addEventListener("squeezeend",y),r.addEventListener("end",k),r.addEventListener("inputsourceschange",q),v.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const W={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,W),r.updateRenderState({baseLayer:p}),d=new tt(p.framebufferWidth,p.framebufferHeight,{format:Mt,type:Pt,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let W=null,ie=null,ue=null;v.depth&&(ue=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,W=v.stencil?oi:si,ie=v.stencil?Wn:An);const fe={colorFormat:t.RGBA8,depthFormat:ue,scaleFactor:s};h=new XRWebGLBinding(r,t),f=h.createProjectionLayer(fe),r.updateRenderState({layers:[f]}),d=new tt(f.textureWidth,f.textureHeight,{format:Mt,type:Pt,depthTexture:new vs(f.textureWidth,f.textureHeight,ie,void 0,void 0,void 0,void 0,void 0,void 0,W),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const ye=e.properties.get(d);ye.__ignoreDepthValues=f.ignoreDepthValues}d.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),$.setContext(r),$.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function q(V){for(let W=0;W<V.removed.length;W++){const ie=V.removed[W],ue=_.indexOf(ie);ue>=0&&(_[ue]=null,S[ue].disconnect(ie))}for(let W=0;W<V.added.length;W++){const ie=V.added[W];let ue=_.indexOf(ie);if(ue===-1){for(let ye=0;ye<S.length;ye++)if(ye>=_.length){_.push(ie),ue=ye;break}else if(_[ye]===null){_[ye]=ie,ue=ye;break}if(ue===-1)break}const fe=S[ue];fe&&fe.connect(ie)}}const I=new C,N=new C;function F(V,W,ie){I.setFromMatrixPosition(W.matrixWorld),N.setFromMatrixPosition(ie.matrixWorld);const ue=I.distanceTo(N),fe=W.projectionMatrix.elements,ye=ie.projectionMatrix.elements,Ce=fe[14]/(fe[10]-1),Me=fe[14]/(fe[10]+1),Xe=(fe[9]+1)/fe[5],Rt=(fe[9]-1)/fe[5],Ue=(fe[8]-1)/fe[0],z=(ye[8]+1)/ye[0],gt=Ce*Ue,Se=Ce*z,De=ue/(-Ue+z),Ae=De*-Ue;W.matrixWorld.decompose(V.position,V.quaternion,V.scale),V.translateX(Ae),V.translateZ(De),V.matrixWorld.compose(V.position,V.quaternion,V.scale),V.matrixWorldInverse.copy(V.matrixWorld).invert();const nt=Ce+De,Oe=Me+De,Ie=gt-Ae,je=Se+(ue-Ae),vt=Xe*Me/Oe*nt,Et=Rt*Me/Oe*nt;V.projectionMatrix.makePerspective(Ie,je,vt,Et,nt,Oe),V.projectionMatrixInverse.copy(V.projectionMatrix).invert()}function U(V,W){W===null?V.matrixWorld.copy(V.matrix):V.matrixWorld.multiplyMatrices(W.matrixWorld,V.matrix),V.matrixWorldInverse.copy(V.matrixWorld).invert()}this.updateCamera=function(V){if(r===null)return;b.near=R.near=T.near=V.near,b.far=R.far=T.far=V.far,(D!==b.near||x!==b.far)&&(r.updateRenderState({depthNear:b.near,depthFar:b.far}),D=b.near,x=b.far);const W=V.parent,ie=b.cameras;U(b,W);for(let ue=0;ue<ie.length;ue++)U(ie[ue],W);ie.length===2?F(b,T,R):b.projectionMatrix.copy(T.projectionMatrix),B(V,b,W)};function B(V,W,ie){ie===null?V.matrix.copy(W.matrixWorld):(V.matrix.copy(ie.matrixWorld),V.matrix.invert(),V.matrix.multiply(W.matrixWorld)),V.matrix.decompose(V.position,V.quaternion,V.scale),V.updateMatrixWorld(!0),V.projectionMatrix.copy(W.projectionMatrix),V.projectionMatrixInverse.copy(W.projectionMatrixInverse),V.isPerspectiveCamera&&(V.fov=zi*2*Math.atan(1/V.projectionMatrix.elements[5]),V.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(V){l=V,f!==null&&(f.fixedFoveation=V),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=V)};let Y=null;function ee(V,W){if(u=W.getViewerPose(c||a),g=W,u!==null){const ie=u.views;p!==null&&(e.setRenderTargetFramebuffer(d,p.framebuffer),e.setRenderTarget(d));let ue=!1;ie.length!==b.cameras.length&&(b.cameras.length=0,ue=!0);for(let fe=0;fe<ie.length;fe++){const ye=ie[fe];let Ce=null;if(p!==null)Ce=p.getViewport(ye);else{const Xe=h.getViewSubImage(f,ye);Ce=Xe.viewport,fe===0&&(e.setRenderTargetTextures(d,Xe.colorTexture,f.ignoreDepthValues?void 0:Xe.depthStencilTexture),e.setRenderTarget(d))}let Me=w[fe];Me===void 0&&(Me=new Dt,Me.layers.enable(fe),Me.viewport=new Je,w[fe]=Me),Me.matrix.fromArray(ye.transform.matrix),Me.matrix.decompose(Me.position,Me.quaternion,Me.scale),Me.projectionMatrix.fromArray(ye.projectionMatrix),Me.projectionMatrixInverse.copy(Me.projectionMatrix).invert(),Me.viewport.set(Ce.x,Ce.y,Ce.width,Ce.height),fe===0&&(b.matrix.copy(Me.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),ue===!0&&b.cameras.push(Me)}}for(let ie=0;ie<S.length;ie++){const ue=_[ie],fe=S[ie];ue!==null&&fe!==void 0&&fe.update(ue,W,c||a)}Y&&Y(V,W),W.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:W}),g=null}const $=new Bc;$.setAnimationLoop(ee),this.setAnimationLoop=function(V){Y=V},this.dispose=function(){}}}function Wg(i,e){function t(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Fc(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,S,_,T){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),h(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,T)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),v(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,S,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,t(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===At&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,t(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===At&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,t(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,t(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const S=e.get(d).envMap;if(S&&(m.envMap.value=S,m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap){m.lightMap.value=d.lightMap;const _=i._useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=d.lightMapIntensity*_,t(d.lightMap,m.lightMapTransform)}d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,S,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*S,m.scale.value=_*.5,d.map&&(m.map.value=d.map,t(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,t(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,t(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function h(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,m.roughnessMapTransform)),e.get(d).envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,S){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===At&&m.clearcoatNormalScale.value.negate())),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=S.texture,m.transmissionSamplerSize.value.set(S.width,S.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function v(m,d){const S=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),m.nearDistance.value=S.shadow.camera.near,m.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Xg(i,e,t,n){let r={},s={},a=[];const o=t.isWebGL2?i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(S,_){const T=_.program;n.uniformBlockBinding(S,T)}function c(S,_){let T=r[S.id];T===void 0&&(g(S),T=u(S),r[S.id]=T,S.addEventListener("dispose",m));const R=_.program;n.updateUBOMapping(S,R);const w=e.render.frame;s[S.id]!==w&&(f(S),s[S.id]=w)}function u(S){const _=h();S.__bindingPointIndex=_;const T=i.createBuffer(),R=S.__size,w=S.usage;return i.bindBuffer(i.UNIFORM_BUFFER,T),i.bufferData(i.UNIFORM_BUFFER,R,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,_,T),T}function h(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(S){const _=r[S.id],T=S.uniforms,R=S.__cache;i.bindBuffer(i.UNIFORM_BUFFER,_);for(let w=0,b=T.length;w<b;w++){const D=T[w];if(p(D,w,R)===!0){const x=D.__offset,y=Array.isArray(D.value)?D.value:[D.value];let k=0;for(let q=0;q<y.length;q++){const I=y[q],N=v(I);typeof I=="number"?(D.__data[0]=I,i.bufferSubData(i.UNIFORM_BUFFER,x+k,D.__data)):I.isMatrix3?(D.__data[0]=I.elements[0],D.__data[1]=I.elements[1],D.__data[2]=I.elements[2],D.__data[3]=I.elements[0],D.__data[4]=I.elements[3],D.__data[5]=I.elements[4],D.__data[6]=I.elements[5],D.__data[7]=I.elements[0],D.__data[8]=I.elements[6],D.__data[9]=I.elements[7],D.__data[10]=I.elements[8],D.__data[11]=I.elements[0]):(I.toArray(D.__data,k),k+=N.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,x,D.__data)}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(S,_,T){const R=S.value;if(T[_]===void 0){if(typeof R=="number")T[_]=R;else{const w=Array.isArray(R)?R:[R],b=[];for(let D=0;D<w.length;D++)b.push(w[D].clone());T[_]=b}return!0}else if(typeof R=="number"){if(T[_]!==R)return T[_]=R,!0}else{const w=Array.isArray(T[_])?T[_]:[T[_]],b=Array.isArray(R)?R:[R];for(let D=0;D<w.length;D++){const x=w[D];if(x.equals(b[D])===!1)return x.copy(b[D]),!0}}return!1}function g(S){const _=S.uniforms;let T=0;const R=16;let w=0;for(let b=0,D=_.length;b<D;b++){const x=_[b],y={boundary:0,storage:0},k=Array.isArray(x.value)?x.value:[x.value];for(let q=0,I=k.length;q<I;q++){const N=k[q],F=v(N);y.boundary+=F.boundary,y.storage+=F.storage}if(x.__data=new Float32Array(y.storage/Float32Array.BYTES_PER_ELEMENT),x.__offset=T,b>0){w=T%R;const q=R-w;w!==0&&q-y.boundary<0&&(T+=R-w,x.__offset=T)}T+=y.storage}return w=T%R,w>0&&(T+=R-w),S.__size=T,S.__cache={},this}function v(S){const _={boundary:0,storage:0};return typeof S=="number"?(_.boundary=4,_.storage=4):S.isVector2?(_.boundary=8,_.storage=8):S.isVector3||S.isColor?(_.boundary=16,_.storage=12):S.isVector4?(_.boundary=16,_.storage=16):S.isMatrix3?(_.boundary=48,_.storage=48):S.isMatrix4?(_.boundary=64,_.storage=64):S.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",S),_}function m(S){const _=S.target;_.removeEventListener("dispose",m);const T=a.indexOf(_.__bindingPointIndex);a.splice(T,1),i.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const S in r)i.deleteBuffer(r[S]);a=[],r={},s={}}return{bind:l,update:c,dispose:d}}class Vc{constructor(e={}){const{canvas:t=Oh(),context:n=null,depth:r=!0,stencil:s=!0,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let f;n!==null?f=n.getContextAttributes().alpha:f=a;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const d=[],S=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Ye,this._useLegacyLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1;const _=this;let T=!1,R=0,w=0,b=null,D=-1,x=null;const y=new Je,k=new Je;let q=null;const I=new xe(0);let N=0,F=t.width,U=t.height,B=1,Y=null,ee=null;const $=new Je(0,0,F,U),V=new Je(0,0,F,U);let W=!1;const ie=new Ua;let ue=!1,fe=!1,ye=null;const Ce=new _e,Me=new me,Xe=new C,Rt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function Ue(){return b===null?B:1}let z=n;function gt(E,O){for(let K=0;K<E.length;K++){const H=E[K],Z=t.getContext(H,O);if(Z!==null)return Z}return null}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${qi}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",j,!1),t.addEventListener("webglcontextcreationerror",ne,!1),z===null){const O=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&O.shift(),z=gt(O,E),z===null)throw gt(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}typeof WebGLRenderingContext<"u"&&z instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),z.getShaderPrecisionFormat===void 0&&(z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Se,De,Ae,nt,Oe,Ie,je,vt,Et,A,M,G,re,te,se,ve,ae,X,P,Q,pe,le,de,Le;function Ve(){Se=new nm(z),De=new Zp(z,Se,e),Se.init(De),le=new Hg(z,Se,De),Ae=new Og(z,Se,De),nt=new sm(z),Oe=new yg,Ie=new Bg(z,Se,Ae,Oe,De,le,nt),je=new Jp(_),vt=new tm(_),Et=new mf(z,De),de=new Yp(z,Se,Et,De),A=new im(z,Et,nt,de),M=new cm(z,A,Et,nt),P=new lm(z,De,Ie),ve=new $p(Oe),G=new Tg(_,je,vt,Se,De,de,ve),re=new Wg(_,Oe),te=new bg,se=new Lg(Se,De),X=new qp(_,je,vt,Ae,M,f,l),ae=new Fg(_,M,De),Le=new Xg(z,nt,De,Ae),Q=new Kp(z,Se,nt,De),pe=new rm(z,Se,nt,De),nt.programs=G.programs,_.capabilities=De,_.extensions=Se,_.properties=Oe,_.renderLists=te,_.shadowMap=ae,_.state=Ae,_.info=nt}Ve();const L=new Vg(_,z);this.xr=L,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Se.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Se.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return B},this.setPixelRatio=function(E){E!==void 0&&(B=E,this.setSize(F,U,!1))},this.getSize=function(E){return E.set(F,U)},this.setSize=function(E,O,K=!0){if(L.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=E,U=O,t.width=Math.floor(E*B),t.height=Math.floor(O*B),K===!0&&(t.style.width=E+"px",t.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(F*B,U*B).floor()},this.setDrawingBufferSize=function(E,O,K){F=E,U=O,B=K,t.width=Math.floor(E*K),t.height=Math.floor(O*K),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(y)},this.getViewport=function(E){return E.copy($)},this.setViewport=function(E,O,K,H){E.isVector4?$.set(E.x,E.y,E.z,E.w):$.set(E,O,K,H),Ae.viewport(y.copy($).multiplyScalar(B).floor())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,O,K,H){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,O,K,H),Ae.scissor(k.copy(V).multiplyScalar(B).floor())},this.getScissorTest=function(){return W},this.setScissorTest=function(E){Ae.setScissorTest(W=E)},this.setOpaqueSort=function(E){Y=E},this.setTransparentSort=function(E){ee=E},this.getClearColor=function(E){return E.copy(X.getClearColor())},this.setClearColor=function(){X.setClearColor.apply(X,arguments)},this.getClearAlpha=function(){return X.getClearAlpha()},this.setClearAlpha=function(){X.setClearAlpha.apply(X,arguments)},this.clear=function(E=!0,O=!0,K=!0){let H=0;if(E){let Z=!1;if(b!==null){const ge=b.texture.format;Z=ge===Ec||ge===yc||ge===Tc}if(Z){const ge=b.texture.type,Te=ge===Pt||ge===An||ge===Ca||ge===Wn||ge===Mc||ge===Sc,Re=X.getClearColor(),Pe=X.getClearAlpha(),He=Re.r,we=Re.g,Ne=Re.b;Te?(p[0]=He,p[1]=we,p[2]=Ne,p[3]=Pe,z.clearBufferuiv(z.COLOR,0,p)):(g[0]=He,g[1]=we,g[2]=Ne,g[3]=Pe,z.clearBufferiv(z.COLOR,0,g))}else H|=z.COLOR_BUFFER_BIT}O&&(H|=z.DEPTH_BUFFER_BIT),K&&(H|=z.STENCIL_BUFFER_BIT),z.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",j,!1),t.removeEventListener("webglcontextcreationerror",ne,!1),te.dispose(),se.dispose(),Oe.dispose(),je.dispose(),vt.dispose(),M.dispose(),de.dispose(),Le.dispose(),G.dispose(),L.dispose(),L.removeEventListener("sessionstart",it),L.removeEventListener("sessionend",ln),ye&&(ye.dispose(),ye=null),It.stop()};function he(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function j(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=nt.autoReset,O=ae.enabled,K=ae.autoUpdate,H=ae.needsUpdate,Z=ae.type;Ve(),nt.autoReset=E,ae.enabled=O,ae.autoUpdate=K,ae.needsUpdate=H,ae.type=Z}function ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function oe(E){const O=E.target;O.removeEventListener("dispose",oe),ze(O)}function ze(E){Ze(E),Oe.remove(E)}function Ze(E){const O=Oe.get(E).programs;O!==void 0&&(O.forEach(function(K){G.releaseProgram(K)}),E.isShaderMaterial&&G.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,K,H,Z,ge){O===null&&(O=Rt);const Te=Z.isMesh&&Z.matrixWorld.determinant()<0,Re=bu(E,O,K,H,Z);Ae.setMaterial(H,Te);let Pe=K.index,He=1;if(H.wireframe===!0){if(Pe=A.getWireframeAttribute(K),Pe===void 0)return;He=2}const we=K.drawRange,Ne=K.attributes.position;let st=we.start*He,ot=(we.start+we.count)*He;ge!==null&&(st=Math.max(st,ge.start*He),ot=Math.min(ot,(ge.start+ge.count)*He)),Pe!==null?(st=Math.max(st,0),ot=Math.min(ot,Pe.count)):Ne!=null&&(st=Math.max(st,0),ot=Math.min(ot,Ne.count));const Kt=ot-st;if(Kt<0||Kt===1/0)return;de.setup(Z,H,Re,K,Pe);let vn,ct=Q;if(Pe!==null&&(vn=Et.get(Pe),ct=pe,ct.setIndex(vn)),Z.isMesh)H.wireframe===!0?(Ae.setLineWidth(H.wireframeLinewidth*Ue()),ct.setMode(z.LINES)):ct.setMode(z.TRIANGLES);else if(Z.isLine){let Ge=H.linewidth;Ge===void 0&&(Ge=1),Ae.setLineWidth(Ge*Ue()),Z.isLineSegments?ct.setMode(z.LINES):Z.isLineLoop?ct.setMode(z.LINE_LOOP):ct.setMode(z.LINE_STRIP)}else Z.isPoints?ct.setMode(z.POINTS):Z.isSprite&&ct.setMode(z.TRIANGLES);if(Z.isInstancedMesh)ct.renderInstances(st,Kt,Z.count);else if(K.isInstancedBufferGeometry){const Ge=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Ss=Math.min(K.instanceCount,Ge);ct.renderInstances(st,Kt,Ss)}else ct.render(st,Kt)},this.compile=function(E,O){function K(H,Z,ge){H.transparent===!0&&H.side===Ot&&H.forceSinglePass===!1?(H.side=At,H.needsUpdate=!0,Er(H,Z,ge),H.side=hn,H.needsUpdate=!0,Er(H,Z,ge),H.side=Ot):Er(H,Z,ge)}m=se.get(E),m.init(),S.push(m),E.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights(_._useLegacyLights),E.traverse(function(H){const Z=H.material;if(Z)if(Array.isArray(Z))for(let ge=0;ge<Z.length;ge++){const Te=Z[ge];K(Te,E,H)}else K(Z,E,H)}),S.pop(),m=null};let et=null;function zt(E){et&&et(E)}function it(){It.stop()}function ln(){It.start()}const It=new Bc;It.setAnimationLoop(zt),typeof self<"u"&&It.setContext(self),this.setAnimationLoop=function(E){et=E,L.setAnimationLoop(E),E===null?It.stop():It.start()},L.addEventListener("sessionstart",it),L.addEventListener("sessionend",ln),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),L.enabled===!0&&L.isPresenting===!0&&(L.cameraAutoUpdate===!0&&L.updateCamera(O),O=L.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,O,b),m=se.get(E,S.length),m.init(),S.push(m),Ce.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),ie.setFromProjectionMatrix(Ce),fe=this.localClippingEnabled,ue=ve.init(this.clippingPlanes,fe),v=te.get(E,d.length),v.init(),d.push(v),Ka(E,O,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(Y,ee),this.info.render.frame++,ue===!0&&ve.beginShadows();const K=m.state.shadowsArray;if(ae.render(K,E,O),ue===!0&&ve.endShadows(),this.info.autoReset===!0&&this.info.reset(),X.render(v,E),m.setupLights(_._useLegacyLights),O.isArrayCamera){const H=O.cameras;for(let Z=0,ge=H.length;Z<ge;Z++){const Te=H[Z];Za(v,E,Te,Te.viewport)}}else Za(v,E,O);b!==null&&(Ie.updateMultisampleRenderTarget(b),Ie.updateRenderTargetMipmap(b)),E.isScene===!0&&E.onAfterRender(_,E,O),de.resetDefaultState(),D=-1,x=null,S.pop(),S.length>0?m=S[S.length-1]:m=null,d.pop(),d.length>0?v=d[d.length-1]:v=null};function Ka(E,O,K,H){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)K=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ie.intersectsSprite(E)){H&&Xe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const Te=M.update(E),Re=E.material;Re.visible&&v.push(E,Te,Re,K,Xe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||ie.intersectsObject(E))){const Te=M.update(E),Re=E.material;if(H&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Xe.copy(E.boundingSphere.center)):(Te.boundingSphere===null&&Te.computeBoundingSphere(),Xe.copy(Te.boundingSphere.center)),Xe.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(Re)){const Pe=Te.groups;for(let He=0,we=Pe.length;He<we;He++){const Ne=Pe[He],st=Re[Ne.materialIndex];st&&st.visible&&v.push(E,Te,st,K,Xe.z,Ne)}}else Re.visible&&v.push(E,Te,Re,K,Xe.z,null)}}const ge=E.children;for(let Te=0,Re=ge.length;Te<Re;Te++)Ka(ge[Te],O,K,H)}function Za(E,O,K,H){const Z=E.opaque,ge=E.transmissive,Te=E.transparent;m.setupLightsView(K),ue===!0&&ve.setGlobalState(_.clippingPlanes,K),ge.length>0&&Eu(Z,ge,O,K),H&&Ae.viewport(y.copy(H)),Z.length>0&&yr(Z,O,K),ge.length>0&&yr(ge,O,K),Te.length>0&&yr(Te,O,K),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function Eu(E,O,K,H){const Z=De.isWebGL2;ye===null&&(ye=new tt(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")?jt:Pt,minFilter:Cn,samples:Z?4:0})),_.getDrawingBufferSize(Me),Z?ye.setSize(Me.x,Me.y):ye.setSize(os(Me.x),os(Me.y));const ge=_.getRenderTarget();_.setRenderTarget(ye),_.getClearColor(I),N=_.getClearAlpha(),N<1&&_.setClearColor(16777215,.5),_.clear();const Te=_.toneMapping;_.toneMapping=Vn,yr(E,K,H),Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye);let Re=!1;for(let Pe=0,He=O.length;Pe<He;Pe++){const we=O[Pe],Ne=we.object,st=we.geometry,ot=we.material,Kt=we.group;if(ot.side===Ot&&Ne.layers.test(H.layers)){const vn=ot.side;ot.side=At,ot.needsUpdate=!0,$a(Ne,K,H,st,ot,Kt),ot.side=vn,ot.needsUpdate=!0,Re=!0}}Re===!0&&(Ie.updateMultisampleRenderTarget(ye),Ie.updateRenderTargetMipmap(ye)),_.setRenderTarget(ge),_.setClearColor(I,N),_.toneMapping=Te}function yr(E,O,K){const H=O.isScene===!0?O.overrideMaterial:null;for(let Z=0,ge=E.length;Z<ge;Z++){const Te=E[Z],Re=Te.object,Pe=Te.geometry,He=H===null?Te.material:H,we=Te.group;Re.layers.test(K.layers)&&$a(Re,O,K,Pe,He,we)}}function $a(E,O,K,H,Z,ge){E.onBeforeRender(_,O,K,H,Z,ge),E.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),Z.onBeforeRender(_,O,K,H,E,ge),Z.transparent===!0&&Z.side===Ot&&Z.forceSinglePass===!1?(Z.side=At,Z.needsUpdate=!0,_.renderBufferDirect(K,O,H,Z,E,ge),Z.side=hn,Z.needsUpdate=!0,_.renderBufferDirect(K,O,H,Z,E,ge),Z.side=Ot):_.renderBufferDirect(K,O,H,Z,E,ge),E.onAfterRender(_,O,K,H,Z,ge)}function Er(E,O,K){O.isScene!==!0&&(O=Rt);const H=Oe.get(E),Z=m.state.lights,ge=m.state.shadowsArray,Te=Z.state.version,Re=G.getParameters(E,Z.state,ge,O,K),Pe=G.getProgramCacheKey(Re);let He=H.programs;H.environment=E.isMeshStandardMaterial?O.environment:null,H.fog=O.fog,H.envMap=(E.isMeshStandardMaterial?vt:je).get(E.envMap||H.environment),He===void 0&&(E.addEventListener("dispose",oe),He=new Map,H.programs=He);let we=He.get(Pe);if(we!==void 0){if(H.currentProgram===we&&H.lightsStateVersion===Te)return Ja(E,Re),we}else Re.uniforms=G.getUniforms(E),E.onBuild(K,Re,_),E.onBeforeCompile(Re,_),we=G.acquireProgram(Re,Pe),He.set(Pe,we),H.uniforms=Re.uniforms;const Ne=H.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ne.clippingPlanes=ve.uniform),Ja(E,Re),H.needsLights=Au(E),H.lightsStateVersion=Te,H.needsLights&&(Ne.ambientLightColor.value=Z.state.ambient,Ne.lightProbe.value=Z.state.probe,Ne.directionalLights.value=Z.state.directional,Ne.directionalLightShadows.value=Z.state.directionalShadow,Ne.spotLights.value=Z.state.spot,Ne.spotLightShadows.value=Z.state.spotShadow,Ne.rectAreaLights.value=Z.state.rectArea,Ne.ltc_1.value=Z.state.rectAreaLTC1,Ne.ltc_2.value=Z.state.rectAreaLTC2,Ne.pointLights.value=Z.state.point,Ne.pointLightShadows.value=Z.state.pointShadow,Ne.hemisphereLights.value=Z.state.hemi,Ne.directionalShadowMap.value=Z.state.directionalShadowMap,Ne.directionalShadowMatrix.value=Z.state.directionalShadowMatrix,Ne.spotShadowMap.value=Z.state.spotShadowMap,Ne.spotLightMatrix.value=Z.state.spotLightMatrix,Ne.spotLightMap.value=Z.state.spotLightMap,Ne.pointShadowMap.value=Z.state.pointShadowMap,Ne.pointShadowMatrix.value=Z.state.pointShadowMatrix);const st=we.getUniforms(),ot=ns.seqWithValue(st.seq,Ne);return H.currentProgram=we,H.uniformsList=ot,we}function Ja(E,O){const K=Oe.get(E);K.outputColorSpace=O.outputColorSpace,K.instancing=O.instancing,K.instancingColor=O.instancingColor,K.skinning=O.skinning,K.morphTargets=O.morphTargets,K.morphNormals=O.morphNormals,K.morphColors=O.morphColors,K.morphTargetsCount=O.morphTargetsCount,K.numClippingPlanes=O.numClippingPlanes,K.numIntersection=O.numClipIntersection,K.vertexAlphas=O.vertexAlphas,K.vertexTangents=O.vertexTangents,K.toneMapping=O.toneMapping}function bu(E,O,K,H,Z){O.isScene!==!0&&(O=Rt),Ie.resetTextureUnits();const ge=O.fog,Te=H.isMeshStandardMaterial?O.environment:null,Re=b===null?_.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:pt,Pe=(H.isMeshStandardMaterial?vt:je).get(H.envMap||Te),He=H.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,we=!!K.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Ne=!!K.morphAttributes.position,st=!!K.morphAttributes.normal,ot=!!K.morphAttributes.color;let Kt=Vn;H.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(Kt=_.toneMapping);const vn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,ct=vn!==void 0?vn.length:0,Ge=Oe.get(H),Ss=m.state.lights;if(ue===!0&&(fe===!0||E!==x)){const Ht=E===x&&H.id===D;ve.setState(H,E,Ht)}let ut=!1;H.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==Ss.state.version||Ge.outputColorSpace!==Re||Z.isInstancedMesh&&Ge.instancing===!1||!Z.isInstancedMesh&&Ge.instancing===!0||Z.isSkinnedMesh&&Ge.skinning===!1||!Z.isSkinnedMesh&&Ge.skinning===!0||Z.isInstancedMesh&&Ge.instancingColor===!0&&Z.instanceColor===null||Z.isInstancedMesh&&Ge.instancingColor===!1&&Z.instanceColor!==null||Ge.envMap!==Pe||H.fog===!0&&Ge.fog!==ge||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==ve.numPlanes||Ge.numIntersection!==ve.numIntersection)||Ge.vertexAlphas!==He||Ge.vertexTangents!==we||Ge.morphTargets!==Ne||Ge.morphNormals!==st||Ge.morphColors!==ot||Ge.toneMapping!==Kt||De.isWebGL2===!0&&Ge.morphTargetsCount!==ct)&&(ut=!0):(ut=!0,Ge.__version=H.version);let Yn=Ge.currentProgram;ut===!0&&(Yn=Er(H,O,Z));let Qa=!1,Qi=!1,Ts=!1;const Ut=Yn.getUniforms(),Kn=Ge.uniforms;if(Ae.useProgram(Yn.program)&&(Qa=!0,Qi=!0,Ts=!0),H.id!==D&&(D=H.id,Qi=!0),Qa||x!==E){Ut.setValue(z,"projectionMatrix",E.projectionMatrix),Ut.setValue(z,"viewMatrix",E.matrixWorldInverse);const Ht=Ut.map.cameraPosition;Ht!==void 0&&Ht.setValue(z,Xe.setFromMatrixPosition(E.matrixWorld)),De.logarithmicDepthBuffer&&Ut.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&Ut.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,Qi=!0,Ts=!0)}if(Z.isSkinnedMesh){Ut.setOptional(z,Z,"bindMatrix"),Ut.setOptional(z,Z,"bindMatrixInverse");const Ht=Z.skeleton;Ht&&(De.floatVertexTextures?(Ht.boneTexture===null&&Ht.computeBoneTexture(),Ut.setValue(z,"boneTexture",Ht.boneTexture,Ie),Ut.setValue(z,"boneTextureSize",Ht.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const ys=K.morphAttributes;if((ys.position!==void 0||ys.normal!==void 0||ys.color!==void 0&&De.isWebGL2===!0)&&P.update(Z,K,Yn),(Qi||Ge.receiveShadow!==Z.receiveShadow)&&(Ge.receiveShadow=Z.receiveShadow,Ut.setValue(z,"receiveShadow",Z.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(Kn.envMap.value=Pe,Kn.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Qi&&(Ut.setValue(z,"toneMappingExposure",_.toneMappingExposure),Ge.needsLights&&wu(Kn,Ts),ge&&H.fog===!0&&re.refreshFogUniforms(Kn,ge),re.refreshMaterialUniforms(Kn,H,B,U,ye),ns.upload(z,Ge.uniformsList,Kn,Ie)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(ns.upload(z,Ge.uniformsList,Kn,Ie),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&Ut.setValue(z,"center",Z.center),Ut.setValue(z,"modelViewMatrix",Z.modelViewMatrix),Ut.setValue(z,"normalMatrix",Z.normalMatrix),Ut.setValue(z,"modelMatrix",Z.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const Ht=H.uniformsGroups;for(let Es=0,Ru=Ht.length;Es<Ru;Es++)if(De.isWebGL2){const eo=Ht[Es];Le.update(eo,Yn),Le.bind(eo,Yn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Yn}function wu(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function Au(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(E,O,K){Oe.get(E.texture).__webglTexture=O,Oe.get(E.depthTexture).__webglTexture=K;const H=Oe.get(E);H.__hasExternalTextures=!0,H.__hasExternalTextures&&(H.__autoAllocateDepthBuffer=K===void 0,H.__autoAllocateDepthBuffer||Se.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,O){const K=Oe.get(E);K.__webglFramebuffer=O,K.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,K=0){b=E,R=O,w=K;let H=!0,Z=null,ge=!1,Te=!1;if(E){const Pe=Oe.get(E);Pe.__useDefaultFramebuffer!==void 0?(Ae.bindFramebuffer(z.FRAMEBUFFER,null),H=!1):Pe.__webglFramebuffer===void 0?Ie.setupRenderTarget(E):Pe.__hasExternalTextures&&Ie.rebindTextures(E,Oe.get(E.texture).__webglTexture,Oe.get(E.depthTexture).__webglTexture);const He=E.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Te=!0);const we=Oe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(we[O])?Z=we[O][K]:Z=we[O],ge=!0):De.isWebGL2&&E.samples>0&&Ie.useMultisampledRTT(E)===!1?Z=Oe.get(E).__webglMultisampledFramebuffer:Array.isArray(we)?Z=we[K]:Z=we,y.copy(E.viewport),k.copy(E.scissor),q=E.scissorTest}else y.copy($).multiplyScalar(B).floor(),k.copy(V).multiplyScalar(B).floor(),q=W;if(Ae.bindFramebuffer(z.FRAMEBUFFER,Z)&&De.drawBuffers&&H&&Ae.drawBuffers(E,Z),Ae.viewport(y),Ae.scissor(k),Ae.setScissorTest(q),ge){const Pe=Oe.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+O,Pe.__webglTexture,K)}else if(Te){const Pe=Oe.get(E.texture),He=O||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Pe.__webglTexture,K||0,He)}D=-1},this.readRenderTargetPixels=function(E,O,K,H,Z,ge,Te){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Oe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Te!==void 0&&(Re=Re[Te]),Re){Ae.bindFramebuffer(z.FRAMEBUFFER,Re);try{const Pe=E.texture,He=Pe.format,we=Pe.type;if(He!==Mt&&le.convert(He)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Ne=we===jt&&(Se.has("EXT_color_buffer_half_float")||De.isWebGL2&&Se.has("EXT_color_buffer_float"));if(we!==Pt&&le.convert(we)!==z.getParameter(z.IMPLEMENTATION_COLOR_READ_TYPE)&&!(we===ke&&(De.isWebGL2||Se.has("OES_texture_float")||Se.has("WEBGL_color_buffer_float")))&&!Ne){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-H&&K>=0&&K<=E.height-Z&&z.readPixels(O,K,H,Z,le.convert(He),le.convert(we),ge)}finally{const Pe=b!==null?Oe.get(b).__webglFramebuffer:null;Ae.bindFramebuffer(z.FRAMEBUFFER,Pe)}}},this.copyFramebufferToTexture=function(E,O,K=0){const H=Math.pow(2,-K),Z=Math.floor(O.image.width*H),ge=Math.floor(O.image.height*H);Ie.setTexture2D(O,0),z.copyTexSubImage2D(z.TEXTURE_2D,K,0,0,E.x,E.y,Z,ge),Ae.unbindTexture()},this.copyTextureToTexture=function(E,O,K,H=0){const Z=O.image.width,ge=O.image.height,Te=le.convert(K.format),Re=le.convert(K.type);Ie.setTexture2D(K,0),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,K.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,K.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,K.unpackAlignment),O.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,H,E.x,E.y,Z,ge,Te,Re,O.image.data):O.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,H,E.x,E.y,O.mipmaps[0].width,O.mipmaps[0].height,Te,O.mipmaps[0].data):z.texSubImage2D(z.TEXTURE_2D,H,E.x,E.y,Te,Re,O.image),H===0&&K.generateMipmaps&&z.generateMipmap(z.TEXTURE_2D),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,O,K,H,Z=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ge=E.max.x-E.min.x+1,Te=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Pe=le.convert(H.format),He=le.convert(H.type);let we;if(H.isData3DTexture)Ie.setTexture3D(H,0),we=z.TEXTURE_3D;else if(H.isDataArrayTexture)Ie.setTexture2DArray(H,0),we=z.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,H.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,H.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,H.unpackAlignment);const Ne=z.getParameter(z.UNPACK_ROW_LENGTH),st=z.getParameter(z.UNPACK_IMAGE_HEIGHT),ot=z.getParameter(z.UNPACK_SKIP_PIXELS),Kt=z.getParameter(z.UNPACK_SKIP_ROWS),vn=z.getParameter(z.UNPACK_SKIP_IMAGES),ct=K.isCompressedTexture?K.mipmaps[0]:K.image;z.pixelStorei(z.UNPACK_ROW_LENGTH,ct.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ct.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,E.min.x),z.pixelStorei(z.UNPACK_SKIP_ROWS,E.min.y),z.pixelStorei(z.UNPACK_SKIP_IMAGES,E.min.z),K.isDataTexture||K.isData3DTexture?z.texSubImage3D(we,Z,O.x,O.y,O.z,ge,Te,Re,Pe,He,ct.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),z.compressedTexSubImage3D(we,Z,O.x,O.y,O.z,ge,Te,Re,Pe,ct.data)):z.texSubImage3D(we,Z,O.x,O.y,O.z,ge,Te,Re,Pe,He,ct),z.pixelStorei(z.UNPACK_ROW_LENGTH,Ne),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),z.pixelStorei(z.UNPACK_SKIP_PIXELS,ot),z.pixelStorei(z.UNPACK_SKIP_ROWS,Kt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,vn),Z===0&&H.generateMipmaps&&z.generateMipmap(we),Ae.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?Ie.setTextureCube(E,0):E.isData3DTexture?Ie.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?Ie.setTexture2DArray(E,0):Ie.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){R=0,w=0,b=null,Ae.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Rn}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: The property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Ye?un:fs}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===un?Ye:pt}get useLegacyLights(){return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights}set useLegacyLights(e){console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),this._useLegacyLights=e}}class jg extends Vc{}jg.prototype.isWebGL1Renderer=!0;class ya extends rt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}}class qg{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=_a,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=an()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=an()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Nt=new C;class Oa{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyMatrix4(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.applyNormalMatrix(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Nt.fromBufferAttribute(this,t),Nt.transformDirection(e),this.setXYZ(t,Nt.x,Nt.y,Nt.z);return this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=cn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=cn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=cn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=cn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xl=new C,Ml=new Je,Sl=new Je,Yg=new C,Tl=new _e,Ai=new C,Qs=new mn,yl=new _e,ea=new xr;class Kg extends Bt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new _e,this.bindMatrixInverse=new _e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new pn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ai.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ai),this.boundingBox.expandByPoint(Ai)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)Ai.fromBufferAttribute(t,n),this.applyBoneTransform(n,Ai),this.boundingSphere.expandByPoint(Ai)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Qs.copy(this.boundingSphere),Qs.applyMatrix4(r),e.ray.intersectsSphere(Qs)!==!1&&(yl.copy(r).invert(),ea.copy(e.ray).applyMatrix4(yl),!(this.boundingBox!==null&&ea.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ea)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Je,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ml.fromBufferAttribute(r.attributes.skinIndex,e),Sl.fromBufferAttribute(r.attributes.skinWeight,e),xl.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Sl.getComponent(s);if(a!==0){const o=Ml.getComponent(s);Tl.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(Yg.copy(xl).applyMatrix4(Tl),a)}}return t.applyMatrix4(this.bindMatrixInverse)}boneTransform(e,t){return console.warn("THREE.SkinnedMesh: .boneTransform() was renamed to .applyBoneTransform() in r151."),this.applyBoneTransform(e,t)}}class Wc extends rt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class jn extends dt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=be,u=be,h,f){super(null,a,o,l,c,u,r,s,h,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const El=new _e,Zg=new _e;class Ba{constructor(e=[],t=[]){this.uuid=an(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new _e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _e;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:Zg;El.multiplyMatrices(o,t[s]),El.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Ba(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=wc(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new jn(t,e,e,Mt,ke);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new Wc),this.bones.push(a),this.boneInverses.push(new _e().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class bl extends lt{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ri=new _e,wl=new _e,jr=[],Al=new pn,$g=new _e,rr=new Bt,sr=new mn;class Jg extends Bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bl(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,$g)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new pn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),Al.copy(e.boundingBox).applyMatrix4(Ri),this.boundingBox.union(Al)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ri),sr.copy(e.boundingSphere).applyMatrix4(Ri),this.boundingSphere.union(sr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(rr.geometry=this.geometry,rr.material=this.material,rr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sr.copy(this.boundingSphere),sr.applyMatrix4(n),e.ray.intersectsSphere(sr)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ri),wl.multiplyMatrices(n,Ri),rr.matrixWorld=wl,rr.raycast(e,jr);for(let a=0,o=jr.length;a<o;a++){const l=jr[a];l.instanceId=s,l.object=this,t.push(l)}jr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bl(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Xc extends Yt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Rl=new C,Pl=new C,Cl=new _e,ta=new xr,qr=new mn;class za extends rt{constructor(e=new Qt,t=new Xc){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Rl.fromBufferAttribute(t,r-1),Pl.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Rl.distanceTo(Pl);e.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(r),qr.radius+=s,e.ray.intersectsSphere(qr)===!1)return;Cl.copy(r).invert(),ta.copy(e.ray).applyMatrix4(Cl);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=new C,u=new C,h=new C,f=new C,p=this.isLineSegments?2:1,g=n.index,m=n.attributes.position;if(g!==null){const d=Math.max(0,a.start),S=Math.min(g.count,a.start+a.count);for(let _=d,T=S-1;_<T;_+=p){const R=g.getX(_),w=g.getX(_+1);if(c.fromBufferAttribute(m,R),u.fromBufferAttribute(m,w),ta.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const D=e.ray.origin.distanceTo(f);D<e.near||D>e.far||t.push({distance:D,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}else{const d=Math.max(0,a.start),S=Math.min(m.count,a.start+a.count);for(let _=d,T=S-1;_<T;_+=p){if(c.fromBufferAttribute(m,_),u.fromBufferAttribute(m,_+1),ta.distanceSqToSegment(c,u,f,h)>l)continue;f.applyMatrix4(this.matrixWorld);const w=e.ray.origin.distanceTo(f);w<e.near||w>e.far||t.push({distance:w,point:h.clone().applyMatrix4(this.matrixWorld),index:_,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}const Ll=new C,Dl=new C;class Qg extends za{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Ll.fromBufferAttribute(t,r),Dl.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Ll.distanceTo(Dl);e.setAttribute("lineDistance",new Pn(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ev extends za{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class jc extends Yt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Il=new _e,Ea=new xr,Yr=new mn,Kr=new C;class tv extends rt{constructor(e=new Qt,t=new jc){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Yr.copy(n.boundingSphere),Yr.applyMatrix4(r),Yr.radius+=s,e.ray.intersectsSphere(Yr)===!1)return;Il.copy(r).invert(),Ea.copy(e.ray).applyMatrix4(Il);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,v=p;g<v;g++){const m=c.getX(g);Kr.fromBufferAttribute(h,m),Ul(Kr,m,l,r,e,t,this)}}else{const f=Math.max(0,a.start),p=Math.min(h.count,a.start+a.count);for(let g=f,v=p;g<v;g++)Kr.fromBufferAttribute(h,g),Ul(Kr,g,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Ul(i,e,t,n,r,s,a){const o=Ea.distanceSqToPoint(i);if(o<t){const l=new C;Ea.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class qc extends dt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=be,this.minFilter=be,this.generateMipmaps=!1,this.needsUpdate=!0}}class _s extends Yt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ln extends _s{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new me(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class nv extends Yt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=La,this.normalScale=new me(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}function On(i,e,t){return Yc(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function Zr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Yc(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function iv(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Nl(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function Kc(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}class Sr{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];n:{e:{let a;t:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break e}a=t.length;break t}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break e}a=n,n=0;break t}break n}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class rv extends Sr{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Io,endingEnd:Io}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Uo:s=e,o=2*t-n;break;case No:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Uo:a=e,l=2*n-t;break;case No:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,p=this._weightNext,g=(n-t)/(r-t),v=g*g,m=v*g,d=-f*m+2*f*v-f*g,S=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,_=(-1-p)*m+(1.5+p)*v+.5*g,T=p*m-p*v;for(let R=0;R!==o;++R)s[R]=d*a[u+R]+S*a[c+R]+_*a[l+R]+T*a[h+R];return s}}class sv extends Sr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let f=0;f!==o;++f)s[f]=a[c+f]*h+a[l+f]*u;return s}}class av extends Sr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class gn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Zr(t,this.TimeBufferType),this.values=Zr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Zr(e.times,Array),values:Zr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new av(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new sv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new rv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case mr:t=this.InterpolantFactoryMethodDiscrete;break;case Bi:t=this.InterpolantFactoryMethodLinear;break;case Cs:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return mr;case this.InterpolantFactoryMethodLinear:return Bi;case this.InterpolantFactoryMethodSmooth:return Cs}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=On(n,s,a),this.values=On(this.values,s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Yc(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=On(this.times),t=On(this.values),n=this.getValueSize(),r=this.getInterpolation()===Cs,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,f=h-n,p=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[f+g]||v!==t[p+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,f=a*n;for(let p=0;p!==n;++p)t[f+p]=t[h+p]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=On(e,0,a),this.values=On(t,0,a*n)):(this.times=e,this.values=t),this}clone(){const e=On(this.times,0),t=On(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=Bi;class Ki extends gn{}Ki.prototype.ValueTypeName="bool";Ki.prototype.ValueBufferType=Array;Ki.prototype.DefaultInterpolation=mr;Ki.prototype.InterpolantFactoryMethodLinear=void 0;Ki.prototype.InterpolantFactoryMethodSmooth=void 0;class Zc extends gn{}Zc.prototype.ValueTypeName="color";class Gi extends gn{}Gi.prototype.ValueTypeName="number";class ov extends Sr{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)Jt.slerpFlat(s,0,a,c-o,a,c,l);return s}}class li extends gn{InterpolantFactoryMethodLinear(e){return new ov(this.times,this.values,this.getValueSize(),e)}}li.prototype.ValueTypeName="quaternion";li.prototype.DefaultInterpolation=Bi;li.prototype.InterpolantFactoryMethodSmooth=void 0;class Zi extends gn{}Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=mr;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;class ki extends gn{}ki.prototype.ValueTypeName="vector";class lv{constructor(e,t=-1,n,r=hh){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=an(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push(uv(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(gn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=iv(l);l=Nl(l,1,u),c=Nl(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new Gi(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let f=r[h];f||(r[h]=f=[]),f.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,f,p,g,v){if(p.length!==0){const m=[],d=[];Kc(p,m,d,g),m.length!==0&&v.push(new h(f,m,d))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const f=c[h].keys;if(!(!f||f.length===0))if(f[0].morphTargets){const p={};let g;for(g=0;g<f.length;g++)if(f[g].morphTargets)for(let v=0;v<f[g].morphTargets.length;v++)p[f[g].morphTargets[v]]=-1;for(const v in p){const m=[],d=[];for(let S=0;S!==f[g].morphTargets.length;++S){const _=f[g];m.push(_.time),d.push(_.morphTarget===v?1:0)}r.push(new Gi(".morphTargetInfluence["+v+"]",m,d))}l=p.length*a}else{const p=".bones["+t[h].name+"]";n(ki,p+".position",f,"pos",r),n(li,p+".quaternion",f,"rot",r),n(ki,p+".scale",f,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function cv(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Gi;case"vector":case"vector2":case"vector3":case"vector4":return ki;case"color":return Zc;case"quaternion":return li;case"bool":case"boolean":return Ki;case"string":return Zi}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function uv(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=cv(i.type);if(i.times===void 0){const t=[],n=[];Kc(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Vi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class $c{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const Jc=new $c;class Dn{constructor(e){this.manager=e!==void 0?e:Jc,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Dn.DEFAULT_MATERIAL_NAME="__DEFAULT";const En={};class hv extends Error{constructor(e,t){super(e),this.response=t}}class Wi extends Dn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Vi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(En[e]!==void 0){En[e].push({onLoad:t,onProgress:n,onError:r});return}En[e]=[],En[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=En[e],h=c.body.getReader(),f=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),p=f?parseInt(f):0,g=p!==0;let v=0;const m=new ReadableStream({start(d){S();function S(){h.read().then(({done:_,value:T})=>{if(_)d.close();else{v+=T.byteLength;const R=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let w=0,b=u.length;w<b;w++){const D=u[w];D.onProgress&&D.onProgress(R)}d.enqueue(T),S()}})}}});return new Response(m)}else throw new hv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),f=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(f);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{Vi.add(e,c);const u=En[e];delete En[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=En[e];if(u===void 0)throw this.manager.itemError(e),c;delete En[e];for(let h=0,f=u.length;h<f;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class fv extends Dn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=gr("img");function l(){u(),Vi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class dv extends Dn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new jn,o=new Wi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:xt,a.wrapT=c.wrapT!==void 0?c.wrapT:xt,a.magFilter=c.magFilter!==void 0?c.magFilter:Ke,a.minFilter=c.minFilter!==void 0?c.minFilter:Ke,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?a.colorSpace=c.colorSpace:c.encoding!==void 0&&(a.encoding=c.encoding),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Cn),c.mipmapCount===1&&(a.minFilter=Ke),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class Qc extends Dn{constructor(e){super(e)}load(e,t,n,r){const s=new dt,a=new fv(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Ha extends rt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const na=new _e,Fl=new C,Ol=new C;class Ga{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new me(512,512),this.map=null,this.mapPass=null,this.matrix=new _e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ua,this._frameExtents=new me(1,1),this._viewportCount=1,this._viewports=[new Je(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fl.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fl),Ol.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ol),t.updateMatrixWorld(),na.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(na),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(na)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class pv extends Ga{constructor(){super(new Dt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=zi*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class mv extends Ha{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new pv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bl=new _e,ar=new C,ia=new C;class gv extends Ga{constructor(){super(new Dt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new me(4,2),this._viewportCount=6,this._viewports=[new Je(2,1,1,1),new Je(0,1,1,1),new Je(3,1,1,1),new Je(1,1,1,1),new Je(3,0,1,1),new Je(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),ar.setFromMatrixPosition(e.matrixWorld),n.position.copy(ar),ia.copy(n.position),ia.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ia),n.updateMatrixWorld(),r.makeTranslation(-ar.x,-ar.y,-ar.z),Bl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bl)}}class vv extends Ha{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new gv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class _v extends Ga{constructor(){super(new Na(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class eu extends Ha{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(rt.DEFAULT_UP),this.updateMatrix(),this.target=new rt,this.shadow=new _v}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ba{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class xv extends Dn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Vi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(l){Vi.add(e,l),t&&t(l),s.manager.itemEnd(e)}).catch(function(l){r&&r(l),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class tu{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zl(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zl();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zl(){return(typeof performance>"u"?Date:performance).now()}const ka="\\[\\]\\.:\\/",Mv=new RegExp("["+ka+"]","g"),Va="[^"+ka+"]",Sv="[^"+ka.replace("\\.","")+"]",Tv=/((?:WC+[\/:])*)/.source.replace("WC",Va),yv=/(WCOD+)?/.source.replace("WCOD",Sv),Ev=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Va),bv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Va),wv=new RegExp("^"+Tv+yv+Ev+bv+"$"),Av=["material","materials","bones","map"];class Rv{constructor(e,t,n){const r=n||$e.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class $e{constructor(e,t,n){this.path=t,this.parsedPath=n||$e.parseTrackName(t),this.node=$e.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new $e.Composite(e,t,n):new $e(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Mv,"")}static parseTrackName(e){const t=wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);Av.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=$e.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}$e.Composite=Rv;$e.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};$e.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};$e.prototype.GetterByBindingType=[$e.prototype._getValue_direct,$e.prototype._getValue_array,$e.prototype._getValue_arrayElement,$e.prototype._getValue_toArray];$e.prototype.SetterByBindingTypeAndVersioning=[[$e.prototype._setValue_direct,$e.prototype._setValue_direct_setNeedsUpdate,$e.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_array,$e.prototype._setValue_array_setNeedsUpdate,$e.prototype._setValue_array_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_arrayElement,$e.prototype._setValue_arrayElement_setNeedsUpdate,$e.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[$e.prototype._setValue_fromArray,$e.prototype._setValue_fromArray_setNeedsUpdate,$e.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class J{constructor(e){this.value=e}clone(){return new J(this.value.clone===void 0?this.value:this.value.clone())}}class Hl{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:qi}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=qi);/**
 * postprocessing v6.34.1 build Wed Dec 27 2023
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2023 Raoul van Rüschen
 * @license Zlib
 */var Pv=`#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,Wa="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",Cv=class extends at{constructor(){super({name:"AdaptiveLuminanceMaterial",defines:{MIP_LEVEL_1X1:"0.0"},uniforms:{luminanceBuffer0:new J(null),luminanceBuffer1:new J(null),minLuminance:new J(.01),deltaTime:new J(0),tau:new J(1)},extensions:{shaderTextureLOD:!0},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Pv,vertexShader:Wa})}set luminanceBuffer0(i){this.uniforms.luminanceBuffer0.value=i}setLuminanceBuffer0(i){this.uniforms.luminanceBuffer0.value=i}set luminanceBuffer1(i){this.uniforms.luminanceBuffer1.value=i}setLuminanceBuffer1(i){this.uniforms.luminanceBuffer1.value=i}set mipLevel1x1(i){this.defines.MIP_LEVEL_1X1=i.toFixed(1),this.needsUpdate=!0}setMipLevel1x1(i){this.mipLevel1x1=i}set deltaTime(i){this.uniforms.deltaTime.value=i}setDeltaTime(i){this.uniforms.deltaTime.value=i}get minLuminance(){return this.uniforms.minLuminance.value}set minLuminance(i){this.uniforms.minLuminance.value=i}getMinLuminance(){return this.uniforms.minLuminance.value}setMinLuminance(i){this.uniforms.minLuminance.value=i}get adaptationRate(){return this.uniforms.tau.value}set adaptationRate(i){this.uniforms.tau.value=i}getAdaptationRate(){return this.uniforms.tau.value}setAdaptationRate(i){this.uniforms.tau.value=i}},Be={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},nu="",St="srgb",Xi="srgb-linear",ai={NONE:0,DEPTH:1,CONVOLUTION:2},qe={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},xs={MEDIUM:2,LARGE:3},Lv={SCALE_UP:"lut.scaleup"},Wt={REINHARD:0,REINHARD2:1,REINHARD2_ADAPTIVE:2,OPTIMIZED_CINEON:4,ACES_FILMIC:5,AGX:6},$r={DEFAULT:0,ESKIL:1},Xa=Number(qi.replace(/\D+/g,"")),ja=Xa>=152,iu=new Map([[fs,Xi],[un,St]]),Dv=new Map([[Xi,fs],[St,un]]);function ji(i){return i===null?null:ja?i.outputColorSpace:iu.get(i.outputEncoding)}function on(i,e){i!==null&&(ja?i.colorSpace=e:i.encoding=Dv.get(e))}function ra(i,e){i===null||e===null||(ja?e.colorSpace=i.colorSpace:e.encoding=i.encoding)}function Tr(i){return Xa<154?i.replace("colorspace_fragment","encodings_fragment"):i}function Iv(i){return Xa<160&&i===Wt.AGX&&(console.warn("AgX requires three r160 or higher, falling back to ACES filmic"),i=Wt.ACES_FILMIC),i}var Uv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,Nv="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",Fv=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],Ov=class extends at{constructor(i=new Je){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new J(null),texelSize:new J(new Je),scale:new J(1),kernel:new J(0)},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Uv,vertexShader:Nv}),this.fragmentShader=Tr(this.fragmentShader),this.setTexelSize(i.x,i.y),this.kernelSize=xs.MEDIUM}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.inputBuffer=i}get kernelSequence(){return Fv[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(i){this.uniforms.scale.value=i}getScale(){return this.uniforms.scale.value}setScale(i){this.uniforms.scale.value=i}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(i){this.uniforms.kernel.value=i}setKernel(i){this.kernel=i}setTexelSize(i,e){this.uniforms.texelSize.value.set(i,e,i*.5,e*.5)}setSize(i,e){const t=1/i,n=1/e;this.uniforms.texelSize.value.set(t,n,t*.5,n*.5)}},Bv=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,ru=class extends at{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new J(null),opacity:new J(1)},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Bv,vertexShader:Wa}),this.fragmentShader=Tr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}getOpacity(i){return this.uniforms.opacity.value}setOpacity(i){this.uniforms.opacity.value=i}},zv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,Hv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",Gv=class extends at{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new J(null),texelSize:new J(new me)},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zv,vertexShader:Hv}),this.fragmentShader=Tr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},kv=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#if THREE_REVISION >= 137
vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,Vv="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",Wv=class extends at{constructor(i,e,t,n,r=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new J(null),depthBuffer:new J(null),resolution:new J(new me),texelSize:new J(new me),cameraNear:new J(.3),cameraFar:new J(1e3),aspect:new J(1),time:new J(0)},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:r}),i&&this.setShaderParts(i),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(n)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(i){this.uniforms.depthBuffer.value=i}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(i){this.defines.DEPTH_PACKING=i.toFixed(0),this.needsUpdate=!0}setDepthBuffer(i,e=_r){this.depthBuffer=i,this.depthPacking=e}setShaderData(i){this.setShaderParts(i.shaderParts),this.setDefines(i.defines),this.setUniforms(i.uniforms),this.setExtensions(i.extensions)}setShaderParts(i){return this.fragmentShader=kv.replace(qe.FRAGMENT_HEAD,i.get(qe.FRAGMENT_HEAD)||"").replace(qe.FRAGMENT_MAIN_UV,i.get(qe.FRAGMENT_MAIN_UV)||"").replace(qe.FRAGMENT_MAIN_IMAGE,i.get(qe.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=Vv.replace(qe.VERTEX_HEAD,i.get(qe.VERTEX_HEAD)||"").replace(qe.VERTEX_MAIN_SUPPORT,i.get(qe.VERTEX_MAIN_SUPPORT)||""),this.fragmentShader=Tr(this.fragmentShader),this.needsUpdate=!0,this}setDefines(i){for(const e of i.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(i){for(const e of i.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(i){this.extensions={};for(const e of i)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(i){this.encodeOutput!==i&&(i?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(i){return this.encodeOutput}setOutputEncodingEnabled(i){this.encodeOutput=i}get time(){return this.uniforms.time.value}set time(i){this.uniforms.time.value=i}setDeltaTime(i){this.uniforms.time.value+=i}adoptCameraSettings(i){this.copyCameraSettings(i)}copyCameraSettings(i){i&&(this.uniforms.cameraNear.value=i.near,this.uniforms.cameraFar.value=i.far,i instanceof Dt?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(i,e){const t=this.uniforms;t.resolution.value.set(i,e),t.texelSize.value.set(1/i,1/e),t.aspect.value=i/e}static get Section(){return qe}},Xv=`#include <common>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*l,l);
#else
gl_FragColor=vec4(l);
#endif
}`,jv=class extends at{constructor(i=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:qi.replace(/\D+/g,"")},uniforms:{inputBuffer:new J(null),threshold:new J(0),smoothing:new J(1),range:new J(null)},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:Xv,vertexShader:Wa}),this.colorOutput=i,this.luminanceRange=e}set inputBuffer(i){this.uniforms.inputBuffer.value=i}setInputBuffer(i){this.uniforms.inputBuffer.value=i}get threshold(){return this.uniforms.threshold.value}set threshold(i){this.smoothing>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=i}getThreshold(){return this.threshold}setThreshold(i){this.threshold=i}get smoothing(){return this.uniforms.smoothing.value}set smoothing(i){this.threshold>0||i>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=i}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(i){this.smoothing=i}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(i){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(i){i?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(i){return this.colorOutput}setColorOutputEnabled(i){this.colorOutput=i}get useRange(){return this.luminanceRange!==null}set useRange(i){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(i){i!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=i,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(i){this.luminanceRange=i}},qv=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,Yv="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",Kv=class extends at{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new J(null),supportBuffer:new J(null),texelSize:new J(new me),radius:new J(.85)},blending:ft,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:qv,vertexShader:Yv}),this.fragmentShader=Tr(this.fragmentShader)}set inputBuffer(i){this.uniforms.inputBuffer.value=i}set supportBuffer(i){this.uniforms.supportBuffer.value=i}get radius(){return this.uniforms.radius.value}set radius(i){this.uniforms.radius.value=i}setSize(i,e){this.uniforms.texelSize.value.set(1/i,1/e)}},Zv=new Ia,Bn=null;function $v(){if(Bn===null){const i=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]);Bn=new Qt,Bn.setAttribute!==void 0?(Bn.setAttribute("position",new lt(i,3)),Bn.setAttribute("uv",new lt(e,2))):(Bn.addAttribute("position",new lt(i,3)),Bn.addAttribute("uv",new lt(e,2)))}return Bn}var mt=class su{constructor(e="Pass",t=new ya,n=Zv){this.name=e,this.renderer=null,this.scene=t,this.camera=n,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new Bt($v(),e),t.frustumCulled=!1,this.scene===null&&(this.scene=new ya),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=_r){}render(e,t,n,r,s){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,n){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof tt||t instanceof Yt||t instanceof dt||t instanceof su)&&this[e].dispose()}}},au=class extends mt{constructor(i,e=!0){super("CopyPass"),this.fullscreenMaterial=new ru,this.needsSwap=!1,this.renderTarget=i,i===void 0&&(this.renderTarget=new tt(1,1,{minFilter:Ke,magFilter:Ke,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(i){this.autoResize=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(i){this.autoResize=i}render(i,e,t,n,r){this.fullscreenMaterial.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){this.autoResize&&this.renderTarget.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==Pt?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":ji(i)===St&&on(this.renderTarget.texture,St))}},Jv=class extends mt{constructor(i,{minLuminance:e=.01,adaptationRate:t=1}={}){super("AdaptiveLuminancePass"),this.fullscreenMaterial=new Cv,this.needsSwap=!1,this.renderTargetPrevious=new tt(1,1,{minFilter:be,magFilter:be,depthBuffer:!1}),this.renderTargetPrevious.texture.name="Luminance.Previous";const n=this.fullscreenMaterial;n.luminanceBuffer0=this.renderTargetPrevious.texture,n.luminanceBuffer1=i,n.minLuminance=e,n.adaptationRate=t,this.renderTargetAdapted=this.renderTargetPrevious.clone(),this.renderTargetAdapted.texture.name="Luminance.Adapted",this.copyPass=new au(this.renderTargetPrevious,!1)}get texture(){return this.renderTargetAdapted.texture}getTexture(){return this.renderTargetAdapted.texture}set mipLevel1x1(i){this.fullscreenMaterial.mipLevel1x1=i}get adaptationRate(){return this.fullscreenMaterial.adaptationRate}set adaptationRate(i){this.fullscreenMaterial.adaptationRate=i}render(i,e,t,n,r){this.fullscreenMaterial.deltaTime=n,i.setRenderTarget(this.renderToScreen?null:this.renderTargetAdapted),i.render(this.scene,this.camera),this.copyPass.render(i,this.renderTargetAdapted)}},Qv=class extends mt{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(i,e,t,n,r){const s=i.state.buffers.stencil;s.setLocked(!1),s.setTest(!1)}},Gl=new xe,ou=class extends mt{constructor(i=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=i,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(i,e,t){this.color=i,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(i){this.overrideClearColor=i}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(i){this.overrideClearAlpha=i}render(i,e,t,n,r){const s=this.overrideClearColor,a=this.overrideClearAlpha,o=i.getClearAlpha(),l=s!==null,c=a>=0;l?(i.getClearColor(Gl),i.setClearColor(s,c?a:o)):c&&i.setClearAlpha(a),i.setRenderTarget(this.renderToScreen?null:e),i.clear(this.color,this.depth,this.stencil),l?i.setClearColor(Gl,o):c&&i.setClearAlpha(o)}},Ui=class extends mt{constructor(i,e,t=null){super("RenderPass",i,e),this.needsSwap=!1,this.clearPass=new ou,this.overrideMaterialManager=t===null?null:new Vl(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get renderToScreen(){return super.renderToScreen}set renderToScreen(i){super.renderToScreen=i,this.clearPass.renderToScreen=i}get overrideMaterial(){const i=this.overrideMaterialManager;return i!==null?i.material:null}set overrideMaterial(i){const e=this.overrideMaterialManager;i!==null?e!==null?e.setMaterial(i):this.overrideMaterialManager=new Vl(i):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(i){this.overrideMaterial=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getSelection(){return this.selection}setSelection(i){this.selection=i}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(i){this.ignoreBackground=i}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(i){this.skipShadowMapUpdate=i}getClearPass(){return this.clearPass}render(i,e,t,n,r){const s=this.scene,a=this.camera,o=this.selection,l=a.layers.mask,c=s.background,u=i.shadowMap.autoUpdate,h=this.renderToScreen?null:e;o!==null&&a.layers.set(o.getLayer()),this.skipShadowMapUpdate&&(i.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(s.background=null),this.clearPass.enabled&&this.clearPass.render(i,e),i.setRenderTarget(h),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(i,s,a):i.render(s,a),a.layers.mask=l,s.background=c,i.shadowMap.autoUpdate=u}};function kl(i,e,t){for(const n of e){const r="$1"+i+n.charAt(0).toUpperCase()+n.slice(1),s=new RegExp("([^\\.])(\\b"+n+"\\b)","g");for(const a of t.entries())a[1]!==null&&t.set(a[0],a[1].replace(s,r))}}function e_(i,e,t){let n=e.getFragmentShader(),r=e.getVertexShader();const s=n!==void 0&&/mainImage/.test(n),a=n!==void 0&&/mainUv/.test(n);if(t.attributes|=e.getAttributes(),n===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(a&&t.attributes&ai.CONVOLUTION)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!s&&!a)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const o=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,l=t.shaderParts;let c=l.get(qe.FRAGMENT_HEAD)||"",u=l.get(qe.FRAGMENT_MAIN_UV)||"",h=l.get(qe.FRAGMENT_MAIN_IMAGE)||"",f=l.get(qe.VERTEX_HEAD)||"",p=l.get(qe.VERTEX_MAIN_SUPPORT)||"";const g=new Set,v=new Set;if(a&&(u+=`	${i}MainUv(UV);
`,t.uvTransformation=!0),r!==null&&/mainSupport/.test(r)){const S=/mainSupport *\([\w\s]*?uv\s*?\)/.test(r);p+=`	${i}MainSupport(`,p+=S?`vUv);
`:`);
`;for(const _ of r.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const T of _[1].split(/\s*,\s*/))t.varyings.add(T),g.add(T),v.add(T);for(const _ of r.matchAll(o))v.add(_[1])}for(const S of n.matchAll(o))v.add(S[1]);for(const S of e.defines.keys())v.add(S.replace(/\([\w\s,]*\)/g,""));for(const S of e.uniforms.keys())v.add(S);v.delete("while"),v.delete("for"),v.delete("if"),e.uniforms.forEach((S,_)=>t.uniforms.set(i+_.charAt(0).toUpperCase()+_.slice(1),S)),e.defines.forEach((S,_)=>t.defines.set(i+_.charAt(0).toUpperCase()+_.slice(1),S));const m=new Map([["fragment",n],["vertex",r]]);kl(i,v,t.defines),kl(i,v,m),n=m.get("fragment"),r=m.get("vertex");const d=e.blendMode;if(t.blendModes.set(d.blendFunction,d),s){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(h+=e.inputColorSpace===St?`color0 = LinearTosRGB(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==nu?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const S=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;h+=`${i}MainImage(color0, UV, `,t.attributes&ai.DEPTH&&S.test(n)&&(h+="depth, ",t.readDepth=!0),h+=`color1);
	`;const _=i+"BlendOpacity";t.uniforms.set(_,d.opacity),h+=`color0 = blend${d.blendFunction}(color0, color1, ${_});

	`,c+=`uniform float ${_};

`}if(c+=n+`
`,r!==null&&(f+=r+`
`),l.set(qe.FRAGMENT_HEAD,c),l.set(qe.FRAGMENT_MAIN_UV,u),l.set(qe.FRAGMENT_MAIN_IMAGE,h),l.set(qe.VERTEX_HEAD,f),l.set(qe.VERTEX_MAIN_SUPPORT,p),e.extensions!==null)for(const S of e.extensions)t.extensions.add(S)}}var Jr=class extends mt{constructor(i,...e){super("EffectPass"),this.fullscreenMaterial=new Wv(null,null,null,i),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(i){for(const e of this.effects)e.mainScene=i}set mainCamera(i){this.fullscreenMaterial.copyCameraSettings(i);for(const e of this.effects)e.mainCamera=i}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(i){this.fullscreenMaterial.encodeOutput=i}get dithering(){return this.fullscreenMaterial.dithering}set dithering(i){const e=this.fullscreenMaterial;e.dithering=i,e.needsUpdate=!0}setEffects(i){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=i.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const i=new l_;let e=0;for(const a of this.effects)if(a.blendMode.blendFunction===Be.DST)i.attributes|=a.getAttributes()&ai.DEPTH;else{if(i.attributes&a.getAttributes()&ai.CONVOLUTION)throw new Error(`Convolution effects cannot be merged (${a.name})`);e_("e"+e++,a,i)}let t=i.shaderParts.get(qe.FRAGMENT_HEAD),n=i.shaderParts.get(qe.FRAGMENT_MAIN_IMAGE),r=i.shaderParts.get(qe.FRAGMENT_MAIN_UV);const s=/\bblend\b/g;for(const a of i.blendModes.values())t+=a.getShaderCode().replace(s,`blend${a.blendFunction}`)+`
`;i.attributes&ai.DEPTH?(i.readDepth&&(n=`float depth = readDepth(UV);

	`+n),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,i.colorSpace===St&&(n+=`color0 = sRGBToLinear(color0);
	`),i.uvTransformation?(r=`vec2 transformedUv = vUv;
`+r,i.defines.set("UV","transformedUv")):i.defines.set("UV","vUv"),i.shaderParts.set(qe.FRAGMENT_HEAD,t),i.shaderParts.set(qe.FRAGMENT_MAIN_IMAGE,n),i.shaderParts.set(qe.FRAGMENT_MAIN_UV,r);for(const[a,o]of i.shaderParts)o!==null&&i.shaderParts.set(a,o.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(i)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(i,e=_r){this.fullscreenMaterial.depthBuffer=i,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(i,e)}render(i,e,t,n,r){for(const s of this.effects)s.update(i,e,n);if(!this.skipRendering||this.renderToScreen){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,s.time+=n*this.timeScale,i.setRenderTarget(this.renderToScreen?null:t),i.render(this.scene,this.camera)}}setSize(i,e){this.fullscreenMaterial.setSize(i,e);for(const t of this.effects)t.setSize(i,e)}initialize(i,e,t){this.renderer=i;for(const n of this.effects)n.initialize(i,e,t);this.updateMaterial(),t!==void 0&&t!==Pt&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const i of this.effects)i.removeEventListener("change",this.listener),i.dispose()}handleEvent(i){switch(i.type){case"change":this.recompile();break}}},t_=class extends mt{constructor({kernelSize:i=xs.MEDIUM,resolutionScale:e=.5,width:t=qt.AUTO_SIZE,height:n=qt.AUTO_SIZE,resolutionX:r=t,resolutionY:s=n}={}){super("KawaseBlurPass"),this.renderTargetA=new tt(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const a=this.resolution=new qt(this,r,s,e);a.addEventListener("change",o=>this.setSize(a.baseWidth,a.baseHeight)),this._blurMaterial=new Ov,this._blurMaterial.kernelSize=i,this.copyMaterial=new ru}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(i){this._blurMaterial=i}get dithering(){return this.copyMaterial.dithering}set dithering(i){this.copyMaterial.dithering=i}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(i){this.blurMaterial.kernelSize=i}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get scale(){return this.blurMaterial.scale}set scale(i){this.blurMaterial.scale=i}getScale(){return this.blurMaterial.scale}setScale(i){this.blurMaterial.scale=i}getKernelSize(){return this.kernelSize}setKernelSize(i){this.kernelSize=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.scene,a=this.camera,o=this.renderTargetA,l=this.renderTargetB,c=this.blurMaterial,u=c.kernelSequence;let h=e;this.fullscreenMaterial=c;for(let f=0,p=u.length;f<p;++f){const g=f&1?l:o;c.kernel=u[f],c.inputBuffer=h.texture,i.setRenderTarget(g),i.render(s,a),h=g}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=h.texture,i.setRenderTarget(this.renderToScreen?null:t),i.render(s,a)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e);const n=t.width,r=t.height;this.renderTargetA.setSize(n,r),this.renderTargetB.setSize(n,r),this.blurMaterial.setSize(i,e)}initialize(i,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==Pt?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):ji(i)===St&&(on(this.renderTargetA.texture,St),on(this.renderTargetB.texture,St)))}static get AUTO_SIZE(){return qt.AUTO_SIZE}},lu=class extends mt{constructor({renderTarget:i,luminanceRange:e,colorOutput:t,resolutionScale:n=1,width:r=qt.AUTO_SIZE,height:s=qt.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("LuminancePass"),this.fullscreenMaterial=new jv(t,e),this.needsSwap=!1,this.renderTarget=i,this.renderTarget===void 0&&(this.renderTarget=new tt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const l=this.resolution=new qt(this,a,o,n);l.addEventListener("change",c=>this.setSize(l.baseWidth,l.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(i,e,t,n,r){const s=this.fullscreenMaterial;s.inputBuffer=e.texture,i.setRenderTarget(this.renderToScreen?null:this.renderTarget),i.render(this.scene,this.camera)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}initialize(i,e,t){t!==void 0&&t!==Pt&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},n_=class extends mt{constructor(i,e){super("MaskPass",i,e),this.needsSwap=!1,this.clearPass=new ou(!1,!1,!0),this.inverse=!1}set mainScene(i){this.scene=i}set mainCamera(i){this.camera=i}get inverted(){return this.inverse}set inverted(i){this.inverse=i}get clear(){return this.clearPass.enabled}set clear(i){this.clearPass.enabled=i}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(i){this.inverted=i}render(i,e,t,n,r){const s=i.getContext(),a=i.state.buffers,o=this.scene,l=this.camera,c=this.clearPass,u=this.inverted?0:1,h=1-u;a.color.setMask(!1),a.depth.setMask(!1),a.color.setLocked(!0),a.depth.setLocked(!0),a.stencil.setTest(!0),a.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),a.stencil.setFunc(s.ALWAYS,u,4294967295),a.stencil.setClear(h),a.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?c.render(i,null):(c.render(i,e),c.render(i,t))),this.renderToScreen?(i.setRenderTarget(null),i.render(o,l)):(i.setRenderTarget(e),i.render(o,l),i.setRenderTarget(t),i.render(o,l)),a.color.setLocked(!1),a.depth.setLocked(!1),a.stencil.setLocked(!1),a.stencil.setFunc(s.EQUAL,1,4294967295),a.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),a.stencil.setLocked(!0)}},i_=class extends mt{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new tt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new Gv,this.upsamplingMaterial=new Kv,this.resolution=new me}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(i){if(this.levels!==i){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<i;++t){const n=e.clone();n.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(n)}this.upsamplingMipmaps.push(e);for(let t=1,n=i-1;t<n;++t){const r=e.clone();r.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(r)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(i){this.upsamplingMaterial.radius=i}render(i,e,t,n,r){const{scene:s,camera:a}=this,{downsamplingMaterial:o,upsamplingMaterial:l}=this,{downsamplingMipmaps:c,upsamplingMipmaps:u}=this;let h=e;this.fullscreenMaterial=o;for(let f=0,p=c.length;f<p;++f){const g=c[f];o.setSize(h.width,h.height),o.inputBuffer=h.texture,i.setRenderTarget(g),i.render(s,a),h=g}this.fullscreenMaterial=l;for(let f=u.length-1;f>=0;--f){const p=u[f];l.setSize(h.width,h.height),l.inputBuffer=h.texture,l.supportBuffer=c[f].texture,i.setRenderTarget(p),i.render(s,a),h=p}}setSize(i,e){const t=this.resolution;t.set(i,e);let n=t.width,r=t.height;for(let s=0,a=this.downsamplingMipmaps.length;s<a;++s)n=Math.round(n*.5),r=Math.round(r*.5),this.downsamplingMipmaps[s].setSize(n,r),s<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[s].setSize(n,r)}initialize(i,e,t){if(t!==void 0){const n=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const r of n)r.texture.type=t;if(t!==Pt)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(ji(i)===St)for(const r of n)on(r.texture,St)}}dispose(){super.dispose();for(const i of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))i.dispose()}},r_=class extends mt{constructor(i,e,{renderTarget:t,resolutionScale:n=1,width:r=qt.AUTO_SIZE,height:s=qt.AUTO_SIZE,resolutionX:a=r,resolutionY:o=s}={}){super("NormalPass"),this.needsSwap=!1,this.renderPass=new Ui(i,e,new nv);const l=this.renderPass;l.ignoreBackground=!0,l.skipShadowMapUpdate=!0;const c=l.getClearPass();c.overrideClearColor=new xe(7829503),c.overrideClearAlpha=1,this.renderTarget=t,this.renderTarget===void 0&&(this.renderTarget=new tt(1,1,{minFilter:be,magFilter:be}),this.renderTarget.texture.name="NormalPass.Target");const u=this.resolution=new qt(this,a,o,n);u.addEventListener("change",h=>this.setSize(u.baseWidth,u.baseHeight))}set mainScene(i){this.renderPass.mainScene=i}set mainCamera(i){this.renderPass.mainCamera=i}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}render(i,e,t,n,r){const s=this.renderToScreen?null:this.renderTarget;this.renderPass.render(i,s,s)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height)}},sa=1/1e3,s_=1e3,a_=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(i){typeof document<"u"&&document.hidden!==void 0&&(i?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=i)}get delta(){return this._delta*sa}get fixedDelta(){return this._fixedDelta*sa}set fixedDelta(i){this._fixedDelta=i*s_}get elapsed(){return this._elapsed*sa}update(i){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(i!==void 0?i:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}handleEvent(i){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},o_=class{constructor(i=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:n=0,frameBufferType:r}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,r,n),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new au,this.depthTexture=null,this.passes=[],this.timer=new a_,this.autoRenderToScreen=!0,this.setRenderer(i)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(i){const e=this.inputBuffer,t=this.multisampling;t>0&&i>0?(this.inputBuffer.samples=i,this.outputBuffer.samples=i,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==i&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,i),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(i){if(this.renderer=i,i!==null){const e=i.getSize(new me),t=i.getContext().getContextAttributes().alpha,n=this.inputBuffer.texture.type;n===Pt&&ji(i)===St&&(on(this.inputBuffer.texture,St),on(this.outputBuffer.texture,St),this.inputBuffer.dispose(),this.outputBuffer.dispose()),i.autoClear=!1,this.setSize(e.width,e.height);for(const r of this.passes)r.initialize(i,t,n)}}replaceRenderer(i,e=!0){const t=this.renderer,n=t.domElement.parentNode;return this.setRenderer(i),e&&n!==null&&(n.removeChild(t.domElement),n.appendChild(i.domElement)),t}createDepthTexture(){const i=this.depthTexture=new vs;return this.inputBuffer.depthTexture=i,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(i.format=oi,i.type=Wn):i.type=An,i}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const i of this.passes)i.setDepthTexture(null)}}createBuffer(i,e,t,n){const r=this.renderer,s=r===null?new me:r.getDrawingBufferSize(new me),a={minFilter:Ke,magFilter:Ke,stencilBuffer:e,depthBuffer:i,type:t},o=new tt(s.width,s.height,a);return n>0&&(o.ignoreDepthForMultisampleCopy=!1,o.samples=n),t===Pt&&ji(r)===St&&on(o.texture,St),o.texture.name="EffectComposer.Buffer",o.texture.generateMipmaps=!1,o}setMainScene(i){for(const e of this.passes)e.mainScene=i}setMainCamera(i){for(const e of this.passes)e.mainCamera=i}addPass(i,e){const t=this.passes,n=this.renderer,r=n.getDrawingBufferSize(new me),s=n.getContext().getContextAttributes().alpha,a=this.inputBuffer.texture.type;if(i.setRenderer(n),i.setSize(r.width,r.height),i.initialize(n,s,a),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),i.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,i):t.push(i),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),i.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const o=this.createDepthTexture();for(i of t)i.setDepthTexture(o)}else i.setDepthTexture(this.depthTexture)}removePass(i){const e=this.passes,t=e.indexOf(i);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const s=(o,l)=>o||l.needsDepthTexture;e.reduce(s,!1)||(i.getDepthTexture()===this.depthTexture&&i.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(i.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const i=this.passes;this.deleteDepthTexture(),i.length>0&&(this.autoRenderToScreen&&(i[i.length-1].renderToScreen=!1),this.passes=[])}render(i){const e=this.renderer,t=this.copyPass;let n=this.inputBuffer,r=this.outputBuffer,s=!1,a,o,l;i===void 0&&(this.timer.update(),i=this.timer.delta);for(const c of this.passes)c.enabled&&(c.render(e,n,r,i,s),c.needsSwap&&(s&&(t.renderToScreen=c.renderToScreen,a=e.getContext(),o=e.state.buffers.stencil,o.setFunc(a.NOTEQUAL,1,4294967295),t.render(e,n,r,i,s),o.setFunc(a.EQUAL,1,4294967295)),l=n,n=r,r=l),c instanceof n_?s=!0:c instanceof Qv&&(s=!1))}setSize(i,e,t){const n=this.renderer,r=n.getSize(new me);(i===void 0||e===void 0)&&(i=r.width,e=r.height),(r.width!==i||r.height!==e)&&n.setSize(i,e,t);const s=n.getDrawingBufferSize(new me);this.inputBuffer.setSize(s.width,s.height),this.outputBuffer.setSize(s.width,s.height);for(const a of this.passes)a.setSize(s.width,s.height)}reset(){const i=this.timer.autoReset;this.dispose(),this.autoRenderToScreen=!0,this.timer.autoReset=i}dispose(){for(const i of this.passes)i.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose()}},l_=class{constructor(){this.shaderParts=new Map([[qe.FRAGMENT_HEAD,null],[qe.FRAGMENT_MAIN_UV,null],[qe.FRAGMENT_MAIN_IMAGE,null],[qe.VERTEX_HEAD,null],[qe.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=ai.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=Xi}},aa=!1,Vl=class{constructor(i=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(i),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Ot:t=this.materialsFlatShadedDoubleSide;break;case At:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Ot:t=this.materialsDoubleSide;break;case At:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(i){if(!(i instanceof at))return i.clone();const e=i.uniforms,t=new Map;for(const r in e){const s=e[r].value;s.isRenderTargetTexture&&(e[r].value=null,t.set(r,s))}const n=i.clone();for(const r of t)e[r[0]].value=r[1],n.uniforms[r[0]].value=r[1];return n}setMaterial(i){if(this.disposeMaterials(),this.material=i,i!==null){const e=this.materials=[this.cloneMaterial(i),this.cloneMaterial(i),this.cloneMaterial(i)];for(const t of e)t.uniforms=Object.assign({},i.uniforms),t.side=hn;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=At,n}),this.materialsDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.side=Ot,n}),this.materialsFlatShaded=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n}),this.materialsFlatShadedBackSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=At,n}),this.materialsFlatShadedDoubleSide=e.map(t=>{const n=this.cloneMaterial(t);return n.uniforms=Object.assign({},i.uniforms),n.flatShading=!0,n.side=Ot,n})}}render(i,e,t){const n=i.shadowMap.enabled;if(i.shadowMap.enabled=!1,aa){const r=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),i.render(e,t);for(const s of r)s[0].material=s[1];this.meshCount!==r.size&&r.clear()}else{const r=e.overrideMaterial;e.overrideMaterial=this.material,i.render(e,t),e.overrideMaterial=r}i.shadowMap.enabled=n}disposeMaterials(){if(this.material!==null){const i=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of i)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return aa}static set workaroundEnabled(i){aa=i}},zn=-1,qt=class extends dn{constructor(i,e=zn,t=zn,n=1){super(),this.resizable=i,this.baseSize=new me(1,1),this.preferredSize=new me(e,t),this.target=this.preferredSize,this.s=n,this.effectiveSize=new me,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const i=this.baseSize,e=this.preferredSize,t=this.effectiveSize,n=this.scale;e.width!==zn?t.width=e.width:e.height!==zn?t.width=Math.round(e.height*(i.width/Math.max(i.height,1))):t.width=Math.round(i.width*n),e.height!==zn?t.height=e.height:e.width!==zn?t.height=Math.round(e.width/Math.max(i.width/Math.max(i.height,1),1)):t.height=Math.round(i.height*n)}get width(){return this.effectiveSize.width}set width(i){this.preferredWidth=i}get height(){return this.effectiveSize.height}set height(i){this.preferredHeight=i}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(i){this.s!==i&&(this.s=i,this.preferredSize.setScalar(zn),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(i){this.scale=i}get baseWidth(){return this.baseSize.width}set baseWidth(i){this.baseSize.width!==i&&(this.baseSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(i){this.baseWidth=i}get baseHeight(){return this.baseSize.height}set baseHeight(i){this.baseSize.height!==i&&(this.baseSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(i){this.baseHeight=i}setBaseSize(i,e){(this.baseSize.width!==i||this.baseSize.height!==e)&&(this.baseSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(i){this.preferredSize.width!==i&&(this.preferredSize.width=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(i){this.preferredWidth=i}get preferredHeight(){return this.preferredSize.height}set preferredHeight(i){this.preferredSize.height!==i&&(this.preferredSize.height=i,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(i){this.preferredHeight=i}setPreferredSize(i,e){(this.preferredSize.width!==i||this.preferredSize.height!==e)&&(this.preferredSize.set(i,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(i){this.s=i.scale,this.baseSize.set(i.baseWidth,i.baseHeight),this.preferredSize.set(i.preferredWidth,i.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return zn}},c_=class extends Set{constructor(i,e=10){super(),this.l=e,this.exclusive=!1,i!==void 0&&this.set(i)}get layer(){return this.l}set layer(i){const e=this.l;for(const t of this)t.layers.disable(e),t.layers.enable(i);this.l=i}getLayer(){return this.layer}setLayer(i){this.layer=i}isExclusive(){return this.exclusive}setExclusive(i){this.exclusive=i}clear(){const i=this.layer;for(const e of this)e.layers.disable(i);return super.clear()}set(i){this.clear();for(const e of i)this.add(e);return this}indexOf(i){return this.has(i)?0:-1}add(i){return this.exclusive?i.layers.set(this.layer):i.layers.enable(this.layer),super.add(i)}delete(i){return this.has(i)&&i.layers.disable(this.layer),super.delete(i)}toggle(i){let e;return this.has(i)?(this.delete(i),e=!1):(this.add(i),e=!0),e}setVisible(i){for(const e of this)i?e.layers.enable(0):e.layers.disable(0);return this}},u_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",h_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",f_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",d_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",p_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",m_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",g_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",v_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",__="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",x_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",M_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",S_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",T_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",y_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",E_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",b_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",w_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",A_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",R_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",P_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",C_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",L_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",D_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",I_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",U_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",N_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",F_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",O_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",B_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",z_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",H_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",G_="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",k_=new Map([[Be.ADD,u_],[Be.ALPHA,h_],[Be.AVERAGE,f_],[Be.COLOR,d_],[Be.COLOR_BURN,p_],[Be.COLOR_DODGE,m_],[Be.DARKEN,g_],[Be.DIFFERENCE,v_],[Be.DIVIDE,__],[Be.DST,null],[Be.EXCLUSION,x_],[Be.HARD_LIGHT,M_],[Be.HARD_MIX,S_],[Be.HUE,T_],[Be.INVERT,y_],[Be.INVERT_RGB,E_],[Be.LIGHTEN,b_],[Be.LINEAR_BURN,w_],[Be.LINEAR_DODGE,A_],[Be.LINEAR_LIGHT,R_],[Be.LUMINOSITY,P_],[Be.MULTIPLY,C_],[Be.NEGATION,L_],[Be.NORMAL,D_],[Be.OVERLAY,I_],[Be.PIN_LIGHT,U_],[Be.REFLECT,N_],[Be.SATURATION,F_],[Be.SCREEN,O_],[Be.SOFT_LIGHT,B_],[Be.SRC,z_],[Be.SUBTRACT,H_],[Be.VIVID_LIGHT,G_]]),V_=class extends dn{constructor(i,e=1){super(),this._blendFunction=i,this.opacity=new J(e)}getOpacity(){return this.opacity.value}setOpacity(i){this.opacity.value=i}get blendFunction(){return this._blendFunction}set blendFunction(i){this._blendFunction=i,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(i){this.blendFunction=i}getShaderCode(){return k_.get(this.blendFunction)}},qn=class extends dn{constructor(i,e,{attributes:t=ai.NONE,blendFunction:n=Be.NORMAL,defines:r=new Map,uniforms:s=new Map,extensions:a=null,vertexShader:o=null}={}){super(),this.name=i,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=o,this.defines=r,this.uniforms=s,this.extensions=a,this.blendMode=new V_(n),this.blendMode.addEventListener("change",l=>this.setChanged()),this._inputColorSpace=Xi,this._outputColorSpace=nu}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(i){this._inputColorSpace=i,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(i){this._outputColorSpace=i,this.setChanged()}set mainScene(i){}set mainCamera(i){}getName(){return this.name}setRenderer(i){this.renderer=i}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(i){this.attributes=i,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(i){this.fragmentShader=i,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(i){this.vertexShader=i,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(i,e=_r){}update(i,e,t){}setSize(i,e){}initialize(i,e,t){}dispose(){for(const i of Object.keys(this)){const e=this[i];(e instanceof tt||e instanceof Yt||e instanceof dt||e instanceof mt)&&this[i].dispose()}}},W_=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,X_=class extends qn{constructor({blendFunction:i=Be.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:n=!1,intensity:r=1,radius:s=.85,levels:a=8,kernelSize:o=xs.LARGE,resolutionScale:l=.5,width:c=qt.AUTO_SIZE,height:u=qt.AUTO_SIZE,resolutionX:h=c,resolutionY:f=u}={}){super("BloomEffect",W_,{blendFunction:i,uniforms:new Map([["map",new J(null)],["intensity",new J(r)]])}),this.renderTarget=new tt(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new t_({kernelSize:o}),this.luminancePass=new lu({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new i_,this.mipmapBlurPass.enabled=n,this.mipmapBlurPass.radius=s,this.mipmapBlurPass.levels=a,this.uniforms.get("map").value=n?this.mipmapBlurPass.texture:this.renderTarget.texture;const p=this.resolution=new qt(this,h,f,l);p.addEventListener("change",g=>this.setSize(p.baseWidth,p.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(i){this.resolution.preferredWidth=i}get height(){return this.resolution.height}set height(i){this.resolution.preferredHeight=i}get dithering(){return this.blurPass.dithering}set dithering(i){this.blurPass.dithering=i}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(i){this.blurPass.kernelSize=i}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(i){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(i){this.uniforms.get("intensity").value=i}getIntensity(){return this.intensity}setIntensity(i){this.intensity=i}getResolutionScale(){return this.resolution.scale}setResolutionScale(i){this.resolution.scale=i}update(i,e,t){const n=this.renderTarget,r=this.luminancePass;r.enabled?(r.render(i,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,r.renderTarget):this.blurPass.render(i,r.renderTarget,n)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(i,e):this.blurPass.render(i,e,n)}setSize(i,e){const t=this.resolution;t.setBaseSize(i,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(i,e),this.mipmapBlurPass.setSize(i,e)}initialize(i,e,t){this.blurPass.initialize(i,e,t),this.luminancePass.initialize(i,e,t),this.mipmapBlurPass.initialize(i,e,t),t!==void 0&&(this.renderTarget.texture.type=t,ji(i)===St&&on(this.renderTarget.texture,St))}};function Wl(i,e,t){const n=document.createElement("canvas"),r=n.getContext("2d");if(n.width=i,n.height=e,t instanceof Image)r.drawImage(t,0,0);else{const s=r.createImageData(i,e);s.data.set(t),r.putImageData(s,0,0)}return n}var j_=class cu{constructor(e=0,t=0,n=null){this.width=e,this.height=t,this.data=n}toCanvas(){return typeof document>"u"?null:Wl(this.width,this.height,this.data)}static from(e){const{width:t,height:n}=e;let r;if(e instanceof Image){const s=Wl(t,n,e);s!==null&&(r=s.getContext("2d").getImageData(0,0,t,n).data)}else r=e.data;return new cu(t,n,r)}},q_=`"use strict";(()=>{var O={SCALE_UP:"lut.scaleup"};var _=[new Float32Array(3),new Float32Array(3)],n=[new Float32Array(3),new Float32Array(3),new Float32Array(3),new Float32Array(3)],Z=[[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([1,0,0]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([1,0,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([1,1,0]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,1,0]),new Float32Array([0,1,1]),new Float32Array([1,1,1])],[new Float32Array([0,0,0]),new Float32Array([0,0,1]),new Float32Array([0,1,1]),new Float32Array([1,1,1])]];function d(a,t,r,m){let i=r[0]-t[0],e=r[1]-t[1],y=r[2]-t[2],h=a[0]-t[0],A=a[1]-t[1],w=a[2]-t[2],c=e*w-y*A,l=y*h-i*w,x=i*A-e*h,u=Math.sqrt(c*c+l*l+x*x),b=u*.5,s=c/u,F=l/u,f=x/u,p=-(a[0]*s+a[1]*F+a[2]*f),M=m[0]*s+m[1]*F+m[2]*f;return Math.abs(M+p)*b/3}function V(a,t,r,m,i,e){let y=(r+m*t+i*t*t)*4;e[0]=a[y+0],e[1]=a[y+1],e[2]=a[y+2]}function k(a,t,r,m,i,e){let y=r*(t-1),h=m*(t-1),A=i*(t-1),w=Math.floor(y),c=Math.floor(h),l=Math.floor(A),x=Math.ceil(y),u=Math.ceil(h),b=Math.ceil(A),s=y-w,F=h-c,f=A-l;if(w===y&&c===h&&l===A)V(a,t,y,h,A,e);else{let p;s>=F&&F>=f?p=Z[0]:s>=f&&f>=F?p=Z[1]:f>=s&&s>=F?p=Z[2]:F>=s&&s>=f?p=Z[3]:F>=f&&f>=s?p=Z[4]:f>=F&&F>=s&&(p=Z[5]);let[M,g,X,Y]=p,P=_[0];P[0]=s,P[1]=F,P[2]=f;let o=_[1],L=x-w,S=u-c,U=b-l;o[0]=L*M[0]+w,o[1]=S*M[1]+c,o[2]=U*M[2]+l,V(a,t,o[0],o[1],o[2],n[0]),o[0]=L*g[0]+w,o[1]=S*g[1]+c,o[2]=U*g[2]+l,V(a,t,o[0],o[1],o[2],n[1]),o[0]=L*X[0]+w,o[1]=S*X[1]+c,o[2]=U*X[2]+l,V(a,t,o[0],o[1],o[2],n[2]),o[0]=L*Y[0]+w,o[1]=S*Y[1]+c,o[2]=U*Y[2]+l,V(a,t,o[0],o[1],o[2],n[3]);let T=d(g,X,Y,P)*6,q=d(M,X,Y,P)*6,C=d(M,g,Y,P)*6,E=d(M,g,X,P)*6;n[0][0]*=T,n[0][1]*=T,n[0][2]*=T,n[1][0]*=q,n[1][1]*=q,n[1][2]*=q,n[2][0]*=C,n[2][1]*=C,n[2][2]*=C,n[3][0]*=E,n[3][1]*=E,n[3][2]*=E,e[0]=n[0][0]+n[1][0]+n[2][0]+n[3][0],e[1]=n[0][1]+n[1][1]+n[2][1]+n[3][1],e[2]=n[0][2]+n[1][2]+n[2][2]+n[3][2]}}var v=class{static expand(t,r){let m=Math.cbrt(t.length/4),i=new Float32Array(3),e=new t.constructor(r**3*4),y=t instanceof Uint8Array?255:1,h=r**2,A=1/(r-1);for(let w=0;w<r;++w)for(let c=0;c<r;++c)for(let l=0;l<r;++l){let x=l*A,u=c*A,b=w*A,s=Math.round(l+c*r+w*h)*4;k(t,m,x,u,b,i),e[s+0]=i[0],e[s+1]=i[1],e[s+2]=i[2],e[s+3]=y}return e}};self.addEventListener("message",a=>{let t=a.data,r=t.data;switch(t.operation){case O.SCALE_UP:r=v.expand(r,t.size);break}postMessage(r,[r.buffer]),close()});})();
`,Xl=new xe,uu=class is extends dr{constructor(e,t){super(e,t,t,t),this.type=ke,this.format=Mt,this.minFilter=Ke,this.magFilter=Ke,this.wrapS=xt,this.wrapT=xt,this.wrapR=xt,this.unpackAlignment=1,this.needsUpdate=!0,on(this,Xi),this.domainMin=new C(0,0,0),this.domainMax=new C(1,1,1)}get isLookupTexture3D(){return!0}scaleUp(e,t=!0){const n=this.image;let r;return e<=n.width?r=Promise.reject(new Error("The target size must be greater than the current size")):r=new Promise((s,a)=>{const o=URL.createObjectURL(new Blob([q_],{type:"text/javascript"})),l=new Worker(o);l.addEventListener("error",u=>a(u.error)),l.addEventListener("message",u=>{const h=new is(u.data,e);ra(this,h),h.type=this.type,h.name=this.name,URL.revokeObjectURL(o),s(h)});const c=t?[n.data.buffer]:[];l.postMessage({operation:Lv.SCALE_UP,data:n.data,size:e},c)}),r}applyLUT(e){const t=this.image,n=e.image,r=Math.min(t.width,t.height,t.depth),s=Math.min(n.width,n.height,n.depth);if(r!==s)console.error("Size mismatch");else if(e.type!==ke||this.type!==ke)console.error("Both LUTs must be FloatType textures");else if(e.format!==Mt||this.format!==Mt)console.error("Both LUTs must be RGBA textures");else{const a=t.data,o=n.data,l=r,c=l**2,u=l-1;for(let h=0,f=l**3;h<f;++h){const p=h*4,g=a[p+0]*u,v=a[p+1]*u,m=a[p+2]*u,d=Math.round(g+v*l+m*c)*4;a[p+0]=o[d+0],a[p+1]=o[d+1],a[p+2]=o[d+2]}this.needsUpdate=!0}return this}convertToUint8(){if(this.type===ke){const e=this.image.data,t=new Uint8Array(e.length);for(let n=0,r=e.length;n<r;++n)t[n]=e[n]*255+.5;this.image.data=t,this.type=Pt,this.needsUpdate=!0}return this}convertToFloat(){if(this.type===Pt){const e=this.image.data,t=new Float32Array(e.length);for(let n=0,r=e.length;n<r;++n)t[n]=e[n]/255;this.image.data=t,this.type=ke,this.needsUpdate=!0}return this}convertToRGBA(){return console.warn("LookupTexture","convertToRGBA() is deprecated, LUTs are now RGBA by default"),this}convertLinearToSRGB(){const e=this.image.data;if(this.type===ke){for(let t=0,n=e.length;t<n;t+=4)Xl.fromArray(e,t).convertLinearToSRGB().toArray(e,t);on(this,St),this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}convertSRGBToLinear(){const e=this.image.data;if(this.type===ke){for(let t=0,n=e.length;t<n;t+=4)Xl.fromArray(e,t).convertSRGBToLinear().toArray(e,t);on(this,Xi),this.needsUpdate=!0}else console.error("Color space conversion requires FloatType data");return this}toDataTexture(){const e=this.image.width,t=this.image.height*this.image.depth,n=new jn(this.image.data,e,t);return n.name=this.name,n.type=this.type,n.format=this.format,n.minFilter=Ke,n.magFilter=Ke,n.wrapS=this.wrapS,n.wrapT=this.wrapT,n.generateMipmaps=!1,n.needsUpdate=!0,ra(this,n),n}static from(e){const t=e.image,{width:n,height:r}=t,s=Math.min(n,r);let a;if(t instanceof Image){const c=j_.from(t).data;if(n>r){a=new Uint8Array(c.length);for(let u=0;u<s;++u)for(let h=0;h<s;++h)for(let f=0;f<s;++f){const p=(f+u*s+h*s*s)*4,g=(f+h*s+u*s*s)*4;a[g+0]=c[p+0],a[g+1]=c[p+1],a[g+2]=c[p+2],a[g+3]=c[p+3]}}else a=new Uint8Array(c.buffer)}else a=t.data.slice();const o=new is(a,s);return o.type=e.type,o.name=e.name,ra(e,o),o}static createNeutral(e){const t=new Float32Array(e**3*4),n=e**2,r=1/(e-1);for(let a=0;a<e;++a)for(let o=0;o<e;++o)for(let l=0;l<e;++l){const c=(a+o*e+l*n)*4;t[c+0]=a*r,t[c+1]=o*r,t[c+2]=l*r,t[c+3]=1}const s=new is(t,e);return s.name="neutral",s}},Y_=`uniform vec3 scale;uniform vec3 offset;
#ifdef CUSTOM_INPUT_DOMAIN
uniform vec3 domainMin;uniform vec3 domainMax;
#endif
#ifdef LUT_3D
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler3D lut;
#else
uniform mediump sampler3D lut;
#endif
#else
uniform lowp sampler3D lut;
#endif
vec4 applyLUT(const in vec3 rgb){
#ifdef TETRAHEDRAL_INTERPOLATION
vec3 p=floor(rgb);vec3 f=rgb-p;vec3 v1=(p+0.5)*LUT_TEXEL_WIDTH;vec3 v4=(p+1.5)*LUT_TEXEL_WIDTH;vec3 v2,v3;vec3 frac;if(f.r>=f.g){if(f.g>f.b){frac=f.rgb;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else if(f.r>=f.b){frac=f.rbg;v2=vec3(v4.x,v1.y,v1.z);v3=vec3(v4.x,v1.y,v4.z);}else{frac=f.brg;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v4.x,v1.y,v4.z);}}else{if(f.b>f.g){frac=f.bgr;v2=vec3(v1.x,v1.y,v4.z);v3=vec3(v1.x,v4.y,v4.z);}else if(f.r>=f.b){frac=f.grb;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v4.x,v4.y,v1.z);}else{frac=f.gbr;v2=vec3(v1.x,v4.y,v1.z);v3=vec3(v1.x,v4.y,v4.z);}}vec4 n1=texture(lut,v1);vec4 n2=texture(lut,v2);vec4 n3=texture(lut,v3);vec4 n4=texture(lut,v4);vec4 weights=vec4(1.0-frac.x,frac.x-frac.y,frac.y-frac.z,frac.z);vec4 result=weights*mat4(vec4(n1.r,n2.r,n3.r,n4.r),vec4(n1.g,n2.g,n3.g,n4.g),vec4(n1.b,n2.b,n3.b,n4.b),vec4(1.0));return vec4(result.rgb,1.0);
#else
return texture(lut,rgb);
#endif
}
#else
#ifdef LUT_PRECISION_HIGH
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D lut;
#else
uniform mediump sampler2D lut;
#endif
#else
uniform lowp sampler2D lut;
#endif
vec4 applyLUT(const in vec3 rgb){float slice=rgb.b*LUT_SIZE;float slice0=floor(slice);float interp=slice-slice0;float centeredInterp=interp-0.5;float slice1=slice0+sign(centeredInterp);
#ifdef LUT_STRIP_HORIZONTAL
float xOffset=clamp(rgb.r*LUT_TEXEL_HEIGHT,LUT_TEXEL_WIDTH*0.5,LUT_TEXEL_HEIGHT-LUT_TEXEL_WIDTH*0.5);vec2 uv0=vec2(slice0*LUT_TEXEL_HEIGHT+xOffset,rgb.g);vec2 uv1=vec2(slice1*LUT_TEXEL_HEIGHT+xOffset,rgb.g);
#else
float yOffset=clamp(rgb.g*LUT_TEXEL_WIDTH,LUT_TEXEL_HEIGHT*0.5,LUT_TEXEL_WIDTH-LUT_TEXEL_HEIGHT*0.5);vec2 uv0=vec2(rgb.r,slice0*LUT_TEXEL_WIDTH+yOffset);vec2 uv1=vec2(rgb.r,slice1*LUT_TEXEL_WIDTH+yOffset);
#endif
vec4 sample0=texture2D(lut,uv0);vec4 sample1=texture2D(lut,uv1);return mix(sample0,sample1,abs(centeredInterp));}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec3 c=inputColor.rgb;
#ifdef CUSTOM_INPUT_DOMAIN
if(c.r>=domainMin.r&&c.g>=domainMin.g&&c.b>=domainMin.b&&c.r<=domainMax.r&&c.g<=domainMax.g&&c.b<=domainMax.b){c=applyLUT(scale*c+offset).rgb;}else{c=inputColor.rgb;}
#else
#if !defined(LUT_3D) || defined(TETRAHEDRAL_INTERPOLATION)
c=clamp(c,0.0,1.0);
#endif
c=applyLUT(scale*c+offset).rgb;
#endif
outputColor=vec4(c,inputColor.a);}`,K_=class extends qn{constructor(i,{blendFunction:e=Be.SRC,tetrahedralInterpolation:t=!1,inputEncoding:n=un,inputColorSpace:r}={}){super("LUT3DEffect",Y_,{blendFunction:e,uniforms:new Map([["lut",new J(null)],["scale",new J(new C)],["offset",new J(new C)],["domainMin",new J(null)],["domainMax",new J(null)]])}),this.tetrahedralInterpolation=t,this.inputColorSpace=r||iu.get(n),this.lut=i}get inputEncoding(){return this.inputColorSpace}set inputEncoding(i){this.inputColorSpace=i}getInputEncoding(){return this.inputColorSpace}setInputEncoding(i){this.inputColorSpace=i}getOutputEncoding(){return this.outputColorSpace}get lut(){return this.uniforms.get("lut").value}set lut(i){const e=this.defines,t=this.uniforms;if(this.lut!==i&&(t.get("lut").value=i,i!==null)){const n=i.image,r=this.tetrahedralInterpolation;if(e.clear(),e.set("LUT_SIZE",Math.min(n.width,n.height).toFixed(16)),e.set("LUT_TEXEL_WIDTH",(1/n.width).toFixed(16)),e.set("LUT_TEXEL_HEIGHT",(1/n.height).toFixed(16)),t.get("domainMin").value=null,t.get("domainMax").value=null,(i.type===ke||i.type===jt)&&e.set("LUT_PRECISION_HIGH","1"),n.width>n.height?e.set("LUT_STRIP_HORIZONTAL","1"):i instanceof dr&&e.set("LUT_3D","1"),i instanceof uu){const s=i.domainMin,a=i.domainMax;(s.x!==0||s.y!==0||s.z!==0||a.x!==1||a.y!==1||a.z!==1)&&(e.set("CUSTOM_INPUT_DOMAIN","1"),t.get("domainMin").value=s.clone(),t.get("domainMax").value=a.clone())}this.tetrahedralInterpolation=r}}getLUT(){return this.lut}setLUT(i){this.lut=i}updateScaleOffset(){const i=this.lut;if(i!==null){const e=Math.min(i.image.width,i.image.height),t=this.uniforms.get("scale").value,n=this.uniforms.get("offset").value;if(this.tetrahedralInterpolation&&i instanceof dr)if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const r=i.domainMax.clone().sub(i.domainMin);t.setScalar(e-1).divide(r),n.copy(i.domainMin).negate().multiply(t)}else t.setScalar(e-1),n.setScalar(0);else if(this.defines.has("CUSTOM_INPUT_DOMAIN")){const r=i.domainMax.clone().sub(i.domainMin).multiplyScalar(e);t.setScalar(e-1).divide(r),n.copy(i.domainMin).negate().multiply(t).addScalar(1/(2*e))}else t.setScalar((e-1)/e),n.setScalar(1/(2*e))}}configureTetrahedralInterpolation(){const i=this.lut;i!==null&&(i.minFilter=Ke,i.magFilter=Ke,this.tetrahedralInterpolation&&(i instanceof dr?(i.minFilter=be,i.magFilter=be):console.warn("Tetrahedral interpolation requires a 3D texture")),i.source===void 0&&(i.needsUpdate=!0))}get tetrahedralInterpolation(){return this.defines.has("TETRAHEDRAL_INTERPOLATION")}set tetrahedralInterpolation(i){i?this.defines.set("TETRAHEDRAL_INTERPOLATION","1"):this.defines.delete("TETRAHEDRAL_INTERPOLATION"),this.configureTetrahedralInterpolation(),this.updateScaleOffset(),this.setChanged()}setTetrahedralInterpolationEnabled(i){this.tetrahedralInterpolation=i}},Z_=`#include <tonemapping_pars_fragment>
#if THREE_REVISION < 143
#define luminance(v) linearToRelativeLuminance(v)
#endif
uniform float whitePoint;
#if TONE_MAPPING_MODE == 1 || TONE_MAPPING_MODE == 2
uniform float middleGrey;
#if TONE_MAPPING_MODE == 2
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 2
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 3
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 1 || TONE_MAPPING_MODE == 2
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 3
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,$_=class extends qn{constructor({blendFunction:i=Be.SRC,adaptive:e=!1,mode:t=e?Wt.REINHARD2_ADAPTIVE:Wt.AGX,resolution:n=256,maxLuminance:r=4,whitePoint:s=r,middleGrey:a=.6,minLuminance:o=.01,averageLuminance:l=1,adaptationRate:c=1}={}){super("ToneMappingEffect",Z_,{blendFunction:i,uniforms:new Map([["luminanceBuffer",new J(null)],["maxLuminance",new J(r)],["whitePoint",new J(s)],["middleGrey",new J(a)],["averageLuminance",new J(l)]])}),this.renderTargetLuminance=new tt(1,1,{minFilter:Cn,depthBuffer:!1}),this.renderTargetLuminance.texture.generateMipmaps=!0,this.renderTargetLuminance.texture.name="Luminance",this.luminancePass=new lu({renderTarget:this.renderTargetLuminance}),this.adaptiveLuminancePass=new Jv(this.luminancePass.texture,{minLuminance:o,adaptationRate:c}),this.uniforms.get("luminanceBuffer").value=this.adaptiveLuminancePass.texture,this.resolution=n,this.mode=t}get mode(){return Number(this.defines.get("TONE_MAPPING_MODE"))}set mode(i){if(this.mode!==i){switch(this.defines.clear(),this.defines.set("TONE_MAPPING_MODE",i.toFixed(0)),i=Iv(i),i){case Wt.REINHARD:this.defines.set("toneMapping(texel)","ReinhardToneMapping(texel)");break;case Wt.OPTIMIZED_CINEON:this.defines.set("toneMapping(texel)","OptimizedCineonToneMapping(texel)");break;case Wt.ACES_FILMIC:this.defines.set("toneMapping(texel)","ACESFilmicToneMapping(texel)");break;case Wt.AGX:this.defines.set("toneMapping(texel)","AgXToneMapping(texel)");break;default:this.defines.set("toneMapping(texel)","texel");break}this.adaptiveLuminancePass.enabled=i===Wt.REINHARD2_ADAPTIVE,this.setChanged()}}getMode(){return this.mode}setMode(i){this.mode=i}get whitePoint(){return this.uniforms.get("whitePoint").value}set whitePoint(i){this.uniforms.get("whitePoint").value=i}get middleGrey(){return this.uniforms.get("middleGrey").value}set middleGrey(i){this.uniforms.get("middleGrey").value=i}get averageLuminance(){return this.uniforms.get("averageLuminance").value}set averageLuminance(i){this.uniforms.get("averageLuminance").value=i}get adaptiveLuminanceMaterial(){return this.adaptiveLuminancePass.fullscreenMaterial}getAdaptiveLuminanceMaterial(){return this.adaptiveLuminanceMaterial}get resolution(){return this.luminancePass.resolution.width}set resolution(i){const e=Math.max(0,Math.ceil(Math.log2(i))),t=Math.pow(2,e);this.luminancePass.resolution.setPreferredSize(t,t),this.adaptiveLuminanceMaterial.mipLevel1x1=e}getResolution(){return this.resolution}setResolution(i){this.resolution=i}get adaptive(){return this.mode===Wt.REINHARD2_ADAPTIVE}set adaptive(i){this.mode=i?Wt.REINHARD2_ADAPTIVE:Wt.REINHARD2}get adaptationRate(){return this.adaptiveLuminanceMaterial.adaptationRate}set adaptationRate(i){this.adaptiveLuminanceMaterial.adaptationRate=i}get distinction(){return console.warn(this.name,"distinction was removed."),1}set distinction(i){console.warn(this.name,"distinction was removed.")}update(i,e,t){this.adaptiveLuminancePass.enabled&&(this.luminancePass.render(i,e),this.adaptiveLuminancePass.render(i,null,null,t))}initialize(i,e,t){this.adaptiveLuminancePass.initialize(i,e,t)}},J_=`uniform float offset;uniform float darkness;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){const vec2 center=vec2(0.5);vec3 color=inputColor.rgb;
#if VIGNETTE_TECHNIQUE == 0
float d=distance(uv,center);color*=smoothstep(0.8,offset*0.799,d*(darkness+offset));
#else
vec2 coord=(uv-center)*vec2(offset);color=mix(color,vec3(1.0-darkness),dot(coord,coord));
#endif
outputColor=vec4(color,inputColor.a);}`,Q_=class extends qn{constructor({blendFunction:i,technique:e=$r.DEFAULT,eskil:t=!1,offset:n=.5,darkness:r=.5}={}){super("VignetteEffect",J_,{blendFunction:i,defines:new Map([["VIGNETTE_TECHNIQUE",e.toFixed(0)]]),uniforms:new Map([["offset",new J(n)],["darkness",new J(r)]])})}get technique(){return Number(this.defines.get("VIGNETTE_TECHNIQUE"))}set technique(i){this.technique!==i&&(this.defines.set("VIGNETTE_TECHNIQUE",i.toFixed(0)),this.setChanged())}get eskil(){return this.technique===$r.ESKIL}set eskil(i){this.technique=i?$r.ESKIL:$r.DEFAULT}getTechnique(){return this.technique}setTechnique(i){this.technique=i}get offset(){return this.uniforms.get("offset").value}set offset(i){this.uniforms.get("offset").value=i}getOffset(){return this.offset}setOffset(i){this.offset=i}get darkness(){return this.uniforms.get("darkness").value}set darkness(i){this.uniforms.get("darkness").value=i}getDarkness(){return this.darkness}setDarkness(i){this.darkness=i}},ex=class extends Dn{load(i,e=()=>{},t=()=>{},n=null){const r=this.manager,s=new $c,a=new Wi(s);return a.setPath(this.path),a.setResponseType("text"),new Promise((o,l)=>{s.onError=c=>{r.itemError(c),n!==null?(n(`Failed to load ${c}`),o()):l(`Failed to load ${c}`)},r.itemStart(i),a.load(i,c=>{try{const u=this.parse(c);r.itemEnd(i),e(u),o(u)}catch(u){console.error(u),s.onError(i)}},t)})}parse(i){const e=/^[\d ]+$/m,t=/^([\d.e+-]+) +([\d.e+-]+) +([\d.e+-]+) *$/gm;let n=e.exec(i);if(n===null)throw new Error("Missing grid information");const r=n[0].trim().split(/\s+/g).map(p=>Number(p)),s=r[1]-r[0],a=r.length,o=a**2;for(let p=1,g=r.length;p<g;++p)if(s!==r[p]-r[p-1])throw new Error("Inconsistent grid size");const l=new Float32Array(a**3*4);let c=0,u=0;for(;(n=t.exec(i))!==null;){const p=Number(n[1]),g=Number(n[2]),v=Number(n[3]);c=Math.max(c,p,g,v);const m=u%a,d=Math.floor(u/a)%a,S=Math.floor(u/o)%a,_=(m*o+d*a+S)*4;l[_+0]=p,l[_+1]=g,l[_+2]=v,l[_+3]=1,++u}const h=Math.ceil(Math.log2(c)),f=Math.pow(2,h);for(let p=0,g=l.length;p<g;p+=4)l[p+0]/=f,l[p+1]/=f,l[p+2]/=f;return new uu(l,a)}};const wa=1.324717957244746,tx=1/wa,nx=1/(wa*wa),jl=1.1127756842787055,ix=i=>{const e=[];for(let t=0;t<i;t++)e.push([(jl+tx*t)%1,(jl+nx*t)%1]);return e},ql=ix(256).map(([i,e])=>[i-.5,e-.5]);function rx(i,e,t,n,r=1){const[s,a]=ql[n%ql.length];t.setViewOffset&&t.setViewOffset(i,e,s*r,a*r,i,e)}var $i=`varying vec2 vUv;

void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
}`,sx=`varying vec2 vUv;

uniform highp sampler2D inputTexture;
uniform highp sampler2D velocityTexture;

uniform highp sampler2D depthTexture;
uniform highp sampler2D lastVelocityTexture;

uniform float maxBlend;
uniform float neighborhoodClampIntensity;
uniform bool fullAccumulate;
uniform vec2 invTexSize;
uniform float cameraNear;
uniform float cameraFar;

uniform mat4 projectionMatrix;
uniform mat4 projectionMatrixInverse;
uniform mat4 cameraMatrixWorld;
uniform vec3 cameraPos;
uniform vec3 prevCameraPos;
uniform mat4 prevViewMatrix;
uniform mat4 prevCameraMatrixWorld;
uniform mat4 prevProjectionMatrix;
uniform mat4 prevProjectionMatrixInverse;

uniform float keepData;

#define EPSILON 0.00001

#define DIFFUSE_SPECULAR 0
#define DIFFUSE 1
#define SPECULAR 2

#include <gbuffer_packing>
#include <packing>
#include <reproject>

vec3 reprojectedUvDiffuse = vec3(-1.0), reprojectedUvSpecular = vec3(-1.0);

void accumulate(inout vec4 outputColor, inout vec4 inp, inout vec4 acc, inout float roughness, inout float moveFactor, bool doReprojectSpecular) {
  vec3 reprojectedUvConfidence = doReprojectSpecular ? reprojectedUvSpecular : reprojectedUvDiffuse;

  vec2 reprojectedUv = reprojectedUvConfidence.xy;
  float confidence = reprojectedUvConfidence.z;
  confidence = pow(confidence, confidencePower);

  float accumBlend = 1. - 1. / (acc.a + 1.0);
  accumBlend = mix(0., accumBlend, confidence);

  float maxValue = (fullAccumulate ? 1. : maxBlend) * keepData; 
  

#if inputType != DIFFUSE
  const float roughnessMaximum = 0.1;

  if (doReprojectSpecular && roughness >= 0.0 && roughness < roughnessMaximum) {
    float maxRoughnessValue = mix(0., maxValue, roughness / roughnessMaximum);
    maxValue = mix(maxValue, maxRoughnessValue, min(100. * moveFactor, 1.));
  }
#endif

  float temporalReprojectMix = min(accumBlend, maxValue);

  
  acc.a = 1. / (1. - temporalReprojectMix) - 1.;
  acc.a = min(65536., acc.a);
  

  outputColor.rgb = mix(inp.rgb, acc.rgb, temporalReprojectMix);
  outputColor.a = acc.a;
  undoColorTransform(outputColor.rgb);

  
  
  
  
}

void reproject(inout vec4 inp, inout vec4 acc, sampler2D accumulatedTexture, inout bool wasSampled, bool doNeighborhoodClamp,
               bool doReprojectSpecular) {
  
  vec3 uvc = doReprojectSpecular ? reprojectedUvSpecular : reprojectedUvDiffuse;
  vec2 uv = uvc.xy;

  
  acc = sampleReprojectedTexture(accumulatedTexture, uv);
  transformColor(acc.rgb);

  
  if (!wasSampled) {
    inp.rgb = acc.rgb;
    return;
  }

  
  acc.a++;

  
  vec3 clampedColor = acc.rgb;

  int clampRadius = doReprojectSpecular && roughness < 0.25 ? 1 : 2;
  clampNeighborhood(inputTexture, clampedColor, inp.rgb, clampRadius, doReprojectSpecular);
  float r = doReprojectSpecular ? roughness : 1.0;

  float clampAggressiveness = min(1., uvc.z * r);

  float clampIntensity = mix(0., min(1., moveFactor * 50. + neighborhoodClampIntensity), clampAggressiveness);

  vec3 newColor = mix(acc.rgb, clampedColor, clampIntensity);

  
  float colorDiff = min(length(newColor - acc.rgb), 1.);
  

  acc.a *= 1. - colorDiff;

  acc.rgb = newColor;
}

void preprocessInput(inout highp vec4 texel, inout bool sampledThisFrame) {
  sampledThisFrame = texel.r >= 0.;
  texel.rgb = max(texel.rgb, vec3(0.));
  transformColor(texel.rgb);
}

void getTexels(inout highp vec4 inputTexel[textureCount], inout bool sampledThisFrame[textureCount]) {
#if inputType == DIFFUSE_SPECULAR
  
  
  
  
  highp vec4 tex = textureLod(inputTexture, vUv, 0.);
  unpackTwoVec4(tex, inputTexel[0], inputTexel[1]);

  preprocessInput(inputTexel[0], sampledThisFrame[0]);
  preprocessInput(inputTexel[1], sampledThisFrame[1]);
#else
  inputTexel[0] = textureLod(inputTexture, vUv, 0.0);
  preprocessInput(inputTexel[0], sampledThisFrame[0]);
#endif
}

void computeGVariables(vec2 dilatedUv, float depth) {
  worldPos = screenSpaceToWorldSpace(dilatedUv, depth, cameraMatrixWorld, projectionMatrixInverse);
  vec3 viewPos = (viewMatrix * vec4(worldPos, 1.0)).xyz;
  viewDir = normalize(viewPos);
  vec3 viewNormal = (vec4(worldNormal, 0.0) * viewMatrix).xyz;
  viewAngle = dot(-viewDir, viewNormal);
}

void computeReprojectedUv(float depth, vec3 worldPos, vec3 worldNormal) {
  reprojectedUvDiffuse = getReprojectedUV(false, depth, worldPos, worldNormal);

#if inputType == DIFFUSE_SPECULAR || inputType == SPECULAR
  reprojectedUvSpecular = getReprojectedUV(true, depth, worldPos, worldNormal);

  if (reprojectedUvSpecular.x == -1.0) {
    reprojectedUvSpecular = reprojectedUvDiffuse;
  }
#endif
}

void getRoughnessRayLength(inout highp vec4 inputTexel[textureCount]) {
#if inputType == DIFFUSE_SPECULAR
  rayLength = inputTexel[1].a;
  roughness = clamp(inputTexel[0].a, 0., 1.);
#elif inputType == SPECULAR
  vec2 data = unpackHalf2x16(floatBitsToUint(inputTexel[0].a));
  rayLength = data.r;
  roughness = clamp(data.g, 0., 1.);
#endif
}

void main() {
  vec2 dilatedUv = vUv;
  getVelocityNormalDepth(dilatedUv, velocity, worldNormal, depth);

  highp vec4 inputTexel[textureCount], accumulatedTexel[textureCount];
  bool textureSampledThisFrame[textureCount];

  getTexels(inputTexel, textureSampledThisFrame);

#if inputType != DIFFUSE
  if (depth == 1.0 && fwidth(depth) == 0.0) {
    discard;
    return;
  }
#endif

  curvature = getCurvature(worldNormal);

  computeGVariables(dilatedUv, depth);
  getRoughnessRayLength(inputTexel);
  computeReprojectedUv(depth, worldPos, worldNormal);

  moveFactor = min(dot(velocity, velocity) * 10000., 1.);

#pragma unroll_loop_start
  for (int i = 0; i < textureCount; i++) {
    reproject(inputTexel[i], accumulatedTexel[i], accumulatedTexture[i], textureSampledThisFrame[i], neighborhoodClamp[i], reprojectSpecular[i]);
    accumulate(gOutput[i], inputTexel[i], accumulatedTexel[i], roughness, moveFactor, reprojectSpecular[i]);
  }
#pragma unroll_loop_end
}`,ax=`vec2 dilatedUv, velocity;
vec3 worldNormal, worldPos, viewDir;
float depth, curvature, viewAngle, rayLength, angleMix;
float roughness = 1.;
float moveFactor = 0.;

#define luminance(a) dot(vec3(0.2125, 0.7154, 0.0721), a)

float getViewZ(const in float depth) {
#ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
#else
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
#endif
}

vec3 screenSpaceToWorldSpace(const vec2 uv, const float depth, mat4 curMatrixWorld, const mat4 projMatrixInverse) {
  vec4 ndc = vec4((uv.x - 0.5) * 2.0, (uv.y - 0.5) * 2.0, (depth - 0.5) * 2.0, 1.0);

  vec4 clip = projMatrixInverse * ndc;
  vec4 view = curMatrixWorld * (clip / clip.w);

  return view.xyz;
}

vec2 viewSpaceToScreenSpace(const vec3 position, const mat4 projMatrix) {
  vec4 projectedCoord = projMatrix * vec4(position, 1.0);
  projectedCoord.xy /= projectedCoord.w;
  
  projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;

  return projectedCoord.xy;
}

#ifdef logTransform

void transformColor(inout vec3 color) { color = log(color + 1.); }
void undoColorTransform(inout vec3 color) { color = exp(color) - 1.; }
#else
#define transformColor
#define undoColorTransform
#endif

void getNeighborhoodAABB(const sampler2D tex, const int clampRadius, inout vec3 minNeighborColor, inout vec3 maxNeighborColor,
                         const bool isSpecular) {

  
  for (int x = -clampRadius; x <= clampRadius; x++) {
    for (int y = -clampRadius; y <= clampRadius; y++) {
      
      vec2 offset = vec2(x, y) * invTexSize;
      
      vec2 neighborUv = vUv + offset;

      
#if inputType == DIFFUSE_SPECULAR
      vec4 t1, t2;
      vec4 packedNeighborTexel = textureLod(inputTexture, neighborUv, 0.0);
      unpackTwoVec4(packedNeighborTexel, t1, t2);
      vec4 neighborTexel = isSpecular ? t2 : t1;
#else
      vec4 neighborTexel = textureLod(inputTexture, neighborUv, 0.0);
#endif

      if (neighborTexel.r >= 0.) {
        
        minNeighborColor = min(neighborTexel.rgb, minNeighborColor);
        maxNeighborColor = max(neighborTexel.rgb, maxNeighborColor);
      }
    }
  }
}

void clampNeighborhood(const sampler2D tex, inout vec3 color, vec3 inputColor, const int clampRadius, const bool isSpecular) {
  undoColorTransform(inputColor);
  vec3 minNeighborColor = inputColor;
  vec3 maxNeighborColor = inputColor;

  
  getNeighborhoodAABB(tex, clampRadius, minNeighborColor, maxNeighborColor, isSpecular);

  transformColor(minNeighborColor);
  transformColor(maxNeighborColor);

  color = clamp(color, minNeighborColor, maxNeighborColor);
}

void getVelocityNormalDepth(inout vec2 dilatedUv, out vec2 vel, out vec3 normal, out float depth) {
  vec2 centerUv = dilatedUv;

  vec4 velocityTexel = textureLod(velocityTexture, centerUv, 0.0);

  vel = velocityTexel.rg;
  normal = unpackNormal(velocityTexel.b);
  depth = velocityTexel.a;
}

#define PLANE_DISTANCE 20.
#define WORLD_DISTANCE 10.
#define NORMAL_DISTANCE 1.

float planeDistanceDisocclusionCheck(const vec3 worldPos, const vec3 lastWorldPos, const vec3 worldNormal, const float distFactor) {
  
  vec3 toCurrent = worldPos - lastWorldPos;
  float distToPlane = abs(dot(toCurrent, worldNormal));

  
  return distToPlane / PLANE_DISTANCE * distFactor;
}

float worldDistanceDisocclusionCheck(const vec3 worldPos, const vec3 lastWorldPos, const float distFactor) {
  
  return length(worldPos - lastWorldPos) / WORLD_DISTANCE * distFactor;
}

float normalDisocclusionCheck(const vec3 worldNormal, const vec3 lastWorldNormal, const float distFactor) {
  
  return min(1. - dot(worldNormal, lastWorldNormal), 1.) / NORMAL_DISTANCE * distFactor;
}

float validateReprojectedUV(const vec2 reprojectedUv, const vec3 worldPos, const vec3 worldNormal, const bool isHitPoint) {
  if (reprojectedUv.x > 1.0 || reprojectedUv.x < 0.0 || reprojectedUv.y > 1.0 || reprojectedUv.y < 0.0)
    return 0.;

  vec2 dilatedReprojectedUv = reprojectedUv;
  vec2 lastVelocity = vec2(0.0);
  vec3 lastWorldNormal = vec3(0.0);
  float lastDepth = 0.0;

  getVelocityNormalDepth(dilatedReprojectedUv, lastVelocity, lastWorldNormal, lastDepth);
  vec3 lastWorldPos = screenSpaceToWorldSpace(dilatedReprojectedUv, lastDepth, prevCameraMatrixWorld, prevProjectionMatrixInverse);

  vec3 lastViewPos = (prevViewMatrix * vec4(lastWorldPos, 1.0)).xyz;

  vec3 lastViewDir = normalize(lastViewPos);
  vec3 lastViewNormal = (vec4(lastWorldNormal, 0.0) * prevViewMatrix).xyz;

  
  float lastViewAngle = dot(-lastViewDir, lastViewNormal);
  angleMix = abs(lastViewAngle - viewAngle);

  float viewZ = abs(getViewZ(depth));
  float distFactor = 1. + 1. / (viewZ + 1.0);

  float disoccl = 0.;

  disoccl += worldDistanceDisocclusionCheck(worldPos, lastWorldPos, distFactor);
  disoccl += planeDistanceDisocclusionCheck(worldPos, lastWorldPos, worldNormal, distFactor);
  disoccl += normalDisocclusionCheck(worldNormal, lastWorldNormal, distFactor);

  float confidence = 1. - min(disoccl, 1.);
  
  confidence = max(confidence, 0.);

  confidence = pow(confidence, confidencePower);

  return confidence;
}

vec2 reprojectHitPoint(const vec3 rayOrig, const float rayLength) {
  if (curvature > 0.05 || rayLength < 0.01) {
    return vec2(-1.);
  }

  

  
  vec3 cameraRay = normalize(rayOrig - cameraPos);

  
  vec3 parallaxHitPoint = cameraPos + cameraRay * rayLength;

  
  vec4 reprojectedHitPoint = prevProjectionMatrix * prevViewMatrix * vec4(parallaxHitPoint, 1.0);

  
  reprojectedHitPoint.xyz /= reprojectedHitPoint.w;
  reprojectedHitPoint.xy = reprojectedHitPoint.xy * 0.5 + 0.5;

  vec2 diffuseUv = vUv - velocity.xy;
  float m = min(max(0., roughness - 0.25) / 0.25, 1.);

  return reprojectedHitPoint.xy;
}

vec3 getReprojectedUV(const bool doReprojectSpecular, const float depth, const vec3 worldPos, const vec3 worldNormal) {
  if (doReprojectSpecular) {
    
    vec2 reprojectedUv = reprojectHitPoint(worldPos, rayLength);

    float confidence = validateReprojectedUV(reprojectedUv, worldPos, worldNormal, true);
    return vec3(reprojectedUv, confidence);
  } else {
    
    vec2 reprojectedUv = vUv - velocity;

    float confidence = validateReprojectedUV(reprojectedUv, worldPos, worldNormal, false);
    return vec3(reprojectedUv, confidence);
  }
}

vec4 BiCubicCatmullRom5Tap(sampler2D tex, vec2 P) {
  vec2 Weight[3];
  vec2 Sample[3];

  vec2 UV = P / invTexSize;
  vec2 tc = floor(UV - 0.5) + 0.5;
  vec2 f = UV - tc;
  vec2 f2 = f * f;
  vec2 f3 = f2 * f;

  vec2 w0 = f2 - 0.5 * (f3 + f);
  vec2 w1 = 1.5 * f3 - 2.5 * f2 + vec2(1.);
  vec2 w3 = 0.5 * (f3 - f2);
  vec2 w2 = vec2(1.) - w0 - w1 - w3;

  Weight[0] = w0;
  Weight[1] = w1 + w2;
  Weight[2] = w3;

  Sample[0] = tc - vec2(1.);
  Sample[1] = tc + w2 / Weight[1];
  Sample[2] = tc + vec2(2.);

  Sample[0] *= invTexSize;
  Sample[1] *= invTexSize;
  Sample[2] *= invTexSize;

  float sampleWeight[5];
  sampleWeight[0] = Weight[1].x * Weight[0].y;
  sampleWeight[1] = Weight[0].x * Weight[1].y;
  sampleWeight[2] = Weight[1].x * Weight[1].y;
  sampleWeight[3] = Weight[2].x * Weight[1].y;
  sampleWeight[4] = Weight[1].x * Weight[2].y;

  vec4 Ct = textureLod(tex, vec2(Sample[1].x, Sample[0].y), 0.) * sampleWeight[0];
  vec4 Cl = textureLod(tex, vec2(Sample[0].x, Sample[1].y), 0.) * sampleWeight[1];
  vec4 Cc = textureLod(tex, vec2(Sample[1].x, Sample[1].y), 0.) * sampleWeight[2];
  vec4 Cr = textureLod(tex, vec2(Sample[2].x, Sample[1].y), 0.) * sampleWeight[3];
  vec4 Cb = textureLod(tex, vec2(Sample[1].x, Sample[2].y), 0.) * sampleWeight[4];

  float WeightMultiplier = 1. / (sampleWeight[0] + sampleWeight[1] + sampleWeight[2] + sampleWeight[3] + sampleWeight[4]);

  return max((Ct + Cl + Cc + Cr + Cb) * WeightMultiplier, vec4(0.));
}

vec4 sampleReprojectedTexture(const sampler2D tex, const vec2 reprojectedUv) {
  
  
  vec4 catmull = BiCubicCatmullRom5Tap(tex, reprojectedUv);
  
  return catmull;
}

float getCurvature(vec3 n) {
  float curvature = length(fwidth(n));

  return curvature;
}`,Ji=`uniform highp sampler2D gBufferTexture;

struct Material {
  highp vec4 diffuse;
  highp vec3 normal;
  highp float roughness;
  highp float metalness;
  highp vec3 emissive;
};

#define ONE_SAFE 0.999999
#define NON_ZERO_OFFSET 0.0001

const highp float c_precision = 256.0;
const highp float c_precisionp1 = c_precision + 1.0;

highp float color2float(in highp vec3 color) {
  color = min(color + NON_ZERO_OFFSET, vec3(ONE_SAFE));

  return floor(color.r * c_precision + 0.5) + floor(color.b * c_precision + 0.5) * c_precisionp1 +
         floor(color.g * c_precision + 0.5) * c_precisionp1 * c_precisionp1;
}

highp vec3 float2color(in highp float value) {
  highp vec3 color;
  color.r = mod(value, c_precisionp1) / c_precision;
  color.b = mod(floor(value / c_precisionp1), c_precisionp1) / c_precision;
  color.g = floor(value / (c_precisionp1 * c_precisionp1)) / c_precision;

  color -= NON_ZERO_OFFSET;
  color = max(color, vec3(0.0));

  return color;
}

highp vec2 OctWrap(highp vec2 v) {
  highp vec2 w = 1.0 - abs(v.yx);
  if (v.x < 0.0)
    w.x = -w.x;
  if (v.y < 0.0)
    w.y = -w.y;
  return w;
}

highp vec2 encodeOctWrap(highp vec3 n) {
  n /= (abs(n.x) + abs(n.y) + abs(n.z));
  n.xy = n.z > 0.0 ? n.xy : OctWrap(n.xy);
  n.xy = n.xy * 0.5 + 0.5;
  return n.xy;
}

highp vec3 decodeOctWrap(highp vec2 f) {
  f = f * 2.0 - 1.0;
  highp vec3 n = vec3(f.x, f.y, 1.0 - abs(f.x) - abs(f.y));
  highp float t = max(-n.z, 0.0);
  n.x += n.x >= 0.0 ? -t : t;
  n.y += n.y >= 0.0 ? -t : t;
  return normalize(n);
}

highp float packNormal(highp vec3 normal) { return uintBitsToFloat(packHalf2x16(encodeOctWrap(normal))); }

highp vec3 unpackNormal(highp float packedNormal) { return decodeOctWrap(unpackHalf2x16(floatBitsToUint(packedNormal))); }

highp vec4 packTwoVec4(highp vec4 v1, highp vec4 v2) {
  
  highp vec4 encoded = vec4(0.0);

  v1 += NON_ZERO_OFFSET;
  v2 += NON_ZERO_OFFSET;

  highp uint v1r = packHalf2x16(v1.rg);
  highp uint v1g = packHalf2x16(v1.ba);
  highp uint v2r = packHalf2x16(v2.rg);
  highp uint v2g = packHalf2x16(v2.ba);

  encoded.r = uintBitsToFloat(v1r);
  encoded.g = uintBitsToFloat(v1g);
  encoded.b = uintBitsToFloat(v2r);
  encoded.a = uintBitsToFloat(v2g);

  return encoded;
}

void unpackTwoVec4(highp vec4 encoded, out highp vec4 v1, out highp vec4 v2) {
  highp uint r = floatBitsToUint(encoded.r);
  highp uint g = floatBitsToUint(encoded.g);
  highp uint b = floatBitsToUint(encoded.b);
  highp uint a = floatBitsToUint(encoded.a);

  v1.rg = unpackHalf2x16(r);
  v1.ba = unpackHalf2x16(g);
  v2.rg = unpackHalf2x16(b);
  v2.ba = unpackHalf2x16(a);

  v1 -= NON_ZERO_OFFSET;
  v2 -= NON_ZERO_OFFSET;
}

vec4 unpackTwoVec4(highp vec4 encoded, const int index) {
  highp uint r = floatBitsToUint(index == 0 ? encoded.r : encoded.b);
  highp uint g = floatBitsToUint(index == 0 ? encoded.g : encoded.a);

  vec4 v;

  v.rg = unpackHalf2x16(r);
  v.ba = unpackHalf2x16(g);

  v -= NON_ZERO_OFFSET;

  return v;
}

highp vec4 encodeRGBE8(highp vec3 rgb) {
  highp vec4 vEncoded;
  highp float maxComponent = max(max(rgb.r, rgb.g), rgb.b);
  highp float fExp = ceil(log2(maxComponent));
  vEncoded.rgb = rgb / exp2(fExp);
  vEncoded.a = (fExp + 128.0) / 255.0;
  return vEncoded;
}

highp vec3 decodeRGBE8(highp vec4 rgbe) {
  highp vec3 vDecoded;
  highp float fExp = rgbe.a * 255.0 - 128.0;
  vDecoded = rgbe.rgb * exp2(fExp);
  return vDecoded;
}

highp float vec4ToFloat(highp vec4 vec) {
  vec = min(vec + NON_ZERO_OFFSET, vec4(ONE_SAFE));

  highp uvec4 v = uvec4(vec * 255.0);
  highp uint value = (v.a << 24u) | (v.b << 16u) | (v.g << 8u) | (v.r);
  return uintBitsToFloat(value);
}

highp vec4 floatToVec4(highp float f) {
  highp uint value = floatBitsToUint(f);

  highp vec4 v;
  v.r = float(value & 0xFFu) / 255.0;
  v.g = float((value >> 8u) & 0xFFu) / 255.0;
  v.b = float((value >> 16u) & 0xFFu) / 255.0;
  v.a = float((value >> 24u) & 0xFFu) / 255.0;

  v -= NON_ZERO_OFFSET;
  v = max(v, vec4(0.0));

  return v;
}

highp vec4 packGBuffer(highp vec4 diffuse, highp vec3 normal, highp float roughness, highp float metalness, highp vec3 emissive) {
  highp vec4 gBuffer;

  gBuffer.r = vec4ToFloat(diffuse);
  gBuffer.g = packNormal(normal);

  
  
  gBuffer.b = color2float(vec3(roughness, metalness, 0.));
  gBuffer.a = vec4ToFloat(encodeRGBE8(emissive));

  return gBuffer;
}

Material getMaterial(highp sampler2D gBufferTexture, highp vec2 uv) {
  highp vec4 gBuffer = textureLod(gBufferTexture, uv, 0.0);

  highp vec4 diffuse = floatToVec4(gBuffer.r);
  highp vec3 normal = unpackNormal(gBuffer.g);

  
  
  highp vec3 roughnessMetalness = float2color(gBuffer.b);
  highp float roughness = roughnessMetalness.r;
  highp float metalness = roughnessMetalness.g;

  highp vec3 emissive = decodeRGBE8(floatToVec4(gBuffer.a));

  return Material(diffuse, normal, roughness, metalness, emissive);
}

Material getMaterial(highp vec2 uv) { return getMaterial(gBufferTexture, uv); }

highp vec3 getNormal(highp sampler2D gBufferTexture, highp vec2 uv) { return unpackNormal(textureLod(gBufferTexture, uv, 0.0).g); }`;const ox=i=>{const{width:e,height:t}=i.image;return Math.floor(Math.log2(Math.max(e,t)))+1},lx=()=>{if(Ee.envmap_physical_pars_fragment.includes("iblRadianceDisabled")||(Ee.envmap_physical_pars_fragment=Ee.envmap_physical_pars_fragment.replace("vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {",`
		uniform bool iblRadianceDisabled;
	
		vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		 if(iblRadianceDisabled) return vec3(0.);
		`)),"iblRadianceDisabled"in Xt.physical.uniforms)return Xt.physical.uniforms.iblRadianceDisabled;const i={value:!1};Xt.physical.uniforms.iblRadianceDisabled=i;const{clone:e}=ls;return ls.clone=t=>{const n=e(t);return"iblRadianceDisabled"in t&&(n.iblRadianceDisabled=i),n},i},cx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hu(i){return i.replace(cx,ux)}function ux(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}class hx extends at{constructor(e=1){let t=sx.replace("#include <reproject>",ax).replace("#include <gbuffer_packing>",Ji),n="";for(let a=0;a<e;a++)n+=`
				uniform sampler2D accumulatedTexture${a};

				layout(location = ${a}) out vec4 gOutput${a};
			`;t=n+t.replaceAll("textureCount",e),t=hu(t);const r=t.matchAll(/accumulatedTexture\[\s*[0-9]+\s*]/g);for(const[a]of r){const o=a.replace(/[^0-9]/g,"");t=t.replace(a,"accumulatedTexture"+o)}const s=t.matchAll(/gOutput\[\s*[0-9]+\s*]/g);for(const[a]of s){const o=a.replace(/[^0-9]/g,"");t=t.replace(a,"gOutput"+o)}super({type:"TemporalReprojectMaterial",uniforms:{inputTexture:new J(null),velocityTexture:new J(null),depthTexture:new J(null),lastVelocityTexture:new J(null),neighborhoodClampIntensity:new J(0),fullAccumulate:new J(!1),keepData:new J(1),delta:new J(0),invTexSize:new J(new me),projectionMatrix:new J(new _e),projectionMatrixInverse:new J(new _e),cameraMatrixWorld:new J(new _e),viewMatrix:new J(new _e),prevViewMatrix:new J(new _e),prevCameraMatrixWorld:new J(new _e),prevProjectionMatrix:new J(new _e),prevProjectionMatrixInverse:new J(new _e),cameraPos:new J(new C),prevCameraPos:new J(new C),cameraNear:new J(0),cameraFar:new J(0),maxBlend:new J(0)},vertexShader:$i,fragmentShader:t,blending:ft,depthWrite:!1,depthTest:!1,toneMapped:!1,glslVersion:ss});for(let a=0;a<e;a++)this.uniforms["inputTexture"+a]=new J(null),this.uniforms["accumulatedTexture"+a]=new J(null)}}const fx=i=>i.material.fragmentShader?.includes("float intersection2 = diskIntersectWithBackFaceCulling( camPos, p, h, vec3( 0.0, 1.0, 0.0 ), radius );"),qa=(i,e=i.material)=>e.visible&&e.depthWrite&&e.depthTest&&(!e.transparent||e.opacity>0)&&!fx(i),fu=(i,e,t)=>i.position.distanceToSquared(e)>1e-6||i.quaternion.angleTo(t)>.001,du=i=>{const e=[i],t=[];for(;e.length!==0;){const n=e.shift();n.material&&t.push(n);for(const r of n.children)r.visible&&e.push(r)}return t},vr={dilation:!1,fullAccumulate:!1,neighborhoodClamp:!1,neighborhoodClampRadius:1,neighborhoodClampIntensity:1,maxBlend:1,logTransform:!1,depthDistance:2,worldDistance:4,reprojectSpecular:!1,renderTarget:null,copyTextures:!0,confidencePower:.75,inputType:"diffuse"},Yl=new _e,Kl=new _e,dx=new me;class pu extends mt{needsSwap=!1;overrideAccumulatedTextures=[];clock=new tu;r2Sequence=[];frame=0;lastCameraTransform={position:new C,quaternion:new Jt};constructor(e,t,n,r,s,a=vr){super("TemporalReprojectPass"),this._scene=e,this._camera=t,this.textureCount=s,a={...vr,...a},this.renderTarget=new Sa(1,1,s,{minFilter:be,magFilter:be,type:r.type,depthBuffer:!1}),this.renderTarget.texture.forEach((o,l)=>o.name="TemporalReprojectPass.accumulatedTexture"+l),this.fullscreenMaterial=new hx(s),this.fullscreenMaterial.defines.textureCount=s,a.dilation&&(this.fullscreenMaterial.defines.dilation=""),a.neighborhoodClamp&&(this.fullscreenMaterial.defines.neighborhoodClamp=""),a.logTransform&&(this.fullscreenMaterial.defines.logTransform=""),t.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA=""),this.fullscreenMaterial.defines.neighborhoodClampRadius=parseInt(a.neighborhoodClampRadius),this.fullscreenMaterial.defines.depthDistance=a.depthDistance.toPrecision(5),this.fullscreenMaterial.defines.worldDistance=a.worldDistance.toPrecision(5),this.fullscreenMaterial.uniforms.fullAccumulate.value=a.fullAccumulate,this.fullscreenMaterial.uniforms.neighborhoodClampIntensity.value=a.neighborhoodClampIntensity,this.fullscreenMaterial.uniforms.maxBlend.value=a.maxBlend,this.fullscreenMaterial.uniforms.projectionMatrix.value=t.projectionMatrix.clone(),this.fullscreenMaterial.uniforms.projectionMatrixInverse.value=t.projectionMatrixInverse.clone(),this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=t.matrixWorld,this.fullscreenMaterial.uniforms.viewMatrix.value=t.matrixWorldInverse,this.fullscreenMaterial.uniforms.cameraPos.value=t.position,this.fullscreenMaterial.uniforms.prevViewMatrix.value=t.matrixWorldInverse.clone(),this.fullscreenMaterial.uniforms.prevCameraMatrixWorld.value=t.matrixWorld.clone(),this.fullscreenMaterial.uniforms.prevProjectionMatrix.value=t.projectionMatrix.clone(),this.fullscreenMaterial.uniforms.prevProjectionMatrixInverse.value=t.projectionMatrixInverse.clone(),this.fullscreenMaterial.uniforms.velocityTexture.value=n.renderTarget.texture,this.fullscreenMaterial.uniforms.depthTexture.value=n.depthTexture,this.fullscreenMaterial.defines.inputType=["diffuseSpecular","diffuse","specular"].indexOf(a.inputType)??1;for(const o of["reprojectSpecular","neighborhoodClamp"]){let l=a[o];typeof l!="array"&&(l=Array(s).fill(l)),this.fullscreenMaterial.defines[o]=`bool[](${l.join(", ")})`}this.fullscreenMaterial.defines.confidencePower=a.confidencePower.toPrecision(5),this.options=a,this.velocityDepthNormalPass=n,this.fullscreenMaterial.uniforms.inputTexture.value=r}dispose(){super.dispose(),this.renderTarget.dispose(),this.fullscreenMaterial.dispose()}setSize(e,t){this.renderTarget.setSize(e,t),this.fullscreenMaterial.uniforms.invTexSize.value.set(1/e,1/t),this.framebufferTexture?.dispose();const n=this.fullscreenMaterial.uniforms.inputTexture.value;this.framebufferTexture=new qc(e,t,n.format),this.framebufferTexture.type=n.type,this.framebufferTexture.minFilter=Ke,this.framebufferTexture.magFilter=Ke,this.framebufferTexture.needsUpdate=!0;for(let r=0;r<this.textureCount;r++){const s=this.overrideAccumulatedTextures[r]??this.framebufferTexture;this.fullscreenMaterial.uniforms["accumulatedTexture"+r].value=s}}get texture(){return this.renderTarget.texture[0]}reset(){this.fullscreenMaterial.uniforms.keepData.value=0}render(e){this.frame=(this.frame+1)%4096;const t=Math.min(1/10,this.clock.getDelta());this.fullscreenMaterial.uniforms.delta.value=t,Yl.copy(this._camera.projectionMatrix),Kl.copy(this._camera.projectionMatrixInverse),this._camera.view&&(this._camera.view.enabled=!1),this._camera.updateProjectionMatrix(),this.fullscreenMaterial.uniforms.projectionMatrix.value.copy(this._camera.projectionMatrix),this.fullscreenMaterial.uniforms.projectionMatrixInverse.value.copy(this._camera.projectionMatrixInverse),this.fullscreenMaterial.uniforms.lastVelocityTexture.value=this.velocityDepthNormalPass.lastVelocityTexture,this.fullscreenMaterial.uniforms.fullAccumulate.value=this.options.fullAccumulate&&!fu(this._camera,this.lastCameraTransform.position,this.lastCameraTransform.quaternion),this.lastCameraTransform.position.copy(this._camera.position),this.lastCameraTransform.quaternion.copy(this._camera.quaternion),this._camera.view&&(this._camera.view.enabled=!0),this._camera.projectionMatrix.copy(Yl),this._camera.projectionMatrixInverse.copy(Kl),this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera),this.fullscreenMaterial.uniforms.keepData.value=1,this.overrideAccumulatedTextures.length===0&&(this.framebufferTexture.needsUpdate=!0,e.copyFramebufferToTexture(dx,this.framebufferTexture)),this.fullscreenMaterial.uniforms.prevCameraMatrixWorld.value.copy(this._camera.matrixWorld),this.fullscreenMaterial.uniforms.prevViewMatrix.value.copy(this._camera.matrixWorldInverse),this.fullscreenMaterial.uniforms.prevProjectionMatrix.value.copy(this.fullscreenMaterial.uniforms.projectionMatrix.value),this.fullscreenMaterial.uniforms.prevProjectionMatrixInverse.value.copy(this.fullscreenMaterial.uniforms.projectionMatrixInverse.value),this.fullscreenMaterial.uniforms.prevCameraPos.value.copy(this._camera.position)}jitter(e=1){this.unjitter(),rx(this.renderTarget.width,this.renderTarget.height,this._camera,this.frame,e)}unjitter(){this._camera.clearViewOffset&&this._camera.clearViewOffset()}}var px=`uniform sampler2D accumulatedTexture;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  vec4 accumulatedTexel = textureLod(accumulatedTexture, uv, 0.);

  outputColor = vec4(accumulatedTexel.rgb, 1.);
}`;class Ya extends qn{constructor(e,t,n,r=vr){super("TRAAEffect",px,{type:"FinalTRAAEffectMaterial",uniforms:new Map([["accumulatedTexture",new J(null)]])}),this._scene=e,this._camera=t,this.velocityDepthNormalPass=n,r={...r,maxBlend:.9,neighborhoodClamp:!0,neighborhoodClampIntensity:1,neighborhoodClampRadius:1,logTransform:!0,confidencePower:4},this.options={...vr,...r},this.setSize(r.width,r.height)}setSize(e,t){this.temporalReprojectPass?.setSize(e,t)}dispose(){super.dispose(),this.temporalReprojectPass.dispose()}reset(){this.temporalReprojectPass.reset()}update(e,t){this.temporalReprojectPass||(this.temporalReprojectPass=new pu(this._scene,this._camera,this.velocityDepthNormalPass,t.texture,1,this.options),this.temporalReprojectPass.setSize(t.width,t.height),this.uniforms.get("accumulatedTexture").value=this.temporalReprojectPass.texture),this.temporalReprojectPass.unjitter(),this.unjitteredProjectionMatrix=this._camera.projectionMatrix.clone(),this._camera.projectionMatrix.copy(this.unjitteredProjectionMatrix),this.temporalReprojectPass.jitter(),this.temporalReprojectPass.render(e)}}Ya.DefaultOptions=vr;class mx extends mt{constructor(){super("CubeToEquirectEnvPass"),this.renderTarget=new tt(1,1,{depthBuffer:!1,type:ke}),this.fullscreenMaterial=new at({fragmentShader:`
            varying vec2 vUv;
			uniform samplerCube cubeMap;

			#define M_PI 3.1415926535897932384626433832795
			
			// source: https://github.com/spite/CubemapToEquirectangular/blob/master/src/CubemapToEquirectangular.js
            void main() {
				float longitude = vUv.x * 2. * M_PI - M_PI + M_PI / 2.;
				float latitude = vUv.y * M_PI;

				vec3 dir = vec3(
					- sin( longitude ) * sin( latitude ),
					cos( latitude ),
					- cos( longitude ) * sin( latitude )
				);

				dir.y = -dir.y;

				gl_FragColor = textureCube( cubeMap, dir );
            }
            `,vertexShader:$i,uniforms:{cubeMap:{value:null}},blending:ft,depthWrite:!1,depthTest:!1,toneMapped:!1})}dispose(){this.renderTarget.dispose()}generateEquirectEnvMap(e,t,n=null,r=null,s=4096){if(n===null&&r===null){const c=t.source.data[0].width,u=2**Math.ceil(Math.log2(2*c*3**.5)),h=2**Math.ceil(Math.log2(c*3**.5));n=u,r=h}n>s&&(n=s,r=s/2),this.renderTarget.setSize(n,r),this.fullscreenMaterial.uniforms.cubeMap.value=t;const{renderTarget:a}=this;e.setRenderTarget(a),e.render(this.scene,this.camera);const o=new Float32Array(n*r*4);e.readRenderTargetPixels(a,0,0,n,r,o);const l=new jn(o,n,r,Mt,ke);return l.wrapS=xt,l.wrapT=xt,l.minFilter=ma,l.magFilter=ma,l.needsUpdate=!0,l.mapping=pr,l}}const gx="/assets/blue_noise_rgba-C5wnZieA.png";var vx=`uniform sampler2D blueNoiseTexture;
uniform vec2 blueNoiseSize;
uniform int blueNoiseIndex;

uvec4 s1;
ivec2 pixel;

void rng_initialize(vec2 p, int index) {
  pixel = ivec2(p);

  
  s1 = uvec4(index, index * 15843, index * 31 + 4566, index * 2345 + 58585);
}

void pcg4d(inout uvec4 v) {
  v = v * 1664525u + 1013904223u;
  v.x += v.y * v.w;
  v.y += v.z * v.x;
  v.z += v.x * v.y;
  v.w += v.y * v.z;
  v = v ^ (v >> 16u);
  v.x += v.y * v.w;
  v.y += v.z * v.x;
  v.z += v.x * v.y;
  v.w += v.y * v.z;
}

ivec2 shift2(ivec2 size) {
  pcg4d(s1);
  return (pixel + ivec2(s1.xy % 0x0fffffffu)) % size;
}

vec4 blueNoise(vec2 uv, int index) {
  if (index == 0)
    return textureLod(blueNoiseTexture, uv * resolution / blueNoiseSize, 0.0);

  rng_initialize(vUv * resolution, index);
  vec4 blueNoise = texelFetch(blueNoiseTexture, shift2(ivec2(blueNoiseSize)), 0);

  return blueNoise;
}

vec4 blueNoise() { return blueNoise(vUv, int(blueNoiseIndex)); }
vec4 blueNoise(vec2 uv) { return blueNoise(uv, int(blueNoiseIndex)); }`;const Zl=128,$l=2147483647,Ci=new Qc().load(gx,()=>{Ci.minFilter=be,Ci.magFilter=be,Ci.wrapS=fn,Ci.wrapT=fn,Ci.colorSpace=Xn}),mu=i=>{let e=0;const t=Math.floor(Math.random()*$l),n={blueNoiseTexture:{value:Ci},blueNoiseSize:{value:new me(Zl,Zl)},blueNoiseIndex:{get value(){return e=(t+e+1)%$l,e},set value(r){e=r}}};return i=i.replace("uniform vec2 resolution;",`uniform vec2 resolution;
`+vx),{uniforms:n,fragmentShader:i}},gu=i=>{const{fragmentShader:e,uniforms:t}=mu(i.fragmentShader);i.fragmentShader=e,i.uniforms={...i.uniforms,...t},i.needsUpdate=!0};class _x extends Ln{onBeforeCompile(e){this.uniforms=e.uniforms,e.uniforms.resolution={value:new me(1,1)},e.uniforms.cameraNotMovedFrames={value:0},e.vertexShader=e.vertexShader.replace(/#include <lights_.*>/g,""),e.fragmentShader=e.fragmentShader.replace(/#include <lights_.*>/g,""),e.vertexShader=e.vertexShader.replace(/#include <alpha.*>/g,""),e.fragmentShader=e.fragmentShader.replace(/#include <alpha.*>/g,""),e.vertexShader=e.vertexShader.replace(/#include <aomap.*>/g,""),e.fragmentShader=e.fragmentShader.replace(/#include <aomap.*>/g,""),e.vertexShader=e.vertexShader.replace(/#include <lightmap.*>/g,""),e.fragmentShader=e.fragmentShader.replace(/#include <lightmap.*>/g,""),e.vertexShader=e.vertexShader.replace(/#include <alphahash.*>/g,""),e.fragmentShader=e.fragmentShader.replace(/#include <alphahash.*>/g,""),e.vertexShader=e.vertexShader.replace(/#include <alphatest.*>/g,""),e.fragmentShader=e.fragmentShader.replace(/#include <alphatest.*>/g,""),e.fragmentShader=e.fragmentShader.replace("#include <opaque_fragment>",""),e.fragmentShader=e.fragmentShader.replace("#include <colorspace_fragment>",""),e.fragmentShader=e.fragmentShader.replace("#include <fog_fragment>",""),e.fragmentShader=e.fragmentShader.replace("void main() {",`
			#define vUv gl_FragCoord.xy
            uniform vec2 resolution;
            uniform float cameraNotMovedFrames;

            ${Ji}

            void main() {
					float a = opacity;

					#ifdef USE_ALPHAMAP
						a *= texture2D( alphaMap, vAlphaMapUv ).g;
					#endif

					if (cameraNotMovedFrames == 0.) {
						if(a < 0.5) {
							discard;
							return;
						}

						a = 1.;
					} else if (a != 1.) {
						float aStep = a > 0.5 ? 1. : 0.;
						a = mix(a, aStep, (1. / (cameraNotMovedFrames * 0.1 + 1.)));

						vec4 noise = blueNoise();
						if (noise.x > a) {
							discard;
							return;
						}
					}
        `).replace("#include <dithering_fragment>",`
            #include <dithering_fragment>

            vec3 worldNormal = normalize((vec4(normal, 1.) * viewMatrix).xyz);

            vec4 gBuffer = packGBuffer(diffuseColor, worldNormal, roughnessFactor, metalnessFactor, totalEmissiveRadiance);

            gl_FragColor = gBuffer;`);const{uniforms:t,fragmentShader:n}=mu(e.fragmentShader);e.uniforms={...e.uniforms,...t},e.fragmentShader=n}}const cs=new _x;function xx(i){const e=cs.clone();return Mx(i,e),e}let us=Object.keys(cs);us=us.filter(i=>!i.startsWith("_")&&!i.startsWith("is")&&i!=="uuid"&&i!=="type"&&i!=="transparent");function Mx(i,e){for(const t of us)i[t]!==void 0&&(e[t]=i[t])}const Sx=us.filter(i=>typeof cs[i]=="string"||typeof cs[i]=="number");function Tx(i,e){for(const t of Sx)e[t]=i[t]}const yx=new xe(0);class vu extends mt{frame=21483;cachedMaterials=new WeakMap;visibleMeshes=[];lastCameraPosition=new C;lastCameraQuaternion=new Jt;constructor(e,t){super("GBufferPass"),this._scene=e,this._camera=t,this.initGBufferRenderTarget()}get texture(){return this.renderTarget.texture}get depthTexture(){return this.renderTarget.depthTexture}initGBufferRenderTarget(){this.renderTarget=new tt(1,1,{type:ke,minFilter:be,magFilter:be,depthBuffer:!0}),this.renderTarget.texture.name="GBufferPass.Texture",this.renderTarget.depthTexture=new vs(1,1),this.renderTarget.depthTexture.type=ke,this.renderTarget.depthTexture.name="GBufferPass.DepthTexture"}setSize(e,t){this.renderTarget.setSize(e,t)}dispose(){super.dispose(),this.renderTarget.dispose()}setGBufferMaterialInScene(){this.visibleMeshes=du(this._scene);const e=fu(this._camera,this.lastCameraPosition,this.lastCameraQuaternion);for(const t of this.visibleMeshes){const n=t.material;let[r,s]=this.cachedMaterials.get(t)||[];n!==r&&(s&&s.dispose(),s=xx(n),this.cachedMaterials.set(t,[n,s])),s.uniforms&&(s.uniforms.cameraNotMovedFrames.value=e?0:(s.uniforms.cameraNotMovedFrames.value+1)%65535),t.visible=qa(t,n),Tx(n,s),t.material=s}}unsetGBufferMaterialInScene(){for(const e of this.visibleMeshes){const[t]=this.cachedMaterials.get(e);e.material=t}}render(e){this.frame=(this.frame+1)%4096;const{background:t}=this._scene;this._scene.background=yx,this.setGBufferMaterialInScene(),e.setRenderTarget(this.renderTarget),e.render(this._scene,this._camera),this.unsetGBufferMaterialInScene(),this.lastCameraPosition.copy(this._camera.position),this.lastCameraQuaternion.copy(this._camera.quaternion),this._scene.background=t}}var Ex=`varying vec2 vUv;

uniform sampler2D accumulatedTexture;
uniform highp sampler2D depthTexture;
uniform highp sampler2D velocityTexture;
uniform sampler2D directLightTexture;
uniform vec3 backgroundColor;

uniform mat4 projectionMatrix;
uniform mat4 projectionMatrixInverse;
uniform mat4 cameraMatrixWorld;

uniform float maxEnvMapMipLevel;

uniform float rayDistance;
uniform float thickness;
uniform float envBlur;

uniform vec2 resolution;

uniform float cameraNear;
uniform float cameraFar;
uniform float nearMinusFar;
uniform float nearMulFar;
uniform float farMinusNear;

struct EquirectHdrInfo {
  sampler2D marginalWeights;
  sampler2D conditionalWeights;
  sampler2D map;
  vec2 size;
  float totalSumWhole;
  float totalSumDecimal;
};

uniform EquirectHdrInfo envMapInfo;

#define INVALID_RAY_COORDS vec2(-1.0);
#define EPSILON 0.00001
#define ONE_MINUS_EPSILON 1.0 - EPSILON

vec2 invTexSize;

#define MODE_SSGI 0
#define MODE_SSR 1

#include <packing>

#include <gbuffer_packing>
#include <ssgi_utils>

vec2 RayMarch(inout vec3 dir, inout vec3 hitPos, vec4 random);
vec2 BinarySearch(inout vec3 dir, inout vec3 hitPos);

struct RayTracingInfo {
  float NoV;            
  float NoL;            
  float NoH;            
  float LoH;            
  float VoH;            
  bool isDiffuseSample; 
  bool isEnvSample;     
                        
};

struct RayTracingResult {
  vec3 gi;          
  vec3 l;           
  vec3 hitPos;      
  bool isMissedRay; 
  vec3 brdf;        
  float pdf;        
};

struct EnvMisSample {
  float pdf;
  float probability;
  bool isEnvSample;
};

vec3 worldNormal;

vec3 doSample(const vec3 viewPos, const vec3 viewDir, const vec3 viewNormal, const vec3 worldPos, const float metalness, const float roughness,
              const bool isDiffuseSample, const bool isEnvSample, const float NoV, const float NoL, const float NoH, const float LoH, const float VoH,
              const vec4 random, inout vec3 l, inout vec3 hitPos, out bool isMissedRay, out vec3 brdf, out float pdf);

void calculateAngles(inout vec3 h, inout vec3 l, inout vec3 v, inout vec3 n, inout float NoL, inout float NoH, inout float LoH, inout float VoH) {
  h = normalize(v + l); 

  NoL = clamp(dot(n, l), EPSILON, ONE_MINUS_EPSILON);
  NoH = clamp(dot(n, h), EPSILON, ONE_MINUS_EPSILON);
  LoH = clamp(dot(l, h), EPSILON, ONE_MINUS_EPSILON);
  VoH = clamp(dot(v, h), EPSILON, ONE_MINUS_EPSILON);
}

vec3 worldPos;
Material mat;

void main() {
  float unpackedDepth = textureLod(depthTexture, vUv, 0.0).r;

  
  if (unpackedDepth == 1.0) {
    vec4 directLight = textureLod(directLightTexture, vUv, 0.0);
    gl_FragColor = packTwoVec4(directLight, directLight);
    return;
  }

  mat = getMaterial(gBufferTexture, vUv);
  float roughnessSq = clamp(mat.roughness * mat.roughness, 0.000001, 1.0);

  invTexSize = 1. / resolution;

  
  float viewZ = getViewZ(unpackedDepth);

  
  vec3 viewPos = getViewPosition(viewZ);

  vec3 viewDir = normalize(viewPos);
  worldNormal = mat.normal;
  vec3 viewNormal = normalize((vec4(worldNormal, 0.) * cameraMatrixWorld).xyz);
  worldPos = (cameraMatrixWorld * vec4(viewPos, 1.)).xyz;

  vec3 n = viewNormal; 
  vec3 v = -viewDir;   
  float NoV = max(EPSILON, dot(n, v));

  
  vec3 V = (vec4(v, 0.) * viewMatrix).xyz;
  vec3 N = worldNormal;

  vec4 random;
  vec3 H, l, h, F, T, B, envMisDir, gi;
  vec3 diffuseGI, specularGI, brdf, hitPos, specularHitPos;

  Onb(N, T, B);

  V = ToLocal(T, B, N, V);

  
  vec3 f0 = mix(vec3(0.04), mat.diffuse.rgb, mat.metalness);

  float NoL, NoH, LoH, VoH, diffW, specW, invW, pdf, envPdf, diffuseSamples, specularSamples;
  bool isDiffuseSample, isEnvSample, isMissedRay;

  random = blueNoise();
  
  
  H = SampleGGXVNDF(V, roughnessSq, roughnessSq, random.r, random.g);
  if (H.z < 0.0)
    H = -H;

  l = normalize(reflect(-V, H));
  l = ToWorld(T, B, N, l);

  
  l = (vec4(l, 0.) * cameraMatrixWorld).xyz;
  l = normalize(l);

  calculateAngles(h, l, v, n, NoL, NoH, LoH, VoH);

#if mode == MODE_SSGI
  
  F = F_Schlick(f0, VoH);

  
  diffW = (1. - mat.metalness) * luminance(mat.diffuse.rgb);
  specW = luminance(F);

  diffW = max(diffW, EPSILON);
  specW = max(specW, EPSILON);

  invW = 1. / (diffW + specW);

  
  diffW *= invW;

  
  isDiffuseSample = random.b < diffW;
#else
  isDiffuseSample = false;
#endif

  EnvMisSample ems;
  ems.pdf = 1.;

  envMisDir = vec3(0.0);
  envPdf = 1.;

#ifdef importanceSampling
  ems.pdf = sampleEquirectProbability(envMapInfo, random.rg, envMisDir);
  envMisDir = normalize((vec4(envMisDir, 0.) * cameraMatrixWorld).xyz);

  ems.probability = dot(envMisDir, viewNormal);
  ems.probability *= mat.roughness;
  ems.probability = min(ONE_MINUS_EPSILON, ems.probability);

  ems.isEnvSample = random.a < ems.probability;

  if (ems.isEnvSample) {
    ems.pdf /= 1. - ems.probability;

    l = envMisDir;
    calculateAngles(h, l, v, n, NoL, NoH, LoH, VoH);
  } else {
    ems.pdf = 1. - ems.probability;
  }
#endif

  vec3 diffuseRay = ems.isEnvSample ? envMisDir : cosineSampleHemisphere(viewNormal, random.rg);
  vec3 specularRay = ems.isEnvSample ? envMisDir : l;

#if mode == MODE_SSGI
  if (isDiffuseSample) {
    l = diffuseRay;

    calculateAngles(h, l, v, n, NoL, NoH, LoH, VoH);

    gi = doSample(viewPos, viewDir, viewNormal, worldPos, mat.metalness, roughnessSq, isDiffuseSample, ems.isEnvSample, NoV, NoL, NoH, LoH, VoH,
                  random, l, hitPos, isMissedRay, brdf, pdf);

    gi *= brdf;

    if (ems.isEnvSample) {
      gi *= misHeuristic(ems.pdf, pdf);
    } else {
      gi /= pdf;
    }
    gi /= ems.pdf;

    diffuseSamples++;

    diffuseGI = mix(diffuseGI, gi, 1. / diffuseSamples);
  }
#endif

  
  l = specularRay;
  calculateAngles(h, l, v, n, NoL, NoH, LoH, VoH);

  gi = doSample(viewPos, viewDir, viewNormal, worldPos, mat.metalness, roughnessSq, isDiffuseSample, ems.isEnvSample, NoV, NoL, NoH, LoH, VoH, random,
                l, hitPos, isMissedRay, brdf, pdf);

  gi *= brdf;

  if (ems.isEnvSample) {
    gi *= misHeuristic(ems.pdf, pdf);
  } else {
    gi /= pdf;
  }
  gi /= ems.pdf;

  specularHitPos = hitPos;

  specularSamples++;

  specularGI = mix(specularGI, gi, 1. / specularSamples);

#ifdef useDirectLight
  vec3 directLight = textureLod(directLightTexture, vUv, 0.).rgb;

  diffuseGI += directLight;
  specularGI += directLight;
#endif

  highp vec4 gDiffuse, gSpecular;

#if mode == MODE_SSGI
  if (diffuseSamples == 0.0)
    diffuseGI = vec3(-1.0);
  gDiffuse = vec4(diffuseGI, mat.roughness);
#endif

  
  
  highp float rayLength = 0.0;
  vec4 hitPosWS;
  vec3 cameraPosWS = cameraMatrixWorld[3].xyz;

  isMissedRay = hitPos.x > 10.0e8;

  if (!isMissedRay) {
    
    hitPosWS = cameraMatrixWorld * vec4(specularHitPos, 1.0);

    
    rayLength = distance(cameraPosWS, hitPosWS.xyz);
  }

  
  highp uint packedRoughnessRayLength = packHalf2x16(vec2(rayLength, mat.roughness));
  highp float a = uintBitsToFloat(packedRoughnessRayLength);

#if mode == MODE_SSGI
  gSpecular = vec4(specularGI, rayLength);
  gl_FragColor = packTwoVec4(gDiffuse, gSpecular);
#else
  gSpecular = vec4(specularGI, a);
  gl_FragColor = gSpecular;
#endif
}

vec3 getEnvColor(vec3 l, vec3 worldPos, float roughness, bool isDiffuseSample, bool isEnvSample) {
  vec3 envMapSample;
#ifdef USE_ENVMAP
  
  vec3 reflectedWS = normalize((vec4(l, 0.) * viewMatrix).xyz);

#ifdef BOX_PROJECTED_ENV_MAP
  reflectedWS = parallaxCorrectNormal(reflectedWS.xyz, envMapSize, envMapPosition, worldPos);
  reflectedWS = normalize(reflectedWS.xyz);
#endif

  float mip = envBlur * maxEnvMapMipLevel;

  if (!isDiffuseSample && roughness < 0.15)
    mip *= roughness / 0.15;

  envMapSample = sampleEquirectEnvMapColor(reflectedWS, envMapInfo.map, mip);

  float maxEnvLum = isEnvSample ? 100.0 : 25.0;

  if (maxEnvLum != 0.0) {
    
    
    float envLum = luminance(envMapSample);

    if (envLum > maxEnvLum) {
      envMapSample *= maxEnvLum / envLum;
    }
  }

  return envMapSample;
#else
  
  return vec3(0.0);
#endif
}

float getSaturation(vec3 c) {
  float maxComponent = max(max(c.r, c.g), c.b);
  float minComponent = min(min(c.r, c.g), c.b);

  float delta = maxComponent - minComponent;

  
  if (maxComponent == minComponent) {
    return 0.0;
  } else {
    return delta / maxComponent;
  }
}

vec3 doSample(const vec3 viewPos, const vec3 viewDir, const vec3 viewNormal, const vec3 worldPos, const float metalness, const float roughness,
              const bool isDiffuseSample, const bool isEnvSample, const float NoV, const float NoL, const float NoH, const float LoH, const float VoH,
              const vec4 random, inout vec3 l, inout vec3 hitPos, out bool isMissedRay, out vec3 brdf, out float pdf) {
  float cosTheta = max(0.0, dot(viewNormal, l));

  if (isDiffuseSample) {
    vec3 diffuseBrdf = evalDisneyDiffuse(NoL, NoV, LoH, roughness, metalness);
    pdf = NoL / M_PI;

    brdf = diffuseBrdf;
  } else {
    vec3 specularBrdf = evalDisneySpecular(roughness, NoH, NoV, NoL);
    pdf = GGXVNDFPdf(NoH, NoV, roughness);

    brdf = specularBrdf;
  }

  brdf *= cosTheta;
  pdf = max(EPSILON, pdf);

  hitPos = viewPos;

  vec2 coords = RayMarch(l, hitPos, random);

  bool allowMissedRays = false;
#ifdef missedRays
  allowMissedRays = true;
#endif

  isMissedRay = hitPos.x == 10.0e9;

  vec3 envMapSample = vec3(0.);

  
  if (isMissedRay && !allowMissedRays)
    return getEnvColor(l, worldPos, roughness, isDiffuseSample, isEnvSample);

  
  vec4 velocity = textureLod(velocityTexture, coords.xy, 0.0);

  vec2 reprojectedUv = coords.xy - velocity.xy;

  vec3 SSGI;
  vec3 envColor = getEnvColor(l, worldPos, roughness, isDiffuseSample, isEnvSample);

  
  if (reprojectedUv.x >= 0.0 && reprojectedUv.x <= 1.0 && reprojectedUv.y >= 0.0 && reprojectedUv.y <= 1.0) {
    vec4 reprojectedGI = textureLod(accumulatedTexture, reprojectedUv, 0.);

    float saturation = getSaturation(mat.diffuse.rgb);

    
    reprojectedGI.rgb = mix(reprojectedGI.rgb, vec3(luminance(reprojectedGI.rgb)), (1. - roughness) * saturation * 0.4);

    SSGI = reprojectedGI.rgb;

    float aspect = resolution.x / resolution.y;

    float border = 0.15;
    float borderFactor = smoothstep(0.0, border, coords.x) * smoothstep(1.0, 1.0 - border, coords.x) * smoothstep(0.0, border, coords.y) *
                         smoothstep(1.0, 1.0 - border, coords.y);

    borderFactor = sqrt(borderFactor);
    SSGI = mix(envColor, SSGI, borderFactor);
  } else {
    return envColor;
  }

  if (allowMissedRays) {
    float ssgiLum = luminance(SSGI);
    float envLum = luminance(envMapSample);

    if (envLum > ssgiLum)
      SSGI = envMapSample;
  }

  return SSGI;
}

vec2 RayMarch(inout vec3 dir, inout vec3 hitPos, vec4 random) {
  float rayHitDepthDifference;

  
  

  dir *= rayDistance / float(steps);

  vec2 uv;

  for (int i = 1; i < steps; i++) {
    
    float cs = 1. - exp(-0.25 * pow(float(i) + random.b - 0.5, 2.));
    hitPos += dir * cs;

    uv = viewSpaceToScreenSpace(hitPos);

    float unpackedDepth = textureLod(depthTexture, uv, 0.0).r;
    float z = getViewZ(unpackedDepth);

    rayHitDepthDifference = z - hitPos.z;

    if (rayHitDepthDifference >= 0.0 && rayHitDepthDifference < thickness) {
      if (refineSteps == 0) {
        return uv;
      } else {
        return BinarySearch(dir, hitPos);
      }
    }
  }

  hitPos.xyz = vec3(10.0e9);

  return uv;
}

vec2 BinarySearch(inout vec3 dir, inout vec3 hitPos) {
  float rayHitDepthDifference;
  vec2 uv;

  dir *= 0.5;
  hitPos -= dir;

  for (int i = 0; i < refineSteps; i++) {
    uv = viewSpaceToScreenSpace(hitPos);

    float unpackedDepth = textureLod(depthTexture, uv, 0.0).r;
    float z = getViewZ(unpackedDepth);

    rayHitDepthDifference = z - hitPos.z;

    dir *= 0.5;
    if (rayHitDepthDifference >= 0.0) {
      hitPos -= dir;
    } else {
      hitPos += dir;
    }
  }

  uv = viewSpaceToScreenSpace(hitPos);

  return uv;
}`,bx=`#define PI M_PI

#define luminance(a) dot(vec3(0.2125, 0.7154, 0.0721), a)

float getViewZ(const in float depth) {
#ifdef PERSPECTIVE_CAMERA
  return nearMulFar / (farMinusNear * depth - cameraFar);
#else
  return depth * nearMinusFar - cameraNear;
#endif
}

vec3 getViewPosition(float viewZ) {
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  vec4 clipPosition = vec4((vec3(vUv, viewZ) - 0.5) * 2.0, 1.0);
  clipPosition *= clipW;
  vec3 p = (projectionMatrixInverse * clipPosition).xyz;
  p.z = viewZ;
  return p;
}

vec2 viewSpaceToScreenSpace(const vec3 position) {
  vec4 projectedCoord = projectionMatrix * vec4(position, 1.0);
  projectedCoord.xy /= projectedCoord.w;
  
  projectedCoord.xy = projectedCoord.xy * 0.5 + 0.5;

  return projectedCoord.xy;
}

vec3 worldSpaceToViewSpace(vec3 worldPosition) {
  vec4 viewPosition = viewMatrix * vec4(worldPosition, 1.0);
  return viewPosition.xyz / viewPosition.w;
}

#ifdef BOX_PROJECTED_ENV_MAP
uniform vec3 envMapSize;
uniform vec3 envMapPosition;

vec3 parallaxCorrectNormal(const vec3 v, const vec3 cubeSize, const vec3 cubePos, const vec3 worldPosition) {
  vec3 nDir = normalize(v);
  vec3 rbmax = (.5 * cubeSize + cubePos - worldPosition) / nDir;
  vec3 rbmin = (-.5 * cubeSize + cubePos - worldPosition) / nDir;
  vec3 rbminmax;
  rbminmax.x = (nDir.x > 0.) ? rbmax.x : rbmin.x;
  rbminmax.y = (nDir.y > 0.) ? rbmax.y : rbmin.y;
  rbminmax.z = (nDir.z > 0.) ? rbmax.z : rbmin.z;
  float correction = min(min(rbminmax.x, rbminmax.y), rbminmax.z);
  vec3 boxIntersection = worldPosition + nDir * correction;

  return boxIntersection - cubePos;
}
#endif

#define M_PI 3.1415926535897932384626433832795

vec2 equirectDirectionToUv(const vec3 direction) {
  
  vec2 uv = vec2(atan(direction.z, direction.x), acos(direction.y));
  uv /= vec2(2.0 * M_PI, M_PI);
  

  uv.x += 0.5;
  uv.y = 1.0 - uv.y;

  return uv;
}

vec3 equirectUvToDirection(vec2 uv) {
  
  uv.x -= 0.5;
  uv.y = 1.0 - uv.y;
  
  float theta = uv.x * 2.0 * PI;
  float phi = uv.y * PI;
  float sinPhi = sin(phi);
  return vec3(sinPhi * cos(theta), cos(phi), sinPhi * sin(theta));
}

vec3 sampleEquirectEnvMapColor(const vec3 direction, const sampler2D map, const float lod) {
  return textureLod(map, equirectDirectionToUv(direction), lod).rgb;
}

mat3 getBasisFromNormal(const vec3 normal) {
  vec3 other;
  if (abs(normal.x) > 0.5) {
    other = vec3(0.0, 1.0, 0.0);
  } else {
    other = vec3(1.0, 0.0, 0.0);
  }
  vec3 ortho = normalize(cross(normal, other));
  vec3 ortho2 = normalize(cross(normal, ortho));
  return mat3(ortho2, ortho, normal);
}

vec3 F_Schlick(const vec3 f0, const float theta) { return f0 + (1. - f0) * pow(1.0 - theta, 5.); }

float F_Schlick(const float f0, const float f90, const float theta) { return f0 + (f90 - f0) * pow(1.0 - theta, 5.0); }

float D_GTR(const float roughness, const float NoH, const float k) {
  float a2 = pow(roughness, 2.);
  return a2 / (PI * pow((NoH * NoH) * (a2 * a2 - 1.) + 1., k));
}

float SmithG(const float NDotV, const float alphaG) {
  float a = alphaG * alphaG;
  float b = NDotV * NDotV;
  return (2.0 * NDotV) / (NDotV + sqrt(a + b - a * b));
}

float GGXVNDFPdf(const float NoH, const float NoV, const float roughness) {
  float D = D_GTR(roughness, NoH, 2.);
  float G1 = SmithG(NoV, roughness * roughness);
  return (D * G1) / max(0.00001, 4.0 * NoV);
}

float GeometryTerm(const float NoL, const float NoV, const float roughness) {
  float a2 = roughness * roughness;
  float G1 = SmithG(NoV, a2);
  float G2 = SmithG(NoL, a2);
  return G1 * G2;
}

vec3 evalDisneyDiffuse(const float NoL, const float NoV, const float LoH, const float roughness, const float metalness) {
  float FD90 = 0.5 + 2. * roughness * pow(LoH, 2.);
  float a = F_Schlick(1., FD90, NoL);
  float b = F_Schlick(1., FD90, NoV);

  return vec3((a * b / PI) * (1. - metalness));
}

vec3 evalDisneySpecular(const float roughness, const float NoH, const float NoV, const float NoL) {
  float D = D_GTR(roughness, NoH, 2.);
  float G = GeometryTerm(NoL, NoV, pow(0.5 + roughness * .5, 2.));

  vec3 spec = vec3(D * G / (4. * NoL * NoV));

  return spec;
}

vec3 SampleGGXVNDF(const vec3 V, const float ax, const float ay, const float r1, const float r2) {
  vec3 Vh = normalize(vec3(ax * V.x, ay * V.y, V.z));

  float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
  vec3 T1 = lensq > 0. ? vec3(-Vh.y, Vh.x, 0.) * inversesqrt(lensq) : vec3(1., 0., 0.);
  vec3 T2 = cross(Vh, T1);

  float r = sqrt(r1);
  float phi = 2.0 * PI * r2;
  float t1 = r * cos(phi);
  float t2 = r * sin(phi);
  float s = 0.5 * (1.0 + Vh.z);
  t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

  vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

  return normalize(vec3(ax * Nh.x, ay * Nh.y, max(0.0, Nh.z)));
}

void Onb(const vec3 N, inout vec3 T, inout vec3 B) {
  vec3 up = abs(N.z) < 0.9999999 ? vec3(0, 0, 1) : vec3(1, 0, 0);
  T = normalize(cross(up, N));
  B = cross(N, T);
}

vec3 ToLocal(const vec3 X, const vec3 Y, const vec3 Z, const vec3 V) { return vec3(dot(V, X), dot(V, Y), dot(V, Z)); }

vec3 ToWorld(const vec3 X, const vec3 Y, const vec3 Z, const vec3 V) { return V.x * X + V.y * Y + V.z * Z; }

vec3 cosineSampleHemisphere(const vec3 n, const vec2 u) {
  float r = sqrt(u.x);
  float theta = 2.0 * PI * u.y;

  vec3 b = normalize(cross(n, vec3(0.0, 1.0, 1.0)));
  vec3 t = cross(b, n);

  return normalize(r * sin(theta) * b + sqrt(1.0 - u.x) * n + r * cos(theta) * t);
}

float equirectDirectionPdf(vec3 direction) {
  vec2 uv = equirectDirectionToUv(direction);
  float theta = uv.y * PI;
  float sinTheta = sin(theta);
  if (sinTheta == 0.0) {
    return 0.0;
  }

  return 1.0 / (2.0 * PI * PI * sinTheta);
}

float sampleEquirectProbability(EquirectHdrInfo info, vec2 blueNoise, out vec3 direction) {
  
  float v = textureLod(info.marginalWeights, vec2(blueNoise.x, 0.0), 0.).x;
  float u = textureLod(info.conditionalWeights, vec2(blueNoise.y, v), 0.).x;
  vec2 uv = vec2(u, v);

  vec3 derivedDirection = equirectUvToDirection(uv);
  direction = derivedDirection;
  vec3 color = texture(info.map, uv).rgb;

  float totalSum = info.totalSumWhole + info.totalSumDecimal;
  float lum = luminance(color);
  float pdf = lum / totalSum;

  return info.size.x * info.size.y * pdf;
}

float misHeuristic(float a, float b) {
  float aa = a * a;
  float bb = b * b;
  return aa / (aa + bb);
}

vec3 alignToNormal(const vec3 normal, const vec3 direction) {
  vec3 tangent;
  vec3 bitangent;
  Onb(normal, tangent, bitangent);

  vec3 localDir = ToLocal(tangent, bitangent, normal, direction);
  vec3 localDirAligned = vec3(localDir.x, localDir.y, abs(localDir.z));
  vec3 alignedDir = ToWorld(tangent, bitangent, normal, localDirAligned);

  return alignedDir;
}

float getFlatness(vec3 g, vec3 rp) {
  vec3 gw = fwidth(g);
  vec3 pw = fwidth(rp);

  float wfcurvature = length(gw) / length(pw);
  wfcurvature = smoothstep(0.0, 30., wfcurvature);

  return clamp(wfcurvature, 0., 1.);
}`;const wx=({data:{width:i,height:e,isFloatType:t,flipY:n,data:r}})=>{const s=a();function a(){const g=new ArrayBuffer(4),v=new Float32Array(g),m=new Uint32Array(g),d=new Uint32Array(512),S=new Uint32Array(512);for(let w=0;w<256;++w){const b=w-127;b<-27?(d[w]=0,d[w|256]=32768,S[w]=24,S[w|256]=24):b<-14?(d[w]=1024>>-b-14,d[w|256]=1024>>-b-14|32768,S[w]=-b-1,S[w|256]=-b-1):b<=15?(d[w]=b+15<<10,d[w|256]=b+15<<10|32768,S[w]=13,S[w|256]=13):b<128?(d[w]=31744,d[w|256]=64512,S[w]=24,S[w|256]=24):(d[w]=31744,d[w|256]=64512,S[w]=13,S[w|256]=13)}const _=new Uint32Array(2048),T=new Uint32Array(64),R=new Uint32Array(64);for(let w=1;w<1024;++w){let b=w<<13,D=0;for(;!(b&8388608);)b<<=1,D-=8388608;b&=-8388609,D+=947912704,_[w]=b|D}for(let w=1024;w<2048;++w)_[w]=939524096+(w-1024<<13);for(let w=1;w<31;++w)T[w]=w<<23;T[31]=1199570944,T[32]=2147483648;for(let w=33;w<63;++w)T[w]=2147483648+(w-32<<23);T[63]=3347054592;for(let w=1;w<64;++w)w!==32&&(R[w]=1024);return{floatView:v,uint32View:m,baseTable:d,shiftTable:S,mantissaTable:_,exponentTable:T,offsetTable:R}}function o(g){const v=g>>10;return s.uint32View[0]=s.mantissaTable[s.offsetTable[v]+(g&1023)]+s.exponentTable[v],s.floatView[0]}function l(g,v,m){return .2126*g+.7152*v+.0722*m}const c=(g,v,m=0,d=g.length)=>{let S=m,_=m+d-1;for(;S<_;){const T=S+_>>1;g[T]<v?S=T+1:_=T}return S-m},u=(g,v,m,d,S,_)=>{if(d)for(let y=0,k=m-1;y<=k;y++)for(let q=0,I=v*4;q<I;q+=4){const N=k-y,F=y*I+q,U=N*I+q;g[U]=g[F],g[U+1]=g[F+1],g[U+2]=g[F+2],g[U+3]=g[F+3]}const T=new Float32Array(v*m),R=new Float32Array(v*m),w=new Float32Array(m),b=new Float32Array(m);let D=0,x=0;for(let y=0;y<m;y++){let k=0;for(let q=0;q<v;q++){const I=y*v+q,N=g[4*I+0],F=g[4*I+1],U=g[4*I+2],B=l(N,F,U);k+=B,D+=B,T[I]=B,R[I]=k}if(k!==0)for(let q=y*v,I=y*v+v;q<I;q++)T[q]/=k,R[q]/=k;x+=k,w[y]=k,b[y]=x}if(x!==0)for(let y=0,k=w.length;y<k;y++)w[y]/=x,b[y]/=x;for(let y=0;y<m;y++){const k=(y+1)/m,q=c(b,k);S[y]=(q+.5)/m}for(let y=0;y<m;y++)for(let k=0;k<v;k++){const q=y*v+k,I=(k+1)/v,N=c(R,I,y*v,v);_[q]=(N+.5)/v}return D};if(!t){const g=new Float32Array(r.length);for(let v=0;v<r.length;v++)g[v]=o(r[v]);r=g}const h=new Float32Array(e),f=new Float32Array(i*e),p=u(r,i,e,n,h,f);postMessage({totalSumValue:p,marginalDataArray:h,conditionalDataArray:f})},Ax=new Blob(["onmessage = "+wx],{type:"application/javascript"}),Rx=URL.createObjectURL(Ax);class Px{constructor(){const e=new jn(new Float32Array([1,1,1,1]),1,1);e.type=ke,e.format=Mt,e.minFilter=be,e.magFilter=be,e.wrapS=fn,e.wrapT=fn,e.generateMipmaps=!1,e.needsUpdate=!0;const t=new jn(new Float32Array([0,1]),1,2);t.type=ke,t.format=ga,t.minFilter=be,t.magFilter=be,t.generateMipmaps=!1,t.needsUpdate=!0;const n=new jn(new Float32Array([0,0,1,1]),2,2);n.type=ke,n.format=ga,n.minFilter=be,n.magFilter=be,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=e,this.marginalWeights=t,this.conditionalWeights=n,this.totalSumWhole=1,this.totalSumDecimal=0,this.size=new me}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(e){e=e.clone();const{width:t,height:n,data:r}=e.image,{type:s}=e;return this.size.set(t,n),new Promise(a=>{this.worker?.terminate(),this.worker=new Worker(Rx),this.worker.postMessage({width:t,height:n,isFloatType:s===ke,flipY:e.flipY,data:r}),this.worker.onmessage=({data:{totalSumValue:o,marginalDataArray:l,conditionalDataArray:c}})=>{this.dispose();const{marginalWeights:u,conditionalWeights:h}=this;u.image={width:n,height:1,data:l},u.needsUpdate=!0,h.image={width:t,height:n,data:c},h.needsUpdate=!0;const f=~~o,p=o-f;this.totalSumWhole=f,this.totalSumDecimal=p,this.map=e,this.worker=null,a(e)}})}}class Cx extends at{constructor(){super({type:"SSGIMaterial",uniforms:{accumulatedTexture:new J(null),gBufferTexture:new J(null),depthTexture:new J(null),velocityTexture:new J(null),directLightTexture:new J(null),blueNoiseTexture:new J(null),projectionMatrix:new J(new _e),projectionMatrixInverse:new J(new _e),cameraMatrixWorld:new J(new _e),viewMatrix:new J(new _e),cameraNear:new J(0),cameraFar:new J(0),nearMulFar:new J(0),nearMinusFar:new J(0),farMinusNear:new J(0),rayDistance:new J(0),thickness:new J(0),frame:new J(0),envBlur:new J(0),maxEnvMapMipLevel:new J(0),envMapInfo:{value:new Px},envMapPosition:new J(new C),envMapSize:new J(new C),backgroundColor:new J(new xe),resolution:new J(new me),blueNoiseRepeat:new J(new me)},defines:{steps:20,refineSteps:5,CUBEUV_TEXEL_WIDTH:0,CUBEUV_TEXEL_HEIGHT:0,CUBEUV_MAX_MIP:0,vWorldPosition:"worldPos"},fragmentShader:Ex.replace("#include <ssgi_utils>",bx).replace("#include <gbuffer_packing>",Ji),vertexShader:$i,blending:ft,depthWrite:!1,depthTest:!1,toneMapped:!1}),gu(this)}}const Lx=new xe(0);class Dx extends mt{defaultFragmentShader="";frame=21483;constructor(e,t){super("SSGIPass"),this.ssgiEffect=e,this._scene=e._scene,this._camera=e._camera,this.fullscreenMaterial=new Cx,this.defaultFragmentShader=this.fullscreenMaterial.fragmentShader,this.renderTarget=new tt(1,1,{type:ke,minFilter:be,magFilter:be,depthBuffer:!1}),this.renderTarget.texture.name="SSGIPass.Texture",this.fullscreenMaterial.uniforms.cameraMatrixWorld.value=this._camera.matrixWorld,this.fullscreenMaterial.uniforms.viewMatrix.value=this._camera.matrixWorldInverse,this.fullscreenMaterial.uniforms.projectionMatrix.value=this._camera.projectionMatrix,this.fullscreenMaterial.uniforms.projectionMatrixInverse.value=this._camera.projectionMatrixInverse,e._camera.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA=""),this.fullscreenMaterial.defines.mode=["ssgi","ssr"].indexOf(t.mode),this.gBufferPass=new vu(this._scene,this._camera),this.fullscreenMaterial.uniforms.gBufferTexture.value=this.gBufferPass.texture,this.fullscreenMaterial.uniforms.depthTexture.value=this.gBufferPass.depthTexture}get texture(){return this.renderTarget.texture}setSize(e,t){this.renderTarget.setSize(e*this.ssgiEffect.resolutionScale,t*this.ssgiEffect.resolutionScale),this.gBufferPass.setSize(e,t),this.fullscreenMaterial.uniforms.resolution.value.set(this.renderTarget.width,this.renderTarget.height)}dispose(){super.dispose(),this.renderTarget.dispose(),this.renderTarget.dispose(),this.fullscreenMaterial.dispose()}render(e){this.frame=(this.frame+1)%4096;const{mask:t}=this._camera.layers,n=this.ssgiEffect.selection.size>0;this._camera.layers.set(n?this.ssgiEffect.selection.layer:0),this.gBufferPass.render(e),this._camera.layers.mask=t,this.fullscreenMaterial.uniforms.frame.value=this.frame,this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,this.fullscreenMaterial.uniforms.nearMinusFar.value=this._camera.near-this._camera.far,this.fullscreenMaterial.uniforms.farMinusNear.value=this._camera.far-this._camera.near,this.fullscreenMaterial.uniforms.nearMulFar.value=this._camera.near*this._camera.far,this.fullscreenMaterial.uniforms.accumulatedTexture.value=this.ssgiEffect.denoiser.texture,this.fullscreenMaterial.uniforms.velocityTexture.value=this.ssgiEffect.velocityTexture;const r=this._scene.background instanceof xe?this._scene.background:Lx;this.fullscreenMaterial.uniforms.backgroundColor.value.copy(r),e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}const Ix=`
		#ifdef USE_SKINNING
		#ifdef BONE_TEXTURE
			uniform sampler2D prevBoneTexture;
			mat4 getPrevBoneMatrix( const in float i ) {
				float j = i * 4.0;
				float x = mod( j, float( boneTextureSize ) );
				float y = floor( j / float( boneTextureSize ) );
				float dx = 1.0 / float( boneTextureSize );
				float dy = 1.0 / float( boneTextureSize );
				y = dy * ( y + 0.5 );
				vec4 v1 = textureLod( prevBoneTexture, vec2( dx * ( x + 0.5 ), y ), 0. );
				vec4 v2 = textureLod( prevBoneTexture, vec2( dx * ( x + 1.5 ), y ), 0. );
				vec4 v3 = textureLod( prevBoneTexture, vec2( dx * ( x + 2.5 ), y ), 0. );
				vec4 v4 = textureLod( prevBoneTexture, vec2( dx * ( x + 3.5 ), y ), 0. );
				mat4 bone = mat4( v1, v2, v3, v4 );
				return bone;
			}
		#else
			uniform mat4 prevBoneMatrices[ MAX_BONES ];
			mat4 getPrevBoneMatrix( const in float i ) {
				mat4 bone = prevBoneMatrices[ int(i) ];
				return bone;
			}
		#endif
		#endif
`,Ux=`
#define MAX_BONES 64
                    
${Ee.skinning_pars_vertex}
${Ix}

uniform mat4 velocityMatrix;
uniform mat4 prevVelocityMatrix;
varying vec4 prevPosition;
varying vec4 newPosition;

varying vec2 vHighPrecisionZW;
`,Nx=`
// Get the current vertex position
transformed = vec3( position );
${Ee.skinning_vertex}
newPosition = velocityMatrix * vec4( transformed, 1.0 );

// Get the previous vertex position
transformed = vec3( position );
${Ee.skinbase_vertex.replace(/mat4 /g,"").replace(/getBoneMatrix/g,"getPrevBoneMatrix")}
${Ee.skinning_vertex.replace(/vec4 /g,"")}
prevPosition = prevVelocityMatrix * vec4( transformed, 1.0 );

gl_Position = newPosition;

vHighPrecisionZW = gl_Position.zw;
`,Fx=`
varying vec4 prevPosition;
varying vec4 newPosition;

varying vec2 vHighPrecisionZW;
`,Ox=`
vec2 pos0 = (prevPosition.xy / prevPosition.w) * 0.5 + 0.5;
vec2 pos1 = (newPosition.xy / newPosition.w) * 0.5 + 0.5;

vec2 vel = pos1 - pos0;

float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;

gl_FragColor = vec4(vel.x, vel.y, 0., 0.);
`,Bx={prevVelocityMatrix:{value:new _e},velocityMatrix:{value:new _e},prevBoneTexture:{value:null},boneTexture:{value:null},normalMap:{value:null},normalScale:{value:new me(1,1)},uvTransform:{value:new Fe}};class zx extends at{constructor(e){super({uniforms:{...ls.clone(Bx),cameraMatrixWorld:{value:e.matrixWorld}},vertexShader:`
					#include <common>
					#include <uv_pars_vertex>
					#include <displacementmap_pars_vertex>
					#include <normal_pars_vertex>
					#include <morphtarget_pars_vertex>
					#include <logdepthbuf_pars_vertex>
					#include <clipping_planes_pars_vertex>

					varying vec2 vUv;

					varying vec3 vViewPosition;
					
                    ${Ux}
        
                    void main() {
						vec3 transformed;

						#include <uv_vertex>

						#include <skinbase_vertex>
						#include <beginnormal_vertex>
						#include <skinnormal_vertex>
						#include <defaultnormal_vertex>

						#include <morphnormal_vertex>
						#include <normal_vertex>
						#include <morphtarget_vertex>
						#include <displacementmap_vertex>
						#include <project_vertex>
						#include <logdepthbuf_vertex>
						#include <clipping_planes_vertex>

						${Nx}

						vViewPosition = - mvPosition.xyz;

						vUv = uv;

                    }`,fragmentShader:`
					precision highp float;
					uniform mat4 cameraMatrixWorld;

					varying vec3 vViewPosition;

					${Fx}
					#include <packing>

					#include <uv_pars_fragment>
					#include <normal_pars_fragment>
					#include <normalmap_pars_fragment>

					varying vec2 vUv;

					// source: https://knarkowicz.wordpress.com/2014/04/16/octahedron-normal-vector-encoding/
					vec2 OctWrap( vec2 v ) {
						vec2 w = 1.0 - abs( v.yx );
						if (v.x < 0.0) w.x = -w.x;
						if (v.y < 0.0) w.y = -w.y;
						return w;
					}

					vec2 encodeOctWrap(vec3 n) {
						n /= (abs(n.x) + abs(n.y) + abs(n.z));
						n.xy = n.z > 0.0 ? n.xy : OctWrap(n.xy);
						n.xy = n.xy * 0.5 + 0.5;
						return n.xy;
					}

					float packNormal(vec3 normal) {
						return uintBitsToFloat(packHalf2x16(encodeOctWrap(normal)));
					}

                    void main() {
						#define vNormalMapUv vUv

						#include <normal_fragment_begin>
                    	#include <normal_fragment_maps>

						${Ox}
						vec3 worldNormal = normalize((cameraMatrixWorld * vec4(normal, 0.)).xyz);
						gl_FragColor.b = packNormal(worldNormal);
						gl_FragColor.a = fragCoordZ;
                    }`})}}const Hx=["vertexTangent","vertexColors","vertexAlphas","vertexUvs","uvsVertexOnly","supportsVertexTextures","instancing","instancingColor","side","flatShading","skinning","doubleSided","flipSided"],Gx=(i,e)=>{for(const t of Hx)e[t]=i[t]},kx=(i,e,t,n,r)=>{e[t]!==i[t]&&(i[t]=e[t],i.uniforms[t].value=e[t],e[t]?i.defines[n]="":delete i.defines[n],i.needsUpdate=!0)},Vx=i=>{const e=[i],t=[];for(;e.length!==0;){const n=e.shift();n.material&&t.push(n);for(const r of n.children)r.visible&&e.push(r)}return t},Wx=new xe(0),Xx=new me,Jl=new _e,Ql=new _e,_u=i=>{let e=i.material.uniforms.prevBoneTexture.value;if(e&&e.image.width===i.skeleton.boneTexture.width)e=i.material.uniforms.prevBoneTexture.value,e.image.data.set(i.skeleton.boneTexture.image.data);else{e?.dispose();const t=i.skeleton.boneTexture.image.data.slice(),n=i.skeleton.boneTexture.image.width;e=new jn(t,n,n,Mt,ke),i.material.uniforms.prevBoneTexture.value=e,e.needsUpdate=!0}},jx=(i,e)=>{i.skeleton?.boneTexture&&(i.material.uniforms.boneTexture.value=i.skeleton.boneTexture,"USE_SKINNING"in i.material.defines||(i.material.defines.USE_SKINNING="",i.material.defines.BONE_TEXTURE="",i.material.needsUpdate=!0)),i.modelViewMatrix.multiplyMatrices(e.matrixWorldInverse,i.matrixWorld),i.material.uniforms.velocityMatrix.value.multiplyMatrices(e.projectionMatrix,i.modelViewMatrix)},qx=(i,e)=>{i.material.uniforms.prevVelocityMatrix.value.multiplyMatrices(e.projectionMatrix,i.modelViewMatrix),i.skeleton?.boneTexture&&_u(i)};class xu extends mt{cachedMaterials=new WeakMap;visibleMeshes=[];needsSwap=!1;constructor(e,t){super("VelocityDepthNormalPass"),this._scene=e,this._camera=t,this.renderTarget=new tt(1,1,{type:ke,minFilter:be,magFilter:be}),this.renderTarget.texture.name="VelocityDepthNormalPass.Texture",this.renderTarget.depthTexture=new vs(1,1),this.renderTarget.depthTexture.type=ke}get texture(){return this.renderTarget.texture}setVelocityDepthNormalMaterialInScene(){this.visibleMeshes=du(this._scene);for(const e of this.visibleMeshes){const t=e.material;let[n,r]=this.cachedMaterials.get(e)||[];t!==n&&(r=new zx(this._camera),Gx(t,r),e.material=r,e.skeleton?.boneTexture&&_u(e),this.cachedMaterials.set(e,[t,r])),e.material=r,e.visible=qa(e,t),kx(r,t,"normalMap","USE_NORMALMAP_TANGENTSPACE"),r.uniforms.normalMap.value=t.normalMap;const s=t.map||t.normalMap||t.roughnessMap||t.metalnessMap;s&&(r.uniforms.uvTransform.value=s.matrix),jx(e,this._camera)}}unsetVelocityDepthNormalMaterialInScene(){for(const e of this.visibleMeshes)e.visible=!0,qx(e,this._camera),e.material=this.cachedMaterials.get(e)[0]}setSize(e,t){this.renderTarget.setSize(e,t),this.lastVelocityTexture?.dispose(),this.lastVelocityTexture=new qc(e,t,Mt),this.lastVelocityTexture.type=ke,this.lastVelocityTexture.minFilter=be,this.lastVelocityTexture.magFilter=be}dispose(){super.dispose(),this.renderTarget.dispose()}render(e){Jl.copy(this._camera.projectionMatrix),Ql.copy(this._camera.projectionMatrixInverse),this._camera.view&&(this._camera.view.enabled=!1),this._camera.updateProjectionMatrix(),this._camera.updateMatrixWorld(),this.setVelocityDepthNormalMaterialInScene();const{background:t}=this._scene;this._scene.background=Wx,e.setRenderTarget(this.renderTarget),e.copyFramebufferToTexture(Xx,this.lastVelocityTexture),e.render(this._scene,this._camera),this._scene.background=t,this.unsetVelocityDepthNormalMaterialInScene(),this._camera.view&&(this._camera.view.enabled=!0),this._camera.projectionMatrix.copy(Jl),this._camera.projectionMatrixInverse.copy(Ql)}}var Yx=`float getViewZ(const in float depth) {
#ifdef PERSPECTIVE_CAMERA
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
#else
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
#endif
}

vec3 getViewPosition(float viewZ) {
  float clipW = projectionMatrix[2][3] * viewZ + projectionMatrix[3][3];
  vec4 clipPosition = vec4((vec3(vUv, viewZ) - 0.5) * 2.0, 1.0);
  clipPosition *= clipW;
  vec3 p = (projectionMatrixInverse * clipPosition).xyz;
  p.z = -viewZ;
  return p;
}

vec3 F_Schlick(const vec3 f0, const float theta) { return f0 + (1. - f0) * pow(1.0 - theta, 5.); }

vec3 SampleGGXVNDF(const vec3 V, const float ax, const float ay, const float r1, const float r2) {
  vec3 Vh = normalize(vec3(ax * V.x, ay * V.y, V.z));

  float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
  vec3 T1 = lensq > 0. ? vec3(-Vh.y, Vh.x, 0.) * inversesqrt(lensq) : vec3(1., 0., 0.);
  vec3 T2 = cross(Vh, T1);

  float r = sqrt(r1);
  float phi = 2.0 * PI * r2;
  float t1 = r * cos(phi);
  float t2 = r * sin(phi);
  float s = 0.5 * (1.0 + Vh.z);
  t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

  vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

  return normalize(vec3(ax * Nh.x, ay * Nh.y, max(0.0, Nh.z)));
}

void Onb(const vec3 N, inout vec3 T, inout vec3 B) {
  vec3 up = abs(N.z) < 0.9999999 ? vec3(0, 0, 1) : vec3(1, 0, 0);
  T = normalize(cross(up, N));
  B = cross(N, T);
}

vec3 ToLocal(const vec3 X, const vec3 Y, const vec3 Z, const vec3 V) { return vec3(dot(V, X), dot(V, Y), dot(V, Z)); }

vec3 ToWorld(const vec3 X, const vec3 Y, const vec3 Z, const vec3 V) { return V.x * X + V.y * Y + V.z * Z; }

vec3 constructGlobalIllumination(vec3 diffuseGi, vec3 specularGi, vec3 cameraRay, vec3 viewNormal, vec3 diffuse, vec3 emissive, float roughness,
                                 float metalness) {
  roughness *= roughness;

  
  vec3 normal = (vec4(viewNormal, 0.) * viewMatrix).xyz;

  vec3 T, B;

  vec3 v = -cameraRay; 

  
  vec3 V = (vec4(v, 0.) * viewMatrix).xyz; 
  vec3 N = normal;

  Onb(N, T, B);

  V = ToLocal(T, B, N, V);

  
  vec3 H = SampleGGXVNDF(V, roughness, roughness, 0.25, 0.25);
  if (H.z < 0.0)
    H = -H;

  vec3 l = normalize(reflect(-V, H));
  l = ToWorld(T, B, N, l);

  
  l = (vec4(l, 1.) * cameraMatrixWorld).xyz;
  l = normalize(l);

  if (dot(viewNormal, l) < 0.)
    l = -l;

  vec3 h = normalize(v + l); 

  
  
  float VoH = max(EPSILON, dot(v, h));

  
  vec3 f0 = mix(vec3(0.04), diffuse, metalness);
  vec3 F = F_Schlick(f0, VoH);

#if inputType != TYPE_SPECULAR
  vec3 diffuseComponent = diffuse * (1. - metalness) * (1. - F) * diffuseGi;
#else
  vec3 diffuseComponent = textureLod(sceneTexture, vUv, 0.).rgb;
#endif

  vec3 specularComponent = specularGi * F;

  vec3 globalIllumination = diffuseComponent + specularComponent + emissive;

  return globalIllumination;
}`;class Kx extends mt{constructor(e,t,n,r,s={}){super("DenoiserComposePass"),this._camera=e,this.renderTarget=new tt(1,1,{depthBuffer:!1,type:ke,minFilter:be,magFilter:be}),this.renderTarget.texture.name="DenoiserComposePass.Texture";let a,o;s.inputType==="diffuseSpecular"?(a=t[0],o=t[1]):s.inputType==="diffuse"?a=t[0]:s.inputType==="specular"&&(o=t[0]),this.fullscreenMaterial=new at({fragmentShader:`
            varying vec2 vUv;
            uniform sampler2D sceneTexture;
            uniform highp sampler2D depthTexture;
            uniform sampler2D diffuseGiTexture;
            uniform sampler2D specularGiTexture;
            uniform mat4 cameraMatrixWorld;
            uniform mat4 projectionMatrix;
            uniform mat4 projectionMatrixInverse;
			uniform float cameraNear;
			uniform float cameraFar;

            #include <common>
            #include <packing>

			#define TYPE_DIFFUSE_SPECULAR 0
			#define TYPE_DIFFUSE 1
			#define TYPE_SPECULAR 2

            ${Ji}
            ${Yx}

            void main() {
                float depth = textureLod(depthTexture, vUv, 0.).r;

				if(depth == 1. && fwidth(depth) == 0.){
					discard;
					return;
				}

				// on Android there's a bug where using "vec3 normal = unpackNormal(textureLod(velocityTexture, vUv, 0.).b);" instead of
				// "vec3 normal = unpackNormal(velocity.b);" causes the normal to be distorted (possibly due to packHalf2x16 function)

                Material mat = getMaterial(gBufferTexture, vUv);

                vec3 viewNormal = (vec4(mat.normal, 0.) * cameraMatrixWorld).xyz;

				float viewZ = -getViewZ(depth);

                // view-space position of the current texel
				vec3 viewPos = getViewPosition(viewZ);
                vec3 viewDir = normalize(viewPos);

                vec4 diffuseGi = textureLod(diffuseGiTexture, vUv, 0.);
                vec4 specularGi = textureLod(specularGiTexture, vUv, 0.);

                vec3 gi = constructGlobalIllumination(diffuseGi.rgb, specularGi.rgb, viewDir, viewNormal, mat.diffuse.rgb, mat.emissive, mat.roughness, mat.metalness);

				gl_FragColor = vec4(gi, 1.);
            }
            `,vertexShader:$i,uniforms:{sceneTexture:{value:null},viewMatrix:{value:e.matrixWorldInverse},cameraMatrixWorld:{value:e.matrixWorld},projectionMatrix:{value:e.projectionMatrix},projectionMatrixInverse:{value:e.projectionMatrixInverse},cameraNear:{value:e.near},cameraFar:{value:e.far},gBufferTexture:{value:n},depthTexture:{value:r},diffuseGiTexture:{value:a},specularGiTexture:{value:o}},defines:{inputType:["diffuseSpecular","diffuse","specular"].indexOf(s.inputType)??0},blending:ft,depthWrite:!1,depthTest:!1,toneMapped:!1}),e.isPerspectiveCamera&&(this.fullscreenMaterial.defines.PERSPECTIVE_CAMERA="")}get texture(){return this.renderTarget.texture}dispose(){this.renderTarget.dispose()}setSize(e,t){this.renderTarget.setSize(e,t)}setSceneTexture(e){this.fullscreenMaterial.uniforms.sceneTexture.value=e}render(e){this.fullscreenMaterial.uniforms.cameraNear.value=this._camera.near,this.fullscreenMaterial.uniforms.cameraFar.value=this._camera.far,e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}var Zx=`varying vec2 vUv;

uniform sampler2D inputTexture;
uniform highp sampler2D depthTexture;
uniform sampler2D normalTexture; 
uniform mat4 projectionMatrix;
uniform mat4 projectionMatrixInverse;
uniform mat4 cameraMatrixWorld;
uniform float radius;
uniform float phi;
uniform float lumaPhi;
uniform float depthPhi;
uniform float normalPhi;
uniform float roughnessPhi;
uniform float specularPhi;
uniform vec2 resolution;

layout(location = 0) out vec4 gOutput0;

#if textureCount == 2
uniform sampler2D inputTexture2;
layout(location = 1) out vec4 gOutput1;
#endif

#include <common>
#include <gbuffer_packing>

#define luminance(a) pow(dot(vec3(0.2125, 0.7154, 0.0721), a), 0.125)

#if textureCount == 1
#define inputTexture2 inputTexture
#endif

Material mat;
vec3 normal;
float depth;
float glossiness;
float specularFactor;

struct InputTexel {
  vec3 rgb;
  float a;
  float luminance;
  float w;
  float totalWeight;
  bool isSpecular;
};

void toDenoiseSpace(inout vec3 color) { color = log(color + 1.); }
void toLinearSpace(inout vec3 color) { color = exp(color) - 1.; }

float getBasicNeighborWeight(inout vec2 neighborUv) {
#ifdef GBUFFER_TEXTURE
  Material neighborMat = getMaterial(gBufferTexture, neighborUv);
  vec3 neighborNormal = neighborMat.normal;
  float neighborDepth = textureLod(depthTexture, neighborUv, 0.0).r;
#else
  vec3 neighborDepthVelocityTexel = textureLod(normalTexture, neighborUv, 0.).xyz;
  vec3 neighborNormal = unpackNormal(neighborDepthVelocityTexel.b);
  float neighborDepth = neighborDepthVelocityTexel.a;
#endif

  if (neighborDepth == 1.0)
    return 0.;

  float normalDiff = 1. - max(dot(normal, neighborNormal), 0.);
  float depthDiff = 10000. * abs(depth - neighborDepth);

#ifdef GBUFFER_TEXTURE
  float roughnessDiff = abs(mat.roughness - neighborMat.roughness);

  float wBasic = exp(-normalDiff * normalPhi - depthDiff * depthPhi - roughnessDiff * roughnessPhi);
#else
  float wBasic = exp(-normalDiff * normalPhi - depthDiff * depthPhi);
#endif

  return wBasic;
}

vec3 getNormal(Material mat) {
#ifdef GBUFFER_TEXTURE
  return mat.normal;
#else
  vec3 depthVelocityTexel = textureLod(normalTexture, vUv, 0.).xyz;
  return unpackNormal(depthVelocityTexel.b);
#endif
}

#define SQRT_2 1.41421356237

vec2 POISSON[8] = vec2[](vec2(-1.0, 0.0), vec2(0.0, -1.0), vec2(1.0, 0.0), vec2(0.0, 1.0), vec2(-0.25 * SQRT_2, -0.25 * SQRT_2),
                         vec2(0.25 * SQRT_2, -0.25 * SQRT_2), vec2(0.25 * SQRT_2, 0.25 * SQRT_2), vec2(-0.25 * SQRT_2, 0.25 * SQRT_2));

void outputTexel(inout vec4 outputFrag, InputTexel inp) {
  inp.rgb /= inp.totalWeight;

  outputFrag.rgb = inp.rgb;
  toLinearSpace(outputFrag.rgb);
  outputFrag.a = inp.a;
}

void applyWeight(inout InputTexel inp, vec2 neighborUv, float wBasic) {
  float w = wBasic;

  vec4 t;
  if (inp.isSpecular) {
    t = textureLod(inputTexture2, neighborUv, 0.);
    w *= specularFactor;
  } else {
    t = textureLod(inputTexture, neighborUv, 0.);
  }
  toDenoiseSpace(t.rgb);

  float disocclW = pow(w, 0.1);
  float lumaDiff = abs(inp.luminance - luminance(t.rgb));
  lumaDiff = min(lumaDiff, 0.5);
  float lumaFactor = exp(-lumaDiff * lumaPhi);
  w = mix(w * lumaFactor, disocclW, inp.w) * inp.w;

  w *= step(0.0001, w);

  inp.rgb += w * t.rgb;
  inp.totalWeight += w;
}

void main() {
  depth = textureLod(depthTexture, vUv, 0.).r;

  if (depth == 1.0 && fwidth(depth) == 0.) {
    discard;
    return;
  }

  InputTexel[textureCount] inputs;

  float maxAlpha = 0.;
#pragma unroll_loop_start
  for (int i = 0; i < textureCount; i++) {
    {
      vec4 t;

      if (isTextureSpecular[i]) {
        t = textureLod(inputTexture2, vUv, 0.);
      } else {
        t = textureLod(inputTexture, vUv, 0.);
      }

      
      float age = 1. / pow(t.a + 1., 1.2 * phi);
      
      
      
      

      
      t.rgb *= 1.0003;

      toDenoiseSpace(t.rgb);
      InputTexel inp = InputTexel(t.rgb, t.a, luminance(t.rgb), age, 1., isTextureSpecular[i]);
      maxAlpha = max(maxAlpha, inp.a);

      inputs[i] = inp;
    }
  }
#pragma unroll_loop_end

  mat = getMaterial(gBufferTexture, vUv);
  normal = getNormal(mat);
  glossiness = max(0., 4. * (1. - mat.roughness / 0.25));
  specularFactor = exp(-glossiness * specularPhi);

  float flatness = 1. - min(length(fwidth(normal)), 1.);
  flatness = pow(flatness, 2.) * 0.75 + 0.25;

  

  vec4 random = blueNoise();
  float r = radius;

  
  float angle = random.r * 2. * PI;
  float s = sin(angle), c = cos(angle);
  mat2 rm = r * flatness * mat2(c, -s, s, c);

  for (int i = 0; i < 8; i++) {
    {
      vec2 offset = POISSON[i];

      vec2 neighborUv = vUv + rm * (offset / resolution);

      float wBasic = getBasicNeighborWeight(neighborUv);

      applyWeight(inputs[0], neighborUv, wBasic);

#if textureCount == 2
      applyWeight(inputs[1], neighborUv, wBasic);
#endif
    }
  }

  
  

  outputTexel(gOutput0, inputs[0]);

#if textureCount == 2
  outputTexel(gOutput1, inputs[1]);
#endif
}`;const $x=Zx.replace("#include <gbuffer_packing>",Ji),rn={iterations:1,radius:3,phi:.5,lumaPhi:5,depthPhi:2,normalPhi:3.25,inputType:"diffuseSpecular"};class Ms extends mt{iterations=rn.iterations;index=0;constructor(e,t,n=rn){super("PoissonBlurPass"),n={...rn,...n},this.textures=t;let r=[!1,!0];n.inputType==="diffuse"&&(r=[!1,!1]),n.inputType==="specular"&&(r=[!0,!0]);const s=n.inputType==="diffuseSpecular"?2:1,a=hu($x.replaceAll("textureCount",s));this.fullscreenMaterial=new at({fragmentShader:a,vertexShader:$i,uniforms:{depthTexture:{value:null},inputTexture:{value:t[0]},inputTexture2:{value:t[1]},gBufferTexture:{value:null},normalTexture:{value:null},projectionMatrix:{value:e.projectionMatrix},projectionMatrixInverse:{value:e.projectionMatrixInverse},cameraMatrixWorld:{value:e.matrixWorld},viewMatrix:{value:e.matrixWorldInverse},radius:{value:rn.radius},phi:{value:rn.phi},lumaPhi:{value:rn.lumaPhi},depthPhi:{value:rn.depthPhi},normalPhi:{value:rn.normalPhi},roughnessPhi:{value:rn.roughnessPhi},specularPhi:{value:rn.specularPhi},resolution:{value:new me}},defines:{isTextureSpecular:"bool[2]("+r.join(",")+")"},glslVersion:ss}),gu(this.fullscreenMaterial);const o={type:jt,depthBuffer:!1};this.renderTargetA=new Sa(1,1,s,o),this.renderTargetB=new Sa(1,1,s,o),this.renderTargetB.texture[0].name="PoissonDenoisePass."+(r[0]?"specular":"diffuse"),s>1&&(this.renderTargetB.texture[1].name="PoissonDenoisePass."+(r[1]?"specular":"diffuse"));const{uniforms:l}=this.fullscreenMaterial;l.depthPhi.value=n.depthPhi,l.normalPhi.value=n.normalPhi}setSize(e,t){this.renderTargetA.setSize(e,t),this.renderTargetB.setSize(e,t),this.fullscreenMaterial.uniforms.resolution.value.set(e,t)}get texture(){return this.renderTargetB.texture}setGBufferPass(e){e instanceof vu?(this.fullscreenMaterial.uniforms.gBufferTexture.value=e.texture,this.fullscreenMaterial.defines.GBUFFER_TEXTURE=""):this.fullscreenMaterial.uniforms.normalTexture.value=e.texture,this.fullscreenMaterial.uniforms.depthTexture.value=e.renderTarget.depthTexture}setnNormalTexture(e){this.fullscreenMaterial.uniforms.normalTexture.value=e}setDepthTexture(e){this.fullscreenMaterial.uniforms.depthTexture.value=e}dispose(){super.dispose(),this.renderTargetA.dispose(),this.renderTargetB.dispose(),this.fullscreenMaterial.dispose()}render(e){for(let t=0;t<2*this.iterations;t++){const n=t%2===0,r=n?this.renderTargetB:this.renderTargetA;this.fullscreenMaterial.uniforms.inputTexture.value=t===0?this.textures[0]:r.texture[0],this.fullscreenMaterial.uniforms.inputTexture2.value=t===0?this.textures[1]:r.texture[1];const s=n?this.renderTargetA:this.renderTargetB;e.setRenderTarget(s),e.render(this.scene,this.camera)}}}Ms.DefaultOptions=rn;const ec={denoiseMode:"full",inputType:"diffuseSpecular",gBufferPass:null,velocityDepthNormalPass:null};class Jx{constructor(e,t,n,r=ec){r={...ec,...r},this.options=r,this.velocityDepthNormalPass=r.velocityDepthNormalPass??new xu(e,t),this.isOwnVelocityDepthNormalPass=!r.velocityDepthNormalPass;const s=r.inputType==="diffuseSpecular"?2:1;this.temporalReprojectPass=new pu(e,t,this.velocityDepthNormalPass,n,s,{fullAccumulate:!0,logTransform:!0,copyTextures:!r.denoise,reprojectSpecular:[!1,!0],neighborhoodClamp:[!0,!0],neighborhoodClampRadius:2,neighborhoodClampIntensity:.5,...r});const a=this.temporalReprojectPass.renderTarget.texture.slice(0,s);(this.options.denoiseMode==="full"||this.options.denoiseMode==="denoised")&&(this.denoisePass=new Ms(t,a,r),this.denoisePass.setGBufferPass(r.gBufferPass??this.velocityDepthNormalPass),this.temporalReprojectPass.overrideAccumulatedTextures=this.denoisePass.renderTargetB.texture);const o=this.denoisePass?.texture??a;r.denoiseMode.startsWith("full")&&(this.denoiserComposePass=new Kx(t,o,r.gBufferPass.texture,r.gBufferPass.renderTarget.depthTexture,r))}get texture(){switch(this.options.denoiseMode){case"full":case"full_temporal":return this.denoiserComposePass.texture;case"denoised":return this.denoisePass.texture;case"temporal":return this.temporalReprojectPass.texture}}reset(){this.temporalReprojectPass.reset()}setSize(e,t){this.velocityDepthNormalPass.setSize(e,t),this.temporalReprojectPass.setSize(e,t),this.denoisePass?.setSize(e,t),this.denoiserComposePass?.setSize(e,t)}dispose(){this.velocityDepthNormalPass.dispose(),this.temporalReprojectPass.dispose(),this.denoisePass?.dispose(),this.denoiserComposePass?.dispose()}render(e,t=null){this.isOwnVelocityDepthNormalPass&&this.velocityDepthNormalPass.render(e),this.temporalReprojectPass.render(e),this.options.inputType!=="diffuseSpecular"&&this.denoiserComposePass?.setSceneTexture(t.texture),this.denoisePass?.render(e),this.denoiserComposePass?.render(e)}}class Qx extends mt{constructor(e){super("GBufferDebugPass"),this.renderTarget=new tt(1,1,{depthBuffer:!1,type:ke,minFilter:be,magFilter:be}),this.renderTarget.texture.name="GBufferDebugPass.Texture",this.fullscreenMaterial=new at({fragmentShader:`
            varying vec2 vUv;
            uniform highp sampler2D depthTexture;
			uniform int mode;

            #include <common>
            #include <packing>

            ${Ji}

            void main() {
                highp float depth = textureLod(depthTexture, vUv, 0.).r;

				if(depth == 0.){
					gl_FragColor = vec4(0.);
					return;
				}

                Material mat = getMaterial(gBufferTexture, vUv);

                if (mode == 0) {
                    gl_FragColor = vec4(mat.diffuse.rgb, 1.);
                } else if (mode == 1) {
                    gl_FragColor = vec4(mat.diffuse.aaa, 1.);
                } else if (mode == 2) {
                    gl_FragColor = vec4(mat.normal, 1.);
                } else if (mode == 3) {
                    gl_FragColor = vec4(vec3(mat.roughness), 1.);
                } else if (mode == 4) {
                    gl_FragColor = vec4(vec3(mat.metalness), 1.);
                } else {
                    gl_FragColor = vec4(mat.emissive, 1.);
                }
            }
            `,vertexShader:$i,uniforms:{gBufferTexture:{value:e},mode:{value:0}},blending:ft,depthWrite:!1,depthTest:!1,toneMapped:!1})}get texture(){return this.renderTarget.texture}dispose(){this.renderTarget.dispose()}setSize(e,t){this.renderTarget.setSize(e,t)}render(e){e.setRenderTarget(this.renderTarget),e.render(this.scene,this.camera)}}const Mu={mode:"ssgi",distance:10,thickness:10,denoiseIterations:1,denoiseKernel:2,denoiseDiffuse:10,denoiseSpecular:10,radius:3,phi:.5,lumaPhi:5,depthPhi:2,normalPhi:50,roughnessPhi:50,specularPhi:50,envBlur:.5,importanceSampling:!0,steps:20,refineSteps:5,resolutionScale:1,missedRays:!1,outputTexture:null};var e0=`uniform sampler2D inputTexture;
uniform sampler2D sceneTexture;
uniform highp sampler2D depthTexture;
uniform bool isDebug;

uniform float cameraNear;
uniform float cameraFar;

#include <fog_pars_fragment>

float getViewZ(const in float depth) {
#if PERSPECTIVE_CAMERA == 1
  return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
#else
  return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
#endif
}

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  if (isDebug) {
    outputColor = textureLod(inputTexture, uv, 0.);
    return;
  }

  float depth = textureLod(depthTexture, uv, 0.).r;
  vec3 ssgiClr;

  if (depth == 1.0) {
    ssgiClr = textureLod(sceneTexture, uv, 0.).rgb;
  } else {
    ssgiClr = textureLod(inputTexture, uv, 0.).rgb;

#ifdef USE_FOG
    float viewZ = getViewZ(depth) * 0.4; 
    vFogDepth = -viewZ;

#include <fog_fragment>

    ssgiClr = mix(ssgiClr, fogColor, fogFactor);
#endif
  }

  outputColor = vec4(ssgiClr, 1.0);
}`;const{render:tc}=Ui.prototype,nc=lx();class Su extends qn{selection=new c_;isUsingRenderPass=!0;constructor(e,t,n,r){r={...Mu,...r};let s=e0.replace("#include <fog_pars_fragment>",Ee.fog_pars_fragment.replace("varying",""));s=s.replace("#include <fog_fragment>",Ee.fog_fragment.replace(/.*gl_FragColor.*/g,""));const a=new Map;if(t.fog&&a.set("USE_FOG",""),t.fog?.isFogExp2&&a.set("FOG_EXP2",""),super("SSGIEffect",s,{type:"FinalSSGIMaterial",uniforms:new Map([["inputTexture",new J(null)],["sceneTexture",new J(null)],["depthTexture",new J(null)],["isDebug",new J(!1)],["fogColor",new J(new xe)],["fogNear",new J(0)],["fogFar",new J(0)],["fogDensity",new J(0)],["cameraNear",new J(0)],["cameraFar",new J(0)]]),defines:new Map([["PERSPECTIVE_CAMERA",n.isPerspectiveCamera?"1":"0"],...a])}),this._scene=t,this._camera=n,this.composer=e,r.mode==="ssr"?(r.reprojectSpecular=!0,r.neighborhoodClamp=!0,r.inputType="specular"):r.mode==="ssgi"&&(r.reprojectSpecular=[!1,!0],r.neighborhoodClamp=[!1,!0]),typeof r.preset=="string")switch(r.preset){case"low":r.steps=10,r.refineSteps=2,r.denoiseMode="full_temporal";break;case"medium":r.steps=20,r.refineSteps=4,r.denoiseMode="full";break;case"medium":r.steps=40,r.refineSteps=4,r.denoiseMode="full";break}this.ssgiPass=new Dx(this,r),this.denoiser=new Jx(t,n,this.ssgiPass.texture,{gBufferPass:this.ssgiPass.gBufferPass,velocityDepthNormalPass:r.velocityDepthNormalPass,...r}),this.lastSize={width:r.width,height:r.height,resolutionScale:r.resolutionScale},this.sceneRenderTarget=new tt(1,1,{colorSpace:Ye}),this.renderPass=new Ui(this._scene,this._camera),this.renderPass.renderToScreen=!1,this.setSize(r.width,r.height);const o=this,l=this.renderPass;Ui.prototype.render=function(...c){if(this!==l){const u=o.isUsingRenderPass;o.isUsingRenderPass=!0,u!=o.isUsingRenderPass&&o.updateUsingRenderPass()}tc.call(this,...c)},this.makeOptionsReactive(r),this.outputTexture=this.denoiser.texture}updateUsingRenderPass(){this.isUsingRenderPass?this.ssgiPass.fullscreenMaterial.defines.useDirectLight="":delete this.ssgiPass.fullscreenMaterial.defines.useDirectLight,this.ssgiPass.fullscreenMaterial.needsUpdate=!0}reset(){this.denoiser.reset()}makeOptionsReactive(e){let t=!1;const n=this.ssgiPass.fullscreenMaterial.uniforms,r=Object.keys(n);for(const s of Object.keys(e))Object.defineProperty(this,s,{get(){return e[s]},set(a){if(!(e[s]===a&&t))switch(e[s]=a,s){case"denoiseIterations":this.denoiser.denoisePass&&(this.denoiser.denoisePass.iterations=a);break;case"radius":case"phi":case"lumaPhi":case"depthPhi":case"normalPhi":case"roughnessPhi":case"specularPhi":this.denoiser.denoisePass?.fullscreenMaterial.uniforms[s]&&(this.denoiser.denoisePass.fullscreenMaterial.uniforms[s].value=a,this.reset());break;case"denoiseIterations":case"radius":this.denoiser.denoisePass&&(this.denoiser.denoisePass[s]=a);break;case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height),this.reset();break;case"steps":case"refineSteps":this.ssgiPass.fullscreenMaterial.defines[s]=parseInt(a),this.ssgiPass.fullscreenMaterial.needsUpdate=t,this.reset();break;case"importanceSampling":case"missedRays":a?this.ssgiPass.fullscreenMaterial.defines[s]="":delete this.ssgiPass.fullscreenMaterial.defines[s],this.ssgiPass.fullscreenMaterial.needsUpdate=t,this.reset();break;case"distance":n.rayDistance.value=a,this.reset();break;case"outputTexture":if(!this.outputTexture)return;if(typeof a=="string"){this.gBufferDebugPass===void 0&&(this.gBufferDebugPass=new Qx(this.ssgiPass.gBufferPass.texture),this.gBufferDebugPass.setSize(this.lastSize.width,this.lastSize.height));const l=["diffuse","alpha","normal","roughness","metalness","emissive"].indexOf(a);this.gBufferDebugPass.fullscreenMaterial.uniforms.mode.value=l,this.outputTexture=this.gBufferDebugPass.texture}else this.gBufferDebugPass!==void 0&&this.outputTexture!==this.gBufferDebugPass.texture&&(this.gBufferDebugPass.dispose(),delete this.gBufferDebugPass);this.uniforms.get("isDebug").value=this.outputTexture!==this.denoiser.texture;break;default:r.includes(s)&&(n[s].value=a,this.reset())}}}),this[s]=e[s];t=!0}initialize(e,...t){super.initialize(e,...t),this.ssgiPass.initialize(e,...t)}setSize(e,t,n=!1){e===void 0&&t===void 0||!n&&e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale||(this.ssgiPass.setSize(e,t),this.denoiser.setSize(e,t),this.gBufferDebugPass?.setSize(e,t),this.sceneRenderTarget.setSize(e,t),this.cubeToEquirectEnvPass?.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale})}dispose(){super.dispose(),this.ssgiPass.dispose(),this.denoiser.dispose(),this.cubeToEquirectEnvPass?.dispose(),Ui.prototype.render=tc}keepEnvMapUpdated(e){const t=this.ssgiPass.fullscreenMaterial;let n=this._scene.environment;if(n){if(t.uniforms.envMapInfo.value.mapUuid!==n.uuid){n.isCubeTexture&&(this.cubeToEquirectEnvPass||(this.cubeToEquirectEnvPass=new mx),n=this.cubeToEquirectEnvPass.generateEquirectEnvMap(e,n),n.uuid=this._scene.environment.uuid),n.generateMipmaps||(n.generateMipmaps=!0,n.minFilter=ma,n.magFilter=Ke,n.needsUpdate=!0),n.type===ke&&console.warn("SSGI: Environment map is FloatType, this causes the environment map to be black in the SSGI pass for many modern Apple devices. Please use HalfFloatType instead."),t.uniforms.envMapInfo.value.mapUuid=n.uuid;const r=ox(n);t.uniforms.maxEnvMapMipLevel.value=r,t.uniforms.envMapInfo.value.map=n,t.defines.USE_ENVMAP="",delete t.defines.importanceSampling,this.importanceSampling?t.uniforms.envMapInfo.value.updateFrom(n,e).then(()=>{t.defines.importanceSampling="",t.needsUpdate=!0}):t.uniforms.envMapInfo.value.map=n,this.reset(),t.needsUpdate=!0}}else"USE_ENVMAP"in t.defines&&(delete t.defines.USE_ENVMAP,delete t.defines.importanceSampling,t.needsUpdate=!0)}get depthTexture(){return this.ssgiPass.gBufferPass.depthTexture}update(e,t){this.keepEnvMapUpdated(e);const n=this.isUsingRenderPass?t:this.sceneRenderTarget,r=[];if(!this.isUsingRenderPass){const s=[];for(const a of Vx(this._scene)){if(a.isScene)return;a.visible=!qa(a),a.visible?r.push(a):s.push(a)}this.renderPass.render(e,this.sceneRenderTarget);for(const a of s)a.visible=!0;for(const a of r)a.visible=!1}this.ssgiPass.fullscreenMaterial.uniforms.directLightTexture.value=n.texture,this.ssgiPass.render(e),this.gBufferDebugPass?.render(e),this.denoiser.render(e,t),this.uniforms.get("inputTexture").value=this.outputTexture[0]??this.outputTexture,this.uniforms.get("sceneTexture").value=n.texture,this.uniforms.get("depthTexture").value=this.ssgiPass.gBufferPass.depthTexture,this._scene.fog&&(this.uniforms.get("fogColor").value=this._scene.fog.color,this.uniforms.get("fogNear").value=this._scene.fog.near,this.uniforms.get("fogFar").value=this._scene.fog.far,this.uniforms.get("fogDensity").value=this._scene.fog.density,this.uniforms.get("cameraNear").value=this._camera.near,this.uniforms.get("cameraFar").value=this._camera.far);for(const s of r)s.visible=!0;nc.value=!0,cancelAnimationFrame(this.rAF2),cancelAnimationFrame(this.rAF),cancelAnimationFrame(this.usingRenderPassRAF),this.rAF=requestAnimationFrame(()=>{this.rAF2=requestAnimationFrame(()=>{nc.value=!1})}),this.usingRenderPassRAF=requestAnimationFrame(()=>{const s=this.isUsingRenderPass;this.isUsingRenderPass=!1,s!=this.isUsingRenderPass&&this.updateUsingRenderPass()})}}Su.DefaultOptions=Mu;var t0=`uniform sampler2D inputTexture;
uniform highp sampler2D depthTexture;
uniform float power;
uniform vec3 color;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
  float unpackedDepth = textureLod(depthTexture, uv, 0.).r;

  float ao = unpackedDepth > 0.9999 ? 1.0 : textureLod(inputTexture, uv, 0.0).a;
  ao = pow(ao, power);

  vec3 aoColor = mix(color, vec3(1.), ao);

  aoColor *= inputColor.rgb;

  outputColor = vec4(aoColor, inputColor.a);
}`;const Aa={resolutionScale:1,spp:8,distance:2,distancePower:1,power:2,bias:40,thickness:.075,color:new xe("black"),useNormalPass:!1,velocityDepthNormalPass:null,normalTexture:null,...Ms.DefaultOptions};class n0 extends qn{lastSize={width:0,height:0,resolutionScale:0};constructor(e,t,n,r,s=Aa){if(super("AOEffect",t0,{type:"FinalAOMaterial",uniforms:new Map([["inputTexture",new J(null)],["depthTexture",new J(null)],["power",new J(0)],["color",new J(new xe("black"))]])}),this.composer=e,this.aoPass=r,s={...Aa,...s},e.depthTexture||e.createDepthTexture(),this.aoPass.fullscreenMaterial.uniforms.depthTexture.value=e.depthTexture,this.uniforms.get("depthTexture").value=e.depthTexture,s.useNormalPass||s.normalTexture){s.useNormalPass&&(this.normalPass=new r_(n,t));const a=s.normalTexture??this.normalPass.texture;this.aoPass.fullscreenMaterial.uniforms.normalTexture.value=a,this.aoPass.fullscreenMaterial.defines.useNormalTexture=""}this.PoissonDenoisePass=new Ms(t,this.aoPass.texture,e.depthTexture,{normalInRgb:!0}),this.makeOptionsReactive(s)}makeOptionsReactive(e){for(const t of Object.keys(e))Object.defineProperty(this,t,{get(){return e[t]},set(n){if(n!=null)switch(e[t]=n,t){case"spp":this.aoPass.fullscreenMaterial.defines.spp=n.toFixed(0),this.aoPass.fullscreenMaterial.needsUpdate=!0;break;case"distance":this.aoPass.fullscreenMaterial.uniforms.aoDistance.value=n;break;case"resolutionScale":this.setSize(this.lastSize.width,this.lastSize.height);break;case"power":this.uniforms.get("power").value=n;break;case"color":this.uniforms.get("color").value.copy(new xe(n));break;case"iterations":case"radius":case"rings":case"samples":this.PoissonDenoisePass[t]=n;break;case"lumaPhi":case"depthPhi":case"normalPhi":this.PoissonDenoisePass.fullscreenMaterial.uniforms[t].value=Math.max(n,1e-4);break;default:t in this.aoPass.fullscreenMaterial.uniforms&&(this.aoPass.fullscreenMaterial.uniforms[t].value=n)}},configurable:!0}),this[t]=e[t]}setSize(e,t){e===void 0||t===void 0||e===this.lastSize.width&&t===this.lastSize.height&&this.resolutionScale===this.lastSize.resolutionScale||(this.normalPass?.setSize(e,t),this.aoPass.setSize(e*this.resolutionScale,t*this.resolutionScale),this.PoissonDenoisePass.setSize(e,t),this.lastSize={width:e,height:t,resolutionScale:this.resolutionScale})}get texture(){return this.iterations>0?this.PoissonDenoisePass.texture:this.aoPass.texture}update(e){const t=this.composer.passes.some(n=>n.enabled&&!n.skipRendering&&n.effects?.some(r=>r instanceof Ya));t&&!("animatedNoise"in this.aoPass.fullscreenMaterial.defines)?(this.aoPass.fullscreenMaterial.defines.animatedNoise="",this.aoPass.fullscreenMaterial.needsUpdate=!0):!t&&"animatedNoise"in this.aoPass.fullscreenMaterial.defines&&(delete this.aoPass.fullscreenMaterial.defines.animatedNoise,this.aoPass.fullscreenMaterial.needsUpdate=!0),this.uniforms.get("inputTexture").value=this.texture,this.normalPass?.render(e),this.aoPass.render(e),this.PoissonDenoisePass.render(e)}}n0.DefaultOptions=Aa;const i0=`
uniform sampler2D inputTexture;
uniform float sharpness;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    vec4 blurredPixel = texture(inputTexture, uv - 1.0 * texelSize);
    blurredPixel += texture(inputTexture, uv + vec2(0.0, -1.0) * texelSize);
    blurredPixel += texture(inputTexture, uv + vec2(1.0, -1.0) * texelSize);
    blurredPixel += texture(inputTexture, uv + vec2(-1.0, 0.0) * texelSize);
    blurredPixel += inputColor;
    blurredPixel += texture(inputTexture, uv + vec2(1.0, 0.0) * texelSize);
    blurredPixel += texture(inputTexture, uv + vec2(-1.0, 1.0) * texelSize);
    blurredPixel += texture(inputTexture, uv + vec2(0.0, 1.0) * texelSize);
    blurredPixel += texture(inputTexture, uv + 1.0 * texelSize);
    blurredPixel /= 9.0;

    // Calculate the sharpness difference
    vec4 sharpDiff = inputColor - blurredPixel;

    // Apply the sharpness effect by adding the difference scaled by the sharpness value
    vec4 sharpenedPixel = inputColor + sharpDiff * sharpness;

	// set minimun to 0 as otherwise we get severe edge artifacts on Mac Sonoma Firefox v120 for example
	sharpenedPixel.rgb = max(sharpenedPixel.rgb, vec3(0.0));

    outputColor = sharpenedPixel;
}
`,ic={sharpness:1};class r0 extends qn{constructor(e=ic){e={...ic,...e},super("SharpnessEffect",i0,{uniforms:new Map([["sharpness",new J(e.sharpness)],["inputTexture",new J(null)]])}),this.setSharpness(e.sharpness)}setSharpness(e){this.uniforms.get("sharpness").value=e}update(e,t){this.uniforms.get("inputTexture").value=t.texture}}const rc={type:"change"},oa={type:"start"},sc={type:"end"},Qr=new xr,ac=new Gn,s0=Math.cos(70*Ac.DEG2RAD);class a0 extends dn{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new C,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:ci.ROTATE,MIDDLE:ci.DOLLY,RIGHT:ci.PAN},this.touches={ONE:ui.ROTATE,TWO:ui.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return o.phi},this.getAzimuthalAngle=function(){return o.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",M),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",M),this._domElementKeyEvents=null},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(rc),n.update(),s=r.NONE},this.update=function(){const P=new C,Q=new Jt().setFromUnitVectors(e.up,new C(0,1,0)),pe=Q.clone().invert(),le=new C,de=new Jt,Le=new C,Ve=2*Math.PI;return function(he=null){const j=n.object.position;P.copy(j).sub(n.target),P.applyQuaternion(Q),o.setFromVector3(P),n.autoRotate&&s===r.NONE&&k(x(he)),n.enableDamping?(o.theta+=l.theta*n.dampingFactor,o.phi+=l.phi*n.dampingFactor):(o.theta+=l.theta,o.phi+=l.phi);let ne=n.minAzimuthAngle,oe=n.maxAzimuthAngle;isFinite(ne)&&isFinite(oe)&&(ne<-Math.PI?ne+=Ve:ne>Math.PI&&(ne-=Ve),oe<-Math.PI?oe+=Ve:oe>Math.PI&&(oe-=Ve),ne<=oe?o.theta=Math.max(ne,Math.min(oe,o.theta)):o.theta=o.theta>(ne+oe)/2?Math.max(ne,o.theta):Math.min(oe,o.theta)),o.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,o.phi)),o.makeSafe(),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),n.zoomToCursor&&w||n.object.isOrthographicCamera?o.radius=ee(o.radius):o.radius=ee(o.radius*c),P.setFromSpherical(o),P.applyQuaternion(pe),j.copy(n.target).add(P),n.object.lookAt(n.target),n.enableDamping===!0?(l.theta*=1-n.dampingFactor,l.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(l.set(0,0,0),u.set(0,0,0));let ze=!1;if(n.zoomToCursor&&w){let Ze=null;if(n.object.isPerspectiveCamera){const et=P.length();Ze=ee(et*c);const zt=et-Ze;n.object.position.addScaledVector(T,zt),n.object.updateMatrixWorld()}else if(n.object.isOrthographicCamera){const et=new C(R.x,R.y,0);et.unproject(n.object),n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ze=!0;const zt=new C(R.x,R.y,0);zt.unproject(n.object),n.object.position.sub(zt).add(et),n.object.updateMatrixWorld(),Ze=P.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),n.zoomToCursor=!1;Ze!==null&&(this.screenSpacePanning?n.target.set(0,0,-1).transformDirection(n.object.matrix).multiplyScalar(Ze).add(n.object.position):(Qr.origin.copy(n.object.position),Qr.direction.set(0,0,-1).transformDirection(n.object.matrix),Math.abs(n.object.up.dot(Qr.direction))<s0?e.lookAt(n.target):(ac.setFromNormalAndCoplanarPoint(n.object.up,n.target),Qr.intersectPlane(ac,n.target))))}else n.object.isOrthographicCamera&&(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/c)),n.object.updateProjectionMatrix(),ze=!0);return c=1,w=!1,ze||le.distanceToSquared(n.object.position)>a||8*(1-de.dot(n.object.quaternion))>a||Le.distanceToSquared(n.target)>0?(n.dispatchEvent(rc),le.copy(n.object.position),de.copy(n.object.quaternion),Le.copy(n.target),ze=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",te),n.domElement.removeEventListener("pointerdown",Oe),n.domElement.removeEventListener("pointercancel",je),n.domElement.removeEventListener("wheel",A),n.domElement.removeEventListener("pointermove",Ie),n.domElement.removeEventListener("pointerup",je),n._domElementKeyEvents!==null&&(n._domElementKeyEvents.removeEventListener("keydown",M),n._domElementKeyEvents=null)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const a=1e-6,o=new Hl,l=new Hl;let c=1;const u=new C,h=new me,f=new me,p=new me,g=new me,v=new me,m=new me,d=new me,S=new me,_=new me,T=new C,R=new me;let w=!1;const b=[],D={};function x(P){return P!==null?2*Math.PI/60*n.autoRotateSpeed*P:2*Math.PI/60/60*n.autoRotateSpeed}function y(){return Math.pow(.95,n.zoomSpeed)}function k(P){l.theta-=P}function q(P){l.phi-=P}const I=function(){const P=new C;return function(pe,le){P.setFromMatrixColumn(le,0),P.multiplyScalar(-pe),u.add(P)}}(),N=function(){const P=new C;return function(pe,le){n.screenSpacePanning===!0?P.setFromMatrixColumn(le,1):(P.setFromMatrixColumn(le,0),P.crossVectors(n.object.up,P)),P.multiplyScalar(pe),u.add(P)}}(),F=function(){const P=new C;return function(pe,le){const de=n.domElement;if(n.object.isPerspectiveCamera){const Le=n.object.position;P.copy(Le).sub(n.target);let Ve=P.length();Ve*=Math.tan(n.object.fov/2*Math.PI/180),I(2*pe*Ve/de.clientHeight,n.object.matrix),N(2*le*Ve/de.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(I(pe*(n.object.right-n.object.left)/n.object.zoom/de.clientWidth,n.object.matrix),N(le*(n.object.top-n.object.bottom)/n.object.zoom/de.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function U(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c/=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function B(P){n.object.isPerspectiveCamera||n.object.isOrthographicCamera?c*=P:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function Y(P){if(!n.zoomToCursor)return;w=!0;const Q=n.domElement.getBoundingClientRect(),pe=P.clientX-Q.left,le=P.clientY-Q.top,de=Q.width,Le=Q.height;R.x=pe/de*2-1,R.y=-(le/Le)*2+1,T.set(R.x,R.y,1).unproject(n.object).sub(n.object.position).normalize()}function ee(P){return Math.max(n.minDistance,Math.min(n.maxDistance,P))}function $(P){h.set(P.clientX,P.clientY)}function V(P){Y(P),d.set(P.clientX,P.clientY)}function W(P){g.set(P.clientX,P.clientY)}function ie(P){f.set(P.clientX,P.clientY),p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;k(2*Math.PI*p.x/Q.clientHeight),q(2*Math.PI*p.y/Q.clientHeight),h.copy(f),n.update()}function ue(P){S.set(P.clientX,P.clientY),_.subVectors(S,d),_.y>0?U(y()):_.y<0&&B(y()),d.copy(S),n.update()}function fe(P){v.set(P.clientX,P.clientY),m.subVectors(v,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(v),n.update()}function ye(P){Y(P),P.deltaY<0?B(y()):P.deltaY>0&&U(y()),n.update()}function Ce(P){let Q=!1;switch(P.code){case n.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?q(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,n.keyPanSpeed),Q=!0;break;case n.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?q(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(0,-n.keyPanSpeed),Q=!0;break;case n.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?k(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(n.keyPanSpeed,0),Q=!0;break;case n.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?k(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):F(-n.keyPanSpeed,0),Q=!0;break}Q&&(P.preventDefault(),n.update())}function Me(){if(b.length===1)h.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),Q=.5*(b[0].pageY+b[1].pageY);h.set(P,Q)}}function Xe(){if(b.length===1)g.set(b[0].pageX,b[0].pageY);else{const P=.5*(b[0].pageX+b[1].pageX),Q=.5*(b[0].pageY+b[1].pageY);g.set(P,Q)}}function Rt(){const P=b[0].pageX-b[1].pageX,Q=b[0].pageY-b[1].pageY,pe=Math.sqrt(P*P+Q*Q);d.set(0,pe)}function Ue(){n.enableZoom&&Rt(),n.enablePan&&Xe()}function z(){n.enableZoom&&Rt(),n.enableRotate&&Me()}function gt(P){if(b.length==1)f.set(P.pageX,P.pageY);else{const pe=X(P),le=.5*(P.pageX+pe.x),de=.5*(P.pageY+pe.y);f.set(le,de)}p.subVectors(f,h).multiplyScalar(n.rotateSpeed);const Q=n.domElement;k(2*Math.PI*p.x/Q.clientHeight),q(2*Math.PI*p.y/Q.clientHeight),h.copy(f)}function Se(P){if(b.length===1)v.set(P.pageX,P.pageY);else{const Q=X(P),pe=.5*(P.pageX+Q.x),le=.5*(P.pageY+Q.y);v.set(pe,le)}m.subVectors(v,g).multiplyScalar(n.panSpeed),F(m.x,m.y),g.copy(v)}function De(P){const Q=X(P),pe=P.pageX-Q.x,le=P.pageY-Q.y,de=Math.sqrt(pe*pe+le*le);S.set(0,de),_.set(0,Math.pow(S.y/d.y,n.zoomSpeed)),U(_.y),d.copy(S)}function Ae(P){n.enableZoom&&De(P),n.enablePan&&Se(P)}function nt(P){n.enableZoom&&De(P),n.enableRotate&&gt(P)}function Oe(P){n.enabled!==!1&&(b.length===0&&(n.domElement.setPointerCapture(P.pointerId),n.domElement.addEventListener("pointermove",Ie),n.domElement.addEventListener("pointerup",je)),se(P),P.pointerType==="touch"?G(P):vt(P))}function Ie(P){n.enabled!==!1&&(P.pointerType==="touch"?re(P):Et(P))}function je(P){ve(P),b.length===0&&(n.domElement.releasePointerCapture(P.pointerId),n.domElement.removeEventListener("pointermove",Ie),n.domElement.removeEventListener("pointerup",je)),n.dispatchEvent(sc),s=r.NONE}function vt(P){let Q;switch(P.button){case 0:Q=n.mouseButtons.LEFT;break;case 1:Q=n.mouseButtons.MIDDLE;break;case 2:Q=n.mouseButtons.RIGHT;break;default:Q=-1}switch(Q){case ci.DOLLY:if(n.enableZoom===!1)return;V(P),s=r.DOLLY;break;case ci.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enablePan===!1)return;W(P),s=r.PAN}else{if(n.enableRotate===!1)return;$(P),s=r.ROTATE}break;case ci.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(n.enableRotate===!1)return;$(P),s=r.ROTATE}else{if(n.enablePan===!1)return;W(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(oa)}function Et(P){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;ie(P);break;case r.DOLLY:if(n.enableZoom===!1)return;ue(P);break;case r.PAN:if(n.enablePan===!1)return;fe(P);break}}function A(P){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(P.preventDefault(),n.dispatchEvent(oa),ye(P),n.dispatchEvent(sc))}function M(P){n.enabled===!1||n.enablePan===!1||Ce(P)}function G(P){switch(ae(P),b.length){case 1:switch(n.touches.ONE){case ui.ROTATE:if(n.enableRotate===!1)return;Me(),s=r.TOUCH_ROTATE;break;case ui.PAN:if(n.enablePan===!1)return;Xe(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case ui.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ue(),s=r.TOUCH_DOLLY_PAN;break;case ui.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;z(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(oa)}function re(P){switch(ae(P),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;gt(P),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;Se(P),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(P),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;nt(P),n.update();break;default:s=r.NONE}}function te(P){n.enabled!==!1&&P.preventDefault()}function se(P){b.push(P)}function ve(P){delete D[P.pointerId];for(let Q=0;Q<b.length;Q++)if(b[Q].pointerId==P.pointerId){b.splice(Q,1);return}}function ae(P){let Q=D[P.pointerId];Q===void 0&&(Q=new me,D[P.pointerId]=Q),Q.set(P.pageX,P.pageY)}function X(P){const Q=P.pointerId===b[0].pointerId?b[1]:b[0];return D[Q.pointerId]}n.domElement.addEventListener("contextmenu",te),n.domElement.addEventListener("pointerdown",Oe),n.domElement.addEventListener("pointercancel",je),n.domElement.addEventListener("wheel",A,{passive:!1}),this.update()}}const la=new WeakMap;class o0 extends Dn{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,r){const s=new Wi(this.manager);s.setPath(this.path),s.setResponseType("arraybuffer"),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials),s.load(e,a=>{this.parse(a,t,r)},n,r)}parse(e,t,n){this.decodeDracoFile(e,t,null,null,Ye).catch(n)}decodeDracoFile(e,t,n,r,s=pt){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:r||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:s};return this.decodeGeometry(e,a).then(t)}decodeGeometry(e,t){const n=JSON.stringify(t);if(la.has(e)){const l=la.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let r;const s=this.workerNextTaskID++,a=e.byteLength,o=this._getWorker(s,a).then(l=>(r=l,new Promise((c,u)=>{r._callbacks[s]={resolve:c,reject:u},r.postMessage({type:"decode",id:s,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return o.catch(()=>!0).then(()=>{r&&s&&this._releaseTask(r,s)}),la.set(e,{key:n,promise:o}),o}_createGeometry(e){const t=new Qt;e.index&&t.setIndex(new lt(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const r=e.attributes[n],s=r.name,a=r.array,o=r.itemSize,l=new lt(a,o);s==="color"&&(this._assignVertexColorSpace(l,r.vertexColorSpace),l.normalized=!(a instanceof Float32Array)),t.setAttribute(s,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ye)return;const n=new xe;for(let r=0,s=e.count;r<s;r++)n.fromBufferAttribute(e,r).convertSRGBToLinear(),e.setXYZ(r,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Wi(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((r,s)=>{n.load(e,r,void 0,s)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const r=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const s=l0.toString(),a=["/* draco decoder */",r,"","/* worker */",s.substring(s.indexOf("{")+1,s.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([a]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const r=new Worker(this.workerSourceURL);r._callbacks={},r._taskCosts={},r._taskLoad=0,r.postMessage({type:"init",decoderConfig:this.decoderConfig}),r.onmessage=function(s){const a=s.data;switch(a.type){case"decode":r._callbacks[a.id].resolve(a);break;case"error":r._callbacks[a.id].reject(a);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+a.type+'"')}},this.workerPool.push(r)}else this.workerPool.sort(function(r,s){return r._taskLoad>s._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function l0(){let i,e;onmessage=function(a){const o=a.data;switch(o.type){case"init":i=o.decoderConfig,e=new Promise(function(u){i.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(i)});break;case"decode":const l=o.buffer,c=o.taskConfig;e.then(u=>{const h=u.draco,f=new h.Decoder;try{const p=t(h,f,new Int8Array(l),c),g=p.attributes.map(v=>v.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:o.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:o.id,error:p.message})}finally{h.destroy(f)}});break}};function t(a,o,l,c){const u=c.attributeIDs,h=c.attributeTypes;let f,p;const g=o.GetEncodedGeometryType(l);if(g===a.TRIANGULAR_MESH)f=new a.Mesh,p=o.DecodeArrayToMesh(l,l.byteLength,f);else if(g===a.POINT_CLOUD)f=new a.PointCloud,p=o.DecodeArrayToPointCloud(l,l.byteLength,f);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||f.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const v={index:null,attributes:[]};for(const m in u){const d=self[h[m]];let S,_;if(c.useUniqueIDs)_=u[m],S=o.GetAttributeByUniqueId(f,_);else{if(_=o.GetAttributeId(f,a[u[m]]),_===-1)continue;S=o.GetAttribute(f,_)}const T=r(a,o,f,m,d,S);m==="color"&&(T.vertexColorSpace=c.vertexColorSpace),v.attributes.push(T)}return g===a.TRIANGULAR_MESH&&(v.index=n(a,o,f)),a.destroy(f),v}function n(a,o,l){const u=l.num_faces()*3,h=u*4,f=a._malloc(h);o.GetTrianglesUInt32Array(l,h,f);const p=new Uint32Array(a.HEAPF32.buffer,f,u).slice();return a._free(f),{array:p,itemSize:1}}function r(a,o,l,c,u,h){const f=h.num_components(),g=l.num_points()*f,v=g*u.BYTES_PER_ELEMENT,m=s(a,u),d=a._malloc(v);o.GetAttributeDataArrayForAllPoints(l,h,m,v,d);const S=new u(a.HEAPF32.buffer,d,g).slice();return a._free(d),{name:c,array:S,itemSize:f}}function s(a,o){switch(o){case Float32Array:return a.DT_FLOAT32;case Int8Array:return a.DT_INT8;case Int16Array:return a.DT_INT16;case Int32Array:return a.DT_INT32;case Uint8Array:return a.DT_UINT8;case Uint16Array:return a.DT_UINT16;case Uint32Array:return a.DT_UINT32}}}function oc(i,e){if(e===fh)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===va||e===bc){let t=i.getIndex();if(t===null){const a=[],o=i.getAttribute("position");if(o!==void 0){for(let l=0;l<o.count;l++)a.push(l);i.setIndex(a),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===va)for(let a=1;a<=n;a++)r.push(t.getX(0)),r.push(t.getX(a)),r.push(t.getX(a+1));else for(let a=0;a<n;a++)a%2===0?(r.push(t.getX(a)),r.push(t.getX(a+1)),r.push(t.getX(a+2))):(r.push(t.getX(a+2)),r.push(t.getX(a+1)),r.push(t.getX(a)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class c0 extends Dn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new p0(t)}),this.register(function(t){return new T0(t)}),this.register(function(t){return new y0(t)}),this.register(function(t){return new E0(t)}),this.register(function(t){return new g0(t)}),this.register(function(t){return new v0(t)}),this.register(function(t){return new _0(t)}),this.register(function(t){return new x0(t)}),this.register(function(t){return new d0(t)}),this.register(function(t){return new M0(t)}),this.register(function(t){return new m0(t)}),this.register(function(t){return new S0(t)}),this.register(function(t){return new h0(t)}),this.register(function(t){return new b0(t)}),this.register(function(t){return new w0(t)})}load(e,t,n,r){const s=this;let a;this.resourcePath!==""?a=this.resourcePath:this.path!==""?a=this.path:a=ba.extractUrlBase(e),this.manager.itemStart(e);const o=function(c){r?r(c):console.error(c),s.manager.itemError(e),s.manager.itemEnd(e)},l=new Wi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{s.parse(c,a,function(u){t(u),s.manager.itemEnd(e)},o)}catch(u){o(u)}},n,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const a={},o={},l=new TextDecoder;if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Tu){try{a[We.KHR_BINARY_GLTF]=new A0(e)}catch(h){r&&r(h);return}s=JSON.parse(a[We.KHR_BINARY_GLTF].content)}else s=JSON.parse(l.decode(e));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new H0(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);o[h.name]=h,a[h.name]=!0}if(s.extensionsUsed)for(let u=0;u<s.extensionsUsed.length;++u){const h=s.extensionsUsed[u],f=s.extensionsRequired||[];switch(h){case We.KHR_MATERIALS_UNLIT:a[h]=new f0;break;case We.KHR_DRACO_MESH_COMPRESSION:a[h]=new R0(s,this.dracoLoader);break;case We.KHR_TEXTURE_TRANSFORM:a[h]=new P0;break;case We.KHR_MESH_QUANTIZATION:a[h]=new C0;break;default:f.indexOf(h)>=0&&o[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(a),c.setPlugins(o),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function u0(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const We={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class h0{constructor(e){this.parser=e,this.name=We.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,l=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let c;const u=new xe(16777215);l.color!==void 0&&u.setRGB(...l.color,pt);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new eu(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new vv(u),c.distance=h;break;case"spot":c=new mv(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,kn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),r=Promise.resolve(c),t.cache.add(n,r),r}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],o=(s.extensions&&s.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(l){return n._getNodeRef(t.cache,o,l)})}}class f0{constructor(){this.name=We.KHR_MATERIALS_UNLIT}getMaterialType(){return ii}extendParams(e,t,n){const r=[];e.color=new xe(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const a=s.baseColorFactor;e.color.setRGB(...a,pt),e.opacity=a[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,Ye))}return Promise.all(r)}}class d0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class p0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];if(a.clearcoatFactor!==void 0&&(t.clearcoat=a.clearcoatFactor),a.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",a.clearcoatTexture)),a.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=a.clearcoatRoughnessFactor),a.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",a.clearcoatRoughnessTexture)),a.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",a.clearcoatNormalTexture)),a.clearcoatNormalTexture.scale!==void 0)){const o=a.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new me(o,o)}return Promise.all(s)}}class m0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.iridescenceFactor!==void 0&&(t.iridescence=a.iridescenceFactor),a.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",a.iridescenceTexture)),a.iridescenceIor!==void 0&&(t.iridescenceIOR=a.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),a.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=a.iridescenceThicknessMinimum),a.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=a.iridescenceThicknessMaximum),a.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",a.iridescenceThicknessTexture)),Promise.all(s)}}class g0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const a=r.extensions[this.name];return a.sheenColorFactor!==void 0&&t.sheenColor.setRGB(...a.sheenColorFactor,pt),a.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=a.sheenRoughnessFactor),a.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",a.sheenColorTexture,Ye)),a.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",a.sheenRoughnessTexture)),Promise.all(s)}}class v0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.transmissionFactor!==void 0&&(t.transmission=a.transmissionFactor),a.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",a.transmissionTexture)),Promise.all(s)}}class _0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.thickness=a.thicknessFactor!==void 0?a.thicknessFactor:0,a.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",a.thicknessTexture)),t.attenuationDistance=a.attenuationDistance||1/0;const o=a.attenuationColor||[1,1,1];return t.attenuationColor=new xe().setRGB(...o,pt),Promise.all(s)}}class x0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class M0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];t.specularIntensity=a.specularFactor!==void 0?a.specularFactor:1,a.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",a.specularTexture));const o=a.specularColorFactor||[1,1,1];return t.specularColor=new xe().setRGB(...o,pt),a.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",a.specularColorTexture,Ye)),Promise.all(s)}}class S0{constructor(e){this.parser=e,this.name=We.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Ln}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],a=r.extensions[this.name];return a.anisotropyStrength!==void 0&&(t.anisotropy=a.anisotropyStrength),a.anisotropyRotation!==void 0&&(t.anisotropyRotation=a.anisotropyRotation),a.anisotropyTexture!==void 0&&s.push(n.assignTexture(t,"anisotropyMap",a.anisotropyTexture)),Promise.all(s)}}class T0{constructor(e){this.parser=e,this.name=We.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,a)}}class y0{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class E0{constructor(e){this.parser=e,this.name=We.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const a=s.extensions[t],o=r.images[a.source];let l=n.textureLoader;if(o.uri){const c=n.options.manager.getHandler(o.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,a.source,l);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class b0{constructor(e){this.name=We.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(o){const l=r.byteOffset||0,c=r.byteLength||0,u=r.count,h=r.byteStride,f=new Uint8Array(o,l,c);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(u,h,f,r.mode,r.filter).then(function(p){return p.buffer}):a.ready.then(function(){const p=new ArrayBuffer(u*h);return a.decodeGltfBuffer(new Uint8Array(p),u,h,f,r.mode,r.filter),p})})}else return null}}class w0{constructor(e){this.name=We.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const c of r.primitives)if(c.mode!==$t.TRIANGLES&&c.mode!==$t.TRIANGLE_STRIP&&c.mode!==$t.TRIANGLE_FAN&&c.mode!==void 0)return null;const a=n.extensions[this.name].attributes,o=[],l={};for(const c in a)o.push(this.parser.getDependency("accessor",a[c]).then(u=>(l[c]=u,l[c])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],f=c[0].count,p=[];for(const g of h){const v=new _e,m=new C,d=new Jt,S=new C(1,1,1),_=new Jg(g.geometry,g.material,f);for(let T=0;T<f;T++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,T),l.ROTATION&&d.fromBufferAttribute(l.ROTATION,T),l.SCALE&&S.fromBufferAttribute(l.SCALE,T),_.setMatrixAt(T,v.compose(m,d,S));for(const T in l)T!=="TRANSLATION"&&T!=="ROTATION"&&T!=="SCALE"&&g.geometry.setAttribute(T,l[T]);rt.prototype.copy.call(_,g),this.parser.assignFinalMaterial(_),p.push(_)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const Tu="glTF",or=12,lc={JSON:1313821514,BIN:5130562};class A0{constructor(e){this.name=We.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,or),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Tu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const r=this.header.length-or,s=new DataView(e,or);let a=0;for(;a<r;){const o=s.getUint32(a,!0);a+=4;const l=s.getUint32(a,!0);if(a+=4,l===lc.JSON){const c=new Uint8Array(e,or+a,o);this.content=n.decode(c)}else if(l===lc.BIN){const c=or+a;this.body=e.slice(c,c+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class R0{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=We.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},l={},c={};for(const u in a){const h=Ra[u]||u.toLowerCase();o[h]=a[u]}for(const u in e.attributes){const h=Ra[u]||u.toLowerCase();if(a[u]!==void 0){const f=n.accessors[e.attributes[u]],p=Ni[f.componentType];c[h]=p.name,l[h]=f.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(h){r.decodeDracoFile(u,function(f){for(const p in f.attributes){const g=f.attributes[p],v=l[p];v!==void 0&&(g.normalized=v)}h(f)},o,c)})})}}class P0{constructor(){this.name=We.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class C0{constructor(){this.name=We.KHR_MESH_QUANTIZATION}}class yu extends Sr{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let a=0;a!==r;a++)t[a]=n[s+a];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=o*2,c=o*3,u=r-t,h=(n-t)/u,f=h*h,p=f*h,g=e*c,v=g-c,m=-2*p+3*f,d=p-f,S=1-m,_=d-f+h;for(let T=0;T!==o;T++){const R=a[v+T+o],w=a[v+T+l]*u,b=a[g+T+o],D=a[g+T]*u;s[T]=S*R+_*w+m*b+d*D}return s}}const L0=new Jt;class D0 extends yu{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return L0.fromArray(s).normalize().toArray(s),s}}const $t={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},Ni={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},cc={9728:be,9729:Ke,9984:pa,9985:_c,9986:ts,9987:Cn},uc={33071:xt,33648:rs,10497:fn},ca={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ra={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Hn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},I0={CUBICSPLINE:void 0,LINEAR:Bi,STEP:mr},ua={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function U0(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new _s({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:hn})),i.DefaultMaterial}function ei(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function kn(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function N0(i,e,t){let n=!1,r=!1,s=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(r=!0),h.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const a=[],o=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const f=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):i.attributes.position;a.push(f)}if(r){const f=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):i.attributes.normal;o.push(f)}if(s){const f=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):i.attributes.color;l.push(f)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],f=c[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=h),s&&(i.morphAttributes.color=f),i.morphTargetsRelative=!0,i})}function F0(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function O0(i){let e;const t=i.extensions&&i.extensions[We.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+ha(t.attributes):e=i.indices+":"+ha(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,r=i.targets.length;n<r;n++)e+=":"+ha(i.targets[n]);return e}function ha(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Pa(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function B0(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const z0=new _e;class H0{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new u0,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,r=!1,s=-1;typeof navigator<"u"&&(n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1),typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Qc(this.options.manager):this.textureLoader=new xv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Wi(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(a){const o={scene:a[0][r.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:r.asset,parser:n,userData:{}};ei(s,o,r),kn(o,r),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(o)})).then(function(){e(o)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const a=t[r].joints;for(let o=0,l=a.length;o<l;o++)e[a[o]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const a=e[r];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(n[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(a,o)=>{const l=this.associations.get(a);l!=null&&this.associations.set(o,l);for(const[c,u]of a.children.entries())s(u,o.children[c])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this._invokeOne(function(s){return s.loadNode&&s.loadNode(t)});break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:if(r=this._invokeOne(function(s){return s!=this&&s.getDependency&&s.getDependency(e,t)}),!r)throw new Error("Unknown type: "+e);break}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,a){return n.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[We.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,a){n.load(ba.resolveURL(t.uri,r.path),s,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0){const a=ca[r.type],o=Ni[r.componentType],l=r.normalized===!0,c=new o(r.count*a);return Promise.resolve(new lt(c,a,l))}const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(a){const o=a[0],l=ca[r.type],c=Ni[r.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,f=r.byteOffset||0,p=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,g=r.normalized===!0;let v,m;if(p&&p!==h){const d=Math.floor(f/p),S="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+d+":"+r.count;let _=t.cache.get(S);_||(v=new c(o,d*p,r.count*p/u),_=new qg(v,p/u),t.cache.add(S,_)),m=new Oa(_,l,f%p/u,g)}else o===null?v=new c(r.count*l):v=new c(o,f,r.count*l),m=new lt(v,l,g);if(r.sparse!==void 0){const d=ca.SCALAR,S=Ni[r.sparse.indices.componentType],_=r.sparse.indices.byteOffset||0,T=r.sparse.values.byteOffset||0,R=new S(a[1],_,r.sparse.count*d),w=new c(a[2],T,r.sparse.count*l);o!==null&&(m=new lt(m.array.slice(),m.itemSize,m.normalized));for(let b=0,D=R.length;b<D;b++){const x=R[b];if(m.setX(x,w[b*l]),l>=2&&m.setY(x,w[b*l+1]),l>=3&&m.setZ(x,w[b*l+2]),l>=4&&m.setW(x,w[b*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return m})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,a=t.images[s];let o=this.textureLoader;if(a.uri){const l=n.manager.getHandler(a.uri);l!==null&&(o=l)}return this.loadTextureImage(e,s,o)}loadTextureImage(e,t,n){const r=this,s=this.json,a=s.textures[e],o=s.images[t],l=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=a.name||o.name||"",u.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(u.name=o.uri);const f=(s.samplers||{})[a.sampler]||{};return u.magFilter=cc[f.magFilter]||Ke,u.minFilter=cc[f.minFilter]||Cn,u.wrapS=uc[f.wrapS]||fn,u.wrapT=uc[f.wrapT]||fn,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const a=r.images[e],o=self.URL||self.webkitURL;let l=a.uri||"",c=!1;if(a.bufferView!==void 0)l=n.getDependency("bufferView",a.bufferView).then(function(h){c=!0;const f=new Blob([h],{type:a.mimeType});return l=o.createObjectURL(f),l});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(f,p){let g=f;t.isImageBitmapLoader===!0&&(g=function(v){const m=new dt(v);m.needsUpdate=!0,f(m)}),t.load(ba.resolveURL(h,s.path),g,void 0,p)})}).then(function(h){return c===!0&&o.revokeObjectURL(l),h.userData.mimeType=a.mimeType||B0(a.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(a){if(!a)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(a=a.clone(),a.channel=n.texCoord),s.extensions[We.KHR_TEXTURE_TRANSFORM]){const o=n.extensions!==void 0?n.extensions[We.KHR_TEXTURE_TRANSFORM]:void 0;if(o){const l=s.associations.get(a);a=s.extensions[We.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),s.associations.set(a,l)}}return r!==void 0&&(a.colorSpace=r),e[t]=a,a})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){const o="PointsMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new jc,Yt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(o,l)),n=l}else if(e.isLine){const o="LineBasicMaterial:"+n.uuid;let l=this.cache.get(o);l||(l=new Xc,Yt.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(o,l)),n=l}if(r||s||a){let o="ClonedMaterial:"+n.uuid+":";r&&(o+="derivative-tangents:"),s&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let l=this.cache.get(o);l||(l=n.clone(),s&&(l.vertexColors=!0),a&&(l.flatShading=!0),r&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(o,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return _s}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let a;const o={},l=s.extensions||{},c=[];if(l[We.KHR_MATERIALS_UNLIT]){const h=r[We.KHR_MATERIALS_UNLIT];a=h.getMaterialType(),c.push(h.extendParams(o,s,t))}else{const h=s.pbrMetallicRoughness||{};if(o.color=new xe(1,1,1),o.opacity=1,Array.isArray(h.baseColorFactor)){const f=h.baseColorFactor;o.color.setRGB(f[0],f[1],f[2],pt),o.opacity=f[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(o,"map",h.baseColorTexture,Ye)),o.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,o.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(o,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(o,"roughnessMap",h.metallicRoughnessTexture))),a=this._invokeOne(function(f){return f.getMaterialType&&f.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(f){return f.extendMaterialParams&&f.extendMaterialParams(e,o)})))}s.doubleSided===!0&&(o.side=Ot);const u=s.alphaMode||ua.OPAQUE;if(u===ua.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,u===ua.MASK&&(o.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&a!==ii&&(c.push(t.assignTexture(o,"normalMap",s.normalTexture)),o.normalScale=new me(1,1),s.normalTexture.scale!==void 0)){const h=s.normalTexture.scale;o.normalScale.set(h,h)}return s.occlusionTexture!==void 0&&a!==ii&&(c.push(t.assignTexture(o,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&a!==ii&&(o.emissive=new xe().setRGB(...s.emissiveFactor,pt)),s.emissiveTexture!==void 0&&a!==ii&&c.push(t.assignTexture(o,"emissiveMap",s.emissiveTexture,Ye)),Promise.all(c).then(function(){const h=new a(o);return s.name&&(h.name=s.name),kn(h,s),t.associations.set(h,{materials:e}),s.extensions&&ei(r,h,s),h})}createUniqueName(e){const t=$e.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(o){return n[We.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(l){return hc(l,o,t)})}const a=[];for(let o=0,l=e.length;o<l;o++){const c=e[o],u=O0(c),h=r[u];if(h)a.push(h.promise);else{let f;c.extensions&&c.extensions[We.KHR_DRACO_MESH_COMPRESSION]?f=s(c):f=hc(new Qt,c,t),r[u]={primitive:c,promise:f},a.push(f)}}return Promise.all(a)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],a=s.primitives,o=[];for(let l=0,c=a.length;l<c;l++){const u=a[l].material===void 0?U0(this.cache):this.getDependency("material",a[l].material);o.push(u)}return o.push(t.loadGeometries(a)),Promise.all(o).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=a[p];let d;const S=c[p];if(m.mode===$t.TRIANGLES||m.mode===$t.TRIANGLE_STRIP||m.mode===$t.TRIANGLE_FAN||m.mode===void 0)d=s.isSkinnedMesh===!0?new Kg(v,S):new Bt(v,S),d.isSkinnedMesh===!0&&d.normalizeSkinWeights(),m.mode===$t.TRIANGLE_STRIP?d.geometry=oc(d.geometry,bc):m.mode===$t.TRIANGLE_FAN&&(d.geometry=oc(d.geometry,va));else if(m.mode===$t.LINES)d=new Qg(v,S);else if(m.mode===$t.LINE_STRIP)d=new za(v,S);else if(m.mode===$t.LINE_LOOP)d=new ev(v,S);else if(m.mode===$t.POINTS)d=new tv(v,S);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(d.geometry.morphAttributes).length>0&&F0(d,s),d.name=t.createUniqueName(s.name||"mesh_"+e),kn(d,s),m.extensions&&ei(r,d,m),t.assignFinalMaterial(d),h.push(d)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return s.extensions&&ei(r,h[0],s),h[0];const f=new ri;s.extensions&&ei(r,f,s),t.associations.set(f,{meshes:e});for(let p=0,g=h.length;p<g;p++)f.add(h[p]);return f})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Dt(Ac.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Na(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),kn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let r=0,s=t.joints.length;r<s;r++)n.push(this._loadNodeShallow(t.joints[r]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(r){const s=r.pop(),a=r,o=[],l=[];for(let c=0,u=a.length;c<u;c++){const h=a[c];if(h){o.push(h);const f=new _e;s!==null&&f.fromArray(s.array,c*16),l.push(f)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Ba(o,l)})}loadAnimation(e){const t=this.json,n=this,r=t.animations[e],s=r.name?r.name:"animation_"+e,a=[],o=[],l=[],c=[],u=[];for(let h=0,f=r.channels.length;h<f;h++){const p=r.channels[h],g=r.samplers[p.sampler],v=p.target,m=v.node,d=r.parameters!==void 0?r.parameters[g.input]:g.input,S=r.parameters!==void 0?r.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",d)),l.push(this.getDependency("accessor",S)),c.push(g),u.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const f=h[0],p=h[1],g=h[2],v=h[3],m=h[4],d=[];for(let S=0,_=f.length;S<_;S++){const T=f[S],R=p[S],w=g[S],b=v[S],D=m[S];if(T===void 0)continue;T.updateMatrix&&T.updateMatrix();const x=n._createAnimationTracks(T,R,w,b,D);if(x)for(let y=0;y<x.length;y++)d.push(x[y])}return new lv(s,void 0,d)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const a=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let l=0,c=r.weights.length;l<c;l++)o.morphTargetInfluences[l]=r.weights[l]}),a})}loadNode(e){const t=this.json,n=this,r=t.nodes[e],s=n._loadNodeShallow(e),a=[],o=r.children||[];for(let c=0,u=o.length;c<u;c++)a.push(n.getDependency("node",o[c]));const l=r.skin===void 0?Promise.resolve(null):n.getDependency("skin",r.skin);return Promise.all([s,Promise.all(a),l]).then(function(c){const u=c[0],h=c[1],f=c[2];f!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(f,z0)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,r=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const s=t.nodes[e],a=s.name?r.createUniqueName(s.name):"",o=[],l=r._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&o.push(l),s.camera!==void 0&&o.push(r.getDependency("camera",s.camera).then(function(c){return r._getNodeRef(r.cameraCache,s.camera,c)})),r._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){o.push(c)}),this.nodeCache[e]=Promise.all(o).then(function(c){let u;if(s.isBone===!0?u=new Wc:c.length>1?u=new ri:c.length===1?u=c[0]:u=new rt,u!==c[0])for(let h=0,f=c.length;h<f;h++)u.add(c[h]);if(s.name&&(u.userData.name=s.name,u.name=a),kn(u,s),s.extensions&&ei(n,u,s),s.matrix!==void 0){const h=new _e;h.fromArray(s.matrix),u.applyMatrix4(h)}else s.translation!==void 0&&u.position.fromArray(s.translation),s.rotation!==void 0&&u.quaternion.fromArray(s.rotation),s.scale!==void 0&&u.scale.fromArray(s.scale);return r.associations.has(u)||r.associations.set(u,{}),r.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],r=this,s=new ri;n.name&&(s.name=r.createUniqueName(n.name)),kn(s,n),n.extensions&&ei(t,s,n);const a=n.nodes||[],o=[];for(let l=0,c=a.length;l<c;l++)o.push(r.getDependency("node",a[l]));return Promise.all(o).then(function(l){for(let u=0,h=l.length;u<h;u++)s.add(l[u]);const c=u=>{const h=new Map;for(const[f,p]of r.associations)(f instanceof Yt||f instanceof dt)&&h.set(f,p);return u.traverse(f=>{const p=r.associations.get(f);p!=null&&h.set(f,p)}),h};return r.associations=c(s),s})}_createAnimationTracks(e,t,n,r,s){const a=[],o=e.name?e.name:e.uuid,l=[];Hn[s.path]===Hn.weights?e.traverse(function(f){f.morphTargetInfluences&&l.push(f.name?f.name:f.uuid)}):l.push(o);let c;switch(Hn[s.path]){case Hn.weights:c=Gi;break;case Hn.rotation:c=li;break;case Hn.position:case Hn.scale:c=ki;break;default:switch(n.itemSize){case 1:c=Gi;break;case 2:case 3:default:c=ki;break}break}const u=r.interpolation!==void 0?I0[r.interpolation]:Bi,h=this._getArrayFromAccessor(n);for(let f=0,p=l.length;f<p;f++){const g=new c(l[f]+"."+Hn[s.path],t.array,h,u);r.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),a.push(g)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Pa(t.constructor),r=new Float32Array(t.length);for(let s=0,a=t.length;s<a;s++)r[s]=t[s]*n;t=r}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const r=this instanceof li?D0:yu;return new r(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function G0(i,e,t){const n=e.attributes,r=new pn;if(n.POSITION!==void 0){const o=t.json.accessors[n.POSITION],l=o.min,c=o.max;if(l!==void 0&&c!==void 0){if(r.set(new C(l[0],l[1],l[2]),new C(c[0],c[1],c[2])),o.normalized){const u=Pa(Ni[o.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const o=new C,l=new C;for(let c=0,u=s.length;c<u;c++){const h=s[c];if(h.POSITION!==void 0){const f=t.json.accessors[h.POSITION],p=f.min,g=f.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),f.normalized){const v=Pa(Ni[f.componentType]);l.multiplyScalar(v)}o.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(o)}i.boundingBox=r;const a=new mn;r.getCenter(a.center),a.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=a}function hc(i,e,t){const n=e.attributes,r=[];function s(a,o){return t.getDependency("accessor",a).then(function(l){i.setAttribute(o,l)})}for(const a in n){const o=Ra[a]||a.toLowerCase();o in i.attributes||r.push(s(n[a],o))}if(e.indices!==void 0&&!i.index){const a=t.getDependency("accessor",e.indices).then(function(o){i.setIndex(o)});r.push(a)}return Vt.workingColorSpace!==pt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Vt.workingColorSpace}" not supported.`),kn(i,e),G0(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?N0(i,e.targets,t):i})}class k0 extends dv{constructor(e){super(e),this.type=jt}parse(e){const a=function(D,x){switch(D){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(x||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(x||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(x||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(x||""))}},u=`
`,h=function(D,x,y){x=x||1024;let q=D.pos,I=-1,N=0,F="",U=String.fromCharCode.apply(null,new Uint16Array(D.subarray(q,q+128)));for(;0>(I=U.indexOf(u))&&N<x&&q<D.byteLength;)F+=U,N+=U.length,q+=128,U+=String.fromCharCode.apply(null,new Uint16Array(D.subarray(q,q+128)));return-1<I?(D.pos+=N+I+1,F+U.slice(0,I)):!1},f=function(D){const x=/^#\?(\S+)/,y=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,k=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,q=/^\s*FORMAT=(\S+)\s*$/,I=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,N={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let F,U;for((D.pos>=D.byteLength||!(F=h(D)))&&a(1,"no header found"),(U=F.match(x))||a(3,"bad initial token"),N.valid|=1,N.programtype=U[1],N.string+=F+`
`;F=h(D),F!==!1;){if(N.string+=F+`
`,F.charAt(0)==="#"){N.comments+=F+`
`;continue}if((U=F.match(y))&&(N.gamma=parseFloat(U[1])),(U=F.match(k))&&(N.exposure=parseFloat(U[1])),(U=F.match(q))&&(N.valid|=2,N.format=U[1]),(U=F.match(I))&&(N.valid|=4,N.height=parseInt(U[1],10),N.width=parseInt(U[2],10)),N.valid&2&&N.valid&4)break}return N.valid&2||a(3,"missing format specifier"),N.valid&4||a(3,"missing image size specifier"),N},p=function(D,x,y){const k=x;if(k<8||k>32767||D[0]!==2||D[1]!==2||D[2]&128)return new Uint8Array(D);k!==(D[2]<<8|D[3])&&a(3,"wrong scanline width");const q=new Uint8Array(4*x*y);q.length||a(4,"unable to allocate buffer space");let I=0,N=0;const F=4*k,U=new Uint8Array(4),B=new Uint8Array(F);let Y=y;for(;Y>0&&N<D.byteLength;){N+4>D.byteLength&&a(1),U[0]=D[N++],U[1]=D[N++],U[2]=D[N++],U[3]=D[N++],(U[0]!=2||U[1]!=2||(U[2]<<8|U[3])!=k)&&a(3,"bad rgbe scanline format");let ee=0,$;for(;ee<F&&N<D.byteLength;){$=D[N++];const W=$>128;if(W&&($-=128),($===0||ee+$>F)&&a(3,"bad scanline data"),W){const ie=D[N++];for(let ue=0;ue<$;ue++)B[ee++]=ie}else B.set(D.subarray(N,N+$),ee),ee+=$,N+=$}const V=k;for(let W=0;W<V;W++){let ie=0;q[I]=B[W+ie],ie+=k,q[I+1]=B[W+ie],ie+=k,q[I+2]=B[W+ie],ie+=k,q[I+3]=B[W+ie],I+=4}Y--}return q},g=function(D,x,y,k){const q=D[x+3],I=Math.pow(2,q-128)/255;y[k+0]=D[x+0]*I,y[k+1]=D[x+1]*I,y[k+2]=D[x+2]*I,y[k+3]=1},v=function(D,x,y,k){const q=D[x+3],I=Math.pow(2,q-128)/255;y[k+0]=Ir.toHalfFloat(Math.min(D[x+0]*I,65504)),y[k+1]=Ir.toHalfFloat(Math.min(D[x+1]*I,65504)),y[k+2]=Ir.toHalfFloat(Math.min(D[x+2]*I,65504)),y[k+3]=Ir.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const d=f(m),S=d.width,_=d.height,T=p(m.subarray(m.pos),S,_);let R,w,b;switch(this.type){case ke:b=T.length/4;const D=new Float32Array(b*4);for(let y=0;y<b;y++)g(T,y*4,D,y*4);R=D,w=ke;break;case jt:b=T.length/4;const x=new Uint16Array(b*4);for(let y=0;y<b;y++)v(T,y*4,x,y*4);R=x,w=jt;break;default:throw new Error("THREE.RGBELoader: unsupported type: ",this.type)}return{width:S,height:_,data:R,header:d.string,gamma:d.gamma,exposure:d.exposure,type:w}}setDataType(e){return this.type=e,this}load(e,t,n,r){function s(a,o){switch(a.type){case ke:case jt:a.colorSpace=pt,a.minFilter=Ke,a.magFilter=Ke,a.generateMipmaps=!1,a.flipY=!0;break}t&&t(a,o)}return super.load(e,s,n,r)}}function V0(i,e,t){return Math.max(e,Math.min(t,i))}const es=W0();function W0(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function X0(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=V0(i,-65504,65504),es.floatView[0]=i;const e=es.uint32View[0],t=e>>23&511;return es.baseTable[t]+((e&8388607)>>es.shiftTable[t])}const j0={distance:10,thickness:10,denoiseIterations:1,denoiseKernel:2,denoiseDiffuse:10,denoiseSpecular:10,depthPhi:2,normalPhi:50,roughnessPhi:1,specularPhi:1,envBlur:.5,importanceSampling:!0,steps:20,refineSteps:5,resolutionScale:1,missedRays:!1},lr=Math.PI/180;function q0({canvas:i,controlsEl:e,loadingEl:t}){const n=new ya;n.matrixWorldAutoUpdate=!1;const r=new Dt(40,window.innerWidth/window.innerHeight,.01,250);n.add(r);const s=new Vc({canvas:i,powerPreference:"high-performance",premultipliedAlpha:!1,stencil:!1,antialias:!1,alpha:!1,preserveDrawingBuffer:!0});s.autoClear=!1,s.setSize(window.innerWidth,window.innerHeight);const a=new o_(s,{frameBufferType:jt}),o=new a0(r,e);o.enableDamping=!0,r.position.set(-10.6,7.4,18.8),o.target.set(0,5.4,0),o.maxPolarAngle=Math.PI/2,o.minDistance=5;const l={yaw:55,pitch:27,intensity:2.5},c=new eu(16777215,l.intensity);c.castShadow=!0,c.shadow.mapSize.width=8192,c.shadow.mapSize.height=8192,c.shadow.camera.near=50,c.shadow.camera.far=500,c.shadow.bias=-1e-4;const u=100;if(c.shadow.camera.left=-u,c.shadow.camera.bottom=-u,c.shadow.camera.right=u,c.shadow.camera.top=u,c.updateMatrixWorld(),s.shadowMap.enabled=!0,s.shadowMap.autoUpdate=!1,s.shadowMap.needsUpdate=!0,n.getObjectByProperty("isDirectionalLight",!0)){const U=new Ui(n,r);a.addPass(U)}const h=()=>{c.position.x=Math.sin(l.yaw*lr)*Math.cos(l.pitch*lr),c.position.y=Math.sin(l.pitch*lr),c.position.z=Math.cos(l.yaw*lr)*Math.cos(l.pitch*lr),c.position.normalize().multiplyScalar(75),c.updateMatrixWorld(),s.shadowMap.needsUpdate=!0};h();const f=new xe(9483509);n.background=f;const p=new k0,g=new c0,v=new o0;v.setDecoderConfig({type:"js"}),v.setDecoderPath("/draco/"),g.setDRACOLoader(v);const m=new tu;let d=0,S=!1,_=null,T=null,R=!1;const w=()=>{if(R)return;r.aspect=window.innerWidth/window.innerHeight,r.updateProjectionMatrix();const U=window.devicePixelRatio;s.setPixelRatio(Math.min(2,U)),s.setSize(window.innerWidth,window.innerHeight),a.setSize(window.innerWidth,window.innerHeight)},b=()=>{if(R)return;const U=m.getDelta();o.enableDamping&&(o.dampingFactor=.075*120*Math.max(1/1e3,U)),o.update(),r.updateMatrixWorld(),_&&_.updateMatrixWorld(),n.updateMatrixWorld(),S?a.render():(s.clear(),s.render(n,r)),d=window.requestAnimationFrame(b)},D=U=>{U.type=jt;const B=new Uint16Array(U.image.data.length),Y=U.image.data;for(let ee=0;ee<B.length;ee++)B[ee]=X0(Y[ee]);U.image.data=B},x=U=>{_&&(_.removeFromParent(),_.traverse(fe=>{fe.isMesh&&(fe.geometry.dispose(),fe.material.dispose())})),U.scene.traverse(fe=>{fe.isMesh&&(fe.castShadow=fe.receiveShadow=!0,fe.material.depthWrite=!0),fe.frustumCulled=!1});const B=new pn;B.setFromObject(U.scene);const Y=B.max.y-B.min.y,ee=Math.max(B.max.x-B.min.x,B.max.z-B.min.z),$=15,W=45/ee,ie=$/Y;U.scene.scale.multiplyScalar(Math.min(W,ie)),U.scene.updateMatrixWorld(),B.setFromObject(U.scene);const ue=new C;B.getCenter(ue),ue.y=B.min.y,U.scene.position.sub(ue),n.add(U.scene),n.updateMatrixWorld(),_=U.scene,T&&T.reset(),requestAnimationFrame(h)},y=()=>{const U=new Bt(new ms(400,400),new _s({metalness:0,roughness:0}));U.rotation.x=-Math.PI/2,U.receiveShadow=!0,U.name="baseplate",U.updateMatrixWorld(),n.add(U),n.updateMatrixWorld()},k=async()=>{s.toneMapping=gc,s.toneMappingExposure=1.5;const U=new xu(n,r);a.addPass(U);const B=new Ya(n,r,U,{fullAccumulate:!0});T=new Su(a,n,r,{...j0,velocityDepthNormalPass:U});const Y=new X_({intensity:1,mipmapBlur:!0,luminanceSmoothing:.5,luminanceThreshold:.75,kernelSize:xs.MEDIUM}),ee=new Q_({darkness:.8,offset:.3}),$=await new ex().load("/lut_v2.3dl");if(R)return;D($);const V=new K_($),W=new $_;W.mode=Wt.ACES_FILMIC;const ie=new r0({sharpness:.75});a.addPass(new Jr(r,T,W)),a.addPass(new Jr(r,B)),a.addPass(new Jr(r,ie,ee)),a.addPass(new Jr(r,Y,V)),S=!0,w()},q=new Promise((U,B)=>{p.load("/hdr/spree_bank_1k.hdr",Y=>{n.environment?.dispose(),Y.mapping=pr,n.environment=Y,U(Y)},void 0,B)}),I=new Promise((U,B)=>{g.load("/gltf/squid_game.optimized.glb",U,void 0,B)}),N=Jc,F=(U,B,Y)=>{if(!t||R)return;const $=Math.round(B/(Y||1)*100);t.textContent=$+"%"};return N.onProgress=F,Promise.all([q,I]).then(async([,U])=>{R||(y(),x(U),await k(),!R&&t&&(t.textContent="100%",setTimeout(()=>{t.classList.add("is-done"),t.textContent=""},150)))}).catch(U=>{console.error(U),t&&(t.textContent="Error")}),b(),window.addEventListener("resize",w),()=>{R=!0,window.removeEventListener("resize",w),cancelAnimationFrame(d),o.dispose(),a.dispose(),s.dispose(),v.dispose(),n.environment?.dispose(),n.traverse(U=>{U.isMesh&&(U.geometry?.dispose(),U.material?.dispose?.())})}}q0({canvas:document.querySelector(".webgl"),controlsEl:document.querySelector("#orbitControlsDomElem"),loadingEl:document.querySelector("#loading")});
