'use strict';

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}

var n = randomInteger(2,4);
var array = [];
var str="";

for(var i=0; i<n; i++){
array[i]=[];
    for(var j=0; j<n; j++){
        array[i].push(randomInteger(1,9));
    }
}

for( i=0; i<array.length; i++){
    str+=array[i].join(" ") + "\n";
}


console.log("Массив 1:" +  "\n" + str);

//Задача 1
/*var arr=[];
var k=0;

for( k=0, j=0; k<n; k++, j++){
        arr[k]=array[0][j];
}

for(j=0; j<n; j++){
    array[0][j]=array[n-1][j];
}


for(k=0, j=0; k<n; k++, j++){
    array[n-1][j]=arr[k];
}

var str1="";

for( i=0; i<array.length; i++){
    str1+=array[i].join(" ") + "\n";
}

console.log("Массив 2:" +  "\n" + str1);
console.log(arr);*/

//Задача 2
/*var sum=0;
var str2="";
var str3="";

for( i=0; i<n; i++){
    sum=0;
    for( j=0; j<n; j++){
        sum+=array[i][j];
    }
    str2+="Сумма " + ++i + " строки: " + sum + "\n";
    --i;
}

console.log(str2);
sum=0;
for( j=0; j<n; j++){
    sum=0;
    for( i=0; i<n; i++) {
        sum += array[i][j];
    }
    str3+="Сумма " + ++j + " стлбца: " + sum + "\n";
    --j;
}

console.log(str3);*/

//Задача 3
var max=0;
var a=0;
var b=0;
var str4="";
for( i=0; i<n; i++){
    for( j=0; j<n; j++) {
     if(array[i][j]>max){
         max=array[i][j];
         a=i;
         b=j;

     }
    }
}
array[a][b]=String("*");
for( i=0; i<array.length; i++){
    str4+=array[i].join(" ") + "\n";
}

console.log("Массив 2: " + "\n" + str4);
