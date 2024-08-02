"use client"
import {useState} from "react";

export default function Input() {
  const [value, setValue] = useState('');

  return (
  <>
    <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
    <div><span>Input text:</span>{" "}{value}</div>
  </>
  );
}