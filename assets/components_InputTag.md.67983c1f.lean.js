import{b as t,B as n,l as a,f as s,g as e,D as l,_ as o,aa as p,s as c}from"./framework.9cb6416d.js";const u=p('',4),i=e("p",null,[c("使用 "),e("code",null,"pro-input-tag"),c(' 支持 type="text" 的大部分配置')],-1),r=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),c("template")]),e("span",{class:"token punctuation"},">")]),c("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),c("pro-input-tag")]),c("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),c("inputTags"),e("span",{class:"token punctuation"},'"')]),c("\n    "),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),c("请输入内容,点击空格按键"),e("span",{class:"token punctuation"},'"')]),c("\n  "),e("span",{class:"token punctuation"},"/>")]),c("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),c("template")]),e("span",{class:"token punctuation"},">")]),c("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),c("script")]),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[c("\n"),e("span",{class:"token keyword"},"export"),c(),e("span",{class:"token keyword"},"default"),c(),e("span",{class:"token punctuation"},"{"),c("\n  "),e("span",{class:"token function"},"data"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),c(),e("span",{class:"token punctuation"},"{"),c("\n    "),e("span",{class:"token keyword"},"return"),c(),e("span",{class:"token punctuation"},"{"),c("\n      inputTags"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),c("\n    "),e("span",{class:"token punctuation"},"}"),c("\n  "),e("span",{class:"token punctuation"},"}"),c("\n"),e("span",{class:"token punctuation"},"}"),c("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),c("script")]),e("span",{class:"token punctuation"},">")]),c("\n")])],-1),k=e("ol",{start:"2"},[e("li",null,"带输入建议")],-1),d=e("p",null,[c("使用 "),e("code",null,"pro-autocomplete-tag"),c(" 支持 autocomplete 的大部分配置")],-1),g=e("pre",null,[e("code",null,[e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),c("template")]),e("span",{class:"token punctuation"},">")]),c("\n  "),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),c("pro-autocomplete-tag")]),c("\n    "),e("span",{class:"token attr-name"},"v-model"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),c("inputTags1"),e("span",{class:"token punctuation"},'"')]),c("\n    "),e("span",{class:"token attr-name"},":fetch-suggestions"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),c("querySearch"),e("span",{class:"token punctuation"},'"')]),c("\n    "),e("span",{class:"token attr-name"},"placeholder"),e("span",{class:"token attr-value"},[e("span",{class:"token punctuation attr-equals"},"="),e("span",{class:"token punctuation"},'"'),c("请输入内容,点击空格按键"),e("span",{class:"token punctuation"},'"')]),c("\n  "),e("span",{class:"token punctuation"},"/>")]),c("\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),c("template")]),e("span",{class:"token punctuation"},">")]),c("\n\n"),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"<"),c("script")]),c(),e("span",{class:"token attr-name"},"setup"),e("span",{class:"token punctuation"},">")]),e("span",{class:"token script"},[e("span",{class:"token language-javascript"},[c("\n"),e("span",{class:"token keyword"},"import"),c(),e("span",{class:"token punctuation"},"{"),c(" onMounted"),e("span",{class:"token punctuation"},","),c(" ref "),e("span",{class:"token punctuation"},"}"),c(),e("span",{class:"token keyword"},"from"),c(),e("span",{class:"token string"},"'vue'"),c("\n\n"),e("span",{class:"token keyword"},"const"),c(" inputTags1 "),e("span",{class:"token operator"},"="),c(),e("span",{class:"token function"},"ref"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},"["),e("span",{class:"token punctuation"},"]"),e("span",{class:"token punctuation"},")"),c("\n"),e("span",{class:"token keyword"},"const"),c(" list "),e("span",{class:"token operator"},"="),c(),e("span",{class:"token punctuation"},"["),c("\n  "),e("span",{class:"token punctuation"},"{"),c(" value"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},"'Go'"),e("span",{class:"token punctuation"},","),c(" tag"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},"'go'"),c(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),c("\n  "),e("span",{class:"token punctuation"},"{"),c(" value"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},"'JavaScript'"),e("span",{class:"token punctuation"},","),c(" tag"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},"'javascript'"),c(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),c("\n  "),e("span",{class:"token punctuation"},"{"),c(" value"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},"'Python'"),e("span",{class:"token punctuation"},","),c(" tag"),e("span",{class:"token operator"},":"),c(),e("span",{class:"token string"},"'python'"),c(),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},","),c("\n"),e("span",{class:"token punctuation"},"]"),c("\n\n"),e("span",{class:"token keyword"},"function"),c(),e("span",{class:"token function"},"querySearch"),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},[c("queryString"),e("span",{class:"token punctuation"},","),c(" cb")]),e("span",{class:"token punctuation"},")"),c(),e("span",{class:"token punctuation"},"{"),c("\n  "),e("span",{class:"token function"},"cb"),e("span",{class:"token punctuation"},"("),c("queryString "),e("span",{class:"token operator"},"?"),c(" list"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"filter"),e("span",{class:"token punctuation"},"("),e("span",{class:"token parameter"},"i"),c(),e("span",{class:"token operator"},"=>"),c(),e("span",{class:"token punctuation"},"{"),c("\n    "),e("span",{class:"token keyword"},"return"),c(" i"),e("span",{class:"token punctuation"},"."),c("value"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"indexOf"),e("span",{class:"token punctuation"},"("),c("queryString"),e("span",{class:"token punctuation"},"."),e("span",{class:"token function"},"toLowerCase"),e("span",{class:"token punctuation"},"("),e("span",{class:"token punctuation"},")"),e("span",{class:"token punctuation"},")"),c(),e("span",{class:"token operator"},"==="),c(),e("span",{class:"token number"},"0"),c("\n  "),e("span",{class:"token punctuation"},"}"),e("span",{class:"token punctuation"},")"),c(),e("span",{class:"token operator"},":"),c(" list"),e("span",{class:"token punctuation"},")"),c("\n"),e("span",{class:"token punctuation"},"}"),c("\n")])]),e("span",{class:"token tag"},[e("span",{class:"token tag"},[e("span",{class:"token punctuation"},"</"),c("script")]),e("span",{class:"token punctuation"},">")]),c("\n")])],-1),f=p('',7),h={data:()=>({inputTags:[]})},y='{"title":"InputTag","description":"","frontmatter":{},"headers":[{"level":2,"title":"使用","slug":"使用"},{"level":2,"title":"配置","slug":"配置"},{"level":3,"title":"tag","slug":"tag"}],"relativePath":"components/InputTag.md","lastUpdated":1610254538391}';const x=Object.assign(h,{expose:[],setup:function(p){const c=t([]),h=[{value:"Go",tag:"go"},{value:"JavaScript",tag:"javascript"},{value:"Python",tag:"python"}];function y(t,n){n(t?h.filter((n=>0===n.value.indexOf(t.toLowerCase()))):h)}return(t,p)=>{const h=n("pro-input-tag"),x=n("pro-code"),m=n("pro-autocomplete-tag");return a(),s("div",null,[u,e(x,null,{description:l((()=>[i])),code:l((()=>[r])),default:l((()=>[e("template",null,[e(h,{modelValue:t.inputTags,"onUpdate:modelValue":p[1]||(p[1]=t=>o(inputTags)?inputTags.value=t:null),placeholder:"请输入内容,点击空格按键"},null,8,["modelValue"])])])),_:1}),k,e(x,null,{description:l((()=>[d])),code:l((()=>[g])),default:l((()=>[e("template",null,[e(m,{modelValue:c.value,"onUpdate:modelValue":p[2]||(p[2]=t=>c.value=t),"fetch-suggestions":y,placeholder:"请输入内容,点击空格按键"},null,8,["modelValue"])])])),_:1}),f])}}});export default x;export{y as __pageData};
