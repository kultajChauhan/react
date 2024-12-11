function MsgBox({userName , color}){
    let style={color :color};

    return (
        <>
        <p style={style}>
            {userName}
        </p>

        </>
    )
}

export default MsgBox;