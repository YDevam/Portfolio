import { useState } from 'react'
import { CONTACT_DETAILS, SOCIALS } from '../data/index.js'

function Spinner() {
  return (
    <span style={{display:'inline-block',width:16,height:16,border:'2px solid rgba(255,255,255,0.25)',borderTopColor:'#fff',borderRadius:'50%',animation:'spin .7s linear infinite',verticalAlign:'middle',marginRight:8}}/>
  )
}

function FieldError({ msg }) {
  if (!msg) return null
  return <p style={{margin:'6px 0 0',fontSize:12,color:'#FF6B6B'}}>{msg}</p>
}

function FieldLabel({ children }) {
  return (
    <label style={{fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.12em',color:'var(--muted)',display:'block',marginBottom:8}}>
      {children}
    </label>
  )
}

export default function ContactPage() {
  const [form,setForm]             = useState({name:'',email:'',budget:'',message:''})
  const [fieldErrors,setFieldErrors] = useState({})
  const [status,setStatus]         = useState('idle')
  const [serverMsg,setServerMsg]   = useState('')

  const setField = (key,value) => {
    setForm(prev=>({...prev,[key]:value}))
    setFieldErrors(prev=>({...prev,[key]:''}))
    if(status==='error') setStatus('idle')
  }

  const validate = () => {
    const errs = {}
    if(!form.name.trim())   errs.name    = 'Name is required.'
    if(!form.email.trim())  errs.email   = 'Email is required.'
    else if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = 'Enter a valid email.'
    if(!form.message.trim()) errs.message = 'Message is required.'
    else if(form.message.trim().length<10) errs.message = 'Message too short (min 10 chars).'
    return errs
  }

  const handleSubmit = async () => {
    const errs = validate()
    if(Object.keys(errs).length){ setFieldErrors(errs); return }
    setStatus('loading'); setServerMsg('')
    try {
      const res  = await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(form)})
      const data = await res.json()
      if(res.ok && data.ok){ setStatus('success'); setServerMsg(data.message) }
      else if(res.status===422 && data.errors){ setFieldErrors(data.errors); setStatus('idle') }
      else { setStatus('error'); setServerMsg(data.error||'Something went wrong. Please try again.') }
    } catch {
      setStatus('error'); setServerMsg('Could not reach the server. Check your connection and try again.')
    }
  }

  const handleReset = () => {
    setForm({name:'',email:'',budget:'',message:''}); setFieldErrors({}); setStatus('idle'); setServerMsg('')
  }

  return (
    <div className="page-enter" style={{paddingTop:77,minHeight:'100vh'}}>

      {/* ── Header ── */}
      <section className="contact-header" style={{padding:'80px 60px 64px',background:'linear-gradient(180deg,rgba(255,34,51,0.03) 0%,transparent 70%)',borderBottom:'1px solid var(--border-w)',textAlign:'center',position:'relative',overflow:'hidden'}}>
        <div style={{position:'absolute',inset:0,pointerEvents:'none',background:'radial-gradient(ellipse 50% 70% at 50% 0%,rgba(255,34,51,0.07) 0%,transparent 70%)'}}/>
        <p style={{fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.18em',color:'var(--cyan)',marginBottom:20,position:'relative',zIndex:1}}>LET'S TALK</p>
        <h1 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:'clamp(38px,7vw,94px)',letterSpacing:'-.05em',lineHeight:.92,marginBottom:24,position:'relative',zIndex:1,
          background:'linear-gradient(135deg,var(--text) 20%,var(--cyan) 100%)',WebkitBackgroundClip:'text',WebkitTextFillColor:'transparent',backgroundClip:'text'}}>
          Start a Conversation.
        </h1>
        <p style={{fontSize:18,color:'var(--muted)',maxWidth:540,margin:'0 auto',lineHeight:1.65,fontWeight:300,position:'relative',zIndex:1}}>
          I take on a limited number of projects each quarter. If you have something interesting, reach out — I'd love to hear about it.
        </p>
      </section>

      {/* ── Body ── */}
      <section className="contact-grid" style={{padding:'64px 60px 80px',maxWidth:1100,margin:'0 auto',display:'grid',gridTemplateColumns:'1fr 1.4fr',gap:52,alignItems:'start'}}>

        {/* Left: info */}
        <div>
          <h2 style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:22,letterSpacing:'-.02em',marginBottom:28,color:'var(--text)'}}>Contact Details</h2>

          {CONTACT_DETAILS.map(({label,value,accent})=>(
            <div key={label} style={{display:'flex',flexDirection:'column',gap:4,marginBottom:22,paddingBottom:22,borderBottom:'1px solid var(--border-w)'}}>
              <span style={{fontFamily:'var(--ff-d)',fontSize:10.5,fontWeight:700,letterSpacing:'.14em',color:'var(--muted)'}}>{label.toUpperCase()}</span>
              <span style={{fontSize:16,color:accent?'var(--cyan)':'var(--text)',fontWeight:accent?500:400}}>{value}</span>
            </div>
          ))}

          <p style={{fontFamily:'var(--ff-d)',fontSize:10.5,fontWeight:700,letterSpacing:'.14em',color:'var(--muted)',marginBottom:16}}>FIND ME ON</p>
          <div style={{display:'flex',gap:10,flexWrap:'wrap',marginBottom:40}}>
            {SOCIALS.map(s=>(
              <div key={s} style={{padding:'8px 16px',borderRadius:30,background:'var(--card-bg)',border:'1px solid var(--card-border)',fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.05em',color:'var(--muted)',cursor:'pointer',transition:'all .22s'}}
                onMouseEnter={e=>{e.currentTarget.style.borderColor='rgba(255,34,51,0.45)';e.currentTarget.style.color='var(--cyan)'}}
                onMouseLeave={e=>{e.currentTarget.style.borderColor='var(--card-border)';e.currentTarget.style.color='var(--muted)'}}
              >{s}</div>
            ))}
          </div>

          {/* Availability callout */}
          <div style={{background:'rgba(255,34,51,0.05)',border:'1px solid rgba(255,34,51,0.18)',borderRadius:14,padding:'18px 20px',display:'flex',alignItems:'flex-start',gap:12}}>
            <span style={{width:8,height:8,borderRadius:'50%',flexShrink:0,background:'var(--cyan)',boxShadow:'0 0 8px var(--cyan)',marginTop:6,display:'block',animation:'pulseGlow 2.2s ease-in-out infinite'}}/>
            <div>
              <p style={{fontFamily:'var(--ff-d)',fontSize:11,fontWeight:700,letterSpacing:'.1em',color:'var(--cyan)',marginBottom:4}}>CURRENTLY AVAILABLE</p>
              <p style={{fontSize:13.5,color:'var(--muted)',lineHeight:1.6}}>Open to new projects starting Q1 2026. Priority given to long-term product work and interesting technical challenges.</p>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div>
          {/* SUCCESS */}
          {status==='success' && (
            <div style={{background:'rgba(255,34,51,0.06)',border:'1px solid rgba(255,34,51,0.3)',borderRadius:22,padding:'56px 48px',textAlign:'center',animation:'scaleIn .4s ease both'}}>
              <div style={{fontSize:56,marginBottom:20,color:'var(--cyan)'}}>✓</div>
              <h3 style={{fontFamily:'var(--ff-d)',fontWeight:800,fontSize:26,letterSpacing:'-.03em',marginBottom:14,color:'var(--text)'}}>Message Sent!</h3>
              <p style={{fontSize:16,color:'var(--muted)',lineHeight:1.7,maxWidth:340,margin:'0 auto 16px'}}>{serverMsg}</p>
              <p style={{fontSize:13.5,color:'var(--muted)',marginBottom:32}}>A confirmation was sent to <strong style={{color:'var(--cyan)'}}>{form.email}</strong></p>
              <button className="btn-ghost" onClick={handleReset}>Send Another Message →</button>
            </div>
          )}

          {/* ERROR banner */}
          {status==='error' && (
            <div style={{background:'rgba(255,80,80,0.08)',border:'1px solid rgba(255,80,80,0.3)',borderRadius:14,padding:'16px 20px',marginBottom:20,display:'flex',alignItems:'flex-start',gap:12}}>
              <span style={{fontSize:18,color:'#FF6B6B',flexShrink:0,lineHeight:1.4}}>⚠</span>
              <div>
                <p style={{fontSize:14,color:'#ffaaaa',lineHeight:1.55,marginBottom:8}}>{serverMsg}</p>
                <button onClick={()=>setStatus('idle')} style={{background:'none',border:'none',cursor:'pointer',fontSize:12,color:'#FF6B6B',fontFamily:'var(--ff-d)',fontWeight:700,letterSpacing:'.06em',padding:0}}>DISMISS</button>
              </div>
            </div>
          )}

          {/* FORM */}
          {status!=='success' && (
            <div style={{background:'var(--card-bg)',border:'1px solid var(--card-border)',borderRadius:22,padding:'40px 42px',position:'relative',overflow:'hidden'}}>
              <div style={{position:'absolute',top:-80,right:-80,width:220,height:220,background:'radial-gradient(circle,rgba(255,34,51,0.07),transparent 65%)',pointerEvents:'none'}}/>

              <h2 style={{fontFamily:'var(--ff-d)',fontWeight:700,fontSize:22,letterSpacing:'-.02em',marginBottom:28,position:'relative',zIndex:1,color:'var(--text)'}}>Send a Message</h2>

              {/* Name + Email */}
              <div className="form-name-email" style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:14,marginBottom:14,position:'relative',zIndex:1}}>
                <div>
                  <FieldLabel>YOUR NAME *</FieldLabel>
                  <input value={form.name} onChange={e=>setField('name',e.target.value)} placeholder="Devam Yadav" disabled={status==='loading'}
                    style={{borderColor:fieldErrors.name?'rgba(255,80,80,0.55)':undefined}}/>
                  <FieldError msg={fieldErrors.name}/>
                </div>
                <div>
                  <FieldLabel>EMAIL *</FieldLabel>
                  <input type="email" value={form.email} onChange={e=>setField('email',e.target.value)} placeholder="devamyadav2006@gmail.com" disabled={status==='loading'}
                    style={{borderColor:fieldErrors.email?'rgba(255,80,80,0.55)':undefined}}/>
                  <FieldError msg={fieldErrors.email}/>
                </div>
              </div>

              {/* Budget */}
              <div style={{marginBottom:14,position:'relative',zIndex:1}}>
                <FieldLabel>PROJECT BUDGET</FieldLabel>
                <select value={form.budget} onChange={e=>setField('budget',e.target.value)} disabled={status==='loading'}>
                  <option value="">Select a range…</option>
                  <option>Under $5K</option>
                  <option>$5K – $15K</option>
                  <option>$15K – $40K</option>
                  <option>$40K – $100K</option>
                  <option>$100K+</option>
                </select>
              </div>

              {/* Message */}
              <div style={{marginBottom:28,position:'relative',zIndex:1}}>
                <FieldLabel>YOUR MESSAGE *</FieldLabel>
                <textarea value={form.message} onChange={e=>setField('message',e.target.value)} rows={5}
                  placeholder="Tell me about your project, timeline, and what success looks like…"
                  disabled={status==='loading'}
                  style={{resize:'vertical',borderColor:fieldErrors.message?'rgba(255,80,80,0.55)':undefined}}/>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',marginTop:4}}>
                  <FieldError msg={fieldErrors.message}/>
                  <span style={{fontSize:11,color:form.message.length>1900?'#FF6B6B':'var(--muted)',marginLeft:'auto',flexShrink:0}}>{form.message.length} / 2000</span>
                </div>
              </div>

              <button className="btn-primary" onClick={handleSubmit} disabled={status==='loading'}
                style={{width:'100%',padding:'16px',fontSize:14,letterSpacing:'.1em',borderRadius:14,position:'relative',zIndex:1,
                  display:'flex',alignItems:'center',justifyContent:'center',
                  opacity:status==='loading'?0.8:1,cursor:status==='loading'?'not-allowed':'pointer'}}>
                {status==='loading'&&<Spinner/>}
                {status==='loading'?'SENDING…':'SEND MESSAGE →'}
              </button>

              <p style={{textAlign:'center',fontSize:12,color:'var(--muted)',marginTop:14,position:'relative',zIndex:1}}>
                Your message is emailed directly to me. No spam, ever.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
