import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as b}from"./Button-DpkA2Ivk.js";import{I as i}from"./Input-DN2g8WGt.js";import"./index-RYns6xqu.js";const o=({children:a,onSubmit:n,...p})=>{const d=m=>{m.preventDefault();const s=m.currentTarget;s&&Array.from(s.elements).forEach(t=>{(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement)&&t.dispatchEvent(new Event("input",{bubbles:!0}))});const f=Object.fromEntries(Array.from(s.elements).filter(t=>t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement||t instanceof HTMLSelectElement&&t.name!=="").map(t=>[t.name,{error:t.className.includes("error"),value:t.value}]));n(f)};return e.jsx("form",{onSubmit:d,...p,children:a})};o.displayName="Form";o.__docgenInfo={description:"",methods:[],displayName:"Form"};const F={title:"Form/Form",component:o,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{onSubmit:()=>{},children:e.jsx(e.Fragment,{})},render:()=>{const a=n=>{console.log("Form:",n)};return e.jsx(e.Fragment,{children:e.jsxs(o,{onSubmit:a,children:[e.jsx(i,{label:"Email",type:"text",name:"name",validatorOptions:{empty:!0,email:!0}}),e.jsx(i,{label:"Password",type:"password",name:"pass"}),e.jsx(b,{type:"submit",children:"Submit"})]})})}};var c,u,l;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    onSubmit: () => {},
    children: <></>
  },
  render: () => {
    const handleOnSubmit = (formData: Record<string, object>) => {
      console.log('Form:', formData);
    };
    return <>
        <FormSnack onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="name" validatorOptions={{
          empty: true,
          email: true
        }} />

          <Input label="Password" type="password" name="pass" />

          <Button type="submit">Submit</Button>
        </FormSnack>
      </>;
  }
}`,...(l=(u=r.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};const h=["Form"];export{r as Form,h as __namedExportsOrder,F as default};
