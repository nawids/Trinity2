var t0 = [1,1,1,0,0,1,1,1];
var t1 = [0,0,1,0,0,0,1,0];
var t2 = [1,0,1,1,1,1,0,1];
var t3 = [1,0,1,1,1,0,1,1];
var t4 = [0,1,1,1,1,0,1,0];
var t5 = [1,1,0,1,1,0,1,1];
var t6 = [1,1,0,0,1,1,1,1];
var t7 = [1,0,1,0,0,0,1,0];
var t8 = [1,1,1,1,1,1,1,1];
var t9 = [1,1,1,1,0,0,1,1];

trinity2();
function trinity2()
{
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59

    if(h < 10)
    {
        h = "0"+h;
    }
    if(m < 10)
    {
        m = "0"+m;
    }
    var h1 = h.toString().substring(0, 1);
    var h2 = h.toString().substring(1, 2);
    var m1 = m.toString().substring(0, 1);
    var m2 = m.toString().substring(1, 2);

    fillDigit("h1",h1);
    fillDigit("h2",h2);
    fillDigit("m1",m1);
    fillDigit("m2",m2);

    setTimeout(trinity2, 1000);
}

function fillDigit(type,digit)
{
    var x = this['t' + digit];
    for (var i = 0; i < x.length; i++)
    {
        var el = type+i;
        var c = "";
        if(i==0 || i==4) { c = "OneOn";}
        if(i==1 || i==5) { c = "TwoOn";}
        if(i==2 || i==6) { c = "ThreeOn";}
        if(i==3 || i==7) { c = "FourOn";}
        if(x[i] == 1)
        {
            document.getElementById(el).classList.add(c);
        }
        else
        {
            document.getElementById(el).classList.remove(c);
        }
    }

}
