    
    const list = document.querySelector('.list')
    const form = document.querySelector('.form');
    const num1 = document.querySelector('#n1');
    const num2 = document.querySelector('#n2');
    /**
    |--------------------------------------------------
    |                     MODEL
    |--------------------------------------------------
    */
  
  class Dictionary {
    constructor() {
      this.newArr = [];
      this.number = [];
    }
  // Print numbers between 1 to 99 inclusive
    oneToHundred(n) {
      const arr=[' One',' Two',' Three',' Four',' Five',' Six',' Seven',' Eight',' Nine',' Ten',' Eleven',' Twelve',' Thirteen',' Fourteen',' Fifteen',' Sixteen',' Seventeen',' Eighteen',' Nineteen',' Twenty',' Thirty',' Forty',' Fifty',' Sixty',' Seventy',' Eighty',' Ninety'];
      let str = "";
      while (n !== 0) {
        for(let i=0;i<arr.length;i++){
          if(i===n){
            str+=arr[n-1];
            n=0;
          }else if (n >= 20 && n < 100) {
           let num = Math.floor(n/10)
              if(i===num){
                str +=arr[i+17];
                n-=num*10;   
              }
        }  
      }
    }
      return str;
    }
  // Print numbers between 1 and 999
    findRange(m) {
      let str = "";
      //By increasing the value of a the limit can be increased.
      const a=100;
      while (m !== 0) {
        if (m >= 1 && m < a) {
          str += this.oneToHundred(m);
          //Making count zero to break out of the loop
          m = 0;
        } else if (m >= a && m < a*10) {
          str += this.oneToHundred(Math.floor(m / a));
          str += ` Hundred`;
          m  %= a;
        }
        //To increase the range to 9999 (For applicaton Scalability)
        //  else if (m >= a*10 && m < a*100) {
        //   str += this.oneToHundred(Math.floor(m / a*10));
        //   str += ` Thousand`;
        //   m %= a*10;
        // }
      }
      return str;
    }
    range(a, b) {
      //Condition checks if numbers entered are between 1 and 999 inclusive.
      const maxLimit=1000;
      if (!(a > 0 && a < maxLimit && b > 0 && b < maxLimit)) {
        alert(`Please enter both integers between 1 and 999 inclusive.`);
        //Checks if second no is greater than first no.
      }else if(a<=b){
        for (let i = a; i <= b; i++) {
          const s = this.findRange(i);
          this.newArr.push(s);
          this.number.push(i);
        } 
      }else{
        alert(`Second number must be greater than first number.`)
      }
    }
    //Function find length of Word
    calculateLength(index) {
      return this.newArr[index].split("").filter(el => el === "e").length;
    }
  }

 
          /**
          |--------------------------------------------------
          |                     CONTROLER   
          |--------------------------------------------------
          */
    //Event handler to get values
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        //Stored the values and changed to numbers
        const n1= parseInt(num1.value,10);
        const n2= parseInt(num2.value,10);
        //Cleared the form
        num1.value='';
        num2.value='';
        //Cleared the search 
        list.innerHTML="";
        //instantiate Dictionary class
        const dic = new Dictionary()
        //Passed value to function
        dic.range(n1, n2);
         /**
          |--------------------------------------------------
          |                     VIEW 
          |--------------------------------------------------
          */
       dic.newArr.map((el, i) => {
         //Inserted  output into document
          const markup=`
          <li>(${dic.number[i]},${dic.calculateLength(i)})  ("${el}" has ${dic.calculateLength(i)===0?'no':`${dic.calculateLength(i)}`} ${dic.calculateLength(i)>=2?"'e's":'e'})</li>
          `
          list.insertAdjacentHTML('beforeend',markup)
      });
  
        
    })
    
  