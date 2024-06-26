import { Button } from "./button";

export default function LandingTop (){
    return(
        <div className="w-full py-20 md:py-30 lg:py-20">
          <div className="px-4">
            <div className="grid w-full lg:grid-cols-[1fr_400px] md:grid-cols-[1fr_300px] xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold mb-7 tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Test Your Knowledge with Our Engaging Quiz Battles
                  </h1>
                  <p className="max-w-[600px]  text-muted-foreground md:text-xl">
                    Discover your strengths and weaknesses across a wide range of topics. Challenge yourself and have
                    fun with our interactive realtime quiz battle.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button children={"Let's Battle"}/>
                </div>
              </div>
              <img
                src="https://thequizbattle.com/static/media/logo.25ec5c44.png"
                width="550"
                height="550"
                alt="logo"
                className="mx-auto aspect-auto overflow-hidden hidden md:block  object-cover "
              />
            </div>
          </div>
        </div>
    )
}