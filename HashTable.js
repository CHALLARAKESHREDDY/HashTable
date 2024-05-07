//Created a Hash Table so called Map in Javascript


class HashTable{
    constructor(size){
        this.table=new Array(size)
        this.size=size
    }

    Hash(key) {
        let total=0
        for (let i=0; i<key.length;i++){
             total +=key.charCodeAt(key[i])
        }
        return total % this.size;
    }

    Set(key,value) {
         let index = this.Hash(key)
         this.table[index] = value
        console.log(`${index} : ${value} added in Hash Table`)
        return ;
    }

    Remove(key) {
        let index = this.Hash(key)
        if (this.table[index]){
            console.log("Key not Found")
        }
        this.table[index] = undefined
        return ;
    }

    Get(key) {
        let index = this.Hash(key)
        console.log(this.table[index])
        return ;
    }
}

let table=new HashTable(10)
table.Set("Name","Rakesh")
table.Get("Name")
table.Set("age",23)
table.Get("age")
table.Set("Naem","Ramesh")
table.Get("Name")
