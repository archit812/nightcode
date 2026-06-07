export function Header() {
    return(
        <box justifyContent={'center'} alignItems={'center'}>
            <box flexDirection={'row'} justifyContent={'center'} alignItems={'center'} gap={0.5}>
                <ascii-font font={'block'} text={"Night"} color={"gray"}/>
                <ascii-font font={'block'} text={"Code"} color={"cyan"}/>
            </box>
        </box>
    )
}