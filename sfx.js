/* MATHKING SOUND ENGINE
   Every sound below is built in code, so the game works with no audio files.
   To use your own audio, put files in the "assets" folder with the names below.
   If a file is missing, the built-in sound plays instead. */
const MK_CONFIG={
  team:"TEAM 7",
  files:{
    intro:"assets/intro.mp3",          // team intro jingle
    heartbreak:"assets/heart-break.mp3", // plays every time a heart breaks
    faaah:"assets/faaah.mp3"           // the secret-stage troll sound
  }
};

const SFX=(()=>{
  let ac,master,muted=localStorage.getItem("mk_mute")==="1";
  const bad={};
  const note=n=>440*Math.pow(2,(n-69)/12);

  function ctx(){
    if(!ac){
      const C=window.AudioContext||window.webkitAudioContext;
      if(!C)return null;
      ac=new C();master=ac.createGain();master.gain.value=.9;master.connect(ac.destination);
    }
    if(ac.state==="suspended")ac.resume();
    return ac;
  }
  function tone(f,d,o){
    o=o||{};const a=ctx();if(!a)return;
    const t=a.currentTime+(o.at||0),os=a.createOscillator(),g=a.createGain();
    os.type=o.type||"sine";os.frequency.setValueAtTime(f,t);
    if(o.to)os.frequency.exponentialRampToValueAtTime(o.to,t+d);
    g.gain.setValueAtTime(.0001,t);
    g.gain.exponentialRampToValueAtTime(o.v||.2,t+.012);
    g.gain.exponentialRampToValueAtTime(.0001,t+d);
    os.connect(g);g.connect(master);os.start(t);os.stop(t+d+.03);
  }
  function noise(d,o){
    o=o||{};const a=ctx();if(!a)return;
    const n=Math.floor(a.sampleRate*d),buf=a.createBuffer(1,n,a.sampleRate),data=buf.getChannelData(0);
    for(let i=0;i<n;i++)data[i]=Math.random()*2-1;
    const s=a.createBufferSource(),f=a.createBiquadFilter(),g=a.createGain(),t=a.currentTime+(o.at||0);
    s.buffer=buf;f.type=o.type||"bandpass";f.Q.value=o.q||1;
    f.frequency.setValueAtTime(o.f||1000,t);
    if(o.to)f.frequency.exponentialRampToValueAtTime(o.to,t+d);
    g.gain.setValueAtTime(o.v||.3,t);g.gain.exponentialRampToValueAtTime(.0001,t+d);
    s.connect(f);f.connect(g);g.connect(master);s.start(t);
  }
  function fah(){
    const a=ctx();if(!a)return;
    const s=a.currentTime,o=a.createOscillator(),g=a.createGain(),f1=a.createBiquadFilter(),f2=a.createBiquadFilter();
    o.type="sawtooth";
    o.frequency.setValueAtTime(190,s);o.frequency.linearRampToValueAtTime(310,s+.15);o.frequency.linearRampToValueAtTime(230,s+1.3);
    f1.type="bandpass";f1.frequency.value=800;f1.Q.value=4;
    f2.type="bandpass";f2.frequency.value=1250;f2.Q.value=5;
    g.gain.setValueAtTime(.0001,s);g.gain.exponentialRampToValueAtTime(.55,s+.08);
    g.gain.setValueAtTime(.55,s+.9);g.gain.exponentialRampToValueAtTime(.001,s+1.4);
    o.connect(f1);o.connect(f2);f1.connect(g);f2.connect(g);g.connect(master);o.start(s);o.stop(s+1.5);
  }

  const S={
    select:()=>tone(900,.05,{type:"square",v:.08}),
    correct:k=>{
      const b=60+Math.min(k||1,7);
      [0,4,7,12].forEach((s,i)=>tone(note(b+s),.18,{type:"triangle",at:i*.07,v:.2}));
      tone(note(b+19),.3,{at:.3,v:.12});
    },
    xp:()=>{tone(1318,.07,{type:"square",v:.08});tone(1760,.25,{type:"square",at:.07,v:.08});},
    heartbreak:()=>{
      noise(.28,{type:"highpass",f:2500,v:.5});
      tone(240,.35,{type:"sawtooth",to:45,v:.26});
      tone(90,.4,{to:40,v:.4,at:.05});
      tone(1400,.08,{type:"square",to:300,v:.1});
    },
    tick:()=>tone(1200,.03,{type:"square",v:.06}),
    tick2:()=>tone(1700,.05,{type:"square",v:.12}),
    stage:()=>{
      noise(.5,{f:300,to:3500,q:2,v:.35});
      [72,76,79,84].forEach((n,i)=>tone(note(n),.25,{type:"triangle",at:.35+i*.08,v:.15}));
    },
    troll:()=>{
      tone(466,.3,{type:"sawtooth",v:.13});
      tone(440,.3,{type:"sawtooth",at:.32,v:.13});
      tone(415,.3,{type:"sawtooth",at:.64,v:.13});
      tone(392,.8,{type:"sawtooth",at:.96,to:330,v:.13});
    },
    win:()=>{
      [60,64,67,72,76].forEach((n,i)=>tone(note(n),.22,{type:"triangle",at:i*.12,v:.2}));
      [72,76,79,84].forEach(n=>tone(note(n),.9,{at:.7,v:.1}));
    },
    gameover:()=>{
      [67,63,60,55].forEach((n,i)=>tone(note(n),.35,{type:"sawtooth",at:i*.28,v:.12}));
    },
    intro:()=>{
      noise(.6,{f:200,to:4000,q:2,v:.3});
      [60,64,67,72,67,72,76,84].forEach((n,i)=>tone(note(n),.28,{type:"triangle",at:.3+i*.16,v:.2}));
      tone(note(36),1.4,{v:.35,at:.3});
    },
    faaah:fah
  };

  function play(k,arg){
    if(muted)return null;
    const src=MK_CONFIG.files[k];
    if(src&&!bad[k]){
      try{
        const a=new Audio(src);
        a.addEventListener("error",()=>{bad[k]=1;try{S[k]()}catch(e){}});
        const p=a.play();if(p&&p.catch)p.catch(()=>{});
        return a;
      }catch(e){}
    }
    try{S[k]&&S[k](arg)}catch(e){}
    return null;
  }
  addEventListener("pointerdown",()=>ctx(),{once:true,capture:true});
  return{
    play,
    correct:k=>play("correct",k),
    toggle:()=>{muted=!muted;localStorage.setItem("mk_mute",muted?"1":"0");return muted},
    isMuted:()=>muted
  };
})();
