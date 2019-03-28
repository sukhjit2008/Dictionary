    
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
      this.newarr = [];
      this.number = [];
    }
  // Print no between 1 to 99 inclusive
    oneToHundred(n) {
      const arr=[' one',' two',' three',' four',' five',' six',' seven',' eight',' nine',' ten',' eleven',' twelve',' thirteen',' fourteen',' fifteen',' sixteen',' seventeen',' eighteen',' nineteen',' twenty',' thirty',' fourty',' fifty',' sixty',' seventy',' eighty',' ninety'];
      let str = "";
      while (n != 0) {
        if (n === 1) {
          str += arr[0];
          n = 0;
        } else if (n === 2) {
          str += arr[1];
          n = 0;
        } else if (n === 3) {
          str += arr[2];
          n = 0;
        } else if (n === 4) {
          str += arr[3];
          n = 0;
        } else if (n === 5) {
          str += arr[4];
          n = 0;
        } else if (n === 6) {
          str += arr[5];
          n = 0;
        } else if (n === 7) {
          str += arr[6];
          n = 0;
        } else if (n === 8) {
          str += arr[7];
          n = 0;
        } else if (n === 9) {
          str += arr[8];
          n = 0;
        } else if (n === 10) {
          str += arr[9];
          n = 0;
        } else if (n === 11) {
          str += arr[10];
          n = 0;
        } else if (n === 12) {
          str += arr[11];
          n = 0;
        } else if (n === 13) {
          str += arr[12];
          n = 0;
        } else if (n === 14) {
          str += arr[13];
          n = 0;
        } else if (n === 15) {
          str += arr[14];
          n = 0;
        } else if (n === 16) {
          str += arr[15];
          n = 0;
        } else if (n === 17) {
          str += arr[16];
          n = 0;
        } else if (n === 18) {
          str += arr[17];
          n = 0;
        } else if (n === 19) {
          str += arr[18];
          n = 0;
        } else if (n >= 20 && n < 30) {
          str += arr[19];
          n -= 20;
        } else if (n >= 30 && n < 40) {
          str += arr[20];
          n -= 30;
        } else if (n >= 40 && n < 50) {
          str += arr[21];
          n -= 40;
        } else if (n >= 50 && n < 60) {
          str += arr[22];
          n -= 50;
        } else if (n >= 60 && n < 70) {
          str += arr[23];
          n -= 60;
        } else if (n >= 70 && n < 80) {
          str += arr[24];
          n -= 70;
        } else if (n >= 80 && n < 90) {
          str += arr[25];
          n -= 80;
        } else if (n >= 90 && n < 100) {
          str += arr[26];
          n -= 90;
        }
      }
      return str;
    }
  // Print no between 1 and 999
    findRange(m) {
      let str = "";
      while (m != 0) {
        if (m >= 1 && m < 100) {
          str += this.oneToHundred(m);
          m = 0;
        } else if (m >= 100 && m < 1000) {
          str += this.oneToHundred(Math.floor(m / 100));
          str += ` hundred`;
          m = m % 100;
        } else if (m >= 1000 && m < 10000) {
          str += this.oneToHundred(Math.floor(m / 1000));
          str += ` thousand`;
          m %= 1000;
        }
      }
      return str;
    }
    range(a, b) {
      //Condition checks if numbers entered are between 1 and 999 inclusive and  if second no is greater than first no.
      if (a > 0 && a < 10000 && b > 0 && b < 10000 && b > a) {
        for (let i = a; i <= b; i++) {
          const s = this.findRange(i);
          this.newarr.push(s);
          this.number.push(i);
        }
      } else {
        alert(`Please enter both integers between 1 and 999 inclusive`);
      }
    }
    //Function find length of Word
    calculateLength(index) {
      return this.newarr[index].split("").filter(el => el === "e").length;
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
        const result = dic.newarr.map((el, i) => {
          /**
          |--------------------------------------------------
          |                     VIEW 
          |--------------------------------------------------
          */
         //Insert the output into document
          const markup=`
          <li>(${dic.number[i]},${dic.calculateLength(i)})  ("${el}" has ${dic.calculateLength(i)} 'e's)</li>
          `
          list.insertAdjacentHTML('beforeend',markup)
      });
  
        
    })
    
  