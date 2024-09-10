import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as y}from"./index-RYns6xqu.js";import{B as d}from"./Button-B_v8z9C9.js";import{T as c}from"./TextBox-CFfT34kU.js";const T="_dialog_1ssuq_2",B="_minimize_1ssuq_25",_="_fadeout_1ssuq_1",j="_hasTitle_1ssuq_12",O="_dialogCloseButton_1ssuq_19",a={dialog:T,minimize:B,fadeout:_,hasTitle:j,dialogCloseButton:O},u=({modalOpen:t,modalClose:r,children:o,title:s,...i})=>{const n=y.useRef(null);return y.useEffect(()=>{var p,h;if(t)(p=n.current)==null||p.showModal(),document.body.style.paddingRight=`${window.innerWidth-document.body.clientWidth}px`,document.body.style.overflow="hidden";else{(h=n.current)==null||h.classList.add(a.minimize);const v=setTimeout(()=>{var g,f;(g=n.current)==null||g.close(),(f=n.current)==null||f.classList.remove(a.minimize),document.body.style.paddingRight="0",document.body.style.overflow=""},400);return()=>clearTimeout(v)}},[t]),e.jsxs("dialog",{className:[s?a.hasTitle:"",a.dialog].join(" "),"modal-mode":"mega",ref:n,onCancel:r,...i,children:[e.jsx("div",{className:a.dialogCloseButton,style:{display:t?"block":"none"},children:e.jsx(d,{onClick:r,kind:"close","aria-label":"close dialog"})}),s&&e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx(c,{tag:"h2",children:e.jsx("b",{children:s})})}),e.jsx("article",{children:o})]}),!s&&e.jsx("article",{children:o})]})};u.displayName="Dialog";u.__docgenInfo={description:"",methods:[],displayName:"Dialog"};const{useArgs:w}=__STORYBOOK_MODULE_PREVIEW_API__,S={title:"Dialog/Dialog",component:u,parameters:{layout:"centered"},tags:["autodocs"]},l={args:{title:"Title",modalOpen:!1,children:e.jsx(e.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),modalClose:()=>{}},decorators:[(t,r)=>{const[,o]=w(),s=()=>{o({modalOpen:!1})},i=()=>{o({modalOpen:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}),e.jsx(d,{onClick:i,children:"Dialog"}),e.jsx(t,{args:{...r.args,modalClose:s}})]})}]},m={args:{modalOpen:!1,children:e.jsx(e.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),modalClose:()=>{}},decorators:[(t,r)=>{const[,o]=w(),s=()=>{o({modalOpen:!1})},i=()=>{o({modalOpen:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}),e.jsx(d,{onClick:i,children:"Dialog"}),e.jsx(t,{args:{...r.args,modalClose:s}})]})}]};var b,x,k;l.parameters={...l.parameters,docs:{...(b=l.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
          <TextBox>
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
          </TextBox>

          <Button onClick={modalOpen}>Dialog</Button>
          <Story args={{
        ...ctx.args,
        modalClose
      }} />
        </>;
  }]
}`,...(k=(x=l.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var L,I,C;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
  args: {
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
          <TextBox>
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
          </TextBox>

          <Button onClick={modalOpen}>Dialog</Button>
          <Story args={{
        ...ctx.args,
        modalClose
      }} />
        </>;
  }]
}`,...(C=(I=m.parameters)==null?void 0:I.docs)==null?void 0:C.source}}};const D=["Dialog","DialogWithoutTitle"];export{l as Dialog,m as DialogWithoutTitle,D as __namedExportsOrder,S as default};
