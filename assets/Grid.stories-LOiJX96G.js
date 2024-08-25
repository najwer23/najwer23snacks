import{j as n}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var J="Grid-module_container__XaWe-",K="Grid-module_columns__N5MMF";(function(r,a){a===void 0&&(a={});var d=a.insertAt;if(typeof document<"u"){var t=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",d==="top"&&t.firstChild?t.insertBefore(i,t.firstChild):t.appendChild(i),i.styleSheet?i.styleSheet.cssText=r:i.appendChild(document.createTextNode(r))}})("@layer n23snacksGrid{.Grid-module_container__XaWe-{box-sizing:border-box;margin:var(--n23snacks-grid-margin);max-width:var(--n23snacks-grid-widthMax);min-width:var(--n23snacks-grid-widthMin);padding:var(--n23snacks-grid-padding)}.Grid-module_columns__N5MMF{column-gap:var(--n23snacks-grid-column-gap);display:flex;flex-wrap:wrap;row-gap:var(--n23snacks-grid-row-gap);width:100%}.Grid-module_columns__N5MMF>div{width:calc(100%/var(--n23snacks-flex-col) - ((var(--n23snacks-flex-col) - 1)/var(--n23snacks-flex-col))*var(--n23snacks-grid-column-gap))}@media (max-width:767.98px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-mobile)}}@media (min-width:768px) and (max-width:1199.98px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-tablet)}}@media (min-width:1200px) and (max-width:1599.98px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-small-desktop)}}@media (min-width:1600px){.Grid-module_columns__N5MMF>div{--n23snacks-flex-col:var(--n23snacks-grid-column-desktop)}}}");const l=r=>{var{children:a,widthMin:d=0,widthMax:t=1920,padding:i=0,margin:R="auto",layout:H,gap:y,col:c}=r,k=function(s,f){var w={};for(var e in s)Object.prototype.hasOwnProperty.call(s,e)&&f.indexOf(e)<0&&(w[e]=s[e]);if(s!=null&&typeof Object.getOwnPropertySymbols=="function"){var o=0;for(e=Object.getOwnPropertySymbols(s);o<e.length;o++)f.indexOf(e[o])<0&&Object.prototype.propertyIsEnumerable.call(s,e[o])&&(w[e[o]]=s[e[o]])}return w}(r,["children","widthMin","widthMax","padding","margin","layout","gap","col"]);if(H=="container")return n.jsx("div",Object.assign({className:J,style:{"--n23snacks-grid-widthMin":d+"px","--n23snacks-grid-widthMax":t+"px","--n23snacks-grid-padding":i,"--n23snacks-grid-margin":R}},k,{children:a}));if(!y||!c)throw new Error('When layout="columns", gap and col props are required');return n.jsx("div",Object.assign({className:K,style:{"--n23snacks-grid-column-mobile":c.mobile,"--n23snacks-grid-column-tablet":c.tablet,"--n23snacks-grid-column-small-desktop":c.smallDesktop,"--n23snacks-grid-column-desktop":c.desktop,"--n23snacks-grid-column-gap":y.col,"--n23snacks-grid-row-gap":y.row}},k,{children:a}))};l.displayName="Grid";const V={title:"Grid/Grid",component:l,tags:["autodocs"]},z="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",p={args:{layout:"container",widthMax:600,padding:"0 10px 0 10px",children:n.jsxs(n.Fragment,{children:[n.jsx("div",{children:"max-width: 600px"}),n.jsx("div",{children:"Padding: 0 10px 0 10px;"})]})}},m={args:{layout:"container",widthMax:1200,padding:"0 10px 0 10px",children:n.jsxs(n.Fragment,{children:[n.jsx("div",{children:"max-width: 1200px"}),n.jsx("div",{children:"Padding: 0 10px 0 10px;"})]})}},x={args:{layout:"container",widthMax:1400,padding:"0 10px 0 10px",children:n.jsxs(n.Fragment,{children:[n.jsx("div",{children:"max-width: 1400px"}),n.jsx("div",{children:"Padding: 0 10px 0 10px;"})]})}},u={args:{layout:"container",children:n.jsxs(n.Fragment,{children:[n.jsx("div",{children:"max-width: 1920px"}),n.jsx("div",{children:"Padding: 0"})]})}},g={args:{layout:"container",margin:"100px",children:n.jsxs(n.Fragment,{children:[n.jsx("div",{children:"max-width: 1920px"}),n.jsx("div",{children:"Margin: 100px;"})]})}},h={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:3,desktop:3,mobile:1,tablet:2}},render:r=>n.jsx(l,{...r,children:Array.from({length:9},(a,d)=>n.jsx("div",{children:n.jsx("div",{children:z})},d))})},v={args:{layout:"columns",gap:{col:"20px",row:"20px"},col:{smallDesktop:2,desktop:2,mobile:1,tablet:2}},render:r=>n.jsx(n.Fragment,{children:n.jsx(l,{layout:"container",widthMax:800,padding:"0 10px 0 10px",children:n.jsx(l,{...r,children:Array.from({length:9},(a,d)=>n.jsx("div",{children:n.jsx("div",{children:z})},d))})})})};var M,j,G;p.parameters={...p.parameters,docs:{...(M=p.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 600,
    padding: '0 10px 0 10px',
    children: <>
        <div>max-width: 600px</div>
        <div>Padding: 0 10px 0 10px;</div>
      </>
  }
}`,...(G=(j=p.parameters)==null?void 0:j.docs)==null?void 0:G.source}}};var _,b,L;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 1200,
    padding: '0 10px 0 10px',
    children: <>
        <div>max-width: 1200px</div>
        <div>Padding: 0 10px 0 10px;</div>
      </>
  }
}`,...(L=(b=m.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var C,F,S;x.parameters={...x.parameters,docs:{...(C=x.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    widthMax: 1400,
    padding: '0 10px 0 10px',
    children: <>
        <div>max-width: 1400px</div>
        <div>Padding: 0 10px 0 10px;</div>
      </>
  }
}`,...(S=(F=x.parameters)==null?void 0:F.docs)==null?void 0:S.source}}};var N,O,P;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    children: <>
        <div>max-width: 1920px</div>
        <div>Padding: 0</div>
      </>
  }
}`,...(P=(O=u.parameters)==null?void 0:O.docs)==null?void 0:P.source}}};var E,I,A;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    layout: 'container',
    margin: '100px',
    children: <>
        <div>max-width: 1920px</div>
        <div>Margin: 100px;</div>
      </>
  }
}`,...(A=(I=g.parameters)==null?void 0:I.docs)==null?void 0:A.source}}};var T,D,W;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
          <div>{testText}</div>
        </div>)}
    </Grid>
}`,...(W=(D=h.parameters)==null?void 0:D.docs)==null?void 0:W.source}}};var B,X,q;v.parameters={...v.parameters,docs:{...(B=v.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
                <div>{testText}</div>
              </div>)}
          </Grid>
        </Grid>
      </>;
  }
}`,...(q=(X=v.parameters)==null?void 0:X.docs)==null?void 0:q.source}}};const Y=["GridLayoutContainer600","GridLayoutContainer1200","GridLayoutContainer1400","GridLayoutContainer1920","GridLayoutContainerMargin","GridLayoutColumns","GridLayoutMixed"];export{h as GridLayoutColumns,m as GridLayoutContainer1200,x as GridLayoutContainer1400,u as GridLayoutContainer1920,p as GridLayoutContainer600,g as GridLayoutContainerMargin,v as GridLayoutMixed,Y as __namedExportsOrder,V as default};
