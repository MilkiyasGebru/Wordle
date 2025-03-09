"use client"

import Word from "@/Components/Word";

export default function Line({current, tries, word}){
    // console.log(word,current,tries);

    return (
        <div className={`flex gap-4   }`}>
            {Array.from({length:5},(_,index)=>(
                <Word key={index} current={current} tries={tries} character={word[index]}/>
            ))}
        </div>
    )
}