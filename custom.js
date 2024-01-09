
// style of body is here

function main(){
    document.getElementById("slider").innerHTML
    slider.style.backgroundColor="blue"
}
main()

// style of div is goes here

function slide(){
    document.getElementById("slider1").innerHTML
    slider1.style.backgroundColor="black"
    slider1.style.padding="60px"
    slider1.style.textAlign="center"
    slider1.style.color="red"
    slider1.style.marginTop="40px"
    // slider1.style.

}
slide()

// style of addition is goes here

function topick(){
    let a = document.getElementById("add").value;
    let b = document.getElementById("add1").value;
    a=Number(a)
    b=Number(b)

    let total = document.getElementById("total").innerHTML=(a+b)
}

// style of subtraction is goes here

function toget(){
    let c = document.getElementById("sub").value;
    let d = document.getElementById("sub1").value;
    c=Number(c)
    d=Number(d)

    let result = document.getElementById("result").innerHTML=(c-d)
}

// for multiplication

function totake(){
    let e = document.getElementById("mul").value;
    let f = document.getElementById("mul1").value;
    e=Number(e)
    f=Number(f)
    
    let output = document.getElementById("output").innerHTML=(e*f)
}

// for division

function tohold(){
    let g = document.getElementById("div").value;
    let h = document.getElementById("div1").value;
    g=Number(g)
    h=Number(h)
    
    let solution = document.getElementById("solution").innerHTML=(g/h)
}