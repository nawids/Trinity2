const t0 = [1,1,1,0,0,1,1,1];
const t1 = [0,0,1,0,0,0,1,0];
const t2 = [1,0,1,1,1,1,0,1];
const t3 = [1,0,1,1,1,0,1,1];
const t4 = [0,1,1,1,1,0,1,0];
const t5 = [1,1,0,1,1,0,1,1];
const t6 = [1,1,0,0,1,1,1,1];
const t7 = [1,0,1,0,0,0,1,0];
const t8 = [1,1,1,1,1,1,1,1];
const t9 = [1,1,1,1,0,0,1,1];
const tt = [t0,t1,t2,t3,t4,t5,t6,t7,t8,t9];

trinity2();
function trinity2()
{
    let date = new Date();
    let h = date.getHours(); // 0 - 23
    let m = date.getMinutes(); // 0 - 59

    if(h < 10)
    {
        h = "0"+h;
    }
    if(m < 10)
    {
        m = "0"+m;
    }
    let h1 = h.toString().substring(0, 1);
    let h2 = h.toString().substring(1, 2);
    let m1 = m.toString().substring(0, 1);
    let m2 = m.toString().substring(1, 2);

    fillDigit("h1",h1);
    fillDigit("h2",h2);
    fillDigit("m1",m1);
    fillDigit("m2",m2);

    setTimeout(trinity2, 1000);
}

function fillDigit(type,digit)
{
    let x = tt[digit]
    for (let i = 0; i < x.length; i++)
    {
        let el = type+i;
        let c = "";
        if(i===0 || i===4) { c = "OneOn";}
        if(i===1 || i===5) { c = "TwoOn";}
        if(i===2 || i===6) { c = "ThreeOn";}
        if(i===3 || i===7) { c = "FourOn";}
        if(x[i] === 1)
        {
            document.getElementById(el).classList.add(c);
        }
        else
        {
            document.getElementById(el).classList.remove(c);
        }
    }

}
