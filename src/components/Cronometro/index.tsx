import { useEffect, useState } from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from "./style.module.scss"
import { tempoParaSegundos } from "../../commom/utils/time";

interface Props{
    selecionado : ITarefa | undefined
}
export default function  Cronometro({selecionado}: Props){
    const [tempo,setTempo] = useState<number>();
    useEffect(()=>{
        if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo))
        }
    },[selecionado])
     
    return(
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
            Tempo: {tempo}
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Começar!"/>
        </div>

    )
}