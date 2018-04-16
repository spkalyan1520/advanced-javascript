const animals=["poodle","labrador","cat","bulldog"];
animals[Symbol.iterator] = ()=>{
    let i=0;
    return{
        next:()=>{
            const res = {
                value:animals[i]+"blah",
                done:!(i<animals.length)
            }
            i++;
            return res;
        }
    }

}


for(const animal of animals){
    animal
}