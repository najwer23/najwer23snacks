import{j as t}from"./jsx-runtime-DEdD30eg.js";import{B as f}from"./Button-DpkA2Ivk.js";import{I as l}from"./Input-BqWVmRjB.js";import{S}from"./Select-CxzuhnMl.js";import"./index-RYns6xqu.js";const n=({children:s,onSubmit:r,...a})=>{const d=i=>{i.preventDefault();const m=i.currentTarget;m&&Array.from(m.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new Event("input",{bubbles:!0}))});const b=Object.fromEntries(Array.from(m.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!=="").map(e=>[e.name,{error:e.className.includes("error"),value:e.value}]));r(b)};return t.jsx("form",{onSubmit:d,...a,children:s})};n.displayName="Form";n.__docgenInfo={description:"",methods:[],displayName:"Form"};const h={title:"Form/Form",component:n,parameters:{layout:"centered"},tags:["autodocs"]},o={args:{onSubmit:()=>{},children:t.jsx(t.Fragment,{})},render:()=>{const s=r=>{if(console.log("Form:",r),Object.values(r).some(({error:a})=>a)){console.log("Form has errors");return}console.log("Form submitted")};return t.jsx(t.Fragment,{children:t.jsxs(n,{onSubmit:s,children:[t.jsx(l,{label:"Email",type:"text",name:"name",validatorOptions:{empty:!0,email:!0}}),t.jsx(l,{label:"Password",type:"password",name:"pass",validatorOptions:{empty:!0}}),t.jsx(S,{label:"Select",name:"select",validatorOptions:{empty:!0},selectOptions:["Option1","Option2"]}),t.jsx(f,{type:"submit",children:"Submit"})]})})}};var c,p,u;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    children: <></>
  },
  render: () => {
    const handleOnSubmit = (form: FormType) => {
      console.log('Form:', form);
      if (Object.values(form).some(({
        error
      }) => error)) {
        console.log("Form has errors");
        return;
      }
      console.log("Form submitted");
    };
    return <>
        <FormSnack onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="name" validatorOptions={{
          empty: true,
          email: true
        }} />

          <Input label="Password" type="password" name="pass" validatorOptions={{
          empty: true
        }} />

          <Select label='Select' name={'select'} validatorOptions={{
          empty: true
        }} selectOptions={["Option1", "Option2"]}></Select>

          <Button type="submit">Submit</Button>
        </FormSnack>
      </>;
  }
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const E=["Form"];export{o as Form,E as __namedExportsOrder,h as default};
