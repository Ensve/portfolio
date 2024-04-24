"use client"
import React from 'react';
import Link from "next/link";
import {usePathname} from "next/navigation";

const NavLinks = ({ link }) => {
    const pathName = usePathname();
    return (
            <Link className={`ml-10 text-sm uppercase p-1 border-b border-transparent hover:border-b hover:border-[#5651e5] transition duration-200 ${pathName === link.url && "border-b border-black"}`} href={link.url}>{link.title}</Link>
    );
};

export default NavLinks;