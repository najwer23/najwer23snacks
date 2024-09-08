import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as v}from"./Grid-CFTZkEi3.js";import{r}from"./index-RYns6xqu.js";import{u as N}from"./useWindowSize-CPHTifbr.js";import{B as p}from"./Button-CWdDAt4z.js";import{T as n}from"./TextBox-CFfT34kU.js";const I="_navigationItems_h4m2t_2",M="_navigationItemRight_h4m2t_9",b="_navigationItemLeft_h4m2t_18",y="_hr_h4m2t_27",E="_menuMobile_h4m2t_34",O="_open_h4m2t_47",R="_menuOpen_h4m2t_52",t={navigationItems:I,navigationItemRight:M,navigationItemLeft:b,hr:y,menuMobile:E,open:O,menuOpen:R},g=({navigationWidthMax:s,navigationTitle:c,navigationTop:k,hrColor1:f,hrColor2:u,navigationMobile:B,navigationMobileAtWidth:x,navigationBottom:_})=>{const i=r.useRef(null),[d,l]=r.useState(!1),{width:o}=N();return r.useEffect(()=>{o>=x&&l(!1)},[o]),r.useEffect(()=>{d?document.body.classList.add(t.menuOpen):document.body.classList.remove(t.menuOpen)},[d]),r.useEffect(()=>{const a=h=>{i.current&&h.target instanceof HTMLElement&&h.target.tagName==="A"&&i.current.contains(h.target)&&l(!1)};return i.current&&i.current.addEventListener("click",a),()=>{i.current&&i.current.removeEventListener("click",a)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs(v,{layout:"container",widthMax:s,padding:"0 10px 0 10px",children:[e.jsxs("div",{className:t.navigationItems,children:[e.jsx("div",{className:t.navigationItemLeft,children:c}),e.jsxs("div",{className:t.navigationItemRight,children:[o>=x&&e.jsx(e.Fragment,{children:k}),o<x&&e.jsx(p,{onClick:()=>l(a=>!a),kind:"strawberry","aria-label":"open menu"})]})]}),o>=x&&e.jsxs(e.Fragment,{children:[f&&e.jsx("div",{style:{backgroundColor:f},className:t.hr}),e.jsx("div",{className:t.navigationItems,children:e.jsx("div",{className:t.navigationItemLeft,children:_})}),u&&e.jsx("div",{style:{backgroundColor:u},className:t.hr})]})]}),e.jsxs("div",{className:[t.menuMobile,d&&t.open].join(" "),ref:i,children:[e.jsx(v,{layout:"container",widthMax:s,padding:"0 10px 0 10px",children:e.jsxs("div",{className:t.navigationItems,children:[e.jsx("div",{className:t.navigationItemLeft,children:c}),e.jsx("div",{className:t.navigationItemRight,children:e.jsx(p,{onClick:()=>l(a=>!a),kind:"close","aria-label":"close menu"})})]})}),B]})]})};g.displayName="Navigation";g.__docgenInfo={description:"",methods:[],displayName:"Navigation"};const z={title:"Menu/Navigation",component:g,tags:["autodocs"]},m={args:{navigationWidthMax:1e3,navigationTitle:e.jsx(n,{href:"/",tag:"h3",children:"Title for Menu"}),navigationMobileAtWidth:1e3,navigationTop:e.jsxs(e.Fragment,{children:[e.jsx(n,{tag:"h3",href:"#",children:"Link1"}),e.jsx(n,{tag:"h3",href:"#",children:"Link2"}),e.jsx(n,{tag:"h3",href:"#",children:"Link3"})]}),navigationBottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{href:"/1",children:" Link1 "}),e.jsx(n,{href:"/2",children:" Link2 "}),e.jsx(n,{href:"/3",children:" Link3 "}),e.jsx(n,{href:"/4",children:" Link3 "}),e.jsx(n,{href:"/5",children:" Link3 "}),e.jsx(n,{href:"/6",children:" Link3 "})]}),hrColor1:"green",navigationMobile:e.jsx(e.Fragment,{children:"Halo"})},decorators:[(s,c)=>e.jsx("div",{children:e.jsx(s,{args:{...c.args}})})]};var j,L,T;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    navigationWidthMax: 1000,
    navigationTitle: <TextBox href={'/'} tag={'h3'}>
        Title for Menu
      </TextBox>,
    navigationMobileAtWidth: 1000,
    navigationTop: <>
        <TextBox tag={'h3'} href="#">
          Link1
        </TextBox>
        <TextBox tag={'h3'} href="#">
          Link2
        </TextBox>
        <TextBox tag={'h3'} href="#">
          Link3
        </TextBox>
      </>,
    navigationBottom: <>
        <TextBox href="/1"> Link1 </TextBox>
        <TextBox href="/2"> Link2 </TextBox>
        <TextBox href="/3"> Link3 </TextBox>
        <TextBox href="/4"> Link3 </TextBox>
        <TextBox href="/5"> Link3 </TextBox>
        <TextBox href="/6"> Link3 </TextBox>
      </>,
    hrColor1: 'green',
    navigationMobile: <>Halo</>
  },
  decorators: [(Story, ctx) => {
    return <div>
          <Story args={{
        ...ctx.args
      }} />
        </div>;
  }]
}`,...(T=(L=m.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const W=["Navigation"];export{m as Navigation,W as __namedExportsOrder,z as default};
