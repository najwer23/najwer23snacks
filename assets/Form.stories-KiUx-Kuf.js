import{j as r}from"./jsx-runtime-DEdD30eg.js";import{n as y}from"./button-CaBQ6Mn-.js";import{p as c}from"./input-DUFvC8HN.js";import"./index-RYns6xqu.js";const i=s=>{var{children:l,onSubmit:b}=s,f=function(t,n){var a={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&n.indexOf(e)<0&&(a[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(e=Object.getOwnPropertySymbols(t);o<e.length;o++)n.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(t,e[o])&&(a[e[o]]=t[e[o]])}return a}(s,["children","onSubmit"]);return r.jsx("form",Object.assign({onSubmit:t=>{t.preventDefault();const n=t.currentTarget;n&&Array.from(n.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new Event("input",{bubbles:!0}))});const a=Object.fromEntries(Array.from(n.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!=="").map(e=>[e.name,{error:e.className.includes("error"),value:e.value}]));b(a)}},f,{children:l}))};i.displayName="Form";const j={title:"Form/Form",component:i,parameters:{layout:"centered"},tags:["autodocs"]},m={args:{onSubmit:()=>{},children:r.jsx(r.Fragment,{})},render:()=>{const s=l=>{console.log("Form:",l)};return r.jsx(r.Fragment,{children:r.jsxs(i,{onSubmit:s,children:[r.jsx(c,{label:"Email",type:"text",name:"name",validatorOptions:{empty:!0,email:!0}}),r.jsx(c,{label:"Password",type:"password",name:"pass"}),r.jsx(y,{type:"submit",children:"Submit"})]})})}};var p,u,d;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
          <Input label="Email" type="text" name="name" validatorOptions={{
          empty: true,
          email: true
        }} />

          <Input label="Password" type="password" name="pass" />

          <Button type="submit">Submit</Button>
        </FormStory>
      </>;
  }
}`,...(d=(u=m.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const h=["Form"];export{m as Form,h as __namedExportsOrder,j as default};
