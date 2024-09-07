import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as f}from"./index-RYns6xqu.js";const k="_picture_1htdx_2",v="_border_1htdx_5",B="_loaded_1htdx_18",a={picture:k,border:v,loaded:B},c=({src:r,alt:g,ar:y,kind:_,draggable:b,borderColor:P="black"})=>{const[S,j]=f.useState(!1);return e.jsx("picture",{className:[a.picture,S&&a.loaded,a[_??""]].join(" "),style:{"--n23snacks-picture-borderColor":P},children:e.jsx("img",{width:y,height:1,src:r,alt:g,loading:"lazy",onLoad:()=>j(!0),draggable:b})})};c.displayName="Picture";c.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1}}};const E={title:"Picture/Picture",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},decorators:[r=>e.jsx(r,{})]},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx(r,{})]},s={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(r,{})})]};var d,n,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4
  },
  decorators: [Story => <Story />]
}`,...(i=(n=t.parameters)==null?void 0:n.docs)==null?void 0:i.source}}};var p,u,l;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    kind: 'border'
  },
  decorators: [Story => <Story />]
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,h,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    src: 'https://picsum.photos/300/400',
    alt: '',
    ar: 3 / 4,
    kind: 'border'
  },
  decorators: [Story => <div style={{
    width: '300px',
    height: '400px'
  }}>
        <Story />
      </div>]
}`,...(x=(h=s.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const N=["Picture","PictureBorder","PictureBorderContainer"];export{t as Picture,o as PictureBorder,s as PictureBorderContainer,N as __namedExportsOrder,E as default};
