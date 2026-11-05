const $=id=>document.getElementById(id);
const syllabus={
2:{topics:["Addition & Subtraction","Multiplication","Shapes & Patterns","Time & Money"],questions:[
["Addition & Subtraction","What is 46 + 27?",["63","73","83","72"],1,"46 + 27 = 73."],
["Multiplication","There are 4 bags with 5 marbles in each. How many marbles?",["9","15","20","25"],2,"4 groups of 5 make 20 marbles."],
["Time & Money","A toy costs ₹18. You pay ₹20. How much change should you get?",["₹1","₹2","₹3","₹4"],1,"₹20 − ₹18 = ₹2."],
["Shapes & Patterns","How many sides do 2 triangles have altogether?",["3","5","6","8"],2,"Each triangle has 3 sides. Together they have 6 sides."]]},
3:{topics:["Multiplication & Division","Fractions","Measurement","Patterns"],questions:[
["Multiplication & Division","What is 8 × 7?",["54","56","64","48"],1,"8 × 7 = 56."],
["Fractions","Which fraction means one half?",["1/3","2/3","1/2","1/4"],2,"One of two equal parts is 1/2."],
["Measurement","How many centimetres are in 2 metres?",["20","200","2000","100"],1,"1 metre = 100 centimetres, so 2 metres = 200 centimetres."],
["Patterns","Continue the pattern: 5, 10, 15, 20, __",["22","24","25","30"],2,"The pattern adds 5 each time."]]},
4:{topics:["Large Numbers","Factors & Multiples","Fractions","Perimeter"],questions:[
["Large Numbers","What is the place value of 7 in 47,326?",["7","70","700","7,000"],3,"The 7 is in the thousands place, so its place value is 7,000."],
["Factors & Multiples","Which number is a factor of both 18 and 24?",["5","6","7","8"],1,"6 divides both 18 and 24 exactly."],
["Fractions","What is 1/4 of 20?",["4","5","10","15"],1,"20 ÷ 4 = 5."],
["Perimeter","A square has side 6 cm. What is its perimeter?",["12 cm","18 cm","24 cm","36 cm"],2,"A square has four equal sides: 4 × 6 = 24 cm."]]},
5:{topics:["Fractions & Decimals","Area & Volume","Unit Conversion","Operations"],questions:[
["Fractions & Decimals","What is 0.75 as a fraction in simplest form?",["1/2","2/3","3/4","4/5"],2,"0.75 = 75/100 = 3/4."],
["Area & Volume","A rectangle is 8 cm long and 3 cm wide. Find its area.",["11 cm²","22 cm²","24 cm²","48 cm²"],2,"Area = length × width = 8 × 3 = 24 cm²."],
["Unit Conversion","How many grams are in 2.5 kilograms?",["250","2,050","2,500","25,000"],2,"1 kg = 1,000 g, so 2.5 kg = 2,500 g."],
["Operations","A number multiplied by 0 is 0. What is the number?",["Only 0","Only 1","Any number","No number"],2,"Every number multiplied by zero gives zero."]]},
6:{topics:["Integers","Fractions & Decimals","Ratio","Basic Algebra","Geometry"],questions:[
["Integers","What is −7 + 12?",["−19","−5","5","19"],2,"Moving 12 units right from −7 gives 5."],
["Fractions & Decimals","Calculate 3/4 + 1/4.",["1/2","1","1 1/4","2"],1,"The denominators match: (3 + 1)/4 = 4/4 = 1."],
["Ratio","The ratio 2:3 has a total of 25 parts. What is the value of one part?",["3","5","10","15"],1,"There are 2 + 3 = 5 equal parts. 25 ÷ 5 = 5."],
["Basic Algebra","If x + 9 = 16, find x.",["5","6","7","8"],2,"Subtract 9 from both sides: x = 7."]]},
7:{topics:["Rational Numbers","Linear Equations","Percentages","Lines & Angles"],questions:[
["Rational Numbers","What is −3/5 + 1/5?",["−4/5","−2/5","2/5","4/5"],1,"With equal denominators, add the numerators: −2/5."],
["Linear Equations","Solve 3x = 27.",["6","8","9","12"],2,"Divide both sides by 3: x = 9."],
["Percentages","What is 20% of 150?",["20","25","30","35"],2,"20/100 × 150 = 30."],
["Lines & Angles","Two angles on a straight line add up to:",["90°","180°","270°","360°"],1,"Angles on a straight line form 180°."]]},
8:{topics:["Squares & Cubes","Exponents","Algebra","Mensuration","Data Handling"],questions:[
["Squares & Cubes","What is the square root of 196?",["12","13","14","16"],2,"14 × 14 = 196."],
["Exponents","Simplify 2³ × 2².",["2⁵","2⁶","4⁵","2¹"],0,"For the same base, add exponents: 2^(3+2) = 2⁵."],
["Algebra","Expand 3(x + 4).",["3x + 4","3x + 7","3x + 12","x + 12"],2,"Multiply 3 by each term: 3x + 12."],
["Mensuration","Find the area of a circle with radius 7 cm. Use π = 22/7.",["44 cm²","144 cm²","154 cm²","308 cm²"],2,"Area = πr² = 22/7 × 7 × 7 = 154 cm²."]]},
9:{topics:["Number Systems","Polynomials","Coordinate Geometry","Geometry","Statistics"],questions:[
["Number Systems","Which number is irrational?",["0.25","√2","3/4","0.5"],1,"√2 cannot be expressed as a ratio of two integers."],
["Polynomials","What is the degree of 5x³ + 2x² − 7?",["1","2","3","5"],2,"The highest power of x is 3."],
["Coordinate Geometry","The point (0, −4) lies on which axis?",["X-axis","Y-axis","Both axes","Neither axis"],1,"Any point with x-coordinate 0 lies on the Y-axis."],
["Statistics","Find the mean of 2, 4, 6 and 8.",["4","5","6","7"],1,"Mean = (2 + 4 + 6 + 8) ÷ 4 = 5."]]},
10:{topics:["Quadratic Equations","Trigonometry","Pair of Linear Equations","Geometry","Probability"],questions:[
["Quadratic Equations","The roots of x² − 5x + 6 = 0 are:",["1 and 6","2 and 3","−2 and −3","3 and 5"],1,"(x − 2)(x − 3) = 0, so the roots are 2 and 3."],
["Trigonometry","What is sin 30°?",["0","1/2","√3/2","1"],1,"The standard trigonometric value of sin 30° is 1/2."],
["Pair of Linear Equations","If x + y = 10 and x − y = 2, find x.",["4","5","6","8"],2,"Adding the equations gives 2x = 12, so x = 6."],
["Probability","A fair die is rolled. What is the probability of getting an even number?",["1/6","1/3","1/2","2/3"],2,"The even outcomes are 2, 4 and 6: 3 out of 6 = 1/2."]]},
11:{topics:["Sets & Functions","Trigonometry","Sequences & Series","Permutations","Limits"],questions:[
["Sets & Functions","If A = {1,2,3} and B = {3,4}, what is A ∩ B?",["{1,2}","{3}","{3,4}","{1,2,3,4}"],1,"The intersection contains elements common to both sets: {3}."],
["Trigonometry","What is cos 60°?",["0","1/2","√3/2","1"],1,"The standard value of cos 60° is 1/2."],
["Sequences & Series","Find the 10th term of the AP 3, 7, 11, ...",["35","37","39","43"],2,"a₁₀ = 3 + 9 × 4 = 39."],
["Permutations","How many ways can 3 different books be arranged in a row?",["3","6","9","12"],1,"3! = 3 × 2 × 1 = 6 arrangements."]]},
12:{topics:["Calculus","Matrices & Determinants","Vectors & 3D Geometry","Probability","Integrals"],questions:[
["Calculus","Differentiate f(x) = x³.",["x²","2x","3x²","3x"],2,"Using the power rule, d(x³)/dx = 3x²."],
["Matrices & Determinants","Find the determinant of [[2,1],[3,4]].",["5","8","11","−5"],0,"The determinant is (2 × 4) − (1 × 3) = 5."],
["Vectors & 3D Geometry","What is the magnitude of vector (3, 4, 0)?",["3","4","5","7"],2,"Magnitude = √(3² + 4² + 0²) = 5."],
["Probability","Two fair coins are tossed. What is the probability of getting exactly one head?",["1/4","1/2","3/4","1"],1,"The outcomes are HH, HT, TH, TT. Two of four have exactly one head, so 1/2."],
["Integrals","Evaluate ∫ 2x dx.",["x² + C","2x² + C","x + C","2 + C"],0,"The antiderivative of 2x is x² + C."]]}
};
const trollQuestions=[
{t:"A shopkeeper has 10 pencils. All except 3 are sold. How many are left?",a:["3","7","10","0"],c:0,e:"All except 3 were sold, so 3 pencils remain."},
{t:"Which is greater: 0.5 or 0.50?",a:["0.5","0.50","They are equal","Cannot compare"],c:2,e:"A zero at the end of a decimal does not change its value."},
{t:"You have 5 chocolates and take 2. How many chocolates did you take?",a:["2","3","5","7"],c:0,e:"The question asks how many you took: 2."},
{t:"A number is multiplied by itself and gives 25. Which answer is possible?",a:["Only 5","Only −5","5 or −5","25 only"],c:2,e:"Both 5 × 5 and (−5) × (−5) equal 25."},
{t:"How many times can you take 1 away from 10?",a:["10 times","9 times","Once","11 times"],c:2,e:"After the first time, you are taking 1 away from 9, not 10."},
{t:"A dozen eggs costs ₹60. How much do 6 eggs cost at the same rate?",a:["₹20","₹25","₹30","₹40"],c:2,e:"6 is half of 12, so the cost is half of ₹60: ₹30."},
{t:"A class has 20 students. Half are absent. How many students are present?",a:["5","10","15","20"],c:1,e:"Half of 20 are absent, so the other 10 are present."},
{t:"What is 100 divided by 0?",a:["0","100","1","Undefined"],c:3,e:"Division by zero is undefined; no number multiplied by zero gives 100."},
{t:"A square has 4 corners. How many corners do 3 separate squares have?",a:["7","10","12","16"],c:2,e:"Each separate square has 4 corners: 3 × 4 = 12."},
{t:"Which is the smallest?",a:["0.09","0.9","0.19","0.109"],c:0,e:"0.09 is nine hundredths, smaller than the other listed decimals."},
{t:"If 2 workers make 2 toys in 2 hours, how many toys do 4 workers make in 2 hours at the same rate?",a:["2","4","6","8"],c:3,e:"Each worker makes one toy in 2 hours, so 4 workers make 4 toys."}
];
let chosenClass=null,chosenTopic="Mixed syllabus",session=[],index=0,selected=-1,correctCount=0,earned=0,bestRun=0,run=0,answered=false,sound=true;
let data=JSON.parse(localStorage.getItem("mathking_data")||'{"xp":0,"completed":0,"best":0}');
function save(){localStorage.setItem("mathking_data",JSON.stringify(data));updateStats()}
function updateStats(){$("xp").textContent=String(data.xp).padStart(4,"0");$("completed").textContent=String(data.completed).padStart(2,"0");$("best").textContent=String(data.best).padStart(2,"0");$("rank").textContent=data.xp>=1000?"MATH KING":data.xp>=500?"MASTER":data.xp>=200?"PRO":data.xp>=50?"THINKER":"BEGINNER"}
function buildClasses(){for(let n=2;n<=12;n++){let b=document.createElement("button");b.className="class-card";b.innerHTML=`<strong>0${n<10?n:n}</strong><small>CLASS ${n}</small>`;b.addEventListener("click",()=>selectClass(n));$("classGrid").append(b)}}
function selectClass(n){chosenClass=n;chosenTopic="Mixed syllabus";document.querySelectorAll(".class-card").forEach((b,i)=>b.classList.toggle("active",i===n-2));$("classBadge").textContent=`CLASS ${n}`;$("selectedClassLabel").textContent=`CLASS ${n} SYLLABUS`;renderTopics();$("startQuiz").disabled=false}
function renderTopics(){let row=$("topicRow");row.innerHTML="";let topics=["Mixed syllabus",...syllabus[chosenClass].topics,"Troll challenge"];topics.forEach(t=>{let b=document.createElement("button");b.className="topic-chip"+(t===chosenTopic?" active":"");b.textContent=t;b.onclick=()=>{chosenTopic=t;renderTopics()};row.append(b)})}
function makeSession(){let base=syllabus[chosenClass].questions;let qs=chosenTopic==="Mixed syllabus"?base.slice():chosenTopic==="Troll challenge"?[]:base.filter(q=>q[0]===chosenTopic);if(chosenTopic==="Troll challenge")qs=trollQuestions.map(q=>["TROLL CHALLENGE",q.t,q.a,q.c,q.e]);else{let trolls=trollQuestions.slice((chosenClass*3)%trollQuestions.length,((chosenClass*3)%trollQuestions.length)+2);if(trolls.length<2)trolls=trolls.concat(trollQuestions.slice(0,2-trolls.length));trolls.forEach(q=>qs.push(["BRAIN TEASER",q.t,q.a,q.c,q.e]))}return qs.sort(()=>Math.random()-.5).slice(0,Math.min(6,qs.length))}
function startQuiz(){if(!chosenClass)return;session=makeSession();index=0;correctCount=0;earned=0;run=0;bestRun=0;$("quizOverlay").classList.remove("hidden");$("resultView").classList.add("hidden");$("questionView").classList.remove("hidden");renderQuestion()}
function renderQuestion(){answered=false;selected=-1;let q=session[index];$("progress").style.width=(index/session.length*100)+"%";$("quizMode").textContent=`CLASS ${chosenClass} / ${chosenTopic.toUpperCase()}`;$("questionNumber").textContent=`${String(index+1).padStart(2,"0")} / ${String(session.length).padStart(2,"0")}`;$("topicTag").textContent=q[0].toUpperCase();$("question").textContent=q[1];$("questionSub").textContent="Choose the best answer.";let box=$("options");box.innerHTML="";q[2].forEach((a,i)=>{let b=document.createElement("button");b.className="option";let key=document.createElement("span");key.className="key";key.textContent=String.fromCharCode(65+i);let text=document.createElement("span");text.textContent=a;b.append(key,text);b.onclick=()=>{if(answered)return;selected=i;box.querySelectorAll(".option").forEach(x=>x.classList.remove("selected"));b.classList.add("selected");$("submit").disabled=false};box.append(b)});$("submit").disabled=true;$("submit").textContent="SUBMIT ANSWER ↗";$("quizMessage").textContent="SELECT ONE ANSWER"}
function submit(){if(selected<0||answered)return;answered=true;let q=session[index],ok=selected===q[3];if(ok){correctCount++;run++;bestRun=Math.max(bestRun,run);earned+=20}else run=0;let buttons=$("options").querySelectorAll(".option");buttons.forEach((b,i)=>{b.disabled=true;if(i===q[3])b.classList.add("correct");if(i===selected&&i!==q[3])b.classList.add("wrong")});let exp=document.createElement("p");exp.className="explanation";exp.textContent=(ok?"That’s right. ":"Not quite. ")+q[4];$("options").append(exp);$("quizMessage").textContent=ok?"POINTS EARNED: +20":"KEEP PRACTISING";$("submit").disabled=false;$("submit").textContent=index===session.length-1?"FINISH QUIZ ↗":"NEXT QUESTION ↗"}
function next(){if(!answered){submit();return}index++;if(index>=session.length){endQuiz();return}renderQuestion()}
function endQuiz(){data.xp+=earned;data.completed++;data.best=Math.max(data.best,bestRun);save();$("questionView").classList.add("hidden");$("resultView").classList.remove("hidden");$("progress").style.width="100%";$("resultXP").textContent="+"+String(earned).padStart(3,"0");$("resultTitle").textContent=correctCount===session.length?"OUTSTANDING!":correctCount>=Math.ceil(session.length/2)?"WELL PLAYED!":"KEEP GOING!";$("resultSummary").textContent=`You answered ${correctCount} out of ${session.length} questions correctly in Class ${chosenClass}.`; }
function closeQuiz(){ $("quizOverlay").classList.add("hidden");$("credits").classList.remove("hidden")}
function showToast(s){$("toast").textContent=s;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),1800)}
buildClasses();updateStats();
$("chooseClass").onclick=()=>$("classSection").scrollIntoView({behavior:"smooth"});
$("startQuiz").onclick=startQuiz;$("submit").onclick=next;$("closeQuiz").onclick=closeQuiz;
$("finish").onclick=()=>{$("quizOverlay").classList.add("hidden");$("credits").classList.remove("hidden")};
$("creditsHome").onclick=()=>{$("credits").classList.add("hidden");$("classSection").scrollIntoView({behavior:"smooth"})};
$("soundBtn").onclick=()=>{sound=!sound;$("soundLabel").textContent=sound?"SOUND ON":"SOUND OFF";showToast(sound?"Sound enabled":"Sound muted")};
