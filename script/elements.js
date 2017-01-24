var currentP;


//création et initialisation du caroussel, du bouton "PRECEDENT" et du bouton "SUIVANT"
function init(){
	caroussel = document.getElementById('caroussel');
	currentP=1;
	//image 1
	img1 = document.createElement('img');
	img1.setAttribute('src','./images/image1.jpg');
	img1.setAttribute('class','eltExp');
	img1.setAttribute('id','pos1');
	caroussel.appendChild(img1);
	//image 2
	img2 = document.createElement('img');
	img2.setAttribute('src','./images/image2.jpg');
	img2.setAttribute('class','eltExp');
	img2.setAttribute('id','pos2');
	caroussel.appendChild(img2);
	//image 3
	img3 = document.createElement('img');
	img3.setAttribute('src','./images/image3.jpg');
	img3.setAttribute('class','eltExp');
	img3.setAttribute('id','pos3');
	caroussel.appendChild(img3);
	//image 4
	img4 = document.createElement('img');
	img4.setAttribute('src','./images/image4.jpg');
	img4.setAttribute('class','eltExp');
	img4.setAttribute('id','pos4');
	caroussel.appendChild(img4);
	//image 5
	img5 = document.createElement('img');
	img5.setAttribute('src','./images/image5.jpg');
	img5.setAttribute('class','eltExp');
	img5.setAttribute('id','pos5');
	caroussel.appendChild(img5);
	//image 6
	img6 = document.createElement('img');
	img6.setAttribute('src','./images/image6.jpg');
	img6.setAttribute('class','eltExp');
	img6.setAttribute('id','pos6');
	caroussel.appendChild(img6);
	//image 7
	img7 = document.createElement('img');
	img7.setAttribute('src','./images/image7.jpg');
	img7.setAttribute('class','eltExp');
	img7.setAttribute('id','pos7');
	caroussel.appendChild(img7);
	//image 8
	img8 = document.createElement('img');
	img8.setAttribute('src','./images/image8.jpg');
	img8.setAttribute('class','eltExp');
	img8.setAttribute('id','pos8');
	caroussel.appendChild(img8);
	//image 9
	img9 = document.createElement('img');
	img9.setAttribute('src','./images/image9.jpg');
	img9.setAttribute('class','eltExp');
	img9.setAttribute('id','pos9');
	caroussel.appendChild(img9);
	//image 10
	img10 = document.createElement('img');
	img10.setAttribute('src','./images/image10.jpg');
	img10.setAttribute('class','eltExp');
	img10.setAttribute('id','pos10');
	caroussel.appendChild(img10);
	//image 11
	img11 = document.createElement('img');
	img11.setAttribute('src','./images/image11.jpg');
	img11.setAttribute('class','eltExp');
	img11.setAttribute('id','pos11');
	caroussel.appendChild(img11);
	//image 12
	img12 = document.createElement('img');
	img12.setAttribute('src','./images/image12.jpg');
	img12.setAttribute('class','eltExp');
	img12.setAttribute('id','pos12');
	caroussel.appendChild(img12);
	//bouton "PRECEDENT"
	prev = document.createElement('button');
	prev.setAttribute('id','prev');
	prev.setAttribute('onclick','prec()');
	prev.innerHTML="PRECEDENT";
	caroussel.appendChild(prev);
	//bouton "SUIVANT"
	next = document.createElement('button');
	next.setAttribute('id','next');
	next.setAttribute('onclick','suiv()');
	next.innerHTML="SUIVANT";
	caroussel.appendChild(next);
}

//passer à l'image suivante
function suiv(){
	//en fonction de l'état actuel, on change l'ordre des images
	switch(currentP){
		case 1 : //on passe a l'état 12
			img1.setAttribute('id','pos2');
			img2.setAttribute('id','pos3');
			img3.setAttribute('id','pos4');
			img4.setAttribute('id','pos5');
			img5.setAttribute('id','pos6');
			img6.setAttribute('id','pos7');
			img7.setAttribute('id','pos8');
			img8.setAttribute('id','pos9');
			img9.setAttribute('id','pos10');
			img10.setAttribute('id','pos11');
			img11.setAttribute('id','pos12');
			img12.setAttribute('id','pos1');
			break;
		case 2 : //on passe a l'état 1
			img1.setAttribute('id','pos1');
			img2.setAttribute('id','pos2');
			img3.setAttribute('id','pos3');
			img4.setAttribute('id','pos4');
			img5.setAttribute('id','pos5');
			img6.setAttribute('id','pos6');
			img7.setAttribute('id','pos7');
			img8.setAttribute('id','pos8');
			img9.setAttribute('id','pos9');
			img10.setAttribute('id','pos10');
			img11.setAttribute('id','pos11');
			img12.setAttribute('id','pos12');
			break;
		case 3 : //on passe a l'état 2
			img1.setAttribute('id','pos12');
			img2.setAttribute('id','pos1');
			img3.setAttribute('id','pos2');
			img4.setAttribute('id','pos3');
			img5.setAttribute('id','pos4');
			img6.setAttribute('id','pos5');
			img7.setAttribute('id','pos6');
			img8.setAttribute('id','pos7');
			img9.setAttribute('id','pos8');
			img10.setAttribute('id','pos9');
			img11.setAttribute('id','pos10');
			img12.setAttribute('id','pos11');
			break;
		case 4 : //on passe a l'état 3
			img1.setAttribute('id','pos11');
			img2.setAttribute('id','pos12');
			img3.setAttribute('id','pos1');
			img4.setAttribute('id','pos2');
			img5.setAttribute('id','pos3');
			img6.setAttribute('id','pos4');
			img7.setAttribute('id','pos5');
			img8.setAttribute('id','pos6');
			img9.setAttribute('id','pos7');
			img10.setAttribute('id','pos8');
			img11.setAttribute('id','pos9');
			img12.setAttribute('id','pos10');
			break;
		case 5 : //on passe a l'état 4
			img1.setAttribute('id','pos10');
			img2.setAttribute('id','pos11');
			img3.setAttribute('id','pos12');
			img4.setAttribute('id','pos1');
			img5.setAttribute('id','pos2');
			img6.setAttribute('id','pos3');
			img7.setAttribute('id','pos4');
			img8.setAttribute('id','pos5');
			img9.setAttribute('id','pos6');
			img10.setAttribute('id','pos7');
			img11.setAttribute('id','pos8');
			img12.setAttribute('id','pos9');
			break;
		case 6 : //on passe a l'état 5
			img1.setAttribute('id','pos9');
			img2.setAttribute('id','pos10');
			img3.setAttribute('id','pos11');
			img4.setAttribute('id','pos12');
			img5.setAttribute('id','pos1');
			img6.setAttribute('id','pos2');
			img7.setAttribute('id','pos3');
			img8.setAttribute('id','pos4');
			img9.setAttribute('id','pos5');
			img10.setAttribute('id','pos6');
			img11.setAttribute('id','pos7');
			img12.setAttribute('id','pos8');
			break;
		case 7 : //on passe a l'état 6
			img1.setAttribute('id','pos8');
			img2.setAttribute('id','pos9');
			img3.setAttribute('id','pos10');
			img4.setAttribute('id','pos11');
			img5.setAttribute('id','pos12');
			img6.setAttribute('id','pos1');
			img7.setAttribute('id','pos2');
			img8.setAttribute('id','pos3');
			img9.setAttribute('id','pos4');
			img10.setAttribute('id','pos5');
			img11.setAttribute('id','pos6');
			img12.setAttribute('id','pos7');
			break;
		case 8 : //on passe a l'état 7
			img1.setAttribute('id','pos7');
			img2.setAttribute('id','pos8');
			img3.setAttribute('id','pos9');
			img4.setAttribute('id','pos10');
			img5.setAttribute('id','pos11');
			img6.setAttribute('id','pos12');
			img7.setAttribute('id','pos1');
			img8.setAttribute('id','pos2');
			img9.setAttribute('id','pos3');
			img10.setAttribute('id','pos4');
			img11.setAttribute('id','pos5');
			img12.setAttribute('id','pos6');
			break;
		case 9 : //on passe a l'état 8
			img1.setAttribute('id','pos6');
			img2.setAttribute('id','pos7');
			img3.setAttribute('id','pos8');
			img4.setAttribute('id','pos9');
			img5.setAttribute('id','pos10');
			img6.setAttribute('id','pos11');
			img7.setAttribute('id','pos12');
			img8.setAttribute('id','pos1');
			img9.setAttribute('id','pos2');
			img10.setAttribute('id','pos3');
			img11.setAttribute('id','pos4');
			img12.setAttribute('id','pos5');
			break;
		case 10 : //on passe a l'état 9
			img1.setAttribute('id','pos5');
			img2.setAttribute('id','pos6');
			img3.setAttribute('id','pos7');
			img4.setAttribute('id','pos8');
			img5.setAttribute('id','pos9');
			img6.setAttribute('id','pos10');
			img7.setAttribute('id','pos11');
			img8.setAttribute('id','pos12');
			img9.setAttribute('id','pos1');
			img10.setAttribute('id','pos2');
			img11.setAttribute('id','pos3');
			img12.setAttribute('id','pos4');
			break;
		case 11 : //on passe a l'état 10
			img1.setAttribute('id','pos4');
			img2.setAttribute('id','pos5');
			img3.setAttribute('id','pos6');
			img4.setAttribute('id','pos7');
			img5.setAttribute('id','pos8');
			img6.setAttribute('id','pos9');
			img7.setAttribute('id','pos10');
			img8.setAttribute('id','pos11');
			img9.setAttribute('id','pos12');
			img10.setAttribute('id','pos1');
			img11.setAttribute('id','pos2');
			img12.setAttribute('id','pos3');
			break;
		case 12 : //on passe a l'état 11
			img1.setAttribute('id','pos3');
			img2.setAttribute('id','pos4');
			img3.setAttribute('id','pos5');
			img4.setAttribute('id','pos6');
			img5.setAttribute('id','pos7');
			img6.setAttribute('id','pos8');
			img7.setAttribute('id','pos9');
			img8.setAttribute('id','pos10');
			img9.setAttribute('id','pos11');
			img10.setAttribute('id','pos12');
			img11.setAttribute('id','pos1');
			img12.setAttribute('id','pos2');
			break;
	}
	//on actualise la description de l'image
	var oldDes=document.getElementById('desc'+currentP);
	oldDes.setAttribute('class','hidden');
	if (currentP==1){
		currentP = 12;
	} else {
		currentP--;
	}
	var newDes=document.getElementById('desc'+currentP);
	newDes.removeAttribute('class');
}


//retourner à l'image précédente
function prec(){
	//en fonction de l'état actuel, on change l'ordre des images
	switch(currentP){
		case 1 : //on passe a l'état 2
			img1.setAttribute('id','pos12');
			img2.setAttribute('id','pos1');
			img3.setAttribute('id','pos2');
			img4.setAttribute('id','pos3');
			img5.setAttribute('id','pos4');
			img6.setAttribute('id','pos5');
			img7.setAttribute('id','pos6');
			img8.setAttribute('id','pos7');
			img9.setAttribute('id','pos8');
			img10.setAttribute('id','pos9');
			img11.setAttribute('id','pos10');
			img12.setAttribute('id','pos11');
			break;
		case 2 : //on passe a l'état 3
			img1.setAttribute('id','pos11');
			img2.setAttribute('id','pos12');
			img3.setAttribute('id','pos1');
			img4.setAttribute('id','pos2');
			img5.setAttribute('id','pos3');
			img6.setAttribute('id','pos4');
			img7.setAttribute('id','pos5');
			img8.setAttribute('id','pos6');
			img9.setAttribute('id','pos7');
			img10.setAttribute('id','pos8');
			img11.setAttribute('id','pos9');
			img12.setAttribute('id','pos10');
			break;
		case 3 : //on passe a l'état 4
			img1.setAttribute('id','pos10');
			img2.setAttribute('id','pos11');
			img3.setAttribute('id','pos12');
			img4.setAttribute('id','pos1');
			img5.setAttribute('id','pos2');
			img6.setAttribute('id','pos3');
			img7.setAttribute('id','pos4');
			img8.setAttribute('id','pos5');
			img9.setAttribute('id','pos6');
			img10.setAttribute('id','pos7');
			img11.setAttribute('id','pos8');
			img12.setAttribute('id','pos9');
			break;
		case 4 : //on passe a l'état 5
			img1.setAttribute('id','pos9');
			img2.setAttribute('id','pos10');
			img3.setAttribute('id','pos11');
			img4.setAttribute('id','pos12');
			img5.setAttribute('id','pos1');
			img6.setAttribute('id','pos2');
			img7.setAttribute('id','pos3');
			img8.setAttribute('id','pos4');
			img9.setAttribute('id','pos5');
			img10.setAttribute('id','pos6');
			img11.setAttribute('id','pos7');
			img12.setAttribute('id','pos8');
			break;
		case 5 : //on passe a l'état 6
			img1.setAttribute('id','pos8');
			img2.setAttribute('id','pos9');
			img3.setAttribute('id','pos10');
			img4.setAttribute('id','pos11');
			img5.setAttribute('id','pos12');
			img6.setAttribute('id','pos1');
			img7.setAttribute('id','pos2');
			img8.setAttribute('id','pos3');
			img9.setAttribute('id','pos4');
			img10.setAttribute('id','pos5');
			img11.setAttribute('id','pos6');
			img12.setAttribute('id','pos7');
			break;
		case 6 : //on passe a l'état 7
			img1.setAttribute('id','pos7');
			img2.setAttribute('id','pos8');
			img3.setAttribute('id','pos9');
			img4.setAttribute('id','pos10');
			img5.setAttribute('id','pos11');
			img6.setAttribute('id','pos12');
			img7.setAttribute('id','pos1');
			img8.setAttribute('id','pos2');
			img9.setAttribute('id','pos3');
			img10.setAttribute('id','pos4');
			img11.setAttribute('id','pos5');
			img12.setAttribute('id','pos6');
			break;
		case 7 : //on passe a l'état 8
			img1.setAttribute('id','pos6');
			img2.setAttribute('id','pos7');
			img3.setAttribute('id','pos8');
			img4.setAttribute('id','pos9');
			img5.setAttribute('id','pos10');
			img6.setAttribute('id','pos11');
			img7.setAttribute('id','pos12');
			img8.setAttribute('id','pos1');
			img9.setAttribute('id','pos2');
			img10.setAttribute('id','pos3');
			img11.setAttribute('id','pos4');
			img12.setAttribute('id','pos5');
			break;
		case 8 : //on passe a l'état 9
			img1.setAttribute('id','pos5');
			img2.setAttribute('id','pos6');
			img3.setAttribute('id','pos7');
			img4.setAttribute('id','pos8');
			img5.setAttribute('id','pos9');
			img6.setAttribute('id','pos10');
			img7.setAttribute('id','pos11');
			img8.setAttribute('id','pos12');
			img9.setAttribute('id','pos1');
			img10.setAttribute('id','pos2');
			img11.setAttribute('id','pos3');
			img12.setAttribute('id','pos4');
			break;
		case 9 : //on passe a l'état 10
			img1.setAttribute('id','pos4');
			img2.setAttribute('id','pos5');
			img3.setAttribute('id','pos6');
			img4.setAttribute('id','pos7');
			img5.setAttribute('id','pos8');
			img6.setAttribute('id','pos9');
			img7.setAttribute('id','pos10');
			img8.setAttribute('id','pos11');
			img9.setAttribute('id','pos12');
			img10.setAttribute('id','pos1');
			img11.setAttribute('id','pos2');
			img12.setAttribute('id','pos3');
			break;
		case 10 : //on passe a l'état 11
			img1.setAttribute('id','pos3');
			img2.setAttribute('id','pos4');
			img3.setAttribute('id','pos5');
			img4.setAttribute('id','pos6');
			img5.setAttribute('id','pos7');
			img6.setAttribute('id','pos8');
			img7.setAttribute('id','pos9');
			img8.setAttribute('id','pos10');
			img9.setAttribute('id','pos11');
			img10.setAttribute('id','pos12');
			img11.setAttribute('id','pos1');
			img12.setAttribute('id','pos2');
			break;
		case 11 : //on passe a l'état 12
			img1.setAttribute('id','pos2');
			img2.setAttribute('id','pos3');
			img3.setAttribute('id','pos4');
			img4.setAttribute('id','pos5');
			img5.setAttribute('id','pos6');
			img6.setAttribute('id','pos7');
			img7.setAttribute('id','pos8');
			img8.setAttribute('id','pos9');
			img9.setAttribute('id','pos10');
			img10.setAttribute('id','pos11');
			img11.setAttribute('id','pos12');
			img12.setAttribute('id','pos1');
			break;
		case 12 : //on passe a l'état 1
			img1.setAttribute('id','pos1');
			img2.setAttribute('id','pos2');
			img3.setAttribute('id','pos3');
			img4.setAttribute('id','pos4');
			img5.setAttribute('id','pos5');
			img6.setAttribute('id','pos6');
			img7.setAttribute('id','pos7');
			img8.setAttribute('id','pos8');
			img9.setAttribute('id','pos9');
			img10.setAttribute('id','pos10');
			img11.setAttribute('id','pos11');
			img12.setAttribute('id','pos12');
			break;
	}
	//on actualise la description de l'image
	var oldDes=document.getElementById('desc'+currentP);
	oldDes.setAttribute('class','hidden');
	if (currentP==12){
		currentP = 1;
	} else {
		currentP++;
	}
	var newDes=document.getElementById('desc'+currentP);
	newDes.removeAttribute('class');
}