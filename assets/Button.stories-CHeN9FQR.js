import{j as u}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var y="Button-module_test__WehBi";(function(o,s){s===void 0&&(s={});var a=s.insertAt;if(typeof document<"u"){var e=document.head||document.getElementsByTagName("head")[0],r=document.createElement("style");r.type="text/css",a==="top"&&e.firstChild?e.insertBefore(r,e.firstChild):e.appendChild(r),r.styleSheet?r.styleSheet.cssText=o:r.appendChild(document.createTextNode(o))}})(".Button-module_test__WehBi{color:red}");const m=o=>{var{children:s}=o,a=function(e,r){var i={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&r.indexOf(t)<0&&(i[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(t=Object.getOwnPropertySymbols(e);n<t.length;n++)r.indexOf(t[n])<0&&Object.prototype.propertyIsEnumerable.call(e,t[n])&&(i[t[n]]=e[t[n]])}return i}(o,["children"]);return u.jsx("button",Object.assign({type:"button"},a,{className:y,children:s}))},b={title:"Buttons/Button",component:m,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}},tags:["autodocs"]},l={render:o=>u.jsx(m,{...o,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello"}),name:"Button",args:{children:"Hello",type:"button"}};var p,c,d;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello
    </Button>,
  name: "Button",
  args: {
    children: "Hello",
    type: "button"
  }
}`,...(d=(c=l.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const x=["Primary"];export{l as Primary,x as __namedExportsOrder,b as default};
