const I18N={
tr:{nGames:"Oyunlar",nAbout:"Hakkımızda",nContact:"İletişim",nPrivacy:"Gizlilik",nDel:"Veri Silme",
heroT:"Gökyüzünde başlayan bir oyun stüdyosu.",heroP:"Zafzaf Software, mobil cihazlar için sade, hızlı ve eğlenceli oyunlar geliştirir.",heroB:"Oyunlarımız",heroB2:"İletişim",
gT:"Oyunlarımız",gS:"İlk oyunumuz yayında, diğerleri yolda.",live:"YAYINDA",
srP:"Dikey ekranlı, hızlı tempolu bir uçak savaş oyunu. Uçağını geliştir, düşman filolarını ve üsleri yok et, liderliğe yüksel.",
f1:"Farklı uçak sınıfları ve geliştirilebilir silahlar",f2:"Helikopterler, zeplinler, taretler ve topçu birlikleri",f3:"Pilot avatarları ve çoklu dil desteği",
dl:"Android – Çok Yakında",soonT:"Yakında",soonP:"Yeni oyun geliştiriliyor",
aT:"Hakkımızda",aP:"Zafzaf Software, oyun geliştirme tutkusuyla kurulmuş bağımsız bir stüdyodur. Amacımız; kolay öğrenilen, keyifle oynanan ve görsel olarak özenli mobil oyunlar üretmektir.",
cT:"İletişim",cP:"Soru, öneri ve iş birlikleri için bize yazın.",rights:"Tüm hakları saklıdır."},
en:{nGames:"Games",nAbout:"About",nContact:"Contact",nPrivacy:"Privacy",nDel:"Data Deletion",
heroT:"A game studio that takes off in the sky.",heroP:"Zafzaf Software builds simple, fast and fun games for mobile devices.",heroB:"Our Games",heroB2:"Contact",
gT:"Our Games",gS:"Our first game is live, more are on the way.",live:"LIVE",
srP:"A fast-paced, vertical air combat shooter. Upgrade your aircraft, destroy enemy squadrons and bases, and climb the leaderboard.",
f1:"Multiple aircraft classes and upgradeable weapons",f2:"Gunships, blimps, turrets and artillery units",f3:"Pilot avatars and multi-language support",
dl:"Android – Coming Soon",soonT:"Coming Soon",soonP:"New game in development",
aT:"About Us",aP:"Zafzaf Software is an independent studio founded with a passion for game development. Our goal is to create mobile games that are easy to learn, fun to play and visually polished.",
cT:"Contact",cP:"Write to us for questions, feedback and partnerships.",rights:"All rights reserved."}};
function setLang(l){
 localStorage.setItem("zz_lang",l);document.documentElement.lang=l;
 document.querySelectorAll("[data-i]").forEach(e=>{const v=I18N[l][e.dataset.i];if(v)e.textContent=v});
 document.querySelectorAll("[data-lang]").forEach(e=>e.hidden=e.dataset.lang!==l);
 document.querySelectorAll(".lang button").forEach(b=>b.classList.toggle("on",b.dataset.l===l));
}
document.addEventListener("DOMContentLoaded",()=>{
 const s=(navigator.language||"en").toLowerCase().startsWith("tr")?"tr":"en";
 setLang(localStorage.getItem("zz_lang")||s);
 document.querySelectorAll(".lang button").forEach(b=>b.onclick=()=>setLang(b.dataset.l));
 const y=document.getElementById("yr");if(y)y.textContent=new Date().getFullYear();
});
