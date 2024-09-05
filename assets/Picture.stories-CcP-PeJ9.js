import{j as t}from"./jsx-runtime-DEdD30eg.js";import{r as b}from"./index-RYns6xqu.js";const f="_picture_1m4ig_2",k="_border_1m4ig_5",B="_loaded_1m4ig_18",a={picture:f,border:k,loaded:B},g=({src:r,alt:x,ar:_,kind:y,draggable:P})=>{const[S,j]=b.useState(!1);return t.jsx("picture",{className:[a.picture,S&&a.loaded,a[y??""]].join(" "),children:t.jsx("img",{width:_,height:1,src:r,alt:x,loading:"lazy",onLoad:()=>j(!0),draggable:P})})};g.__docgenInfo={description:"",methods:[],displayName:"Picture"};const E={title:"Picture/Picture",component:g,parameters:{layout:"centered"},tags:["autodocs"]},e={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},decorators:[r=>t.jsx(r,{})]},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>t.jsx(r,{})]},s={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>t.jsx("div",{style:{width:"300px",height:"400px"},children:t.jsx(r,{})})]};var c,n,d;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4
  },
  decorators: [Story => <Story />]
}`,...(d=(n=e.parameters)==null?void 0:n.docs)==null?void 0:d.source}}};var i,p,u;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <Story />]
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var m,l,h;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <div style={{
    width: "300px",
    height: "400px"
  }}><Story /></div>]
}`,...(h=(l=s.parameters)==null?void 0:l.docs)==null?void 0:h.source}}};const C=["Picture","PictureBorder","PictureBorderContainer"];export{e as Picture,o as PictureBorder,s as PictureBorderContainer,C as __namedExportsOrder,E as default};
