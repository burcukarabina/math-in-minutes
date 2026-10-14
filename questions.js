const questions = [

  {
    course: "calculus-2",
    section: "Integration Techniques",
    id: "integration-method-1",
    type: "multiple-choice",

      question:
  "Which integration technique is most appropriate for \\(\\int x e^x\\,dx\\)?"

    choices: [
      "u-Substitution",
      "Integration by Parts",
      "Trigonometric Substitution",
      "Partial Fractions"
    ],

    correct: 1,

    explanation:
      "Integration by Parts is appropriate because the integrand is a product of an algebraic function and an exponential function."
  },
{
  course: "calculus-2",
  section: "Integration Techniques",
  id: "choose-integration-method",
  type: "integration-method-bucket",

  question:
    "For each integral below, choose the most efficient integration method.",

  methods: [
    "u-Substitution",
    "Integration by Parts",
    "Trigonometric Substitution",
    "Partial Fractions"
  ],

  numberToDraw: 6,

  pool: [

    // -------------------------
    // u-SUBSTITUTION
    // -------------------------

    {
      integral: "\\(\\displaystyle \\int 2x\\cos(x^2)\\,dx\\)",
      correct: "u-Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{x}{(x^2+4)^3}\\,dx\\)",
      correct: "u-Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int e^{3x+1}\\,dx\\)",
      correct: "u-Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{e^x}{1+e^x}\\,dx\\)",
      correct: "u-Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{\\sec^2 x}{3+\\tan x}\\,dx\\)",
      correct: "u-Substitution"
    },


    // -------------------------
    // INTEGRATION BY PARTS
    // -------------------------

    {
      integral: "\\(\\displaystyle \\int xe^x\\,dx\\)",
      correct: "Integration by Parts"
    },

    {
      integral: "\\(\\displaystyle \\int x\\cos x\\,dx\\)",
      correct: "Integration by Parts"
    },

    {
      integral: "\\(\\displaystyle \\int \\ln x\\,dx\\)",
      correct: "Integration by Parts"
    },

    {
      integral: "\\(\\displaystyle \\int x^2\\ln x\\,dx\\)",
      correct: "Integration by Parts"
    },

    {
      integral: "\\(\\displaystyle \\int x\\arctan x\\,dx\\)",
      correct: "Integration by Parts"
    },


    // -------------------------
    // TRIGONOMETRIC SUBSTITUTION
    // -------------------------

    {
      integral: "\\(\\displaystyle \\int \\sqrt{9-x^2}\\,dx\\)",
      correct: "Trigonometric Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{1}{\\sqrt{x^2+4}}\\,dx\\)",
      correct: "Trigonometric Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{x^2}{\\sqrt{x^2+9}}\\,dx\\)",
      correct: "Trigonometric Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{1}{(x^2+16)^{3/2}}\\,dx\\)",
      correct: "Trigonometric Substitution"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{\\sqrt{x^2-25}}{x}\\,dx\\)",
      correct: "Trigonometric Substitution"
    },


    // -------------------------
    // PARTIAL FRACTIONS
    // -------------------------

    {
      integral: "\\(\\displaystyle \\int \\frac{1}{x^2-1}\\,dx\\)",
      correct: "Partial Fractions"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{2x+3}{x^2+x-2}\\,dx\\)",
      correct: "Partial Fractions"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{1}{x(x+2)}\\,dx\\)",
      correct: "Partial Fractions"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{x+1}{x^2-4x+3}\\,dx\\)",
      correct: "Partial Fractions"
    },

    {
      integral: "\\(\\displaystyle \\int \\frac{x^2+1}{x(x-1)(x+1)}\\,dx\\)",
      correct: "Partial Fractions"
    }

  ]
},

  {
    course: "calculus-2",
    section: "Improper Integrals",
    id: "p-integral-1",
    type: "multiple-choice",

      question:
  "For which values of \\(p\\) does \\(\\displaystyle \\int_1^\\infty \\frac{1}{x^p}\\,dx\\) converge?"

   choices: [
  "\\(p>0\\)",
  "\\(p\\ge 1\\)",
  "\\(p>1\\)",
  "\\(p<1\\)"
]

    correct: 2,

    explanation:
      "The p-integral ∫₁^∞ 1/x^p dx converges precisely when p > 1."
  },


  {
  course: "calculus-2",
  section: "Fundamental Theorem of Calculus",
  id: "ftc-1",
  type: "multiple-choice",

  question:
    "If \\(F(x)=\\displaystyle\\int_0^x f(t)\\,dt\\) and \\(f\\) is continuous, what is \\(F'(x)\\)?",

  choices: [
    "\\(f(0)\\)",
    "\\(f(x)\\)",
    "\\(\\displaystyle\\int_0^x f'(t)\\,dt\\)",
    "\\(x f(x)\\)"
  ],

  correct: 1,

  explanation:
    "By the Fundamental Theorem of Calculus Part I, \\(F'(x)=f(x)\\)."
}

];
