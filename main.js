const _1st_h1 = document.querySelector("#_1st_h1");
const _2nd_h1 = document.querySelector("#_2nd_h1");
const _3rd_h1 = document.querySelector("#_3rd_h1");

function req(C_from, C_to){
    fetch(`https://free.currconv.com/api/v7/convert?q=${C_from}_${C_to}&compact=ultra&apiKey=b17c099b916d2b02dfd5`)
    .then(function(response){
        return data = response.json();
    })
    .then(function(data){
        let fromto = `${C_from}_${C_to}`;
        console.log(fromto);
        let rate = data[fromto];
        try{
            document.getElementById("_3rd_h1").style.color = "white";
            document.getElementById("_1st_h1").style.color = "white";

            _1st_h1.innerHTML = `1${C_from}`;
            _2nd_h1.innerHTML = "is";
            _3rd_h1.innerHTML = `${rate.toFixed(3)}${C_to}`;

            let col_minus = 255;

            let _1st_h1_element_value = parseFloat(_1st_h1.innerHTML);
            let _3rd_h1_element_value = parseFloat(_3rd_h1.innerHTML);
            console.log(_1st_h1_element_value, ",", _3rd_h1_element_value);
            
            function formula(_x_h1_element_value){
                console.log(-255/499*_x_h1_element_value+(255+255/499));
                return -255/499*_x_h1_element_value+(255+255/499);
            }

            if(_1st_h1_element_value > _3rd_h1_element_value){
                console.log("in1");
                console.log(_3rd_h1);
                document.getElementById("_1st_h1").style.color = `rgba(255, ${parseFloat(formula(_1st_h1_element_value))}, ${parseFloat(formula(_1st_h1_element_value))}, 1)`;
                console.log("fin");
            }
            else{
                console.log("in2");
                document.getElementById("_3rd_h1").style.color = `rgba(255, ${parseFloat(formula(_3rd_h1_element_value))}, ${parseFloat(formula(_3rd_h1_element_value))}, 1)`;
                console.log("fin");
            }

            console.log(_1st_h1, ",", _3rd_h1);

            /*document.querySelectorAll("h1").forEach(function (h1_element){
                let h1_element_value = parseFloat(h1_element.innerHTML);
                console.log(h1_element_value);

                h1_element.style.color = `rgba(255, ${col_minus/(1/parseFloat(h1_element_value))}, ${col_minus/(1/h1_element_value)}, 1)`;
                console.log(h1_element);
            })*/
        }
        catch{
            console.log("catch");
            _1st_h1.innerHTML = `Error`;
            _2nd_h1.innerHTML = ``;
            _3rd_h1.innerHTML = ``;
        }
    });
}

document.querySelector("#update_btn").onclick = function(){
    let val1 = document.querySelector("#input_field_txt_1").value.toUpperCase();
    let val2 = document.querySelector("#input_field_txt_2").value.toUpperCase();
    req(val1, val2);
    //document.querySelector("#update_btn").style = "color:red;";
}
