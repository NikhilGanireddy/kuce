"use client"
import React, {useEffect, useState} from "react";
import Navlinks from "@/utils/Navbar";
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link";


const NavigationBar = () => {
    const [OpenMenu, setOpenMenu] = useState(false)
    console.log(OpenMenu)

    useEffect(() => {
        setOpenMenu(true)
    }, []);

    return (<div className={` text-black gap-2 backdrop-blur-md w-full`}>
        <div className={`container lg:flex items-center justify-center w-full flex-wrap hidden`}>
            {Navlinks.map((link) => {
                return (<>
                    {link.subLinks.length === 0 ? (<NavigationMenu className={`bg-transparent max-w-fit`}>
                        <NavigationMenuList className={`bg-transparent w-full`}>
                            <NavigationMenuItem className={``}>
                                <NavigationMenuLink
                                    className={`w-full bg-transparent ${navigationMenuTriggerStyle()}`}>
                                    <Link href={`${link.href}`} legacyBehavior passHref>{link.title}</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>) : (<NavigationMenu className={`bg-transparent text-black`}>
                        <NavigationMenuList>
                            <NavigationMenuItem>
                                <NavigationMenuTrigger
                                    className={`bg-transparent`}>{link.title}</NavigationMenuTrigger>
                                <NavigationMenuContent>
                                    {link.subLinks.map((subLink) => {
                                        return <ul key={subLink.subId}>
                                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                                <ListItem href={`${link.href}${subLink.href}`}
                                                          className={`min-w-full text-white`}>{subLink.title}</ListItem>
                                            </NavigationMenuLink>
                                        </ul>
                                    })}
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>)}
                </>)
            })}
        </div>
    </div>)
}
export default NavigationBar


const ListItem = React.forwardRef<React.ElementRef<"a">, React.ComponentPropsWithoutRef<"a">>(({
                                                                                                   className,
                                                                                                   title,
                                                                                                   children,
                                                                                                   ...props
                                                                                               }, ref) => {
    return (<li>
        <NavigationMenuLink asChild>
            <a
                ref={ref}
                className={"block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"}
                {...props}
            >
                <div className="text-sm font-medium leading-none">{title}</div>
                <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                    {children}
                </p>
            </a>
        </NavigationMenuLink>
    </li>)
})
ListItem.displayName = "ListItem"
