import Product from "./Product";

export default function ProductTab(){
    let style={
        display:"flex",
        flexWrap:"wrap",
        justifyContent:"center",
        alignItems:"center"
    }
    return(
       
        <div style={style}>
            
        <Product title="Logiteck MX Master" idx={0}/>
        <Product title="Apple Pencile (2nd Gen)" idx={1}/>
        <Product title="Zebronics Zeb-transformer" idx={2}/>
        <Product title="Petronics Toad 23" idx={3}/>
        </div>
        
    )
}