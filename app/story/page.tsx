"use client"
import Image from "next/image"
import RevealSection from "@/components/reveal-section"

export default function StoryPage() {
  return (
    <div className="pt-24 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/Frame 7.png?height=1080&width=1920&text=Our Story"
            alt="House of Esthete craftsmanship"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-deep-neutral/40"></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 text-background-light">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl uppercase tracking-[0.2em] mb-6">Our Story</h1>
          <p className="font-body text-lg md:text-xl tracking-wider max-w-2xl">
            The journey of House of Esthete is one of passion, craftsmanship, and a relentless pursuit of beauty.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section id="philosophy" className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">Our Philosophy</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <RevealSection delay={0.2} direction="left">
              <div className="h-[500px] md:h-[600px] relative overflow-hidden">
                <Image
                  src="/Frame 6.png?height=800&width=600&text=Philosophy"
                  alt="House of Esthete philosophy"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealSection>

            <div className="flex flex-col justify-center">
              <RevealSection delay={0.4} direction="right">
                <p className="body-text mb-6">
                  House of Esthete is guided by a singular vision: to create objects that transcend their function and
                  become vessels of meaning. We believe in the power of thoughtful design to transform spaces and
                  experiences.
                </p>
                <p className="body-text mb-6">
                  Our approach is rooted in a deep respect for materials and craftsmanship. We work with artisans who
                  share our commitment to excellence, combining traditional techniques with contemporary design
                  language.
                </p>
                <p className="body-text">
                  Each piece we create is a testament to our belief that true luxury lies not in ostentation, but in the
                  quiet confidence of objects that are designed with intention and crafted with care.
                </p>
              </RevealSection>
            </div>
          </div>
        </div>
      </section>

      {/* Brand Values Section */}
      <section id="values" className="py-24 md:py-32 bg-background-dark text-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">Brand Values</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <RevealSection delay={0.2}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-2xl">01</span>
                </div>
                <h3 className="font-display text-xl tracking-wider mb-4">Timelessness</h3>
                <p className="font-body">
                  We create pieces that transcend trends, designed to be cherished for generations. Our aesthetic is
                  rooted in enduring principles of proportion, balance, and harmony.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.4}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-2xl">02</span>
                </div>
                <h3 className="font-display text-xl tracking-wider mb-4">Craftsmanship</h3>
                <p className="font-body">
                  We honor the hand of the maker in every piece we create. Our artisans bring decades of experience to
                  their craft, ensuring that each object is made with precision and care.
                </p>
              </div>
            </RevealSection>

            <RevealSection delay={0.6}>
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent-green/20 flex items-center justify-center mx-auto mb-6">
                  <span className="font-display text-2xl">03</span>
                </div>
                <h3 className="font-display text-xl tracking-wider mb-4">Intentionality</h3>
                <p className="font-body">
                  Every design decision is made with purpose. We believe in the power of restraint, creating pieces that
                  are defined as much by what we choose to include as by what we choose to omit.
                </p>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section id="directors" className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">Meet The Directors</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <RevealSection delay={0.2} direction="left">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/Frame 7.png?height=400&width=400&text=Director"
                    alt="Creative Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wider mb-2 text-center md:text-left">
                    Alexandra Esthete
                  </h3>
                  <p className="font-body text-sm text-deep-neutral/80 mb-4 text-center md:text-left">
                    Creative Director
                  </p>
                  <p className="font-body">
                    With a background in fine arts and architecture, Alexandra brings a unique perspective to the
                    brand's creative vision. Her approach is defined by a deep appreciation for the dialogue between
                    form and function.
                  </p>
                </div>
              </div>
            </RevealSection>

            <RevealSection delay={0.4} direction="right">
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="w-40 h-40 rounded-full overflow-hidden relative flex-shrink-0">
                  <Image
                    src="/Frame 7.png?height=400&width=400&text=Director"
                    alt="Design Director"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl tracking-wider mb-2 text-center md:text-left">Marcus Esthete</h3>
                  <p className="font-body text-sm text-deep-neutral/80 mb-4 text-center md:text-left">
                    Design Director
                  </p>
                  <p className="font-body">
                    Marcus brings over two decades of experience in product design to House of Esthete. His work is
                    characterized by a meticulous attention to detail and a profound understanding of materials and
                    manufacturing processes.
                  </p>
                </div>
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Design Studio Section */}
      <section id="studio" className="py-24 md:py-32 bg-background-dark text-background">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">House of Esthete Design Studio</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <RevealSection delay={0.2} direction="left">
                <p className="body-text mb-6">
                  Our design studio is the heart of House of Esthete, where ideas are born, refined, and brought to
                  life. Located in a converted industrial space, the studio is a laboratory for creativity and
                  craftsmanship.
                </p>
                <p className="body-text mb-6">
                  Here, our team of designers, artisans, and technicians work collaboratively to push the boundaries of
                  what's possible, combining traditional techniques with innovative approaches to create pieces that are
                  both timeless and contemporary.
                </p>
                <p className="body-text">
                  The studio is equipped with both traditional tools and cutting-edge technology, allowing us to move
                  seamlessly between hand sketches and digital modeling, prototype development and final production.
                </p>
              </RevealSection>
            </div>

            <RevealSection delay={0.4} direction="right" className="order-1 md:order-2">
              <div className="h-[500px] md:h-[600px] relative overflow-hidden">
                <Image
                  src="/plantImages/plantImg2.jpeg?height=800&width=600&text=Design Studio"
                  alt="House of Esthete design studio"
                  fill
                  className="object-cover"
                />
              </div>
            </RevealSection>
          </div>
        </div>
      </section>

      {/* Designers Section */}
      <section id="designers" className="py-24 md:py-32 bg-background-light">
        <div className="container mx-auto px-6">
          <RevealSection>
            <h2 className="section-title text-center mb-16">Meet The Designers</h2>
          </RevealSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[1, 2, 3].map((designer) => (
              <RevealSection key={designer} delay={0.2 * designer}>
                <div className="text-center">
                  <div className="w-40 h-40 rounded-full overflow-hidden relative mx-auto mb-6">
                    <Image
                      src={`/Frame 7.png?height=400&width=400&text=Designer ${designer}`}
                      alt={`Designer ${designer}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-display text-xl tracking-wider mb-2">Designer Name</h3>
                  <p className="font-body text-sm text-deep-neutral/80 mb-4">Senior Designer</p>
                  <p className="font-body">
                    With a background in industrial design and fine arts, our designers bring a unique perspective to
                    each project, combining technical expertise with artistic vision.
                  </p>
                </div>
              </RevealSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
