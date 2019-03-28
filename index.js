    
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
  // Print no between 1 and 99
    oneToHundred(n) {
      let str = "";
      while (n != 0) {
        if (n === 1) {
          str += ` one`;
          n = 0;
        } else if (n === 2) {
          str += ` two`;
          n = 0;
        } else if (n === 3) {
          str += ` three`;
          n = 0;
        } else if (n === 4) {
          str += ` four`;
          n = 0;
        } else if (n === 5) {
          str += ` five`;
          n = 0;
        } else if (n === 6) {
          str += ` six`;
          n = 0;
        } else if (n === 7) {
          str += ` seven`;
          n = 0;
        } else if (n === 8) {
          str += ` eight`;
          n = 0;
        } else if (n === 9) {
          str += ` nine`;
          n = 0;
        } else if (n === 10) {
          str += ` ten`;
          n = 0;
        } else if (n === 11) {
          str += ` eleven`;
          n = 0;
        } else if (n === 12) {
          str += ` tweleve`;
          n = 0;
        } else if (n === 13) {
          str += ` thirdeen`;
          n = 0;
        } else if (n === 14) {
          str += ` fourteen`;
          n = 0;
        } else if (n === 15) {
          str += ` fifteen`;
          n = 0;
        } else if (n === 16) {
          str += ` sixteen`;
          n = 0;
        } else if (n === 17) {
          str += ` seventeen`;
          n = 0;
        } else if (n === 18) {
          str += ` eighteen`;
          n = 0;
        } else if (n === 19) {
          str += ` nineteen`;
          n = 0;
        } else if (n >= 20 && n < 30) {
          str += ` twenty`;
          n -= 20;
        } else if (n >= 30 && n < 40) {
          str += ` thirty`;
          n -= 30;
        } else if (n >= 40 && n < 50) {
          str += ` fourty`;
          n -= 40;
        } else if (n >= 50 && n < 60) {
          str += ` fifty`;
          n -= 50;
        } else if (n >= 60 && n < 70) {
          str += ` sixty`;
          n -= 60;
        } else if (n >= 70 && n < 80) {
          str += ` seventy`;
          n -= 70;
        } else if (n >= 80 && n < 90) {
          str += `eighty`;
          n -= 80;
        } else if (n >= 90 && n < 100) {
          str += ` ninty`;
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
      //Condition checks if the no entered in between 1 and 999 inclusive
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
    
  