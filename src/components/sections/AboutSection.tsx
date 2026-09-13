import Image from "next/image";
import { PageContainer } from "@/components/ui/PageContainer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { aboutGalleryPhotos } from "@/content/gallery";

export function AboutSection() {
  const [large1, large2, small1, small2, small3] = aboutGalleryPhotos;

  return (
    <PageContainer id="about" className="scroll-mt-24 py-16 sm:py-24">
      <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
        <SectionHeading
          eyebrow="About · Founded 2024"
          title="Who we are"
          subtitle="FutureDev helps students explore web development, mobile app creation, game production, and other tech skills through close, personalized learning communities. Each pod pairs 4-5 students with one mentor for about 1-2 hours a week — you learn by building, not by watching from the sidelines."
        />

        <div className="grid grid-cols-6 gap-3">
          <GalleryTile photo={large1} className="col-span-3 aspect-[4/3]" />
          <GalleryTile photo={large2} className="col-span-3 aspect-[4/3]" />
          <GalleryTile photo={small1} className="col-span-2 aspect-square" />
          <GalleryTile photo={small2} className="col-span-2 aspect-square" />
          <GalleryTile photo={small3} className="col-span-2 aspect-square" />
        </div>
      </div>
    </PageContainer>
  );
}

type GalleryTileProps = {
  photo: { src: string; alt: string };
  className: string;
};

function GalleryTile({ photo, className }: GalleryTileProps) {
  return (
    <div className={`relative overflow-hidden rounded-lg border border-border ${className}`}>
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        sizes="(min-width: 1024px) 33vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
