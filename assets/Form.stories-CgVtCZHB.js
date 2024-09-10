import{j as t}from"./jsx-runtime-DEdD30eg.js";import{B as b}from"./Button-B_v8z9C9.js";import{I as i}from"./Input-BGhH-L1E.js";import{S as f}from"./Select-CTBjKU-h.js";import{C as S}from"./Calendar-DEAE1dJL.js";import"./index-RYns6xqu.js";const a=({children:n,onSubmit:o,...s})=>{const u=l=>{l.preventDefault();const m=l.currentTarget;m&&Array.from(m.elements).forEach(e=>{(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement)&&e.dispatchEvent(new Event("input",{bubbles:!0}))});const y=Object.fromEntries(Array.from(m.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!=="").map(e=>[e.name,{error:e.className.includes("error"),value:e.value}]));o(y)};return t.jsx("form",{onSubmit:u,...s,children:n})};a.displayName="Form";a.__docgenInfo={description:"",methods:[],displayName:"Form"};const j={title:"Form/Form",component:a,parameters:{layout:"centered"},tags:["autodocs"]},r={args:{onSubmit:()=>{},children:t.jsx(t.Fragment,{})},render:()=>{const n=o=>{if(console.log("Form:",o),Object.values(o).some(({error:s})=>s)){console.log("Form has errors");return}console.log("Form submitted")};return t.jsx(t.Fragment,{children:t.jsxs(a,{onSubmit:n,children:[t.jsx(i,{label:"Email",type:"text",name:"name",validatorOptions:[{type:"empty"},{type:"email"}]}),t.jsx(i,{label:"Password",type:"password",name:"pass",validatorOptions:[{type:"empty"}]}),t.jsx(f,{label:"Select",name:"select",validatorOptions:[{type:"empty"}],selectOptions:["Option1","Option2"]}),t.jsx(S,{name:"date",label:"Date",validatorOptions:[{type:"empty"},{type:"date"}]}),t.jsx(b,{type:"submit",children:"Submit"})]})})}};var p,c,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
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

          <Calendar name={'date'} label={'Date'} validatorOptions={[{
          type: 'empty'
        }, {
          type: 'date'
        }]} />

          <Button type="submit">Submit</Button>
        </FormSnack>
      </>;
  }
}`,...(d=(c=r.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const E=["Form"];export{r as Form,E as __namedExportsOrder,j as default};
