const questions = [

  {
  course: "calculus-2",
  section: "Integration Techniques",
  id: "integration-method-1",
  type: "randomized-multiple-choice",

  question:
    "Which integration technique is most appropriate for the following integral?",

  choices: [
    "u-Substitution",
    "Integration by Parts",
    "Trigonometric Substitution",
    "Partial Fractions"
  ],

  pool: [

    // u-SUBSTITUTION

    {
      content:
        "\\(\\displaystyle \\int 2x\\cos(x^2)\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient because the derivative of \\(x^2\\) appears as a factor in the integrand."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x}{(x^2+4)^3}\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient with \\(u=x^2+4\\), since its derivative is proportional to \\(x\\,dx\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{e^x}{1+e^x}\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient with \\(u=1+e^x\\), since \\(du=e^x\\,dx\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sec^2 x}{3+\\tan x}\\,dx\\)",
      correct: 0,
      explanation:
        "u-Substitution is most efficient with \\(u=3+\\tan x\\), since \\(du=\\sec^2x\\,dx\\)."
    },


    // INTEGRATION BY PARTS

    {
      content:
        "\\(\\displaystyle \\int xe^x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is most efficient because the integrand is a product of an algebraic function and an exponential function."
    },

    {
      content:
        "\\(\\displaystyle \\int x\\cos x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is most efficient because the integrand is a product of an algebraic and a trigonometric function."
    },

    {
      content:
        "\\(\\displaystyle \\int \\ln x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is appropriate by viewing the integrand as \\(1\\cdot\\ln x\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int x^2\\ln x\\,dx\\)",
      correct: 1,
      explanation:
        "Integration by Parts is most efficient because differentiating \\(\\ln x\\) simplifies it while \\(x^2\\) is easy to integrate."
    },


    // TRIGONOMETRIC SUBSTITUTION

    {
      content:
        "\\(\\displaystyle \\int \\sqrt{9-x^2}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the integrand contains the form \\(\\sqrt{a^2-x^2}\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{\\sqrt{x^2+4}}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the radical contains the form \\(x^2+a^2\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2}{\\sqrt{x^2+9}}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the radical contains the form \\(x^2+a^2\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sqrt{x^2-25}}{x}\\,dx\\)",
      correct: 2,
      explanation:
        "Trigonometric Substitution is appropriate because the radical contains the form \\(x^2-a^2\\)."
    },


    // PARTIAL FRACTIONS

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x^2-1}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is most efficient because the integrand is a proper rational function whose denominator factors as \\((x-1)(x+1)\\)."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x(x+2)}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is most efficient because the integrand is a proper rational function with distinct linear factors."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x+1}{x^2-4x+3}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is appropriate because the denominator factors into linear factors."
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2+1}{x(x-1)(x+1)}\\,dx\\)",
      correct: 3,
      explanation:
        "Partial Fractions is appropriate because this is a proper rational function whose denominator is already factored into linear factors."
    }

  ]
},,
  {
  course: "calculus-2",
  section: "Integration Techniques",
  id: "choose-integration-method",
  type: "sorting-bucket",

  question:
    "For each integral below, choose the most efficient integration method.",

  instructions:
    "You do not need to evaluate the integrals. Sort each integral into the box for the most efficient method.",

  bankTitle:
    "Integrals to Sort",

  buckets: [
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
      content:
        "\\(\\displaystyle \\int 2x\\cos(x^2)\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x}{(x^2+4)^3}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int e^{3x+1}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{e^x}{1+e^x}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sec^2 x}{3+\\tan x}\\,dx\\)",
      correctBucket:
        "u-Substitution"
    },


    // -------------------------
    // INTEGRATION BY PARTS
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int xe^x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int x\\cos x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int \\ln x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int x^2\\ln x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },

    {
      content:
        "\\(\\displaystyle \\int x\\arctan x\\,dx\\)",
      correctBucket:
        "Integration by Parts"
    },


    // -------------------------
    // TRIGONOMETRIC SUBSTITUTION
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int \\sqrt{9-x^2}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{\\sqrt{x^2+4}}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2}{\\sqrt{x^2+9}}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{(x^2+16)^{3/2}}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{\\sqrt{x^2-25}}{x}\\,dx\\)",
      correctBucket:
        "Trigonometric Substitution"
    },


    // -------------------------
    // PARTIAL FRACTIONS
    // -------------------------

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x^2-1}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{2x+3}{x^2+x-2}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{1}{x(x+2)}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x+1}{x^2-4x+3}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    },

    {
      content:
        "\\(\\displaystyle \\int \\frac{x^2+1}{x(x-1)(x+1)}\\,dx\\)",
      correctBucket:
        "Partial Fractions"
    }

  ]
},

  {
  course: "calculus-2",
  section: "Improper Integrals",
  id: "p-integral-1",
  type: "multiple-choice",

  question:
    "For which values of \\(p\\) does \\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^p}\\,dx\\) converge?",

  choices: [
    "\\(p>0\\)",
    "\\(p\\ge 1\\)",
    "\\(p>1\\)",
    "\\(p<1\\)"
  ],

  correct: 2,

  explanation:
    "The p-integral \\(\\displaystyle \\int\\limits_1^\\infty \\frac{1}{x^p}\\,dx\\) converges precisely when \\(p>1\\)."
},


  {
  course: "calculus-2",
  section: "Fundamental Theorem of Calculus",
  id: "ftc-1",
  type: "multiple-choice",

  question:
    "If \\(F(x)=\\displaystyle\\int\\limits_0^x f(t)\\,dt\\) and \\(f\\) is continuous, what is \\(F'(x)\\)?",

  choices: [
    "\\(f(0)\\)",
    "\\(f(x)\\)",
    "\\(\\displaystyle\\int\\limits_0^x f'(t)\\,dt\\)",
    "\\(x f(x)\\)"
  ],

  correct: 1,

  explanation:
    "By the Fundamental Theorem of Calculus Part I, \\(F'(x)=f(x)\\)."
}

];
