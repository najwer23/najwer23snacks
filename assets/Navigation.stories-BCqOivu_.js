import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as v}from"./Grid-DrVcZ8eD.js";import{r as s}from"./index-RYns6xqu.js";import{u as b}from"./useWindowSize-CPHTifbr.js";import{B as j}from"./Button-V9SA-DzW.js";import{T as t}from"./TextBox-CFfT34kU.js";const N="_navigationItems_1ux8s_2",y="_navigationItemRight_1ux8s_9",I="_navigationItemLeft_1ux8s_18",w="_hr_1ux8s_27",M="_menuMobile_1ux8s_34",C="_open_1ux8s_47",S="_menuStrawberryContainer_1ux8s_52",E="_menuStrawberry_1ux8s_52",O="_menuClose_1ux8s_84",R="_menuOpen_1ux8s_111",n={navigationItems:N,navigationItemRight:y,navigationItemLeft:I,hr:w,menuMobile:M,open:C,menuStrawberryContainer:S,menuStrawberry:E,menuClose:O,menuOpen:R},u=({navigationWidthMax:o,navigationTitle:c,navigationTop:T,hrColor1:g,hrColor2:f,navigationMobile:k,navigationMobileAtWidth:x,navigationBottom:B})=>{const i=s.useRef(null),[d,l]=s.useState(!1),{width:r}=b();return s.useEffect(()=>{r>=x&&l(!1)},[r]),s.useEffect(()=>{d?document.body.classList.add(n.menuOpen):document.body.classList.remove(n.menuOpen)},[d]),s.useEffect(()=>{const a=h=>{i.current&&h.target instanceof HTMLElement&&h.target.tagName==="A"&&i.current.contains(h.target)&&l(!1)};return i.current&&i.current.addEventListener("click",a),()=>{i.current&&i.current.removeEventListener("click",a)}},[]),e.jsxs(e.Fragment,{children:[e.jsxs(v,{layout:"container",widthMax:o,padding:"0 10px 0 10px",children:[e.jsxs("div",{className:n.navigationItems,children:[e.jsx("div",{className:n.navigationItemLeft,children:c}),e.jsxs("div",{className:n.navigationItemRight,children:[r>=x&&e.jsx(e.Fragment,{children:T}),r<x&&e.jsx(j,{onClick:()=>l(a=>!a),kind:"strawberry","aria-label":"open menu",children:e.jsx("div",{className:n.menuStrawberryContainer,children:e.jsx("div",{className:n.menuStrawberry})})})]})]}),r>=x&&e.jsxs(e.Fragment,{children:[g&&e.jsx("div",{style:{backgroundColor:g},className:n.hr}),e.jsx("div",{className:n.navigationItems,children:e.jsx("div",{className:n.navigationItemLeft,children:B})}),f&&e.jsx("div",{style:{backgroundColor:f},className:n.hr})]})]}),e.jsxs("div",{className:[n.menuMobile,d&&n.open].join(" "),ref:i,children:[e.jsx(v,{layout:"container",widthMax:o,padding:"0 10px 0 10px",children:e.jsxs("div",{className:n.navigationItems,children:[e.jsx("div",{className:n.navigationItemLeft,children:c}),e.jsx("div",{className:n.navigationItemRight,children:e.jsx(j,{onClick:()=>l(a=>!a),kind:"strawberry","aria-label":"close menu",children:e.jsx("div",{className:n.menuStrawberryContainer,children:e.jsx("div",{className:n.menuClose})})})})]})}),k]})]})};u.displayName="Navigation";u.__docgenInfo={description:"",methods:[],displayName:"Navigation"};const q={title:"Menu/Navigation",component:u,tags:["autodocs"]},m={args:{navigationWidthMax:1e3,navigationTitle:e.jsx(t,{href:"/",tag:"h3",children:"Title for Menu"}),navigationMobileAtWidth:1e3,navigationTop:e.jsxs(e.Fragment,{children:[e.jsx(t,{tag:"h3",href:"#",children:"Link1"}),e.jsx(t,{tag:"h3",href:"#",children:"Link2"}),e.jsx(t,{tag:"h3",href:"#",children:"Link3"})]}),navigationBottom:e.jsxs(e.Fragment,{children:[e.jsx(t,{href:"/1",children:" Link1 "}),e.jsx(t,{href:"/2",children:" Link2 "}),e.jsx(t,{href:"/3",children:" Link3 "}),e.jsx(t,{href:"/4",children:" Link3 "}),e.jsx(t,{href:"/5",children:" Link3 "}),e.jsx(t,{href:"/6",children:" Link3 "})]}),hrColor1:"green",navigationMobile:e.jsx(e.Fragment,{children:"Halo"})},decorators:[(o,c)=>e.jsx("div",{children:e.jsx(o,{args:{...c.args}})})]};var p,_,L;m.parameters={...m.parameters,docs:{...(p=m.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(_=m.parameters)==null?void 0:_.docs)==null?void 0:L.source}}};const A=["Navigation"];export{m as Navigation,A as __namedExportsOrder,q as default};
