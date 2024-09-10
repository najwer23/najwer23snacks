import{j as a}from"./jsx-runtime-DEdD30eg.js";import{I as m}from"./Input-BGhH-L1E.js";import"./index-RYns6xqu.js";const y={title:"Inputs/Input",component:m,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{name:"test",label:"Label",placeholder:"Input",validatorOptions:[{type:"empty"}]}},t={args:{placeholder:"Placeholder",name:"test",label:"Label",kind:"textarea",validatorOptions:[{type:"empty"}]},decorators:[(d,c)=>a.jsx("div",{style:{width:"500px"},children:a.jsx(d,{args:{...c.args}})})]};var r,n,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    name: 'test',
    label: 'Label',
    placeholder: 'Input',
    validatorOptions: [{
      type: 'empty'
    }]
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var o,p,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    placeholder: 'Placeholder',
    name: 'test',
    label: 'Label',
    kind: 'textarea',
    validatorOptions: [{
      type: 'empty'
    }]
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
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const g=["InputText","InputTextarea"];export{e as InputText,t as InputTextarea,g as __namedExportsOrder,y as default};
