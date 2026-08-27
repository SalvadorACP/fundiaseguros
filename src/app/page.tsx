import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Location } from "@/components/sections/location";

export default function Home() { return <div className="min-h-screen bg-background"><Header /><main><Hero /><Location /><Contact /></main><Footer /></div>; }
