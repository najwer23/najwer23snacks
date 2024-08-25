import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";var k={heading1:"TextBox-module_heading1__qK8du",heading2:"TextBox-module_heading2__I9JJ-",heading3:"TextBox-module_heading3__FngAt",paragraph:"TextBox-module_paragraph__fjzm4",link:"TextBox-module_link__NZGiO"};(function(n,o){o===void 0&&(o={});var i=o.insertAt;if(typeof document<"u"){var s=document.head||document.getElementsByTagName("head")[0],a=document.createElement("style");a.type="text/css",i==="top"&&s.firstChild?s.insertBefore(a,s.firstChild):s.appendChild(a),a.styleSheet?a.styleSheet.cssText=n:a.appendChild(document.createTextNode(n))}})("@layer n23snacksTextBox{.TextBox-module_heading1__qK8du,.TextBox-module_heading2__I9JJ-,.TextBox-module_heading3__FngAt,.TextBox-module_link__NZGiO,.TextBox-module_paragraph__fjzm4{font-family:var(--n23snack-font-family)}.TextBox-module_heading1__qK8du{color:var(--n23snack-textbox-h1-font-color);font-size:clamp(2rem,.924vw + 1.761rem,2.5rem);line-height:clamp(2.4rem,.647vw + 2.233rem,2.75rem)}.TextBox-module_heading2__I9JJ-{color:var(--n23snack-textbox-h2-font-color);font-size:clamp(1.5rem,.558vw + 1.5rem,2rem);line-height:clamp(1.8rem,.5vw + 2rem,2.25rem)}.TextBox-module_heading3__FngAt{color:var(--n23snack-textbox-h3-font-color);font-size:clamp(1.25rem,.462vw + 1.25rem,1.75rem);line-height:clamp(1.5rem,.25vw + 1.5rem,2rem)}.TextBox-module_paragraph__fjzm4{color:var(--n23snack-textbox-p-font-color);font-size:clamp(1rem,.231vw + .94rem,1.125rem);line-height:clamp(1.463rem,-.069vw + 1.518rem,1.5rem)}.TextBox-module_link__NZGiO{color:var(--n23snack-textbox-a-font-color);text-decoration:unset;transition:color .3s ease-in-out;&:active,&:focus,&:hover{color:var(--n23snack-textbox-a-font-color-hover);text-decoration:underline}}}");const m=n=>{var{tag:o="p",children:i,href:s,target:a,rel:X}=n,B=function(c,b){var w={};for(var r in c)Object.prototype.hasOwnProperty.call(c,r)&&b.indexOf(r)<0&&(w[r]=c[r]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function"){var l=0;for(r=Object.getOwnPropertySymbols(c);l<r.length;l++)b.indexOf(r[l])<0&&Object.prototype.propertyIsEnumerable.call(c,r[l])&&(w[r[l]]=c[r[l]])}return w}(n,["tag","children","href","target","rel"]);const Y=o,v={h1:"heading1",h2:"heading2",h3:"heading3",p:"paragraph"};return t.jsx(Y,s?{className:`${k[v[o]]}`,children:t.jsx("a",Object.assign({className:k.link,href:s,target:a,rel:X},B,{children:i}))}:Object.assign({className:`${k[v[o]]}`},B,{children:i}))};m.displayName="TextBox";const te={title:"Unknown/TextBox",component:m,parameters:{layout:"centered"},tags:["autodocs"]},e="Happiness can be found, even in the darkest of times, if one only remembers to turn on the light.",p={args:{children:e},decorators:[n=>t.jsxs(t.Fragment,{children:[t.jsxs(m,{tag:"h1",children:[" ",e," "]}),t.jsxs(m,{tag:"h2",children:[" ",e," "]}),t.jsxs(m,{tag:"h3",children:[" ",e," "]}),t.jsx(n,{}),t.jsx(m,{tag:"p",href:"https://www.example.com",children:e})]})]},d={args:{tag:"h1",children:e}},h={args:{tag:"h2",children:e}},x={args:{tag:"h3",children:e}},g={args:{children:e}},u={args:{tag:"h1",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}},f={args:{tag:"h2",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}},_={args:{tag:"h3",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}},T={args:{tag:"p",href:"https://www.example.com",target:"_blank",rel:"noopener noreferrer",children:e}};var y,j,S;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(S=(j=p.parameters)==null?void 0:j.docs)==null?void 0:S.source}}};var O,H,N;d.parameters={...d.parameters,docs:{...(O=d.parameters)==null?void 0:O.docs,source:{originalSource:`{
  args: {
    tag: 'h1',
    children: testText
  }
}`,...(N=(H=d.parameters)==null?void 0:H.docs)==null?void 0:N.source}}};var L,z,E;h.parameters={...h.parameters,docs:{...(L=h.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
    tag: 'h2',
    children: testText
  }
}`,...(E=(z=h.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var P,A,J;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
  args: {
    tag: 'h3',
    children: testText
  }
}`,...(J=(A=x.parameters)==null?void 0:A.docs)==null?void 0:J.source}}};var C,F,I;g.parameters={...g.parameters,docs:{...(C=g.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    children: testText
  }
}`,...(I=(F=g.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var q,G,K;u.parameters={...u.parameters,docs:{...(q=u.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    tag: 'h1',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(K=(G=u.parameters)==null?void 0:G.docs)==null?void 0:K.source}}};var Z,$,R;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    tag: 'h2',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(R=($=f.parameters)==null?void 0:$.docs)==null?void 0:R.source}}};var U,D,M;_.parameters={..._.parameters,docs:{...(U=_.parameters)==null?void 0:U.docs,source:{originalSource:`{
  args: {
    tag: 'h3',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(M=(D=_.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var Q,V,W;T.parameters={...T.parameters,docs:{...(Q=T.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  args: {
    tag: 'p',
    href: 'https://www.example.com',
    target: '_blank',
    rel: 'noopener noreferrer',
    children: testText
  }
}`,...(W=(V=T.parameters)==null?void 0:V.docs)==null?void 0:W.source}}};const ae=["All","H1","H2","H3","Paragraph","LinkH1","LinkH2","LinkH3","LinkParagraph"];export{p as All,d as H1,h as H2,x as H3,u as LinkH1,f as LinkH2,_ as LinkH3,T as LinkParagraph,g as Paragraph,ae as __namedExportsOrder,te as default};
