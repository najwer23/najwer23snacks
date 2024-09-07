import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as p}from"./index-RYns6xqu.js";import{B as b}from"./Button-V9SA-DzW.js";import{G as x}from"./Grid-DrVcZ8eD.js";import{T as k}from"./TextBox-CFfT34kU.js";const L="_dialog_fbmua_2",I="_slidein_fbmua_1",w="_minimize_fbmua_17",_="_fadein_fbmua_1",v="_fadeout_fbmua_1",a={dialog:L,slidein:I,minimize:w,fadein:_,fadeout:v},l=({modalOpen:t,modalClose:s,children:r,title:i})=>{const o=p.useRef(null);return p.useEffect(()=>{var d,m;if(t)(d=o.current)==null||d.showModal(),document.body.style.paddingRight=`${window.innerWidth-document.body.clientWidth}px`,document.body.style.overflow="hidden";else{(m=o.current)==null||m.classList.add(a.minimize);const y=setTimeout(()=>{var c,u;(c=o.current)==null||c.close(),(u=o.current)==null||u.classList.remove(a.minimize),document.body.style.paddingRight="0",document.body.style.overflow=""},400);return()=>clearTimeout(y)}},[t]),e.jsx("dialog",{className:a.dialog,"modal-mode":"mega",ref:o,onCancel:s,children:e.jsx(x,{gap:{col:"0px",row:"20px"},col:{mobile:1,smallDesktop:1,desktop:1,tablet:1},layout:"columns",children:e.jsxs(e.Fragment,{children:[i&&e.jsx("header",{children:e.jsx(k,{children:e.jsx("b",{children:i})})}),e.jsx("article",{children:r}),e.jsx("footer",{children:e.jsx(b,{onClick:s,type:"button",children:"Close"})})]})})})};l.displayName="Dialog";l.__docgenInfo={description:"",methods:[],displayName:"Dialog"};const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,R={title:"Dialog/Dialog",component:l,parameters:{layout:"centered"},tags:["autodocs"]},n={args:{title:"Title",modalOpen:!1,children:e.jsx(e.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),modalClose:()=>{}},decorators:[(t,s)=>{const[,r]=C(),i=()=>{r({modalOpen:!1})},o=()=>{r({modalOpen:!0})};return e.jsxs(e.Fragment,{children:[e.jsx("p",{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}),e.jsx("button",{onClick:o,children:"Dialog"}),e.jsx(t,{args:{...s.args,modalClose:i}})]})}]};var h,f,g;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    title: 'Title',
    modalOpen: false,
    children: <>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </>,
    modalClose: () => {}
  },
  decorators: [(Story, ctx) => {
    const [, setArgs] = useArgs<typeof ctx.args>();
    const modalClose = () => {
      setArgs({
        modalOpen: false
      });
    };
    const modalOpen = () => {
      setArgs({
        modalOpen: true
      });
    };
    return <>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical
            Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
            Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
            Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable
            source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
            of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
            during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
            section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced
            in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
          </p>
          <button onClick={modalOpen}>Dialog</button>
          <Story args={{
        ...ctx.args,
        modalClose
      }} />
        </>;
  }]
}`,...(g=(f=n.parameters)==null?void 0:f.docs)==null?void 0:g.source}}};const D=["Dialog"];export{n as Dialog,D as __namedExportsOrder,R as default};
