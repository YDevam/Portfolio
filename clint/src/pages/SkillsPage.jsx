import SkillBar       from '../components/SkillBar.jsx'
import SectionDivider from '../components/SectionDivider.jsx'
import { SKILLS, LANGUAGES, TOOLS } from '../data/index.js'

export default function SkillsPage() {
  return (
    <div className="page-enter page-padded" style={{paddingTop:110,minHeight:'100vh',padding:'110px 60px 80px'}}>
      <div style={{maxWidth:1100,margin:'0 auto'}}>
        <p style={{fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.18em',color:'var(--cyan)',marginBottom:16}}>CAPABILITIES</p>
        <h1 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:'clamp(36px,6vw,76px)',letterSpacing:'-.04em',lineHeight:1,marginBottom:16,background:'linear-gradient(135deg,var(--text) 30%,var(--cyan))',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>Skills &amp; Technologies</h1>
        <p style={{fontSize:17,color:'var(--muted)',fontWeight:300,lineHeight:1.6,maxWidth:520,marginBottom:64}}>2 years of building things end-to-end. Here's the honest breakdown of my technical toolkit.</p>

        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))',gap:40,marginBottom:72}}>
          {SKILLS.map((cat,ci)=>(
            <div key={cat.category}>
              <h3 style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:14,letterSpacing:'.14em',color:'var(--cyan)',marginBottom:24}}>{cat.category.toUpperCase()}</h3>
              {cat.items.map((item,ii)=><SkillBar key={item.name} name={item.name} level={item.level} delay={ci*.15+ii*.08}/>)}
            </div>
          ))}
        </div>

        <div style={{marginBottom:36}}><SectionDivider label="LANGUAGE PROFICIENCY"/></div>
        <div style={{display:'grid',gridTemplateColumns:'repeat(auto-fill,minmax(200px,1fr))',gap:14,marginBottom:72}}>
          {LANGUAGES.map((lang,i)=>{
            const isH=lang.pct>80,isM=lang.pct>60
            return(
              <div key={lang.label} className="card-hover" style={{background:'var(--card-bg)',border:'1px solid var(--card-border)',borderRadius:14,padding:'18px 20px',animation:`fadeUp .5s ${i*.06}s both`}}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:10}}>
                  <span style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:14,color:'var(--text)'}}>{lang.label}</span>
                  <span style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:14,color:isH?'var(--cyan)':isM?'rgba(255,100,100,.9)':'var(--muted)'}}>{lang.pct}%</span>
                </div>
                <div style={{height:3,background:'var(--card-border)',borderRadius:3,overflow:'hidden'}}>
                  <div style={{height:'100%',width:`${lang.pct}%`,borderRadius:3,background:isH?'linear-gradient(90deg,#FF2233,#880022)':isM?'linear-gradient(90deg,#CC4444,#881122)':'linear-gradient(90deg,rgba(255,100,100,.4),rgba(255,100,100,.2))'}}/>
                </div>
              </div>
            )
          })}
        </div>

        <div style={{marginBottom:36}}><SectionDivider label="TOOLS I LIVE IN"/></div>
        <div style={{display:'flex',gap:12,flexWrap:'wrap'}}>
          {TOOLS.map((tool,i)=>(
            <div key={tool} style={{padding:'10px 22px',borderRadius:40,background:'var(--card-bg)',border:'1px solid var(--card-border)',fontFamily:'var(--ff-d)',fontSize:12.5,fontWeight:600,color:'var(--muted)',letterSpacing:'.04em',transition:'all .22s',cursor:'default',animation:`fadeUp .5s ${i*.05}s both`}}
              onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,34,51,0.45)';e.currentTarget.style.color='var(--cyan)';e.currentTarget.style.background='rgba(255,34,51,0.08)'}}
              onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--card-border)';e.currentTarget.style.color='var(--muted)';e.currentTarget.style.background='var(--card-bg)'}}
            >{tool}</div>
          ))}
        </div>
      </div>
    </div>
  )
}
