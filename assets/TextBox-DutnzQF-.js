import{j as e}from"./jsx-runtime-DEdD30eg.js";const _="_heading1_z8s31_2",l="_heading2_z8s31_3",c="_heading3_z8s31_4",x="_paragraph_z8s31_5",m="_isTitle_z8s31_57",a={heading1:_,heading2:l,heading3:c,paragraph:x,isTitle:m},g=({tag:s="p",children:i,href:n,target:p,rel:r,isTitle:t,...o})=>{const d=s,h={h1:"heading1",h2:"heading2",h3:"heading3",p:"paragraph"};return n?e.jsx(d,{className:`${a[h[s]]} ${t?a.isTitle:""}`,children:e.jsx("a",{href:n,target:p,rel:r,...o,children:i})}):e.jsx(d,{className:`${a[h[s]]} ${t?a.isTitle:""}`,...o,children:i})};g.displayName="TextBox";g.__docgenInfo={description:"",methods:[],displayName:"TextBox",props:{tag:{defaultValue:{value:"'p'",computed:!1},required:!1}}};export{g as T};
