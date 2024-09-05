import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as x}from"./Grid-DrVcZ8eD.js";import{T as r}from"./TextBox-CFfT34kU.js";import"./index-RYns6xqu.js";const R={title:"Grid/Grid",component:x,tags:["autodocs"]},I="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",n={args:{layout:"container",widthMax:600,padding:"0 10px 0 10px",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"max-width: 600px"}),e.jsx(r,{children:"Padding: 0 10px 0 10px;"})]})}},a={args:{layout:"container",widthMax:1200,padding:"0 10px 0 10px",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"max-width: 1200px"}),e.jsx(r,{children:"Padding: 0 10px 0 10px;"})]})}},t={args:{layout:"container",widthMax:1400,padding:"0 10px 0 10px",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"max-width: 1400px"}),e.jsx(r,{children:"Padding: 0 10px 0 10px;"})]})}},o={args:{layout:"container",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"max-width: 1920px"}),e.jsx(r,{children:"Padding: 0"})]})}},s={args:{layout:"container",margin:"100px",children:e.jsxs(e.Fragment,{children:[e.jsx(r,{children:"max-width: 1920px"}),e.jsx(r,{children:"Margin: 100px;"})]})}},i={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:p=>e.jsx(x,{...p,children:Array.from({length:9},(_,c)=>e.jsx("div",{children:e.jsx(r,{children:I})},c))})},d={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:p=>e.jsx(e.Fragment,{children:e.jsx(x,{layout:"container",widthMax:800,padding:"0 10px 0 10px",children:e.jsx(x,{...p,children:Array.from({length:9},(_,c)=>e.jsx("div",{children:e.jsx(r,{children:I})},c))})})})};var l,m,u;n.parameters={...n.parameters,docs:{...(l=n.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px',
    children: <>
        <TextBox>max-width: 600px</TextBox>
        <TextBox>Padding: 0 10px 0 10px;</TextBox>
      </>
  }
}`,...(u=(m=n.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var g,h,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 1200,
    padding: '0 10px 0 10px',
    children: <>
        <TextBox>max-width: 1200px</TextBox>
        <TextBox>Padding: 0 10px 0 10px;</TextBox>
      </>
  }
}`,...(y=(h=a.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var T,w,j;t.parameters={...t.parameters,docs:{...(T=t.parameters)==null?void 0:T.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 1400,
    padding: '0 10px 0 10px',
    children: <>
        <TextBox>max-width: 1400px</TextBox>
        <TextBox>Padding: 0 10px 0 10px;</TextBox>
      </>
  }
}`,...(j=(w=t.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var B,G,L;o.parameters={...o.parameters,docs:{...(B=o.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    children: <>
        <TextBox>max-width: 1920px</TextBox>
        <TextBox>Padding: 0</TextBox>
      </>
  }
}`,...(L=(G=o.parameters)==null?void 0:G.docs)==null?void 0:L.source}}};var k,M,f;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    margin: '100px',
    children: <>
        <TextBox>max-width: 1920px</TextBox>
        <TextBox>Margin: 100px;</TextBox>
      </>
  }
}`,...(f=(M=s.parameters)==null?void 0:M.docs)==null?void 0:f.source}}};var b,C,v;i.parameters={...i.parameters,docs:{...(b=i.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    gap: {
      col: '20px',
      row: '20px'
    },
    col: {
      smallDesktop: 3,
      desktop: 3,
      mobile: 1,
      tablet: 2
    }
  },
  render: args => <Grid {...args}>
      {Array.from({
      length: 9
    }, (_, i) => <div key={i}>
          <TextBox>{testText}</TextBox>
        </div>)}
    </Grid>
}`,...(v=(C=i.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var P,S,F;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    layout: 'columns',
    gap: {
      col: '20px',
      row: '20px'
    },
    col: {
      smallDesktop: 2,
      desktop: 2,
      mobile: 1,
      tablet: 2
    }
  },
  render: args => {
    return <>
        <Grid layout="container" widthMax={800} padding="0 10px 0 10px">
          <Grid {...args}>
            {Array.from({
            length: 9
          }, (_, i) => <div key={i}>
                <TextBox>{testText}</TextBox>
              </div>)}
          </Grid>
        </Grid>
      </>;
  }
}`,...(F=(S=d.parameters)==null?void 0:S.docs)==null?void 0:F.source}}};const q=["GridLayoutContainer600","GridLayoutContainer1200","GridLayoutContainer1400","GridLayoutContainer1920","GridLayoutContainerMargin","GridLayoutColumns","GridLayoutMixed"];export{i as GridLayoutColumns,a as GridLayoutContainer1200,t as GridLayoutContainer1400,o as GridLayoutContainer1920,n as GridLayoutContainer600,s as GridLayoutContainerMargin,d as GridLayoutMixed,q as __namedExportsOrder,R as default};
