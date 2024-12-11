export default function Price({ oldPrice, newPrice }) {
    let newStyle={fontWeight:"bold"}
  return (
    <>
      <div style={{backgroundColor:"red", borderBottomLeftRadius:"10px", borderBottomRightRadius:"10px"}}>
        <span style={{textDecorationLine:"line-through"}}>Old Price:{oldPrice}</span>
        &nbsp;&nbsp;&nbsp;
        <span style={newStyle}>New Price:{newPrice}</span>
      </div>
    </>
  );
}
