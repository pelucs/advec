import Image from "next/image";
import logoAdvec from "@/assets/logo-advec-branca.png";

export function Loading() {
  return(
    <div className="fixed inset-0 flex items-center justify-center bg-background">
      <Image 
        src={logoAdvec} 
        alt="Logo ADVEC"
        className="w-[50px] animate-pulse"
      />
    </div>
  );
}