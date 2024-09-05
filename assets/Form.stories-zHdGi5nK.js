import{j as t}from"./jsx-runtime-DEdD30eg.js";import{B as f}from"./Button-DpkA2Ivk.js";import{I as l}from"./Input-k6I0Kl2s.js";import{S as y}from"./Select-C5Dyzcbj.js";import"./index-RYns6xqu.js";const n=({children:s,onSubmit:o,...a})=>{const d=i=>{i.preventDefault();const m=i.currentTarget;m&&Array.from(m.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new Event("input",{bubbles:!0}))});const b=Object.fromEntries(Array.from(m.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!=="").map(e=>[e.name,{error:e.className.includes("error"),value:e.value}]));o(b)};return t.jsx("form",{onSubmit:d,...a,children:s})};n.displayName="Form";n.__docgenInfo={description:"",methods:[],displayName:"Form"};const h={title:"Form/Form",component:n,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{onSubmit:()=>{},children:t.jsx(t.Fragment,{})},render:()=>{const s=o=>{if(console.log("Form:",o),Object.values(o).some(({error:a})=>a)){console.log("Form has errors");return}console.log("Form submitted")};return t.jsx(t.Fragment,{children:t.jsxs(n,{onSubmit:s,children:[t.jsx(l,{label:"Email",type:"text",name:"name",validatorOptions:[{type:"empty"},{type:"email"}]}),t.jsx(l,{label:"Password",type:"password",name:"pass",validatorOptions:[{type:"empty"}]}),t.jsx(y,{label:"Select",name:"select",validatorOptions:[{type:"empty"}],selectOptions:["Option1","Option2"]}),t.jsx(f,{type:"submit",children:"Submit"})]})})}};var p,c,u;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
        console.log('Form has errors');
        return;
      }
      console.log('Form submitted');
    };
    return <>
        <FormSnack onSubmit={handleOnSubmit}>
          <Input label="Email" type="text" name="name" validatorOptions={[{
          type: 'empty'
        }, {
          type: 'email'
        }]} />

          <Input label="Password" type="password" name="pass" validatorOptions={[{
          type: 'empty'
        }]} />

          <Select label="Select" name={'select'} validatorOptions={[{
          type: 'empty'
        }]} selectOptions={['Option1', 'Option2']}></Select>

          <Button type="submit">Submit</Button>
        </FormSnack>
      </>;
  }
}`,...(u=(c=r.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};const E=["Form"];export{r as Form,E as __namedExportsOrder,h as default};
