import{j as r}from"./jsx-runtime-DEdD30eg.js";import{n as y}from"./button-CaBQ6Mn-.js";import{p as l}from"./input-DQ5Sgr7L.js";import"./index-RYns6xqu.js";const c=m=>{var{children:i,onSubmit:f}=m,b=function(e,n){var a={};for(var t in e)Object.prototype.hasOwnProperty.call(e,t)&&n.indexOf(t)<0&&(a[t]=e[t]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(t=Object.getOwnPropertySymbols(e);o<t.length;o++)n.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(e,t[o])&&(a[t[o]]=e[t[o]])}return a}(m,["children","onSubmit"]);return r.jsx("form",Object.assign({onSubmit:e=>{e.preventDefault();const n=e.currentTarget;n&&Array.from(n.elements).forEach(t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&t.dispatchEvent(new Event("input",{bubbles:!0}))});const a=Object.fromEntries(Array.from(n.elements).filter(t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement&&t.name!=="").map(t=>[t.name,{error:t.className.includes("error"),value:t.value}]));f(a)}},b,{children:i}))};c.displayName="Form";const h={title:"Form/Form",component:c,parameters:{layout:"centered"},tags:["autodocs"]},s={args:{onSubmit:()=>{},children:r.jsx(r.Fragment,{})},render:()=>{const m=i=>{console.log("Form:",i)};return r.jsx(r.Fragment,{children:r.jsxs(c,{onSubmit:m,children:[r.jsx(l,{type:"text",name:"name",validatorOptions:{empty:!0,email:!0}}),r.jsx(l,{type:"text",name:"pass"}),r.jsx(y,{type:"submit",children:"Submit"})]})})}};var p,u,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    children: <></>
  },
  render: () => {
    const handleOnSubmit = (formData: Record<string, object>) => {
      console.log('Form:', formData);
    };
    return <>
        <FormStory onSubmit={handleOnSubmit}>
          <Input type="text" name="name" validatorOptions={{
          empty: true,
          email: true
        }} />

          <Input type="text" name="pass" />

          <Button type="submit">Submit</Button>
        </FormStory>
      </>;
  }
}`,...(d=(u=s.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const E=["Form"];export{s as Form,E as __namedExportsOrder,h as default};
