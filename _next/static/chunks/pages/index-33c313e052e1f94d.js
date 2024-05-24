(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(5701)}])},5701:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return b}});var n=t(5893),r=t(7294),s=t(9008),l=t.n(s),i=t(8100);let c=e=>{let a="9Za7WVu7Pszdc5BbahIqKCfm5KaXnDYywmimzdft";if(!a)throw Error("API key is not defined");return fetch(e,{headers:new Headers({"X-API-KEY":a})}).then(e=>{if(!e.ok)throw Error("ネットワークの接続がありません？");return e.json()})};var o=e=>{let{onChange:a}=e,{data:t,error:s}=(0,i.ZP)("https://opendata.resas-portal.go.jp/api/v1/prefectures",c),[l,o]=(0,r.useState)([]);if(console.log("PrefCheckbox data:",t),(0,r.useEffect)(()=>{console.log("useEffect triggered:",t)},[t]),s)return(0,n.jsx)("div",{children:"エラーが発生しました。"});if(!t)return(0,n.jsx)("div",{children:"Now loading..."});if(!t||!Array.isArray(t.result))return(0,n.jsx)("div",{children:"データ形式が不正です。"});let d=(e,t,n)=>{let r=n?[...l,{code:e,name:t}]:l.filter(a=>a.code!==e);o(r),a(r)};return(0,n.jsx)("div",{className:"w-full p-4 border border-gray-300 rounded-md",children:(0,n.jsx)("form",{children:(0,n.jsx)("div",{className:"grid grid-cols-2 gap-2 justify-items-center",children:t.result.map(e=>(0,n.jsxs)("label",{className:"flex items-center space-x-2",children:[(0,n.jsx)("input",{type:"checkbox",value:e.prefCode,onChange:a=>d(e.prefCode,e.prefName,a.target.checked)}),(0,n.jsx)("span",{className:"min-w-[120px]",children:e.prefName})]},e.prefCode))})})})};let d=e=>"".concat("https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear","?prefCode=").concat(e),p=(e,a)=>{let t=e.length?"/api/population?codes=".concat(e.join(","),"&type=").concat(a):null,n=async()=>{if(!t)return[];let n=e.map(e=>c(d(e))),r=await Promise.all(n),s={};return r.forEach((t,n)=>{var r;let l=e[n],i=null===(r=t.result.data.find(e=>e.label===a))||void 0===r?void 0:r.data;i&&(s[l]=i)}),s},{data:r,error:s}=(0,i.ZP)(t,n);return{combinedData:r,isLoading:!s&&!r,error:s}};var u=t(2305),h=t(4304),x=t(4206),f=t(2154),m=t(4283),j=t(6910),v=t(3447),g=t(8933),y=e=>{let{selectedPrefs:a,populationType:t}=e,{combinedData:r,isLoading:s,error:l}=p(a.map(e=>e.code),t);if(s)return(0,n.jsx)("div",{children:"Now loading..."});if(l)return(0,n.jsxs)("div",{children:["エラーが発生しました: ",l.message]});if(console.log("combinedData:",r),!r)return(0,n.jsx)("div",{children:"データがありません。"});let i=Array.from(new Set(Object.values(r).flat().map(e=>e.year))).slice(0,14).map(e=>{let t={year:e};return a.forEach(a=>{var n;let s=null===(n=r[a.code])||void 0===n?void 0:n.find(a=>a.year===e);s&&(t["value_".concat(a.code)]=s.value)}),t});return console.log("mergedData:",i),(0,n.jsx)("div",{className:"w-full h-[400px] mb-5",children:(0,n.jsx)(u.h,{width:"100%",height:400,children:(0,n.jsxs)(h.w,{data:i,margin:{top:30,right:50,left:50,bottom:20},children:[(0,n.jsx)(x.q,{strokeDasharray:"3 3"}),(0,n.jsx)(f.K,{dataKey:"year",label:{value:"年度",position:"insideBottomRight",offset:-10}}),(0,n.jsx)(m.B,{className:"w-20",padding:{top:25},label:{value:"人口数",position:"insideTopLeft"}}),(0,n.jsx)(j.u,{}),(0,n.jsx)(v.D,{verticalAlign:"top",align:"right"}),a.map((e,a)=>(0,n.jsx)(g.x,{type:"monotone",dataKey:"value_".concat(e.code),stroke:["#8884d8","#82ca9d","#ffc658"][a%3],activeDot:{r:8},name:e.name},e.code))]})})})},w=e=>{let{populationType:a,onChange:t}=e;return(0,n.jsxs)("div",{className:"flex justify-center space-x-2 my-4",children:[(0,n.jsxs)("label",{className:"flex items-center space-x-2",children:[(0,n.jsx)("input",{type:"radio",name:"populationType",value:"総人口",checked:"総人口"===a,onChange:t}),(0,n.jsx)("span",{children:"総人口"})]}),(0,n.jsxs)("label",{className:"flex items-center space-x-1",children:[(0,n.jsx)("input",{type:"radio",name:"populationType",value:"年少人口",checked:"年少人口"===a,onChange:t}),(0,n.jsx)("span",{children:"年少人口"})]}),(0,n.jsxs)("label",{className:"flex items-center space-x-1",children:[(0,n.jsx)("input",{type:"radio",name:"populationType",value:"生産年齢人口",checked:"生産年齢人口"===a,onChange:t}),(0,n.jsx)("span",{children:"生産年齢人口"})]}),(0,n.jsxs)("label",{className:"flex items-center space-x-1",children:[(0,n.jsx)("input",{type:"radio",name:"populationType",value:"老年人口",checked:"老年人口"===a,onChange:t}),(0,n.jsx)("span",{children:"老年人口"})]})]})};function b(){let[e,a]=(0,r.useState)([]),[t,s]=(0,r.useState)("総人口");return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(l(),{children:[(0,n.jsx)("title",{children:"都道府県別の総人口推移グラフ"}),(0,n.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,n.jsx)("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),(0,n.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,n.jsx)("main",{className:"flex flex-col items-center justify-center min-h-screen py-4",children:(0,n.jsxs)("div",{className:"w-full max-w-4xl p-4 ",children:[(0,n.jsx)("h1",{className:"text-3xl pb-2 mb-4",children:"都道府県"}),(0,n.jsx)(o,{onChange:e=>{a(e)}}),(0,n.jsx)(w,{populationType:t,onChange:e=>{s(e.target.value)}}),e.length>0&&(0,n.jsx)(y,{selectedPrefs:e,populationType:t})]})})]})}}},function(e){e.O(0,[165,888,774,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);