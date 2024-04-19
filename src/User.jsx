import { useState, useEffect } from "react"

const User = ({ name }) => {


    // 2. call it above the returned JSX  
    // 3. pass two arguments to it: a function and an array
    useEffect(() => {

        document.title = name

    }, [name]);

    // o array de dependencia vai checar se o valor mudou entre os renders. se sim, vai executar o useEffect de novo. 
    // Isso serve para que, se o nome mudar, nós queremos que ele mude tambem na pagina sem depender de outro render.

    return (

        <>
            {name}
        </>

    )

}

export default User