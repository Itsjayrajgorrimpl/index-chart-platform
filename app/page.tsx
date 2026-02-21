"use client";

import { useState } from "react";

export default function Home() {

const [symbol,setSymbol] = useState("NSE:NIFTY");

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
gap:"10px",
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


<div style={{
marginTop:"20px",
height:"600px"
}}>

<iframe
key={symbol}
src={`https://www.tradingview.com/widgetembed/?symbol=${symbol}&interval=5&theme=dark&style=1&timezone=Asia/Kolkata`}
width="100%"
height="100%"
frameBorder="0"
/>

</div>

</div>

);

}