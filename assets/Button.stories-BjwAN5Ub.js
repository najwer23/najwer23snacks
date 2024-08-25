import{j as g}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var v={classic:"Button-module_classic__e7qBa"};(function(r,s){s===void 0&&(s={});var l=s.insertAt;if(typeof document<"u"){var n=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",l==="top"&&n.firstChild?n.insertBefore(e,n.firstChild):n.appendChild(e),e.styleSheet?e.styleSheet.cssText=r:e.appendChild(document.createTextNode(r))}})("@layer n23snacksButton{.Button-module_classic__e7qBa{-webkit-touch-callout:none;-webkit-tap-highlight-color:rgba(0,0,0,0);background-color:var(--n23snack-button-bg-color);border:unset;border-radius:8px;color:var(--n23snack-button-font-color);cursor:pointer;font-family:var(--n23snack-font-family);font-size:var(--n23snack-button-font-size);font-weight:var(--n23snack-button-font-weight);letter-spacing:normal;padding:10px 17px;transition:.1s;transition:background-color .3s,box-shadow .3s;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;@media (hover:hover) and (pointer:fine){&:hover{background-color:var(--n23snack-button-bg-color-hover);box-shadow:var(--n23snack-button-shadow)}}&:active{background-color:var(--n23snack-button-bg-color-active);box-shadow:var(--n23snack-button-shadow)}&:focus-visible{background-color:var(--n23snack-button-bg-color-focus);box-shadow:var(--n23snack-button-shadow);outline:none}&:disabled{background-color:var(--n23snack-button-bg-color-disabled);box-shadow:none;cursor:not-allowed}}}");const f=r=>{var{children:s,kind:l="classic"}=r,n=function(e,d){var i={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&d.indexOf(o)<0&&(i[o]=e[o]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var t=0;for(o=Object.getOwnPropertySymbols(e);t<o.length;t++)d.indexOf(o[t])<0&&Object.prototype.propertyIsEnumerable.call(e,o[t])&&(i[o[t]]=e[o[t]])}return i}(r,["children","kind"]);return g.jsx("button",Object.assign({type:"button"},n,{className:v[l],children:s}))};f.displayName="Button";const w={title:"Buttons/Button",component:f,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{children:"Click!",disabled:!1,onClick:()=>{console.log("Hello Click!")}}},c={args:{children:"Click!",disabled:!0,onClick:()=>{console.log("Hello Click!")}}};var u,b,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    children: 'Click!',
    disabled: false,
    onClick: () => {
      console.log('Hello Click!');
    }
  }
}`,...(p=(b=a.parameters)==null?void 0:b.docs)==null?void 0:p.source}}};var m,k,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    children: 'Click!',
    disabled: true,
    onClick: () => {
      console.log('Hello Click!');
    }
  }
}`,...(h=(k=c.parameters)==null?void 0:k.docs)==null?void 0:h.source}}};const C=["Default","Disabled"];export{a as Default,c as Disabled,C as __namedExportsOrder,w as default};
