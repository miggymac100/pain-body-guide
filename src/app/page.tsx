import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 via-purple-50 to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-20 md:py-32">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
              Understanding the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Pain Body
              </span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-600 md:text-xl">
              Ever get extremely frustrated, annoyed or angry with something or someone in your life? 
              Let's explore the "pain body" a part of you that actually isn't YOU.
            </p>
          </div>

          {/* Custom SVG Hero Image - Shadow Figure Controlling Person */}
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-3xl border-4 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-12 shadow-2xl">
            <svg viewBox="0 0 400 400" className="h-96 w-full">
              {/* Large dark shadow figure looming over person */}
              <defs>
                <linearGradient id="shadowGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#0f0f0f', stopOpacity: 0.95}} />
                  <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              
              {/* Shadow figure - large blob/cloud shape - menacing - DARKER */}
              <ellipse cx="200" cy="350" rx="120" ry="20" fill="#000000" opacity="0.4" />
              {/* Main blob body - irregular amorphous shape */}
              <path d="M 150 100 Q 120 120 110 160 Q 105 190 120 220 Q 130 245 150 270 Q 165 290 185 310 Q 195 320 200 330 Q 205 320 215 310 Q 235 290 250 270 Q 270 245 280 220 Q 295 190 290 160 Q 280 120 250 100 Q 230 85 200 80 Q 170 85 150 100 Z" 
                    fill="url(#shadowGrad1)" opacity="0.92" />
              {/* Wispy tendrils/arms extending */}
              <path d="M 120 180 Q 80 190 50 210 Q 40 220 45 230 Q 55 235 70 225 Q 100 210 120 200" 
                    fill="url(#shadowGrad1)" opacity="0.85" />
              <path d="M 280 180 Q 320 190 350 210 Q 360 220 355 230 Q 345 235 330 225 Q 300 210 280 200" 
                    fill="url(#shadowGrad1)" opacity="0.85" />
              {/* Eyes or menacing features - red glow */}
              <ellipse cx="180" cy="140" rx="12" ry="18" fill="#ff0000" opacity="0.2" />
              <ellipse cx="220" cy="140" rx="12" ry="18" fill="#ff0000" opacity="0.2" />
              
              {/* Person - stick figure, hunched, controlled - HOT PINK COLOR - 30% LARGER */}
              <g transform="scale(1.3) translate(-46, -69)">
                <ellipse cx="200" cy="365" rx="18" ry="4" fill="#a855f7" opacity="0.5" />
                {/* White glow around person for visibility */}
                <circle cx="200" cy="285" r="14" fill="#ffffff" opacity="0.6" />
                {/* Head - bright hot pink */}
                <circle cx="200" cy="285" r="10" fill="#e879f9" opacity="1" />
                {/* Body - rounded trapezoid - bright */}
                <path d="M 195 295 L 193 320 Q 193 325 198 325 L 202 325 Q 207 325 207 320 L 205 295 Z" 
                      fill="#e879f9" opacity="1" />
                {/* Arms - drooping down - bright */}
                <line x1="195" y1="300" x2="185" y2="315" stroke="#e879f9" strokeWidth="3.5" opacity="1" strokeLinecap="round" />
                <line x1="205" y1="300" x2="215" y2="315" stroke="#e879f9" strokeWidth="3.5" opacity="1" strokeLinecap="round" />
                {/* Legs - bright */}
                <line x1="195" y1="325" x2="190" y2="355" stroke="#e879f9" strokeWidth="3.5" opacity="1" strokeLinecap="round" />
                <line x1="205" y1="325" x2="210" y2="355" stroke="#e879f9" strokeWidth="3.5" opacity="1" strokeLinecap="round" />
              </g>
              
              {/* Puppet strings/connections showing control - adjusted for larger person */}
              <line x1="200" y1="200" x2="200" y2="260" stroke="#000000" strokeWidth="2" opacity="0.4" strokeDasharray="4,4" />
              <line x1="180" y1="220" x2="188" y2="275" stroke="#000000" strokeWidth="1.5" opacity="0.3" strokeDasharray="4,4" />
              <line x1="220" y1="220" x2="212" y2="275" stroke="#000000" strokeWidth="1.5" opacity="0.3" strokeDasharray="4,4" />
            </svg>
          </div>
        </div>
      </section>

      {/* What Is The Pain Body Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">What Is The Pain Body?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Think of it as a shadow figure of negative feelings that lives inside us.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden border-2 border-purple-100 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-br from-purple-100 to-pink-100 p-8">
                <svg viewBox="0 0 300 300" className="h-64 w-full">
                  {/* Shadow figure merged with person */}
                  <defs>
                    <linearGradient id="shadowGrad2" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#1a1a1a', stopOpacity: 0.9}} />
                      <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0.95}} />
                    </linearGradient>
                  </defs>
                  
                  <ellipse cx="150" cy="270" rx="65" ry="12" fill="#000000" opacity="0.3" />
                  
                  {/* Shadow blob merged around person - dark aura shape - DARKER */}
                  <path d="M 150 60 Q 110 70 90 100 Q 75 125 80 155 Q 85 185 100 210 Q 115 235 135 250 Q 145 258 150 263 Q 155 258 165 250 Q 185 235 200 210 Q 215 185 220 155 Q 225 125 210 100 Q 190 70 150 60 Z" 
                        fill="url(#shadowGrad2)" opacity="0.85" />
                  
                  {/* Person stick figure inside the shadow - BRIGHTER for contrast */}
                  {/* White glow around person */}
                  <circle cx="150" cy="150" r="70" fill="#ffffff" opacity="0.4" />
                  {/* Head - bright pink/purple */}
                  <circle cx="150" cy="110" r="16" fill="#e879f9" opacity="1" />
                  {/* Head outline for extra visibility */}
                  <circle cx="150" cy="110" r="16" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.6" />
                  {/* Body - bright */}
                  <rect x="142" y="126" width="16" height="60" rx="8" fill="#e879f9" opacity="1" />
                  {/* Arms - bright */}
                  <line x1="142" y1="140" x2="120" y2="160" stroke="#e879f9" strokeWidth="6" opacity="1" strokeLinecap="round" />
                  <line x1="158" y1="140" x2="180" y2="160" stroke="#e879f9" strokeWidth="6" opacity="1" strokeLinecap="round" />
                  {/* Legs - bright */}
                  <line x1="145" y1="186" x2="135" y2="225" stroke="#e879f9" strokeWidth="6" opacity="1" strokeLinecap="round" />
                  <line x1="155" y1="186" x2="165" y2="225" stroke="#e879f9" strokeWidth="6" opacity="1" strokeLinecap="round" />
                  
                  {/* Dark aura circles around merged figure */}
                  <circle cx="150" cy="150" r="85" fill="none" stroke="#1a1a1a" strokeWidth="3" opacity="0.3" strokeDasharray="8,8" />
                  <circle cx="150" cy="150" r="95" fill="none" stroke="#1a1a1a" strokeWidth="2" opacity="0.2" strokeDasharray="12,12" />
                  
                  {/* Negative emotion symbols - MORE VISIBLE */}
                  <text x="70" y="120" fontSize="24" opacity="0.9">😠</text>
                  <text x="210" y="140" fontSize="24" opacity="0.9">😢</text>
                  <text x="90" y="220" fontSize="24" opacity="0.9">😰</text>
                  <text x="200" y="200" fontSize="24" opacity="0.9">😤</text>
                </svg>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">The Simple Definition</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  The pain body is like a collection of all the emotional hurt you've experienced but never fully processed. 
                  It's stored inside you like files on a computer that keep running in the background.
                </p>
                <p>
                  <strong>Think of it like this:</strong> Remember that time someone embarrassed you in middle school? 
                  Or when your first relationship ended? Those feelings didn't just disappear — they got stored.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden border-2 border-purple-100 transition-all hover:shadow-xl">
              <div className="bg-gradient-to-br from-pink-100 to-orange-100 p-8">
                <svg viewBox="0 0 300 300" className="h-64 w-full">
                  {/* Shadow figure feeding off energy */}
                  <defs>
                    <linearGradient id="shadowGrad3" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" style={{stopColor: '#0f0f0f', stopOpacity: 0.95}} />
                      <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 1}} />
                    </linearGradient>
                    <radialGradient id="energyGrad" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" style={{stopColor: '#ef4444', stopOpacity: 0.6}} />
                      <stop offset="100%" style={{stopColor: '#dc2626', stopOpacity: 0.2}} />
                    </radialGradient>
                  </defs>
                  
                  <ellipse cx="150" cy="270" rx="70" ry="15" fill="#000000" opacity="0.35" />
                  
                  {/* Person stick figure - distressed, slouched - BRIGHTER for contrast */}
                  {/* White glow around person for visibility */}
                  <circle cx="150" cy="215" r="40" fill="#ffffff" opacity="0.5" />
                  {/* Body - bright hot pink */}
                  <rect x="144" y="192" width="12" height="45" rx="6" fill="#e879f9" opacity="1" />
                  {/* Arms - hanging down - bright */}
                  <line x1="144" y1="200" x2="130" y2="220" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
                  <line x1="156" y1="200" x2="170" y2="220" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
                  {/* Legs - bright */}
                  <line x1="146" y1="237" x2="140" y2="265" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
                  <line x1="154" y1="237" x2="160" y2="265" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
                  
                  {/* Large shadow blob above - feeding, vampire-like - DARKER */}
                  <path d="M 150 20 Q 105 30 85 60 Q 70 85 75 115 Q 80 145 100 165 Q 115 180 135 190 Q 145 195 150 198 Q 155 195 165 190 Q 185 180 200 165 Q 220 145 225 115 Q 230 85 215 60 Q 195 30 150 20 Z" 
                        fill="url(#shadowGrad3)" opacity="0.95" />
                  {/* Menacing features on blob - brighter red eyes */}
                  <ellipse cx="135" cy="80" rx="8" ry="12" fill="#ff0000" opacity="0.5" />
                  <ellipse cx="165" cy="80" rx="8" ry="12" fill="#ff0000" opacity="0.5" />
                  
                  {/* Energy streams flowing from person to shadow */}
                  <path d="M 148 192 Q 145 160 142 120" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  <path d="M 152 192 Q 155 160 158 120" stroke="#ef4444" strokeWidth="2" fill="none" opacity="0.5" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" from="0" to="20" dur="1.5s" repeatCount="indefinite" />
                  </path>
                  
                  {/* Negative energy particles rising */}
                  <circle cx="130" cy="120" r="4" fill="#ef4444" opacity="0.6">
                    <animate attributeName="cy" from="190" to="100" dur="2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="2s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="170" cy="130" r="4" fill="#dc2626" opacity="0.6">
                    <animate attributeName="cy" from="200" to="110" dur="2.5s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="2.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="150" cy="125" r="4" fill="#f87171" opacity="0.6">
                    <animate attributeName="cy" from="195" to="105" dur="2.2s" repeatCount="indefinite" />
                    <animate attributeName="opacity" from="0.8" to="0" dur="2.2s" repeatCount="indefinite" />
                  </circle>
                  
                  {/* Head - bright hot pink for strong contrast - DRAWN LAST TO BE IN FRONT */}
                  <circle cx="150" cy="180" r="12" fill="#e879f9" opacity="1" />
                  {/* Head outline */}
                  <circle cx="150" cy="180" r="12" fill="none" stroke="#ffffff" strokeWidth="2" opacity="0.7" />
                </svg>
              </div>
              <CardHeader>
                <CardTitle className="text-2xl">It Feeds On Negativity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-700">
                <p>
                  Here's the weird part: your pain body actually <em>feeds</em> on negative emotions. 
                  It's like it has a life of its own and wants to survive.
                </p>
                <p>
                  To keep itself alive, it makes you think negative thoughts and feel bad emotions. 
                  It's not doing this to be mean — it's just trying to stay alive, like any living thing.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="bg-white px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">How Does It Actually Work?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              The pain body has a sneaky way of taking control
            </p>
          </div>

          <div className="mb-12 overflow-hidden rounded-3xl border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 p-8">
            <svg viewBox="0 0 400 350" className="mx-auto h-72">
              {/* Shadow figure manipulating person like puppet */}
              <defs>
                <linearGradient id="shadowGrad4" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#1a1a1a', stopOpacity: 0.88}} />
                  <stop offset="100%" style={{stopColor: '#000000', stopOpacity: 0.92}} />
                </linearGradient>
              </defs>
              
              <ellipse cx="200" cy="320" rx="80" ry="18" fill="#000000" opacity="0.25" />
              
              {/* Shadow blob at top - controlling, puppet master */}
              <path d="M 200 15 Q 155 20 130 45 Q 115 65 115 90 Q 115 115 130 135 Q 145 150 165 160 Q 180 165 200 165 Q 220 165 235 160 Q 255 150 270 135 Q 285 115 285 90 Q 285 65 270 45 Q 245 20 200 15 Z" 
                    fill="url(#shadowGrad4)" opacity="0.9" />
              {/* Wispy tendrils extending down like puppet master hands */}
              <path d="M 165 160 Q 160 170 158 185 Q 156 200 155 215" 
                    stroke="url(#shadowGrad4)" strokeWidth="8" opacity="0.7" strokeLinecap="round" />
              <path d="M 235 160 Q 240 170 242 185 Q 244 200 245 215" 
                    stroke="url(#shadowGrad4)" strokeWidth="8" opacity="0.7" strokeLinecap="round" />
              {/* Eyes on blob */}
              <ellipse cx="180" cy="80" rx="10" ry="14" fill="#ffffff" opacity="0.1" />
              <ellipse cx="220" cy="80" rx="10" ry="14" fill="#ffffff" opacity="0.1" />
              
              {/* Puppet strings - EXTENDED to touch arms */}
              <line x1="175" y1="165" x2="175" y2="265" stroke="#1a1a1a" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" />
              <line x1="200" y1="165" x2="200" y2="265" stroke="#1a1a1a" strokeWidth="2.5" opacity="0.5" strokeDasharray="4,4" />
              <line x1="225" y1="165" x2="225" y2="265" stroke="#1a1a1a" strokeWidth="2" opacity="0.5" strokeDasharray="4,4" />
              
              {/* Control nodes on strings */}
              <circle cx="175" y="235" r="3" fill="#1a1a1a" opacity="0.6" />
              <circle cx="200" y="235" r="3" fill="#1a1a1a" opacity="0.6" />
              <circle cx="225" y="235" r="3" fill="#1a1a1a" opacity="0.6" />
              
              {/* Person being controlled - stick figure puppet - DRAWN LAST TO BE IN FRONT */}
              {/* Head */}
              <circle cx="200" cy="240" r="13" fill="#e879f9" opacity="1" />
              {/* Body */}
              <rect x="193" y="253" width="14" height="50" rx="7" fill="#e879f9" opacity="1" />
              {/* Arms extended (puppet-like) */}
              <line x1="193" y1="265" x2="165" y2="280" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
              <line x1="207" y1="265" x2="235" y2="280" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
              {/* Legs */}
              <line x1="196" y1="303" x2="185" y2="335" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
              <line x1="204" y1="303" x2="215" y2="335" stroke="#e879f9" strokeWidth="5" opacity="1" strokeLinecap="round" />
            </svg>
          </div>

          <Tabs defaultValue="trigger" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="trigger">The Trigger</TabsTrigger>
              <TabsTrigger value="takeover">The Takeover</TabsTrigger>
              <TabsTrigger value="spread">The Spread</TabsTrigger>
            </TabsList>
            <TabsContent value="trigger" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">1</span>
                    The Trigger
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Your pain body is usually dormant (asleep). But certain things wake it up:
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex gap-2">
                      <span className="text-purple-500">→</span>
                      <span>Someone criticizes you (even lightly)</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500">→</span>
                      <span>A situation reminds you of past hurt</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500">→</span>
                      <span>You're around someone who's being negative</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-purple-500">→</span>
                      <span>Certain random thoughts pop into your head</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-purple-50 p-4 text-sm">
                    <strong>Example:</strong> Your friend makes a joke about your outfit. Normally, no big deal. 
                    But today it triggers memories of being bullied about your appearance years ago. Your pain body wakes up.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="takeover" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">2</span>
                    It Takes Over Your Mind
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Once activated, the pain body hijacks your thinking. Suddenly:
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex gap-2">
                      <span className="text-pink-500">⚡</span>
                      <span>You're thinking super negative thoughts</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-500">⚡</span>
                      <span>You feel anger, sadness, or fear way more intensely than the situation warrants</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-500">⚡</span>
                      <span>Your body feels tense or contracted</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-pink-500">⚡</span>
                      <span>You can't think clearly — it's like you're on autopilot</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-pink-50 p-4 text-sm">
                    <strong>What's happening:</strong> The pain body is feeding itself. It makes you feel bad so it can 
                    absorb that negative energy. Yeah, it's wild.
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="spread" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple-500 text-white">3</span>
                    It Tries to Spread
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-700">
                    Here's where it gets really interesting: your pain body wants to trigger OTHER people's pain bodies.
                  </p>
                  <ul className="space-y-2 pl-6">
                    <li className="flex gap-2">
                      <span className="text-orange-500">🔥</span>
                      <span>You might say something harsh or pick a fight</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500">🔥</span>
                      <span>You act cold or give someone the silent treatment</span>
                    </li>
                    <li className="flex gap-2">
                      <span className="text-orange-500">🔥</span>
                      <span>You try to make others feel what you're feeling</span>
                    </li>
                  </ul>
                  <div className="rounded-lg bg-orange-50 p-4 text-sm">
                    <strong>Why?</strong> Because when you trigger someone else's pain body and they react, 
                    it creates more negative energy for your pain body to feed on. It's like a vampire looking for more blood.
                  </div>
                  <p className="text-gray-700">
                    If the other person reacts emotionally, boom — now BOTH pain bodies are active and feeding each other. 
                    This is why arguments can escalate so quickly.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">How Do You Know It's Active?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              Signs your pain body has taken the wheel
            </p>
          </div>

          <div className="mb-12 overflow-hidden rounded-3xl border-2 border-purple-200 bg-white p-8">
            <svg viewBox="0 0 350 350" className="mx-auto h-64">
              {/* Person becoming aware of shadow figure - it's getting smaller/fading */}
              <defs>
                <linearGradient id="shadowGrad5" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#3d3d3d', stopOpacity: 0.6}} />
                  <stop offset="100%" style={{stopColor: '#1a1a1a', stopOpacity: 0.65}} />
                </linearGradient>
              </defs>
              
              <ellipse cx="175" cy="310" rx="65" ry="15" fill="#000000" opacity="0.2" />
              
              {/* Person stick figure - more upright, aware, confident */}
              {/* Head */}
              <circle cx="140" cy="145" r="18" fill="#8b5cf6" opacity="0.85" />
              {/* Body */}
              <rect x="131" y="163" width="18" height="70" rx="9" fill="#8b5cf6" opacity="0.85" />
              {/* Arms - relaxed position */}
              <line x1="131" y1="180" x2="110" y2="210" stroke="#8b5cf6" strokeWidth="6" opacity="0.85" strokeLinecap="round" />
              <line x1="149" y1="180" x2="170" y2="210" stroke="#8b5cf6" strokeWidth="6" opacity="0.85" strokeLinecap="round" />
              {/* Legs */}
              <line x1="135" y1="233" x2="125" y2="280" stroke="#8b5cf6" strokeWidth="6" opacity="0.85" strokeLinecap="round" />
              <line x1="145" y1="233" x2="155" y2="280" stroke="#8b5cf6" strokeWidth="6" opacity="0.85" strokeLinecap="round" />
              
              {/* Awareness symbol - light bulb above head */}
              <circle cx="140" cy="95" r="18" fill="#fbbf24" opacity="0.8" />
              <path d="M 140 77 L 140 65" stroke="#fbbf24" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
              <path d="M 120 95 L 108 95" stroke="#fbbf24" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
              <path d="M 160 95 L 172 95" stroke="#fbbf24" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
              <path d="M 127 82 L 118 73" stroke="#fbbf24" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
              <path d="M 153 82 L 162 73" stroke="#fbbf24" strokeWidth="3" opacity="0.8" strokeLinecap="round" />
              
              {/* Shadow blob - smaller, more transparent, behind and to the side */}
              <path d="M 260 160 Q 245 170 240 190 Q 237 210 242 230 Q 247 250 257 265 Q 265 275 275 280 Q 283 275 290 265 Q 300 250 305 230 Q 310 210 307 190 Q 302 170 287 160 Q 273 152 260 160 Z" 
                    fill="url(#shadowGrad5)" opacity="0.7" />
              
              {/* Broken/dashed connection line showing separation */}
              <line x1="158" y1="200" x2="242" y2="210" stroke="#9333ea" strokeWidth="2" opacity="0.3" strokeDasharray="8,8" />
              
              {/* Question mark near person showing awareness/questioning */}
              <text x="95" y="195" fontSize="32" fill="#8b5cf6" opacity="0.5">?</text>
            </svg>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-red-100 bg-gradient-to-br from-red-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl">🎭 Intense Reaction</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Your reaction is WAY bigger than what actually happened. A parent asks about homework and you're furious 
                  for hours? That's probably your pain body.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-yellow-100 bg-gradient-to-br from-yellow-50 to-orange-50">
              <CardHeader>
                <CardTitle className="text-xl">⏰ Old Memories</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Past hurts suddenly feel fresh again. A current situation brings up emotions from years ago, 
                  and it all blends together.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-purple-100 bg-gradient-to-br from-purple-50 to-pink-50">
              <CardHeader>
                <CardTitle className="text-xl">🌪️ Negative Spiral</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Your thoughts spiral into negativity. One bad thought leads to another, and another, and suddenly 
                  everything feels terrible.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 bg-gradient-to-br from-green-50 to-emerald-50">
              <CardHeader>
                <CardTitle className="text-xl">🤖 Autopilot Mode</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You're not really in control. It's like you're watching yourself say or do things and thinking 
                  "why am I being like this?" but you can't stop.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 bg-gradient-to-br from-blue-50 to-cyan-50">
              <CardHeader>
                <CardTitle className="text-xl">😤 Body Tension</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You feel tightness in your chest, stomach, or shoulders. Your body literally contracts and tenses up 
                  when the pain body is active.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-100 bg-gradient-to-br from-pink-50 to-rose-50">
              <CardHeader>
                <CardTitle className="text-xl">😠 Want Drama</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  You find yourself wanting to argue or create conflict. Part of you knows it's not worth it, 
                  but the pain body wants the drama.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Dealing With It Section */}
      <section className="bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 px-6 py-20">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold text-gray-900">So How Do You Deal With It?</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-700">
              The secret is awareness — not fighting it
            </p>
          </div>

          <div className="mb-12 overflow-hidden rounded-3xl border-2 border-white bg-white p-8 shadow-xl">
            <svg viewBox="0 0 350 400" className="mx-auto h-72">
              {/* Person free and empowered - shadow very small and faint */}
              <defs>
                <linearGradient id="shadowGrad6" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#6b7280', stopOpacity: 0.15}} />
                  <stop offset="100%" style={{stopColor: '#4b5563', stopOpacity: 0.2}} />
                </linearGradient>
                <linearGradient id="personGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor: '#a855f7', stopOpacity: 1}} />
                  <stop offset="100%" style={{stopColor: '#7c3aed', stopOpacity: 1}} />
                </linearGradient>
                <radialGradient id="auraGrad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" style={{stopColor: '#fbbf24', stopOpacity: 0.4}} />
                  <stop offset="100%" style={{stopColor: '#f59e0b', stopOpacity: 0}} />
                </radialGradient>
              </defs>
              
              <ellipse cx="175" cy="370" rx="50" ry="12" fill="#000000" opacity="0.15" />
              
              {/* Positive energy aura around person */}
              <circle cx="175" cy="220" r="110" fill="url(#auraGrad)" />
              <circle cx="175" cy="220" r="95" fill="none" stroke="#fbbf24" strokeWidth="2" opacity="0.3" strokeDasharray="6,6">
                <animate attributeName="r" from="90" to="100" dur="3s" repeatCount="indefinite" />
                <animate attributeName="opacity" from="0.4" to="0.2" dur="3s" repeatCount="indefinite" />
              </circle>
              
              {/* Person stick figure - tall, confident, upright, arms raised */}
              {/* Head */}
              <circle cx="175" cy="160" r="22" fill="url(#personGrad)" />
              {/* Body */}
              <rect x="164" y="182" width="22" height="90" rx="11" fill="url(#personGrad)" />
              {/* Arms raised in victory/peace */}
              <line x1="164" y1="200" x2="130" y2="175" stroke="url(#personGrad)" strokeWidth="8" opacity="1" strokeLinecap="round" />
              <line x1="186" y1="200" x2="220" y2="175" stroke="url(#personGrad)" strokeWidth="8" opacity="1" strokeLinecap="round" />
              {/* Legs - standing strong */}
              <line x1="168" y1="272" x2="155" y2="340" stroke="url(#personGrad)" strokeWidth="8" opacity="1" strokeLinecap="round" />
              <line x1="182" y1="272" x2="195" y2="340" stroke="url(#personGrad)" strokeWidth="8" opacity="1" strokeLinecap="round" />
              
              {/* Tiny, very faded shadow blob in far corner - almost gone */}
              <path d="M 295 340 Q 290 345 290 353 Q 290 360 295 365 Q 300 368 305 365 Q 310 360 310 353 Q 310 345 305 340 Q 300 337 295 340 Z" 
                    fill="url(#shadowGrad6)" opacity="0.4" />
              
              {/* Sparkles/stars showing freedom and peace */}
              <path d="M 120 140 L 122 145 L 127 147 L 122 149 L 120 154 L 118 149 L 113 147 L 118 145 Z" fill="#fbbf24" opacity="0.7" />
              <path d="M 230 160 L 232 165 L 237 167 L 232 169 L 230 174 L 228 169 L 223 167 L 228 165 Z" fill="#fbbf24" opacity="0.7" />
              <path d="M 150 120 L 152 125 L 157 127 L 152 129 L 150 134 L 148 129 L 143 127 L 148 125 Z" fill="#fbbf24" opacity="0.6" />
              <path d="M 200 130 L 202 135 L 207 137 L 202 139 L 200 144 L 198 139 L 193 137 L 198 135 Z" fill="#fbbf24" opacity="0.6" />
              <path d="M 100 220 L 102 225 L 107 227 L 102 229 L 100 234 L 98 229 L 93 227 L 98 225 Z" fill="#fbbf24" opacity="0.5" />
              <path d="M 250 220 L 252 225 L 257 227 L 252 229 L 250 234 L 248 229 L 243 227 L 248 225 Z" fill="#fbbf24" opacity="0.5" />
              
              {/* Peace symbol or heart on person */}
              <circle cx="175" cy="160" r="6" fill="#ffffff" opacity="0.7" />
              <path d="M 171 160 Q 171 156 175 152 Q 179 156 179 160 Q 179 164 175 168 Q 171 164 171 160 Z" fill="#ffffff" opacity="0.5" />
            </svg>
          </div>

          <div className="space-y-6">
            <Card className="border-2 border-purple-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-500 text-lg font-bold text-white">1</span>
                  Notice It (Awareness)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  The moment you realize "oh wait, this is my pain body acting up" — that's when you've already won half the battle.
                </p>
                <div className="rounded-lg bg-purple-50 p-4">
                  <p className="font-semibold text-purple-900">Try this:</p>
                  <p className="mt-2 text-gray-700">
                    When you feel that intense emotion rising, pause and think: "Is this really about what just happened, 
                    or is this an old wound being triggered?" Just asking the question helps.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-pink-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-pink-500 text-lg font-bold text-white">2</span>
                  Get Physical (Don't Get Lost In Thoughts)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Your pain body thrives when you're lost in your head, replaying the past or worrying about the future. 
                  Bring yourself back to RIGHT NOW.
                </p>
                <div className="rounded-lg bg-pink-50 p-4">
                  <p className="font-semibold text-pink-900">Quick techniques:</p>
                  <ul className="mt-2 space-y-1 pl-6 text-gray-700">
                    <li>• Press your L and R index fingers together firmly — then separate them and breathe out</li>
                    <li>• Take 3 deep breaths</li>
                    <li>• Notice 5 things you can see around you</li>
                    <li>• Feel your feet on the ground</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-orange-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">3</span>
                  Watch It (Don't Feed It)
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Observe the emotion like you're a scientist studying it. Don't judge yourself for feeling it, 
                  but don't indulge it either. Just watch.
                </p>
                <div className="rounded-lg bg-orange-50 p-4">
                  <p className="font-semibold text-orange-900">What NOT to do:</p>
                  <ul className="mt-2 space-y-1 pl-6 text-gray-700">
                    <li>• Don't act on the impulse to lash out</li>
                    <li>• Don't try to fight the feeling (that gives it energy too)</li>
                    <li>• Don't beat yourself up for having a pain body (everyone does)</li>
                  </ul>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-lg font-bold text-white">4</span>
                  Don't Take The Bait From Others
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  When someone else's pain body is trying to trigger yours (they're being hostile, picking fights, etc.), 
                  recognize what's happening and don't engage.
                </p>
                <div className="rounded-lg bg-green-50 p-4">
                  <p className="font-semibold text-green-900">Remember:</p>
                  <p className="mt-2 text-gray-700">
                    That's not really THEM — it's their pain body. You can either walk away or stay present and calm, 
                    but don't let yourself get pulled into the drama. Think of it like someone trying to drag you into 
                    quicksand — just don't step in.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-200 bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-lg font-bold text-white">5</span>
                  Feel It In Your Body
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700">
                  Instead of getting lost in the story your mind is telling, drop into your body. 
                  Where do you feel the emotion physically?
                </p>
                <div className="rounded-lg bg-blue-50 p-4">
                  <p className="font-semibold text-blue-900">Practice:</p>
                  <p className="mt-2 text-gray-700">
                    Put your hand on the tense area (chest, stomach, throat). Breathe into it. 
                    Stay with the physical sensation without the mental story. Often, when you do this, 
                    the emotion loses its grip.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Key Takeaway Section */}
      <section className="bg-gradient-to-br from-violet-600 to-purple-600 px-6 py-20 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="mb-6 text-4xl font-bold">The Main Thing to Remember</h2>
            <Separator className="mx-auto mb-8 w-24 bg-white/30" />
            <div className="space-y-6 text-lg">
              <p className="text-purple-100">
                Your pain body isn't YOU. It's accumulated emotional baggage that sometimes takes over, 
                but it's not your true self.
              </p>
              <p className="text-purple-100">
                The more aware you become of it, the less power it has. You don't need to eliminate it or fight it — 
                just notice when it's active and choose not to identify with it.
              </p>
              <p className="text-xl font-semibold">
                Awareness is the superpower. 🌟
              </p>
              <p className="text-purple-100">
                Over time, as you become more present and aware, your pain body gets weaker. It's like a plant that 
                can't survive without water — when you stop feeding it with unconscious reactions, it shrinks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 px-6 py-12 text-white">
        <div className="container mx-auto max-w-6xl text-center">
          <p className="mb-4 text-gray-400">
            Based on the teachings of Eckhart Tolle
          </p>
          <p className="text-sm text-gray-500">
            This guide simplifies complex spiritual concepts for educational purposes. 
            For deeper understanding, explore Eckhart Tolle's books: "The Power of Now" and "A New Earth"
          </p>
        </div>
      </footer>
    </div>
  );
}
