class Student{
    constructor(name,age,marks){
        this.name=name;
        this.age=age;
        this.marks=marks;
    }
    setPlacementAge(minPlacementAge){
        console.log(this);
        return(minMarks)=>{
        console.log('inside eligableForCurrentCompany',this);
        if(this.marks> minMarks && this.age > minPlacementAge){
            console.log(this.name+"is ready for placement");
        }else{
        console.log(this.name+"is not ready for placemnet");
        }
    }
}
}
const ram=new Student('ram',25,75);
const raju=new Student('raju',13,35)