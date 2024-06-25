import Link from "next/link"

export default async function Page() {
  return(
    <div>
       <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Test Your Knowledge with Our Engaging Quizzes
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Discover your strengths and weaknesses across a wide range of topics. Challenge yourself and have
                    fun with our interactive quizzes.
                  </p>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="550"
                height="550"
                alt="Hero"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last lg:aspect-square"
              />
            </div>
          </div>
        </section>
    </div>
  )

  
}
