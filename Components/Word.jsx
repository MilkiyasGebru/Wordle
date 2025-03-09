"use client"
import {useEffect, useState} from "react";

export default function Word({current, tries, character}){
    const [letter, setLetter] = useState("A");
    return (
        <div className={`border border-gray-200 p-4 ${ current > tries? 'bg-white':'bg-[#787c7e] text-white'} `}>
            <span>{character}</span>
        </div>
    )
}