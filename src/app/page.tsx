import type {Metadata} from "next";
import { HomePageComponent } from "@/components/layout/home/home-page-component";
import {SITE_NAME, SITE_URL, buildCanonicalUrl} from "@/lib/metadata";

export const metadata: Metadata = {
    title: {
        absolute: `${SITE_NAME} DIE MILCH- Sustitutos de leche en polvo y energizantes para perros y gatos. `,
    },
    description:
        "Te ofrecemos sustitutos de leche en polvo y energizantes formulados con los más altos estándares de calidad. Diseñados para brindarles el soporte nutricional, la vitalidad y la energía que necesitan para crecer sanos, fuertes y listos para explorar el mundo a tu lado.",
    alternates: {
        canonical: buildCanonicalUrl("/"),
    },
    openGraph: {
        title: `${SITE_NAME} - Sustitutos de leche en polvo y energizantes para perros y gatos.`,
        description:
            "te ofrecemos sustitutos de leche en polvo y energizantes formulados con los más altos estándares de calidad. Diseñados para brindarles el soporte nutricional, la vitalidad y la energía que necesitan para crecer sanos, fuertes y listos para explorar el mundo a tu lado.",
        type: "website",
        url: SITE_URL,
    },
};

export default async function Home(_props: PageProps<'/'>) {
    return (
        <HomePageComponent />
    );
}
