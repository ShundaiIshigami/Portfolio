import {link}from"react-router-dom";
import { Profile } from "../data/portfolio";

interface Props{
    theme:string;
    onThemeToggle:()=>void;
}
export default function Header({theme,onThemeToggle}:Props){
    constnavItems=[{label:"About",hash:"about"}];
}