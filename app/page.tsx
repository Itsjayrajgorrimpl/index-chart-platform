"use client";

import { useEffect, useState } from "react";

export default function Home() {

const [symbol,setSymbol] = useState("NSE:NIFTY");

const [price,setPrice]=useState<any>({});

async function loadPrice(){

let map:any={

"NSE:NIFTY":"%5ENSEI",

"NSE:BANKNIFTY":"%5ENSEBANK",

"BSE:SENSEX":"%5EBSESN"

};

let yahooSymbol=map[symbol];

if(!yahooSymbol)return;

const res=await fetch(
`https://query1.finance.yahoo.com/v7/finance/quote?symbols=${yahooSymbol}`
);

const data=await res.json();

const result=data.quoteResponse.result[0];

setPrice({

value:result.regularMarketPrice,

change:result.regularMarketChange,

percent:result.regularMarketChangePercent

});

}

useEffect(()=>{

loadPrice();

const interval=setInterval(loadPrice,30000);

return()=>clearInterval(interval);

},[symbol]);


return(

<div style={{
background:"#0f1117",
minHeight:"100vh",
padding:"20px",
color:"white"
}}>

<h1>Live Indian Index Charts</h1>


<div style={{
fontSize:"24px",
marginTop:"10px"
}}>

₹ {price.value}

<span style={{
marginLeft:"10px",
color:price.change>0?"green":"red"
}}>

{price.change?.toFixed(2)} ({price.percent?.toFixed(2)}%)

</span>

</div>


<div style={{
display:"flex",
gap:"10px",
marginTop:"20px",
flexWrap:"wrap"
}}>

<button onClick={()=>setSymbol("NSE:NIFTY")}>NIFTY</button>

<button onClick={()=>setSymbol("NSE:BANKNIFTY")}>BANKNIFTY</button>

<button onClick={()=>setSymbol("BSE:SENSEX")}>SENSEX</button>

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