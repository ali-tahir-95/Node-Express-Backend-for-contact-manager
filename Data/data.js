
const data=(input)=>{
    return {
        data: [
          { id: "0", name: "Null" },
          { id: `${input.id}`, name: `${input.name}` },
        ],
      }
}
module.exports= data