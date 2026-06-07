import { createCliRenderer } from "@opentui/core";
import { createRoot } from "@opentui/react";
import {Header} from "./components/header.tsx";
import {StatusBar} from "./components/status-bar.tsx";
import {InputBar} from "./components/input-bar.tsx";
function App() {
  return (
   <box
    alignItems={'center'}
    justifyContent={'center'}
    backgroundColor={'#0D0D12'}
    width="100%"
    height="100%"
    gap={2}
   >
       <Header/>
       <box width="100%"  paddingX={2}>
            <InputBar onSubmit={()=>{}} disabled='false'/>
       </box>
   </box>
  );
}

const renderer = await createCliRenderer();
createRoot(renderer).render(<App />);
