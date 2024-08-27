import{j as e}from"./jsx-runtime-DEdD30eg.js";import{o as n}from"./textbox-Cv-tXjiz.js";import"./index-RYns6xqu.js";var K="Grid-module_container__XaWe-",Q="Grid-module_columns__N5MMF";(function(a,t){t===void 0&&(t={});var s=t.insertAt;if(typeof document<"u"){var d=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css",s==="top"&&d.firstChild?d.insertBefore(o,d.firstChild):d.appendChild(o),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(document.createTextNode(a))}})("@layer n23snacksGrid{.Grid-module_container__XaWe-{box-sizing:border-box;margin:var(--n23snacks-grid-margin);max-width:var(--n23snacks-grid-widthMax);min-width:var(--n23snacks-grid-widthMin);padding:var(--n23snacks-grid-padding)}.Grid-module_columns__N5MMF{column-gap:var(--n23snacks-grid-column-gap);display:flex;flex-wrap:wrap;row-gap:var(--n23snacks-grid-row-gap);width:100%}.Grid-module_columns__N5MMF>div{width:calc(100%/var(--n23snacks-flex-col) - ((var(--n23snacks-flex-col) - 1)/var(--n23snacks-flex-col))*var(--n23snacks-grid-column-gap))}@media (max-width:767.98px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-mobile)}}@media (min-width:768px) and (max-width:1199.98px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-tablet)}}@media (min-width:1200px) and (max-width:1599.98px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-small-desktop)}}@media (min-width:1600px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-desktop)}}}");const x=a=>{var{children:t,widthMin:s=0,widthMax:d=1920,padding:o=0,margin:H="auto",layout:J,gap:k,col:l}=a,v=function(i,M){var f={};for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&M.indexOf(r)<0&&(f[r]=i[r]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function"){var c=0;for(r=Object.getOwnPropertySymbols(i);c<r.length;c++)M.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(i,r[c])&&(f[r[c]]=i[r[c]])}return f}(a,["children","widthMin","widthMax","padding","margin","layout","gap","col"]);if(J=="container")return e.jsx("div",Object.assign({className:K,style:{"--n23snacks-grid-widthMin":s+"px","--n23snacks-grid-widthMax":d+"px","--n23snacks-grid-padding":o,"--n23snacks-grid-margin":H}},v,{children:t}));if(!k||!l)throw new Error('When layout="columns", gap and col props are required');return e.jsx("div",Object.assign({className:Q,style:{"--n23snacks-grid-column-mobile":l.mobile,"--n23snacks-grid-column-tablet":l.tablet,"--n23snacks-grid-column-small-desktop":l.smallDesktop,"--n23snacks-grid-column-desktop":l.desktop,"--n23snacks-grid-column-gap":k.col,"--n23snacks-grid-row-gap":k.row}},v,{children:t}))};x.displayName="Grid";const Z={title:"Grid/Grid",component:x,tags:["autodocs"]},R="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",p={args:{layout:"container",widthMax:600,padding:"0 10px 0 10px",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"max-width: 600px"}),e.jsx(n,{children:"Padding: 0 10px 0 10px;"})]})}},m={args:{layout:"container",widthMax:1200,padding:"0 10px 0 10px",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"max-width: 1200px"}),e.jsx(n,{children:"Padding: 0 10px 0 10px;"})]})}},u={args:{layout:"container",widthMax:1400,padding:"0 10px 0 10px",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"max-width: 1400px"}),e.jsx(n,{children:"Padding: 0 10px 0 10px;"})]})}},g={args:{layout:"container",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"max-width: 1920px"}),e.jsx(n,{children:"Padding: 0"})]})}},h={args:{layout:"container",margin:"100px",children:e.jsxs(e.Fragment,{children:[e.jsx(n,{children:"max-width: 1920px"}),e.jsx(n,{children:"Margin: 100px;"})]})}},y={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:a=>e.jsx(x,{...a,children:Array.from({length:9},(t,s)=>e.jsx("div",{children:e.jsx(n,{children:R})},s))})},w={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:a=>e.jsx(e.Fragment,{children:e.jsx(x,{layout:"container",widthMax:800,padding:"0 10px 0 10px",children:e.jsx(x,{...a,children:Array.from({length:9},(t,s)=>e.jsx("div",{children:e.jsx(n,{children:R})},s))})})})};var j,G,_;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px',
    children: <>
        <TextBox>max-width: 600px</TextBox>
        <TextBox>Padding: 0 10px 0 10px;</TextBox>
      </>
  }
}`,...(_=(G=p.parameters)==null?void 0:G.docs)==null?void 0:_.source}}};var b,T,B;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 1200,
    padding: '0 10px 0 10px',
    children: <>
        <TextBox>max-width: 1200px</TextBox>
        <TextBox>Padding: 0 10px 0 10px;</TextBox>
      </>
  }
}`,...(B=(T=m.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var L,C,F;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 1400,
    padding: '0 10px 0 10px',
    children: <>
        <TextBox>max-width: 1400px</TextBox>
        <TextBox>Padding: 0 10px 0 10px;</TextBox>
      </>
  }
}`,...(F=(C=u.parameters)==null?void 0:C.docs)==null?void 0:F.source}}};var S,N,O;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    children: <>
        <TextBox>max-width: 1920px</TextBox>
        <TextBox>Padding: 0</TextBox>
      </>
  }
}`,...(O=(N=g.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var P,E,I;h.parameters={...h.parameters,docs:{...(P=h.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    margin: '100px',
    children: <>
        <TextBox>max-width: 1920px</TextBox>
        <TextBox>Margin: 100px;</TextBox>
      </>
  }
}`,...(I=(E=h.parameters)==null?void 0:E.docs)==null?void 0:I.source}}};var A,D,W;y.parameters={...y.parameters,docs:{...(A=y.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(W=(D=y.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var X,q,z;w.parameters={...w.parameters,docs:{...(X=w.parameters)==null?void 0:X.docs,source:{originalSource:`{
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
}`,...(z=(q=w.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};const $=["GridLayoutContainer600","GridLayoutContainer1200","GridLayoutContainer1400","GridLayoutContainer1920","GridLayoutContainerMargin","GridLayoutColumns","GridLayoutMixed"];export{y as GridLayoutColumns,m as GridLayoutContainer1200,u as GridLayoutContainer1400,g as GridLayoutContainer1920,p as GridLayoutContainer600,h as GridLayoutContainerMargin,w as GridLayoutMixed,$ as __namedExportsOrder,Z as default};
