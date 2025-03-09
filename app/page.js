"use client"

import Image from "next/image";
import Word from "@/Components/Word";
import {useRef, useState, useEffect} from "react";
import Line from "@/Components/Line";

export default function Home() {

    const [tries, setTries] = useState(0);
    const inputRef = useRef(null);
    const [words, setWords] = useState(Array.from({length:5},()=>Array(5).fill(" ")));
    const handleSubmit = (e) => {
        e.preventDefault();
        if (tries < 5 ){

        }
    }

    useEffect(() => {
        inputRef.current.focus();
    },[])

    const handleChange = (e)=>{

        if (tries < 5 ){

            for (let i=0; i < 5; i++){
                if (e.target.value.length > i ) {
                    console.log(updatedArray[tries], " new array")
                    updatedArray[tries][i] = e.target.value[i]
                }
                else{
                    updatedArray[tries][i] = ""
                }


            }
            e.target.value = updatedArray[tries].join("")
            setWords(updatedArray);

        }

    }

    return (
        <div className="flex flex-col justify-center items-center w-[60%] mx-auto mt-16 gap-4">

            {Array.from({length:5}, (_, index)=>(
                <Line key={index} word={words[index]} tries={tries} current={index}/>
            ))}

            <form onSubmit={handleSubmit} className="">
                <input className="bg-red-300 w-4 h-4" ref={inputRef} onSubmit={handleSubmit} onChange={handleChange}/>
            </form>


        </div>


    );

}
