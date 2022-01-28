// let a: number=5;
// let b: string='a';
// let c: boolean=true;
// let d: any;
// let e: number[]=[1,2,3];
// let f: Array<number>=[1,2,3,];
// let g: any[] = [1,'a',true];
// let h: [string,number,boolean] = ['a',1,true];  //tuple

// const krediPayment = 0;
// const havalePayment = 1;
// const eftPayment = 2;

// enum Payment {kredi=0,havale=5,kapıdaodeme=2,eft=3};

// let kredi = Payment.kredi; //0
// let havale = Payment.havale; //5
// let kapıdaodeme = Payment.kapıdaodeme;  //2
// let eft = Payment.eft; //3

//*********************** */

// let message;

// message = 'hello world';

// let count = (<string>message).length;
// let length = (message as string).length;

//*********************** */

// const getAverage =(): void =>{
//     let total = 0;
//     let count = 0;

//     for(let i=0;i<a.length;i++){
//         total +=a[i];
//         count++;
//     }

//     const result = total/count;
//     return 'result :'+ result;
// }

// getAverage(10,20,30);
// getAverage(10,20);
// getAverage(10,20,30,50);
// getAverage(10);


//*********************** */



interface Point {
    x: number, 
    y: number
}

interface Passenger{
    name:string;
    phone: string;
}

interface Vehicle{
    currentLocation: Point;
    travelTo(point:Point):void;
    getDistance(pointA:Point, pointB: Point): number;
    addPassenger(passenger: Passenger):void;
    removePassenger(passenger:Passenger):void;
}

let travelTo = (point:Point)=>{
    //..
}

let getDistance = (pointA:Point, pointB:Point)=>{
    //..
}

 travelTo({
    x:1,
    y:2
 });


// taxi_1: 41 abc 41
//taxi_1.currentLocation=>
//taxi_1.travelTo()=>

// taxi_2: 41 abd 41
//taxi_2.currentLocation=>
//taxi_2.travelTo()=>

































