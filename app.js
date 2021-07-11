const btn = document.querySelector(".btn");
btn.innerHTML = text.value;
 btn.style.fontFamily = fof.value;
 btn.style.color = foc.value;
 btn.style.borderRadius=borval.value+"px";
 btn.style.fontSize=fosval.value+"px";
 btn.style.paddingBottom = pbval.value+"px";
  btn.style.paddingRight = prval.value+"px";
   btn.style.paddingTop = pval.value+"px";
    btn.style.paddingLeft = plval.value+"px";
    // btn.style.background=bocval.value;
    btn.style.outline="none";
    focval.value=foc.value;
     boc.value=bocval.value;
     bs.value=boc.value;
     btn.style.borderStyle="solid";
text.addEventListener('input',()=>{
    btn.innerHTML=text.value;
})
fof.addEventListener('input',()=>{
     btn.style.fontFamily = fof.value;
     line5.innerHTML=`${fof.value}`;
})
foc.addEventListener('input',()=>{
    focval.value=foc.value;
    btn.style.color = foc.value;
    line6.innerHTML=`${foc.value}`;
})
focval.addEventListener('input',()=>{
    focval.value=foc.value;
})
fos.addEventListener('input',()=>{
    fosval.value = fos.value;
    btn.style.fontSize = fos.value+"px";
    line7.innerHTML=`${fos.value}px`;
})
fosval.addEventListener('input',()=>{
    fos.value = fosval.value;
      btn.style.fontSize = fos.value+"px";
})
borval.addEventListener('input',()=>{
    borange.value = borval.value;
    btn.style.borderRadius = borval.value+"px";
    line4.innerHTML=`${borval.value}px`;
})
borange.addEventListener('input',()=>{
    borval.value = borange.value;
      btn.style.borderRadius = borval.value+"px";
         line4.innerHTML=`${borange.value}px`;
})
pval.addEventListener('input',()=>{
    p.value = pval.value;
    btn.style.paddingTop = pval.value+"px";
    pop.innerHTML=`${pval.value}px`
})
p.addEventListener('input',()=>{
    pval.value = p.value;
      btn.style.paddingTop = pval.value+"px";
      pop.innerHTML=`${pval.value}px`
})
pbval.addEventListener('input',()=>{
    pb.value = pbval.value;
    btn.style.paddingBottom = pbval.value+"px";
     bottom.innerHTML=`${pbval.value}px`
})
pb.addEventListener('input',()=>{
    pbval.value = pb.value;
      btn.style.paddingBottom = pbval.value+"px";
           bottom.innerHTML=`${pbval.value}px`
})
prval.addEventListener('input',()=>{
    pr.value = prval.value;
    btn.style.paddingRight = prval.value+"px";
     right.innerHTML=`${prval.value}px`
})
pr.addEventListener('input',()=>{
    prval.value = pr.value;
      btn.style.paddingRight = prval.value+"px";
       right.innerHTML=`${prval.value}px`
})
plval.addEventListener('input',()=>{
    pl.value = plval.value;
    btn.style.paddingLeft = plval.value+"px";
         left.innerHTML=`${plval.value}px`
})
pl.addEventListener('input',()=>{
    plval.value = pl.value;
      btn.style.paddingLeft = plval.value+"px";
      left.innerHTML=`${plval.value}px`
})
boc.addEventListener('input',()=>{
    bocval.value=boc.value;
    btn.style.background = boc.value;
    line2.innerHTML=`${boc.value}`;
})
bocval.addEventListener('input',()=>{
    bocval.value=boc.value;
})
bo.addEventListener('input',()=>{
    boval.value=bo.value;
    btn.style.borderColor = bo.value;
    col.innerHTML=`${bo.value}`
})
boval.addEventListener('input',()=>{
    boval.value=bo.value;
})
bow.addEventListener('input',()=>{
    w.innerHTML = bow.value+"px";
    btn.style.borderWidth = bow.value+"px";
})
bot.addEventListener('input',()=>{
   btn.style.borderStyle = bot.value;
   st.innerHTML=bot.value;
})
bs.addEventListener('input',()=>{
    bsval.value=bs.value;

    btn.style.boxShadow = `${s.value}px ${y.value}px ${b.value}px ${bs.value}`;
    colo.innerHTML=bs.value;
})
bsval.addEventListener('input',()=>{
    bsval.value=bs.value;

})
s.addEventListener('input',()=>{
    sval.value=s.value;
   btn.style.boxShadow = `${s.value}px ${y.value}px ${b.value}px ${bs.value}`;
    xaxis.innerHTML=s.value+"px";
})
sval.addEventListener('input',()=>{
    sval.value=s.value;

});
y.addEventListener('input',()=>{
    yval.value=y.value;
   btn.style.boxShadow = `${s.value}px ${y.value}px ${b.value}px ${bs.value}`;
    yaxis.innerHTML=y.value+"px";    
})
yval.addEventListener('input',()=>{
    yval.value=y.value;

});
b.addEventListener('input',()=>{
    bval.value=b.value;
   btn.style.boxShadow = `${s.value}px ${y.value}px ${b.value}px ${bs.value}`;
    clur.innerHTML=b.value+"px";
})
bval.addEventListener('input',()=>{
    bval.value=b.value;

})
ts.addEventListener('input',()=>{
    tsval.value=ts.value;

    btn.style.textShadow = `${tx.value}px ${ty.value}px ${tb.value}px ${ts.value}`;
    tcolo.innerHTML=ts.value;
})
bsval.addEventListener('input',()=>{
    tsval.value=ts.value;
});
tx.addEventListener('input',()=>{
    txval.value=tx.value;
   btn.style.textShadow = `${tx.value}px ${ty.value}px ${tb.value}px ${ts.value}`;
    txaxis.innerHTML=tx.value+"px";
})
txval.addEventListener('input',()=>{
    txval.value=tx.value;

});
ty.addEventListener('input',()=>{
    tyval.value=ty.value;
   btn.style.textShadow = `${tx.value}px ${ty.value}px ${tb.value}px ${ts.value}`;
     tyaxis.innerHTML=ty.value+"px";
})
tyval.addEventListener('input',()=>{
    tyval.value=ty.value;

});
tb.addEventListener('input',()=>{
    tbval.value=tb.value;
   btn.style.textShadow = `${tx.value}px ${ty.value}px ${tb.value}px ${ts.value}`;
    tclur.innerHTML=tb.value+"px";
})
tbval.addEventListener('input',()=>{
    tbval.value=tb.value;

});





const atn = document.querySelector(".atn");
const header = document.querySelector("header");
j.addEventListener('click',copyClipboard)

function copyClipboard() {
    if (j.innerHTML===`<svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#fff"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg>`) {
    j.innerHTML= `<svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#fff"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"></path></svg>`;
}
else if (j.innerHTML=== `<svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#fff"><path d="M336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 40c13.3 0 24 10.7 24 24s-10.7 24-24 24-24-10.7-24-24 10.7-24 24-24zm121.2 231.8l-143 141.8c-4.7 4.7-12.3 4.6-17-.1l-82.6-83.3c-4.7-4.7-4.6-12.3.1-17L99.1 285c4.7-4.7 12.3-4.6 17 .1l46 46.4 106-105.2c4.7-4.7 12.3-4.6 17 .1l28.2 28.4c4.7 4.8 4.6 12.3-.1 17z"></path></svg>`) {
    j.innerHTML=`<svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#fff"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg>`;    
}
// header.style.filter= "blur(5px)";
header.style.pointerEvents="none";
copy.style.opacity = '1';
setTimeout(()=>{
    // header.style.filter= "blur(0px)";
header.style.pointerEvents="auto";
copy.style.opacity = '0';
j.innerHTML=`<svg class="icon" viewBox="0 0 384 512" width="16pt" height="16pt" fill="#fff"><path d="M280 240H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zm0 96H168c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8h112c4.4 0 8-3.6 8-8v-16c0-4.4-3.6-8-8-8zM112 232c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24 24-10.7 24-24-10.7-24-24-24zM336 64h-80c0-35.3-28.7-64-64-64s-64 28.7-64 64H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48zM192 48c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16 7.2-16 16-16zm144 408c0 4.4-3.6 8-8 8H56c-4.4 0-8-3.6-8-8V120c0-4.4 3.6-8 8-8h40v32c0 8.8 7.2 16 16 16h160c8.8 0 16-7.2 16-16v-32h40c4.4 0 8 3.6 8 8v336z"></path></svg>`;
},1200)
  var elm = document.getElementById("code");
  // for Internet Explorer

  if(document.body.createTextRange) {
    var range = document.body.createTextRange();
    range.moveToElementText(elm);
    range.select();
    document.execCommand("Copy");
    // alert("Copied div content to clipboard");
  }
  else if(window.getSelection) {
    // other browsers

    var selection = window.getSelection();
    var range = document.createRange();
    range.selectNodeContents(elm);
    selection.removeAllRanges();
    selection.addRange(range);
    document.execCommand("Copy");
    // alert("Copied div content to clipboard");
  }
}
lu.addEventListener('click',()=>{
    font.classList.toggle("active");
    box.classList.remove("ptive");
    bord.classList.remove("ktive");
    bags.classList.remove("dtive");
      hover.classList.remove("stive");
})
pu.addEventListener('click',()=>{
    box.classList.toggle("ptive");
        font.classList.remove("active");
            bord.classList.remove("ktive");
            bags.classList.remove("dtive");
              hover.classList.remove("stive");
})
ku.addEventListener('click',()=>{
    bord.classList.toggle("ktive");
     font.classList.remove("active");
    box.classList.remove("ptive");
    bags.classList.remove("dtive");
      hover.classList.remove("stive");
})
du.addEventListener('click',()=>{
    bags.classList.toggle("dtive");
     font.classList.remove("active");
    box.classList.remove("ptive");
     bord.classList.remove("ktive");
       hover.classList.remove("stive");
})
nu.addEventListener('click',()=>{
    hover.classList.toggle("stive");
     font.classList.remove("active");
    box.classList.remove("ptive");
     bord.classList.remove("ktive");
     bags.classList.remove("dtive");
})



bsoc.addEventListener('input',()=>{
    bsocval.value=bsoc.value;
   btn.style.backgroundImage=`linear-gradient(to bottom, ${bsoc.value}, ${beoc.value})`;
   a.innerHTML=bsoc.value;
})
bsocval.addEventListener('input',()=>{
    bsocval.value=bsoc.value;
})
beoc.addEventListener('input',()=>{
    beocval.value=beoc.value;
   btn.style.backgroundImage=`linear-gradient(to bottom, ${bsoc.value}, ${beoc.value})`;
    c.innerHTML=beoc.value;
})
beocval.addEventListener('input',()=>{
    beocval.value=beoc.value;
})
btn.style.backgroundImage=`linear-gradient(to bottom, #3498db, #2980b9)`;
 beocval.value="#2980b9";
 beoc.value="#2980b9";
 bsocval.value="#3498db";
 bsoc.value="#3498db";



hoc.addEventListener('input',()=>{
    hocval.value=hoc.value;
    // btn.style.background = hoc.value;
    d.innerHTML= hoc.value;
})
hocval.addEventListener('input',()=>{
    hocval.value=hoc.value;
})







hsoc.addEventListener('input',()=>{
    hsocval.value=hsoc.value;
   // btn.style.backgroundImage=`linear-gradient(to bottom, ${hsoc.value}, ${heoc.value})`;
   n.innerHTML=hsoc.value;
})
hsocval.addEventListener('input',()=>{
    hsocval.value=hsoc.value;
})
heoc.addEventListener('input',()=>{
    heocval.value=heoc.value;
   // btn.style.backgroundImage=`linear-gradient(to bottom, ${hsoc.value}, ${heoc.value})`;
    f.innerHTML=heoc.value;
})
heocval.addEventListener('input',()=>{
    heocval.value=heoc.value;
})

hsoc.value="#3cb0fd";
heoc.value="#3498db";

btn.addEventListener('mouseenter',()=>{
    if (one.checked === true) {
         btn.style.backgroundImage=`linear-gradient(to bottom, ${hsoc.value}, ${heoc.value})`;
    }
    else {
        btn.style.background = hoc.value;
    }
     
   console.log("fuk")
})
btn.addEventListener('mouseleave',()=>{
   if (three.checked === true) {
    btn.style.backgroundImage=`linear-gradient(to bottom, ${bsoc.value}, ${beoc.value})`;  
   }
   else {
       btn.style.background = boc.value;
   }
   
      // btn.style.background = hoc.value;
})
one.checked = true;
 if (one.checked === true) {
        console.log("yeah")
        hey.style.display = 'none';
    }
    else if (two.checked === true) {
        hey.style.display = 'block';
    }
one.addEventListener('click',()=>{
    document.querySelector("#code > span:nth-child(4)").innerHTML=`<span><span class="com"> background-image: </span>linear-gradient(to bottom, <span id="a">#3498db</span>, <span id="c">#2980b9</span>);</span>`;
    document.querySelector("#code > br:nth-child(3)").style.display="inline-block";

    if (one.checked === true) {
        console.log("yeah")
        hey.style.display = 'none';
            pey.style.display = 'flex';
                bey.style.display = 'flex';
    }
})
two.addEventListener('click',()=>{
        btn.style.background="#3498db";
    document.querySelector("#code > span:nth-child(4)").innerHTML="";
    document.querySelector("#code > br:nth-child(3)").style.display="none";
    if (two.checked === true) {
           hey.style.display = 'flex';
            pey.style.display = 'none';
                bey.style.display = 'none';
    }
});
three.checked = true;
 if (three.checked === true) {
        console.log("yeah")
        gay.style.display = 'none';
    }
    else if (two.checked === true) {
        gay.style.display = 'block';
    }
three.addEventListener('click',()=>{
        document.querySelector("#code > span:nth-child(31)").innerHTML=`<span><span class="com"> background-image: </span>linear-gradient(to bottom, <span id="n">#3498db</span>, <span id="f">#2980b9</span>);</span>`;
    document.querySelector("#code > br:nth-child(30)").style.display = 'inline-block';
    if (three.checked === true) {
        console.log("yeah")
        gay.style.display = 'none';
            bay.style.display = 'flex';
                say.style.display = 'flex';
    }
})
four.addEventListener('click',()=>{
    document.querySelector("#code > span:nth-child(31)").innerHTML="";
    document.querySelector("#code > br:nth-child(30)").style.display = 'none';
    if (four.checked === true) {
           gay.style.display = 'flex';
            bay.style.display = 'none';
                say.style.display = 'none';
                // btn.style.backgroundImage = 'linear-gradient(to bottom, #3cb0fd, #3498db)';
                btn.style.background="#3d3d3d";
    }
})
