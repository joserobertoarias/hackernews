"use strict";(self.webpackChunkhackernewsapp=self.webpackChunkhackernewsapp||[]).push([[592],{8650:(m,_,o)=>{o.d(_,{g:()=>l});var e=o(8256);let l=(()=>{class s{constructor(){this.myList=[]}saveSelectQuery(t){localStorage.removeItem("HackerNewsSelectQuery"),localStorage.setItem("HackerNewsSelectQuery",t)}getSelectQuery(){return localStorage.getItem("HackerNewsSelectQuery")}addMyFavorite(t){this.myList=JSON.parse(localStorage.getItem("HackerNewsmyList"))||[],null!=this.myList&&(this.myList.find(i=>i.story_id===t.story_id)||(this.myList.push(t),localStorage.removeItem("HackerNewsmyList"),localStorage.setItem("HackerNewsmyList",JSON.stringify(this.myList))))}deleteFavorite(t){if(this.myList=JSON.parse(localStorage.getItem("HackerNewsmyList"))||[],null!=this.myList){let i=this.myList.findIndex(a=>a.story_id===t.story_id);-1!=i&&(this.myList.splice(i,1),localStorage.removeItem("HackerNewsmyList"),localStorage.setItem("HackerNewsmyList",JSON.stringify(this.myList)))}}getMyFavorits(){return this.myList=JSON.parse(localStorage.getItem("HackerNewsmyList"))||[],this.myList}isInMyFavorites(t){let i=!1;return null!==localStorage.getItem("HackerNewsmyList")&&(this.myList=JSON.parse(localStorage.getItem("HackerNewsmyList"))||[],null!=this.myList&&null!=t&&-1!=this.myList.findIndex(d=>d.story_id===t.story_id)&&(i=!0)),i}}return s.\u0275fac=function(t){return new(t||s)},s.\u0275prov=e.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},8330:(m,_,o)=>{o.d(_,{w:()=>i});var e=o(8256),l=o(8650),s=o(6895);function n(a,d){1&a&&(e.TgZ(0,"div"),e._UZ(1,"i",12),e.qZA())}function t(a,d){1&a&&(e.TgZ(0,"div"),e._UZ(1,"i",13),e.qZA())}let i=(()=>{class a{constructor(r){this.localStorageServie=r}ngOnChanges(r){this.item.myfave=this.localStorageServie.isInMyFavorites(this.item)}ngOnInit(){}goToUrl(r){window.open(r,"_blank")}save(r){0==r.myfave?(r.myfave=!0,this.localStorageServie.addMyFavorite(r)):(r.myfave=!1,this.localStorageServie.deleteFavorite(r))}}return a.\u0275fac=function(r){return new(r||a)(e.Y36(l.g))},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-card-news"]],inputs:{item:"item"},features:[e.TTD],decls:21,vars:5,consts:[[1,"col"],[1,"card"],[1,"row","g-0"],[1,"col-md-10"],[1,"card-body",3,"click"],[1,"card-title"],[1,"fa-regular","fa-clock"],[1,"card-text"],[1,"col-md-2"],[1,"text-center"],[1,"hearth",3,"click"],[4,"ngIf"],[1,"fa-solid","fa-heart"],[1,"fa-regular","fa-heart"]],template:function(r,c){1&r&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4),e.NdJ("click",function(){return c.goToUrl(c.item.story_url)}),e.TgZ(5,"h5",5)(6,"span"),e._UZ(7,"i",6),e.qZA(),e._uU(8," create at "),e.TgZ(9,"span"),e._uU(10),e.qZA(),e._uU(11," by "),e.TgZ(12,"span"),e._uU(13),e.qZA()(),e.TgZ(14,"p",7),e._uU(15),e.qZA()()(),e.TgZ(16,"div",8)(17,"div",9)(18,"span",10),e.NdJ("click",function(){return c.save(c.item)}),e.YNc(19,n,2,0,"div",11),e.YNc(20,t,2,0,"div",11),e.qZA()()()()()()),2&r&&(e.xp6(10),e.Oqu(c.item.created_at),e.xp6(3),e.Oqu(c.item.author),e.xp6(2),e.Oqu(c.item.story_title),e.xp6(4),e.Q6J("ngIf",c.item.myfave),e.xp6(1),e.Q6J("ngIf",!c.item.myfave))},dependencies:[s.O5],styles:[".card-title[_ngcontent-%COMP%]{font-size:11px;color:gray}.card-text[_ngcontent-%COMP%]{font-weight:700;color:#686173;font-size:13px}.card-body[_ngcontent-%COMP%]{cursor:pointer}.hearth[_ngcontent-%COMP%]{color:red;font-size:58px;cursor:pointer}.card[_ngcontent-%COMP%]:hover{opacity:25%}"]}),a})()},419:(m,_,o)=>{o.d(_,{T:()=>s});var e=o(6895),l=o(8256);let s=(()=>{class n{}return n.\u0275fac=function(i){return new(i||n)},n.\u0275mod=l.oAB({type:n}),n.\u0275inj=l.cJS({imports:[e.ez]}),n})()}}]);