import {StatusBar} from "./status-bar.tsx";
import type {KeyBinding} from "@opentui/core";

type Props={
    onSubmit:(text:string)=>void,
    disabled?:boolean,
}



export function InputBar({onSubmit,disabled=false}:Props){
    return(
       <box width={"100%"} alignItems={'center'}>
            <box>
                <box
                    position={'relative'}
                    justifyContent={'center'}
                    paddingX={2}
                    paddingY={1}
                    backgroundColor={'#1A1A24'}
                    width="100%"
                    gap={1}
                    border={['left']}
                    borderColor={'cyan'}
                >
                    <textarea focused ={!disabled} placeholder={'Ask Anything Here'}/>
                    <StatusBar/>
                </box>
            </box>

       </box>
    )
}