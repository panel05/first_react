class KosarModel{
    #kosar = []
    #db
    #osszAr
    constructor(kosar){
        this.#kosar = kosar
        this.#db = 0
        this.#osszAr = 0
    }
    getKosar(){
        return this.#kosar
    }
    setKosar(adat){
        //keresd meg hogy van-e adat.it indexű elem(findindex)
        let azon = this.#kosar.findIndex((elem)=>{
            return elem.id === adat.id
        });
        //ha nincs
        if(azon>=0 ){
            this.#kosar[azon].db++;
    }else{
        //különben növeli
        this.#kosar.push(adat)
        this.#kosar[this.#kosar.length -1].db = 1
    }
    console.log(this.#kosar)
    }
    getDb(){
        return this.#kosar.length
    }
   getOsszAr(){
    let ossz = 0;
    this.#kosar.forEach(elem=>{
        ossz+=elem.ar
    })
    this.#osszAr=ossz
    return ossz
   }
}

export default KosarModel;