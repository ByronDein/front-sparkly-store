import Link from 'next/link';
import React from 'react';

const Navigation = () => {
    return (
        <nav className="p-4">
            <ul className="flex list-none m-0 p-0">
                <li className="mr-4">
                    <Link href="/" className="text-[#AF125A] hover:underline">
                        Inicio
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/sobre-nosotros" className="text-[#AF125A] hover:underline">
                        Sobre Nosotros
                    </Link>
                </li>
                <li className="mr-4">
                    <Link href="/contact" className="text-[#AF125A] hover:underline">
                        Contacto
                    </Link>
                </li>
                <li>
                    <Link href="/ropa-disponible" className="text-[#AF125A] hover:underline">
                        Ropa Disponible
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navigation;