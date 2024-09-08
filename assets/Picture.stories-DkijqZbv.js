import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as f}from"./index-RYns6xqu.js";const k="_picture_hwp4q_2",w="_border_hwp4q_5",q="_loaded_hwp4q_18",a={picture:k,border:w,loaded:q},c=({src:r,alt:x,ar:y,kind:_,draggable:b,borderColor:P="black"})=>{const[S,j]=f.useState(!1);return e.jsx("picture",{className:[a.picture,S&&a.loaded,a[_??""]].join(" "),style:{"--borderColor":P},children:e.jsx("img",{width:y,height:1,src:r,alt:x,loading:"lazy",onLoad:()=>j(!0),draggable:b})})};c.displayName="Picture";c.__docgenInfo={description:"",methods:[],displayName:"Picture",props:{borderColor:{defaultValue:{value:"'black'",computed:!1},required:!1}}};const C={title:"Picture/Picture",component:c,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4},decorators:[r=>e.jsx(r,{})]},o={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx(r,{})]},s={args:{src:"https://picsum.photos/300/400",alt:"",ar:3/4,kind:"border"},decorators:[r=>e.jsx("div",{style:{width:"300px",height:"400px"},children:e.jsx(r,{})})]};var d,n,i;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(l=(u=o.parameters)==null?void 0:u.docs)==null?void 0:l.source}}};var m,h,g;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(g=(h=s.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};const E=["Picture","PictureBorder","PictureBorderContainer"];export{t as Picture,o as PictureBorder,s as PictureBorderContainer,E as __namedExportsOrder,C as default};
