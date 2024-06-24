function loadtab()
{
    var element = document.getElementById("btn1");
    document.getElementById("tab1").hidden=false;
    element.classList.add("active");
}

function tabs1()
{
    var element = document.getElementById("btn1");
    var element1 = document.getElementById("btn2");
    document.getElementById("tab1").hidden=false;
    document.getElementById("tab2").hidden=true;
    element.classList.add("active");
    element1.classList.remove("active");
}

function tabs2()
{
    var element = document.getElementById("btn2");
    var element1 = document.getElementById("btn1");
    document.getElementById("tab2").hidden=false;
    document.getElementById("tab1").hidden=true;
    element.classList.add("active");
    element1.classList.remove("active");
}


let FollowBox = "#Wrap .FollowBox";
gsap.set(FollowBox, {
  xPercent: -50,
  yPercent: -50,
  scale: 0
});



