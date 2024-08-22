import{j as u}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var m=Object.defineProperty,_=Object.defineProperties,b=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(r,e,t)=>e in r?m(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,y=(r,e)=>{for(var t in e||(e={}))c.call(e,t)&&s(r,t,e[t]);if(a)for(var t of a(e))f.call(e,t)&&s(r,t,e[t]);return r},v=(r,e)=>_(r,b(e)),O=(r,e)=>{var t={};for(var o in r)c.call(r,o)&&e.indexOf(o)<0&&(t[o]=r[o]);if(r!=null&&a)for(var o of a(r))e.indexOf(o)<0&&f.call(r,o)&&(t[o]=r[o]);return t};function l(r){var e=r,{children:t}=e,o=O(e,["children"]);return u.jsx("button",v(y({type:"button"},o),{children:t}))}l.displayName="Button";const x={component:l,argTypes:{type:{control:{type:"radio"},options:["button","submit","reset"]}}},n={render:r=>u.jsx(l,{...r,onClick:()=>{alert("Hello from Turborepo!")},children:"Hello"}),name:"Button",args:{children:"Hello",type:"button",style:{color:"blue",border:"1px solid gray",padding:10,borderRadius:10}}};var i,p,d;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: props => <Button {...props} onClick={(): void => {
    // eslint-disable-next-line no-alert -- alert for demo
    alert("Hello from Turborepo!");
  }}>
      Hello
    </Button>,
  name: "Button",
  args: {
    children: "Hello",
    type: "button",
    style: {
      color: "blue",
      border: "1px solid gray",
      padding: 10,
      borderRadius: 10
    }
  }
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Primary"];export{n as Primary,j as __namedExportsOrder,x as default};
