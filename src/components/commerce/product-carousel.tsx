'use client';

import { ProductCard } from "@/components/commerce/product-card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, } from "@/components/ui/carousel";
import { InterfaceInventoryItem } from "@/lib/swipall/types/types";
import { useId } from "react";

interface ProductCarouselClientProps {
    title: string;
    excerpt: string;
    products: InterfaceInventoryItem[];
}

export function ProductCarousel({ title, excerpt, products }: ProductCarouselClientProps) {
    const id = useId();

    if (!products) {
        return null;
    }

    return (
        <section className="py-12 md:py-16">
            <div className="container px-6 mx-auto">
                <div className="mb-8">
                    <h2 className="text-3xl md:text-4xl font-bold mb-2">{title}</h2>
                    <p className="text-muted-foreground">{excerpt}</p>
                </div>
                <Carousel
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent className="-ml-2 md:-ml-4">
                        {products.map((product, i) => (
                            <CarouselItem key={id + i}
                                className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                                <ProductCard product={product} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hidden md:flex" />
                    <CarouselNext className="hidden md:flex" />
                </Carousel>
            </div>
        </section>
    );
}
