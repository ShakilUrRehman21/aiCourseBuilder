
# AI Course Builder

AI Course Builder is a full-stack web application that generates personalized learning roadmaps using Generative AI.

Users select subjects and a timeline, and the platform creates a structured weekly study plan with curated resources.

---

##  Features

*  Multi-subject course generation
*  Timeline-based structured roadmap
*  Beginner to advanced leveling
*  YouTube resource integration
*  Secure authentication (Clerk)
*  Persistent course storage

---

##  Tech Stack

* **Frontend:** Next.js 13+, TypeScript, Tailwind CSS
* **Backend:** Next.js API Routes
* **Database:** PostgreSQL (Drizzle ORM)
* **AI:** Gemini API
* **Auth:** Clerk
* **External API:** YouTube API

---

##  Setup

```bash
git clone https://github.com/yourusername/ai-course-builder.git
cd ai-course-builder
npm install
npm run dev
```

Create `.env.local`:

```env
DATABASE_URL=
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
GEMINI_API_KEY=
YOUTUBE_API_KEY=
```

