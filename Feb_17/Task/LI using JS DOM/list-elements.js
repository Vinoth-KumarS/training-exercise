 var body = document.querySelector('body');
 var h1Element = document.createElement('h1');
 h1Element.innerText = "JS DOM";
 var pElement = document.createElement('p');
 pElement.innerText = "List Items Practise";
 var ulElement = document.createElement('ul');
 var liElement1 = document.createElement('li')
 liElement1.innerText = "First List"
 var liElement2 = document.createElement('li')
 liElement2.innerText = "Second List"
 var liElement3 = document.createElement('li')
 liElement3.innerText = "Third List"
 var liElement4 = document.createElement('li')
 liElement4.innerText = "Fourth List"
 var liElement5 = document.createElement('li')
 liElement5.innerText = "Fiveth List"

 ulElement.appendChild(liElement1)
 ulElement.appendChild(liElement2)
 ulElement.appendChild(liElement3)
 ulElement.appendChild(liElement4)
 ulElement.appendChild(liElement5)

 body.appendChild(h1Element)
 body.appendChild(pElement)
 body.appendChild(ulElement)