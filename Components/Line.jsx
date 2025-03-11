"use client"

import Word from "@/Components/Word";

export default function Line({current, tries, word}){

    return (
        <div className={`flex gap-4 w-[25%]`}>
            {Array.from({length:5},(_,index)=>(
                <Word key={index} current={current} tries={tries} character={word[index].character} color={word[index].color} index={index}/>
            ))}
        </div>
    )
}