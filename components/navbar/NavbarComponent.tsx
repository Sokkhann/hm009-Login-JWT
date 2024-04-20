
"use client";

import Link from "next/link";
import { Navbar, NavbarLink } from "flowbite-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { MenuList } from "./menu";

// as we know that in the menu.ts it contain 3 value
// there are name, path, and active
// so in this Navbar we need to create a new type that can hold those 3 value from the MenuList(menu.ts)
type MenuItem = {
    name: string,
    path: string,
    active: boolean
}

export default function NavbarComponent() {

    // we create a variable name pathname to get the current paht of page that we stay in
    // this feature we can use with the provide method from nextjs(usePathname())
    const pathname = usePathname();
    // I also create a new useState
    // we use useState to initialize the value to menu by MenuItem that get value from MenuList(menu.ts)
    const [menu, setMenu] = useState<MenuItem[]>(MenuList)

  return (
    <Navbar fluid rounded>

        {/* this is the part of brand include icon and name logo */}
      <Navbar.Brand as={Link} href="#">
        <span className="special self-center whitespace-nowrap text-3xl font-semibold dark:text-white">K.Galaxy</span>
      </Navbar.Brand>

      {/* this is the part of we render each menu */}
      <Navbar.Toggle />
      <Navbar.Collapse>
        {/* we use map to map the each value of menu from the menu */}
        {menu.map((item, index) => (
            <NavbarLink className="text-red-900"
                key={index}
                // we use as Link because in client side for navigate within the navbar
                as={Link}
                // here is the path of each path that we can navigate to
                href={item.path}
                // this is we check if the path of each menu is matching to pathname(the current path we are in if yes it's active)
                active={item.path === pathname}
            >
                {/* this is what we can get name from the MenuItem */}
                {item.name}
            </NavbarLink>
        ))}
      </Navbar.Collapse>
    </Navbar>
  );
}
