import SectionDivider from '../components/SectionDivider.jsx'
import { TIMELINE, VALUES } from '../data/index.js'

export default function AboutPage({ onNav }) {
  return (
    <div className="page-enter" style={{paddingTop:77,minHeight:'100vh'}}>

      {/* Hero split */}
      <section className="about-split" style={{display:'flex',minHeight:'80vh',position:'relative',overflow:'hidden',background:'linear-gradient(180deg,rgba(255,34,51,0.025) 0%,transparent 60%)',borderBottom:'1px solid var(--border-w)'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 50% 70% at 60% 40%,rgba(255,34,51,0.07) 0%,transparent 70%)'}}/>

        <div className="about-left" style={{flex:'0 0 55%',padding:'80px 48px 60px 60px',display:'flex',flexDirection:'column',justifyContent:'center',gap:24,position:'relative',zIndex:2}}>
          <p style={{fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.18em',color:'var(--cyan)'}}>ABOUT ME</p>
          <h1 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:'clamp(36px,5.5vw,72px)',letterSpacing:'-.045em',lineHeight:.95,background:'linear-gradient(135deg,var(--text) 30%,var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Building the web,<br/>one pixel at a time.</h1>
          <p style={{fontSize:17,color:'var(--muted)',lineHeight:1.75,fontWeight:300,maxWidth:500}}>I'm a full-stack developer and UI designer based in Gujarat , India. I build high-performance web applications, obsessive design systems, and occasionally ship creative experiments at 2am.</p>
          <p style={{fontSize:17,color:'var(--muted)',lineHeight:1.75,fontWeight:300,maxWidth:500}}>My work sits at the intersection of <em style={{color:'var(--cyan)',fontStyle:'normal',fontWeight:500}}>engineering rigour</em> and <em style={{color:'var(--cyan)',fontStyle:'normal',fontWeight:500}}>visual craft</em>.</p>
          <div style={{display:'flex',gap:14,marginTop:8,flexWrap:'wrap'}}>
            <button className="btn-primary" onClick={()=>onNav('Contact')}>Work With Me →</button>
            <button className="btn-ghost"   onClick={()=>onNav('Work')}>See Projects</button>
          </div>
        </div>

        <div className="about-right" style={{flex:'0 0 45%',display:'flex',alignItems:'center',justifyContent:'center',position:'relative',zIndex:1}}>
          <div style={{position:'relative',width:280,height:280}}>
            <div style={{position:'absolute',inset:0,borderRadius:'50%',border:'2px solid rgba(255,34,51,0.25)',animation:'spin 20s linear infinite'}}/>
            <div style={{position:'absolute',inset:20,borderRadius:'50%',border:'1px solid rgba(255,34,51,0.15)',animation:'spin 15s linear infinite reverse'}}/>
            <div style={{position:'absolute',inset:0,borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}>
              <div style={{width:180,height:180,borderRadius:'50%',background:'linear-gradient(135deg,rgba(255,34,51,0.12),rgba(136,0,34,0.18))',border:'2px solid rgba(255,34,51,0.3)',display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 60px rgba(255,34,51,0.1)'}}>
                <span style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:56,background:'linear-gradient(135deg,var(--text),var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text',letterSpacing:'-.05em'}}>DY</span>
              </div>
            </div>
            <div style={{position:'absolute',inset:0,animation:'orbit 8s linear infinite'}}>
              <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:10,height:10,borderRadius:'50%',background:'var(--cyan)',boxShadow:'0 0 12px var(--cyan)'}}/>
            </div>
            <div style={{position:'absolute',inset:20,animation:'orbit2 12s linear infinite'}}>
              <div style={{position:'absolute',top:0,left:'50%',transform:'translateX(-50%)',width:6,height:6,borderRadius:'50%',background:'var(--blue)',boxShadow:'0 0 8px var(--blue)'}}/>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padded" style={{padding:'72px 60px',maxWidth:920,margin:'0 auto'}}>
        <div style={{marginBottom:52}}><SectionDivider label="CAREER TIMELINE"/></div>
        <div style={{position:'relative'}}>
          <div style={{position:'absolute',left:92,top:0,bottom:0,width:1,background:'linear-gradient(180deg,rgba(255,34,51,0.35),transparent)'}}/>
          {TIMELINE.map((item,i)=>(
            <div key={item.year} className="timeline-item" style={{display:'flex',gap:32,marginBottom:i<TIMELINE.length-1?48:0,animation:`fadeUp .6s ${i*.12}s both`}}>
              <div style={{width:76,textAlign:'right',flexShrink:0,paddingTop:4}}>
                <span style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:15,color:'var(--cyan)'}}>{item.year}</span>
              </div>
              <div style={{width:16,display:'flex',flexDirection:'column',alignItems:'center',flexShrink:0}}>
                <div style={{width:13,height:13,borderRadius:'50%',border:'2px solid var(--cyan)',background:'var(--bg)',boxShadow:'0 0 12px rgba(255,34,51,0.4)',marginTop:4}}/>
              </div>
              <div style={{flex:1,paddingBottom:24}}>
                <h3 style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:19,letterSpacing:'-.02em',marginBottom:4,color:'var(--text)'}}>{item.title}</h3>
                <p style={{fontFamily:'var(--ff-d)',fontSize:12,fontWeight:600,color:'var(--cyan)',letterSpacing:'.08em',marginBottom:12}}>{item.org.toUpperCase()}</p>
                <p style={{fontSize:14.5,color:'var(--muted)',lineHeight:1.7}}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="section-padded" style={{padding:'0 60px 80px',maxWidth:1100,margin:'0 auto'}}>
        <div style={{marginBottom:48}}><SectionDivider label="HOW I WORK"/></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(240px,1fr))',gap:20}}>
          {VALUES.map((v,i)=>(
            <div key={v.title} className="card-hover" style={{background:'var(--card-bg)',border:'1px solid var(--card-border)',borderRadius:18,padding:'28px 26px',animation:`fadeUp .55s ${i*.1}s both`}}>
              <div style={{fontSize:28,marginBottom:14,color:'var(--cyan)'}}>{v.icon}</div>
              <h3 style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:17,letterSpacing:'-.01em',marginBottom:10,color:'var(--text)'}}>{v.title}</h3>
              <p style={{fontSize:14,color:'var(--muted)',lineHeight:1.65}}>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
