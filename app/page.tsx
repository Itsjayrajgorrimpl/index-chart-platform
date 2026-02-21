"use client";

import { useEffect, useState } from "react";

export default function Home() {

const [symbol,setSymbol] = useState("NSE:NIFTY");

useEffect(()=>{

document.getElementById("chart")!.innerHTML="";

const script = document.createElement("script");

script.src="https://s3.tradingview.com/tv.js";

script.async=true;

script.onload=()=>{

// @ts-ignore
new TradingView.widget({

width:"100%",

height:600,

symbol:symbol,

interval:"5",

timezone:"Asia/Kolkata",

theme:"dark",

style:"1",

locale:"en",

allow_symbol_change:false,

container_id:"chart"

});

};

document.body.appendChild(script);

},[symbol]);


return(

<div style={{

background:"#0f1117",

minHeight:"100vh",

padding:"20px",

color:"white"

}}>

<h1 style={{fontSize:"28px"}}>

Live Indian Index Charts

</h1>


<div style={{

display:"flex",

gap:"20px",

marginTop:"20px",

flexWrap:"wrap"

}}>

<button onClick={()=>setSymbol("NSE:NIFTY")}>NIFTY</button>

<button onClick={()=>setSymbol("NSE:BANKNIFTY")}>BANKNIFTY</button>

<button onClick={()=>setSymbol("NSE:MIDCPNIFTY")}>MIDCPNIFTY</button>

<button onClick={()=>setSymbol("NSE:FINNIFTY")}>FINNIFTY</button>

<button onClick={()=>setSymbol("BSE:SENSEX")}>SENSEX</button>

<button onClick={()=>setSymbol("BSE:BANKEX")}>BANKEX</button>

</div>

<div id="chart" style={{marginTop:"20px"}}></div>

</div>

);

}