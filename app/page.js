"use client"

import {useRef, useState, useEffect} from "react";
import Line from "@/Components/Line";
import deepCopyMatrix from "@/utils/deepCopyMatrix";

export default function Home() {

    const [tries, setTries] = useState(0);
    const inputRef = useRef(null);
    const [words, setWords] = useState(Array.from({length:5},()=>Array(5).fill({color:"gray",character:" "})));
    const [inputValue, setInputValue] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault();
        if (tries < 5 ){
            for (let i=0; i<5;i++){
                console.log(words[tries][i], "Hi");
                if (words[tries][i].character === " " || words[tries][i].character === ""){
                    return
                }

            }

            const word_of_day = "OCEAN"


            const charCounts = {}
            for (let char of word_of_day){
                charCounts[char] = (charCounts[char] || 0) + 1;
            }

            const updatedWords = deepCopyMatrix(words)

            for (let i = 0; i < 5; i++) {
                if (updatedWords[tries][i].character === word_of_day[i]){
                    charCounts[updatedWords[tries][i].character] -= 1
                    updatedWords[tries][i].color="green"
                }
            }


            for (let i = 0; i < 5; i++) {

                if (updatedWords[tries][i].character !== word_of_day[i] && charCounts[updatedWords[tries][i].character] > 0){
                    updatedWords[tries][i].color="gold"
                    charCounts[updatedWords[tries][i].character] -= 1
                }
            }



            setWords(updatedWords)
            setTries(tries+1)
            setInputValue("")
        }
    }

    useEffect(() => {
        if (inputRef.current) {

            inputRef.current.focus();
        }
    },[])

    const handleChange = (e)=>{
        console.log("It is changing")
        if (tries < 5 ){

            const updatedWords = deepCopyMatrix(words)

            for (let i=0; i < 5; i++){
                if (e.target.value.length > i ) {
                    console.log(updatedWords[tries], " new array")
                    updatedWords[tries][i].character = e.target.value[i]
                }
                else{
                    updatedWords[tries][i].character = ""
                }


            }
            setInputValue(e.target.value.slice(0,5))
            setWords(updatedWords);

        }

    }

    return (
        <div className="flex flex-col justify-center items-center w-full mx-auto mt-16 gap-4">

            {words.map((word,index) => (
                <Line key={index} word={word} current={index} tries={tries}/>
            ) )}

            <form onSubmit={handleSubmit} >
                <input  className="opacity-0 bg-red-300 w-4 h-4" ref={inputRef}  onChange={handleChange} value={inputValue}/>
            </form>

        </div>


    );

}
