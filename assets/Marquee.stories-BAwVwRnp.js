import{j as e}from"./jsx-runtime-D_zvdyIk.js";const u="_marquee_ai84w_2",l="_track_ai84w_23",h="_slide_ai84w_1",a={marquee:u,track:l,slide:h},o=({children:s,gap:r="40px",height:d="200px",speed:m="10s"})=>e.jsxs("div",{className:a.marquee,style:{"--height":d,"--gap":r,"--speed":m},children:[e.jsx("div",{className:a.track,children:e.jsx(e.Fragment,{children:s})}),e.jsx("div",{className:a.track,children:e.jsx(e.Fragment,{children:s})})]});o.displayName="Marquee";o.__docgenInfo={description:"",methods:[],displayName:"Marquee",props:{gap:{defaultValue:{value:"'40px'",computed:!1},required:!1},height:{defaultValue:{value:"'200px'",computed:!1},required:!1},speed:{defaultValue:{value:"'10s'",computed:!1},required:!1}}};const g={title:"Marquee/Marquee",component:o,parameters:{layout:"centered"},tags:["autodocs"]},t={args:{height:"200px",speed:"15s",children:e.jsxs(e.Fragment,{children:[Array.from({length:5},(s,r)=>e.jsx("img",{src:"https://picsum.photos/200/200"},r)),e.jsx("img",{src:"https://picsum.photos/400/200"},5),e.jsx("img",{src:"https://picsum.photos/600/200"},5),e.jsx("img",{src:"https://picsum.photos/100/200"},5)]})},decorators:[s=>e.jsx("div",{style:{width:"900px"},children:e.jsx(s,{})})]};var p,c,i;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(i=(c=t.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};const x=["Marquee"];export{t as Marquee,x as __namedExportsOrder,g as default};
