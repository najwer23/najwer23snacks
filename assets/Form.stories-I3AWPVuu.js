import{j as r}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const u=s=>{var{children:m,onSubmit:p}=s,b=function(t,a){var o={};for(var e in t)Object.prototype.hasOwnProperty.call(t,e)&&a.indexOf(e)<0&&(o[e]=t[e]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function"){var n=0;for(e=Object.getOwnPropertySymbols(t);n<e.length;n++)a.indexOf(e[n])<0&&Object.prototype.propertyIsEnumerable.call(t,e[n])&&(o[e[n]]=t[e[n]])}return o}(s,["children","onSubmit"]);return r.jsx("form",Object.assign({onSubmit:t=>{t.preventDefault();const a=t.currentTarget,o=Object.fromEntries(Array.from(a.elements).filter(e=>e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement||e instanceof HTMLSelectElement&&e.name!=="").map(e=>[e.name,{error:e.className.includes("error"),value:e.value}]));p(o)}},b,{children:m}))},f={title:"Form/Form",component:u,parameters:{layout:"centered"},tags:["autodocs"]},i={args:{onSubmit:()=>{},children:r.jsx(r.Fragment,{})},render:()=>{const s=m=>{console.log("Form:",m)};return r.jsx(r.Fragment,{children:r.jsxs(u,{onSubmit:s,children:[r.jsxs("div",{children:[r.jsx("div",{children:r.jsx("label",{children:"Name:"})}),r.jsx("input",{type:"text",id:"numberInput",name:"name",className:"error"})]}),r.jsx("br",{}),r.jsxs("div",{children:[r.jsx("div",{children:r.jsx("label",{children:"Password:"})}),r.jsx("input",{type:"text",id:"password",name:"password"})]}),r.jsx("br",{}),r.jsx("button",{type:"submit",children:"Submit"}),r.jsx("p",{children:"Check console!"})]})})}};var l,c,d;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
              <label>Name:</label>
            </div>
            <input type="text" id="numberInput" name="name" className="error" />
          </div>
          <br />
          <div>
            <div>
              <label>Password:</label>
            </div>
            <input type="text" id="password" name="password" />
          </div>
          <br />
          <button type="submit">Submit</button>
          <p>Check console!</p>
        </FormStory>
      </>;
  }
}`,...(d=(c=i.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const h=["Form"];export{i as Form,h as __namedExportsOrder,f as default};
