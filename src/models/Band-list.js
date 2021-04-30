const Band = require('./Band')
class BandList{
    constructor(){
        this.bands=[
            new Band('Tears for fears'),
            new Band('Bee gees'),
        ];
    }
    addband(name){
        const newband= new Band(name);
        this.bands.push(newband);
        return this.bands;
    }
    removeband(id){
        this.bands= this.bands.filter(band=>band.id!=id);
       console.log("deletebands")
        return this.bands
    }

    getbands(){
        return this.bands;
    }

    increasevotes({id}){
        console.log("id")
        this.bands.map(band=>{
            if(band.id===id){
                band.votes+=1
                console.log("incremented vote to",band.name + "votes:",band.votes )
            }
            return band;
        })
    }

}
module.exports=BandList;