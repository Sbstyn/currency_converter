const _1st_h1 = document.querySelector("#_1st_h1");
const _2nd_h1 = document.querySelector("#_2nd_h1");
const _3rd_h1 = document.querySelector("#_3rd_h1");

function req(C_from, C_to, value){
    fetch(`https://free.currconv.com/api/v7/convert?q=${C_from}_${C_to}&compact=ultra&apiKey=b17c099b916d2b02dfd5`)
    .then(function(response){
        return data = response.json();
    })
    .then(function(data){
        let fromto = `${C_from}_${C_to}`;
        console.log(fromto);
        console.log(data);
        let rate = data[fromto];
        try{
            document.getElementById("_3rd_h1").style.color = "white";
            document.getElementById("_1st_h1").style.color = "white";

            _1st_h1.innerHTML = `${value}${C_from}`;
            _2nd_h1.innerHTML = "is";
            _3rd_h1.innerHTML = `${(rate * value).toFixed(3)}${C_to}`;

            let col_minus = 255;

            let _1st_h1_element_value = parseFloat(_1st_h1.innerHTML);
            let _3rd_h1_element_value = parseFloat(_3rd_h1.innerHTML);
            console.log(_1st_h1_element_value, ",", _3rd_h1_element_value);
            
            function oneplus_formula(_x_h1_element_value){
                console.log(_x_h1_element_value);
                console.log(_x_h1_element_value/value);
                console.log(rate);
                console.log((_x_h1_element_value/value).toFixed(3));
                return (-255/499*(_x_h1_element_value/value).toFixed(3)+(255+255/499));
            }

            function oneminus_formula(_x_h1_element_value){
                console.log(_x_h1_element_value);
                console.log(_x_h1_element_value/value);
                console.log(rate);
                console.log((_x_h1_element_value/value).toFixed(3));
                return (-255/499*(_x_h1_element_value/value).toFixed(3)+(255+255/499));
            }

            if(1 > _3rd_h1_element_value){
                console.log("in1");
                document.getElementById("_1st_h1").style.color = `rgba(255, ${parseFloat(oneminus_formula(1/_3rd_h1_element_value))}, ${parseFloat(oneminus_formula(1/_3rd_h1_element_value))}, 1)`;
            }
            else{
                console.log("in2");
                document.getElementById("_3rd_h1").style.color = `rgba(255, ${parseFloat(oneplus_formula(_3rd_h1_element_value))}, ${parseFloat(oneplus_formula(_3rd_h1_element_value))}, 1)`;
            }

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
    let curr1 = document.querySelector("#input_field_txt_1").value.toUpperCase();
    let curr2 = document.querySelector("#input_field_txt_2").value.toUpperCase();
    let value = document.querySelector("#input_field_curr_value").value;
    if(value == ""){
        value = 1
    }
    req(curr1, curr2, value);
    //document.querySelector("#update_btn").style = "color:red;";
}
