'use client';

import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from '@/components/ui/sheet';

interface MobileMenuProps {
    children: React.ReactNode;
}

export function MobileMenu({ children }: MobileMenuProps) {
    const [open, setOpen] = useState(false);

    return (
        <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                    <Menu className="h-5 w-5" />
                    <span className="sr-only">Abrir menú</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-72 bg-background p-0">
                <div className="flex flex-col h-full">
                    <div className="flex items-center justify-between px-4 py-4 border-b border-border">
                        <span className="font-semibold text-sm uppercase tracking-wider text-primary">Menú</span>
                        <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                    <div className="flex-1 overflow-y-auto py-2" onClick={() => setOpen(false)}>
                        {children}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
}
