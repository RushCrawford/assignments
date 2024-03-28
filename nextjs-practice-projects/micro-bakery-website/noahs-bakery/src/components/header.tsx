import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";

export default function Header() {
    return (
        <Navbar isBordered className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold text-xl text-yellow-800">
                    Noah's Bakery
                </Link>
            </NavbarBrand>
            <NavbarContent >
                <NavbarItem>
                    <Link href="/products" className="font-bold text-lg text-yellow-800">
                        Products
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/about" className="font-bold text-lg text-yellow-800">
                        About
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link href="/cart" className="font-bold text-lg text-yellow-800">
                        Cart
                    </Link>
                </NavbarItem>
            </NavbarContent>
        </Navbar>
    )
}