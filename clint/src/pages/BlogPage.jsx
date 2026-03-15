import { useState } from 'react'
import { BLOG_POSTS } from '../data/index.js'

export default function BlogPage() {
  const [email,setEmail]=useState('')
  const [subscribed,setSubscribed]=useState(false)
  const featured=BLOG_POSTS.find(p=>p.featured)
  const rest=BLOG_POSTS.filter(p=>!p.featured)

  return (
    <div className="page-enter page-padded" style={{paddingTop:110,minHeight:'100vh',padding:'110px 60px 80px'}}>
      <div style={{maxWidth:1060,margin:'0 auto'}}>
        <p style={{fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.18em',color:'var(--cyan)',marginBottom:16}}>THOUGHTS &amp; TUTORIALS</p>
        <h1 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:'clamp(36px,6vw,76px)',letterSpacing:'-.04em',lineHeight:1,marginBottom:16,background:'linear-gradient(135deg,var(--text) 30%,var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>The Blog</h1>
        <p style={{fontSize:17,color:'var(--muted)',fontWeight:300,lineHeight:1.6,maxWidth:520,marginBottom:56}}>Long-form writing on engineering, design, and the craft of building software products people love.</p>

        {featured&&(
          <div className="card-hover" style={{background:'var(--card-bg)',border:'1px solid rgba(255,34,51,0.22)',borderRadius:22,overflow:'hidden',marginBottom:36,animation:'fadeUp .6s .1s both'}}>
            <div style={{height:5,background:'linear-gradient(90deg,#FF2233,#880022)'}}/>
            <div className="blog-featured-inner" style={{padding:'38px 42px',display:'flex',gap:48,alignItems:'flex-start'}}>
              <div style={{flex:1}}>
                <div style={{display:'flex',alignItems:'center',gap:12,marginBottom:18,flexWrap:'wrap'}}>
                  <span style={{background:'rgba(255,34,51,0.1)',border:'1px solid rgba(255,34,51,0.4)',borderRadius:20,padding:'4px 12px',fontFamily:'var(--ff-d)',fontSize:9.5,fontWeight:700,color:'var(--cyan)',letterSpacing:'.1em'}}>FEATURED</span>
                  <span style={{fontSize:12.5,color:'var(--muted)'}}>{featured.date}</span>
                  <span style={{fontSize:12.5,color:'var(--muted)'}}>·</span>
                  <span style={{fontSize:12.5,color:'var(--muted)'}}>{featured.readTime}</span>
                </div>
                <h2 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:'clamp(18px,2.5vw,28px)',letterSpacing:'-.03em',lineHeight:1.15,marginBottom:16,color:'var(--text)'}}>{featured.title}</h2>
                <p style={{fontSize:15.5,color:'var(--muted)',lineHeight:1.7,marginBottom:22}}>{featured.excerpt}</p>
                <div style={{display:'flex',gap:8,flexWrap:'wrap'}}>{featured.tags.map(t=><span key={t} className="tag">{t}</span>)}</div>
              </div>
              <div className="blog-read-box" style={{width:160,height:160,borderRadius:18,flexShrink:0,background:'linear-gradient(135deg,rgba(255,34,51,0.08),rgba(136,0,34,0.12))',border:'1px solid rgba(255,34,51,0.22)',display:'flex',alignItems:'center',justifyContent:'center'}}>
                <div style={{textAlign:'center'}}>
                  <div style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:42,color:'var(--cyan)',lineHeight:1}}>↗</div>
                  <div style={{fontFamily:'var(--ff-d)',fontSize:9,fontWeight:700,letterSpacing:'.12em',color:'var(--muted)',marginTop:8}}>READ MORE</div>
                </div>
              </div>
            </div>
          </div>
        )}

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(280px,1fr))',gap:22}}>
          {rest.map((post,i)=>(
            <div key={post.id} className="card-hover" style={{background:'var(--card-bg)',border:'1px solid var(--card-border)',borderRadius:18,overflow:'hidden',animation:`fadeUp .55s ${i*.12}s both`}}>
              <div style={{height:3,background:`linear-gradient(90deg,${post.color},transparent)`}}/>
              <div style={{padding:'26px 26px 28px'}}>
                <div style={{display:'flex',gap:10,marginBottom:16,flexWrap:'wrap'}}>
                  <span style={{fontSize:12,color:'var(--muted)'}}>{post.date}</span>
                  <span style={{fontSize:12,color:'var(--muted)'}}>·</span>
                  <span style={{fontSize:12,color:'var(--muted)'}}>{post.readTime}</span>
                </div>
                <h3 style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:18,letterSpacing:'-.02em',lineHeight:1.3,marginBottom:12,color:'var(--text)'}}>{post.title}</h3>
                <p style={{fontSize:13.5,color:'var(--muted)',lineHeight:1.65,marginBottom:18}}>{post.excerpt}</p>
                <div style={{display:'flex',gap:7,flexWrap:'wrap'}}>{post.tags.map(t=><span key={t} className="tag gray">{t}</span>)}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div style={{marginTop:64,background:'rgba(255,34,51,0.04)',border:'1px solid rgba(255,34,51,0.18)',borderRadius:22,padding:'44px 40px',display:'flex',justifyContent:'space-between',alignItems:'center',gap:32,flexWrap:'wrap'}}>
          <div>
            <h3 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:22,letterSpacing:'-.03em',marginBottom:10,color:'var(--text)'}}>Get new posts in your inbox.</h3>
            <p style={{fontSize:15,color:'var(--muted)'}}>No spam. Unsubscribe any time. One email per month, max.</p>
          </div>
          {subscribed
            ? <p style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:14,color:'var(--cyan)',letterSpacing:'.05em',whiteSpace:'nowrap'}}>✓ You're in!</p>
            : <div style={{display:'flex',gap:10,flexShrink:0,flexWrap:'wrap'}}>
                <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="your@email.com" style={{width:220,borderRadius:40,padding:'12px 20px'}}/>
                <button className="btn-primary" style={{whiteSpace:'nowrap'}} onClick={()=>{if(email)setSubscribed(true)}}>Subscribe →</button>
              </div>
          }
        </div>
      </div>
    </div>
  )
}
