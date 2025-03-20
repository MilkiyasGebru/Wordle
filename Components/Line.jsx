"use client"

import Word from "@/Components/Word";

export default function Line({current, tries, word}){

    return (
        <div className={`flex gap-4 w-[25%]`}>
            {word.map((letter, index) => (
                <Word key={index} character={letter.character} tries={tries} color={letter.color} index={index} current={current}/>
            ))}
        </div>
    )
}