 var elements = document.getElementsByClassName("a")

 function hasCheckedDom(input) {
     if (input.nodeType == 1) {
         return true;
     } else {
         return false;
     }

 }

 console.log(hasCheckedDom(elements[0]));
 console.log(hasCheckedDom(elements[1]));
 console.log(hasCheckedDom(elements[2]));

 console.log(hasCheckedDom("vinoth"));
 console.log(hasCheckedDom(12));
 console.log(hasCheckedDom({}));
 console.log(hasCheckedDom([]));