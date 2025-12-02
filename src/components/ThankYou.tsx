import React, { useEffect, useState } from 'react'
import './ThankYou.css'

type CardData = {
  id: string;
  title: string;
  subtitle?: string;
  content: React.ReactNode;
};

const CARDS: CardData[] = [
  {
    id: 'c1',
    title: 'HAHAHAHA...',
    content: (
      <p>
       SORRY FOR NO REACTION FOR YOUR GIFT BECAUSE WHEN I SAY THE REACTION EASILY THERE IS NO ANY THRILL HEHEEEEE.....
      </p>
    ),
  },

  {
    id: 'c2',
    title: 'THANK YOU',
    content: (
      <p>
        AND I LIKE YOUR GIFT MY CUTIEE",I DID NOT EXPECT THIS,"THANK YOU SO MUCH FOR THIS.....
        "LOVE YOU SO MUCH MY LOVE....."
      </p>
    ),
  },

  {
    id: 'c3',
    title: 'REACTION',
    content: (
      <p>
        "WHEN I OPEN IT I JUST STUCK THAT TIME,LIKE I AM THINKNG ABOUT THAT IT'S YOUR PROJECT,I DID NOT UNDERSTAND WHAT WAS IT THEN LATER I GOT IT "AND THANK YOU VERY MUCH MAY CUTIEE PIE...".
      </p>
    ),
  },
];

export default function ThankYou() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 40);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="hc-page">
      <main className="hc-wrap">
        <h1 className="hc-title">THANK YOU FOR THE GIFT</h1>

        <section className={`hc-cards ${mounted ? 'is-visible' : ''}`} aria-label="Cards">
          {CARDS.map(card => (
            <StaticCard key={card.id} card={card} />
          ))}
        </section>
      </main>
    </div>
  );
}

/* StaticCard: content always visible. Heart animates on click / on mount for attention. */
function StaticCard({ card }: { card: CardData }) {
  const [liked, setLiked] = useState(false);
  const [pulse, setPulse] = useState(false);

  // initial tiny pulse on mount to hint interactivity
  useEffect(() => {
    const t = setTimeout(() => setPulse(true), 200);
    const t2 = setTimeout(() => setPulse(false), 1200);
    return () => {
      clearTimeout(t);
      clearTimeout(t2);
    };
  }, []);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setLiked((prev: boolean) => !prev)
    setPulse(true)
    setTimeout(() => setPulse(false), 700)
  }

  return (
    <article className="hc-card always-open">
      <button
        type="button"
        className={`hc-heart-btn ${pulse ? 'pulse' : ''}`}
        onClick={handleClick}
        aria-pressed={liked}
        title={liked ? 'Liked' : 'Like'}
      >
        <span className={`hc-heart ${liked ? 'liked' : ''}`} aria-hidden="true">❤</span>
      </button>

      <div className="hc-card-head">
        <h2>{card.title}</h2>
        {card.subtitle ? <p className="subtitle">{card.subtitle}</p> : null}
      </div>

      <div className="hc-card-content always-visible" aria-hidden={false}>
        {card.content}
      </div>
    </article>
  );
}
