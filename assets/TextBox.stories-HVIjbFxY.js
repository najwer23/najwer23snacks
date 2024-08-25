import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var k={heading1:"TextBox-module_heading1__qK8du",heading2:"TextBox-module_heading2__I9JJ-",heading3:"TextBox-module_heading3__FngAt",paragraph:"TextBox-module_paragraph__fjzm4"};(function(n,o){o===void 0&&(o={});var d=o.insertAt;if(typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",d==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}})("@layer n23snacksTextBox{.TextBox-module_heading1__qK8du,.TextBox-module_heading1__qK8du a,.TextBox-module_heading2__I9JJ-,.TextBox-module_heading2__I9JJ- a,.TextBox-module_heading3__FngAt,.TextBox-module_heading3__FngAt a,.TextBox-module_paragraph__fjzm4,.TextBox-module_paragraph__fjzm4 a{font-family:var(--n23snack-font-family)}.TextBox-module_heading1__qK8du{color:var(--n23snack-textbox-h1-font-color);font-size:clamp(2rem,.924vw + 1.761rem,2.5rem);line-height:clamp(2.4rem,.647vw + 2.233rem,2.75rem)}.TextBox-module_heading2__I9JJ-{color:var(--n23snack-textbox-h2-font-color);font-size:clamp(1.5rem,.558vw + 1.5rem,2rem);line-height:clamp(1.8rem,.5vw + 2rem,2.25rem)}.TextBox-module_heading3__FngAt{color:var(--n23snack-textbox-h3-font-color);font-size:clamp(1.25rem,.462vw + 1.25rem,1.75rem);line-height:clamp(1.5rem,.25vw + 1.5rem,2rem)}.TextBox-module_paragraph__fjzm4{color:var(--n23snack-textbox-p-font-color);font-size:clamp(1rem,.231vw + .94rem,1.125rem);line-height:clamp(1.463rem,-.069vw + 1.518rem,1.5rem)}.TextBox-module_heading1__qK8du a,.TextBox-module_heading2__I9JJ- a,.TextBox-module_heading3__FngAt a,.TextBox-module_paragraph__fjzm4 a{color:var(--n23snack-textbox-a-font-color);text-decoration:unset;transition:color .3s ease-in-out;&:active,&:focus,&:hover{color:var(--n23snack-textbox-a-font-color-hover);text-decoration:underline}}}");const m=n=>{var{tag:o="p",children:d,href:s,target:a,rel:Y}=n,B=function(c,b){var w={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&b.indexOf(r)<0&&(w[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(r=Object.getOwnPropertySymbols(c);l<r.length;l++)b.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(c,r[l])&&(w[r[l]]=c[r[l]])}return w}(n,["tag","children","href","target","rel"]);const Z=o,v={h1:"heading1",h2:"heading2",h3:"heading3",p:"paragraph"};return t.jsx(Z,s?{className:`${k[v[o]]}`,children:t.jsx("a",Object.assign({href:s,target:a,rel:Y},B,{children:d}))}:Object.assign({className:`${k[v[o]]}`},B,{children:d}))};m.displayName="TextBox";const te={title:"Text/TextBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},e="Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",h={args:{children:e},decorators:[n=>t.jsxs(t.Fragment,{children:[t.jsxs(m,{tag:"h1",children:[" ",e," "]}),t.jsxs(m,{tag:"h2",children:[" ",e," "]}),t.jsxs(m,{tag:"h3",children:[" ",e," "]}),t.jsx(n,{}),t.jsx(m,{tag:"p",href:"https://www.example.com",children:e})]})]},p={args:{tag:"h1",children:e}},i={args:{tag:"h2",children:e}},x={args:{tag:"h3",children:e}},g={args:{children:e}},u={args:{tag:"h1",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}},_={args:{tag:"h2",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}},f={args:{tag:"h3",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}},T={args:{tag:"p",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}};var y,j,S;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    children: testText
  },
  decorators: [Story => {
    return <>
          <TextBox tag={'h1'}> {testText} </TextBox>
          <TextBox tag={'h2'}> {testText} </TextBox>
          <TextBox tag={'h3'}> {testText} </TextBox>
          <Story />
          <TextBox tag={'p'} href={'https://www.example.com'}>
            {testText}
          </TextBox>
        </>;
  }]
}`,...(S=(j=h.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var H,O,J;p.parameters={...p.parameters,docs:{...(H=p.parameters)==null?void 0:H.docs,source:{originalSource:`{
  args: {
    tag: 'h1',
    children: testText
  }
}`,...(J=(O=p.parameters)==null?void 0:O.docs)==null?void 0:J.source}}};var z,A,L;i.parameters={...i.parameters,docs:{...(z=i.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    tag: 'h2',
    children: testText
  }
}`,...(L=(A=i.parameters)==null?void 0:A.docs)==null?void 0:L.source}}};var E,P,F;x.parameters={...x.parameters,docs:{...(E=x.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    tag: 'h3',
    children: testText
  }
}`,...(F=(P=x.parameters)==null?void 0:P.docs)==null?void 0:F.source}}};var I,q,K;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    children: testText
  }
}`,...(K=(q=g.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};var N,C,$;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    tag: 'h1',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...($=(C=u.parameters)==null?void 0:C.docs)==null?void 0:$.source}}};var R,D,G;_.parameters={..._.parameters,docs:{...(R=_.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    tag: 'h2',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(G=(D=_.parameters)==null?void 0:D.docs)==null?void 0:G.source}}};var M,Q,U;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
  args: {
    tag: 'h3',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(U=(Q=f.parameters)==null?void 0:Q.docs)==null?void 0:U.source}}};var V,W,X;T.parameters={...T.parameters,docs:{...(V=T.parameters)==null?void 0:V.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(X=(W=T.parameters)==null?void 0:W.docs)==null?void 0:X.source}}};const ae=["All","H1","H2","H3","Paragraph","LinkH1","LinkH2","LinkH3","LinkParagraph"];export{h as All,p as H1,i as H2,x as H3,u as LinkH1,_ as LinkH2,f as LinkH3,T as LinkParagraph,g as Paragraph,ae as __namedExportsOrder,te as default};
