import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as i}from"./index-RYns6xqu.js";import{B as v}from"./Button-BqMg5MvL.js";import{u as B}from"./useWindowSize-CPHTifbr.js";const T="_carousel_1x7tn_2",F="_carouselWrapper_1x7tn_22",q="_arrowLeft_1x7tn_27",z="_arrowRight_1x7tn_38",K="_arrowShow_1x7tn_49",n={carousel:T,carouselWrapper:F,arrowLeft:q,arrowRight:z,arrowShow:K},w=({children:p,arrowLeftIcon:c,arrowRightIcon:W,gap:u="60px"})=>{const r=i.useRef(null),[I,m]=i.useState(!1),[M,d]=i.useState(!1),{width:b}=B(),h=()=>{var a,o,l;let e=getComputedStyle((a=r.current)==null?void 0:a.childNodes[1]);return parseInt(e.marginLeft)+parseInt(e.marginRight)+((l=(o=r.current)==null?void 0:o.childNodes[1])==null?void 0:l.offsetWidth)+Number(u==null?void 0:u.slice(0,-2))};i.useEffect(()=>{let e=setTimeout(()=>{x()},1);return()=>clearTimeout(e)},[b]);const k=()=>{r.current.scrollLeft-=Math.floor(r.current.offsetWidth/h())*h()},N=()=>{r.current.scrollLeft+=Math.floor(r.current.offsetWidth/h())*h()},x=()=>{r.current&&(r.current.scrollLeft<=0?(m(!1),r.current.scrollWidth-r.current.clientWidth!==0?d(!0):d(!1)):r.current.scrollLeft>=r.current.scrollWidth-r.current.clientWidth?(m(!0),d(!1)):(m(!0),d(!0)))},s=i.useRef({isDown:!1,startX:0,scrollLeft:0,isMove:!1}),A=e=>"pageX"in e?e.pageX:"touches"in e?e.touches[0].pageX:0,D=e=>{var a,o;s.current.isDown=!0,s.current.startX=e.pageX-(((a=r.current)==null?void 0:a.offsetLeft)||0),s.current.scrollLeft=((o=r.current)==null?void 0:o.scrollLeft)||0,r.current.style.scrollBehavior="unset"},X=e=>{s.current.isMove&&(e.preventDefault(),e.stopPropagation())},L=e=>{s.current.isDown=!1,r.current.style.scrollBehavior="smooth"},E=e=>{var l;if(!s.current.isDown){s.current.isMove=!1;return}e.preventDefault();const o=(A(e)-(((l=r.current)==null?void 0:l.offsetLeft)||0)-s.current.startX)*1;Math.abs(o)>5&&(s.current.isMove=!0),r.current.scrollLeft=s.current.scrollLeft-o};return t.jsx("div",{className:n.carouselWrapper,style:{"--n23snacks-carousel-gap":u},children:t.jsxs("div",{className:n.carousel,ref:r,onClick:X,onScroll:x,onMouseDown:D,onMouseLeave:L,onMouseUp:L,onMouseMove:E,children:[t.jsx("div",{className:[n.arrowLeft,I&&n.arrowShow].join(" "),children:t.jsx(v,{type:"button",onClick:k,children:c})}),p,t.jsx("div",{className:[n.arrowRight,M&&n.arrowShow].join(" "),children:t.jsx(v,{type:"button",onClick:N,children:W})})]})})};w.displayName="Carousel";w.__docgenInfo={description:"",methods:[],displayName:"Carousel",props:{gap:{defaultValue:{value:"'60px'",computed:!1},required:!1}}};const $={title:"Carousel/Carousel ",component:w,tags:["autodocs"],argTypes:{}},f={args:{arrowLeftIcon:t.jsx("div",{children:"L"}),arrowRightIcon:t.jsx("div",{children:"R"}),children:t.jsx(t.Fragment,{children:Array.from({length:15},(p,c)=>t.jsx("img",{draggable:"false",src:"https://picsum.photos/500/700",height:"700",width:"500",alt:""},c))})}},g={args:{arrowLeftIcon:t.jsx("div",{children:"L"}),arrowRightIcon:t.jsx("div",{children:"R"}),children:t.jsx(t.Fragment,{children:Array.from({length:20},(p,c)=>t.jsx("a",{draggable:"false",href:"/jkg",children:t.jsx("img",{draggable:"false",src:"https://picsum.photos/300/400",height:"400",width:"300",alt:""},c)}))})}};var _,j,R;f.parameters={...f.parameters,docs:{...(_=f.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>
        {Array.from({
        length: 15
      }, (_, i) => <img draggable="false" key={i} src="https://picsum.photos/500/700" height="700" width="500" alt="" />)}
      </>
  }
}`,...(R=(j=f.parameters)==null?void 0:j.docs)==null?void 0:R.source}}};var S,y,C;g.parameters={...g.parameters,docs:{...(S=g.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    arrowLeftIcon: <div>L</div>,
    arrowRightIcon: <div>R</div>,
    children: <>
        {Array.from({
        length: 20
      }, (_, i) => <a draggable="false" href="/jkg">
            <img draggable="false" key={i} src="https://picsum.photos/300/400" height="400" width="300" alt="" />
          </a>)}
      </>
  }
}`,...(C=(y=g.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};const G=["Carousel","CarouselStandardSmallerChild"];export{f as Carousel,g as CarouselStandardSmallerChild,G as __namedExportsOrder,$ as default};
