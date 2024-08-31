import{j as e}from"./jsx-runtime-DEdD30eg.js";import{G as u}from"./Grid-DrVcZ8eD.js";import{r as d}from"./index-RYns6xqu.js";import{B as v}from"./Button-DpkA2Ivk.js";import{T as n}from"./TextBox-D_GQVrpR.js";const B="_navigationItems_h4m2t_2",_="_navigationItemRight_h4m2t_9",k="_navigationItemLeft_h4m2t_18",I="_hr_h4m2t_27",N="_menuMobile_h4m2t_34",M="_open_h4m2t_47",b="_menuOpen_h4m2t_52",i={navigationItems:B,navigationItemRight:_,navigationItemLeft:k,hr:I,menuMobile:N,open:M,menuOpen:b},y=(t=0)=>{const[o,h]=d.useState({width:window.innerWidth,height:window.innerHeight});return d.useLayoutEffect(()=>{let a=null;const s=()=>{t===0&&o.width!==window.innerWidth&&h({width:window.innerWidth,height:window.innerHeight}),t!==0&&(a&&clearTimeout(a),a=setTimeout(()=>{o.width!==window.innerWidth&&h({width:window.innerWidth,height:window.innerHeight})},t))};return window.addEventListener("resize",s),s(),()=>{window.removeEventListener("resize",s),a&&clearTimeout(a)}},[o,t]),o},f=({navigationWidthMax:t,navigationTitle:o,navigationTop:h,hrColor1:a,hrColor2:s,navigationMobile:T,navigationMobileAtWidth:c,navigationBottom:w})=>{const[m,l]=d.useState(!1),{width:r}=y();return d.useEffect(()=>{r>=c&&(l(!1),document.body.classList.remove(i.menuOpen))},[r]),d.useEffect(()=>{m?document.body.classList.add(i.menuOpen):document.body.classList.remove(i.menuOpen)},[m]),e.jsxs(e.Fragment,{children:[e.jsxs(u,{layout:"container",widthMax:t,padding:"0 10px 0 10px",children:[e.jsxs("div",{className:i.navigationItems,children:[e.jsx("div",{className:i.navigationItemLeft,children:o}),e.jsxs("div",{className:i.navigationItemRight,children:[r>=c&&e.jsx(e.Fragment,{children:h}),r<c&&e.jsx(v,{onClick:()=>l(g=>!g),children:"Menu"})]})]}),r>=c&&e.jsxs(e.Fragment,{children:[a&&e.jsx("div",{style:{backgroundColor:a},className:i.hr}),e.jsx("div",{className:i.navigationItems,children:e.jsx("div",{className:i.navigationItemLeft,children:w})}),s&&e.jsx("div",{style:{backgroundColor:s},className:i.hr})]})]}),e.jsxs("div",{className:[i.menuMobile,m&&i.open].join(" "),children:[e.jsx(u,{layout:"container",widthMax:t,padding:"0 10px 0 10px",children:e.jsxs("div",{className:i.navigationItems,children:[e.jsx("div",{className:i.navigationItemLeft,children:o}),e.jsx("div",{className:i.navigationItemRight,children:e.jsx(v,{onClick:()=>l(g=>!g),children:"Menu"})})]})}),T]})]})};f.displayName="Navigation";f.__docgenInfo={description:"",methods:[],displayName:"Navigation"};const R={title:"Menu/Navigation",component:f,tags:["autodocs"]},x={args:{navigationWidthMax:1e3,navigationTitle:e.jsx(n,{href:"/",tag:"h3",children:"Title for Menu"}),navigationMobileAtWidth:1e3,navigationTop:e.jsxs(e.Fragment,{children:[e.jsx(n,{tag:"h3",href:"#",children:"Link1"}),e.jsx(n,{tag:"h3",href:"#",children:"Link2"}),e.jsx(n,{tag:"h3",href:"#",children:"Link3"})]}),navigationBottom:e.jsxs(e.Fragment,{children:[e.jsx(n,{href:"/1",children:" Link1 "}),e.jsx(n,{href:"/2",children:" Link2 "}),e.jsx(n,{href:"/3",children:" Link3 "}),e.jsx(n,{href:"/4",children:" Link3 "}),e.jsx(n,{href:"/5",children:" Link3 "}),e.jsx(n,{href:"/6",children:" Link3 "})]}),hrColor1:"green",navigationMobile:e.jsx(e.Fragment,{children:"Halo"})},decorators:[(t,o)=>e.jsx("div",{children:e.jsx(t,{args:{...o.args}})})]};var p,j,L;x.parameters={...x.parameters,docs:{...(p=x.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(L=(j=x.parameters)==null?void 0:j.docs)==null?void 0:L.source}}};const W=["Navigation"];export{x as Navigation,W as __namedExportsOrder,R as default};
