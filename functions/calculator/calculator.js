function criaCalculadora() {
   return {
     display: document.querySelector('.display'),
 
     start() {
       this.buttonClick();
       this.pressBackspaceKey();
       this.pressEnterKey();
     },
 
     pressBackspaceKey() {
       this.display.addEventListener('keydown', e => {
         if (e.keyCode === 8) {
           e.preventDefault();
           this.clearDisplay();
         }
       });
     },
 
     pressEnterKey() {
       this.display.addEventListener('keyup', e => {
         if (e.keyCode === 13) {
           this.calculate();
         }
       });
     },
 
     calculate() {
       let conta = this.display.value;
 
       try {
         conta = eval(conta);
 
         if(!conta) {
           alert('Conta inválida');
           return;
         }
 
         this.display.value = String(conta);
       } catch(e) {
         alert('Conta inválida');
         return;
       }
     },
 
     clearDisplay() {
       this.display.value = '';
     },
 
     deleteLast() {
       this.display.value = this.display.value.slice(0, -1);
     },
 
 
     buttonClick() {
       document.addEventListener('click', e => {
         const el = e.target;
 
         if(el.classList.contains('btn-num')) {
           this.displayButton(el.innerText);
         }
 
         if(el.classList.contains('btn-clear')) {
           this.clearDisplay();
         }
 
         if(el.classList.contains('btn-del')) {
           this.deleteLast();
         }
 
         if(el.classList.contains('btn-eq')) {
           this.calculate();
         }
 
         this.display.focus();
       });
     },
 
     displayButton(valor) {
       this.display.value += valor;
     }
 
   };
 }
 
 const calculator = criaCalculadora();
 calculator.start();