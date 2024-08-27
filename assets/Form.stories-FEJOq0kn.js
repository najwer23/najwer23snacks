import{j as e}from"./jsx-runtime-DEdD30eg.js";import{o as l}from"./textbox-Cv-tXjiz.js";import{n as j}from"./button-CaBQ6Mn-.js";import"./index-RYns6xqu.js";const c=s=>{var{children:m,onSubmit:x}=s,b=function(t,i){var o={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&i.indexOf(r)<0&&(o[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(r=Object.getOwnPropertySymbols(t);n<r.length;n++)i.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(t,r[n])&&(o[r[n]]=t[r[n]])}return o}(s,["children","onSubmit"]);return e.jsx("form",Object.assign({onSubmit:t=>{t.preventDefault();const i=t.currentTarget,o=Object.fromEntries(Array.from(i.elements).filter(r=>r instanceof HTMLInputElement||r instanceof HTMLTextAreaElement||r instanceof HTMLSelectElement&&r.name!=="").map(r=>[r.name,{error:r.className.includes("error"),value:r.value}]));x(o)}},b,{children:m}))};c.displayName="Form";const v={title:"Form/Form",component:c,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{onSubmit:()=>{},children:e.jsx(e.Fragment,{})},render:()=>{const s=m=>{console.log("Form:",m)};return e.jsx(e.Fragment,{children:e.jsxs(c,{onSubmit:s,children:[e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("label",{children:e.jsx(l,{children:"Input with Error"})})}),e.jsx("input",{type:"text",id:"numberInput",name:"name",className:"error"})]}),e.jsx("br",{}),e.jsxs("div",{children:[e.jsx("div",{children:e.jsx("label",{children:e.jsx(l,{children:"Input"})})}),e.jsx("input",{type:"text",id:"password",name:"password"})]}),e.jsx("br",{}),e.jsx(j,{type:"submit",children:"Submit"}),e.jsx(l,{children:"Check console!"})]})})}};var d,p,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
          <div>
            <div>
              <label>
                <TextBox>Input with Error</TextBox>
              </label>
            </div>
            <input type="text" id="numberInput" name="name" className="error" />
          </div>
          <br />
          <div>
            <div>
              <label>
                <TextBox>Input</TextBox>
              </label>
            </div>
            <input type="text" id="password" name="password" />
          </div>
          <br />
          <Button type="submit">Submit</Button>
          <TextBox>Check console!</TextBox>
        </FormStory>
      </>;
  }
}`,...(u=(p=a.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const O=["Form"];export{a as Form,O as __namedExportsOrder,v as default};
