const videos = [
  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "understanding-limits",
    section: "Limits and Continuity",
    topic: "Limits",
    title: "Understanding Limits",
    youtubeId: "",
    description:
      "An introduction to limits and how they describe the behaviour of a function near a point."
  },

  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "one-sided-limits",
    section: "Limits and Continuity",
    topic: "Limits",
    title: "One-Sided Limits",
    youtubeId: "",
    description:
      "Understanding left-hand and right-hand limits using graphical and numerical examples."
  },

  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "derivative-at-a-point",
    section: "Derivatives",
    topic: "Derivatives",
    title: "The Derivative at a Point",
    youtubeId: "",
    description:
      "Connecting the derivative to instantaneous rate of change and tangent lines."
  },

  {
    course: "calculus-1",
    courseName: "Calculus I",
    page: "calculus-1.html",
    id: "chain-rule",
    section: "Derivatives",
    topic: "Derivatives",
    title: "The Chain Rule",
    youtubeId: "",
    description:
      "Recognizing composite functions and applying the chain rule efficiently."
  },
 {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "riemann-sum-right-versus-left-endpoints",
  section: "Riemann Sums",
  topic: "Riemann Sums",
  title: "Riemann Sum: Right versus Left Endpoints",
  youtubeId: "GHoimsHIzdE",
  description:
    "A comparison of right-endpoint and left-endpoint Riemann sums and how the choice of sample points affects the approximation."
},
{
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "calculate-integral-using-riemann-sum",
  section: "Riemann Sums",
  topic: "Riemann Sums",
  title: "Calculating an Integral Using a Riemann Sum",
  youtubeId: "a1T61dUHs4s",
  description:
    "A worked example showing how a definite integral can be calculated using a Riemann sum."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "integral-as-net-area",
  section: "Definite Integrals",
  topic: "Definite Integrals",
  title: "Integral as a Net Area",
  youtubeId: "0miwGorLPS8",
  description:
    "An explanation of how a definite integral represents net signed area, accounting for regions above and below the x-axis."
},

  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "estimating-integral-bounded-function",
  section: "Definite Integrals",
  topic: "Definite Integrals",
  title: "Estimating an Integral for a Bounded Function",
  youtubeId: "kZtL3QqhR1M",
  description:
    "An example illustrating how to estimate the value of a definite integral when the function is bounded."
},

  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "average-value-of-a-function",
  section: "Definite Integrals",
  topic: "Definite Integrals",
  title: "Average Value of a Function",
  youtubeId: "m3Q9dr_yr3Y",
  description:
    "An introduction to the average value of a function on a closed interval and its connection to definite integrals."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "ftc-i-in-action",
  section: "Fundamental Theorem of Calculus",
  topic: "FTC I",
  title: "FTC I in Action",
  youtubeId: "y61RJm4BYLg",
  description:
    "A worked example showing how the Fundamental Theorem of Calculus Part I is applied in practice."
},

  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "ftc-1-chain-rule-calc-1",
  section: "Fundamental Theorem of Calculus",
  topic: "FTC I",
  title: "FTC I + Chain Rule + Calc I",
  youtubeId: "AmIWNoOl488",
  description:
    "A worked example connecting the Fundamental Theorem of Calculus Part I with the Chain Rule and key ideas from Calculus I."
},
  {
  course: "calculus-2",
  courseName: "Calculus II",
  page: "calculus-2.html",
  id: "ftc-ii-in-action",
  section: "Fundamental Theorem of Calculus",
  topic: "FTC II",
  title: "FTC II in Action",
  youtubeId: "G1nSApajp1M",
  description:
    "A worked example showing how the Fundamental Theorem of Calculus Part II is applied to evaluate definite integrals."
},
  
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "understanding-multivariable-functions",
  section: "Functions of Several Variables",
  topic: "Multivariable Functions",
  title: "Understanding Multivariable Functions",
  youtubeId: "i_O9CJ8RGls",
  description:
    "An introduction to multivariable functions and how to interpret functions of two variables."
},

{
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "level-curves",
  section: "Functions of Several Variables",
  topic: "Level Curves",
  title: "Level Curves",
  youtubeId: "7gMzQ7-qAys",
  description:
    "An introduction to level curves and how they help visualize functions of two variables."
},

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "cross-sections",
  section: "Functions of Several Variables",
  topic: "Cross Sections",
  title: "Cross Sections",
  youtubeId: "7V5kwhb2UuI",
  description:
    "An introduction to cross sections and how they help visualize surfaces defined by functions of two variables."
}, 
  
  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "direct-substitution-multivariable-limits",
  section: "Multivariable Limits",
  topic: "Limits",
  title: "Direct Substitution with Multivariable Limits",
  youtubeId: "6QYiXivUINc",
  description:
    "A worked example showing how to evaluate a multivariable limit using direct substitution when the function is continuous at the point."
}, 

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "multivariable-limit-dne",
  section: "Multivariable Limits",
  topic: "Limits",
  title: "Multivariable Limit DNE",
  youtubeId: "7poFr_0UwGo",
  description:
    "A worked example showing how to prove that a multivariable limit does not exist by comparing different paths of approach."
}, 

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "multivariable-limit-squeeze-theorem",
  section: "Multivariable Limits",
  topic: "Limits",
  title: "Multivariable Limit Using the Squeeze Theorem",
  youtubeId: "luXoC6ZqtFc",
  description:
    "A worked example showing how to prove that a multivariable limit exists using the Squeeze Theorem."
}, 

  {
  course: "calculus-3",
  courseName: "Calculus III",
  page: "calculus-3.html",
  id: "testing-limits-continuity-different-paths",
  section: "Multivariable Limits",
  topic: "Limits and Continuity",
  title: "Testing Limits and Continuity with Different Paths",
  youtubeId: "_PSV22Jckow",
  description:
    "A worked example using multiple paths to test whether a multivariable limit exists and to determine continuity at a point."
}
];
