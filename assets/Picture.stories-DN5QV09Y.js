import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as j}from"./index-RYns6xqu.js";const k="_picture_18fxs_2",v="_border_18fxs_5",B="_loaded_18fxs_18",a={picture:k,border:v,loaded:B},x=({src:r,alt:g,ar:y,kind:_,draggable:b,borderColor:f="black"})=>{const[P,S]=j.useState(!1);return e.jsx("picture",{className:[a.picture,P&&a.loaded,a[_??""]].join(" "),style:{"--n23snacks-picture-borderColor":f},children:e.jsx("img",{width:y,height:1,src:r,alt:g,loading:"lazy",onLoad:()=>S(!0),draggable:b})})};x.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{borderColor:{defaultValue:{value:'"black"',computed:!1},required:!1}}};const E={title:"Picture/Picture",component:x,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},decorators:[r=>e.jsx(r,{})]},s={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx(r,{})]},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(r,{})})]};var c,d,n;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4
  },
  decorators: [Story => <Story />]
}`,...(n=(d=t.parameters)==null?void 0:d.docs)==null?void 0:n.source}}};var i,p,u;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    src: "https://picsum.photos/300/400",
    alt: "",
    ar: 3 / 4,
    kind: "border"
  },
  decorators: [Story => <Story />]
}`,...(u=(p=s.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var l,m,h;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(h=(m=o.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const L=["Picture","PictureBorder","PictureBorderContainer"];export{t as Picture,s as PictureBorder,o as PictureBorderContainer,L as __namedExportsOrder,E as default};
