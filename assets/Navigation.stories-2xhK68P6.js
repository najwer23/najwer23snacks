import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as v}from"./Grid-DrVcZ8eD.js";import{r}from"./index-RYns6xqu.js";import{u as N}from"./useWindowSize-CPHTifbr.js";import{B as p}from"./Button-CWdDAt4z.js";import{T as t}from"./TextBox-CFfT34kU.js";const I="_navigationItems_1l010_2",M="_navigationItemRight_1l010_9",b="_navigationItemLeft_1l010_18",y="_hr_1l010_27",E="_menuMobile_1l010_34",O="_open_1l010_47",R="_menuOpen_1l010_52",n={navigationItems:I,navigationItemRight:M,navigationItemLeft:b,hr:y,menuMobile:E,open:O,menuOpen:R},g=({navigationWidthMax:s,navigationTitle:c,navigationTop:k,hrColor1:f,hrColor2:u,navigationMobile:B,navigationMobileAtWidth:l,navigationBottom:_})=>{const i=r.useRef(null),[m,x]=r.useState(!1),{width:o}=N();return r.useEffect(()=>{o>=l&&x(!1)},[o]),r.useEffect(()=>{m?document.body.classList.add(n.menuOpen):document.body.classList.remove(n.menuOpen)},[m]),r.useEffect(()=>{const a=h=>{i.current&&h.target instanceof HTMLElement&&h.target.tagName==="A"&&i.current.contains(h.target)&&x(!1)};return i.current&&i.current.addEventListener("click",a),()=>{i.current&&i.current.removeEventListener("click",a)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs(v,{layout:"container",widthMax:s,padding:"0 10px 0 10px",children:[e.jsxs("div",{className:n.navigationItems,children:[e.jsx("div",{className:n.navigationItemLeft,children:c}),e.jsxs("div",{className:n.navigationItemRight,children:[o>=l&&e.jsx(e.Fragment,{children:k}),o<l&&e.jsx(p,{onClick:()=>x(a=>!a),kind:"strawberry","aria-label":"open menu"})]})]}),o>=l&&e.jsxs(e.Fragment,{children:[f&&e.jsx("div",{style:{backgroundColor:f},className:n.hr}),e.jsx("div",{className:n.navigationItems,children:e.jsx("div",{className:n.navigationItemLeft,children:_})}),u&&e.jsx("div",{style:{backgroundColor:u},className:n.hr})]})]}),e.jsxs("div",{className:[n.menuMobile,m&&n.open].join(" "),ref:i,children:[e.jsx(v,{layout:"container",widthMax:s,padding:"0 10px 0 10px",children:e.jsxs("div",{className:n.navigationItems,children:[e.jsx("div",{className:n.navigationItemLeft,children:c}),e.jsx("div",{className:n.navigationItemRight,children:e.jsx(p,{onClick:()=>x(a=>!a),kind:"close","aria-label":"close menu"})})]})}),B]})]})};g.displayName="Navigation";g.__docgenInfo={description:"",methods:[],displayName:"Navigation"};const z={title:"Menu/Navigation",component:g,tags:["autodocs"]},d={args:{navigationWidthMax:1e3,navigationTitle:e.jsx(t,{href:"/",tag:"h3",children:"Title for Menu"}),navigationMobileAtWidth:1e3,navigationTop:e.jsxs(e.Fragment,{children:[e.jsx(t,{tag:"h3",href:"#",children:"Link1"}),e.jsx(t,{tag:"h3",href:"#",children:"Link2"}),e.jsx(t,{tag:"h3",href:"#",children:"Link3"})]}),navigationBottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{href:"/1",children:" Link1 "}),e.jsx(t,{href:"/2",children:" Link2 "}),e.jsx(t,{href:"/3",children:" Link3 "}),e.jsx(t,{href:"/4",children:" Link3 "}),e.jsx(t,{href:"/5",children:" Link3 "}),e.jsx(t,{href:"/6",children:" Link3 "})]}),hrColor1:"green",navigationMobile:e.jsx(e.Fragment,{children:"Halo"})},decorators:[(s,c)=>e.jsx("div",{children:e.jsx(s,{args:{...c.args}})})]};var j,L,T;d.parameters={...d.parameters,docs:{...(j=d.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(T=(L=d.parameters)==null?void 0:L.docs)==null?void 0:T.source}}};const W=["Navigation"];export{d as Navigation,W as __namedExportsOrder,z as default};
