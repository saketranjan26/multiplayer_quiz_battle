export default function LandingBottom (){
    return(
        <div>
            <section className="w-full py-12 md:py-2 lg:py-32 bg-slate-200 bg-muted">
                <div className=" 0 px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Features That Make Learning Fun</h2>
                    <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our quiz battle offers a range of features to enhance your learning experience and make it more engaging.
                    </p>
                    </div>
                </div>
                <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <PuzzleIcon className="h-12 w-12 text-primary" />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Diverse Topics</h3>
                        <p className="text-muted-foreground">
                        Choose from a wide range of quiz topics to challenge yourself.
                        </p>
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <TrophyIcon className="h-12 w-12 text-primary" />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Competitive Edge</h3>
                        <p className="text-muted-foreground">
                        Compete with friends in and track your progress to improve your skills.
                        </p>
                    </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <SparkleIcon className="h-12 w-12 text-primary" />
                    <div className="space-y-2">
                        <h3 className="text-xl font-bold">Engaging Gameplay</h3>
                        <p className="text-muted-foreground">
                        Enjoy a fun and interactive quiz with realtime experience.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            <section className="w-full py-12 md:py-24 lg:py-32">
                <div className=" px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore a Variety of Quiz Topics</h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        Our quiz app covers a wide range of topics to challenge your knowledge and keep you engaged.
                        </p>
                    </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <SpaceIcon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                        <h3 className="text-xl font-bold">Science</h3>
                        <p className="text-muted-foreground">Test your knowledge in biology, physics, chemistry, and more.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <CalendarIcon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                        <h3 className="text-xl font-bold">History</h3>
                        <p className="text-muted-foreground">Explore the past and test your historical knowledge.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <MapIcon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                        <h3 className="text-xl font-bold">Geography</h3>
                        <p className="text-muted-foreground">Challenge your knowledge of the world and its regions.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <ClubIcon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                        <h3 className="text-xl font-bold">Sports</h3>
                        <p className="text-muted-foreground">Test your sports trivia and knowledge of various games.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <TvIcon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                        <h3 className="text-xl font-bold">Entertainment</h3>
                        <p className="text-muted-foreground">Explore your knowledge of movies, TV shows, music, and more.</p>
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <ComputerIcon className="h-12 w-12 text-primary" />
                        <div className="space-y-2">
                        <h3 className="text-xl font-bold">Technology</h3>
                        <p className="text-muted-foreground">
                            Test your knowledge of the latest tech trends and innovations.
                        </p>
                        </div>
                    </div>
                    </div>
                </div>
        </section>
        </div>
    )
    
} 

function CalendarIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M8 2v4" />
        <path d="M16 2v4" />
        <rect width="18" height="18" x="3" y="4" rx="2" />
        <path d="M3 10h18" />
      </svg>
    )
  }
  
  
  function ClubIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M17.28 9.05a5.5 5.5 0 1 0-10.56 0A5.5 5.5 0 1 0 12 17.66a5.5 5.5 0 1 0 5.28-8.6Z" />
        <path d="M12 17.66L12 22" />
      </svg>
    )
  }
  
  
  function ComputerIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="14" height="8" x="5" y="2" rx="2" />
        <rect width="20" height="8" x="2" y="14" rx="2" />
        <path d="M6 18h2" />
        <path d="M12 18h6" />
      </svg>
    )
  }
  
  
  function MapIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z" />
        <path d="M15 5.764v15" />
        <path d="M9 3.236v15" />
      </svg>
    )
  }
  
  
  function PuzzleIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M19.439 7.85c-.049.322.059.648.289.878l1.568 1.568c.47.47.706 1.087.706 1.704s-.235 1.233-.706 1.704l-1.611 1.611a.98.98 0 0 1-.837.276c-.47-.07-.802-.48-.968-.925a2.501 2.501 0 1 0-3.214 3.214c.446.166.855.497.925.968a.979.979 0 0 1-.276.837l-1.61 1.61a2.404 2.404 0 0 1-1.705.707 2.402 2.402 0 0 1-1.704-.706l-1.568-1.568a1.026 1.026 0 0 0-.877-.29c-.493.074-.84.504-1.02.968a2.5 2.5 0 1 1-3.237-3.237c.464-.18.894-.527.967-1.02a1.026 1.026 0 0 0-.289-.877l-1.568-1.568A2.402 2.402 0 0 1 1.998 12c0-.617.236-1.234.706-1.704L4.23 8.77c.24-.24.581-.353.917-.303.515.077.877.528 1.073 1.01a2.5 2.5 0 1 0 3.259-3.259c-.482-.196-.933-.558-1.01-1.073-.05-.336.062-.676.303-.917l1.525-1.525A2.402 2.402 0 0 1 12 1.998c.617 0 1.234.236 1.704.706l1.568 1.568c.23.23.556.338.877.29.493-.074.84-.504 1.02-.968a2.5 2.5 0 1 1 3.237 3.237c-.464.18-.894.527-.967 1.02Z" />
      </svg>
    )
  }
  
  
  function SpaceIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1" />
      </svg>
    )
  }
  
  
  function SparkleIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z" />
      </svg>
    )
  }
  
  
  function TrophyIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
        <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
        <path d="M4 22h16" />
        <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
        <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
        <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
      </svg>
    )
  }
  
  
  function TvIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="15" x="2" y="7" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </svg>
    )
  }