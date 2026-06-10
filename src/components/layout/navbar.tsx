import Image from "next/image";
import Link from "next/link";
import { NavbarCollections } from '@/components/layout/navbar/navbar-collections';
import { NavbarCollectionsMobile } from '@/components/layout/navbar/navbar-collections-mobile';
import { NavbarCart } from '@/components/layout/navbar/navbar-cart';
import { NavbarUser } from '@/components/layout/navbar/navbar-user';
import { MobileMenu } from '@/components/layout/navbar/mobile-menu';
import { ThemeSwitcher } from '@/components/layout/navbar/theme-switcher';
import { Suspense } from "react";
import { SearchInput } from '@/components/layout/search-input';
import { SearchInputSkeleton } from '@/components/shared/skeletons/search-input-skeleton';
import { Button } from "../ui/button";

export function Navbar() {
    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-background  border-b border-border/40">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between py-2">
                    {/* Left: hamburger (mobile) + logo + desktop nav */}
                    <div className="flex items-center gap-3">
                        <Suspense>
                            <MobileMenu>
                                <NavbarCollectionsMobile />
                            </MobileMenu>
                        </Suspense>

                        <Link href="/" className="flex-shrink-0">
                            <Image
                                src="https://mmcb.b-cdn.net/media/attachments/2/5/6/5/4f0bbe0631570be58ca2ae7f4c41e36b5f3133cfd9fbaf38f35b7ebabfd3/logo.png"
                                alt="Milch"
                                width={120}
                                height={27}
                                className="h-14 w-auto"
                            />
                        </Link>

                        <nav className="hidden md:flex items-center gap-6">
                            <Suspense>
                                <NavbarCollections />
                            </Suspense>
                        </nav>
                    </div>

                    {/* Right: search (desktop) + cart + user */}
                    <div className="flex items-center gap-2">
                        <div className="hidden lg:flex">
                            <Suspense fallback={<SearchInputSkeleton />}>
                                <SearchInput />
                            </Suspense>
                        </div>
                        <Button>
                            <Link role="button" href="https://api.whatsapp.com/send/?phone=3346858683&text&type=phone_number&app_absent=0">Comprar</Link>
                        </Button>

                        {/*  <ThemeSwitcher />
                        <Suspense>
                            <NavbarCart />
                        </Suspense>
                        <NavbarUser /> */}
                    </div>
                </div>

                {/* Mobile: buscador debajo de la barra principal */}
                <div className="lg:hidden pb-2">
                    <Suspense fallback={<SearchInputSkeleton />}>
                        <SearchInput />
                    </Suspense>
                </div>
            </div>
        </header>
    );
}
