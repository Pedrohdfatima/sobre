function enviado(i){
        if(!i.ende.value && !i.CEP.value){
            alert("Informe um endereço ou CEP")
        }
        if (!i.CEP.value && i.ende.value){
            console.log(i.ende.value)
        }
        if (!i.ende.value && i.CEP.value){
            console.log (i.CEP.value)
        }
        if (i.CEP.value && i.ende.value){
            console.log(i.ende.value)
            console.log(i.CEP.value)
                 
        }
        }