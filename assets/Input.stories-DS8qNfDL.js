import{j as r}from"./jsx-runtime-DEdD30eg.js";import{I as m}from"./Input-vF-z5AyN.js";import"./index-RYns6xqu.js";const g={title:"Inputs/Input",component:m,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{name:"test",label:"Label",placeholder:"Input",validatorOptions:{empty:!0,email:!0}}},t={args:{placeholder:"Placeholder",name:"test",label:"Label",kind:"textarea",validatorOptions:{empty:!0}},decorators:[(d,c)=>r.jsx("div",{style:{width:"500px"},children:r.jsx(d,{args:{...c.args}})})]};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    name: 'test',
    label: 'Label',
    placeholder: 'Input',
    validatorOptions: {
      empty: true,
      email: true
    }
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,p,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    name: 'test',
    label: 'Label',
    kind: 'textarea',
    validatorOptions: {
      empty: true
    }
  },
  decorators: [(Story, ctx) => {
    return <div style={{
      width: '500px'
    }}>
          <Story args={{
        ...ctx.args
      }} />
        </div>;
  }]
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const I=["InputText","InputTextarea"];export{e as InputText,t as InputTextarea,I as __namedExportsOrder,g as default};
