(this.webpackJsonplol=this.webpackJsonplol||[]).push([[0],{10:function(e,n,t){e.exports={openTeam:"matchTeamStats_openTeam__312bp",teamHeader:"matchTeamStats_teamHeader__1nZNL",row:"matchTeamStats_row__CjOl1",winHeaderCell:"matchTeamStats_winHeaderCell__2TWvt",loseHeaderCell:"matchTeamStats_loseHeaderCell__3bR2O",winContents:"matchTeamStats_winContents__qtVaD",loseContents:"matchTeamStats_loseContents__2Mget"}},13:function(e,n,t){e.exports={item:"items_item__3COKu",itemImg:"items_itemImg__2dxTU",bottomOpenTooltip:"items_bottomOpenTooltip__3ZrUv",topOpenTooltip:"items_topOpenTooltip__1J9ES",closeTooltip:"items_closeTooltip__1ZYFG",itemName:"items_itemName__3UtFp",itemPlainText:"items_itemPlainText__-OtJp",itemDescription:"items_itemDescription__p4SpL",itemGold:"items_itemGold__3kTgt"}},15:function(e,n,t){e.exports={header:"profile_header__2UQGi",profileIcon:"profile_profileIcon__20qoP",profile:"profile_profile__3VvGE",iconImg:"profile_iconImg__1PwYU",level:"profile_level__-pbdD",summonerId:"profile_summonerId__XWRfT",summonerRefreshBtn:"profile_summonerRefreshBtn__1-nAT"}},17:function(e,n,t){e.exports={runeSpell:"runeSpell_runeSpell__2CK7M",runeSpellImg:"runeSpell_runeSpellImg__1-FH3",bottomOpenTooltip:"runeSpell_bottomOpenTooltip__3cPzP",topOpenTooltip:"runeSpell_topOpenTooltip__3fEsW",closeTooltip:"runeSpell_closeTooltip__2epKN",runeSpellName:"runeSpell_runeSpellName__3Y3iF"}},2:function(e,n,t){e.exports={matche:"match_matche__1tjEY",matchWin:"match_matchWin__3NNyN",matchLose:"match_matchLose__2NbWr",reMatch:"match_reMatch__3gVhI",gameStats:"match_gameStats__1B9hW",gameResultWin:"match_gameResultWin__Lfem3",gameResultLose:"match_gameResultLose__3cFlP",gameRestart:"match_gameRestart__2MRtX",gameSettingInfo:"match_gameSettingInfo__19Nn5",championImg:"match_championImg__2bS_a",championName:"match_championName__1pUWc",kdaBox:"match_kdaBox__3OZgu",grade:"match_grade__25PJf",kda:"match_kda__HbGcB",stats:"match_stats__18BYg",controlWard:"match_controlWard__3S837",items:"match_items__WWfLy",itemList:"match_itemList__2LVSn",followPlayers:"match_followPlayers__2wT4G",summoner:"match_summoner__HAOkg",blueTeam:"match_blueTeam__3Ls99",redTeam:"match_redTeam__1Bezc",summonerChampionName:"match_summonerChampionName__27vck",summonerLink:"match_summonerLink__3oZjN",statsBtn:"match_statsBtn__3O4MT",winStatsBtn:"match_winStatsBtn__1-qpu",loseStatsBtn:"match_loseStatsBtn__2klkd",reStatsBtn:"match_reStatsBtn__3D-Wx",runeSpell:"match_runeSpell__MUcqy"}},21:function(e,n,t){e.exports={searchBar:"searchBar_searchBar__1hNMr",logoBox:"searchBar_logoBox__q3pW3",logo:"searchBar_logo__hLOmp",searchFormBox:"searchBar_searchFormBox__1LTuC"}},24:function(e,n,t){e.exports={form:"searchForm_form__itlwn",input:"searchForm_input__17end",searchBtn:"searchForm_searchBtn___MGTW"}},25:function(e,n,t){e.exports={main:"searchPage_main__1T5Dz",title:"searchPage_title__KNb3M",searchFormBox:"searchPage_searchFormBox__309bn"}},26:function(e,n,t){e.exports={container:"summonerPage_container___OSN0",contents:"summonerPage_contents__Z-077",error:"summonerPage_error__l9uOx"}},27:function(e,n,t){e.exports={matches:"matches_matches__2Qdtb",addMatchBtn:"matches_addMatchBtn__wh8xK",loading:"matches_loading__tv6xh",spin:"matches_spin__2HyJU"}},39:function(e,n,t){e.exports={gameDetail:"matchStats_gameDetail__1h8Yq"}},47:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var a=t(1),s=t.n(a),c=t(38),r=t.n(c),i=(t(47),t(12)),l=t(3),o=t(24),m=t.n(o),u=t(20),d=t(0),p=function(){var e=Object(a.useRef)(),n=Object(l.f)(),t=function(){var t=e.current.value;n("/summoner?userName=".concat(t))};return Object(d.jsxs)("form",{className:m.a.form,onSubmit:function(e){e.preventDefault(),t()},children:[Object(d.jsx)("input",{className:m.a.input,type:"text",placeholder:"\uc18c\ud658\uc0ac\uba85\uc744 \uc785\ub825\ud558\uc138\uc694",autoComplete:"off",required:!0,ref:e,onKeyPress:function(e){"Enter"===e.key&&t()}}),Object(d.jsx)("button",{type:"submit",className:m.a.searchBtn,children:Object(d.jsx)(u.c,{})})]})},j=t(25),f=t.n(j),h=function(){return Object(d.jsxs)("main",{className:f.a.main,children:[Object(d.jsx)("span",{className:f.a.title,children:"lol.gg"}),Object(d.jsx)("div",{className:f.a.searchFormBox,children:Object(d.jsx)(p,{})})]})},_=t(29),g=t(4),b=t.n(g),O=t(6),v=t(5),x=t(15),N=t.n(x),S=function(e){var n=e.summonerProfile,t=n.name,a=n.profileIconId,s=n.summonerLevel,c=Object(l.f)();return Object(d.jsxs)("header",{className:N.a.header,children:[Object(d.jsxs)("div",{className:N.a.profileIcon,children:[Object(d.jsx)("img",{className:N.a.iconImg,src:"http://ddragon.leagueoflegends.com/cdn/12.5.1/img/profileicon/".concat(a,".png"),alt:"icon"}),Object(d.jsx)("span",{className:N.a.level,children:s})]}),Object(d.jsxs)("div",{className:N.a.profile,children:[Object(d.jsx)("span",{className:N.a.summonerId,children:t}),Object(d.jsx)("button",{className:N.a.summonerRefreshBtn,onClick:function(){c(0)},children:"\uc804\uc801 \uac31\uc2e0"})]})]})},k=t(26),I=t.n(k),w=t(9),R=t.n(w),y={UnRanked:"https://raw.communitydragon.org/latest/plugins/rcp-fe-lol-profiles/global/default/profile_unranked.png",IRON:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/01_iron/images/iron_baseface_matte.png",BRONZE:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/02_bronze/images/bronze_baseface_matte.png",SILVER:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/03_silver/images/silver_baseface_matte.png",GOLD:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/04_gold/images/gold_baseface_matte.png",PLATINUM:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/05_platinum/images/platinum_baseface_matte.png",DIAMOND:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/06_diamond/images/diamond_baseface_matte.png",MASTER:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/07_master/images/master_baseface_matte.png",GRANDMASTER:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/08_grandmaster/images/grandmaster_baseface_matte.png",CHALLENGER:"https://raw.communitydragon.org/latest/plugins/rcp-be-lol-game-data/global/default/content/src/leagueclient/rankedcrests/09_challenger/images/challenger_baseface_matte.png"},C=function(e){var n,t=e.soloRank,a=e.teamRank,s=e.rankLoading,c=t||{leaguePoints:"",tier:"UnRanked",rank:"",wins:"",losses:""},r=c.leaguePoints,i=c.tier,l=c.rank,o=c.wins,m=c.losses,u=a||{leaguePoints:"",tier:"UnRanked",rank:"",wins:"",losses:""},p=u.leaguePoints,j=u.tier,f=u.rank,h=u.wins,_=u.losses,g=y[i],b=y[j],O=null===t||void 0===t||null===(n=t.miniSeries)||void 0===n?void 0:n.progress.split(""),v={W:"win",L:"lose",N:"none"};return Object(d.jsxs)("div",{className:R.a.rank,children:[Object(d.jsx)("div",{className:R.a.soloRank,children:s?Object(d.jsx)("div",{className:R.a.loading}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:R.a.soloRankImg,children:Object(d.jsx)("img",{className:R.a.soloTierImg,src:g,alt:"soloTier"})}),Object(d.jsxs)("div",{className:R.a.soloRankInfo,children:[Object(d.jsx)("span",{children:"\uc194\ub85c\ub7ad\ud06c"}),Object(d.jsxs)("span",{children:[i," ",l]}),Object(d.jsx)("span",{children:r?"".concat(r,"LP"):""}),Object(d.jsx)("span",{children:o?"".concat(o,"\uc2b9").concat(m,"\ud328"):""}),Object(d.jsx)("span",{children:o?"\uc2b9\ub960 ".concat(Math.round(o/(o+m)*100),"%"):""}),(null===t||void 0===t?void 0:t.miniSeries)&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("span",{children:"\uc2b9\uae09\uc804"}),Object(d.jsx)("div",{className:R.a.miniSeries,children:O.map((function(e){return Object(d.jsx)("div",{className:R.a[v[e]],children:"N"===e?"":e})}))})]})]})]})}),Object(d.jsx)("div",{className:R.a.teamRank,children:s?Object(d.jsx)("div",{className:R.a.loading}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:R.a.teamRankImg,children:Object(d.jsx)("img",{className:R.a.teamTierImg,src:b,alt:"teamTier"})}),Object(d.jsxs)("div",{className:R.a.teamRankInfo,children:[Object(d.jsx)("span",{children:"\uc790\uc720\ub7ad\ud06c"}),Object(d.jsxs)("span",{children:[j," ",f]}),Object(d.jsx)("span",{children:p?"".concat(p,"LP"):""}),Object(d.jsx)("span",{children:h?"".concat(h,"\uc2b9").concat(_,"\ud328"):""}),Object(d.jsx)("span",{children:h?"\uc2b9\ub960 ".concat(Math.round(h/(h+_)*100),"%"):""})]})]})})]})},T=t(27),L=t.n(T),B=t(10),M=t.n(B),P=t(13),D=t.n(P),F=function(e){var n,t,s,c,r,i=e.itemNum,l=e.itemsInfo,o=Object(a.useState)(!1),m=Object(v.a)(o,2),u=m[0],p=m[1],j=Object(a.useState)(!1),f=Object(v.a)(j,2),h=f[0],_=f[1],g=Object(a.useRef)(),b=Object(a.useRef)();return Object(a.useLayoutEffect)((function(){u&&(window.innerHeight<b.current.getBoundingClientRect().height+g.current.getBoundingClientRect().bottom?_(!0):_(!1))}),[u]),Object(d.jsxs)("div",{className:D.a.item,onMouseOver:function(){var e;(null===(e=l[i])||void 0===e?void 0:e.name)&&b.current&&p(!0)},onMouseLeave:function(){p(!1)},ref:g,children:[0!==i?Object(d.jsx)("img",{className:D.a.itemImg,src:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/item/".concat(i,".png"),alt:"item"}):"",Object(d.jsxs)("div",{className:u?h?D.a.topOpenTooltip:D.a.bottomOpenTooltip:D.a.closeTooltip,ref:function(e){b.current=e},children:[Object(d.jsx)("span",{className:D.a.itemName,children:null===(n=l[i])||void 0===n?void 0:n.name}),Object(d.jsx)("span",{className:D.a.itemPlainText,children:null===(t=l[i])||void 0===t?void 0:t.plaintext}),Object(d.jsx)("span",{className:D.a.itemDescription,dangerouslySetInnerHTML:(r=null===(s=l[i])||void 0===s?void 0:s.description,{__html:r})}),Object(d.jsxs)("span",{className:D.a.itemGold,children:["gold:",null===(c=l[i])||void 0===c?void 0:c.gold.total]})]})]})},A=t(17),U=t.n(A),W=function(e){var n=e.runeSpellInfo,t=e.runeDescMarkup,s=Object(a.useState)(!1),c=Object(v.a)(s,2),r=c[0],i=c[1],l=Object(a.useState)(!1),o=Object(v.a)(l,2),m=o[0],u=o[1],p=Object(a.useRef)(),j=Object(a.useRef)();return Object(a.useLayoutEffect)((function(){r&&(window.innerHeight<j.current.getBoundingClientRect().height+p.current.getBoundingClientRect().bottom?u(!0):u(!1))}),[r]),Object(d.jsxs)("div",{className:U.a.runeSpell,onMouseOver:function(){j.current&&i(!0)},onMouseLeave:function(){i(!1)},ref:p,children:[Object(d.jsx)("img",{className:U.a.runeSpellImg,src:n.imgUrl,alt:"runeSpell"}),Object(d.jsxs)("div",{className:r?m?U.a.topOpenTooltip:U.a.bottomOpenTooltip:U.a.closeTooltip,ref:function(e){j.current=e},children:[Object(d.jsx)("span",{className:U.a.runeSpellName,children:null===n||void 0===n?void 0:n.runeSpellName}),"firstRune"===n.name?Object(d.jsx)("span",{dangerouslySetInnerHTML:t()}):Object(d.jsx)("span",{children:null===n||void 0===n?void 0:n.runeSpellDesc})]})]})},E=t(7),H=t.n(E),K=function(e){var n,t,a,s,c,r,l,o,m,u,p,j=e.summoner,f=e.runeSpellInfo,h=e.itemsInfo,_=e.runeSpellInfoFunction,g=[{name:"firstRune",runeSpellInfo:f[0],imgUrl:"https://ddragon.leagueoflegends.com/cdn/img/".concat(null===(n=_.firstRuneInfo(j))||void 0===n?void 0:n.icon),runeSpellName:null===(t=_.firstRuneInfo(j))||void 0===t?void 0:t.name},{name:"secondRune",runeSpellInfo:f[0],imgUrl:"https://ddragon.leagueoflegends.com/cdn/img/".concat(null===(a=_.secondRuneInfo(j))||void 0===a?void 0:a.icon),runeSpellName:null===(s=_.secondRuneInfo(j))||void 0===s?void 0:s.name},{name:"firstSpell",runeSpellInfo:f[1],imgUrl:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/".concat(null===(c=_.firstSpellInfo(j))||void 0===c?void 0:c.id,".png"),runeSpellName:null===(r=_.firstSpellInfo(j))||void 0===r?void 0:r.name,runeSpellDesc:null===(l=_.firstSpellInfo(j))||void 0===l?void 0:l.description},{name:"secondSpell",runeSpellInfo:f[1],imgUrl:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/".concat(null===(o=_.secondSpellInfo(j))||void 0===o?void 0:o.id,".png"),runeSpellName:null===(m=_.secondSpellInfo(j))||void 0===m?void 0:m.name,runeSpellDesc:null===(u=_.secondSpellInfo(j))||void 0===u?void 0:u.description}],b=function(){var e;return{__html:"".concat(null===(e=_.firstRuneInfo(j))||void 0===e?void 0:e.longDesc)}},O=[{key:1,itemNum:j.item0},{key:2,itemNum:j.item1},{key:3,itemNum:j.item2},{key:4,itemNum:j.item3},{key:5,itemNum:j.item4},{key:6,itemNum:j.item5},{key:7,itemNum:j.item6}];return Object(d.jsxs)("tr",{className:H.a.row,children:[Object(d.jsxs)("td",{className:H.a.championImgCell,children:[Object(d.jsx)("div",{className:H.a.championImgBox,children:Object(d.jsx)("img",{className:H.a.championImg,src:"https://ddragon.leagueoflegends.com/cdn/12.2.1/img/champion/".concat((p=j.championName,"FiddleSticks"===p?p[0].toUpperCase()+p.slice(1).toLowerCase():p),".png"),alt:j.championName})}),Object(d.jsx)("div",{className:H.a.championLevel,children:j.champLevel})]}),Object(d.jsx)("td",{className:H.a.spellCell,children:g.map((function(e){return Object(d.jsx)(W,{runeSpellInfo:e,runeDescMarkup:b},e.name)}))}),Object(d.jsx)("td",{className:H.a.summonerNameCell,children:Object(d.jsx)(i.b,{to:"/summoner?userName=".concat(j.summonerName),children:Object(d.jsxs)("span",{className:H.a.summonerLink,children:[" ",j.summonerName]})})}),Object(d.jsx)("td",{className:H.a.itemCell,children:Object(d.jsx)("div",{className:H.a.itemBox,children:O.map((function(e){return Object(d.jsx)(F,{itemNum:e.itemNum,itemsInfo:h},e.key)}))})}),Object(d.jsxs)("td",{className:H.a.kdaCell,children:[Object(d.jsxs)("span",{children:[j.kills,"/"]}),Object(d.jsxs)("span",{children:[j.deaths,"/"]}),Object(d.jsx)("span",{children:j.assists})]}),Object(d.jsx)("td",{className:H.a.csCell,children:Object(d.jsx)("span",{children:j.totalMinionsKilled})}),Object(d.jsxs)("td",{className:H.a.wardCell,children:[Object(d.jsx)("div",{children:j.detectorWardsPlaced}),Object(d.jsxs)("div",{children:[j.wardsPlaced,"/",j.wardsKilled]})]}),Object(d.jsx)("td",{className:H.a.damageCell,children:j.totalDamageDealtToChampions}),Object(d.jsx)("td",{className:H.a.goldCell,children:j.goldEarned})]})},G=function(e){var n=e.infos,t=e.isActive,a=e.runeSpellInfo,s=e.itemsInfo,c=e.runeSpellInfoFunction;return Object(d.jsx)(d.Fragment,{children:t?Object(d.jsxs)("table",{className:M.a.openTeam,children:[Object(d.jsx)("thead",{className:M.a.teamHeader,children:Object(d.jsxs)("tr",{className:M.a.row,children:[Object(d.jsxs)("th",{colSpan:3,className:n[0].win?M.a.winHeaderCell:M.a.loseHeaderCell,children:[n[0].win?"\uc2b9\ub9ac":"\ud328\ubc30",100===n[0].teamId?"(\ube14\ub8e8\ud300)":"(\ub808\ub4dc\ud300)"]}),Object(d.jsx)("th",{className:M.a.headerCell,children:"\uc544\uc774\ud15c"}),Object(d.jsx)("th",{className:M.a.headerCell,children:"kda"}),Object(d.jsx)("th",{className:M.a.headerCell,children:"cs"}),Object(d.jsx)("th",{className:M.a.headerCell,children:"\uc640\ub4dc"}),Object(d.jsx)("th",{className:M.a.headerCell,children:"\ud53c\ud574\ub7c9"}),Object(d.jsx)("th",{className:M.a.headerCell,children:"\uace8\ub4dc"})]})}),Object(d.jsx)("tbody",{className:n[0].win?M.a.winContents:M.a.loseContents,children:n.map((function(e){return Object(d.jsx)(K,{summoner:e,runeSpellInfo:a,itemsInfo:s,runeSpellInfoFunction:c},e.puuid)}))})]}):Object(d.jsx)(d.Fragment,{})})},q=t(39),J=t.n(q),X=function(e){var n=e.userTeamStats,t=e.opposingTeamStats,a=e.isActive,s=e.runeSpellInfo,c=e.itemsInfo,r=e.runeSpellInfoFunction;return Object(d.jsxs)("div",{className:J.a.gameDetail,children:[Object(d.jsx)(G,{infos:n,isActive:a,runeSpellInfo:s,itemsInfo:c,runeSpellInfoFunction:r}),Object(d.jsx)(G,{infos:t,isActive:a,runeSpellInfo:s,itemsInfo:c,runeSpellInfoFunction:r})]})},Z=t(2),z=t.n(Z),V={420:"\uc194\ub7ad",430:"\uc77c\ubc18",440:"\uc790\uc720\ub7ad",450:"\ubb34\uc791\uc704 \ucd1d\ub825\uc804",1400:"\uad81\uadf9\uae30 \ubaa8\ub4dc",900:"\uc6b0\ub974\ud504 \ubaa8\ub4dc",0:"\ucee4\uc2a4\ud140 \ubaa8\ub4dc"},Y=t(16),Q=t.n(Y),$=function(e){var n,t,s,c,r,l,o,m,p,j,f,h=e.infos,_=e.summonerProfile,g=e.lolApi,x=Object(a.useState)(!1),N=Object(v.a)(x,2),S=N[0],k=N[1],I=Object(a.useState)([]),w=Object(v.a)(I,2),R=w[0],y=w[1],C=Object(a.useState)([]),T=Object(v.a)(C,2),L=T[0],B=T[1],M=Object(a.useState)([]),P=Object(v.a)(M,2),D=P[0],A=P[1],U=Object(a.useState)({}),E=Object(v.a)(U,2),H=E[0],K=E[1],G=Object(a.useState)({}),q=Object(v.a)(G,2),J=q[0],Z=q[1],Y=function(e){return"FiddleSticks"===e?e[0].toUpperCase()+e.slice(1).toLowerCase():e};Object(a.useEffect)((function(){var e=function(){var e=Object(O.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.championInfo();case 2:n=e.sent,Z(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),n=function(){var e=Object(O.a)(b.a.mark((function e(){var n,t,a,s,c,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=g.runeInfo(),t=g.spellInfo(),e.next=4,Promise.all([n,t]);case 4:a=e.sent,s=Object(v.a)(a,2),c=s[0],r=s[1],A([c,Object.values(r)]);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=Object(O.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.itemsInfo();case 2:n=e.sent,K(n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(),t(),e()}),[g]);var $=function(e){return e.info.participants.find((function(e){return e.puuid===_.puuid}))},ee={firstRuneInfo:function(e){var n,t;return null===(n=D[0])||void 0===n||null===(t=n.find((function(n){return n.id===e.perks.styles[0].style})))||void 0===t?void 0:t.slots.map((function(e){return e.runes})).flat().find((function(n){return n.id===e.perks.styles[0].selections[0].perk}))},secondRuneInfo:function(e){var n;return null===(n=D[0])||void 0===n?void 0:n.find((function(n){return n.id===e.perks.styles[1].style}))},firstSpellInfo:function(e){var n;return null===(n=D[1])||void 0===n?void 0:n.find((function(n){return n.key===String(e.summoner1Id)}))},secondSpellInfo:function(e){var n;return null===(n=D[1])||void 0===n?void 0:n.find((function(n){return n.key===String(e.summoner2Id)}))}},ne=[{name:"firstRune",runeSpellInfo:D[0],imgUrl:"https://ddragon.leagueoflegends.com/cdn/img/".concat(null===(n=ee.firstRuneInfo($(h)))||void 0===n?void 0:n.icon),runeSpellName:null===(t=ee.firstRuneInfo($(h)))||void 0===t?void 0:t.name},{name:"secondRune",runeSpellInfo:D[0],imgUrl:"https://ddragon.leagueoflegends.com/cdn/img/".concat(null===(s=ee.secondRuneInfo($(h)))||void 0===s?void 0:s.icon),runeSpellName:null===(c=ee.secondRuneInfo($(h)))||void 0===c?void 0:c.name},{name:"firstSpell",runeSpellInfo:D[1],imgUrl:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/".concat(null===(r=ee.firstSpellInfo($(h)))||void 0===r?void 0:r.id,".png"),runeSpellName:null===(l=ee.firstSpellInfo($(h)))||void 0===l?void 0:l.name,runeSpellDesc:null===(o=ee.firstSpellInfo($(h)))||void 0===o?void 0:o.description},{name:"secondSpell",runeSpellInfo:D[1],imgUrl:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/".concat(null===(m=ee.secondSpellInfo($(h)))||void 0===m?void 0:m.id,".png"),runeSpellName:null===(p=ee.secondSpellInfo($(h)))||void 0===p?void 0:p.name,runeSpellDesc:null===(j=ee.secondSpellInfo($(h)))||void 0===j?void 0:j.description}],te=[{key:1,itemNum:$(h).item0},{key:2,itemNum:$(h).item1},{key:3,itemNum:$(h).item2},{key:4,itemNum:$(h).item3},{key:5,itemNum:$(h).item4},{key:6,itemNum:$(h).item5},{key:7,itemNum:$(h).item6}],ae=function(){var e;return{__html:"".concat(null===(e=ee.firstRuneInfo($(h)))||void 0===e?void 0:e.longDesc)}};return Object(d.jsxs)("div",{className:z.a.match,children:[Object(d.jsxs)("div",{className:$(h).win?Math.floor(h.info.gameDuration/60)<=5?z.a.reMatch:z.a.matchWin:Math.floor(h.info.gameDuration/60)<=5?z.a.reMatch:z.a.matchLose,children:[Object(d.jsxs)("div",{className:z.a.gameStats,children:[Object(d.jsx)("div",{className:z.a.gameType,children:V[h.info.queueId]}),Object(d.jsx)("div",{className:z.a.gameStamp,children:Q()(h.info.gameStartTimestamp).fromNow()}),Object(d.jsx)("div",{className:$(h).win?Math.floor(h.info.gameDuration/60)<=5?z.a.gameRestart:z.a.gameResultWin:Math.floor(h.info.gameDuration/60)<=5?z.a.gameRestart:z.a.gameResultLose,children:$(h).win?Math.floor(h.info.gameDuration/60)<=5?"\ub2e4\uc2dc\ud558\uae30":"\uc2b9\ub9ac":Math.floor(h.info.gameDuration/60)<=5?"\ub2e4\uc2dc\ud558\uae30":"\ud328\ubc30"}),Object(d.jsx)("div",{className:z.a.gameLength,children:Q()(h.info.gameEndTimestamp?1e3*h.info.gameDuration:h.info.gameDuration).format("mm\ubd84ss\ucd08")})]}),Object(d.jsxs)("div",{className:z.a.gameSettingInfo,children:[Object(d.jsx)("div",{className:z.a.championImgBox,children:Object(d.jsx)("img",{className:z.a.championImg,src:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/".concat(Y($(h).championName),".png"),alt:Y($(h).championName)})}),Object(d.jsx)("div",{className:z.a.runeSpell,children:D.length&&ne.map((function(e){return Object(d.jsx)(W,{runeSpellInfo:e,runeDescMarkup:ae},e.name)}))}),Object(d.jsx)("div",{className:z.a.championName,children:Object(d.jsx)("span",{children:null===(f=J[Y($(h).championName)])||void 0===f?void 0:f.name})})]}),Object(d.jsxs)("div",{className:z.a.kdaBox,children:[Object(d.jsxs)("div",{className:z.a.kda,children:[Object(d.jsxs)("span",{children:[$(h).kills,"/"]}),Object(d.jsxs)("span",{children:[$(h).deaths,"/"]}),Object(d.jsx)("span",{children:$(h).assists})]}),Object(d.jsx)("div",{className:z.a.grade,children:Object(d.jsxs)("span",{children:[0===$(h).deaths?"Perfect":(($(h).kills+$(h).assists)/$(h).deaths).toFixed(2)," ","\ud3c9\uc810"]})})]}),Object(d.jsxs)("div",{className:z.a.stats,children:[Object(d.jsx)("div",{className:z.a.level,children:Object(d.jsxs)("span",{children:["\ub808\ubca8",$(h).champLevel]})}),Object(d.jsxs)("div",{className:z.a.cs,children:[Object(d.jsx)("span",{children:$(h).totalMinionsKilled}),Object(d.jsxs)("span",{children:["(",($(h).totalMinionsKilled/Math.floor(h.info.gameDuration/60)).toFixed(1),")"]}),Object(d.jsx)("span",{children:"cs"})]}),Object(d.jsx)("div",{className:z.a.killPercent})]}),Object(d.jsxs)("div",{className:z.a.items,children:[Object(d.jsx)("div",{className:z.a.itemList,children:te.map((function(e){return Object(d.jsx)(F,{itemsInfo:H,itemNum:e.itemNum},e.key)}))}),Object(d.jsxs)("div",{className:z.a.controlWard,children:[Object(d.jsx)("span",{children:"\uc81c\uc5b4\uc640\ub4dc "}),Object(d.jsx)("span",{children:$(h).detectorWardsPlaced})]})]}),Object(d.jsxs)("div",{className:z.a.followPlayers,children:[Object(d.jsx)("div",{className:z.a.blueTeam,children:h.info.participants.slice(0,5).map((function(e){return Object(d.jsxs)("div",{className:z.a.summoner,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:z.a.championImg,src:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/".concat(Y(e.championName),".png"),alt:e.championName})}),Object(d.jsx)("div",{className:z.a.summonerChampionName,children:Object(d.jsx)(i.b,{to:"/summoner?userName=".concat(e.summonerName),children:Object(d.jsx)("span",{className:z.a.summonerLink,children:e.summonerName})})})]},e.puuid)}))}),Object(d.jsx)("div",{className:z.a.redTeam,children:h.info.participants.slice(5,10).map((function(e){return Object(d.jsxs)("div",{className:z.a.summoner,children:[Object(d.jsx)("div",{children:Object(d.jsx)("img",{className:z.a.championImg,src:"https://ddragon.leagueoflegends.com/cdn/12.4.1/img/champion/".concat(Y(e.championName),".png"),alt:e.championName})}),Object(d.jsx)("div",{className:z.a.summonerChampionName,children:Object(d.jsx)(i.b,{to:"/summoner?userName=".concat(e.summonerName),children:Object(d.jsx)("span",{className:z.a.summonerLink,children:e.summonerName})})})]},e.puuid)}))})]}),0!==h.info.queueId&&Object(d.jsx)("div",{className:$(h).win?Math.floor(h.info.gameDuration/60)<=5?z.a.reStatsBtn:z.a.winStatsBtn:Math.floor(h.info.gameDuration/60)<=5?z.a.reStatsBtn:z.a.loseStatsBtn,onClick:function(){k(!S),S||(h.info.participants.slice(0,5).find((function(e){return e.puuid===_.puuid}))?(y(h.info.participants.slice(0,5)),B(h.info.participants.slice(5,10))):(B(h.info.participants.slice(0,5)),y(h.info.participants.slice(5,10))))},children:S?Object(d.jsx)(u.a,{}):Object(d.jsx)(u.b,{})})]}),Object(d.jsx)(X,{infos:h,summonerProfile:_,userTeamStats:R,opposingTeamStats:L,isActive:S,runeSpellInfo:D,itemsInfo:H,runeSpellInfoFunction:ee})]},h.metadata.matchId)},ee=function(e){var n=e.matchInfo,t=e.summonerProfile,a=e.addMatchCount,s=e.lolApi,c=e.matchLoading;return Object(d.jsxs)("div",{className:L.a.matches,children:[n.map((function(e){return Object(d.jsx)($,{infos:e,summonerProfile:t,lolApi:s},e.metadata.matchId)})),Object(d.jsx)("div",{children:Object(d.jsx)("div",{className:L.a.addMatchBtn,onClick:a,children:c?Object(d.jsx)("div",{className:L.a.loading}):"\ub354\ubcf4\uae30"})})]})},ne=t(21),te=t.n(ne),ae=function(e){return Object(d.jsxs)("div",{className:te.a.searchBar,children:[Object(d.jsx)("div",{className:te.a.logoBox,children:Object(d.jsx)(i.b,{to:"/",children:Object(d.jsx)("span",{className:te.a.logo,children:"LoL.gg"})})}),Object(d.jsx)("div",{className:te.a.searchFormBox,children:Object(d.jsx)(p,{})})]})},se=function(e){var n=e.lolApi,t=Object(a.useState)({}),s=Object(v.a)(t,2),c=s[0],r=s[1],i=Object(a.useState)({}),o=Object(v.a)(i,2),m=o[0],u=o[1],p=Object(a.useState)({}),j=Object(v.a)(p,2),f=j[0],h=j[1],g=Object(a.useState)([]),x=Object(v.a)(g,2),N=x[0],k=x[1],w=Object(a.useState)(0),R=Object(v.a)(w,2),y=R[0],T=R[1],L=Object(a.useState)(),B=Object(v.a)(L,2),M=B[0],P=B[1],D=Object(a.useState)(!1),F=Object(v.a)(D,2),A=F[0],U=F[1],W=Object(a.useState)(!0),E=Object(v.a)(W,2),H=E[0],K=E[1],G=Object(l.e)(),q=Object(l.f)(),J=G.search.split("=")[1],X=function(e){return 2===e.length?e.split("").join(" "):e},Z=function(e,n){return e.find((function(e){return e.queueType===n}))};return Object(a.useEffect)((function(){if(J){var e=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,n.summoner(X(decodeURI(J)));case 3:t=e.sent,r(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),P(e.t0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();k([]),e()}else q("/",{replace:!0})}),[J,q,n]),Object(a.useEffect)((function(){if(c.puuid&&c.id){var e=function(){var e=Object(O.a)(b.a.mark((function e(){var t,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,U(!0),e.next=4,n.matches(c.puuid,y);case 4:return t=e.sent,e.next=7,Promise.all(t.map((function(e){return n.matchInfo(e)})));case 7:a=e.sent,k((function(e){return[].concat(Object(_.a)(e),Object(_.a)(a))})),U(!1),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),P(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(){return e.apply(this,arguments)}}();(function(){var e=Object(O.a)(b.a.mark((function e(t){var a,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return K(!0),e.next=3,n.rank(t);case 3:a=e.sent,s=Z(a,"RANKED_SOLO_5x5"),c=Z(a,"RANKED_FLEX_SR"),u(s),h(c),K(!1);case 9:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}})()(c.id),e()}}),[c,y,n]),Object(d.jsx)("div",{className:I.a.container,children:M?Object(d.jsx)("div",{className:I.a.error,children:"\ub4f1\ub85d\ub418\uc9c0 \uc54a\uc740 \uc18c\ud658\uc0ac\uc785\ub2c8\ub2e4. \uc624\ud0c0\ub97c \ud655\uc778 \ud6c4 \ub2e4\uc2dc \uac80\uc0c9\ud574\uc8fc\uc138\uc694."}):Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(ae,{}),Object(d.jsx)(S,{summonerProfile:c}),Object(d.jsxs)("div",{className:I.a.contents,children:[Object(d.jsx)(C,{soloRank:m,teamRank:f,rankLoading:H}),Object(d.jsx)(ee,{matchInfo:N,summonerProfile:c,addMatchCount:function(){T(y+1)},lolApi:n,matchLoading:A})]})]})})};var ce=function(e){var n=e.lolApi;return Object(d.jsx)("div",{children:Object(d.jsx)(i.a,{children:Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/",element:Object(d.jsx)(h,{})}),Object(d.jsx)(l.a,{path:"/summoner",element:Object(d.jsx)(se,{lolApi:n})})]})})})},re=t(40),ie=t(41),le=t(14),oe=t.n(le),me=function(){function e(n,t){Object(re.a)(this,e),this.krLolApi=n,this.asiaLolApi=t}return Object(ie.a)(e,[{key:"summoner",value:function(){var e=Object(O.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.krLolApi.get("lol/summoner/v4/summoners/by-name/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"rank",value:function(){var e=Object(O.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.krLolApi.get("lol/league/v4/entries/by-summoner/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"matches",value:function(){var e=Object(O.a)(b.a.mark((function e(n,t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.asiaLolApi.get("lol/match/v5/matches/by-puuid/".concat(n,"/ids"),{params:{start:10*t,count:10}});case 2:return a=e.sent,e.abrupt("return",a.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n,t){return e.apply(this,arguments)}}()},{key:"matchInfo",value:function(){var e=Object(O.a)(b.a.mark((function e(n){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.asiaLolApi.get("lol/match/v5/matches/".concat(n));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e,this)})));return function(n){return e.apply(this,arguments)}}()},{key:"spellInfo",value:function(){var e=Object(O.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("https://ddragon.leagueoflegends.com/cdn/12.4.1/data/ko_KR/summoner.json");case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"runeInfo",value:function(){var e=Object(O.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("https://ddragon.leagueoflegends.com/cdn/12.4.1/data/ko_KR/runesReforged.json");case 2:return n=e.sent,e.abrupt("return",n.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"itemsInfo",value:function(){var e=Object(O.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("http://ddragon.leagueoflegends.com/cdn/12.4.1/data/ko_KR/item.json");case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"championInfo",value:function(){var e=Object(O.a)(b.a.mark((function e(){var n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,oe.a.get("https://ddragon.leagueoflegends.com/cdn/10.6.1/data/ko_KR/champion.json");case 2:return n=e.sent,e.abrupt("return",n.data.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()}]),e}(),ue=t(42),de=t.n(ue);t(68);Q.a.extend(de.a),Q.a.locale("ko");var pe=new me(oe.a.create({baseURL:"https://kr.api.riotgames.com",params:{api_key:"RGAPI-27fb77fa-1f99-48c4-be84-6974185608d3"}}),oe.a.create({baseURL:"https://asia.api.riotgames.com",params:{api_key:"RGAPI-27fb77fa-1f99-48c4-be84-6974185608d3"}}));r.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(ce,{lolApi:pe})}),document.getElementById("root"))},7:function(e,n,t){e.exports={row:"individualState_row__meGKo",championImgCell:"individualState_championImgCell__2lSI5",championImgBox:"individualState_championImgBox__3i8y3",championImg:"individualState_championImg__26uXC",championLevel:"individualState_championLevel__25Nv9",spellCell:"individualState_spellCell__BoBFj",spellImg:"individualState_spellImg__1yzXx",runeCell:"individualState_runeCell__10PNw",runeImg:"individualState_runeImg__2WMlK",summonerNameCell:"individualState_summonerNameCell__1J9jC",summonerLink:"individualState_summonerLink__3EefL",itemBox:"individualState_itemBox__DttRN",item:"individualState_item__Hb9If",itemImg:"individualState_itemImg__R8nMy",kdaCell:"individualState_kdaCell__2OfT6",csCell:"individualState_csCell__3-FiI",wardCell:"individualState_wardCell__2SeZw",damageCell:"individualState_damageCell__31Fz2",goldCell:"individualState_goldCell__23Nm_"}},9:function(e,n,t){e.exports={rank:"rank_rank__3gvPX",soloRank:"rank_soloRank__4kf8u",soloRankImg:"rank_soloRankImg__2pgr1",soloTierImg:"rank_soloTierImg__1rC2j",soloRankInfo:"rank_soloRankInfo__1mVSP",teamRank:"rank_teamRank__1Q1xD",teamRankImg:"rank_teamRankImg__Rx2Jk",teamTierImg:"rank_teamTierImg__x1rWh",teamRankInfo:"rank_teamRankInfo__1ko7j",miniSeries:"rank_miniSeries__3f1cj",win:"rank_win__1nBXG",lose:"rank_lose__1ASTX",none:"rank_none__N1Ebd",loading:"rank_loading__PDylj",spin:"rank_spin__2GrRr"}}},[[69,1,2]]]);
//# sourceMappingURL=main.8489a636.chunk.js.map