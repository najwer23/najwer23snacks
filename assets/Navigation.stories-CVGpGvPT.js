import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as p}from"./Grid-DrVcZ8eD.js";import{r as s}from"./index-RYns6xqu.js";import{B as j}from"./Button-DpkA2Ivk.js";import{T as n}from"./TextBox-DutnzQF-.js";const _="_navigationItems_h4m2t_2",N="_navigationItemRight_h4m2t_9",I="_navigationItemLeft_h4m2t_18",M="_hr_h4m2t_27",E="_menuMobile_h4m2t_34",b="_open_h4m2t_47",y="_menuOpen_h4m2t_52",t={navigationItems:_,navigationItemRight:N,navigationItemLeft:I,hr:M,menuMobile:E,open:b,menuOpen:y},O=(i=0)=>{const[o,x]=s.useState({width:window.innerWidth,height:window.innerHeight});return s.useLayoutEffect(()=>{let r=null;const c=()=>{i===0&&o.width!==window.innerWidth&&x({width:window.innerWidth,height:window.innerHeight}),i!==0&&(r&&clearTimeout(r),r=setTimeout(()=>{o.width!==window.innerWidth&&x({width:window.innerWidth,height:window.innerHeight})},i))};return window.addEventListener("resize",c),c(),()=>{window.removeEventListener("resize",c),r&&clearTimeout(r)}},[o,i]),o},v=({navigationWidthMax:i,navigationTitle:o,navigationTop:x,hrColor1:r,hrColor2:c,navigationMobile:k,navigationMobileAtWidth:m,navigationBottom:B})=>{const a=s.useRef(null),[f,l]=s.useState(!1),{width:h}=O();return s.useEffect(()=>{h>=m&&l(!1)},[h]),s.useEffect(()=>{f?document.body.classList.add(t.menuOpen):document.body.classList.remove(t.menuOpen)},[f]),s.useEffect(()=>{const d=u=>{a.current&&u.target instanceof HTMLElement&&u.target.tagName==="A"&&a.current.contains(u.target)&&l(!1)};return a.current&&a.current.addEventListener("click",d),()=>{a.current&&a.current.removeEventListener("click",d)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs(p,{layout:"container",widthMax:i,padding:"0 10px 0 10px",children:[e.jsxs("div",{className:t.navigationItems,children:[e.jsx("div",{className:t.navigationItemLeft,children:o}),e.jsxs("div",{className:t.navigationItemRight,children:[h>=m&&e.jsx(e.Fragment,{children:x}),h<m&&e.jsx(j,{onClick:()=>l(d=>!d),children:"Menu"})]})]}),h>=m&&e.jsxs(e.Fragment,{children:[r&&e.jsx("div",{style:{backgroundColor:r},className:t.hr}),e.jsx("div",{className:t.navigationItems,children:e.jsx("div",{className:t.navigationItemLeft,children:B})}),c&&e.jsx("div",{style:{backgroundColor:c},className:t.hr})]})]}),e.jsxs("div",{className:[t.menuMobile,f&&t.open].join(" "),ref:a,children:[e.jsx(p,{layout:"container",widthMax:i,padding:"0 10px 0 10px",children:e.jsxs("div",{className:t.navigationItems,children:[e.jsx("div",{className:t.navigationItemLeft,children:o}),e.jsx("div",{className:t.navigationItemRight,children:e.jsx(j,{onClick:()=>l(d=>!d),children:"Menu"})})]})}),k]})]})};v.displayName="Navigation";v.__docgenInfo={description:"",methods:[],displayName:"Navigation"};const W={title:"Menu/Navigation",component:v,tags:["autodocs"]},g={args:{navigationWidthMax:1e3,navigationTitle:e.jsx(n,{href:"/",tag:"h3",children:"Title for Menu"}),navigationMobileAtWidth:1e3,navigationTop:e.jsxs(e.Fragment,{children:[e.jsx(n,{tag:"h3",href:"#",children:"Link1"}),e.jsx(n,{tag:"h3",href:"#",children:"Link2"}),e.jsx(n,{tag:"h3",href:"#",children:"Link3"})]}),navigationBottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{href:"/1",children:" Link1 "}),e.jsx(n,{href:"/2",children:" Link2 "}),e.jsx(n,{href:"/3",children:" Link3 "}),e.jsx(n,{href:"/4",children:" Link3 "}),e.jsx(n,{href:"/5",children:" Link3 "}),e.jsx(n,{href:"/6",children:" Link3 "})]}),hrColor1:"green",navigationMobile:e.jsx(e.Fragment,{children:"Halo"})},decorators:[(i,o)=>e.jsx("div",{children:e.jsx(i,{args:{...o.args}})})]};var L,T,w;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(w=(T=g.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const C=["Navigation"];export{g as Navigation,C as __namedExportsOrder,W as default};
