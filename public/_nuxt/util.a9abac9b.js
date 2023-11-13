const n=r=>new Promise((a,s)=>{let e=new FileReader;e.readAsDataURL(r),e.onload=t=>{a(t.target.result)}});export{n as f};
