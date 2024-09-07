import{j as e}from"./jsx-runtime-DEdD30eg.js";import{r as f}from"./index-RYns6xqu.js";import{B as m}from"./Button-CWdDAt4z.js";import{T as d}from"./TextBox-CFfT34kU.js";const w="_dialog_10mbt_2",T="_minimize_10mbt_25",B="_fadeout_10mbt_1",_="_hasTitle_10mbt_12",j="_dialogCloseButton_10mbt_19",n={dialog:w,minimize:T,fadeout:B,hasTitle:_,dialogCloseButton:j},c=({modalOpen:r,modalClose:i,children:t,title:s})=>{const o=f.useRef(null);return f.useEffect(()=>{var u,p;if(r)(u=o.current)==null||u.showModal(),document.body.style.paddingRight=`${window.innerWidth-document.body.clientWidth}px`,document.body.style.overflow="hidden";else{(p=o.current)==null||p.classList.add(n.minimize);const v=setTimeout(()=>{var h,g;(h=o.current)==null||h.close(),(g=o.current)==null||g.classList.remove(n.minimize),document.body.style.paddingRight="0",document.body.style.overflow=""},400);return()=>clearTimeout(v)}},[r]),e.jsx("dialog",{className:[s?n.hasTitle:"",n.dialog].join(" "),"modal-mode":"mega",ref:o,onCancel:i,children:e.jsxs("div",{className:n.dialogContent,children:[e.jsx("div",{className:n.dialogCloseButton,children:e.jsx(m,{onClick:i,kind:"close","aria-label":"close dialog"})}),s&&e.jsxs(e.Fragment,{children:[e.jsx("header",{children:e.jsx(d,{tag:"h2",children:e.jsx("b",{children:s})})}),e.jsx("article",{children:t})]}),!s&&e.jsx("article",{children:t})]})})};c.displayName="Dialog";c.__docgenInfo={description:"",methods:[],displayName:"Dialog"};const{useArgs:C}=__STORYBOOK_MODULE_PREVIEW_API__,A={title:"Dialog/Dialog",component:c,parameters:{layout:"centered"},tags:["autodocs"]},a={args:{title:"Title",modalOpen:!1,children:e.jsx(e.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),modalClose:()=>{}},decorators:[(r,i)=>{const[,t]=C(),s=()=>{t({modalOpen:!1})},o=()=>{t({modalOpen:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}),e.jsx(m,{onClick:o,children:"Dialog"}),e.jsx(r,{args:{...i.args,modalClose:s}})]})}]},l={args:{modalOpen:!1,children:e.jsx(e.Fragment,{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}),modalClose:()=>{}},decorators:[(r,i)=>{const[,t]=C(),s=()=>{t({modalOpen:!1})},o=()=>{t({modalOpen:!0})};return e.jsxs(e.Fragment,{children:[e.jsx(d,{children:'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.'}),e.jsx(m,{onClick:o,children:"Dialog"}),e.jsx(r,{args:{...i.args,modalClose:s}})]})}]};var y,b,x;a.parameters={...a.parameters,docs:{...(y=a.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(x=(b=a.parameters)==null?void 0:b.docs)==null?void 0:x.source}}};var L,k,I;l.parameters={...l.parameters,docs:{...(L=l.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(I=(k=l.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const S=["Dialog","DialogWithoutTitle"];export{a as Dialog,l as DialogWithoutTitle,S as __namedExportsOrder,A as default};
