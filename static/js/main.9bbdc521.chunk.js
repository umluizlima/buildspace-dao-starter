(this.webpackJsonpmydao=this.webpackJsonpmydao||[]).push([[1],{162:function(e,t,n){},168:function(e,t){},216:function(e,t){},242:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(140),o=n.n(s),a=(n(162),n(85)),i=n(59),l=n(4),d=n.n(l),u=n(26),b=n(99),j=n(141),p=n(67),h=n(19),f=new j.a("rinkeby"),O=f.getBundleDropModule("0x29ad780984887c5d9afE228D25b773575610CE8c"),m=f.getTokenModule("0xcc25bA74dbc9826917f08cF3F19E8f5f999A36b1"),x=f.getVoteModule("0xfdF59985D4000ea1755b0706Fd50A51cA001c268"),v=function(){var e=Object(b.b)(),t=e.connectWallet,n=e.address,r=e.error,s=e.provider;console.log("\ud83d\udc4b Address:",n);var o=s?s.getSigner():void 0,l=Object(c.useState)(!1),j=Object(i.a)(l,2),v=j[0],g=j[1],y=Object(c.useState)(!1),k=Object(i.a)(y,2),A=k[0],w=k[1],I=Object(c.useState)({}),S=Object(i.a)(I,2),E=S[0],M=S[1],N=Object(c.useState)([]),C=Object(i.a)(N,2),F=C[0],D=C[1],P=Object(c.useState)([]),T=Object(i.a)(P,2),V=T[0],B=T[1],R=Object(c.useState)(!1),J=Object(i.a)(R,2),U=J[0],W=J[1],H=Object(c.useState)(!1),L=Object(i.a)(H,2),Y=L[0],Z=L[1];Object(c.useEffect)((function(){f.setProviderOrSigner(o)}),[o]),Object(c.useEffect)((function(){if(n)return O.balanceOf(n,"0").then((function(e){e.gt(0)?(g(!0),console.log("\ud83c\udf1f this user has a membership NFT!")):(g(!1),console.log("\ud83d\ude2d this user doesn't have a membership NFT."))})).catch((function(e){g(!1),console.error("failed to nft balance",e)}))}),[n]),Object(c.useEffect)((function(){v&&O.getAllClaimerAddresses("0").then((function(e){console.log("\ud83d\ude80 Members addresses",e),D(e)})).catch((function(e){console.error("failed to get member list",e)}))}),[v]),Object(c.useEffect)((function(){v&&m.getAllHolderBalances().then((function(e){console.log("\ud83d\udc5c Amounts",e),M(e)})).catch((function(e){console.error("failed to get token amounts",e)}))}),[v]),Object(c.useEffect)((function(){v&&x.getAll().then((function(e){B(e),console.log("\ud83c\udf08 Proposals:",e)})).catch((function(e){console.error("failed to get proposals",e)}))}),[v]),Object(c.useEffect)((function(){v&&V.length&&x.hasVoted(V[0].proposalId,n).then((function(e){Z(e),console.log("\ud83e\udd75 User has already voted")})).catch((function(e){console.error("failed to check if wallet has voted",e)}))}),[v,V,n]);var q=Object(c.useMemo)((function(){return F.map((function(e){return{address:e,tokenAmount:u.a.utils.formatUnits(E[e]||0,18)}}))}),[F,E]);return r instanceof p.a?Object(h.jsxs)("div",{className:"unsupported-network",children:[Object(h.jsx)("h2",{children:"Please connect to Rinkeby"}),Object(h.jsx)("p",{children:"This dapp only works on the Rinkeby network, please switch networks in your connected wallet."})]}):n?v?Object(h.jsxs)("div",{className:"member-page",children:[Object(h.jsx)("h1",{children:"\ud83c\udf6aDAO Member Page"}),Object(h.jsx)("p",{children:"Congratulations on being a member"}),Object(h.jsxs)("div",{children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Member List"}),Object(h.jsxs)("table",{className:"card",children:[Object(h.jsx)("thead",{children:Object(h.jsxs)("tr",{children:[Object(h.jsx)("th",{children:"Address"}),Object(h.jsx)("th",{children:"Token Amount"})]})}),Object(h.jsx)("tbody",{children:q.map((function(e){return Object(h.jsxs)("tr",{children:[Object(h.jsx)("td",{children:(t=e.address,t.substring(0,6)+"..."+t.substring(t.length-4))}),Object(h.jsx)("td",{children:e.tokenAmount})]},e.address);var t}))})]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:"Active Proposals"}),Object(h.jsxs)("form",{onSubmit:function(){var e=Object(a.a)(d.a.mark((function e(t){var c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),t.stopPropagation(),W(!0),c=V.map((function(e){var t={proposalId:e.proposalId,vote:2};return e.votes.forEach((function(n){document.getElementById(e.proposalId+"-"+n.type).checked&&(t.vote=n.type)})),t})),e.prev=4,e.next=7,m.getDelegationOf(n);case 7:if(e.sent!==u.a.constants.AddressZero){e.next=11;break}return e.next=11,m.delegateTo(n);case 11:return e.prev=11,e.next=14,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t.proposalId);case 2:if(1!==e.sent.state){e.next=5;break}return e.abrupt("return",x.vote(t.proposalId,t.vote));case 5:return e.abrupt("return");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 14:return e.prev=14,e.next=17,Promise.all(c.map(function(){var e=Object(a.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.get(t.proposalId);case 2:if(4!==e.sent.state){e.next=5;break}return e.abrupt("return",x.execute(t.proposalId));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()));case 17:Z(!0),console.log("successfully voted"),e.next=24;break;case 21:e.prev=21,e.t0=e.catch(14),console.error("failed to execute votes",e.t0);case 24:e.next=29;break;case 26:e.prev=26,e.t1=e.catch(11),console.error("failed to vote",e.t1);case 29:e.next=34;break;case 31:e.prev=31,e.t2=e.catch(4),console.error("failed to delegate tokens");case 34:return e.prev=34,W(!1),e.finish(34);case 37:case"end":return e.stop()}}),e,null,[[4,31,34,37],[11,26],[14,21]])})));return function(t){return e.apply(this,arguments)}}(),children:[V.map((function(e,t){return Object(h.jsxs)("div",{className:"card",children:[Object(h.jsx)("h5",{children:e.description}),Object(h.jsx)("div",{children:e.votes.map((function(t){return Object(h.jsxs)("div",{children:[Object(h.jsx)("input",{type:"radio",id:e.proposalId+"-"+t.type,name:e.proposalId,value:t.type,defaultChecked:2===t.type}),Object(h.jsx)("label",{htmlFor:e.proposalId+"-"+t.type,children:t.label})]},t.type)}))})]},e.proposalId)})),Object(h.jsx)("button",{disabled:U||Y,type:"submit",children:U?"Voting...":Y?"You Already Voted":"Submit Votes"}),Object(h.jsx)("small",{children:"This will trigger multiple transactions that you will need to sign."})]})]})]})]}):Object(h.jsxs)("div",{className:"mint-nft",children:[Object(h.jsx)("h1",{children:"Mint your free \ud83c\udf6aDAO Membership NFT"}),Object(h.jsx)("button",{disabled:A,onClick:function(){w(!0),O.claim("0",1).catch((function(e){console.error("failed to claim",e),w(!1)})).finally((function(){w(!1),g(!0),console.log("\ud83c\udf0a Successfully Minted! Check it out on OpenSea: https://testnets.opensea.io/assets/".concat(O.address,"/0"))}))},children:A?"Minting...":"Mint your nft (FREE)"})]}):Object(h.jsxs)("div",{className:"landing",children:[Object(h.jsx)("h1",{children:"Welcome to SerendipityDAO"}),Object(h.jsx)("button",{onClick:function(){return t("injected")},className:"btn-hero",children:"Connect your wallet"})]})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(b.a,{connectors:{injected:{}},supportedChainIds:[4],children:Object(h.jsx)("div",{className:"landing",children:Object(h.jsx)(v,{})})})}),document.getElementById("root"))}},[[242,2,3]]]);
//# sourceMappingURL=main.9bbdc521.chunk.js.map