import {Button} from "@/components/ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuPortal,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import Navlinks from "@/utils/Navbar";
import Link from "next/link";

const MobileNavigation = () => {
    return (<div className={`block lg:hidden`}>
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className={`bg-transparent border-black backdrop-blur-xl`}>Menu</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className={`w-64 bg-transparent backdrop-blur-xl border-none`}>
                <DropdownMenuGroup className={`w-full`}>
                    {Navlinks.map((link, index1) => {
                        return <div key={index1}>
                            {link.subLinks.length === 0 ? (
                                <Link key={index1} className={`min-w-full`} href={`${link.href}`} legacyBehavior
                                      passHref>
                                    <DropdownMenuItem className={`w-full  cursor-pointer`}>
                                        {link.title}

                                    </DropdownMenuItem>
                                </Link>

                            ) : (<DropdownMenuSub key={index1}>
                                <DropdownMenuSubTrigger>
                                    <span>{link.title}</span>
                                </DropdownMenuSubTrigger>
                                <DropdownMenuPortal>
                                    <DropdownMenuSubContent>
                                        {link.subLinks.map((subLink, index) => {
                                            return <Link key={index} href={`${link.href}${subLink.href}`} className={`truncate`}>
                                                <DropdownMenuItem className={`w-full cursor-pointer truncate`}>
                                                    {subLink.title}
                                                </DropdownMenuItem>
                                            </Link>
                                        })}
                                    </DropdownMenuSubContent>
                                </DropdownMenuPortal>
                            </DropdownMenuSub>)}
                        </div>
                    })}
                </DropdownMenuGroup>
            </DropdownMenuContent>

            {/*<DropdownMenuContent className="w-56">*/}
            {/*    <DropdownMenuLabel>My Account</DropdownMenuLabel>*/}
            {/*    <DropdownMenuSeparator/>*/}
            {/*    <DropdownMenuGroup>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            <span>Profile</span>*/}
            {/*            <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>*/}
            {/*        </DropdownMenuItem>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            <span>Billing</span>*/}
            {/*            <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>*/}
            {/*        </DropdownMenuItem>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            <span>Settings</span>*/}
            {/*            <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>*/}
            {/*        </DropdownMenuItem>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            <span>Keyboard shortcuts</span>*/}
            {/*            <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>*/}
            {/*        </DropdownMenuItem>*/}
            {/*    </DropdownMenuGroup>*/}
            {/*    <DropdownMenuSeparator/>*/}
            {/*    <DropdownMenuGroup>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            <span>Team</span>*/}
            {/*        </DropdownMenuItem>*/}
            {/*        <DropdownMenuSub>*/}
            {/*            <DropdownMenuSubTrigger>*/}
            {/*                <span>Invite users</span>*/}
            {/*            </DropdownMenuSubTrigger>*/}
            {/*            <DropdownMenuPortal>*/}
            {/*                <DropdownMenuSubContent>*/}
            {/*                    <DropdownMenuItem>*/}
            {/*                        <span>Email</span>*/}
            {/*                    </DropdownMenuItem>*/}
            {/*                    <DropdownMenuItem>*/}
            {/*                        <span>Message</span>*/}
            {/*                    </DropdownMenuItem>*/}
            {/*                    <DropdownMenuSeparator/>*/}
            {/*                    <DropdownMenuItem>*/}
            {/*                        <span>More...</span>*/}
            {/*                    </DropdownMenuItem>*/}
            {/*                </DropdownMenuSubContent>*/}
            {/*            </DropdownMenuPortal>*/}
            {/*        </DropdownMenuSub>*/}
            {/*        <DropdownMenuItem>*/}
            {/*            <span>New Team</span>*/}
            {/*            <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>*/}
            {/*        </DropdownMenuItem>*/}
            {/*    </DropdownMenuGroup>*/}
            {/*    <DropdownMenuSeparator/>*/}
            {/*    <DropdownMenuItem>*/}
            {/*        <span>GitHub</span>*/}
            {/*    </DropdownMenuItem>*/}
            {/*    <DropdownMenuItem>*/}
            {/*        <span>Support</span>*/}
            {/*    </DropdownMenuItem>*/}
            {/*    <DropdownMenuItem disabled>*/}
            {/*        <span>API</span>*/}
            {/*    </DropdownMenuItem>*/}
            {/*    <DropdownMenuSeparator/>*/}
            {/*    <DropdownMenuItem>*/}
            {/*        <span>Log out</span>*/}
            {/*        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>*/}
            {/*    </DropdownMenuItem>*/}
            {/*</DropdownMenuContent>*/}
        </DropdownMenu>
    </div>)
}
export default MobileNavigation
