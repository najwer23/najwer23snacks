import{j as i}from"./jsx-runtime-DEdD30eg.js";const u="_heading1_auoq6_2",l="_heading2_auoq6_3",x="_heading3_auoq6_4",c="_paragraph_auoq6_5",T="_isTitle_auoq6_57",e={heading1:u,heading2:l,heading3:x,paragraph:c,isTitle:T},p=({tag:s="p",children:n,href:t,target:r,rel:_,isTitle:o,className:a,...d})=>{const h=s,g={h1:"heading1",h2:"heading2",h3:"heading3",p:"paragraph"};return t?i.jsx(h,{className:`${e[g[s]]} ${o?e.isTitle:""} ${a||""}`,children:i.jsx("a",{href:t,target:r,rel:_,...d,children:n})}):i.jsx(h,{className:`${e[g[s]]} ${o?e.isTitle:""} ${a||""}`,...d,children:n})};p.displayName="TextBox";p.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{tag:{defaultValue:{value:"'p'",computed:!1},required:!1}}};export{p as T};
