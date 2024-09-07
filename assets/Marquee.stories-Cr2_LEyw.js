import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";const u="_marquee_o5jdf_2",l="_track_o5jdf_23",h="_slide_o5jdf_1",a={marquee:u,track:l,slide:h},i=({children:s,gap:r="40px",height:m="200px",speed:d="10s"})=>e.jsxs("div",{className:a.marquee,style:{"--n23snakcs-marquee-height":m,"--n23snacks-marquee-gap":r,"--n23snacks-marquee-speed":d},children:[e.jsx("div",{className:a.track,children:e.jsx(e.Fragment,{children:s})}),e.jsx("div",{className:a.track,children:e.jsx(e.Fragment,{children:s})})]});i.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{gap:{defaultValue:{value:"'40px'",computed:!1},required:!1},height:{defaultValue:{value:"'200px'",computed:!1},required:!1},speed:{defaultValue:{value:"'10s'",computed:!1},required:!1}}};const x={title:"Marquee/Marquee",component:i,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{height:"200px",speed:"15s",children:e.jsxs(e.Fragment,{children:[Array.from({length:5},(s,r)=>e.jsx("img",{src:"https://picsum.photos/200/200"},r)),e.jsx("img",{src:"https://picsum.photos/400/200"},5),e.jsx("img",{src:"https://picsum.photos/600/200"},5),e.jsx("img",{src:"https://picsum.photos/100/200"},5)]})},decorators:[s=>e.jsx("div",{style:{width:"900px"},children:e.jsx(s,{})})]};var o,c,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    height: '200px',
    speed: '15s',
    children: <>
        {Array.from({
        length: 5
      }, (_, i) => <img key={i} src="https://picsum.photos/200/200" />)}
        <img key={5} src="https://picsum.photos/400/200" />
        <img key={5} src="https://picsum.photos/600/200" />
        <img key={5} src="https://picsum.photos/100/200" />
      </>
  },
  decorators: [Story => <div style={{
    width: '900px'
  }}>
        <Story />
      </div>]
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};const f=["Marquee"];export{t as Marquee,f as __namedExportsOrder,x as default};
